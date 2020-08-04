<template>
  <div class="text">
    <div class="combi">
      <h2 class="desc">ELMo</h2> (Embeddings from Language Models)<br>
    </div>
    During training ELMo tries to predict the following word looking at current and previous words - a task called Language Modeling.
    ELMo uses a concatenation of right-to-left and left-to-right LSTMs – so that its language model doesn’t only have a sense of the next word, but also the previous word.
    <br>
    <br>
    <br>
    <div class="combi">
      <h2 class="desc">BERT</h2> (Bidirectional Encoder Representations from Transformers)
    </div>
    BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.
    As a result, the pre-trained BERT model can be finetuned with just one additional output layer to create state-of-the-art models for a wide range of tasks,
    such as question answering and language inference, without substantial taskspecific architecture modifications.
    <button class="link2topic" v-on:click="navigate('Transformer')">Go to Transformer</button>
  </div>
</template>

<script>
import Selector from '../Utilities/Selector.js'

export default {
  name: 'BERT',
  methods: {
    navigate (topicName) {
      const sel = new Selector()
      sel.navigateToTopic(topicName)
    }
  }
}
</script>

<style>
.desc {
  display: inline;
}

.combi {
  margin-bottom: 0.5rem;
}
</style>
