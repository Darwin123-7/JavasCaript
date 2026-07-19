const btn = document.querySelector(".btn");

btn.addEventListener('click', (e) => {
    
    if(e.isTrusted) {
        console.log("This is human action");
    }else {
        console.log("This is Javascript code event");
    }
});


let click = new Event('click');
btn.dispatchEvent(click);
