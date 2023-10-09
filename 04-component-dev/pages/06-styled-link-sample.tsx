import { NextPage } from 'next'
import Link, { LinkProps } from 'next/link'
import styled from 'styled-components'

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

/*** 📌 Next.js의 링크에 스타일을 적용하기 위한 헬퍼 컴포넌트
 * 기본적으로 Styled-Components에서 정의한 스타일은 화면을 그릴 떄 사용하고, className을 컴포넌트에 전달합니다
 * 컴포넌트 안에 특정 컴포넌트에 스타일을 적용하려면, props에 전달되는 className을 임의의 컴포넌트에 전달합니다
 *
 * 이 컴포넌트를 styled-components에서 사용하면,
 * 정의한 스타일에 대응하는 className이 props로서 전달된다
 * 이 calssName을 a 요소에 전달한다
 */
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      {/* 파란색의 링크를 표시한다 */}
      <StyledLink href="/">Go to Index</StyledLink>
    </div>
  )
}

export default Page
