<template>
  <div class="home">
    <topics-select class="spacer"></topics-select>
    <div v-if="this.$store.state.selectedTopic == 'Word Embedding'">
      <word-embedding/>
    </div>
    <div v-else-if="this.$store.state.selectedTopic == 'BERT'">
      <BERT/>
    </div>
  </div>
</template>

<script>
import TopicsSelect from './TopicsSelect.vue'
import WordEmbedding from './DeepTopics/WordEmbedding'
import BERT from './DeepTopics/BERT'

export default {
  name: 'Home',
  components: {
    TopicsSelect,
    WordEmbedding,
    BERT
  }
}
</script>

<style scoped>
h2 {
  margin: 0 0 10px 0;
}

.spacer{
  margin-bottom: 4rem;
}
</style>
