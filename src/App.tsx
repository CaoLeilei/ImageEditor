// import { useState } from 'react'
// import { Layout } from 'antd'
import { Layout } from 'antd'
import './App.less'
import ImageEditor from './components/ImageEditor'

function App() {
  return (
    <>
    <Layout className="ImLayout">
      <Layout.Header className="bg-light-100">
        <div className="bg-purple-50 h-3 w-full"></div>
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light"></Layout.Sider>
        <Layout.Content>
          <ImageEditor />
        </Layout.Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App
