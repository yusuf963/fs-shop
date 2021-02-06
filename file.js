const fs = require('fs')

fs.writeFileSync('App.js', '')

const hobbies = ['football', 'basketball'] const [a, b] = hobbies console.log(a,b) const obj = { name: 'Yusuf', age: 30, addres: 1223,
function() {
  return 1 + 1
} } const gitNme = ({ age, addres }) => { return addres + age } const { name, age } = obj console.log(name, age) // console.log(gitNme(obj)) const spreadArr = [...hobbies] const apreadObj = { ...obj } const newarr = hobbies // console.log(newarr)
// console.log(spreadArr) // console.log(apreadObj)


const func = (...args) => { return args } // console.log(func(1,2,3,4,45,'t',6,7,true,7,8))

