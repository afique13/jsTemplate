



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#link-1").onclick = changeClass;
});

function changeClass (){
    const flag = document.querySelector("#react-icon").classList.item(1);
    if(flag === 'fa-bars'){
        document.querySelector("#react-icon").classList.replace("fa-bars", "fa-times");
    }
    else if(flag === 'fa-times'){
        console.log('5');
        document.querySelector("#react-icon").classList.replace("fa-times", "fa-bars");
    }
}   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
