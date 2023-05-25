export default class Calculadora {
  
  constructor(num1,num2){
    this.num1 = num1
    this.num2 = num2
    this.result=0
  }

  add(){   
    return this.result = this.num1 + this.num2;
  }

  rest(num2){
    return console.log( this.result = Math.abs(this.result-num2));
  }

  product(num2){
    return this.result *=  num2
  }

  divide(num2){
    return this.result /=  num2
  }


}

