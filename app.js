
const meter = () => {
   let meter=document.getElementById('meter')
    meter.innerHTML = "&#xf2cb"

    setTimeout(()=>{
        meter.innerHTML = "&#xf2ca"
        meter.style.color = " #f8b627"
    },1000);

    setTimeout(()=>{
        meter.innerHTML = "&#xf2c9"
    },2000);

    setTimeout(()=>{
        meter.innerHTML = "&#xf2c8"
    },3000);

    setTimeout(()=>{
        meter.innerHTML = "&#xe040"
        meter.style.color = "red"
    },4000)

}

meter()


setInterval(meter,5000)