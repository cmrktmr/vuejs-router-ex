<template>
  <div class="container">
    <h3>User Detail Component</h3>
    <hr />
    <p>Kullanıı ID bilgisi : {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      v-bind:to="navigationLink"
    >
      Kullanıcı Düzenle
    </router-link>
  </div>
</template>
<script>
export default {
  data(){
    return{
      navigationLink:{
         name : 'userEdit', 
         params : {id : this.$route.params.id }, 
         query:{name : 'Cemre', lastName:'Aktemur'},
         hash:'#data'
      }
    }

  },
  beforeRouteEnter(to,from,next){
    console.log("component seviyesinde"); 
    next();
  }
};
</script>


