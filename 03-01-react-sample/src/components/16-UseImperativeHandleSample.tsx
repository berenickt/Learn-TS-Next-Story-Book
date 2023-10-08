import React, { useState, useRef, useImperativeHandle } from 'react'

/** 📌 useImperativeHandle
 * 컴포넌트에 ref가 전달될 때, 부모의 ref에 대입될 값을 설정할 떄 사용하는 훅
 *
 * Child는 forwardRef()로 감싸져 있는데,
 * 이는 자식 컴포넌트에서 부모 컴포넌트로부터 전달된 ref를 참조하기 위해 사용합니다
 * 그리고 자식 컴포넌트에서 useImperativeHandle를 호출합니다
 */
const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<string | null>(null)

  /** 📌 `useImperativeHandle(부모로부터전달된ref, 객체가반환하는함수, [])` 형태로 사용
   * 이 함수의 반환값이 부모의 ref에 설정됨
   * useImperativeHandle에서 부모의 ref로부터 참조할 수 있는 값을 지정
   *
   * cf. 3번째 인수에 의존성 배열을 전달할 수 있으며,
   * useMemo와 마찬가지로 특정 데이터가 변화할 떄만 객체를 업데이트할 수 있음
   *
   * showMessage() 정의하고, 이 함수가 호출되면 Child의 messenge가 업데이트되어,
   * Child 안에 메시지가 출력됨
   *
   * Parent에서는 ref 객체가 만들고 Child의 속성으로서 전달합니다
   * 그리고 버튼이 클릭되면 ref를 경유해 showMessage()을 호출합니다
   */
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, it's ${date.toLocaleString()} now`
      setMessage(message)
    },
  }))

  return <div>{message !== null ? <p>{message}</p> : null}</div>
})

const Parent = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)

  /**
   * 자녀의 useImperativeHandle에서 지정한 값을 참조
   */
  const onClick = () => {
    if (childRef.current !== null) {
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button onClick={onClick}>Show Message</button>
      <Child ref={childRef} />
    </div>
  )
}

export default Parent
