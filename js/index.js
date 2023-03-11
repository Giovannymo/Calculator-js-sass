//Variables DOM


class calculadora {

  constructor(num1, num2){
    this.num1=num1,
    this.num2=num2,
    this.result=0;
  }

  
  suma(){
    this.result=this.num1 + this.num2;
    return this.result;
  }

  resta(){
    this.result=this.num1 - this.num2;
    return this.result; 
  }

  producto(){
    this.result=this.num1 * this.num2;
    return this.result;
  }

  division(){
    this.result=this.num1 / this.num2;
    return this.result;
  }

}


