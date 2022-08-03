import React from 'react'
import CommomItem from './CommomItem'
import { Input, Card, Form, Select } from 'antd'
const FormItem = Form.Item
const { Option } = Select;
export default function Registers() {
    const [form] = Form.useForm()
    const formItemLayout = {
        labelCol: {
            span: 6,
        },
        wrapperCol: {
            span: 16,
        },
    }
    let onSubmit=()=>{
        console.log(form.getFieldsValue(),'点击提交传送给后台的数据！');
    }
    
    return (
        <div>
            <Card >
                <Form form={form} {...formItemLayout} style={{ width: 500 }}>
                    <CommomItem type='user' label='用户名' id='user' />
                    <CommomItem type='pwd' label='密码' id='pwd' />
                    <CommomItem type='sex' label='性别' id='sex' />
                    <CommomItem type='age' label='年龄' id='age' />
                    <CommomItem type='status' label='状态' id='status' />
                    <CommomItem type='love' label='爱好' id='love' />
                    <CommomItem type='isMarried' label='婚姻状态' id='isMarried' />
                    <CommomItem type='brithday' label='生日' id='brithday' />
                    <CommomItem type='address' label='地址' id='address' />
                    <CommomItem type='time' label='早起时间' id='time' />
                    <CommomItem type='userImg' label='头像' id='userImg' />
                    <CommomItem type='chec' label='协议' id='chec' />
                    <CommomItem type='btn' label='提交' id='btn'  fn={onSubmit}/>
                </Form>

            </Card>
        </div>
    )
}


