import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: ["Buy Lasagne", "Cook Lasagne", "Eat Lasagne"],
      newItem: ""
    },
    methods: {

      saveNewItem: function() {
        this.items.push(this.newItem)
        this.newItem = "";
      }




    }


  });
});
