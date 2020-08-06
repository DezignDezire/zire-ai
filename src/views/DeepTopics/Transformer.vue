<template>
  <div class="text">
      <h2>Transformer</h2>
      Transformers are a cornerstone of Neural Machine Translation (NMT). They are trained by inputting the same sentence in two different languages.
      That’s it! The transformer does the rest. <br>
      <br>
      Up until recent the state of the art in NMT was the <strong>seq2seq</strong> architecture which consists of two RNNs: Encoder & Decoder.
      The encoder reads the input words one by one to obtain a vector representation of a fixed dimensionality (e.g. 512 dimensions)
      - a.k.a. sequence embedding or “thought vector”). <br>
      The output words are extracted one by one using the decoder. <br>
      <br>
      The main drawback of seq2seq is that the decoder only obtains the last hidden state of the encoder (a numerical summary of the entire input sentence in vector-form; red dots).
      The longer an input text is, the more inaccurate this vector representation gets, making the translation of entire paragraphs impossible. <br>
      <img src="./assets/Decoder.png" class='img' alt="Decoder&Encoder">
      Transformers aim to eliminate this problem of “forgetting” by not only passing the final hidden state to the decoder but by passing along
      every encoder hidden state. Selecting the most relevant input states is the responsibility of the <strong>attention</strong> mechanism.
      <button class="link2topic" v-on:click="navigate('Attention')">Go to Attention</button>
      <br>
  </div>
</template>

<script>
import Selector from '../Utilities/Selector.js'

export default {
  name: 'Transformer',
  methods: {
    navigate (topicName) {
      const sel = new Selector()
      sel.navigateToTopic(topicName)
    }
  }
}
</script>
