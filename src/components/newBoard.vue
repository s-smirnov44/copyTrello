<template>
  <div>
    <ul v-if="boards.length" class="list">
      <li v-for="board in boards" :key="board.id" >
        <router-link  class="btn btn-big" :to="'/MyBoard/' + board.id">{{ board.title }}</router-link>
      </li>
    </ul>
    <p class="not-boards" v-else>no boards</p>
  </div>
</template>

<script>
export default {
    computed: {
    boards() {
      return this.$store.state.boards
    }
  },
  }
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list li {
  flex: 0 1 50%;
  margin-bottom: 10px;
}
.not-boards {
  font-weight: 900;
  font: 2rem sans-serif;
  text-align: center;
}
</style>



