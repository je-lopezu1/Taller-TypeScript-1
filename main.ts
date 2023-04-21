import { Serie } from "./serie.js";

import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!; 

console.log('Hola');

function seriesEnTablas(series: Serie[]) {
    series.forEach((series) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${series.id}</td>
                            <td>${series.titulo}</td>
                            <td>${series.plataforma}</td>
                            <td>${series.numTemporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
}


function getTemporadasPromedio(series: Serie[]): void {
    var suma = 0;
    const numSeries = series.length;
    series.forEach((series) => {
        suma += series.numTemporadas;
    });
    suma = suma / numSeries;
    let pElement= document.createElement("p")
    pElement.innerHTML =`Temporadas promedio: ${suma}`;

    seriesTbody.appendChild(pElement);
  }
  

seriesEnTablas(series);
getTemporadasPromedio(series);