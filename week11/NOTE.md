# 笔记
1、寻路
   
# 每周总结可以写在这里
得到异步的generator。
```
async function* g(){
  let i = 0;
  while(true) {
    await sleep(1000);
    yield i++;
  }
}

for await(let v of g()){
  console.log(v);
}
```