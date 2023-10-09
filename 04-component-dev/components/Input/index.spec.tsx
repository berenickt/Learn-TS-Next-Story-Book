import { render, screen, RenderResult, fireEvent, getByRole } from '@testing-library/react'
import { Input } from './index'

/**
 * describe () 사용하면 테스트를 모을 수 있습니다
 * 여기서는 Input이라는 이름 그룹을 작성하고 그 안에 테스트를 작성합니다
 */
describe('Input', () => {
  let renderResult: RenderResult

  /***
   * beforeEach(), afterEach()는 각 테스트 실행 전과 실행 후의 처리를 기술합니다
   * 여기서는 테스트 대상 컴포넌트를 테스전에 화면에 그리고, renderResult에 설정한다
   */
  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })

  /***
   * 테스트 케이스 실행 후에, unmount()를 호출해 그리던 컴포넌트를 릴리스한다
   */
  afterEach(() => {
    renderResult.unmount()
  })

  /***
   * screen.getByLabelText를 사용해,
   * 화면에 그려지지 않은 DOM으로부터 지정한 이름의 랍레에 대응하는 input얻음
   */
  it('초기 렌더링 시 input 요소가 비어있어야 한다', () => {
    // label이 Username인 컴포넌트에 대응하는 input의 요소를 얻는다
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    // input 요쇼 표시가 비었는지 확인
    expect(inputNode).toHaveValue('')
  })

  it('문자를 입력하면, 입력한 내용이 표시되어야 한다', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    // fireEvent를 사용해 input 요소의 onChange 이벤트를 트리거한다
    fireEvent.change(inputNode, { target: { value: inputText } })

    // input 요소에 입력한 텍스트가 표시되는지 확인한다
    expect(inputNode).toHaveValue(inputText)
  })

  it('사용자가 버튼을 클릭할 때, 입력 텍스트가 삭제되어야 한다', () => {
    // 처음에 input에 텍스트를 입력한다
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText } })

    // 버튼을 얻는다
    const buttonNode = screen.getByRole('button', {
      name: 'Reset',
    }) as HTMLButtonElement

    // 버튼을 클릭한다
    fireEvent.click(buttonNode)

    // input 요소 표시가 비어있는지 확인한다
    expect(inputNode).toHaveValue('')
  })
})
