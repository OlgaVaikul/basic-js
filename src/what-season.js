const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //проверяем, если не в форме даты
  if (!date) {
    return 'Unable to determine the time of year!';
  } 
  //Если выдает ошибку, вернуть результат
  try {
    date.getTime()
} catch (err) {
    throw new Error('Invalid date!')
}
  let month = date.getMonth();
  if (month === 11 || month === 00 || month === 01) {
return 'winter'
   } else if (month === 02 || month === 03 || month === 04) {
    return 'spring'
    } else if (month === 05 || month === 06 || month === 07) {
        return 'summer'
     } else if (month === 08 || month === 09 || month === 10) {
     return 'autumn'
     }
}
module.exports = {
  getSeason
};
