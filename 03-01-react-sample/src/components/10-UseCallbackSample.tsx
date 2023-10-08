import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

/**
 * DecrementButton은 보통 함수 컴포넌트로 버튼을 표시한다
 */
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log('DecrementButton이 다시 그려졌습니다')
  return <button onClick={onClick}>Decrement</button>
}

/**
 * IncrementButton은 메모이제이션한 함수 컴포넌트로 버튼을 표시한다
 */
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('IncrementButton이 다시 그려졌습니다')
  return <button onClick={onClick}>Increment</button>
})

/**
 * DoubleButtondms 메모이제이션한 함수 컴포넌트로 버튼을 표시한다
 */
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('DoubleButton이 다시 그려졌습니다')
  return <button onClick={onClick}>Double</button>
})

const Parent = () => {
  const [count, setCount] = useState(0)

  const decrement = () => setCount(c => c - 1)
  const increment = () => setCount(c => c + 1)

  /** 📌 useCallback : 함수를 메모이제이션 하기 위한 훅
   * useCallback을 사용해 함수를 메모이제이션한다
   *
   * `useCallback(함수, [])` 형태
   * useCallback은 의존배열의 값을 비교합니다.
   * 의존 배열 안의 값이 각각 이전 화면 때와 같을 때는 메모이제이션된 함수를 반환한다.
   * 만약 다르다면, 현재의 첫 번쨰 인수의 함수를 메모에 저장합니다.
   * 그리므로 의존 배열안의 값에 다른 것이 있으면, 새로운 함수를 반환합니다.
   *
   * 이번에는 의존성 배열이 비어있으므로, 첫번째 그려질 떄, 생성된 함수를 항상 반환합니다.
   * 그 결과 DoubleButton에 전달된 함수도 언제나 같으므로,
   * 부모가 다시 그려지더라도 DoubleButton은 다시 그려지지 않습니다.
   */
  const double = useCallback(() => {
    setCount(c => c * 2)
    // 두 번째 인수는 빈 배열이므로, useCallback은 항상 같은 함수를 반환한다
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      {/* 컴포넌트에 함수를 전달한다 */}
      <DecrementButton onClick={decrement} />
      {/* 메모이제이션한 컴포넌트에 함수를 전달한다 */}
      <IncrementButton onClick={increment} />
      {/* 메모이제이션한 컴포넌트에 메모이제이션한 함수를 전달한다 */}
      <DoubleButton onClick={double} />
    </div>
  )
}

export default Parent
