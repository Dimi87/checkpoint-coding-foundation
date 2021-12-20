class SumApp {
   constructor(){
    

    this.numbers = []
  }


  addNumber(n){
   this.numbers.push(n)
  }

  getSum() {
    for (let i = 0; i < this.numbers.length; i++) {
       let sumArray = sumArray + this.numbers[i]
    }
    return sumArray
  }

  reset(){
  this.numbers = []
  }

}
this.sumApp = new SumApp();
this.sumApp.reset()
this.sumApp.addNumber(2)

//console.log("wo",numbers)