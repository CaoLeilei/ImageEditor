

export interface CanvasOptions {
  dom?: HTMLCanvasElement;
  width?: number;
  height?: number;
  devicePixelRatio?: number;
  scale?: number;
}

export class CanvasBase {
  // 当前的canvas dom
  private canvasDom?: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null;
  private width: number = 600;
  private height: number = 400;
  private devicePixelRatio: number = 1;
  private scale: number = 1

  constructor(option: CanvasOptions) {
    this.devicePixelRatio = option.devicePixelRatio || this._getDevicePixelRatio()
    this.scale = option.scale || 1
    this.width = (option.width || 600) * this.devicePixelRatio
    this.height = (option.height || 400) * this.devicePixelRatio

    this.canvasDom = option.dom || document.createElement('canvas')
    this.canvasDom.width = this.width
    this.canvasDom.height = this.height

    this.ctx = this.canvasDom.getContext('2d')
  }

  private _getDevicePixelRatio(): number {
    return window.devicePixelRatio
  }

  getCanvasDom(): HTMLCanvasElement {
    return this.canvasDom!
  }
  getContext(): CanvasRenderingContext2D {
    return this.ctx!
  }

  setSize(width: number, height: number) {
    this.width = width * this.devicePixelRatio
    this.height = height * this.devicePixelRatio
    this.canvasDom!.width = this.width
    this.canvasDom!.height = this.height
  }
}

export class Canvas extends CanvasBase {
  constructor(option: CanvasOptions) {
    super(option)
  }

  drawImage(image) {}

  getImageData() {
  }
}