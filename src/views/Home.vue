<template>
  <div>
    <div class="container">
    <div class="row">
      <div class="col s5">
        <div class="create-board z-depth-2">
          <p>Create board</p>
          <a
            class="btn-floating btn-large waves-effect waves-light cyan pulse"
            tag="button"
            @click="moveTitleBoard"
          >
            <i class="material-icons">add</i>
          </a>
        </div>
        <input
          type="text"
          id="title-board"
          class="none"
          placeholder="Enter title"
          required
          tag="button"
          v-model="title"
          v-on:keyup.enter="addBoard"

        />
      </div>

      <div class="col s6 boards-list">
        <newBoard />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: ""
  }),
  components: {
    newBoard: () => import("../components/newBoard")
  },
  methods: {
    moveTitleBoard() {
      const element = document.querySelector("#title-board");
      element.classList.add("show", "animated", "bounceInLeft");
    },
    addBoard() {
      const board = {
        id: Date.now(),
        children: [],
        title: this.title
      };
      if (this.title == "") {
        return false;
      }
      this.title = "";

      this.$store.dispatch("addBoard", board);
      console.log(board.title)
      const elementRemove = document.querySelector("#title-board");
      elementRemove.classList.remove("show");
    }
  }
};
</script>

<style lang="scss" scoped>
input::placeholder {
  color: rgb(65, 161, 173);
}
.boards-list {
  margin-top: 3rem;
}
.btn-large i {
  font-size: 1.7rem;
}
.create-board {
  border: 2px solid #ccc;
  width: 150px;
  height: 200px;
  border-radius: 10%;
  margin-top: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  display: inline-block;
}
.create-board:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
a.btn-large {
  margin-top: 1rem;
}
.create-board p {
  padding-top: 2rem;
}
#title-board {
  width: 200px;
  border: 2px solid rgb(104, 141, 189);
  border-radius: 10px;
  text-align: center;
  position: relative;
  top: 1rem;
  left: 1rem;
}
.none {
  display: none;
}
.show {
  display: inline-block;
}
.new-board {
  width: 200px;
  border: 2px solid rgb(104, 141, 189);
}
</style>
