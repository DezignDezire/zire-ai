<template>
  <div class="text">
    <h2>Attention</h2>
    describes the mechanism of selectively concentrating on one or a few things while ignoring others.
    In the context of NLP attention is used to filter out the most relevant encoder hidden states (input words) for every output word. <br>
    <br>
    An attention layer is implemented like following: <br>
    Setup: create the encoder hidden states & first decoder hidden state (last encoder state serves as input in decoder)<br>
    <ol>
        <li>calculate score for every encoder hidden state by taking the dot product of the decoder and the respective encoder hidden states (resulting in a scalar alignment-score for each input state)</li>
        <li>perform a softmax-operation over each score [0;1] - high attention/alignment score: next output by the decoder is heavily influenced by this encoder hidden state</li>
        <li>weight every encoder hidden state (vector) by the softmax-result (scalar); we obtain the alignment vector</li>
        <li>sum up all alignment vectors to get the context vector</li>
    </ol>
    During training, the input to each decoder time step t is our ground truth output from decoder time step t-1;
    followed by a heavy portion backpropagation which alters the weights of the RNNs
    <img src="./assets/attention_flow.gif" class="img">
  </div>
</template>

<script>
export default {
  name: 'Attention'
}
</script>
