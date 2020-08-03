<template>
  <div class='cardsFlicker'>
    <div v-for='topic in topics' :key='topic.name' @click='topicSelected(topic.title)'>
      <topic-card :topic='topic'/>
    </div>
  </div>
</template>

<script>
import Topic from '../data/Topic'
import TopicCard from './TopicCard.vue'
import store from '../store'

export default {
  name: 'TopicsSelect',
  components: {
    TopicCard
  },
  methods: {
    // update state to display selected topic
    topicSelected (topicTitle) {
      store.dispatch('selectTopic', topicTitle)
    }
  },
  data: function () {
    return {
      topics: [
        new Topic('Word Embedding', 'Representation of context of single word in multi-dimensional space.', 'elmo.png'),
        new Topic('BERT', 'Bidirectional Encoder Representations from Transformers', 'bert.jpg'),
        new Topic(
          'Transformer',
          'Consists of encoder and decoder',
          'transformers.jpg'
        ),
        new Topic(
          'Attention',
          'Mechanism for creating context between single words in NLP',
          'attention.jpg'
        )
      ]
    }
  }
}
</script>

<style>
.cardsFlicker {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
}

.cardsFlicker::-webkit-scrollbar {
  display: none;
}
</style>
