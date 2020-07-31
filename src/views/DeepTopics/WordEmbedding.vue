<template>
  <div class="text">
    Neural networks cannot simply process words or images.
    They need a digit-vector representation of the input (e.g. obtained through word embedding). <br>
    <h2>Word Embedding</h2>
    Words that appear next to each other (in sentences) are assigned a similar position in the vector space (e.g. the dog eats dogwood). <br>
    The multi-dimensional representation allows one to measure the cosine-distance between words and therefore how “contextually similar” these words are.
    Given a certain word, its nearest-neighbour can easily be found. <br>
    <br>
    <h3>Skip-Gram Model</h3>
    <img src="./word2vec.png" class="img">
    <br>
    It aims to predict the probability of context words given an input word. <br>
    By sliding a window over each word of a sentence, tuples of word and their neighboring words are created (dog, eats). <br>
    The model consists of an input and output vector with size of vocabulary and hidden vector with size of the models dimensions.
    Input containing first word of tuple as one-hot encoded word representations and output containing second word respectively.
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
    width: 600px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
}

.text{
    width: 800px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    margin-bottom: 5rem;
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
