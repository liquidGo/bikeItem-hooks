import { Card, Row, Col } from 'antd'
import React from 'react'

export default function Gallerys() {
    const imgs = [
        ['1.png', '2.png', '3.png', '4.png', '5.png'],
        ['6.png', '7.png', '8.png', '9.png', '10.png'],
        ['11.png', '12.png', '13.png', '14.png', '15.png'],
        ['16.png', '17.png', '18.png', '19.png', '20.png'],
        ['21.png', '22.png', '23.png', '24.png', '25.png']
    ]
    const imgsList = imgs.map(list => {
        return list.map(item => {
            return <Card
                key={item}
                cover={<img src={'/gallery/' + item} alt='' />}
                style={{ marginBottom: 10 }}
            >
                 <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        })
    })
    return (
        <div className='card-wrap'>

            <Row gutter={10}>
                <Col md={5}>{imgsList[0]}</Col>
                <Col md={5}>{imgsList[1]}</Col>
                <Col md={5}>{imgsList[2]}</Col>
                <Col md={5}>{imgsList[3]}</Col>
                <Col md={4}>{imgsList[4]}</Col>
            </Row>
        </div>
    )
}
