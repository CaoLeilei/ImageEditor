import React, { useRef, useEffectct } from "react";

const ImageEditor = props => {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  let ImageCanvas = null

  useEffectct(() => {
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