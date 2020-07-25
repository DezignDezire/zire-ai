<template>
  <div>
    <div v-for='topic in topics' :key='topic.name'>
      <topic-card :topic='topic' />
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
        )
      ]
    }
  }
}
</script>
