import { CImage } from "./Image";
export interface ImageEditorOptions {
  width?: number
  height?: number
}

export default class ImageEditor {
  DEFAULT_OPTIONS = {}
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D | null;
  width: number;
  height: number;

  image: CImage

  constructor(dom: HTMLCanvasElement | null, options: ImageEditorOptions) {
    // window.devicePixelRatio
    this.width = options.width || 600;
    this.height = options.height || 400;

    if (dom === null) {
      this.canvas = document.createElement('canvas');
    } else {
      this.canvas = dom;
    }

    this.canvas.width = this.width
    this.canvas.height = this.height
    this.ctx = this.canvas.getContext('2d');
  }

  loadImage(imageSrc: string);
  loadImage(image: HTMLImageElement) {
    if (typeof image === 'string') {
      // 调用方法进行加载图片的
    } else if (typoef image === 'HTMLImageElement') {
      this.image = new CImage(image)
    }
  }
}