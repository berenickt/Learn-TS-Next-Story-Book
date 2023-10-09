import { NextPage } from 'next'
import styled from 'styled-components'

/** 📌 스타일을 상속
 * 스타일을 재사용하고 싶을 떄, 어떤 요소의 스타일을 상속하는 것도 유용함
 */

// 파란색 굵은 문자를 표시하는 컴포넌트
const Text = styled.p`
  color: blue;
  font-weight: bold;
`

// Text를 상속해, 경계선 스타일을 추가한 컴포넌트
const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>Hello</Text>
      <BorderedText>World</BorderedText>
    </div>
  )
}

export default Page
