<template>
    <div class="text">
        <h2>ELMo</h2>
        During training ELMo tries to predict the following word looking at current and previous words - a task called Language Modeling.
        ELMo uses a concatenation of right-to-left and left-to-right LSTMs – so that its language model doesn’t only have a sense of the next word, but also the previous word.<br>
        <br>
        <h2>BERT</h2> (Bidirectional Encoder Representations from Transformers)<br>
        BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.
        As a result, the pre-trained BERT model can be finetuned with just one additional output layer to create state-of-the-art models for a wide range of tasks,
        such as question answering and language inference, without substantial taskspecific architecture modifications.
    </div>
</template>

<script>
export default {
  name: 'BERT'
}
</script>
