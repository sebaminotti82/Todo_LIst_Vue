const app = new Vue({
    el:'#root',
     data:{
         newTodo:'',  //sarà il nostro elemento che inseriremo tramite input

         list:['fare la lavatrice','portare a passeggio oliver','preparare il pranzo'], //lista dei nostri todo preinseriti

         fatti:[], //lista delle facende eseguite e portate a termine

         eliminati:[]  //lista delle faccende eliminate 

     },
     methods:{
         insert:function(){
             if(!this.list.includes(this.newTodo)){
                 this.list.push(this.newTodo)
                 if(this.newTodo==''){
                     this.list.pop(this.newTodo)
                 }
                 this.newTodo=''
             }
         },
        //--------------------------------------------

        deleteTodo:function(index){
           
              if(!this.eliminati.includes(this.list[index])){
                  this.eliminati.push(this.list[index])
                  this.list.splice(index, 1)
              }
        },
        //---------------------------------------------
        winTodo:function(index){
           
            if(!this.fatti.includes(this.list[index])){
                this.fatti.push(this.list[index])
                this.list.splice(index, 1)
            }
      },
      //------------------------------------------------

      eliminaTutto:function(index){
            this.list.splice(index)
            this.fatti.splice(index)
            this.eliminati.splice(index)
      }

     }
})