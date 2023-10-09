import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * 타입 애너테이션이 없어도 빌드를 통과하므로 생략한다
 */
export default function LinkSample() {
  const router = useRouter()

  const onSubmit = () => {
    // (1) /3-ssr로 이동한다
    router.push('/03-ssr')

    /*** (2)
     * 문자열 대신 객체로 지정할 수 있다
     * /02-ssg?keyword=hello로 이동한다
     */
    router.push({
      pathname: '/02-ssg',
      query: { keyword: 'hello' },
    })
  }

  // **** (3) 호출하면 페이지가 리로드
  const onClickReload = () => router.reload()

  // **** (4) 호출하면 이전 페이지로 돌아감
  const onClickBack = () => router.back()

  useEffect(() => {
    /** 이동 시작 시의 이벤트를 구독한다
     * @param url : 이동 대상자의 경로를 부여할 수 있다
     * @param shallow : 얕은 라우팅(경로만 치환해서 이동의 경우에는 true가 된다
     */
    router.events.on('routeChangeStart', (url, { shallow }) => {
      console.log('routeChangeStart', url)
    })

    // 이동 완료 시의 이벤트를 구독한다
    router.events.on('routeChangeComplete', (url, { shallow }) => {
      console.log('routeChangeComplete', url)
    })
  }, [])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
      {/* /02-ssg로 이동하기 위한 링크를 작성한다 */}
      <Link href="/02-ssg">
        <a>Go TO SSG</a>
      </Link>
      <Link href="/02-ssg?keyword=next">
        <a>GO TO SSG with keyword {'next'}</a>
      </Link>
      <Link
        href={{
          pathname: '/02-ssg',
          query: { keyword: 'hello' },
        }}>
        <a>GO TO SSG with keyword {'hello'}</a>
      </Link>
      <Link href="/02-ssg">
        {/* a 대신 button을 사용하면, onClick이 호출되는 시점에 이동한다 */}
        <button>Jump to SSG page</button>
      </Link>
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onClickReload}>Reload</button>
      <button onClick={onClickBack}>Back</button>
    </div>
  )
}
