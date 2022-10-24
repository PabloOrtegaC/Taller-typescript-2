import { series } from './datosSeries.js';
function insertSeries(series) {
    var tbody = document.getElementById('series');
    console.log('Desplegando series.');
    series.forEach(function (s) {
        var tr = document.createElement('tr');
        var html = "  <td class=\"table-active\"> <b>".concat(s.id, "</b> </td>\n                              <td class=\"table-active\"> ").concat(s.name, "</a> </td>\n                              <td class=\"table-active\"> ").concat(s.channel, " </td>\n                              <td class=\"table-active\"> ").concat(s.seasons, " </td>");
        tr.innerHTML = html;
        tr.addEventListener("click", function () { createCard(s.name, s.description, s.link, s.cover); });
        tbody.appendChild(tr);
    });
}
function insertAverage(series) {
    console.log('Calculando promedio.');
    var sum = 0;
    series.forEach(function (s) { sum += s.seasons; });
    var avrg = sum / series.length;
    console.log('Desplegando promedio.');
    var table = document.getElementById('tabla-series');
    var html = '<p> &nbsp; Seasons average: ' + avrg + '</p>';
    table.insertAdjacentHTML('afterend', html);
}
insertSeries(series);
insertAverage(series);
var card = document.getElementById("card");
function createCard(name, description, link, cover) {
    console.log('Insertando carta');
    card.innerHTML = "<div class=\"card\">\n                            <img src=\"".concat(cover, "\" class=\"card-img-top\" alt=\"...\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\">").concat(name, "</h5>\n                                <p class=\"card-text\">").concat(description, "</p>\n                                <a href=\"").concat(link, "\" target=\u201D_blank\u201D  class=\"btn btn-primary\">Go to series </a>\n                            </div>\n                        </div>");
}
