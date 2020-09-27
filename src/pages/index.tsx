import React, { useState, useEffect, useMemo } from 'react';
import styles from './index.less';
import Cell from '@/component/Cell';
import CusTable from '@/component/CusTable'
import { useImmer } from 'use-immer'

interface cellInfo {
  id: string;
}

export default () => {
  const [someObj, setValue] = useImmer({
    id: 'some',
    text: 'next',
    count: 1
  })
  const [txt, setTxt] = useState('last')

  // useEffect(() => {
  //   setInterval(() => {
  //     setValue(draft => {
  //       draft.count++
  //     })
  //   }, 1000)
  // }, []);

  const count = useMemo(() => {
    return `${txt}111`
  }, [txt])

  return (
    <div>
      <h1 className={styles.title} onClick={() => {
        setValue((draft) => {
          draft.id = "some1"
        })
        // setTxt("test111")
      }}>Page index</h1>
      <Cell id={someObj.id} />
      <CusTable />
    </div>
  );
}
