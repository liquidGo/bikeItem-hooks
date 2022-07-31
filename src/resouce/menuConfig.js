import { Link } from "react-router-dom";

const menuList = [
    {
        label:<Link to='/admin/home'>首页</Link>,
        key:'/admin/home'
    },
    {
        label:'UI',
        key:'/admin/ui',
        children:[
            {
                label:<Link to='/admin/ui/buttons'>按钮</Link>,
                key:'/admin/ui/buttons',
            },
            {
                label:<Link to='/admin/ui/modals'>弹框</Link>,
                key:'/admin/ui/modals',
            },
            {
                label:<Link to='/admin/ui/loadings'>Loading</Link>,
                key:'/admin/ui/loadings',
            },
            {
                label:<Link to='/admin/ui/notification'>通知提醒</Link>,
                key:'/admin/ui/notification',
            },
            {
                label:<Link to='/admin/ui/messages'>全局Message</Link>,
                key:'/admin/ui/messages',
            },
            {
                label:<Link to='/admin/ui/tabs'>Tab页签</Link>,
                key:'/admin/ui/tabs',
            },
            {
                label:<Link to='admin/ui/gallery'>图片画廊</Link>,
                key:'/admin/ui/gallery',
            },
            {
                label:<Link to='/admin/ui/carousel'>轮播图</Link>,
                key:'/admin/ui/carousel',
            }
        ]
    },
    {
        label:'表单',
        key:'/admin/form',
        children:[
            {
                label:<Link to='/admin/form/login'>登录</Link>,
                key:'/admin/form/login',
            },
            {
                label:<Link to='/admin/form/reg'>注册</Link>,
                key:'/admin/form/reg',
            }
        ]
    },
    {
        label:'表格',
        key:'/admin/table',
        children:[
            {
                label:<Link to='/admin/table/basic'>基础表格</Link>,
                key:'/admin/table/basic',
            },
            {
                label:<Link to='/admin/table/high'>高级表格</Link>,
                key:'/admin/table/high',
            }
        ]
    },
    {
        label:<Link to='/admin/rich'>富文本</Link>,
        key:'/admin/rich'
    },
    {
        label:<Link to='/admin/city'>城市管理</Link>,
        key:'/admin/city'
    },
    {
        label:<Link to='/admin/order'>订单管理</Link>,
        key:'/admin/order',
        // btnList:[
        //     {
        //         label:<Link to=></Link>'订单详情',
        //         key:'/common/detail'
        //     },
        //     {
        //         label:<Link to=></Link>'结束订单',
        //         key:'/admin/finish'
        //     }
        // ]
    },
    {
        label:<Link to='/admin/user'>员工管理</Link>,
        key:'/admin/user'
    },
    {
        label:<Link to='/admin/bikemap'>车辆地图</Link>,
        key:'/admin/bikemap'
    },
    {
        label:'图标',
        key:'/admin/charts',
        children:[
            {
                label:<Link to='/admin/charts/bar'>柱形图</Link>,
                key:'/admin/charts/bar'
            },
            {
                label:<Link to='/admin/charts/pie'>饼图</Link>,
                key:'/admin/charts/pie'
            },
            {
                label:<Link to='/admin/charts/line'>折线图</Link>,
                key:'/admin/charts/line'
            },
        ]
    },
    {
        label:<Link to='/admin/permission'>权限设置</Link>,
        key:'/admin/permission'
    },
];
export default menuList;