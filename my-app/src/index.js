

const mediaQuery = window.matchMedia('(max-width: 768px)');

mediaQuery.addEventListener("change", (e) => {
    if(e.matches) {
        document.querySelector('#form-nav').style.display = 'none';
        document.querySelector('#form-collapse').style.display = 'block';
    }else {
        document.querySelector('#form-nav').style.display = 'block';
        document.querySelector('#form-collapse').style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#link-1").onclick = changeClass;

});

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
