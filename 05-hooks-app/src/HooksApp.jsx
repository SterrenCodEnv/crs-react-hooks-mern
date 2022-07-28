// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';

import { Parent } from './07-memo-taks/Parent';

export const HooksApp = () => {
  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h1 className="display-5">HooksApp</h1>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {/* <CounterApp /> */}
            {/* <CounterWithCustomHook /> */}
            {/* <SimpleForm /> */}
            {/* <SimpleFormWithCustomHook /> */}
            {/* <MultipleCustomHooks /> */}
            {/* <FocusScreen /> */}
            {/* <Layout /> */}
            {/* <Memorize /> */}
            {/* <MemoHook /> */}
            {/* <CallbackHook /> */}
            <Parent />
          </li>
        </ul>
      </div>
    </>
  );
};
