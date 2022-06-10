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

// superbowlWin = (record) => {
//   const result = record.find( record => record.result === "W" );
//   return !!result ? result.year : undefined;
// }
// console.log(superbowlWin(record))

function superbowlWin(record){
  let superbowl = record.find(function(record){
    record.result === "W";
  })
  !!superbowl ? record.year : undefined;
  // if(!!superbowl){
  //   return superbowl.year;
  // } else{
  // return undefined
  // }
}
console.log(superbowlWin(record))
