import { useState, useEffect } from 'react'

export default function Sayhello() {
  // 내부에서 상태를 가지므로 useState를 사용
  const [data, setData] = useState({ name: '' })

  /** 외부 API에 요청하는 것은 부작용이므로 useEffect에서 처리
   * pages/api/07-hello.ts의 내용으로 요청
   */
  useEffect(() => {
    fetch('api/07-hello')
      .then(res => res.json())
      .then(profile => {
        setData(profile)
      })
  }, [])

  return <div>hello {data.name}</div>
}
