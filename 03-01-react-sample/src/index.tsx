import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'

/**
 * 샘플 코드 안의 각 컴포넌트를 표시하기 위해서는 표시할 컴포넌트의 임포트문과 render 메서드 안의 주석을 해제한다
 */
// import App from './App'
// import Hello from './components/01-Hello'
// import Name from './components/02-Name'
// import Message from './components/03-Message'
// import ContainerSample from './components/04-ContainerSample'
// import ContextSample from './components/05-ContextSample'
import UseStateSample from './components/06-UseStateSample'
// import UseReducerSample from './components/07-UseReducerSample'
// import MemoSample1 from './components/08-MemoSample1'
// import MemoSample2 from './components/09-MemoSample2'
// import UseCallbackSample from './components/10-UseCallbackSample'
// import UseMemoSample from './components/11-UseMemoSample'
// import UseEffectSample from './components/12-UseEffectSample'
// import UseLayoutEffectSample from './components/13-UseLayoutEffectSample'
// import UseContextSample from './components/14-UseContextSample'
// import UseRefSample from './components/15-UseRefSample'
// import UseImperativeHandleSample from './components/16-UseImperativeHandleSample'
// import UseCustomHookSample from './components/17-UseCustomHookSample'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <App />,
  // <Hello />
  // <Name />
  // <Message />
  // <ContainerSample />,
  // <ContextSample />
  <UseStateSample initialValue={0} />,
  // <UseReducerSample initialValue={0} />
  // <MemoSample1 />
  // <MemoSample2 />
  // <UseCallbackSample />
  // <UseMemoSample />
  // <UseEffectSample />
  // <UseLayoutEffectSample />
  // <UseContextSample />
  // <UseRefSample />
  // <UseImperativeHandleSample />
  // <UseCustomHookSample />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
