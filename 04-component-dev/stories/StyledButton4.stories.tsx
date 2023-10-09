import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'

/*** 📌 (4) 컨트롤 탭을 사용한 props 제어
 * 스토리북의 Contorl 탭에서는 컴포넌트에 전달한 props를 제어할 수 있습니다
 * 그 경우 스토리북으로부터 컴포넌트에 props를 전달하므로,
 * 템플릿을 작성하고 각 스토리를 템플릿의 bind()를 사용해 작성합니다
 *
 * 제어하고자 하는 데이터는 메타데이터 안에 argTypes로 정의합니다
 * 아래 예에서는 버튼의 색상, 표시할 텍스트를 스토리북에서 제어할 수 있도록 설정합니다
 *
 * 스토리북 상에서 확인하면 Contorl 탭에 variant와 childeren을 위한 필드가 있으며,
 * 그 필드들을 변경하면 컴포넌트의 표시를 바꿀 수 있습니다
 */
export default {
  title: 'StyledButton (4) - Control을 사용한다',
  component: StyledButton,
  argTypes: {
    // props에 전달하는 variant를 Storybook으로부터 변경할 수 있도록 추가
    variant: {
      control: { type: 'radio' }, // 라디오 버튼으로 설정할 수 있도록 지정
      options: ['primary', 'success', 'transparent'],
    },
    // props에 전달하는 children을 Storybook으로부터 변경할 수 있도록 추가
    children: {
      control: { type: 'text' }, // 텍스트 박스에서 입력할 수 있도록 지정
    },
  },
} as ComponentMeta<typeof StyledButton>

// 템플릿 컴포넌트를 구현
// Storybook으로부터 전달된 props를 그대로 Button에 전달한다
const Template: ComponentStory<typeof StyledButton> = args => <StyledButton {...args} />

// bind를 호출해 Story를 작성
export const TemplateTest = Template.bind({})

// 기본 props를 설정한다
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}
