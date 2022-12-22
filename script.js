const dia = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lanc = '1 dec 2023' 

function countDown(){    
    
    const dataLanc = new Date(lanc)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)

    const finalDias = Math.floor(segTotal / (1000 * 60 * 60 * 24))
    const finalHoras = Math.floor((segTotal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const finalMinutos = Math.floor((segTotal % (1000 * 60 * 60 )) / (1000 * 60 ));
    const finalSegundos = Math.floor((segTotal % (1000 * 60)) / 1000);

    dia.innerHTML = `${formatTempo(finalDias)}D`
    horas.innerHTML = formatTempo(`${formatTempo(finalHoras)}H`)
    minutos.innerHTML = formatTempo(`${formatTempo(finalMinutos)}M`)
    segundos.innerHTML = formatTempo(`${formatTempo(finalSegundos)}S`)
}

    function formatTempo(tempo){
        return tempo < 10? `0${tempo}` : tempo
    }

    countDown()
    setInterval(countDown, 1000)


