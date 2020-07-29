<template>
  <div class="home">
    <h2>exciting topics</h2>
    <topics-select></topics-select>
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
