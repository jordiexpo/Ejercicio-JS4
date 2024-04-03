function findbiggest(number1, number2){
 if(number1>number2){
  return number1;
 }
 else{
  return number2;
 }
}
let biggestnumber = findbiggest(15,6);
console.log("El resultado es:", biggestnumber)