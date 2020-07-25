<template>
  <div>
    <h2>{{topic.title}}</h2>
    <div>{{topic.description}}</div>
    <img class="topicImg" :src="require('@/assets/' + topic.image + '')" />
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
.topicImg {
  width: 300px;
  height: 300px;
  object-fit: cover;
}
</style>
