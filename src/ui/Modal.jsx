import React, { useState, useEffect } from 'react'
import { Modal, Card, Button } from 'antd'

export default function Modals() {
    let [d1, setD1] = useState(false)
    let [d2, setD2] = useState(false)
    let [d3, setD3] = useState(false)
    let [d4, setD4] = useState(false)
    let handConfirm = (type) => {
        Modal[type]({
            title: '确认',
            content: '左岸一定行！',
            onOk() {
                console.log('ok');
            },
            onCancel() {
                console.log('123');
            }
        })
    }
    return (
        <div>
            <Card className='card-wrap' title='基础提示框'>
                <Button onClick={() => { setD1(true) }}>Open</Button>
                <Button onClick={() => { setD2(true) }}>自定义页脚</Button>
                <Button onClick={() => { setD3(true) }}>顶部20px</Button>
                <Button onClick={() => { setD4(true) }}>水平居中提示框</Button>
            </Card>
            <Card className='card-wrap' title='信息确认框'>
                <Button onClick={() => handConfirm('confirm')}>确定</Button>
                <Button onClick={() => handConfirm('info')}>相关</Button>
                <Button onClick={() => handConfirm('success')}>成功</Button>
                <Button onClick={() => handConfirm('warning')}>警告</Button>
            </Card>
            <Modal title='加油' onCancel={() => setD1(false)} visible={d1}>欢迎</Modal>
            <Modal title='加油' okText='好的' cancelText='算了' onCancel={() => setD2(false)} visible={d2}>欢迎</Modal>
            <Modal title='加油' style={{ top: 20 }} onCancel={() => setD3(false)} visible={d3}>欢迎</Modal>
            <Modal wrapClassName='vertical-center-modal' title='加油' onCancel={() => setD4(false)} visible={d4}>欢迎</Modal>
        </div>
    )
}
