// code your solution here
const record = [
  {
    year: '2015',
    result: "W"
  },
  {
    year: "2014",
    result: "N/A"
  },
  {
    year: "2013",
    result: "L"
  }
]


// let superbowl = record.find(superbowlWin)

// function superbowlWin(record){
//   let win = record.result === "W"
//   for(let item of record){
//     if(item === "W"){
//       return record.year
//     } else {
//       return "undefined"
//     }
//   }
  
  
// }
// console.log(superbowl)

function superbowlWin(record){
  let win = record.find(function(record){
    return record.result === "W"
  })
  if (win){
    return win.year;
  }
    return "undefined"
  
}

console.log(superbowlWin(record))