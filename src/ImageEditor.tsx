import React from "react";
import { Layout } from "antd";
import './ImageEditor.less'

interface IImageEditorProps {
  src: string

  onChange?: (src: string) => void
  onSave?: (src: string) => void
}

const ImageEditor: React.FC = () => {

  return (
    <Layout className="ImageEditor">
      <Layout.Header className="ImageEditor__Header"></Layout.Header>
      <Layout className="ImageEditor__Container">
        <Layout.Sider className="ImageEditor__LeftSider" theme="light" width={61}></Layout.Sider>
        <Layout.Content className="ImageEditor__Content"></Layout.Content>
        <Layout.Sider className="ImageEditor__RightSider" width={66}></Layout.Sider>
      </Layout>
    </Layout>

  )
}

export default ImageEditor