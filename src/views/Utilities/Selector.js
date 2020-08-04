import store from '../../store'

export default class Selector {
  navigateToTopic (topicTitle) {
    console.log('topic-' + topicTitle)
    document
      .getElementById('item-' + topicTitle)
      .scrollIntoView({ behavior: 'smooth', block: 'center' })
    store.dispatch('selectTopic', topicTitle)
  }
}
