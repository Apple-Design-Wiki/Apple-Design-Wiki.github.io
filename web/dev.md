https://www.figma.com/design/Vtd1lkBKFJARcarbG0w2I7/Apple-Design-Wiki?node-id=30-604&t=3r12IstCnpueQyQQ-1


加载列表下的json文件数据渲染每个部分
里面声明了图片的地址


https://apple-design-wiki.github.io/iMac1999/index.json

iMac1999,iMac1998

arr.map(e=>{
    return fetch(`https://apple-design-wiki.github.io/${e}/index.json`)
})

// 定义一个函数来处理单个请求
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) { throw new Error('网络请求错误'); }
            return response.json();
        }).catch(error => {
            console.error('请求错误:', error);
        });
}

// 定义一个函数来处理多个请求
var all = {

}
function fetchAllData(arr) {
    const promises = arr.map(e => fetchData(`https://apple-design-wiki.github.io/${e}/index.json`));
    
    Promise.all(promises).then(data => { 
       data.forEach((item, index) => {
        console.log(`Index: ${index}, Item:`, item);
            all[index] = {}
            all[index].title = item[0]
            all[index].desc = item[1]
            all[index].imgs = item.slice(2)
        });

   }).catch(error => {
       console.error('请求错误:', error);
   });
}

// 使用示例
const arr = ['iMac1999', 'iMac1999', 'iMac1999']; // 假设这是您要请求的数据
fetchAllData(arr);
const list = Object.values(all);

视图出现时候加载？ 如何才能再 1.5vh 处开始加载

