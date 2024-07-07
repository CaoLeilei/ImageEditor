import React from "react";
import { Canvas, Image as FabricImage } from "fabric";
// import * as fabric from "fabric";

// console.log('fabric：', FabricImage)

// const { Canvas, Image } = fabric
console.log(FabricImage)

interface IImageViewProps {
  image: string;
}

interface IImageViewState {
  width: number;
  height: number;
}

export default class ImageView extends React.Component {
  canvasRef: React.RefObject<HTMLCanvasElement> = React.createRef(null);
  canvas: Canvas | null = null;

  state: Readonly<IImageViewState> = {
    width: 600,
    height: 600,
  }

  constructor(props: IImageViewProps) {
    super(props);
  }

  componentDidMount(): void {
    this.initFabricCanvas();
    this.addFabricEventListener();
  }

  componentWillUnmount(): void {
    this.removeFabricEventListener();
    this.disposeFabricCanvas();
  }

  /**
   * 创建FabricCanvas对象
   */
  initFabricCanvas = () => {
    const { width, height } = this.state
    this.canvas = new Canvas('ImgCanvas', {
      width,
      height,
      backgroundColor: '#ffffff',
      preserveObjectStacking: true,
      selection: false,
      isDrawingMode: false,
      skipTargetFind: true,
      selectionColor: 'rgba(255, 255, 255, 1)',
      selectionDashArray: [5, 5],
    });

    this.canvas.renderAndReset()
    // this.canvas.renderAll()
    // this.canvas.renderTop()

    // const rect = new Rect()
    // rect.setX(0)
    // rect.setY(0)
    // rect.width = 200
    // rect.height = 200

    // this.canvas.add(rect)

    // // this.canvas.backgroundColor = '#ffffff';
    // this.canvas.backgroundImage = new FabricImage('http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960', (img) => {
    //   console.log(img)
    // });
  }

  disposeFabricCanvas = () => {
    this.canvas?.dispose();
    this.canvas = null;
  }

  /**
   * 添加全部的事件监听
   */
  addFabricEventListener = () => {}

  removeFabricEventListener = () => {}

  loadImage = () => {
    // const image = new FabricImage(this.props.image, (img) => {
    //   console.log(img)
    //   this.canvas?.add(img)
    // });
  }

  /**
   * 获取图片数据
   */
  getImageData = () => {}


  render() {
    const { width, height } = this.state

    const imageViewStyles = {
      width: `${width}px`,
      height: `${height}px`,
    }

    return (
      <div className="ImageView" style={imageViewStyles}>
        <canvas id="ImgCanvas"></canvas>
      </div>
    );
  }
}