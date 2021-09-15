function truncate(str, maxlength) {
  if ( str.lenght > maxlength) {
    return str.slice(0, maxlength - 1) + '…'
  } return str;
}
