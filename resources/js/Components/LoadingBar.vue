<template>
<div class="container flex flex-row items-center">
<div class="loading-bar  justify-center ">
  <div class="percentage " :style="{'width' : percentage + '%'}">
  </div>

</div>
  <div class="pl-2  ">{{ percent }}%</div>
</div>

<div></div>
<div></div>

</template>

<script>
export default {
  name: "LoadingBar.vue",
props:{
   limit:Number,
},
  data (){
    return{
      percentage:0,
      limit:this.limit,
    }

  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    }
  },
  created() {
    let intVal = setInterval(() => {
      if(this.percentage < this.limit)
        this.percentage += .1;
      else
//ashhshah ahsahsh
        clearInterval(intVal);
    }, 10);
  }
}
</script>

<style  scoped>
.loading-bar {
  position: relative;
  width: 400px;
  height: 10px;
  border-radius: 15px;
  overflow: hidden;
  border-bottom: 1px solid #ddd;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px -1px #fff, 0 1px 0 #fff;}

.percentage {
  position: absolute;
  top: 1px;
  left: 1px;
  right: 1px;

  display: block;
  height: 100%;
  border-radius: 15px;
  background-color: #1D4ED8;
  background-size: 30px 30px;
  background-image: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%,
  transparent 50%, rgba(255, 255, 255, 0.15) 50%,
  rgba(255, 255, 255, 0.15) 75%, transparent 75%,
  transparent);
  animation: animate-stripes 3s linear infinite;
}


  @keyframes animate-stripes {
    0% { background-position: 0 0; }
    100% { background-position: 60px 0; }
  }




</style>
