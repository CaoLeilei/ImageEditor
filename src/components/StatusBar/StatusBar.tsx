import React from "react"
import classnames from 'classnames/bind'
import styles from './StatusBar.less'

const cx = classnames.bind(styles)

interface StatusBarOptions {

}

const StatusBar: React.FC = (props: StatusBarOptions) => {
  return <div className={cx('StatusBar')} />
}

export default StatusBar