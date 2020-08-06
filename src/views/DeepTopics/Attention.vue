<template>
  <div class="text">
    <h2>Attention</h2>
    In the context of NLP attention is used to filter out the most relevant encoder hidden states (input words) for every output word in order to help memorize long source sequences.
    Therefore not only a single context vector (outputted by the encoders last hidden state) is built, but also shortcuts between the input source and the context vector are created.
    The context vector consists of the encoder hidden states, the decoder hidden states and the alignment between source and target. <br>
    <br>

    An attention layer is implemented like following: <br>
    Definitions:
    <ul>
      <li>the input sentence is stored in the vector x and has length n. (output: vector y with length m)</li>
      <li>the encoder is a bidirectional RNN. This means that for every input word (every time step) features are computed from forward recurrence and backward recurrence resulting in two feature vectors: Hf_i and Hb_i.
        Concatenating these two vectors we obtain a single feature vector: H_i = (Hf_i, Hb_i) a.k.a an encoder hidden state</li>
      <li>the decoder network is a forward only RNN which generates the translation output. It has the hidden states: s_t = f(s_t-1, y_t-1, ct)...
        where s_t-1 is the previous hidden state, y_t-1 is the previous output word and c_t is the context vector which is calculated as follows: </li>
    </ul>
    <img src="./assets/attention_flow.gif" class="img" alt="gif showing the flow of the attention layer">
    Obtaining the context vector is as easy as:
    <ol>
        <li>for every input feature vector H_i we calculate the amount of “attention” the output y pays to H_i. <br>
        More details about the alignment/score function follow down below
        </li>
        <li>perform a softmax-operation over each score [0;1] (sum of all scores add up to 1)</li>
        <li>weight every encoder hidden state (vector) by the softmax-result (scalar); we obtain the <u>alignment vector</u></li>
        <li>sum up all alignment vectors to get the <strong>context vector</strong>:<br>
        c _1 = sum(alignment_score_1,t · alignment_vectors_t), c_2 = …</li>
    </ol>
    During training, the input to each decoder time step t is our ground truth output from decoder time step t-1;
    followed by a healthy portion of backpropagation which alters the weights of the RNNs<br>
    <br>
    <h4>ad. alignment/score function:</h4>
    there are several ways to determine how heavily the next decoder output is influenced by an encoder hidden state:
    <ul>
      <li>in the model architecture (graphic above) the alignment score is determined by iteratively taking the dot product of the previous decoder state s_t-1 and the respective encoder feature vectors</li>
      <li>instead of taking the dot product it has shown to be efficient to construct a primitive single-laver neural network with the same two inputs.
        Training the mini-model with gradient descent it will learn automatically to detect the most relevant encoder states</li>
    </ul>
    In order to reduce computation we can precompute an alignment model which serves as a lookup matrix of size T_x · T_y.
    The final sentence-to-sentence alignment matrix can look like following:
    <img src="./assets/alignment-matrix.png" class="img" alt="alignment-matrix">
    <button class="link2topic" v-on:click="navigate('Transformer')">Back to Transformers</button>
  </div>
</template>

<script>
import Selector from '../Utilities/Selector.js'

export default {
  name: 'Attention',
  methods: {
    navigate (topicName) {
      const sel = new Selector()
      sel.navigateToTopic(topicName)
    }
  }
}
</script>
