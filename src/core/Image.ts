export class CImage {
  image: HTMLImageElement
  naturalWidth: number;
  naturalHeight: number; // 图片的原始高度

  // imageData:

  constructor(image: HTMLImageElement) {
    this.image = image
    this.naturalWidth = image.naturalWidth
    this.naturalHeight = image.naturalHeight
  }

  loadImageData() {
    // if (this.imageData) {}
  }
}