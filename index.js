import { yachts } from './data.js';

const yachtsArr = JSON.parse(yachts);
const container = document.querySelector('.infoRent');
console.log(container);

addYachts(yachtsArr);
function addYachts(yachtsObj) {
  console.log(container);

  yachtsObj.forEach((obj) => {
    const yachtDiv = document.createElement('div');
    yachtDiv.className = 'yacht';
    yachtDiv.id = obj.id;

    const yachtDivImg = document.createElement('img');
    yachtDivImg.src = obj['img'];

    const yachtDivH3 = document.createElement('h3');
    yachtDivH3.textContent = obj['yachtName'];

    const yachtDivP1 = document.createElement('p');
    yachtDivP1.textContent = `Мощность: ${obj['power']} л.с.`;

    const yachtDivP2 = document.createElement('p');
    yachtDivP2.textContent = `Максимальная скорость: ${obj['maxSpeed']} узл.`;

    const yachtDivP3 = document.createElement('p');
    yachtDivP3.textContent = `Кол-во спальных мест: ${obj['numberOfBeds']} чел.`;

    container.append(yachtDiv);
    [yachtDivImg, yachtDivH3, yachtDivP1, yachtDivP2, yachtDivP3].forEach((el) => {
      yachtDiv.append(el);
    });
  });
}
