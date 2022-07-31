import React from 'react'
import { Row, Col } from 'antd'
import NavLeft from './components/NavLeft/NavLeft'
import Headers from './components/Headers/Headers'
import Footer from './components/Footers/Footer'
import 'antd/dist/antd.min.css';
import './style/common.less'


export default function App(props) {
    return (
        <div>
            <Row className='container'>
                <Col span={4} className='nav-left'>
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Headers />
                    <div className="content" >
                        {/* <Home/> */}
                        {props.children}
                    </div>
                    <Footer />
                </Col>
            </Row>
        </div>
    )
}
