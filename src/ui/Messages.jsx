import { Button, Card, message } from 'antd'
import React from 'react'

export default function Messages() {
    let messagesOpen = (type) => {
        message[type](
            '我一定行'
        )
    }
    return (
        <div>
            <Card title='全局提示框' className='card-wrap'>
                <Button onClick={() => messagesOpen('success')}>success</Button>
                <Button onClick={() => messagesOpen('info')}>info</Button>
                <Button onClick={() => messagesOpen('warning')}>warning</Button>
                <Button onClick={() => messagesOpen('error')}>error</Button>
                <Button onClick={() => messagesOpen('loading')}>loading</Button>
            </Card>
        </div>
    )
}
