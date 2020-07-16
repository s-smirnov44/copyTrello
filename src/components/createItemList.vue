<template>
  <div>
    <!-- <div class="add-item">
      <div class="textarea-item input-field" v-show="isAdding">
        <input
          type="text"
          class="validate"
          id="list-item"
          v-model="itemList"
          v-on:keyup.enter="createItemListt"
          autofocus
        />
        <label for="list-item">Enter Item List</label>
      </div>
      <a class="waves-effect waves-light btn" v-show="!isAdding" @click="addCard">
        <i class="material-icons right">add</i>Add Card
      </a>
    </div> -->
 
    
    
  </div>
</template>

<script>
export default {
  props: ['card'],
  // data: () => ({
  //   isAdding: false,
  //   itemList: "", 
  //   idItemList:""
  // }),
  // methods: {
  //   addCard() {
  //     this.isAdding = true;
  //   },
  //   createItemListt() {
  //      if (this.itemList == "") {
  //       return false;
  //     }
  //     const item = {
  //       id: Date.now(),
  //       itemList: this.itemList,
  //       cardId: this.list.id
  //     };

      
  //     this.$store.dispatch("createItemList", item);
  //     this.itemList = "";
  //     this.isAdding = false;
  //     console.log(item.idItemList);
  //   }
  // },
  //   destroyed() {
  //   //метод для утечки памяти. Он вызовется при уничтожении страницы. Данные методы поступают от materialize
  //   // уничтожаем плагин и убираем его из HTML и приложении будет более оптимизировано
  //   if (this.itemList && this.itemList.destroy) {
  //     this.itemList.destroy();
  //   }
  // }
};
</script>