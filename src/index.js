import Photos from './js/photos'

import './css/index.scss'

const photos = new Photos()

async function main () {
  console.log(await photos.getPhotos())
}

main()
