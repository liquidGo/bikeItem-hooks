import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Card, Spin, Alert } from 'antd'

export default function Loading() {

    return (
        <div>
            <Card title='Spin用法' className='card-wrap'>
                <Spin size='small'></Spin>
                <Spin size='default' style={{ margin: '0 10px' }}></Spin>
                <Spin size='large' style={{ marginRight: '10px' }}></Spin>
                <Spin spinning={true} indicator={<LoadingOutlined style={{ fontSize: 24 }} />}></Spin>
            </Card>
            <Card title='内容遮罩' className='card-wrap'>
                <Spin
                    spinning={false}
                >
                    <Alert
                        message='React'
                        description='欢迎！'
                        type='info'
                    ></Alert>
                </Spin>
                <Spin tip='...加载中'>
                    <Alert
                        message='React'
                        description='欢迎！'
                        type='warning'
                    ></Alert>
                </Spin>
                <Spin>
                    <Alert
                        message='React'
                        description='欢迎！'
                        type='warning'
                    ></Alert>
                </Spin>
                <Spin>
                    <Alert
                        message='React'
                        description='欢迎！'
                        type='warning'
                    ></Alert>
                </Spin>

            </Card>
        </div>
    )
}
