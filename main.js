btn.addEventListener('click',()=>{
    let p = document.querySelector('.para')
    p.remove()
})


btn1.addEventListener('click',()=>{
    let p = document.createElement('p')
    p.innerText='my name is devilal panchal'
    let div = document.querySelector('.main2') // acces html
    div.append(p)
})