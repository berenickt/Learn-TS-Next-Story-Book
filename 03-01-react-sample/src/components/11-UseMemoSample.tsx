import React, { useState, useMemo } from 'react'

/** 📌 useMemo : 값을 메모이제이션
 * useMemo(값을생성하는함수, []) 형태
 *
 * useCallback과 마찬가지로 useMemo는 컴포넌트를 그릴 떄, 의존 배열을 비교합니다.
 * 의존 배열의 값이 이전에 그릴 떄와 다른 경우에는 함수를 실행하고, 그 결과를 새로운 값으로 메모에 저장합니다.
 *
 * 만약 의존 배열의 값이 모두 같으면, 함수를 실행하지 않고, 메모된 값을 반환합니다.
 */
const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  /**
   * 현재의 입력값을 items에 추가한다. 이때, 새로운 배열을 작성해서 저장한다.
   */
  const onClickButton = () => {
    setItems(prevItems => [...prevItems, text])
    setText('')
  }

  /**
   * numberOfCharacters1은 다시 그릴 때마다 items.reduce를 실행해서 결과를 얻는다
   */
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  /**
   * numberOfCharacters2는 useMemo를 사용해,
   * items가 업데이트 되는 시점에 items.reduce를 실행해서 결과를 얻는다
   */
  const numberOfCharacters2 = useMemo(() => {
    // 두 번째 인수의 배열 안에 items가 있으므로, items가 새롭게 됐을 때만 함수를 실행해서 메모를 업데이트
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}

export default UseMemoSample
