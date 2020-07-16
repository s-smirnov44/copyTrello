<template>
  <div>
    <div class="row">
      <!-- <div class="create-list z-depth-2" v-show="!isCreating">
        <p>Create list</p>
        <a
          class="btn-floating btn-large waves-effect waves-light pink lighten-2 pulse"
          tag="button"
          @click="addList"
          v-on:keyup.enter="addList"
        >
          <i class="material-icons">add</i> 
        </a>
      </div>-->
      <!-- <div class="list__title">
        <h3>{{this.titleList}}</h3>
      </div>-->
      <div >
        <createItemList class="list" v-for="(item, id) in lists" :key="id" :card="getCard(id)"/>
        {{itemList}}
      </div>
      <div class="add-item">
        <div class="textarea-item input-field" v-show="isAdding">
          <input
            type="text"
            class="validate"
            id="list-item"
            v-model="itemList"
            v-on:keyup.enter="createItemList"
            autofocus
          />
          <label for="list-item">Enter Item List</label>
        </div>
        <a class="waves-effect waves-light btn" v-show="!isAdding" @click="addCard">
          <i class="material-icons right">add</i>Add Card
        </a>
      </div>
      <!-- <createItemList
      v-for="(item, idx) in list.children"
      :key="idx"
      :card="getCard(idx)"
      />-->

      <!-- list ID: {{ list.id }}<br /> -->
      <!-- <button @click="addCardd">ADD CARD +</button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data: () => ({
    isCreating: false,
    titleList: "",
    idList: "",
    isAdding: false,
    itemList: "",
    idItemList: ""
  }),
  computed: {
    listt() {
      return this.$store.getters.getListById(+this.$store.id);
    },
    cards() {
      return this.$store.getters.getCards;
    },
    // ...mapState('module/namespace', ['list'])
    lists() {
      return this.$store.state.lists;
    }
  },
  methods: {
    getCard(id) {
      return this.$store.getters.getCardById(id);
    },
    addCard() {
      this.isAdding = true;
    },
    addCardd() {
      // this.$store.dispatch('addCard', this.list)
    },
    addList() {
      this.isCreating = true;
    },
    closeList() {
      this.isCreating = false;
    },
    createItemList() {
      if (this.itemList == "") {
        return false;
      }
      const item = {
        id: Date.now(),
        itemList: this.itemList,
        listId: this.$attrs.id //this.listt
      };

      console.log(item.itemList);
      this.$store.dispatch("createItemListt", item);
      this.itemList = "";
      this.isAdding = false;
      this.itemList = "";
    }
    // createList() {

    //   const list = {
    //     idList: Date.now(),
    //     titleList: this.titleList
    //   };
    //   this.$store.dispatch("addList", list);
    //   this.titleList =  "";
    //   this.isCreating = false;
    //   console.log(list.titleList);
    // }
  },
  components: {
    createItemList: () => import("../components/createItemList")
  }
};
</script>

<style lang="scss" scoped>
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