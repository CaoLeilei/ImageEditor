// import { useState } from 'react'
// import { Layout } from 'antd'
import { Layout } from 'antd'
import cx from 'classnames'
import ImageEditor from './components/ImageEditor'
import './App.less'

function App() {
  return (
    <>
    <Layout className="ImLayout">
      <Layout.Header className="ImLayout__Header ImLayout__Pane">
      </Layout.Header>
      <Layout  className="ImLayout__Main">
        <Layout.Sider className="ImLayout__Pane" width={47}>
        </Layout.Sider>
        <Layout.Content className="ImLayout__Content">
          <div className="ImLayout__ContentInner">
          {/* <ImageEditor />  */}
          </div>
        </Layout.Content>
        <Layout.Sider width={300} className="ImLayout__Pane"></Layout.Sider>
      </Layout>
      <Layout.Footer className="ImLayout__Footer"></Layout.Footer>
    </Layout>
    </>
  )
}

export default App
