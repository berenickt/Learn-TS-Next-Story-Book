import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

/*** 📌 (2) 액션을 사용한 콜백 핸들링
 * 파일 안의 Story의 설정(메타 데이터 객체)
 * 컴포넌트를 클릭하는 등의 이벤트가 발생할 떄, 콜백이 적절히 호출되는 스토리북에서 확인 가능
 * 스토리북 상에서 버튼을 클릭하면 아래 패널의 Action 탭에서 이벤트가 표시됨
 */
export default {
  title: 'StyledButton (2) - action을 사용한다',
  component: StyledButton,

  // 액션을 사용한 콜백 핸들링, onClick이 호출됐을 떄, clicked라는 액션을 출력
  argTypes: { onClick: { action: 'clicked' } },
} as ComponentMeta<typeof StyledButton>

export const Primary = props => {
  return (
    <StyledButton {...props} variant="primary">
      메인
    </StyledButton>
  )
}

export const Success = props => {
  return (
    <StyledButton {...props} variant="success">
      성공
    </StyledButton>
  )
}

export const Transparent = props => {
  return (
    <StyledButton {...props} variant="transparent">
      투명
    </StyledButton>
  )
}
