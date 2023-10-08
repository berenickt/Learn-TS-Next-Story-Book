import { useState, useEffect, useLayoutEffect } from 'react'

/** 📌 useLayoutEffect - 부가작용 훅
 * 부가작용은 컴포넌트의 그리기와는 직접적인 관계가 없는 처리를 말합니다.
 * e.g. 화면을 그린 DOM의 수동변경, 로그출력, 타이머 설정, 데이터 취득 등
 *
 * useEffect와 마찬가지로 부가작용을 실행하기 위한 훅이지만, 실행되는 시점이 다릅니다.
 * - useEffect는 화면 그리기 함수가 실행되고, DOM이 업데이트되고, 화면에 실제로 그려진 뒤에 실행됩니다.
 * - useLayoutEffect는 DOM이 업데이트된 후, 화면에 실제로 그려지기 전에 실행됩니다.
 */

// 타이머가 호출되는 주기를 1초로 한다
const UPDATE_CYCLE = 1000

// localstorage에서 사용하는 키
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  US = 'en-US',
  KO = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.KO:
      return Locale.KO
    default:
      return Locale.US
  }
}

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.US)

  /*** (1) 타이머를 설정하기 위한 부가작용
   * setInterval()를 사용해, 주기적으로 처리를 실행
   * 따라서 초기화 처리는 초기 그리기에서만 수행
   *
   * useEffect의 두번쨰 인수는 의존배열이며,
   * useCallback, useMemo와 마찬가지로 그릴 떄마다 내용을 확인해서,
   * 이전의 그리기 때와 다를 경우에만 첫 번쨰 인수의 함수를 실행합니다.
   * 빈 배영르 전달할 경우, 초기 그리기를 마친 직후에만 실행되며, 그 뒤 다시 그릴 때는 실행되지 않습니다.
   */
  useEffect(() => {
    // 타이머 셋, setTimeout()을 호출하고 상태를 1초마다 다시 그리며, 현재 시각 표시를 업데이트
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    /** 클린업 함수를 전달하고, 언마운트 시에 타이머를 해제한다
     * 언마운트 시에 타이머를 해제하지 않으면, 부모 커포넌트에서 Clock 커포넌트 호출하지 않아도, 타이머가 계속 동작합니다.
     * 이는 버그나 메모리 누수의 원인되므로, 클린업 함수에서 아래와 같이 처리해줘야 됩니다.
     */
    return () => {
      clearInterval(timer)
    }
    // 로기 그리기 시에만 실행한다
  }, [])

  /*** (2) localstorage로부터 값을 로딩하기 위한 부가작용
   * 💡 useEffect에서 useLayoutEffect로 변경한다
   * 초기 화면 그리기에서 기본값이 US표기로 표시되며, 그 직후 localstorage에 저장된 표기로 바뀝니다.
   * 그래서 리로드할 떄 잠깐동안 US표기로 표시되며, 살짝 이상하게 보입니다.
   * useLayoutEffect를 사용하면, 초기화면이 반영되기 전에 localstorage로부터 데이터를 읽어오므로,
   * 이런 현상을 없앨 수 있습니다.
   *
   * 🚨 하지만, useLayoutEffect로 실행하는 처리는 동기적으로 실행되므로,
   * 무거운 처리를 실행하면 화면 그리기가 지연되므로 주의해야 합니다.
   */
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  /*** (3) locale이 바뀌었을 때, localstorage에 값을 저장하기 위한 부가작용
   * 로컬 스토리지에 데이터를 저장합니다.
   * 화면을 그릴 떄마다 저장할 필요는 없으며, 드롭다운 메뉴를 선택해 locale이 업데이트될 떄만 저장하면 되므로,
   * 의존 배열에 locale을 전달합니다.
   *
   * 즉, 의존 배열에 locale을 전달하고, locale이 변화할 때마다 실행하도록 한다
   */
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">현재 시각</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select value={locale} onChange={e => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  )
}

export default Clock

/*** 리액트 18에서 useEffect/useLayoutEffect의 작동
 * 리액트18에서 <React.StrictMode> 아래 컴포넌트 안에서
 * 선언된 useEffect/useLayoutEffect은 안전하지 않은 부가작용을 발견하기 위해 컴포넌트는 2번 그립니다.
 *
 * 그래서 빈 배열을 전달했을 떄,
 * 마운트 시에 useEffect/useLayoutEffect가 2번 호출됩니다.
 * 또한 클린업 함수도 1번 호출됩니다.
 * 1번만 실행되도록 보장할 떄는, useRef 등을 사용해 앞에서 실행 유무를 저장해서 대처할 수 있습니다.
 * ```
 * const mounted = React.useRef(false)
 * useEffect(() => {
 *  if(mounted.current) {
 *    // 이미 실행 완룡니 경우 아무것도 하지 않는다.
 *    return
 *  }
 *  mounted.current = true
 *
 *  // 1번만 실행하고 싶은 부가 작용을 실행한다
 *  const data = fetch(...)
 * }, [])
 * ```
 */
