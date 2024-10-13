<template>
  <div>
    <!-- interpolation -->
    <span >{{ msg }}</span>
    
    <!-- html placing xss attack -->
    <!-- <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p> -->

    <!-- attribute binding -->
    <div class="post" v-bind:class="custom_class">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam alias quod atque corrupti beatae laboriosam iste hic laborum quos impedit eveniet nostrum nihil, enim quia ex odit nam ullam!</div>

    <!-- modify attributes  -->
    <div class="post" :class="custom_class" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam alias quod atque corrupti beatae laboriosam iste hic laborum quos impedit eveniet nostrum nihil, enim quia ex odit nam ullam!</div>

    <ul v-if="data">
      <li>text</li>
      <li>text</li>
      <li>text</li>
      <li>text</li>
    </ul>
    
    <p v-else>data is not loaded</p>
    
    <!-- onclick emit -->
    <a @click="doSomething"> ... </a>
    <input v-on:input="doSomething"> ... </input>


    <br>
    <br>
    <!-- Dynamic Arguments -->

    <a v-bind:[attributeName]="url"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nobis fuga ut, magnam, cupiditate cum praesentium rem, reiciendis culpa quaerat vel est sed commodi facere deleniti quos earum neque! Quae? </a>


    <a @[event]="handle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti minus iure in incidunt eveniet ab ex quas reiciendis nesciunt sunt modi at ipsam, repudiandae, ea ducimus veniam ipsa expedita? </a>

    <div ref="post">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque iure, quasi corporis, explicabo dolore commodi ab officia ad quam asperiores dignissimos alias aliquam laudantium, quae rerum quaerat error quos! Autem.</p>
    </div>


    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <br>
    <br>
    <label > {{ text }}</label>
    
    <br>
    <br>
    <input type="text" v-model.lazy="text" placeholder="text">
    <br>
    <br>
    <input type="text" v-model="formData.name" placeholder="name">
  </div>
</template>

<script>

export default {
  data(){
    return {
      checkedNames:[],
      formData:{
        name:""
      },

      msg:"gela",
      rawHtml: "<h1>hello</h1>",
      custom_class: "active",
      // data:1,
      text:"",
      attributeName: "href",
      url:"https://renode.space",
      event: "mouseover" // event name
    }
  },
  watch:{
    text(newValue, old){
      let nums = "1234567890"
      for (let i of newValue){
        if (nums.includes(i)){
          this.text = ""
        }
      }
      console.log( newValue)
    },
    formData: {
      handler(newVal, old){
        console.log(newVal)
      },


    }
  },
  mounted(){
    this.$refs.post.addEventListener("click",()=>{
      this.$refs.post.style.color = "red"
    })
  },
  methods:{
    doSomething(){

    },
    handle(){
      // console.log("hovered")
    }
  }
}
</script>

<style scoped>
.post{
  color:red
  
}
.active{
  color: green;
}
</style>