/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus, knowsProgramming, config) {
  let totalHours = knowsProgramming ? 800 : (800+500);
  let speed = config[focus];
  let totalWeeks = totalHours / speed;
  return Math.ceil(totalWeeks);
};
  