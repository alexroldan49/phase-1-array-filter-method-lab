// Code your solution here
const Drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(arr,string){
    return arr.filter((e)=>e.toUpperCase()===string.toUpperCase())
}

//

function fuzzyMatch(arr,str){{
    return arr.filter((e)=>e.substr(0,str.length) == str)    
}

}



function matchName(arr, string){
    return arr.filter((obj)=>obj.name === string)

}





// console.log(drivers)
// console.log(findMatching(drivers, 'Sally'))
// console.log(fuzzyMatch(drivers, ''))

console.log(matchName(Drivers, 'Bobby'))



// let S = 'Sally'

// console.log(S.substr(0,3))