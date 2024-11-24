<template>
	<div class="content">
		<div class="item" v-for="(item,index) in list" :key="index">
			<div class="left">
				<div class="title">{{item.title}}</div>
				<div class="desc">{{item.desc}}</div>
			</div>
			<div v-for="(img,j) in item.imgs" :key="index+'+'+j">
				<img class="img" :src="'https://apple-design-wiki.github.io'+img" />
			</div>
		</div>

	</div>
</template>
<script setup name="homes">
	import { onMounted, ref, reactive } from 'vue'
	import { showToast } from 'vant';
	import { useRouter } from 'vue-router'
	const router = useRouter()
	const list = reactive([]);

	async function getAll() {
		function fetchData(url) {
			return fetch(url).then(response => { if (!response.ok) { throw new Error('网络请求错误'); } return response.json(); }).catch(error => { console.error('请求错误:', error); });
		}
		const arr = ['iBook1999','iMac1999']; // 假设这是您要请求的数据
		const promises = arr.map(e => fetchData(`https://apple-design-wiki.github.io/${e}/index.json`));
		Promise.all(promises).then(data => {
			data.forEach((item, index) => {
				list.push({ title: item[0], desc: item[1], imgs: item.slice(2) });
			});
		}).catch(error => { console.error('请求错误:', error); });
	};

	onMounted(() => {
		getAll()
	});
</script>
<style lang="scss" scoped>
	.content {
		background-color: #FFF;
		padding: 20px 20px 0 100px;
		height: calc(100vh - 80px);
		overflow: auto;
	}

	.item {
		display: flex;
		margin: 30px 0;
		padding: 10px;
		cursor: pointer;
		border-radius: 5px;
	}

	.item:hover {
		background-color: #F2F2F2;
	}

	.left {
		width: 33%;
		padding: 0 10%;
	}

	.title {
		font-weight: 800;
	}

	.desc {
		// text-indent: 20px;
		margin-top: 20px;
		line-height: 20px;
	}

	.img {
		max-width: 300px
	}

	@media only screen and (max-width: 1000px) {
		.content {
			padding: 10px 10px 0 10px;
		}

		.item {
			flex-direction: column;

		}
	}
</style>