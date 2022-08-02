import React, { useEffect, useState } from 'react'
import { PlusOutlined, EditOutlined, DeleteOutlined, LeftOutlined, RightOutlined, FileSearchOutlined, DownOutlined, PoweroffOutlined } from '@ant-design/icons';

import { Card, Button, Radio, Tooltip } from 'antd'
import './index.less'
const RadioGroup = Radio.Group

export default function Buttons() {
    let [Loadings, setLoading] = useState(true)
    let [size, setSize] = useState('large')
    let close1 = () => {
        setLoading(false)
    }

    return (
        <div>
            <Card title='基本按钮' className='card-wrap'>
                <Button type="primary">i get success</Button>
                <Button>i get success</Button>
                <Button type="dashed">i get success</Button>
                <Button type="danger">i get success</Button>
                <Button type='disabled'>i get success</Button>
            </Card>
            <Card title='图形按钮' className='card-wrap'>
                <Button type="primary" icon={<PlusOutlined />}>增加</Button>
                <Button icon={<EditOutlined />}>编辑</Button>
                <Button icon={<DeleteOutlined />} >删除</Button>
                <Button shape='circle' icon={<FileSearchOutlined />} ></Button>
                <Button type='disabled' icon={<FileSearchOutlined />} >搜索</Button>
                <Button type='disabled' icon={<DownOutlined />} >下载</Button>
            </Card>
            <Card title='Loading按钮' className='card-wrap'>
                <Button type="primary" loading={Loadings}>确定</Button>
                <Button type="primary" shape='circle' loading={Loadings}></Button>
                <Button loading={Loadings}>点击加载</Button>
                <Button shape='circle' loading={Loadings}></Button>
                <Button onClick={close1}>关闭</Button>
            </Card>
            <Card title='按钮组' className='card-wrap'>
                <Button type="primary" icon={<LeftOutlined />}>后退</Button>
                <Button type="primary" icon={<RightOutlined />}>前进</Button>
            </Card>
            <Card title='按钮尺寸' className='card-wrap'>
                <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
                    <Radio value='small'>小</Radio>
                    <Radio value='default'>中</Radio>
                    <Radio value='large'>大</Radio>
                </Radio.Group>
                <Button type='primary' size={size}>Imooc</Button>
                <Button size={size} type='dashed'>Imooc</Button>
                <Button size={size} type='danger'>Imooc</Button>
            </Card>
        </div >
    )
}
