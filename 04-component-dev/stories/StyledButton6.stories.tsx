import { ComponentMeta } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { linkTo } from '@storybook/addon-links'

/*** 📌 (6) linkTo를 사용한 스토리 간 이동
 * @storybook/addon-links에서는 스토리상에서 다른 스토리로 이동하기 위한 링크 기능을 추가함
 * linkTo 함수에 이동하고자 하는 스토리의 경로를 지정해서 호출함으로써, 다른 스토리로 전환 가능함
 */
export default {
  title: 'StyledButton (6) - Link를 사용한다',
  component: StyledButton,
} as ComponentMeta<typeof StyledButton>

export const Primary = props => {
  // 클릭하면 StyledButton/Success의 스트리로 이동한다
  return (
    <StyledButton {...props} variant="primary" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Success')}>
      Primary
    </StyledButton>
  )
}

export const Success = props => {
  // 클릭하면 StyledButton/Transparent의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="success" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Transparent')}>
      Primary
    </StyledButton>
  )
}

export const Transparent = props => {
  // 클릭하면 StyledButton/Primary의 스토리로 이동한다
  return (
    <StyledButton {...props} variant="transparent" onClick={linkTo('StyledButton (6) - Link를 사용한다', 'Primary')}>
      Transparent
    </StyledButton>
  )
}
