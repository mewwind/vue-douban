import axios from 'axios'

export default {
  get(url, params={}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params)
        .then((res) => {
          resolve(res.data)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}