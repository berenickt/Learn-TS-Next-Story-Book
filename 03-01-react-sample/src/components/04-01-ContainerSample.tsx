/** 📌 Container의 props 타입을 정의한다
 * React의 props에 애너테이션을 하지 않고, 컴포넌트에 FC 혹은 VFC를 지정하기도 합니다.
 *
 * 정의한 컴포넌트를 대입하는 변수에 FC, VFC 등의 타입을 지정합니다.
 * FC는 children이 props 안에서 암묵적으로 정의되어 있지만, VFC는 그렇지 않습니다.
 * 그래서 children을 갖는 컴포넌트를 FC, 갖지 않는 컴포넌트에는 VFC라는 타입을 붙였습니다.
 * 하지만 리액트 18부터는 VFC를 권장하지 않고, FC에서는 children이 삭제됐습니다. 💡
 * 따라서 모든 컴포넌트는 FC 타입을 지정하고, children을 사용할 떄는 props 타입 안에서 지정해야 합니다.
 */
type ContainerProps = {
  title: string
  // React17 이전에는 FC를 지정한 경우 children이 props에 암묵적으로 포함됩니다.
  // 👇 React 18 이후의 컴포넌트에 대한 타입 지정 방법
  // VFC가 비추천되어 FC에서 암묵적인 children의 정의가 사라졌다. 💡
  children: React.ReactNode
  /** 하지만 FC도 다음과 같은 이유로 잘 사용되지 않는 경향이 있습니다.
   * FC에서 암묵적으로 정의된 displayName이나 defaultProps는 최근 사용하지 않거나, 권장안됨
   * props의 타입 정의에 제너릭을 사용하는 경우, FC에 적절한 타입을 지정할 수 없다.
   * 따라서 현재는 일반적으로 props에 타입을 명시하는 방법을 사용합니다.
   * const Container = (props : ContainerProps) => {...}
   */
}

/** React 컴포넌트의 타입 붙이기에 관해서는 아래를 참조한다
 * @see https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/
 */
const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* props의 children을 삽입하면, 이 컴포넌트의 시작 태그와 종료 태그로 감싼 요소를 표시한다 */}
      <div>{children}</div>
    </div>
  )
}

/**
 * React 17 이전 버전에서는 children을 사용하지 않는 경우 VFC를 지정한다. (💡 children이 props 안에서 정의X)
 * const Parent = React.VFC = () => {...}
 */
const Parent = (): JSX.Element => {
  return (
    // Container를 사용할 때, 다른 요소를 감싸서 사용한다
    <Container title="Hello">
      <p>이 부분은 배경색으로 둘러 싸여 있습니다.</p>
    </Container>
  )
}

export default Parent
