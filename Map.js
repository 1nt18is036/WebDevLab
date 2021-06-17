//converting map in to array
const map=new Map()
map.set('milk',50)
map.set('bread',120)
map.set('jam',50)
console.log(map)
let arr=Array.from(map)
console.log(arr)
//checking instance
let mm=new Map()
console.log(mm instanceof Map)
console.log(mm instanceof Object)
console.log(mm instanceof Set)
//coverting object to map
let ob1={
   id:'1',
   name:'josh',
   phone:'123'
}
mapcreation(ob1)
function mapcreation(ob1){
   let map=new Map()
   Object.keys(ob1).forEach(key=>{
      map.set(key,ob1[key]);
   });
   console.log(map)
   console.log(map.entries())
}
//performance analysis of map and array
console.time('Map')
map.forEach((value,key)=>{
   console.log(key,value)
});
console.timeEnd('Map')
let a=['milk','bread','jam']
console.time('Array')
a.forEach(item=>{
  console.log(item)
})
console.timeEnd('Array')