/*
func that returns most repeated digit

ex: [1, 12 ,23]
output: [1, 2]
*/


a = [25, 2, 3, 57, 38, 41]

function solution(n) {
  strArr = n.join("").split("")
  
  const numObject = {}
  
  new Set(strArr).forEach(item=>{

    let arr = strArr.filter(j=>j==item)
    
    numObject[`${item}`]=arr.length
      
  })  
    
  // get max value  
  let max = 0  
  for (const value of Object.values(numObject)) {
    
    max = Math.max(max, value)
  }  
  
  let res = []
  for (const keys of Object.keys(numObject)) {
    
    if (numObject[keys]==max) {
      res.push(keys)
    }
  } 
  
  return res
}

//driver code
console.log(solution(a));
