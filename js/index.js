import Calculadora from './calculator.js';

//Variables DOM

const $keyboard = document.querySelector('.container__keyboard');
const $input = document.querySelector('.container__input-number');
let oldInput;
let newInput;
let operator;

$keyboard.addEventListener('click', pressButton);


function pressButton(e){
  e.preventDefault();
  let btnSelect = e.target.dataset.key;

  console.log(btnSelect);

  //Si el boton seleccionado es un numero
  if(Number(btnSelect)){
    selectKeycapNumber(btnSelect)
  }else if(btnSelect=== 'reset') {
    $input.value = ''
  }else if(btnSelect === 'del'){
    return $input.value = deleted($input.value)
  }

  if(btnSelect === 'add'){
    operatorSelect(btnSelect)
  }
  if(btnSelect === 'rest' ){
    operatorSelect(btnSelect)
  }
  if(btnSelect === 'product'){
    operatorSelect(btnSelect)
  }
  if(btnSelect === 'divide'){
    operatorSelect(btnSelect)
  }

  
  if(btnSelect === 'result'){
    newInput = $input.value
    const calculadora = new Calculadora(Number(oldInput), Number(newInput));

    if(operator === 'add'){
      calculadora.add();
    }
    if(operator === 'rest'){
      calculadora.rest()
    }
    if(operator === 'product'){
      calculadora.product()
    }
    if(operator === 'divide'){
      calculadora.divide()
    }


    calculadora.show($input)
  }
}







function selectKeycapNumber(selection){
  //Si el largo del input no es mayor que 9, retorne el valor seleccionado

  if($input.value.length <= 9 ){
    switch(selection){
      case '0':
        return $input.value += '0';
      case '1':
        return $input.value += '1';
      case '2':
        return $input.value += '2'; 
      case '3':
        return $input.value += '3'; 
      case '4':
        return $input.value += '4'; 
      case '5':
        return $input.value += '5'; 
      case '6':
        return $input.value += '6'; 
      case '7':
        return $input.value += '7'; 
      case '8':
        return $input.value += '8'; 
      case '9':
        return $input.value += '9';
      
    }
  }
}

function operatorSelect(btnSelect){
  oldInput = $input.value
  operator = btnSelect
  $input.value = ''
}

function deleted(currentValue){ 
  let input = Array.from(currentValue);
  input.pop();
  return input.join('');
}