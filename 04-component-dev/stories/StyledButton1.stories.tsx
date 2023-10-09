import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

/*** 📌 (1) 스토리북 기본 사용법
 * 파일 안의 Story의 설정(메타 데이터 객체)
 */
export default {
  title: 'StyledButton (1)', // 그룹명
  component: StyledButton, // 사용하는 컴포넌트
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
