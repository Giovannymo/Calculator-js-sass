export default class Calculadora {
  
  constructor(){
    this.result=0
  }

  add(num2){   
    return this.result += num2;
  }

  rest(num2){
    console.log(this.result);
    console.log(num2);
    return console.log( this.result = Math.abs(this.result-num2));
  }

  product(num2){
    return this.result *=  num2
  }

  divide(num2){
    return this.result /=  num2
  }

  show(input){
    this.add(Number(input.value))
    input.value = String(this.result)
    console.log(this.result)
    this.result=0
  }

}

