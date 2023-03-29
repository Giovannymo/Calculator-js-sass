import Calculadora from './calculator.js';

//Variables DOM

const $keyboard = document.querySelector('.container__keyboard');
const $input = document.querySelector('.container__input-number');

$keyboard.addEventListener('click', pressButton);




function pressButton(e){
  e.preventDefault();
  const btnSelect = e.target.classList[1];
  optionSelect(btnSelect)

}


function optionSelect(selection){
 


  //Operation keycaps
  switch(selection){
    case 'keyboard__keycap-del':
      let input = Array.from($input.value)
      input.pop()
      let newValue = input.join('')
      return $input.value = newValue
    case 'keyboard__keycap-plus':
      return $input.value += '1'; 
    case 'keyboard__keycap-rest':
      return $input.value += '1'; 
    case 'keyboard__keycap-dot':
      return $input.value += '.'; 
    case 'keyboard__keycap-divide':
      return $input.value += '1'; 
    case 'keyboard__keycap-product':
      return $input.value += '1'; 
    case 'keyboard__keycap-reset':
      return $input.value = ''; 
    case 'keyboard__keycap-enter':
      return $input.value += '1';  
  }

  //It know keycap press
  if($input.value.length <= 9 ){
    
    switch(selection){
      case 'keyboard__keycap-0':
        return $input.value += '0';
      case 'keyboard__keycap-1':
        return $input.value += '1';
      case 'keyboard__keycap-2':
        return $input.value += '2'; 
      case 'keyboard__keycap-3':
        return $input.value += '3'; 
      case 'keyboard__keycap-4':
        return $input.value += '4'; 
      case 'keyboard__keycap-5':
        return $input.value += '5'; 
      case 'keyboard__keycap-6':
        return $input.value += '6'; 
      case 'keyboard__keycap-7':
        return $input.value += '7'; 
      case 'keyboard__keycap-8':
        return $input.value += '8'; 
      case 'keyboard__keycap-9':
        return $input.value += '9'; 
    
    }
  }

}