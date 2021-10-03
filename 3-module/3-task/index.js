function camelize(str) {
  return str
    .split("-")
    .map((strinG, index) => index == 0 ? strinG : strinG[0].toUpperCase() + strinG.slice(1)
    )      
    .join("");
}
