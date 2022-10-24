import { Serie } from './serie.js';
import { series } from './datosSeries.js';

function insertSeries(series: Serie[]): void {
    let tbody: HTMLElement = document.getElementById('series')!;
    console.log('Desplegando series.');
    series.forEach(s => {
        let tr: HTMLElement = document.createElement('tr');
        let html: string = `  <td class="table-active"> <b>${s.id}</b> </td>
                              <td class="table-active"> <a href=${s.link} target="_blank">${s.name}</a> </td>
                              <td class="table-active"> ${s.channel} </td>
                              <td class="table-active"> ${s.seasons} </td>`;
        tr.innerHTML = html;
        tr.addEventListener("click", () => { createCard(s.name,s.description,s.link,s.cover); })
        tbody.appendChild(tr);

    });
}

function insertAverage(series: Serie[]): void {
    console.log('Calculando promedio.')
    let sum: number = 0;
    series.forEach(s => {sum += s.seasons});
    const avrg: number = sum / series.length;
    console.log('Desplegando promedio.')
    let table: HTMLElement = document.getElementById('tabla-series')!;
    const html: string = '<p> &nbsp; Seasons average: '+avrg+'</p>'
    table.insertAdjacentHTML('afterend', html)
}

insertSeries(series);
insertAverage(series);

const card: HTMLElement = document.getElementById("card")!


function createCard(name: string, description: string, link: string, cover: string): void {
    console.log('Insertando carta')
    card.innerHTML = `<div class="card">
                            <img src="${cover}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${description}</p>
                                <a href="${link}" target=”_blank”  class="btn btn-primary">Go to series </a>
                            </div>
                        </div>`;
}
