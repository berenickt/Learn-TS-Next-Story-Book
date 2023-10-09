import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import MDXDocument from './StyledButton.mdx'

/*** 📌 (5) 애드온
 * 스토리북에서는 애드온을 추가해 기능을 확장 가능
 * Controls, Actions 탭은 @storybook-addon-essentials에 포함된 애드온입니다
 * npx sb init으로 초기화한 경우, 이미 설치되어 있어서 처음부터 위 애드온을 사용할 수 있습니다
 *
 * 새 스토리북에 애드온을 추가할 떄는, 패키지를 설치하고, `.storybook./main.js`의 객체 addons에 애드온을 지정합니다.
 *
 * docs는 스토리상에서 도큐먼트를 표시하는 기능
 * 메타데이터를 기반으로 도큐먼트를 자동생성해 표시함
 * 또한, mdx파일을 별도 정의해 그 내용을 표시할 수 있다
 * 그 경우 mdx 파일을 설치하고, 메타데이터의 parameters 아래 추가한다
 */
export default {
  title: 'StyledButton (5) - 도큐먼트를 사용한다',
  component: StyledButton,
  parameters: {
    docs: {
      // 도큐먼트용의 mdx 컴포넌트를 지정한다
      page: MDXDocument,
    },
  },
} as ComponentMeta<typeof StyledButton>

// 템플릿 컴포넌트를 구현한다
// Storybook으로부터 전달된 props를 그대로 Button에 전달한다
const Template: ComponentStory<typeof StyledButton> = args => <StyledButton {...args} />

// bind를 호출해 Story를 작성
export const TemplateTest = Template.bind({})

// 기본 props를 설정한다
TemplateTest.args = {
  variant: 'primary',
  children: 'Primary',
}
