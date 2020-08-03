<template>
  <div class="text">
      <h2>Transformer</h2>
      Transformers are a cornerstone of Neural Machine Translation (NMT). They are trained by inputting the same sentence in two different languages.
      That’s it! The transformer does the rest. <br>
      <br>
      Up until recent the state of the art in NMT was the <strong>seq2seq</strong> architecture which consists of two RNNs: Encoder & Decoder.
      The encoder reads the input words one by one to obtain a vector representation of a fixed dimensionality (e.g. 512 dimensions).
      The output words are extracted one by one using the decoder. <br>
      <br>
      The main drawback of seq2seq is that the decoder only obtains the last hidden state of the encoder (a numerical summary of the entire input sentence in vector-form; red dots).
      The longer an input text is, the more inaccurate this vector representation gets, making the translation of entire paragraphs impossible. <br>
      <img src="./assets/Decoder.png" class='img' alt="Decoder&Encoder">
      <button class="link2topic" v-on:click="topicSelected('Attention')">Go to Attention</button>
  </div>
</template>

<script>
import store from '../../store'

export default {
  name: 'Transformer',
  methods: {
    topicSelected (topicTitle) {
      document.getElementById('topics-select1220').scrollIntoView({ behavior: 'smooth', block: 'center' })
      store.dispatch('selectTopic', topicTitle)
    }
  }
}
</script>
