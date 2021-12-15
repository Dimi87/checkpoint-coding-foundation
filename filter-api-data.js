function filterApiData(apiData, mandatoryKeys) {
  // wir laufen über jeden Eintrag in der Schleife
  let newArray = []
  for (let i of apiData) {
    // Ausgabe eines Datensatzes 
   //console.log(i); 
   // Von jedem Datensatz bekommen wir nur die keys als Array
   const dataKeys = Object.keys(i)
   // Kontrollieren, welche keys rauskommen:
   //console.log(dataKeys)
   // Hier wollen wir alle keys in einem neuen Array haben:
   for (let currentI of mandatoryKeys) {
   if (dataKeys.includes(currentI)){
      newArray.push(i)
   }
    
   }
  }
  console.log(newArray)
  return newArray
}
