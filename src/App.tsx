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
        <div className="h-3 w-full"></div>
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light" width={65}>
          <div className="relative h-full w-full bg-black-200"></div>
        </Layout.Sider>
        <Layout.Content>
          <ImageEditor />
        </Layout.Content>
      </Layout>
    </Layout>
    </>
  )
}

export default App
