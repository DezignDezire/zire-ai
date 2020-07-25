<template>
  <div class="home">
    <!-- <img src="../assets/logo.jpg"> -->
    <topics-select></topics-select>
  </div>
</template>

<script>
import TopicsSelect from "./TopicsSelect.vue";

export default {
  name: "Home",
  components: {
    TopicsSelect,
  },
};
</script>
