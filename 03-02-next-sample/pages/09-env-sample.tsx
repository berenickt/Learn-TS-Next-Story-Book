import { NextPage, GetStaticProps } from 'next'

/** 📌 환경변수 / 구성
 * 프로젝트 루트에 위치한 환경변수 .env는 자동으로 로딩되어 코드상에 참조 가능
 * .env를 퐇마해 다음 형식의 파일을 참조 가능
 * - .env
 * - .env.local
 * - .env.$(환경명)
 * - .env.$(환경명).local
 *
 * .local이 붙은 것은 .gitignore에 추가되는 것을 의도한 것으로
 * API 키 등의 공개하고 싶지 않는 키를 저장하기 위해 사용
 * .env와 .env.local은 환경에 관계없이 항상 사용 가능
 *
 * .env.development와 .env.development.local은 개발서버를 동작시킬 떄,
 * .env.production과 .env.production.local은 빌드 시 또는 프로덕션 환경에서 (서버를) 작동시킬 떄 사용
 *
 * 로딩된 환경변수는 서버 사이드에서 실행하는 처리에만 참조 가능
 * 즉, getServerSideProps 등의 함수나 API 핸들러, 빌드 중 SSG페이지를 그릴 때,
 * SSR 페이지를 서버 사이드에서 그릴 떄 환경변수 값을 참조 가능
 * 화면을 다시 그리는 도중 클라이언트 사이드에 접근하면 undefind가 됩니다
 * 클라이언트 사이드에서도 접근하고 싶은 값에 대해서는 환경변수 앞에 `NEXT_PUBLIC_`을 붙입니다
 */

/**
 * ### 브라우저 실행 환경(리액트 컴포넌트)
 */
const EnvSample: NextPage = props => {
  // 서버 사이드에서 그릴 때는 'test1'라 표시되고, 클라이언트 사이드에서 다시 그릴 때는 undefined로 표시
  console.log('process.env.TEST', process.env.TEST)

  // 'test2'라 표시
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      {/* 서버 사이드에서 그릴 때는 'test1'이라 표시되고, 클라이언트 사이드에서 다시 그릴 때는 아무것도 표시안됨 */}
      <p>{process.env.TEST}</p>

      {/* test2가 표시된다 */}
      <p>{process.env.NEXT_PUBLIC_TEST}</p>
    </div>
  )
}

/** ## 서버 실행 환경 (SSR)
 * getStaticProps는 항상 서버 사이드에서 실행되므로, 모든 환경 변수를 참조할 수 있다
 */
export const getStaticProps: GetStaticProps = async context => {
  console.log('process.env.TEST', process.env.TEST) // 'test1'가 표시
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST) // 'test2'가 표시

  return {
    props: {},
  }
}

export default EnvSample
