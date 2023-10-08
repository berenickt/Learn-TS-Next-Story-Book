import { useState } from 'react'

/** 📌 useState와 useReducer 상태 훅
 * 둘 다 상태를 다루기 위한 훅이다.
 * 이 훅들을 사요하면 컴포넌트 내부 상태를 가지며, 해당 상태의 변화에 따라 표시를 변경 가능
 */

/** 📌 useState
 * 이름 그대로 상태(state)를 다루기 위한 훅
 * `const [상태, 업데이트함수] = useState(초기상태)` 형태로 작성
 *
 * `업데이트함수`를 호출하면 상태가 바뀌고, 훅이 있는 컴포넌트는 다시 그립니다.
 * 아래 예제에서 setCount가 호출되면, 화면 다시 그리기가 발생하고, 표시도 달라집니다.
 * `업데이트함수`의 인수인 prevCount에는 현재 카운트가 들어갑니다.
 */

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  // 계정을 유지하는 하나의 상태를 useState()로 선언한다. 인수에는 초깃값을 지정한다.
  // count는 현재 상태, setCount는 상태를 업데이트하는 함수다。
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* setCount를 호출해서 상태를 업데이트한다 */}
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
