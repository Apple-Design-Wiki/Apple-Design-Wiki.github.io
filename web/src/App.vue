

<template>
 <header> 
    <div class="wrapper"> 
      <RouterLink to="/">Apple Design Wiki </RouterLink>
      <nav> 
        <RouterLink to="/timeline">Time line</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/style">style</RouterLink>
      </nav>
      <div>
         <van-icon name="search" style="margin-top: 10px;" size="20" color="#000"/>
      </div>
    </div>
  </header>
  <div class="main">
    <RouterView />
  </div>
</template>
<script setup>


</script>
<style scoped>
header{
  background:#F2F2F2;
  height:52px;
  line-height: 52px;
  padding: 0 40px;
}
.wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav{ display: flex; }

a { color: black; font-weight: 800;} a:hover { color: black; } a:active { color: black; } a:visited { color: black; }
nav>a{ flex:1;white-space: nowrap;margin: 0 40px;font-weight: 600;}
body,#app{
	overflow: hidden;
}
.main{
   height: calc(100vh - 80px);
		overflow: auto;
}
@media only screen and (max-width: 1000px) { 
	header{
	  padding: 0 20px;
    font-size:12px;
	}
  .main{
  	padding: 10px 10px 0 10px;
}
  nav>a{ flex:1;white-space: nowrap;margin: 0 10px;}
}

</style>
