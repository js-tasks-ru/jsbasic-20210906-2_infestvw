function checkSpam(str) {
  str = str.toUpperCase();

  if (str.includes('1XBET') || str.includes('XXX') === true) {
    return true;
  }
  //if (str.includes('1XBET') === true) {
  //  return true;
  //} else if (str.includes('XXX') === true) {
  //  return true;
  //}
  return false;
  

}