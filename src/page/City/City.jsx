import React, { useState, useEffect } from 'react'
import { Button, Card, Form, Select, Modal } from 'antd'
import "../../resouce/api/city/open"
import '../../resouce/api/city/list'
import Com from '../../packaging/Packaging'
import '../../ui/index.less'
import FormCommon from '../Etab/Common'
const FormItem = Form.Item
const Option = Select.Option


export default function City() {
    const [form] = Form.useForm()
    const [formOpenCity] = Form.useForm()
    const [pageData, setPageData] = useState(1)
    const [list, setList] = useState([])
    useEffect(() => {
        request()
    }, [])
    let [openCityMode, setOpenCityMode] = useState(false)
    const colums = [
        {
            title: '城市id',
            dataIndex: 'id'
        }, {
            title: '城市名称',
            dataIndex: 'name'
        }, {
            title: '用车模式',
            dataIndex: 'mode',
            render(mode) {
                return mode == '1' ? '禁停区模式' : '指定地点模式'
            }
        }, {
            title: '营运模式',
            dataIndex: 'op_mode',
            render(op_mode) {
                return op_mode == '1' ? '自营' : '加盟'
            }
        }, {
            title: '授权加盟商',
            dataIndex: 'franchChinese_name'
        }, {
            title: '城市管理员',
            dataIndex: 'city_admins',
            render(arr) {
                return arr.map(item => {
                    return item.user_name
                }).join('、')
            }
        }, {
            title: '城市开通时间',
            dataIndex: 'open_time'
        }, {
            title: '操作时间',
            dataIndex: 'update_time'
        }, {
            title: '操作人',
            dataIndex: 'sys_user_name'
        }
    ]
    let open = () => {
        setOpenCityMode(true)
    }
    let request = () => {
        Com.Axios('cityData.php', { page: pageData }).then(res => {
            // console.log(res, '11111');
            res.data.result.item_list=res.data.result.item_list.map((item,index)=>{
                item.key=index
                return item
            })
            setList(res.data.result.item_list)
        })
    }
    return (
        <div>
            <Card className='card-wrap'>
                <FormItemCom form={form} />
            </Card>
            <Card className='card-wrap'>
                <Button type='primary' onClick={open}>开通城市</Button>
            </Card>
            <Modal title='开通城市'
                visible={openCityMode}
                onOk={() => {
                    let data = formOpenCity.getFieldsValue();
                    Com.Axios('openCity.php', { data }).then(res => {
                        Modal.success({
                            title: '提示',
                            content: '开通成功！'
                        })
                        setOpenCityMode(false)
                        request()
                    })
                }
                }
                onCancel={
                    () => {
                        setOpenCityMode(false)
                    }
                }
            >
                <CityItem form={formOpenCity} />
            </Modal>
            <Card>

                <FormCommon
                    type='other'
                    border={true}
                    columns={colums}
                    data={list}
                />
            </Card>
        </div>
    )
}


function FormItemCom(props) {
    let { form } = props
    let handleSubmit = () => {
        console.log(form, 'form');
        let cityData = form.getFieldsValue()
        console.log(cityData, "给后端发送的请求数据！")
        Com.Axios('openCity.php', {
            data: {
                city: cityData
            }
        }).then(res => {
            Modal.success({
                title: '提示',
                content: '恭喜你开通成功！'
            })
            // console.log('123',res);

        })
    }
    let handleReset = () => {
        form.resetFields()
    }
    return (
        <Form form={form} layout='inline'>
            <FormItem label='城市' name='city_id' initialValue=''>
                <Select style={{ width: 80 }} >
                    <Option value=''>全部</Option>
                    <Option value={1}>北京</Option>
                    <Option value={2}>上海</Option>
                    <Option value={3}>深圳</Option>
                </Select>
            </FormItem>
            <FormItem label='用车模式' name='mode' initialValue=''>
                <Select style={{ width: 140 }} >
                    <Option value=''>全部</Option>
                    <Option value={1}>指定停车点模式</Option>
                    <Option value={2}>禁停区模式</Option>
                </Select>
            </FormItem>
            <FormItem label='运营模式' name='op_mode' initialValue=''>
                <Select style={{ width: 80 }} >
                    <Option value=''>全部</Option>
                    <Option value={1}>自营</Option>
                    <Option value={2}>加盟</Option>
                </Select>
            </FormItem>
            <FormItem label='加盟商授权状态' name='auth_statusop_mode' initialValue=''>
                <Select style={{ width: 90 }} >
                    <Option value=''>全部</Option>
                    <Option value={1}>已授权</Option>
                    <Option value={2}>未授权</Option>
                </Select>
            </FormItem>
            <FormItem>
                <Button type='primary' onClick={handleSubmit} style={{ marginRight: 10 }}>查询</Button>
                <Button onClick={handleReset}>重置</Button>
            </FormItem>
        </Form>
    )
}
function CityItem(props) {
    let { form } = props
    const formItemLayout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 19 }
    }
    return (
        <Form form={form} {...formItemLayout} >
            <FormItem label='选择城市'>
                <Select defaultValue={1} style={{ width: 100 }}>
                    <Option value={1}>北京</Option>
                    <Option value={2}>上海</Option>
                    <Option value={3}>深圳</Option>
                </Select>
            </FormItem>
            <FormItem label='运营模式' >
                <Select defaultValue={1} style={{ width: 100 }}>
                    <Option value={1}>全部</Option>
                    <Option value={2}>自营</Option>
                    <Option value={3}>加盟</Option>
                </Select>
            </FormItem>
            <FormItem label='用车模式' >
                <Select defaultValue={1} style={{ width: 100 }}>
                    <Option value={1}>指定停车点</Option>
                    <Option value={2}>禁停区模式</Option>
                </Select>
            </FormItem>
        </Form>
    )
}

