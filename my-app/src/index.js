

const mediaQuery1 = window.matchMedia('(max-width: 768px)');
const mediaQuery2 = window.matchMedia('(min-width: 768px)');

mediaQuery1.addEventListener("change", (e) => {
    if(e.matches) {
        document.querySelector('#form-nav').style.display = 'none';
        document.querySelector('#form-collapse').style.display = 'block';
    }else {
        document.querySelector('#form-nav').style.display = 'block';
        document.querySelector('#form-collapse').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    setMediaScreen(mediaQuery2);
    document.querySelector("#link-1").onclick = changeClass;
    
});

const scrollvalue = document.querySelector('#animated-card>.card');
console.log(scrollvalue.offsetTop);

window.addEventListener('scroll', () => {
    if(window.scrollY > (scrollvalue.offsetTop-(window.scrollY/2.5))) {
        document.querySelector('#animate1').style.animationPlayState = 'running';
        document.querySelector('#animate2').style.animationPlayState = 'running';
        document.querySelector('#animate3').style.animationPlayState = 'running';
        document.querySelector('#animate4').style.animationPlayState = 'running';
        document.querySelector('#animate5').style.animationPlayState = 'running';
    }
});

function setMediaScreen(e) {
    if(e.matches) {
        document.querySelector('#form-nav').style.display = 'block';
        document.querySelector('#form-collapse').style.display = 'none';
    }else {
        document.querySelector('#form-nav').style.display = 'none';
        document.querySelector('#form-collapse').style.display = 'block';
    }
}

function changeClass (){
    const flag = document.querySelector("#react-icon").classList.item(1);
    if(flag === 'fa-bars'){
        document.querySelector("#react-icon").classList.replace("fa-bars", "fa-times");
    }
    else if(flag === 'fa-times'){
        document.querySelector("#react-icon").classList.replace("fa-times", "fa-bars");
    }
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
