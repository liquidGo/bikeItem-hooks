import { Card, Button, notification } from 'antd'
import React from 'react'

export default function Notification() {
    let notificationOpen = (type, direction) => {
        if (direction) {
            notification[type]({
                message: '我一定行',
                description: '我一定能成功！',
                placement: direction
            })
        } else {
            notification[type]({
                message: '我一定行',
                description: '我一定能成功！',
            })
        }

    }
    return (
        <div >
            <Card title='通知提醒框' className='card-wrap'>
                <Button onClick={() => { notificationOpen('success') }}>Success</Button>
                <Button onClick={() => { notificationOpen('info') }}>Info</Button>
                <Button onClick={() => { notificationOpen('warning') }}>Warning</Button>
                <Button onClick={() => { notificationOpen('error') }}>Error</Button>
            </Card> 
            <Card title='四角提醒框' className='card-wrap'>
                <Button onClick={() => { notificationOpen('success','topLeft') }}>Success</Button>
                <Button onClick={() => { notificationOpen('success','bottomRight') }}>Info</Button>
                <Button onClick={() => { notificationOpen('success','bottomLeft') }}>Warning</Button>
                <Button onClick={() => { notificationOpen('success' ,'topRight') }}>Error</Button>
            </Card>
        </div>
    )
}
