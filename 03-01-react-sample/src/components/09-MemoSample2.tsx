import { memo, useState } from 'react'

/** Fizz는 보통 함수 컴포넌트
 * isFizz가 true이면 Fizz라고 표시하고, 그 이외에는 아무것도 표시하지 않는다
 * isFizz의 변화에 관계없이, 부모가 다시 그려지면 Fizz도 다시 그려진다
 */
type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizz가 다시 그려졌습니다. isFizz=${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

/** Buzz는 메모이제이션한 함수 컴포넌트
 * isBuzz가 true이면 Buzz라 표시하고, 그 이외에는 아무것도 표시하지 않는다
 * 부모 컴포넌트가 다시 그려져도, isBuzz가 바뀌지 않는 한 Buzz는 다시 그려지지 않는다
 */
type BuzzProps = {
  isBuzz: boolean
  // props에 onClick을 추가
  onClick: () => void
}

/** 📌 memo
 * 하지만, 메모이제이션 컴포넌트에 함수나 객체를 전달하면, 다시 부모의 화면이 다시 그려질 떄,
 * 컴포넌트 역시 다시 그려집니다.
 * 이는 화면을 다시 그릴 떄마다, Parent에 새로 만들어진 함수가 Buzz에 전달되어 다시 그려지는 겁니다.
 * 화면 다시 그리기를 억제하려면, 같은 함수를 전달해야 합니다.
 * 그래서 함수를 메모이제이션하려면 useCallback을 사용합니다.
 */
const Buzz = memo<BuzzProps>(props => {
  const { isBuzz, onClick } = props
  console.log(`Buzz가 다시 그려졌습니다. izBuzz=${isBuzz}`)
  return <span onClick={onClick}>{isBuzz ? 'Buzz' : ''}</span>
})

const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  // 이 함수는 Parent의 다시 그려질 때마다 작성된다
  const onBuzzClick = () => {
    console.log(`Buzz가 클릭되었습니다. isBuzz=${isBuzz}`)
  }
  console.log(`Parent가 다시 그려졌습니다. count=${count}`)

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
      <p>{`현재 카운트: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick} />
      </p>
    </div>
  )
}

export default Parent
