import React, { useState, useEffect, useRef } from 'react'
import { Card, Tabs } from 'antd'
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;


export default function Tabs1() {
    const initialPanes = [
        {
            title: 'Tab 1',
            content: 'Content of Tab 1',
            key: '1',
        },
        {
            title: 'Tab 2',
            content: 'Content of Tab 2',
            key: '2',
        },
        {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',
            closable: false,
        },
    ];
    //遍历生成tab页
    const [panes, setPanes] = useState(initialPanes);
    // 默认选中0
    const [activeKey, setActiveKey] = useState(initialPanes[0].key);
    // 创建一个容器
    const newTabIndex = useRef(0);

    const onChange = (newActiveKey) => {
        setActiveKey(newActiveKey);
    };

    //删除或者添加调用
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };
    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        const newPanes = [...panes];
        newPanes.push({
            title: 'New Tab',
            content: 'Content of new Tab',
            key: newActiveKey,
        });
        setPanes(newPanes);
        setActiveKey(newActiveKey);
    };
    const remove = (targetKey) => {
        let newActiveKey = activeKey;
        let lastIndex = -1;
        panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const newPanes = panes.filter((pane) => pane.key !== targetKey);

        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key;
            } else {
                newActiveKey = newPanes[0].key;
            }
        }

        setPanes(newPanes);
        setActiveKey(newActiveKey);
    };





    return (
        <div>
            <Card title='普通标签'>
                <Tabs defaultActiveKey='1' onChange={onChange}>
                    <TabPane tab='tab1' key={1}>标签1</TabPane>
                    <TabPane tab='tab2' key={2}>标签2</TabPane>
                    <TabPane tab='tab3' key={3}>标签3</TabPane>
                </Tabs>
            </Card>
            <Card title='带图的标签'>
                <Tabs defaultActiveKey='1' onChange={onChange}>
                    <TabPane tab={<span><PlusOutlined />tab1</span>} key={1}>标签1</TabPane>
                    <TabPane tab={<span><EditOutlined />tab2</span>} key={2}>标签2</TabPane>
                    <TabPane tab={<span><DeleteOutlined />tab3</span>} key={3}>标签3</TabPane>
                </Tabs>
            </Card>
            <Card title='带增加和删除的标签'>
                <Tabs type="editable-card"
                    onChange={onChange}
                    activeKey={activeKey}
                    onEdit={onEdit}>
                    {panes.map((pane) => (
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                        </TabPane>
                    ))}
                </Tabs>
            </Card>
        </div>
    )
}
