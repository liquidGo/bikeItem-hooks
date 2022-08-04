import React from 'react'
import { Form, Table, Pagination } from 'antd'

export default function Common(props) {
    let { type, columns, data, rowSelection, border, onRow1, pagination, scroll,onchange1 } = props
    let items = (type, columns, data, rowSelection, border, onRow1, pagination, scroll,onchange1) => {
        switch (type) {
            case 'checkbox':
                console.log(rowSelection, 'abcdefg');
                return (
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    onRow1(record, index)
                                }
                            }
                        }}
                    >
                    </Table>
                )
                break;

            case 'radio':
                console.log('2222');
                return (
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowSelection={rowSelection}
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    onRow1(record, index)
                                }
                            }
                        }}
                    >
                    </Table>
                )
                break;
            case 'page':
                console.log(data,'1111');
                // console.log(pagination,'jjjjjjj');
                return (
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={pagination}
                    >
                    </Table>
                )
                break;
            default:

                console.log('3333');
                return (
                    <Table
                        columns={columns}
                        bordered={border}
                        dataSource={data}
                        scroll={scroll}
                        pagination={pagination}
                        onChange={onchange1}
                    />
                )
                break;
        }
    }
    return (
        <div>
            {items(type, columns, data, rowSelection, border, onRow1, pagination, scroll,onchange1)}
        </div>
    )
}
