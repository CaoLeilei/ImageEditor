// import { useState } from 'react'
// import { Layout } from 'antd'
import { Layout } from 'antd'
import classNames from 'classnames/bind'
import ImageEditor from './components/ImageEditor'
import styles from './App.less'

const cx = classNames.bind(styles)

function App() {
  return (
    <>
    <Layout className={cx('ImLayout')}>
      <Layout.Header className={cx('ImLayout__Header')}>
      </Layout.Header>
      <Layout>
        <Layout.Sider theme="light" width={65}>
        </Layout.Sider>
        <Layout.Content>
          <ImageEditor />
        </Layout.Content>
        <Layout.Sider theme="light" width={300}></Layout.Sider>
      </Layout>
      <Layout.Footer></Layout.Footer>
    </Layout>
    </>
  )
}

export default App
