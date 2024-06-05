
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

