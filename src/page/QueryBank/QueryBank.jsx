import React from 'react'
import { Form, Select, DatePicker, Button } from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option

export default function QueryBank(props) {
    let { type, name, btnSub, btnRest } = props
    let returnItem = (type, name, btnSub, btnRest) => {
        switch (type) {

            case 'city':
                // console.log();
                return (
                    <FormItem label='城市' initialValue='' name={name}>
                        <Select style={{ width: 90 }}>
                            <Option value=''>全部</Option>
                            <Option value={1}>北京市</Option>
                            <Option value={2}>上海市</Option>
                            <Option value={3}>深圳市</Option>
                        </Select>
                    </FormItem>
                )
            case 'start_time':
                return (
                    <FormItem label='开始时间' name={name}>
                        <DatePicker style={{ width: 150 }} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>
                )
            case 'end_time':
                return (
                    <FormItem label='~' colon={false} initialValue={moment()} name={name}>
                        <DatePicker style={{ width: 150 }} format="YYYY-MM-DD HH:mm:ss" />
                    </FormItem>
                )
            case 'state':
                return (
                    <FormItem label='订单状态' initialValue='' name={name}>
                        <Select style={{ width: 90 }}>
                            <Option value=''>全部</Option>
                            <Option value={1}>进行中</Option>
                            <Option value={2}>结束行程</Option>
                        </Select>
                    </FormItem>
                    
                )
            case 'query':
                return (
                    <Button type='primary' style={{marginRight:10}} onClick={btnSub}>查询</Button>
                )
            case 'reset':
                return (
                    <Button  onClick={btnRest}>重置</Button>
                )
        }

    }

    return (
        <>
            {returnItem(type, name, btnSub, btnRest)}
        </>
    )
}
