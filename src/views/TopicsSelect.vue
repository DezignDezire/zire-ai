<template>
  <div class='cardsFlicker'>
    <div v-for='topic in topics' :key='topic.name'>
      <topic-card class="card" :topic='topic' />
    </div>
  </div>
</template>

<script>
import Topic from '../data/Topic'
import TopicCard from './TopicCard.vue'

export default {
  name: 'TopicsSelect',
  components: {
    TopicCard
  },
  data: function () {
    return {
      topics: [
        new Topic('Deep Learning', 'Finds features by itself', 'logo.jpg'),
        new Topic(
          'Transformer',
          'Consists of encoder and decoder',
          'transformer.png'
        ),
        new Topic(
          'Attention',
          'Mechanism for creating context between single words in NLP',
          'deepL.jpg'
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
}

.card {
  flex: 0 0 auto;
}
</style>
