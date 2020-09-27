import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';

const useRenderCount = () => {
  const count = useRef(0);
  count.current++;
  return count.current;
};

function App() {
  const renderCount = useRenderCount();
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);
  const inc = useCallback(() => {
    setFoo(v => v + 1);
    setBar(v => v + 1);
  }, []);


  return (
    <div>
      <p>
        foo is currently: <strong>{foo}</strong>
      </p>
      <p>
        bar is currently: <strong>{bar}</strong>
      </p>
      <p>
        This component is rendered <strong>{renderCount}</strong> times
      </p>
      <p>
        <button type="button" onClick={inc}>
          Click Here To Increment Both
        </button>
      </p>
    </div>
  );
}

interface cellType {
  id:string;
}

const Cell = (props: cellType) => {

  const [selection, setSelection] = useState([]);
  const [lastSelected, setLastSelected] = useState(0);
  const [state1, setState1] = useState('a')
  const [state2, setState2] = useState('b')
  const [state3, setState3] = useState('c')
  const selectLine = useCallback(
      index => {
          setSelection(lines => lines.concat(index));
          setLastSelected(index => 123);
          setState1('q')
          setState2('w')
          setState3('e')
      },
      []
  );
  // const handleClick = () => {
  //   // setTimeout(() => {
  //   //   console.error(props.id)
  //   // }, 2000)
  //   setTabVisible('true')
  //   setColumnVisible('true')
  // }

  useEffect(() => {
    console.log('update')
  })

  // const showId = useMemo(() => {
  //   return props.id
  // }, [props.id])

  return (
    <div>
      <h1 onClick={() => {
        selectLine(lastSelected + 1)
      }}>Cell</h1>
      <div>{props.id}</div>
      {
        selection.map(item => {
          return <span key={item}>{item}</span>
        })
      }
      <span>{lastSelected}</span>
      <div>{state1}</div>
      <div>{state2}</div>
      <div>{state3}</div>
    </div>
  );
}

export default Cell;
