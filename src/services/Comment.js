import axios from 'axios'
import store from './../store'
const apiUrl = 'https://backend-287321.nw.r.appspot.com'

export default class CommentService {
  createComment (userName, commentText) {
    if (!userName || !commentText) throw new Error('username and comment must not be empty 🥺')
    axios.post(apiUrl + `/comments?user=${userName}&comment=${commentText}&state=${store.state.selectedTopic}`)
      .then(response => response.status)
      .then(this.latestComments)
      .catch(err => console.warn(err))
  }

  latestComments () {
    axios.get(apiUrl + '/latest')
      .then(res => {
        store.dispatch('updateLatestComments', res.data)
        // console.log(res.data)
      })
      .catch(err => console.warn(err))
  }
}
