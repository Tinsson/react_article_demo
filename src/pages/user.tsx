import React, { Suspense, useState, useRef, useEffect } from 'react';
import { UserType } from '@/component/UserList';
import { Skeleton } from 'antd'
// import UserSearch from '@/component/UserSearch'
import ClassTest from '@/component/ClassTest'

const UserSearch = React.lazy(() => import('@/component/UserSearch'))
const UserList = React.lazy(() => import('@/component/UserList'))

const dataSource: UserType[] = [
  {
    key: 1,
    name: 'admin hu',
    department: '技术部',
    phone: '15888881111',
    time: '2020/09/26'
  },
  {
    key: 2,
    name: 'admin xu',
    department: '组织部',
    phone: '15888882222',
    time: '2020/09/26',
  },
  {
    key: 3,
    name: 'admin yu',
    department: '行政部',
    phone: '15888883333',
    time: '2020/09/26',
  },
];

export default function User() {
  const [search, setSearch] = useState<string>('')
  const timeRef = useRef(null)
  const [source, setSource] = useState<UserType[]>(dataSource)

  useEffect(() => {
    console.log('test')
  }, [])

  const showList = (): UserType[] => {
    const newList: UserType[] = []
    if (search === '') return source
    source.forEach(item => {
      if (
        item.name.indexOf(search) !== -1 ||
        item.department.indexOf(search) !== -1 ||
        item.phone.indexOf(search) !== -1
      ) {
        newList.push(item)
      }
    })
    return newList
  }

  const handleDelete = (record: UserType): void => {
    const newList: UserType[] = []
    source.forEach(item => {
      if (item.key !== record.key) {
        newList.push(item)
      }
    })
    setSource(newList)
  }

  return (
    <div
      style={{
        width: '800px',
        padding: '20px'
      }}
      ref={timeRef}
    >
      <Suspense
        fallback={
          <Skeleton active />
        }
      >
        <UserSearch
          onSearch={(val) => {
            setSearch(val)
          }}
          onReset={() => {
            setSearch('')
          }}
        />
        <UserList
          dataSource={showList()}
          onDelete={handleDelete}
        />
      </Suspense>
      <ClassTest />
    </div>
  )
}