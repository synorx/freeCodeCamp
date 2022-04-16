const romanNumerals = {
    1 : "I",
    5 : "V",
   10 : "X",
   50 : "L",
  100 : "C",
  500 : "D",
 1000 : "M"
}
function convertToRoman(num) {
  let newArr = [];
  // Remain should be zero for convert
  while (num !==0){
    // indexing and sorting num
  
   let numbers = ([1,5,10,50,100,500,1000,num]);
  
  numbers.sort((a,b) => a-b);
  console.log(numbers);
  // ındexOf() return first index but same number are have a trouble;
  let numIndex = numbers.lastIndexOf(num);
  // avoid the sorting 0 index which remain value at 1
  if (!numIndex){
    numIndex = 1;
  }
  console.log("index:" + numIndex);
  console.log("num:" + num);
  let remainder = (num % numbers[numIndex -1 ]); 
      console.log("remainder:" + remainder)
  let division = Math.floor(num / numbers[numIndex -1 ]);
      console.log("division:" + division)
  if (division === 4 ){
    newArr.push(romanNumerals[numbers[numIndex-1]]+romanNumerals[numbers[numIndex+1]]);
      } else {
          for (let i=0; i < division; i++){
            newArr.push(romanNumerals[numbers[numIndex-1]]);
              
          }      
        }


 num = remainder;

 
}
console.log(newArr.join(''));
}
           
convertToRoman(94);