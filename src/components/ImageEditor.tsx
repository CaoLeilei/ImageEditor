import React from "react";
import { Layout } from 'antd'
import EditorHeader from "./EditorHeader/EditorHeader";
import EditorSide from "./EditorSide/EditorSide";
import AsideTools from "./EditorSide/AsideTools";
import EditorContent from "./EditorContent/EditorContent";

import './ImageEditor.less';

interface IImageEditorProps {
}

interface IImageEditorState {
}

export default class ImageEditor extends React.Component {

  state: Readonly<IImageEditorState> = {
  };

  constructor(props: IImageEditorProps) {
    super(props);
  }

  render() {
    return (
      <>
      <Layout className="ImageEditor">
        <Layout.Header className="ImageEditor__Header">
          <EditorHeader />
        </Layout.Header>
        <Layout  className="ImageEditor__Main">
          <Layout.Sider className="ImageEditor__ToolAside" width={71}>
            <EditorSide />
          </Layout.Sider>
          <Layout.Content className="ImageEditor__Content">
            <div className="ImageEditor__ContentInner">
            <EditorContent />
            </div>
          </Layout.Content>
          <Layout.Sider width={300} className="ImageEditor__Pane"></Layout.Sider>
          <Layout.Sider className="ImageEditor__ToolAside" width={71}>
            <AsideTools />
          </Layout.Sider>
        </Layout>
        <Layout.Footer className="ImageEditor__Footer"></Layout.Footer>
      </Layout>
      </>
    )
  }
}