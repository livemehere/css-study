const bg = document.querySelector('.bg');
const loadingText = document.querySelector('.loading-text');

let loading = 0;

let timer = setInterval(()=>{
    loading++;
    loadingText.textContent = `${loading}%`
    bg.style.filter = `blur(${100 - loading}px)`;
    if(loading > 99){
        clearInterval(timer);
    }
},30)

