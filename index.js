const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let ho = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (ho < 10) ho = '0' + ho;

    if (m < 10) m = '0' + m;
    
    if (s < 10) s = '0' + s;


    hora.textContent = ho;
    minuto.textContent = m;
    segundo.textContent = s;
    
})