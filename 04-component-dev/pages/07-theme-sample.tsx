import { NextPage } from 'next'
import styled from 'styled-components'

/** 📌 Styled-components의 _app.js에 ThemeProvider를 사용해 테마 설정
 * 사용하는 색상이나 문자, 스페이스 간격을 미리 다른 위치에 정의(/theme.js)
 * props로 스타일을 설정할 떄, 이 값들을 참조하는 기능
 */

const Text = styled.span`
  /* theme으로부터 값을 참조해 스타일을 적용 */
  color: ${props => props.theme.colors.red};
  font-size: ${props => props.theme.fontSizes[3]};
  margin: ${props => props.theme.space[2]};
`

const Page: NextPage = () => {
  return (
    <div>
      <Text>theme.ts로부터 참조한 색상을 사용하고 있습니다</Text>
    </div>
  )
}

export default Page
