const ponteiroHr = document.querySelector(".ponteiro-hr");
const ponteiroMin = document.querySelector(".ponteiro-min");
const ponteiroSeg = document.querySelector(".ponteiro-seg");

const pegarTempo = () => {
    const date = new Date();

    return {
        horas: date.getHours(),
        minutos: date.getMinutes(),
        segundos: date.getSeconds(),
    };
};

setInterval(() => {
    const { segundos, minutos, horas } = pegarTempo();

    ponteiroSeg.style.transform = `translate(0, -50%) rotate(${
        segundos * 6
    }deg)`;
    ponteiroMin.style.transform = `translate(0, -50%) rotate(${
        minutos * 6
    }deg)`;
    ponteiroHr.style.transform = `translate(0, -50%) rotate(${horas * 30}deg)`;
}, 1000);
