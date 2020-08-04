<template>
  <div class="text">
    Neural networks cannot simply process words or images.
    They need a digit-vector representation of the input (e.g. obtained through word embedding). <br>
    <h2>Word Embedding</h2>
    Words that appear next to each other (in sentences) are assigned a similar position in the vector space (e.g. the dog eats dofwood). <br>
    The multi-dimensional representation allows one to measure the cosine-distance between words and therefore how “contextually similar” these words are.
    Given a certain word, its nearest-neighbour can easily be found. <br>
    <br>
    <h3>Skip-Gram Model</h3>
    <img src="./assets/word2vec.png" class="img">
    It aims to predict the contextual likelihood of a word given an input word.
    By sliding a window over each word of a sentence, binary tuples of words and their surrounding words are generated. (dog, eats) <br>
    During training these tuples serve as the input for each training-step. The input and output vectors of the model are of the size of the entire vocabulary
    where only the two words of the currently processed tuple are set to 1 and all other words are set to 0 (a.k.a. one-hot encoded representation). <br>
    <br>
    The weights of the two matrices W & W’ are updated accordingly so that the first tuple value is placed more closely (in n-dim v-space)
    to the second value of the tuple using backpropagation. <br>
    <br>
    An arising problem is that the correct meaning of a word is defined by its surrounding context (bat ≠ bat).<br>
    <button class="link2topic" v-on:click="navigate('BERT')">Go to BERT</button>
  </div>
</template>

<script>
import Selector from '../Utilities/Selector.js'

export default {
  name: 'WordEmbedding',
  methods: {
    navigate (topicName) {
      const sel = new Selector()
      sel.navigateToTopic(topicName)
    }
  }
}
</script>

<style>
.img{
    width: 600px;
    display: block;
    margin: 1.5rem auto 3.5rem auto;
}

.text{
    width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    margin-bottom: 10rem;
}

.link2topic{
    width: 150px;
    height: 2rem;
    display: block;
    margin: 3rem auto 0 auto;
    border-radius: 15px;
    box-shadow: 0 0 10px #535353;
    background-color: rgb(154, 255, 154);
}

.desc {
  display: inline;
}

.combi {
  margin-bottom: 0.5rem;
}

@media (max-width: 800px) {
    .text{
        width: auto;
        margin: 1rem 1rem 5rem 1rem;
    }
}

@media (max-width: 600px) {
    .img{
      width: 100%;
    }
}
</style>
