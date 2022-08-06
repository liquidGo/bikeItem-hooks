import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Card } from 'antd'
import _ from 'lodash'
import axios from '../../packaging/Packaging'
import '../../resouce/api/order/detail'
import '../../style/common.less'
import './detail.less'


export default function Order_details(props) {
    const [datas, setDatas] = useState([])
    var map = null
    let getDetails = (data) => {
        console.log(data, 'data11');
        axios.Axios('detail.php', {
            params: {
                bike_sn: data.bike_sn,
                order_sn: data.order_sn,
                status: data.status,
                user_name: data.user_name,
                distance: data.distance
            }
        }).then(res => {
            setDatas(res.data.result)
            renderMap(res.data.result)
        })
    }
    useEffect(() => {
        let order = props.match.params
        if (order) {
            getDetails(order)
        }
    }, [])


    // 地图部分
    let renderMap = result => {
        map = new window.BMap.Map('orderDetailMap')
        // 创建Map实例
        console.log(map, 'map');

        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11);
        // 开启鼠标滚轮缩放
        map.enableScrollWheelZoom(true);
        // 调用地图控件添加方法
        addMapControl();
        // // 调用绘制用户行驶路线方法
        console.log(result.position_list, '123');
        drawBikeRoute(result.position_list);
        // // 调用绘制服务区方法
        drawServiceArea(result.area);
    }
    // 添加地图控件
    let addMapControl = () => {
        console.log(map, 'map');
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }

    // 绘制用户行驶路线
    let drawBikeRoute = positionList => {
        let startPoint = '';
        let endPoint = '';
        if (positionList.length > 0) {
            let first = positionList[0];
            let last = positionList[positionList.length - 1];
            startPoint = new window.BMap.Point(first.lon, first.lat);
            let startIcon = new window.BMap.Icon('/assets/start_point.png', new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            });
            let startMarker = new window.BMap.Marker(startPoint, { icon: startIcon });
            map.addOverlay(startMarker);
            endPoint = new window.BMap.Point(last.lon, last.lat);
            let endIcon = new window.BMap.Icon('/assets/end_point.png', new window.BMap.Size(36, 42), {
                imageSize: new window.BMap.Size(36, 42),
                anchor: new window.BMap.Size(36, 42)
            });
            let endMarker = new window.BMap.Marker(endPoint, { icon: endIcon });
            map.addOverlay(endMarker);
        }

        // 连接路线图
        let trackPoint = [];
        for (let i = 0; i < positionList.length; i++) {
            let point = positionList[i];
            trackPoint.push(new window.BMap.Point(point.lon, point.lat))
        }
        let polyline = new window.BMap.Polyline(trackPoint, {
            strokeColor: "#1869AD",
            strokeWeight: 3,
            strokeOpacity: 1
        });
        map.addOverlay(polyline);
        map.centerAndZoom(endPoint, 11);
    }



    let drawServiceArea = area => {
        let trackPoint = [];
        for (let i = 0; i < area.length; i++) {
            let point = area[i];
            trackPoint.push(new window.BMap.Point(point.lon, point.lat))
        }
        let polygon = new window.BMap.Polygon(trackPoint, {
            strokeColor: "#CE0000",
            strokeWeight: 3,
            fillColor: "#ff8605",
            fillOpacity: 0.4
        });
        map.addOverlay(polygon);
    }



    let { status, order_sn, bike_sn, user_name, start_location, end_location, distance } = datas
    return (
        <div>

            <Card style={{ margin: 60, width: '100vw' }}>
                <div id='orderDetailMap' className='order-map'></div>
                <div className='detail-items'>
                    <div className='item-title'>基础信息</div>
                    <ul className="detail-form">
                        <li>
                            <div className='detail-form-left'>当前状态</div>
                            <div className='detail-form-content'>{(status = 1 ? '进行中' : '结束行程') ? (status = 1 ? '进行中' : '结束行程') : '正在查询'}</div>
                        </li>
                        <li>
                            <div className='detail-form-left'>订单编号</div>
                            <div className='detail-form-content'>{order_sn ? order_sn : '正在查询'}</div>
                        </li>
                        <li>
                            <div className='detail-form-left'>车辆编号</div>
                            <div className='detail-form-content'>{bike_sn ? bike_sn : '正在查询'}</div>
                        </li>
                        <li>
                            <div className='detail-form-left'>用户姓名</div>
                            <div className='detail-form-content'>{user_name ? user_name : '正在查询'}</div>
                        </li>
                    </ul>
                </div><hr />
                <div className='detail-items'>
                    <div className='item-title'>行程轨迹</div>
                    <ul className="detail-form">
                        <li>
                            <div className='detail-form-left'>行程起点</div>
                            <div className='detail-form-content'>{start_location ? start_location : '正在查询'}</div>
                        </li>
                        <li>
                            <div className='detail-form-left'>行程终点</div>
                            <div className='detail-form-content'>{end_location ? end_location : '正在查询'}</div>
                        </li>
                        <li>
                            <div className='detail-form-left'>行车里程</div>
                            <div className='detail-form-content'>{distance ? distance / 1000 + 'Km' : '正在查询'}</div>
                        </li>
                    </ul>
                </div>
            </Card>
        </div>
    )
}
