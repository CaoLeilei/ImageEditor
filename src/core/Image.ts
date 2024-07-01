export class Image {
  private imageSrc: string;
  private image: HTMLImageElement;
  private imageData: ImageData;
  private width: number = 0
  private height: number = 0

  constructor(imageSrc: string) {
    this.imageSrc = imageSrc;
    this.image = new Image();
    this.image.src = imageSrc;
  }

  /**
   * 使用imageSrc进行初始化Image标签，同时对图片的数据进行加载，然后解析图片上的数据
   */
  async initImage() {
    return new Promise((resolve, reject) => {
      this.image.onload = () => {
        this.imageData = this.getImageData();
        resolve(this.imageData);
      };
      this.image.onerror = () => {
        reject(new Error('图片加载失败'));
      };
    });
  }

  loadImage() {
    return new Promise((resolve, reject) => {
      this.image.onload = () => {
        resolve(this.image);
      };
      this.image.onerror = () => {
        reject(new Error('图片加载失败'));
      };
    });
  }

  getImageData() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = this.image.width;
    canvas.height = this.image.height;
    ctx?.drawImage(this.image, 0, 0);
    return ctx?.getImageData(0, 0, this.image.width, this.image.height);
  }
}