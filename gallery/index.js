const container = document.querySelector('.container');
const panels = document.querySelectorAll('.panel');

container.addEventListener('click',(e)=>{
    if(!(/panel/g.test(e.target.className))) return;
    const panel = e.target;
    removeSiblings();
    panel.classList.add('active')
})

function removeSiblings(){
    panels.forEach(p=> p.classList.remove('active'))
}