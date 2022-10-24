// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds2 = (...arr) => arr.filter(nums => nums % 2 === 0)

const findMin= (...arg) => Math.min(...arg)

const mergeObjects=(arg1,arg2) => ({...arg1,...arg2});

const doubleAndReturnArgs=(array, ...args) =>[...arr,...args.map(num => num * 2)] 

const removeRandom = items =>{
    let idx = Math.floor(Math.random() * items.length)
    return [...items.slice(0,idx),...items.slice(idx +1)]
}

const extend=(array1,array2) => [...array1,...array2]

const addKeyVal=(obj,key,val) => {
    let newObj={...obj}
    newObj[key]=val;
    return newObj
}

const removeKey=(obj,key) =>{
    let result={...obj}
    delete result[key]
    return result
}

const combine=(obj1,obj2) => ({...obj1,...obj2})

const update=(obj,key,val) =>{
    let result={...obj}
    result[key]=val;
    return result
}