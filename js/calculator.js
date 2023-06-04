export default class Calculadora {

  constructor(num1,num2){
    this._num1 = num1
    this._num2 = num2
    this._result=0
  }   

  get num1(){
    return this._num1;
  }
  set num1(newNum){
    return this._num1=newNum;
  }
  get num2(){
    return this._num2;
  }
  set num2(newNum){
    return this._num2=newNum;
  }
  

  add(){   
    return this._result = this._num1 + this._num2;
  }

  rest(){
    return this._result = this._num1 - this._num2
  }

  product(){
    return this._result = this._num1 * this._num2
  }

  divide(){
    return this._result = this._num1 / this._num2
  }

  show(input){
    return input.value = this._result.toString()
  }


}

