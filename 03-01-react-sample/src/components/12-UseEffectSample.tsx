import { useState, useEffect } from 'react'

/** 📌 useEffect와 useLayoutEffect - 부가작용 훅
 * 부가작용은 컴포넌트의 그리기와는 직접적인 관계가 없는 처리를 말합니다.
 * e.g. 화면을 그린 DOM의 수동변경, 로그출력, 타이머 설정, 데이터 취득 등
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
    // 초기 그리기 시에만 실행한다
  }, [])

  /*** (2) localstorage로부터 값을 로딩하기 위한 부가작용
   * 로컬 스토리지 함수는 동기적으로 실행되며, 읽기,쓰기 데이터가 커짐에 따라 시간이 걸립니다.
   * 그리기 함수 안에 직접 로컬 스토리지를 사용하면, 그리기에 지연이 발생합니다.
   * 따라서 useEffect 안에서 로컬 스토리지를 사용합니다.
   */
  useEffect(() => {
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
        <span> : {timestamp.toLocaleString(locale)}⏱️</span>
        <select value={locale} onChange={e => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko=KR</option>
        </select>
      </p>
    </div>
  )
}

export default Clock
