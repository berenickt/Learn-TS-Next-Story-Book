import { useState } from 'react'
import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
// 새로운 action을 임포트
import { action } from '@storybook/addon-actions'

/*** 📌 (3) 임의의 Action을 사용하는 스토리
 * 임의의 데이터를 Actiond에 표시하고 싶을 떄는 메타데이터로 정의하는 대신,
 * @styorybook/addon-actions의 actions를 절차적으로 호출해 출력 가능
 *
 * 이 경우 import한 actions에 액션의 이름을 전달해 호출해 Action을 트리거하는 함수를 작성
 * 그 뒤, 콜백 내부 등에서 이 함수에 임의의 데이터를 전달해 호출하면 스토리북의 Action에 출력 가능
 */
export default {
  title: 'StyledButton (3) - 동적으로 action을 호출한다',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

// **** increment라는 이름으로 action을 출력하기 위한 함수를 만든다
const incrementAction = action('increment')

export const Primary = props => {
  const [count, setCount] = useState(0)

  const onClick = (e: React.MouseEvent) => {
    // 현재 계정을 전달하고, Action을 호출한다
    incrementAction(e, count)
    setCount(c => c + 1)
  }

  return (
    <StyledButton {...props} variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}
