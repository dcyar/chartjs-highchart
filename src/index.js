import Photos from './js/photos'

import './css/index.css'

const photos = new Photos()

async function main() {
  console.log(await photos.getPhotos())
}

main()