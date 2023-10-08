import { memo, useState } from 'react'

/** 📌 useCallback과 useMemo - 메모이제이션 훅
 * 값이나 함수를 유지하고, 불필요한 자식요소의 렌더링이나 계산을 억제하기 위해 사용합니다.
 * 이 훅들을 설명하기 전, 우선 리액트의 화면을 다시 그리는 시점과 메모이제이션 컴포넌트에 관해 설명합니다.
 *
 * 리액트의 컴포넌트는 다음과 같은 시점에 화면에 다시 그려집니다.
 * - props나 내부 상태가 업데이트 됐을 떄
 * - 컴포넌틍 안에서 참조하는 Context 값이 업데이트됐을 떄
 * - 부모 컴포넌트가 다시 그려졌을 떄
 *
 * 부모 컴포넌트가 다시 그려지면, 무조건 자식 컴포넌트는 다시 그려집니다.
 * 그렇기에 상위 컴포넌트에 화면 다시 그리기가 발새아면, 그 이하의 모든 컴포넌트에 화면 다시 그리기가 발생합니다.
 * 이 화면 다시 그리기가 전파되는 것을 막기 위해, 메모이제이션 컴포넌트를 사용합니다.
 *
 * 메모이제이션 컴포넌트는 부모 컴포넌트가 화면 다시 그리기가 발생하거나,
 * props나 context 값이 바뀌지 않은 경우에는 부모 컴포넌트에 의한 화면 다시 그리기가 발생하지 않습니다.
 *
 * 💡 메모이제이션 컴포넌트는 함수 컴포넌트를 memo 함수로 감싸서 작성합니다.
 *
 * 👇 아래는 부모 컴포넌트에서 카운트를 구현하고,
 * 자식 컴포넌트의 Fizz와 Buzz에 각각 플래그를 전달합니다.
 * 콘솔을 확인해보면,
 * 카운트가 증가할 떄마다, Parent와 Fizz가 화면에 다시 그려집니다.
 * 반면, Buzz는 isBuzz가 달리질 때만 화면에 다시 그려집니다.
 *
 * 하지만, 메모이제이션 컴포넌트에 함수나 객체를 전달하면, 다시 부모의 화면이 다시 그려질 떄,
 * 컴포넌트 역시 다시 그려집니다.
 * 이는 화면을 다시 그릴 떄마다, Parent에 새로 만들어진 함수가 Buzz에 전달되어 다시 그려지는 겁니다.
 * 화면 다시 그리기를 억제하려면, 같은 함수를 전달해야 합니다.
 */

type FizzProps = {
  isFizz: boolean
}

/** 📌 Fizz는 보통 함수 컴포넌트
 * isFizz가 true이면 Fizz라고 표시하고, 그 이외에는 아무것도 표시하지 않는다
 * isFizz의 변화에 관계없이, 부모가 다시 그려지면 Fizz도 다시 그려진다
 */
const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}

/** 📌 Buzz는 메모이제이션한 함수 컴포넌트
 * isBuzz가 true이면 Buzz라 표시하고, 그 이외에는 아무것도 표시하지 않는다
 * 부모 컴포넌트가 다시 그려져도, isBuzz가 바뀌지 않는 한 Buzz는 다시 그려지지 않는다
 */
const Buzz = memo<BuzzProps>(props => {
  const { isBuzz } = props
  console.log(`Buzz가 다시 그려졌습니다. izBuzz=${isBuzz}`)
  return <span>{isBuzz ? 'Buzz' : ''}</span>
})

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log(`Parent가 다시 그려졌습니다. count=${count}`)

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <p>{`편재 카운트: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  )
}

export default Parent
