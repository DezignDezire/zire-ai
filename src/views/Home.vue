<template>
  <div>
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
    <div v-else-if="this.$store.state.selectedTopic == 'GPT-3'">
      <GPT_3/>
    </div>
    <Comment/>
  </div>
</template>

<script>
import TopicsSelect from './TopicsSelect.vue'
import WordEmbedding from './DeepTopics/WordEmbedding'
import BERT from './DeepTopics/BERT'
import Transformer from './DeepTopics/Transformer'
import Attention from './DeepTopics/Attention'
import GPT_3 from './DeepTopics/GPT-3'
import Comment from './Comment'

export default {
  name: 'Home',
  components: {
    TopicsSelect,
    Comment,
    WordEmbedding,
    BERT,
    Transformer,
    Attention,
    GPT_3
  }
}
</script>

<style scoped>
h2 {
  margin: 0 0 0px 0;
}

.spacer{
  margin-bottom: 3rem;
}
</style>
