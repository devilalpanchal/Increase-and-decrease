


// let input1id = 'Firstvalue',input2id = 'Secondvalue', Outputid ='reslut';
// let Getinput = function(id){
//     return parseInt(document.getElementById(id).value);
// }
// let Showinput = function(OutputValue,OutputId){
//     document.getElementById(OutputId).innerHTML = OutputValue;
// }

// let calculator = function(Operation,input1,input2){
//     if(Operation == Add)
//     return input1 + input2;

//    else if(Operation == Sub)
//     return input1 - input2;

//     else if(Operation == Mul)
//     return input1 * input2;

//     else if(Operation == Div)
//     return input1 / input2;
    
// }
// let Operation = function(Operation){
//     X = getInputs(inputFirst);
//     Y = getInputs(inputSecond);
//     Outputtid = calculator(Operation,X,Y);
//     ShowOutput(outputtid);
//     console.log(X +" " + Operation +" " + Y + " " + output)
//     console.log(this)
// };
// // console.log(calculator)

plus.addEventListener('click',()=>{

let value1=Firstvalue.value
let value2=Secondvalue.value

let total = +value1 + (+value2)
console.log(total)
let result =document.querySelector('#result');
result.innerHTML=total ;

})