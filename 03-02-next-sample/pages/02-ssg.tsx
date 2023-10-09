import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Head from 'next/head'

// 페이지 컴포넌트인 props의 타입 정의
type SSGProps = {
  message: string
}

/** 📌 NextPage : Page를 위한 타입
 * 받을 props를 결정하고, `NextPage<Props>` 형태로 지정합니다
 * SSG는 getStaticProps가 반환한 props를 받을 수 있다
 * NextPage<SSGProps>는 Message: string 만을 받아 생성된 페이지 타입
 * Next.js의 페이지 컴포넌트나 함수 타입은 아래 링크 참조
 * @see https://nextjs.org/learn/excel/typescript/nextjs-types
 */
const SSG: NextPage<SSGProps> = props => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  )
}
/**
 * getStaticProps()라는 함수를 정의하고 export하면, 해당 함수는 빌드 시 실행된다
 * getStaticProps는 반환값으로 props를 반환하며, 그 값이 페이지 컴포넌트에 전달되어 그려짐
 * GetStaticProps<SSGProps>는 SSGProps인수로 받는 getSTaticProps 타입
 */
export const getStaticProps: GetStaticProps<SSGProps> = async context => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}에 getStaticProps가 실행되었습니다`
  console.log(message)
  return {
    // 여기에서 반환한 props를 기반으로 페이지 컴포넌트를 그린다
    props: {
      message,
    },
  }
}

export default SSG
