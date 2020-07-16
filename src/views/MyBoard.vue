<template>
  <div>
    <div class="wrapper">
      <div class="row">
        <h1>{{board.title}}</h1>

        <!-- <div class="list__card" v-for="item in items" :key="item.idItemList">
            <span class="list__item">{{item.itemList}}</span>
            <a class="btn-floating btn-tiny btn-check" tag="button">
              <i class="material-icons">check</i>
            </a>
        </div>-->

        <!-- <createItemList /> -->

        <!-- <createList /> -->
      </div>
      <!-- </div> -->
      <!-- <createList v-for="item in board.children" :key="item" :list="getList(item)" /> -->

        <div class="list" v-for="(CreateList, id) in board.children" :key="id" :list="getList(id)">
          <div class="list__title">
            <h3>{{CreateList.title}}</h3>
          </div>
          <div>
            <createList :id="CreateList.id"/>
          </div>
        </div>
      <!-- <div class="list__title">
        <h3>{{CreateList.title}}</h3>
      </div> -->

      <div class="create-list z-depth-2" v-show="!isCreating">
        <p>Create list</p>
        <a
          class="btn-floating btn-large waves-effect waves-light pink lighten-2 pulse"
          tag="button"
          @click="addList"
          v-on:keyup.enter="addList"
        >
          <i class="material-icons">add</i>
        </a>
      </div>
      <div class="new-list" v-show="isCreating">
        <div class="list__title input-field">
          <input
            type="text"
            required
            id="list-title"
            class="none validate"
            tag="button"
            autofocus
            v-model="titleList"
            v-on:keyup.enter="CrList"
          />
          <label for="list-title">Enter Title List</label>
        </div>

        <a class="btn-floating transparent btn-close" tag="button" @click="closeList">
          <i class="material-icons">close</i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['board'],
  data: () => ({
    isCreating: false,
    titleList: ""
  }),
  
  computed: {
    board() {
      return this.$store.getters.getBoardsById(+this.$route.params.id);
    },
    // lists() {
    //   return this.$store.getters.getLists;
    // }
  },
  components: {
    createList: () => import("../components/createList"),
    createItemList: () => import("../components/createItemList")
  },
  methods: {
    getList(id) {
      return this.$store.getters.getListById(id);
    },
    addList() {
      this.isCreating = true;
    },
    closeList() {
      this.isCreating = false;
    },
    CrList(id) {
      if (this.titleList == "") {
        return false;
      }
      const CreateList = {
        id: Date.now(),
        boardId: this.board.id,
        title: this.titleList,
        children: []
      };
      this.$store.dispatch("AddList", CreateList);
      this.titleList = "";
      this.isCreating = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.add-item {
  display: block;
}
.textarea-item {
  display: inline-block;
  width: 93%;
  margin: 0 auto;
}
.add-item__btn {
  display: inline-block;
}
.wrapper {
  flex-wrap: nowrap;
}
a.btn-check {
  background: transparent;
  border-radius: 8px;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  right: 1rem;
  top: 0.3rem;
  text-align: center;
}
a.btn-check i {
  position: absolute;
  top: 0.7rem;
  line-height: 0px;
  color: #ccc;
  transition: all 1s ease;
}
a.btn-check:hover {
  background: #ccc;
  transition: all 1s ease;
  color: rgb(50, 231, 81);
}
a.btn-check i:hover {
  color: rgb(50, 231, 81);
}
a.btn-large {
  margin-top: 1rem;
}
.create-list p {
  padding-top: 2rem;
}
input::placeholder {
  color: #3557a0;
}
.create-list {
  border: 2px solid #ccc;
  width: 250px;
  height: 1000px;
  border-radius: 10%;
  margin-top: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  display: inline-block;
}
.create-list:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.list {
  background: rgb(255, 245, 245);
  border: 2px solid #ccc;
  width: 300px;
  max-height: 1000px;
  border-radius: 10px;
  margin-top: 3rem;
  text-align: center;
  transition: all 0.3s ease;
  display: inline-block;
  margin-right: 4rem;
  position: relative;
}
.list__title h3 {
  text-align: left;
  margin-left: 1rem;
  margin-top: 1rem;
  font-size: 2.02rem;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.list__card {
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
  margin-left: 0.7rem;
  width: 93%;
  text-align-last: left;
}

span.list__item {
  display: block;
  padding: 0.3rem;
}
h1 {
  font-size: 3rem;
}
.btn-close {
  position: absolute;
  top: -1rem;
  right: -2rem;
  width: 2rem;
  height: 2rem;
}
.btn-close i {
  line-height: 0px;
  color: #000;
  opacity: 0.5;
}
.btn-close i:hover {
  opacity: 1;
}
input::placeholder {
  color: #6e788f;
}
a.btn-large {
  margin-top: 1rem;
}
.create-list p {
  padding-top: 2rem;
}
.create-list {
  border: 2px solid #ccc;
  width: 150px;
  height: 200px;
  border-radius: 10%;
  margin-top: 3rem;
  text-align: center;
  transition: all 1s ease;
  display: inline-block;
}
.create-list:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}
.new-list {
  position: relative;
  background: rgb(255, 245, 245);
  border: 2px solid #ccc;
  width: 250px;
  max-height: 800px;
  border-radius: 10%;
  margin-top: 3rem;
  transition: all 0.3s ease;
  display: inline-block;
  margin-right: 4rem;
  padding: 1rem;
  transition: width 2s;
}
</style>