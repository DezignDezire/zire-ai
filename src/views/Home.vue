<template>
  <div class="home">
    <topics-select class="spacer" id="topics-select1220"></topics-select>
    <div v-if="this.$store.state.selectedTopic == 'Word Embedding'">
      <word-embedding/>
    </div>
    <div v-else-if="this.$store.state.selectedTopic == 'BERT'">
      <BERT/>
    </div>
    <div v-else-if="this.$store.state.selectedTopic == 'Transformer'">
      <Transformer/>
    </div>
    <div v-else-if="this.$store.state.selectedTopic == 'Attention'">
      <Attention/>
    </div>
  </div>
</template>

<script>
import TopicsSelect from './TopicsSelect.vue'
import WordEmbedding from './DeepTopics/WordEmbedding'
import BERT from './DeepTopics/BERT'
import Transformer from './DeepTopics/Transformer'
import Attention from './DeepTopics/Attention'

export default {
  name: 'Home',
  components: {
    TopicsSelect,
    WordEmbedding,
    BERT,
    Transformer,
    Attention
  }
}
</script>

<style scoped>
h2 {
  margin: 0 0 10px 0;
}

.spacer{
  margin-bottom: 3rem;
}
</style>
