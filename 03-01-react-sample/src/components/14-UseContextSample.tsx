import React, { useContext } from 'react'

/*** 📌 (2) Context.Consumer
 * Context.Consumer라는 컴포넌트를 추가해,
 * 그 자식 요소로 함수를 지정하면 인수로부터 데이터를 참조 가능
 *
 * Provider는 중첩 가능하며, 중첩 시 Consumer는 가장 가까운 Provider의 데이터를 얻습니다.
 * 또한, useContext 훅을 사용하면, Consumer를 사용하지 않고도 Context의 데이터를 참조 가능
 * 👇 Title 컴포넌트 안에서 Context의 값을 참조
 */
type User = {
  id: number
  name: string
}

// 사용자 데이터를 저장하는 Context를 작성한다
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
  // useContext에 Context를 전달함으로써, Context로부터 값을 얻는다
  const user = useContext(UserContext)

  return user !== null ? <p>Hello, {user.name}</p> : null
}

const Child = () => {
  const now = new Date()

  return (
    <div>
      <p>Current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  )
}

const Parent = () => {
  const user: User = {
    id: 1,
    name: 'Alice',
  }
  return (
    // Context에 값을 전달한다
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  )
}

export default Parent
