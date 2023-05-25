import Calculadora from './calculator.js';

//Variables DOM

const $keyboard = document.querySelector('.container__keyboard');
const $input = document.querySelector('.container__input-number');
const calculadora = new Calculadora();

$keyboard.addEventListener('click', pressButton);




function pressButton(e){
  e.preventDefault();
  let btnSelect = e.target.dataset.key;
  let operator;
  
    
  if(isNaN(btnSelect)){
    operator = selectOperator(btnSelect);
    
  }else if(btnSelect == "result"){
    result(operator)
    calculadora.show($input)
    calculadora.result = 0
    
  }else{
    selectKeycap(btnSelect);
  }
  
  
}



function selectKeycap(selection){
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

function result (operator){
  if(operator === 'add'){
    calculadora.add()
  }
}




function selectOperator(selection){
  //Operation keycaps
  
  let oldNumber = Number($input.value);
  console.log(oldNumber);

  //Que retorne que operador es
  let operator = ''
  switch(selection){
    case 'del':
      const del = deleted($input.value);  
      return $input.value = del;
    case 'add':
      operator = 'add';
      return $input.value = ''; 
    case 'rest':
      operator = 'rest'
      return $input.value = ''; 
    case 'dot':
      return $input.value += '.'; 
    case 'divide':
      return $input.value = ''; 
    case 'product':
      return $input.value = ''; 
    case 'reset':
      calculadora.result = 0
      return $input.value = ''; 
  }

}

function deleted(currentValue){ 
  let input = Array.from(currentValue);
  input.pop();
  return input.join('');
}