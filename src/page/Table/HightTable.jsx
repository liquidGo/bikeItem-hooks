import React, { useEffect, useState } from 'react'
import { Card, Button, Badge, Modal, message } from 'antd'
import '../../resouce/api/table/high/list'
import TabCom from '../Etab/Common'
import axiosCommon from '../../packaging/Packaging'

export default function HightTable() {
    let [dataSource, setDataSource] = useState({})
    let [sortOrder, setSortOrder] = useState('')
    const columns = [
        {
            title: 'id',
            dataIndex: 'id'
        }, {
            title: '用户名',
            dataIndex: 'userName'
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                // console.log(sex);
                return sex == '1' ? '男' : '女';
            }
        }, {
            title: '状态',
            dataIndex: 'state',
            render(state) {
                let config = {
                    '1': '闲鱼一条',
                    '2': '奉化浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state]
            }
        }, {
            title: '爱好',
            dataIndex: 'interest',
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '百度FE',
                    '5': '创业者',
                    '6': '读书',
                    '7': '玩电脑',
                    '8': '跑步'
                }
                return config[interest]
            }
        }, {
            title: '生日',
            dataIndex: 'brithday'
        }, {
            title: '地址',
            dataIndex: 'address'
        }, {
            title: '早起时间',
            dataIndex: 'time'
        }
    ]
    const columns2 = [
        {
            title: `id`,
            dataIndex: 'id',
            width: 180,
            fixed: "left",
        }, {
            title: "用户名",
            dataIndex: 'userName',
            width: 180,
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                // console.log(sex);
                return sex == '1' ? '男' : '女';
            },
            width: 180
        }, {
            title: '状态',
            dataIndex: 'state',
            render(state) {
                let config = {
                    '1': '闲鱼一条',
                    '2': '奉化浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state]
            },
            width: 180
        }, {
            title: '爱好',
            dataIndex: 'interest',
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '百度FE',
                    '5': '创业者',
                    '6': '读书',
                    '7': '玩电脑',
                    '8': '跑步'
                }
                return config[interest]
            },
            width: 180
        }, {
            title: '生日',
            dataIndex: 'brithday',
            width: 120
        },
        {
            title: '地址',
            dataIndex: 'address',
            width: 180,
        }, {
            title: "早起时间",
            dataIndex: 'time',
            width: 180,
            fixed: 'right'
        }
    ]
    const columns3 = [
        {
            title: 'id',
            dataIndex: 'id',
        }, {
            title: '用户名',
            dataIndex: 'userName',
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                // console.log(sex);
                return sex == '1' ? '男' : '女';
            },
        }, {
            title: '年龄',
            dataIndex: 'age',
            sorter: (a, b) => {
                return a.age - b.age;
            },
            sortOrder: sortOrder
        }
        , {
            title: '状态',
            dataIndex: 'state',
            render(state) {
                let config = {
                    '1': '闲鱼一条',
                    '2': '奉化浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state]
            },
        }, {
            title: '爱好',
            dataIndex: 'interest',
            render(interest) {
                let config = {
                    '1': '游泳',
                    '2': '打篮球',
                    '3': '踢足球',
                    '4': '百度FE',
                    '5': '创业者',
                    '6': '读书',
                    '7': '玩电脑',
                    '8': '跑步'
                }
                return config[interest]
            },
        }, {
            title: '生日',
            dataIndex: 'brithday',
        }, {
            title: '地址',
            dataIndex: 'address',
        }, {
            title: '早起时间',
            dataIndex: 'time',
        }
    ]
    const columns4 = [
        {
            title: 'id',
            dataIndex: 'id',
        }, {
            title: '用户名',
            dataIndex: 'userName',
        }, {
            title: '性别',
            dataIndex: 'sex',
            render(sex) {
                // console.log(sex);
                return sex == '1' ? '男' : '女';
            },
        }, {
            title: '年龄',
            dataIndex: 'age',
            // sorter: (a, b) => {
            //     return a.age - b.age;
            // },
            // sortOrder: sortOrder
        }
        , {
            title: '状态',
            dataIndex: 'state',
            render(state) {
                let config = {
                    '1': '闲鱼一条',
                    '2': '奉化浪子',
                    '3': '北大才子',
                    '4': '百度FE',
                    '5': '创业者'
                }
                return config[state]
            },
        }, {
            title: '爱好',
            dataIndex: 'interest',
            render(interest) {
                let config = {
                    '1': <Badge status='success' text='成功' />,
                    '2': <Badge status='error' text='失败' />,
                    '3': <Badge status='default' text='正常' />,
                    '4': <Badge status='processing' text='进行中' />,
                    '5': <Badge status='warning' text='警告' />,
                    '6': <Badge status='success' text='成功' />,
                    '7': <Badge status='success' text='成功' />,
                    '8': <Badge status='success' text='成功' />
                }
                return config[interest]
            },
        }, {
            title: '生日',
            dataIndex: 'brithday',
        }, {
            title: '地址',
            dataIndex: 'address',
        }, {
            title: '早起时间',
            dataIndex: 'time',
        }, {
            title: '操作',
            render: (text, item) => {
                return <Button size='small' onClick={(item) => { handleDelete(item) }}>删除</Button>
            }
        }
    ]
    useEffect(() => {
        request()
    }, [])
    let request = () => {
        axiosCommon.Axios('high.php').then(res => {
            res.data.result.list = res.data.result.list.map(item => {
                item.key = item.id
                return item
            })
            setDataSource({
                data1: [...res.data.result.list]
            })
            // console.log(res.data.result.list);
        })
        console.log(dataSource.data1, '123');
    }


    //表格排序方法、这里点击改变排序方法
    let onChangeTable = (pagination, filters, sorter) => {
        setSortOrder(sorter.order)
    }

    //删除某一行表格
    let handleDelete = (item) => {
        let id = item.id;
        Modal.confirm({
            title: '确认',
            content: '您确认要删除此条数据吗？',
            onOk: () => {
                message.success('删除成功')
                request();
            }
        })
    }

    return (
        <div>
            <Card title='头部固定' className='card-wrap'>
                <TabCom
                    columns={columns}
                    border={true}
                    data={dataSource.data1}
                    scroll={{ y: 240 }}
                    type='other'
                    pagination={false}
                >
                </TabCom>
            </Card>

            <Card title='两侧固定' className='card-wrap'>
                <TabCom
                    columns={columns2}
                    border={true}
                    data={dataSource.data1}
                    scroll={{ x: 700 }}
                    type='other'
                    pagination={false}
                >
                </TabCom>
            </Card>

            <Card title='表格排序' className='card-wrap'>
                <TabCom
                    columns={columns3}
                    border={true}
                    data={dataSource.data1}
                    type='other'
                    pagination={false}
                    onchange1={onChangeTable}
                    ondelete={handleDelete}
                >
                </TabCom>
            </Card>

            <Card title='操作按钮' className='card-wrap'>
                <TabCom
                    columns={columns4}
                    border={true}
                    data={dataSource.data1}
                    type='other'
                    pagination={false}
                >
                </TabCom>
            </Card>
        </div>
    )
}
