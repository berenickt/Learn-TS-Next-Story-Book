import { NextPage } from 'next'
import styled from 'styled-components'

/*** 📌 스타일별 컴포넌트
 * 스타일을 정의한 컴포넌트를 다른 HTML 요소에 사용하고 싶을 떄
 * props의 as에 사용할 요소명을 지정해 해당 요소로 표시함
 */

// 파란색 텍스트를 표시하는 컴포넌트
const Text = styled.p`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      {/* 파란색 텍스트를 표시 */}
      <Text>World</Text>
      {/* 파란색 링크를 표시 */}
      <Text as="a" href="/">
        Go to index
      </Text>
    </div>
  )
}

export default Page
