import { useReducer } from 'react'

/** 📌 useReducer
 * 상태를 다루기 위한 또 하나의 훅
 * 복잡한 상태 전이를 간단하게 기술 가능
 * 또한, 배열, 객체 등의 여러 데이터를 모은 것을 상태로 다루는 경우에 많이 사용
 * useState보다 복잡한 용도에 적합
 *
 * useReducer에서는 `업데이트함수(dispatch)`에 `action`이라 불리는 데이터를 전달합니다.
 * `현재 상태`와 `action`을 전달하면, 다음 상태를 반환하는 `reducer`라는 함수를 사용합니다.
 * dispatch함수에 action을 전달함으로써 상태를 업데이트할 수 있습니다.
 * reducer가 현재 상태와 action을 기반으로 다음 상태를 결정합니다.
 *
 * ```
 * reducer(현재상태, action) {
 *  return 다음 상태
 * }
 * const [현재상태, dispatch] = useReducer(reducer, reducer에전달되는초기상태)
 * ```
 */

// reducer가 받는 action의 타입을 정의한다
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 현재 상태와 action에 기반해 다음 상태를 반환한다
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* dispatch 함수에 action을 전달하고, 상태를 업데이트 한다 */}
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>x2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default Counter
