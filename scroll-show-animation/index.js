const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll',checkBoxes)
checkBoxes();
function checkBoxes(){
    boxes.forEach(box=>{
        const rect = box.getBoundingClientRect();
        if(rect.top < window.innerHeight / 5 * 4){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}

