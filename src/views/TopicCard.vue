<template>
  <div class="tCard" v-bind:class="{ isActive: getActive }">
    <img class="topicImg" :src="require('@/assets/' + topic.image + '')" />
    <div class="textbox">
      <h2>{{topic.title}}</h2>
      {{topic.description}}
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
  },
  computed: {
    getActive () {
      return this.$store.state.selectedTopic === this.topic.title
    }
  }
}
</script>

<style>
:root {
  --box-size: 300px;
  --radius: 15px;
}

.tCard {
  box-shadow: 0 0 10px #535353;
  border-radius: var(--radius);
  width: var(--box-size);
  margin: 10px;
}

.isActive {
  background: rgb(154, 255, 154);
}

.textbox {
  text-align: left;
  padding: 15px;
}

h2 {
  margin: 4px 0 14px 0;
}

.topicImg {
  width: var(--box-size);
  height: var(--box-size);
  object-fit: cover;
  border-radius: var(--radius) var(--radius) 0 0;
}
</style>
