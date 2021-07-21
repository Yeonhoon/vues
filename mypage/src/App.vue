<template>
  <div>
    <Home></Home>
    <!-- 전역변수로 main.js에서 추가한뒤 사용 -->
    <!-- property: 부모 -> 자녀 -->
       
  </div>

</template>

<script>
import Home from './components/Home';
// import Compo1 from './components/compo1.vue'
export default {
  
  components: {
    Home
  }
  
};
</script>
