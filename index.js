let clock = document.getElementById('clock');

setInterval(()=>{
    let date = new date();
    clock.innerHTML = date.toLocaleTimeString();
});