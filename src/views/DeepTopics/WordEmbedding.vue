<template>
  <div class="text">
    <h2>Word Embedding</h2>
    Building a low-dimensional vector representation from a corpus of text, which preserves the contextual similarity of words.<br>
    Neural networks cannot simply process words or images. They need a digit-vector representation of the input (e.g. obtained through word embedding).
    <br>
    <img src="./word2vec.png" class="img">
    <br>
    <h3>Skip-Gram Model</h3>
    It aims to predict the probability of context words given an input word. <br>
    By sliding a window over each word of a sentence, tuples of word and their neighboring words are created. (dog, eats) <br>
    The model consists of an input and output vector with size of vocabulary and hidden vector with size of the models dimensions. <br>
    Input containing first word of tuple as one-hot encoded word representations and output containing second word respectively. <br>
    Throughout training process the weights of the matrixes W and W’ are trained using backpropagation. <br>
    <br>
    An arising problem is that the correct meaning of a word is defined by its surrounding context (bat ≠ bat).
    <br>
  </div>
</template>

<script>
export default {
  name: 'WordEmbedding'
}
</script>

<style>
.img{
    width: 500px;
    margin: 40px 0;
}

.text{
    margin-bottom: 200px;
}
</style>
