import React, { useRef } from 'react'

interface ViewContentProps {
}

const ViewContent: React.FC = (props: ViewContentProps) => {
  console.log(props)
  const canvas = useRef(null)
  return <div />
}

export default ViewContent;