/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let counter = 0;
  for( let i = 0; i < preferences.length; i++) {
    let indexLover1 = (preferences[i] - 1); // находим индекс 1го любовника
    if (indexLover1 == i) continue; // проверяем не попал ли сам на себя

    let indexLover2 = (preferences[indexLover1] - 1); // находим индекс 2го любовника
    if (indexLover2 == indexLover1) continue; // проверяем не попал ли сам на себя

    let indexLover3 = (preferences[indexLover2] - 1); // находим индекс 3го любовника
    if (indexLover3 == indexLover2) continue; // проверяем не попал ли сам на себя

    if (indexLover3 == i) {counter++}; // если индексы совпали - круг замкнулся
  };
  counter /= 3; // делим на 3, т.к. каждый треугольник посчитали по три раза
  return counter;
};