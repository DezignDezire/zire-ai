<template>
  <div class='cardsFlicker'>
    <div v-for='topic in topics' :id="'item-' + topic.title" :key='topic.tilte' @click='topicSelected(topic.title)'>
      <topic-card :topic='topic'/>
    </div>
  </div>
</template>

<script>
import Topic from '../data/Topic'
import TopicCard from './TopicCard.vue'
import Selector from './Utilities/Selector'

export default {
  name: 'TopicsSelect',
  components: {
    TopicCard
  },
  methods: {
    // update state to display selected topic
    topicSelected (topicTitle) {
      const sel = new Selector()
      sel.navigateToTopic(topicTitle)
    }
  },
  data: function () {
    return {
      topics: [
        new Topic('Word Embedding', 'Representation of context of single word in multi-dimensional space.', 'elmo.png'),
        new Topic('BERT', 'Bidirectional Encoder Representations from Transformers', 'bert.jpg'),
        new Topic(
          'Transformer',
          'transforms an input sequence (source) to a new one (target)',
          'transformers.jpg'
        ),
        new Topic(
          'Attention',
          'the mechanism of selectively concentrating on one or a few things while ignoring others',
          'attention.jpg'
        ),
        new Topic(
          'GPT-3',
          'generative pre-training model by OpenAI',
          'openai.png'
        )
      ]
    }
  }
}
</script>

<style>
.cardsFlicker {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.cardsFlicker::-webkit-scrollbar {
  display: none;
}
</style>
