import React from 'react'

/** 💡 Context(콘텍스트)
 * Context는 2개의 컴포넌트를 사용합니다.
 * - Provier에 데이터를 전달,
 * - Consumer가 데이터를 받습니다.
 */

/*** 📌 (1) createContext
 * Title을 전달하기 위한 Context를 작성한다
 * 첫 번쨰 인수로 지정한 값은 Context가 전달하는 데이터의 디폴트 값
 */
const TitleContext = React.createContext('')

/*** 📌 (2) Context.Consumer
 * Context.Consumer라는 컴포넌트를 추가해,
 * 그 자식 요소로 함수를 지정하면 인수로부터 데이터를 참조 가능
 *
 * Provider는 중첩 가능하며, 중첩 시 Consumer는 가장 가까운 Provider의 데이터를 얻습니다.
 * 또한, useContext 훅을 사용하면, Consumer를 사용하지 않고도 Context의 데이터를 참조 가능
 * 👇 Title 컴포넌트 안에서 Context의 값을 참조
 */
const Title = () => {
  // Consumer를 사용해, Context의 값을 참조한다
  return (
    <TitleContext.Consumer>
      {/* Consumer 바로 아래 함수를 두고, Context 값을 참조한다 */}
      {title => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      {/* Header로부터 Title로는 아무 데이터도 전달하지 않는다 */}
      <Title />
    </div>
  )
}

/*** 📌 (2) Context.Provider
 * Context.Provider라는 컴포넌트의 props인 value에 데이터를 전달한다.
 * 👇 Page 컴포넌트 안에서 Context에 값을 전달한다
 */
const Page = () => {
  const title = 'React Book'

  // Provider를 사용해 Context에 값을 설정한다.
  // Provider 아래의 컴포넌트로부터 값을 참조할 수 있다.
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
