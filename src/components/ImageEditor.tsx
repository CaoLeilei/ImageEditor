import React, { useRef, useEffect } from "react";
import { Canvas } from "fabric";

interface ImageEditorProps {
  width?: number;
  height?: number;
}

export default class ImageEditor extends React.Component {
  canvas: Canvas | null;
  canvasRef: HTMLCanvasElement | null;

  constructor(props: ImageEditorProps) {
    super(props);
    this.canvasRef = null
    this.canvas = null
  }

  componentDidMount() {
    // this.canvas.setWidth(window.innerWidth);
    // this.canvas.setHeight(window.innerHeight);
    // this.canvas.setBackgroundColor("white", this.canvas.renderAll.bind(this.canvas));
  }

  /**
   * @description
   * @memberof ImageEditor
   */
  componentWillUnmount(): void {
    // this.fab
    this.canvas?.dispose()
  }

  private initEditorSize() {
  }

  render() {
    return (
      <div className="ImageEditor">
        <canvas id="c" />;
      </div>
    )
  }
}

// const ImageEditor = props => {

//   const canvasRef = useRef<HTMLCanvasElement>(null)
//   let ImageCanvas = null

//   useEffect(() => {
//     // Inv
//   }, [])

//   console.log('canvasRef:', canvasRef)

//   return (
//     <div>
//       <canvas ref={canvasRef} />
//     </div>
//   )
// }

// export default ImageEditor