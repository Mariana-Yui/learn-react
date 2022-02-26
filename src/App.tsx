import React, { useState } from 'react';
import ComplexStateHook from './hooks/01_useState';
import MultiEffectHook from './hooks/02_useEffect';
import UseContext from './hooks/03_useContext';
import UseReducer from './hooks/04_useReducer';
import UseCallback from './hooks/05_useCallback';
import UseMemo from './hooks/06_useMemo';
import UseRef from './hooks/07_useRef';
import UseImperativeHandle from './hooks/08_useImperativeHandle';
import UseLayoutEffect from './hooks/09_useLayoutEffect';
import CustomDataStoreHook from './hooks/10_自定义hook/01_instance';
import ShowScrollHook from './hooks/10_自定义hook/02_instance';
import UserHook from './hooks/10_自定义hook/03_instance';

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <ComplexStateHook />
      <>
        {show && <MultiEffectHook />}
        <button style={{ marginTop: 5 }} onClick={(e) => setShow(!show)}>
          展示/隐藏MultiEffectJHook
        </button>
      </>
      <UseContext />
      <UseReducer />
      <UseCallback />
      <UseMemo />
      <UseRef />
      <UseImperativeHandle />
      <UseLayoutEffect />
      <CustomDataStoreHook />
      <ShowScrollHook />
      <UserHook />
    </div>
  );
}
