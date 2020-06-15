import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy Lasagne", highPriority: true},
        {name: "Cook Lasagne", highPriority: true},
        {name: "Eat Lasagne", highPriority: false}
      ],
      newItem: "",
      priority: ""
    },
    methods: {

      saveNewItem: function() {
        let tempPriority = false
        if(this.priority === "true"){
          tempPriority = true
        }
        this.items.push({
          name: this.newItem,
          highPriority: tempPriority
        })
        this.newItem = "";
      }




    }


  });
});
