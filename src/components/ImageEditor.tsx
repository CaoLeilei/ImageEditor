import React, { useRef, useEffect } from "react";

const ImageEditor = props => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  let ImageCanvas = null

  useEffect(() => {
    // Inv
  }, [])

  console.log('canvasRef:', canvasRef)

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  )
}

export default ImageEditor