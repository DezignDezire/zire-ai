<template>
  <div class="tCard">
    <img class="topicImg" :src="require('@/assets/' + topic.image + '')" />
    <div class="textbox">
      <h2>{{topic.title}}</h2>
      <p>{{topic.description}}</p>
    </div>
    <!-- // due to a bug -->
  </div>
</template>

<script>
import Topic from '@/data/Topic.ts'

export default {
  name: 'TopicCard',
  props: {
    topic: Topic
  }
}
</script>

<style>
:root {
  --box-size: 300px;
}

.tCard {
  box-shadow: 10px 10px 10px #888888;
  width: var(--box-size);
  margin: 10px;
}

.textbox {
  text-align: left;
  padding: 10px;
}

.topicImg {
  width: var(--box-size);
  height: var(--box-size);
  object-fit: cover;
}
</style>
