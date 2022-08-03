import React, { useRef } from 'react'
import { Input, Card, Form, Button, Modal } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import '../../ui/index.less'

const FormItem = Form.Item
export default function Login1() {
    const [form] = Form.useForm()
    const [form2] = Form.useForm()
    // const ip1=useRef(null)
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },

    }
    let handleSubmit = (data) => {
        data.validateFields().then(res => {
            Modal.success({
                title: `登陆成功！用户名${form.getFieldsValue().user}，密码为${form.getFieldsValue().pwd}`,
                onOk: () => {
                    data.resetFields()
                }
            })
        }).catch(error=>{
            Modal.error({
                title: `登陆失败，请检查！`,
                onOk: () => {
                    data.resetFields()
                }
            })
        })

    }
    return (
        <div>
            <Card title='登录行内表单' className='card-wrap'>
                <Form layout='inline' form={form}  {...formItemLayout} >
                    <FormItem
                        label='用户名'
                        // initialValue='jack'

                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空！'
                            }, {
                                min: 5, max: 10,
                                message: '长度不在规范内！'
                            }, {
                                pattern: /^\w+$/g,
                                message: '用户名必须为英文字母或数字！'
                            }
                        ]}
                        name="user">
                        <Input type='text'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder='请输入用户名'
                            autoComplete='off'
                        ></Input>
                    </FormItem>
                    <FormItem
                        label='密码'
                        name='pwd'
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空！'
                            }, {
                                min: 5, max: 10,
                                message: '长度不在规范内！'
                            }, {
                                pattern: /^\w+$/g,
                                message: '密码必须为英文字母或数字！'
                            }
                        ]}
                    >
                        <Input type='password'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder='请输入密码'
                        ></Input>
                    </FormItem>
                    <FormItem shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={()=>handleSubmit(form)}
                            >
                                Log in
                            </Button>
                        )}
                    </FormItem>
                </Form>
            </Card>
            <Card title='登录水平表单' className='card-wrap'>
                <Form layout='block' {...formItemLayout}  form={form2}  style={{ width: 300 }} >
                    <FormItem
                        label='用户名'
                        // initialValue='jack'

                        rules={[
                            {
                                required: true,
                                message: '用户名不能为空！'
                            }, {
                                min: 5, max: 10,
                                message: '长度不在规范内！'
                            }, {
                                pattern: /^\w+$/g,
                                message: '用户名必须为英文字母或数字！'
                            }
                        ]}
                        name="user2">
                        <Input type='text'
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder='请输入用户名'
                            autoComplete='off'
                        ></Input>
                    </FormItem>
                    <FormItem
                        label='密码'
                        name='pwd2'
                        rules={[
                            {
                                required: true,
                                message: '密码不能为空！'
                            }, {
                                min: 5, max: 10,
                                message: '长度不在规范内！'
                            }, {
                                pattern: /^\w+$/g,
                                message: '密码必须为英文字母或数字！'
                            }
                        ]}
                    >
                        <Input type='password'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            placeholder='请输入密码'
                        ></Input>
                    </FormItem>
                    <FormItem shouldUpdate>
                        {() => (
                            <Button
                                type="primary"
                                htmlType="submit"
                                onClick={()=>handleSubmit(form2)}
                            >
                                Log in
                            </Button>
                        )}
                    </FormItem>
                </Form>
            </Card>
        </div>
    )
}

