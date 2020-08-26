<template>
  <div class="img">
    <h2>Leave a comment:</h2>
    <input v-model='userName' class="userName" placeholder="Whats your name?"/>
    <textarea v-model='commentText' placeholder="Share your thoughts..." class="fullWidth" oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
    <button v-on:click='createComment' class="link2topic marginSendButton">Send</button>
    <h3> recent comments </h3>
    <div class="commentList" v-for="cmt in this.$store.state.latestComments" :key="cmt.id">
      <div class="nameNtime">
        <b>{{cmt.user}}:</b>
        {{reformatDate(cmt.date_time)}}
      </div>
      <div class="commentText">
        {{cmt.comment}}
      </div>
    </div>
  </div>
</template>

<script>
import ComSer from './../services/Comment'

export default {
  name: 'Comment',
  data () {
    return {
      userName: '',
      commentText: '',
      CommentService: new ComSer()
    }
  },
  methods: {
    createComment () {
      try {
        this.CommentService.createComment(this.userName, this.commentText)
      } catch (err) {
        alert(err.message)
      }
    },
    latestComments () {
      this.CommentService.latestComments()
    },
    reformatDate (date) {
      return date.substring(0, 10)
    }
  },
  mounted () {
    this.latestComments()
  }
}
</script>

<style scoped>
.fullWidth{
  margin-top: 1rem;
  height: auto;
  width: 100%;
  min-height: 50px;
}

.marginSendButton{
  margin: 1.5rem auto 3rem auto;
}

.commentList{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.nameNtime{
  display: flex;
  flex-direction: column;
  width: 200px;
}

.commentText{
  width: 600px;
  margin: 0 auto 0 auto;
}

@media (max-width: 600px) {
  .commentList{
      flex-direction: column;
  }
  .commentText{
    width: unset;
    max-width: 600px;
  }
}
</style>
