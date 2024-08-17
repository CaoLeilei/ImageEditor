
export const LoadImageByUrl = (imgUrl: string) => {
  return new Promise((reslove, reject) => {
    const ImageDom: HTMLImageElement = new Image()

    ImageDom.onload = () => {
      reslove({})
    }

    ImageDom.onerror = () => {
      reject()
    }

    ImageDom.src = imgUrl
  })
}

/**
 * 读取图片文件
 * @param file
 * @returns
 */
export const readImageFile = (file: File) => {
  return new Promise((reslove, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      reslove(e.target?.result)
    }
    reader.onerror = (e) => {
      reject(e)
    }
    reader.readAsDataURL(file)
  })
}