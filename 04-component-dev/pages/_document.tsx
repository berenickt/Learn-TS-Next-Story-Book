import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * SSR이나 SSG를 사용할 떄, 서버 사이드에서 스타일을 적용하기 위한 설정
 * `_document`는 커스텀 도큐먼트라 불리는 구조로,
 * 기본으로 생성된 페이지 설정 중 html이나 head, body 요소를 관한 부분을 덮어쓰기 위한 것
 * 기본적으로 _document의 초기화에만 사용, 보통 사용안함, 자세한 내용은 공식문서 참조
 * @see https://nextjs.org/docs/pages/api-reference/functions/get-initial-props
 * 기본 Document를 MyDocument로 덮어 쓴다
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      // 초깃값을 유용한다
      const initialProps = await Document.getInitialProps(ctx)

      /** initialProps에 더해, style을 추가해서 반환한다.
       *  @see https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.tsx
       */
      return {
        ...initialProps,
        styles: [
          initialProps.styles, // 원래 style
          sheet.getStyleElement(), // styled-components의 style
        ],
      }
    } finally {
      sheet.seal()
    }
  }
}
