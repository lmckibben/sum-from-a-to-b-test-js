
function sum(fromN, toN) {
  let n = fromN;
  if (fromN === toN) {
    return toN
  }
  while (fromN < toN){
    n += sum(fromN + 1);
    fromN++
  }
  return n;
}

module.exports = sum;