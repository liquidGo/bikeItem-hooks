import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import Packaging from '../../packaging/Packaging'
import '../Headers/index.less'

export default function Headers() {
    let [welComeName, setwelComeName] = useState('左岸')
    let [weather, setWeather] = useState('')
    let [time, setTime] = useState('')
    useEffect(() => {

        Packaging.Axios('https://www.yiketianqi.com/free/day?appid=59964865&appsecret=B6k8KEOl&unescape=1')
            .then(res => {
                // console.log(res,'测试封装的组件');
                setWeather({ city: res.data.city, tem: res.data.tem, wea: res.data.wea })
            })
        // console.log(Packaging.DateUpdate());
        setInterval(() => {
            setTime(Packaging.DateUpdate())
        }, 1000);

    }, [])
    return (
        <div className='header'>
            <Row className='header-top'>
                <Col span={24}>
                    <span>欢迎,{welComeName}</span>
                    <a href="#">退出</a>
                </Col>
            </Row>
            <Row className='breadcrumb'>
                <Col span={4} className='breadcrumb-title'>首页</Col>
                <Col span={20} className='weather'>
                    <span className='data'>{time} </span>
                    <span className='weather-datial'>{`${weather.city} ${weather.wea} ${weather.tem}°`}</span>
                </Col>
            </Row>
        </div>
    )
}
