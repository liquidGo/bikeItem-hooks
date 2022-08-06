import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Modal } from 'antd'
import QueryBank from '../QueryBank/QueryBank'
import '../../ui/index.less'
import ComTab from '../Etab/Common'
import axios from '../../packaging/Packaging'
import '../../resouce/api/order/list'
import '../../resouce/api/order/finish_order'
import { set } from 'lodash'
// import FormItem from 'antd/es/form/FormItem'
const FormItem = Form.Item

export default function Order() {
    let [modals, setModal] = useState(false)
    // 单选部分
    let [selectedRowKeys, setSelectedRowKeys] = useState([])
    let [selectedRowItem, setSelectedRowItem] = useState([])
    let onRow1 = (record, index) => {
        setSelectedRowKeys([index])
        setSelectedRowItem(record)
    }
    const rowSelection = {
        type: 'radio',
        selectedRowKeys,
        selectedRowItem
    }

    // 表格部分
    const colums = [
        {
            title: '订单编号',
            dataIndex: 'order_sn'
        }, {
            title: '车辆编号',
            dataIndex: 'bike_sn'
        }, {
            title: '用户名',
            dataIndex: 'user_name'
        }, {
            title: '手机号码',
            dataIndex: 'mobile'
        }, {
            title: '里程',
            dataIndex: 'distance',
            render(distance) {
                return distance / 1000 + 'Km'
            }
        }, {
            title: '行驶时长',
            dataIndex: 'total_time',
            render(total_time) {
                return Math.floor(total_time / 60) + '分钟'
            }
        }, {
            title: '状态',
            dataIndex: 'status',
            render(status) {
                return status == '1' ? '进行中' : '结束行程';
            }
        }, {
            title: '开始时间',
            dataIndex: 'start_time'
        }, {
            title: '结束时间',
            dataIndex: 'end_time'
        }, {
            title: '订单金额',
            dataIndex: 'total_fee'
        }, {
            title: '实付金额',
            dataIndex: 'user_pay'
        }
    ]



    // 订单详情
    let orderInfo = () => {
        let list = selectedRowItem
        if (!list.id) {
            Modal.warning({
                title: '提示',
                content: '请选择一条数据'
            })
        } else {
            // console.log(list,'list选中');
            window.open(`/#/common/detail/${list.status}/${list.order_sn}/${list.bike_sn}/${list.user_name}/${list.distance}`)
        }
    }

    //订单结束
    let orderOver = () => {
        let list = selectedRowItem
        if (!list.id) {
            Modal.warning({
                title: '提示',
                content: '请选择一条数据'
            })
        } else {
            // console.log(list,'list选中');
            setModal(true)
        }
    }
    let orderSubmit = () => {
        let list = selectedRowItem

        axios.Axios('finish_order.php', {
            data: {
                list
            }
        }).then(res => {
            console.log(res, 'res');
            if (res.data.code == '200') {
                setModal(false)
                request()
            }
        })
    }
    const formItemLayout = {
        // 指定元素的左边Col列宽度
        labelCol: {
            span: 5
        },
        // 表单内部元素的Col列宽度
        wrapperCol: {
            span: 10
        }
    }


    const [form] = Form.useForm()
    const [data1, setDate1] = useState([])
    useEffect(() => {
        request()
    }, [])
    let request = () => {
        axios.Axios('order_list.php').then(res => {
            console.log(res.data.result.item_list, 'rrrrrrr');
            res.data.result.item_list = res.data.result.item_list.map((item, index) => {
                item.key = index
                return item
            })
            setSelectedRowKeys([])
            setSelectedRowItem([])
            setDate1([...res.data.result.item_list])
        })
    }
    let btnSub = () => {
        console.log(form.getFieldsValue(), '向后端发送的请求');
    }
    let btnRest = () => {
        form.resetFields()
        // console.log(form.getFieldsValue(), 'from');
    }
    return (
        <div>
            <Card className='card-wrap'>
                <Form layout='inline' form={form}>
                    <QueryBank type='city' name='city' />
                    <QueryBank type='start_time' name='start_time' />
                    <QueryBank type='end_time' name='end_time' />
                    <QueryBank type='state' name='state' />
                    <QueryBank type='query' btnSub={btnSub} name='query' />
                    <QueryBank type='reset' btnRest={btnRest} name='reset' />
                </Form>
            </Card>
            <Card className='card-wrap'>
                <Button type='primary' onClick={orderInfo} style={{ marginRight: 10 }}>订单详情</Button>
                <Button type='primary' onClick={orderOver}>结束订单</Button>
            </Card>
            <Card className='card-wrap'>
                <ComTab type='radio' onRow1={onRow1} rowSelection={rowSelection} columns={colums} data={data1} />
            </Card>
            <Modal
                layout='horizontal'
                visible={modals}
                onOk={() => {
                    orderSubmit()
                }}
                onCancel={() => {
                    setModal(false)
                }}
                width={600}

            >
                <Form {...formItemLayout}>
                    <FormItem label='用户姓名' {...formItemLayout}>
                        {selectedRowItem.user_name}
                    </FormItem>
                    <FormItem label='车辆编号' {...formItemLayout}>
                        {selectedRowItem.bike_sn}
                    </FormItem>
                    <FormItem label='剩余电量' {...formItemLayout}>
                        {selectedRowItem.battery}
                    </FormItem>
                    <FormItem label='开始时间' {...formItemLayout}>
                        {selectedRowItem.start_time}
                    </FormItem>
                    <FormItem label='车辆地址' {...formItemLayout}>
                        黑龙江省哈尔滨市阿城区
                    </FormItem>
                </Form>
            </Modal>
        </div>
    )
}
