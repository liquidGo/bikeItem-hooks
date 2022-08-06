import React from 'react'
import { Row, Col } from 'antd'
import Headers from './components/Headers/Headers'
import './style/common.less'
import './components/Headers/index.less'

export default function TargetPageCommon(props) {
    return (
        <div>
            <Row className="simple-page">
                <Headers menuType='second' />
            </Row>
            <Row>
                {props.children}
            </Row>
        </div>
    )
}
