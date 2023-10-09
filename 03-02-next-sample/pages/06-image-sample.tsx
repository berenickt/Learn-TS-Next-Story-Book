/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { NextPage } from 'next'
import Image from 'next/image'
// 이미지 파일을 임포트한다
import BibleImage from '../public/images/bible.jpeg'

const ImageSample: NextPage<void> = props => {
  /***
   * 브라우저에서 확인하면 동일하게 이미지가 표시됩니다.
   * 개발자 도구로 각 태그에 전달된 경로를 확인해보면,
   * (1) img 태그로 표시한 쪽은 정적 파일로서 제공되는 이미지의 경로를 나타냄
   * (2) Image 컴포넌트로 표시한 쪽은 /_next/image 아래에 참조됩니다
   *     또한 파일 크기는 원래 이미지에 비해 절반 이하로 되어 있습니다
   */

  /** Image 컴포넌트는 몇가지 파라미터를 props에 전달 가능
   * layout에는 뷰포트의 변화에 따라 이미지를 리사이즈할 것인 설정 (기본값은 intrinsic)
   * placeholder에는 이미지 로딩 중에 표시할 내용을 지정 가능
   *
   * cf. 외부 리소스 이미지를 표시하는 경우, 기본적으로 최적화된 이미지를 표시못함
   * 따라서 next.config.js의 document에 최적화를 허가하는 이미지 도메인을 추가하거나,
   * Image 컴포넌트의 unoptimized에 true를 전달해 최적화를 무효화해야 함
   */

  return (
    <div>
      <h1>이미지 표시 비교</h1>
      {/* (1) 일반적인 img 태그를 사용해서 이미지를 표시한다 */}
      <p>(1) img 태그로 표시한 경우</p>
      <img src="/images/bible.jpeg" />

      {/* (2) Image 컴포넌트를 사용해서 표시한다 */}
      {/* 경로를 지정하는 대신, 임포트한 이미지를 지정 */}
      {/* Image컴포넌트는 width, height를 주지 않으면 에러지만, 정적 import 이미지를 사용할 떄는 생략 가능 */}
      {/* 또 브라우저 정보를 기반으로 최적화된 이미지를 제공 */}
      {/* e.g. WebP 대응 브라우저에는 WebP 형식 이미지 제공, 화면 크기에 맞게 적절한 크기의 이미지 제공 */}
      <p>(2) Image 컴포넌트로 표시한 경우</p>
      <Image src={BibleImage} />
      <p>Image로 표시한 경우는 사전에 그리기 영역이 확보됩니다</p>
    </div>
  )
}

export default ImageSample
