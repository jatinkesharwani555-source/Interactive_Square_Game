let s1 = document.querySelector(".sqr1")
s1.addEventListener("mouseover",()=>{
    let r = Math.floor(Math.random()*100)
    s1.innerHTML = r
//    console.log(r)
})
s1.addEventListener("mouseleave",()=>{
    s1.innerHTML = 1
})

let s2 = document.querySelector(".sqr2")
let color = "red"
s2.addEventListener("mouseenter",()=>{
    if(color == "red"){
        s2.style.backgroundColor = "red"
        color = "green"
    }
    else if(color == "green"){
        s2.style.backgroundColor = "green"
        color = "blue"
    }
    else{
        s2.style.backgroundColor = "blue"
        color = "red"
    }
})
s2.addEventListener("mouseleave",()=>{
    s2.style.backgroundColor = "magenta"
})

let s3 = document.querySelector(".sqr3")
s3.addEventListener("mouseover",()=>{
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    s3.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})
s3.addEventListener("mouseleave",()=>{
    s3.style.backgroundColor = "magenta"
})

let s4 = document.querySelector(".sqr4")
s4.addEventListener("mouseover",()=>{
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    s1.style.backgroundColor = `rgb(0,${c2},${c3})`
    s2.style.backgroundColor = `rgb(${c1},0,${c3})`
    s3.style.backgroundColor = `rgb(${c1},${c2},0)`
})
s4.addEventListener("mouseleave",()=>{
    s1.style.backgroundColor = "magenta"
    s2.style.backgroundColor = "magenta"
    s3.style.backgroundColor = "magenta"
})