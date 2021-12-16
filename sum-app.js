class SumApp {
   constructor(){
    const numbers = []
  }


  addNumber(n){
   push.number(n)
  }

  getSum() {
    for (let i = 0; i < numbers.length; i++) {
       let sumArray = sumArray + numbers[i]
    }
    return sumArray
  }

  reset(){
  numbers = []
  }

}
const sumApp = new SumApp();
sumApp.reset()
sumApp.addNumber(2)

//console.log("wo",numbers)