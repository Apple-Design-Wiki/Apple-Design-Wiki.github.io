<template>
  <div class="detail">
    <div id="contentInner"></div>
  </div>
</template>
<script setup name="homes">
import { onMounted, ref, reactive } from 'vue'
import { showToast } from 'vant';
import { useRouter,useRoute  } from 'vue-router'
const route = useRoute();
 async function getAll(folder) {
   const contentInner = document.getElementById('contentInner');
   fetch(  `https://apple-design-wiki.github.io/${folder}/index.md` || "https://raw.githubusercontent.com/markdown-it/markdown-it/master/README.md" ).then((response) => response.text()).then((markdown) => {
    const html =  new showdown.Converter().makeHtml(markdown);
    contentInner.innerHTML =   html;
   });
};
  onMounted(() => {
        let {query} = route 
        console.log('query', query.folder);
		getAll(query.folder)
	});
</script>
<style>
.detail{
    padding:2% 10%
}
img{
  max-width:100%;
}
</style>
