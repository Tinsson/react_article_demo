import React, { memo } from 'react'
import { Table, Button } from 'antd'

export interface UserType {
  key?: number,
  name: string,
  department: string,
  phone: string,
  time: string
}

function UserList({
  dataSource,
  onDelete
}: {
  dataSource: UserType[],
  onDelete: (record: UserType) => void
}) {
  const columns: object[] = [
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '手机号',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '创建时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '操作',
      dataIndex: 'name',
      key: 'name',
      render: (text:any, record: UserType, rowIndex: number) => {
        return (
          <Button
            type="primary"
            danger
            onClick={() => {
              onDelete(record)
            }}
          >
            删除
          </Button>
        )
      }
    }
  ];


  return (
    <Table
      dataSource={dataSource}
      columns={columns}
    />
  )
}

export default memo(UserList)