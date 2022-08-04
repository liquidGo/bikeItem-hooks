import React, { useState, useEffect } from 'react'
import { Form, Card, Modal, Table } from 'antd'
import Etab from '../Etab/Common';
import axios from '../../packaging/Packaging'
import '../../resouce/api/table/list'

import '../../ui/index.less'
import Co from '../../packaging/Packaging'

export default function TableBasic() {
    let [data1, setData1] = useState(null)
    let [data2, setData2] = useState(null)
    let [page, setPage] = useState(1)
    let [selectedRowKeys, setSelectedRowKeys] = useState([])
    let [selectedRowItem, setSelectedRowItem] = useState([])

    let [selectedRowKeysCheckbox, setSelectedRowKeysCheckbox] = useState([])
    let [selectedRowItemCheckbox, setSelectedRowItemCheckbox] = useState([])

    //存入切换导航的数据
    let [pageDate, setPageDate] = useState({})
    let dataSource = [
        {
            id: '0',
            userName: 'jack',
            sex: '1',
            state: '1',
            interest: '1',
            brithday: '1999-06-28',
            address: '哈尔滨市南岗区',
            time: '09:00'
        }, {
            id: '1',
            userName: 'tom',
            sex: '1',
            state: '1',
            interest: '1',
            brithday: '1999-06-28',
            address: '哈尔滨市南岗区',
            time: '09:00'
        }, {
            id: '2',
            userName: '赵四',
            sex: '1',
            state: '1',
            interest: '1',
            brithday: '1999-06-28',
            address: '哈尔滨市南岗区',
            time: '09:00'
        },
    ]
    let request = () => {
        axios.Axios('tableList.php', {
            params: {
                page: page
            }
        }).then(res => {
            console.log(page, '123123123123123');
            res.data.result.list = res.data.result.list.map((value, index) => {
                value.key = value.id
                return value
            })
            setData2(res.data.result.list)
            //存入初始化得到的页数等
            setPageDate({...Co.paginationjj(res), onChange: (current) => { 
                page = current 
                setPage(page)
                request()
            } })
        })
    }


    useEffect(() => {
        console.log(dataSource, '111');
        dataSource = dataSource.map((value, index) => {
            console.log(value.id, 'value');
            value.key = value.id
            return value
        })
        setData1(dataSource)
        request()
    }, [])
    // useEffect(()=>{

    // },[selectedRowKeysCheckbox])
    // console.log(dataSource);
    // let { form } = Form.useForm()
    //基本表格
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

    //单选部分
    let onRowClick = (record, index) => {
        setSelectedRowKeys([index + 1])
        setSelectedRowItem(record)
        // console.log(record,'record');
        const interest1 = (record) => {
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
            return config[record]
        }
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},用户爱好：${interest1(record.interest)}`
        })
    }
    const rowSelection = {
        type: 'radio',
        selectedRowKeys
    }



    // 多选部分
    let onRowClickCheckbox = (record, index) => {
        let i = selectedRowKeysCheckbox.indexOf(index + 1)
        if (i == -1) {
            selectedRowKeysCheckbox.push(index + 1)
            selectedRowItemCheckbox.push(record)
            setSelectedRowKeysCheckbox([...selectedRowKeysCheckbox])
            setSelectedRowItemCheckbox([...selectedRowItemCheckbox])
        }
        else {
            selectedRowKeysCheckbox.splice(i, 1)
            selectedRowItemCheckbox.splice(i, 1)

            setSelectedRowKeysCheckbox([...selectedRowKeysCheckbox])
            setSelectedRowItemCheckbox([...selectedRowItemCheckbox])
        }

    }
    const rowSelectionCheckbox = {
        type: 'checkbox',
        selectedRowKeys: selectedRowKeysCheckbox,
        selectedItem: selectedRowItemCheckbox
    }


    //分页部分

    return (
        <div  >
            <Card title='基本表格' className='card-wrap'>
                <Etab type='' columns={columns} border={true} data={data1} />
            </Card>
            <Card title='动态表格' className='card-wrap'>
                <Etab type='' columns={columns} border={true} data={data2} />
            </Card>
            <Card title='单选表格' className='card-wrap'>
                <Etab
                    type='radio'
                    columns={columns}
                    border={true}
                    data={data2}
                    onRow1={onRowClick}
                    rowSelection={rowSelection}
                />
            </Card>
            <Card title='多选表格' className='card-wrap'>
                <Etab
                    type='checkbox'
                    columns={columns}
                    border={true}
                    data={data2}
                    onRow1={onRowClickCheckbox}
                    rowSelection={rowSelectionCheckbox}
                />
            </Card>
            <Card title='分页功能' className='card-wrap'>
                <Etab
                    type='page'
                    columns={columns}
                    border={true}
                    data={data2}
                    pagination={pageDate}
                >
                </Etab>
            </Card>
        </div >
    )
}
