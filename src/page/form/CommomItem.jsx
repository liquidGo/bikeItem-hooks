import React, { useState } from 'react'
import { LockOutlined, LoadingOutlined, UserOutlined, PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import { Input, Form, Radio, TimePicker, Checkbox, message, InputNumber, DatePicker, Select, Space, Switch, Upload, Button } from 'antd'
const TextArea = Input.TextArea
const FormItem = Form.Item
const RadioGroup = Radio.Group
const Option = Select.Option
const userRules = [
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
]
const pwdRules = [
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
]




export default function CommomItem(props) {
    console.log(props, '子组件的封装');
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();


    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }

        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }

        return isJpgOrPng && isLt2M;
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );



    let { type, id, label,fn } = props
    let items = (type, id, label,fn) => {
        // console.log(type,id,label);
        switch (type) {
            case 'user':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue='请输入用户名'
                        rules={userRules}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            type='text'
                        ></Input>
                    </FormItem>
                )
            case 'pwd':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue='请输入密码'
                        rules={pwdRules}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type='text'
                        ></Input>
                    </FormItem>
                )
            case 'sex':
                return (
                    <FormItem
                        name={id}
                        label={label}
                        initialValue={1}
                    >
                        <RadioGroup>
                            <Radio value={1}>男</Radio>
                            <Radio value={2}>女</Radio>
                        </RadioGroup>
                    </FormItem>
                )
            case 'age':
                return (
                    <FormItem
                        label={label}
                        name={id}
                    >
                        <Input
                            type='text'
                            style={{ width: 100 }}
                        ></Input>


                        {/* <InputNumber min={1} max={10} value={3} />; */}
                    </FormItem>
                )
            case 'status':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue={1}
                    >
                        <Select
                            value={1}
                        >
                            <Option value={1}>菜鸟</Option>
                            <Option value={2}>高手</Option>
                        </Select>
                    </FormItem>
                )
            case 'love':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue={[1]}

                    >
                        <Select
                            mode='multiple'
                        >
                            <Option value={1}>看书</Option>
                            <Option value={2}>玩游戏</Option>
                            <Option value={3}>演讲</Option>
                        </Select>
                    </FormItem>
                )
            case 'isMarried':
                return (
                    <FormItem
                        name={id}
                        label={label}
                        valuePropName='checked'
                        initialValue={true}
                    >
                        <Switch />
                    </FormItem>
                )
            case 'brithday':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue={moment('2022-07-18')}
                    >
                        <DatePicker
                            showTime
                            format='YYYY-MM-DD HH:mm:ss'
                        />
                    </FormItem>
                )
            case 'address':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        initialValue='哈尔滨市南岗区'
                    >
                        <TextArea
                            autoSize={
                                {
                                    minRows: 4,
                                    maxRows: 5
                                }
                            }
                        >

                        </TextArea>
                    </FormItem>
                )
            case 'time':
                return (
                    <FormItem
                        label={label}
                        name={id}
                    >
                        <TimePicker
                            showTime
                            format='YYYY-MM-DD HH:mm:ss'
                        />
                    </FormItem>
                )
            case 'userImg':
                return (
                    <FormItem
                        label={label}
                        name={id}
                        valuePropName='userImg'
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>
                    </FormItem>
                )
            case 'chec':
                return (
                    <FormItem
                        label={label}
                        name={id}
                    >
                        <Checkbox checked>
                            我已经阅读过<a href="#">慕课协议</a>
                        </Checkbox>
                    </FormItem>

                )
            case 'btn':
                return (
                    <FormItem
                    name={id}
                    label='确认'
                    >
                        <Button
                            type='primary'
                            onClick={()=>{fn()}}
                        >
                            {label}
                        </Button>
                    </FormItem>
                )
        }

    }
    return (
        <div>
            {items(type, id, label,fn)}
        </div>
    )
}
