function zipStrings(strA, strB) {
  let zippedString = "";

  const len = Math.max(strA.length, strB.length);
  for (let i = 0; i < len; i++) {
    if (strA[i] !== undefined) {
      zippedString = zippedString + strA[i];
    }
    if (strB[i] !== undefined) {
      zippedString = zippedString + strB[i];
    }

  }
  return zippedString;
}