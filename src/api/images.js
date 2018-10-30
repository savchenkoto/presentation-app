import axios from 'axios'

export default {
  getAll: async () => {
    try {
      const res = await axios.get('http://localhost:3001/images')
      return res.data
    } catch (e) {
      console.log(e.message)
    }
  }
}
