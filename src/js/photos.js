class Photos {
  async getPhotos () {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')

      const photos = await res.json()

      return photos
    } catch {
      return false
    }
  }
}

export default Photos
