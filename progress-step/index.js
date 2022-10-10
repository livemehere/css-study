const prev = document.getElementById('prev');
const next = document.getElementById('next');
const bar = document.querySelector('.bar');
const steps = document.querySelectorAll('.step');
const actives = document.querySelectorAll('.active');

let status = 1;
let max = steps.length;
next.addEventListener('click',()=>{
    status = status >= max ? max : status+1;
    update();
})

prev.addEventListener('click',()=>{
    status = status <= 1  ? 1 : status-1;
    update();
})


function update(){

    steps.forEach(s=>{
        if(s.textContent <= status){
            s.classList.add('active');
        }else{
            s.classList.remove('active')
        }
    })
    bar.style.width = (((status -1) /( max -1) ) * 100) + '%';
}