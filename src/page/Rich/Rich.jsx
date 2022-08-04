import React, { useState } from 'react'
import {Card,Button,Modal} from 'antd'
import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.js"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftjs from 'draftjs-to-html';

export default function Rich() {
    let [showRichText, setShowRichText] = useState(false)
    let [contentState, setContentState] = useState('')
    let [editorState, setEditorState] = useState()
    let onEditorChange = (contentState) => {
        setContentState(contentState)
    }

    let handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }
    let handleClearContent = () => {
        setEditorState('')
    }
    let onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    return (
        <div>
            <Card>
                <Button onClick={handleClearContent} style={{ marginRight: 10 }}>清空内容</Button>
                <Button onClick={handleGetText}>获取HTML文本</Button>
            </Card>
            <Card title='富文本编辑器'>
                <Editor
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onContentStateChange={onEditorChange}
                    onEditorStateChange={onEditorStateChange}
                />;
            </Card>
            <Modal
                title='富文本'
                visible={showRichText}
                onCancel={() => {
                    setShowRichText(false)
                }}
                footer={null}
            >
                {draftjs(contentState)}
            </Modal>
        </div>
    )
}
