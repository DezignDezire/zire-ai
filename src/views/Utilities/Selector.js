import store from '../../store'

export default class Selector {
  navigateToTopic (topicTitle) {
    document
      .getElementById('item-' + topicTitle)
      .scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' })
    store.dispatch('selectTopic', topicTitle)
  }
}
