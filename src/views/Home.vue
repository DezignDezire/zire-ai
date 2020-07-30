<template>
  <div class="home">
    <h2>exciting topics</h2>
    <topics-select class="spacer"></topics-select>
    <div v-if="this.$store.state.selectedTopic == 'Word Embedding'">
      <word-embedding/>
    </div>
  </div>
</template>

<script>
import TopicsSelect from './TopicsSelect.vue'
import WordEmbedding from './DeepTopics/WordEmbedding'

export default {
  name: 'Home',
  components: {
    TopicsSelect,
    WordEmbedding
  }
}
</script>

<style>
h2 {
  margin: 0 0 10px 0;
}

.spacer{
  margin-bottom: 4rem;
}
</style>
