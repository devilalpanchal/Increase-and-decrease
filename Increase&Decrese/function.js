
let count = 0

let p = document.querySelector('p');

btn1.addEventListener('click',()=>{
    count++
    p.innerHTML= count

})

btn2.addEventListener('click',()=>{
    count--;
    p.innerHTML= count

})

btn3.addEventListener('click',()=>{
    count = 0;
    p.innerHTML= count

})


Input.addEventListener('input',()=>{
    let value = input.value;
    p.innerHTML=value;
    count= value
})


btn4.addEventListener('input',()=>{
    let value = input.value;
    let num = +value;
    count = value
    p.innerHTML=value;
    count= value
})





// parseInt to change para to number leave after string not give float value
let num = '1256p1254'
console.log(parseInt(num))

// parseFloat to 12.555 all number like we use not leave add floar value
// float value 1.2552
// integer value 15655



