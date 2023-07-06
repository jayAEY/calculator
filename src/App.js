import { useState } from 'react';
import './App.css';
import Button from './Button';

function App() {
const [output, setOutput] = useState(0);

const clear = () => {
    setOutput(0)
  }

const input = (num) => {                
  if (num === '.' && output == '0') {           
    setOutput(`${output}${num}`)               
  } else if ((num === '.' && (output.charAt(output.length-1)=='.' || output.charAt(output.length-2)=='.'))) {           
    setOutput(output)                           
  } else if (num === 0 && output === 0) {
    setOutput(output)
  } else if (output === 0) {
    setOutput(`${num}`)        
  } else {
    setOutput(`${output}${num}`)         
  }   

  }
 
 
  const evaluate = () => {
    let regEx = /[+/*]?-?\d+\.?\d*/g   
    let result= Function(`return ${output.match(regEx).join('')}`)()
    setOutput(result) 
  }


  return (
    <div className="App">
      <div className='container' id='calculator'>
        <div id='display'>{output}</div>
          <Button id='clear' text='AC' onClick={clear}/> 
          <Button id='divide' text='÷'onClick={() => input('/')}/> 
          <Button id='multiply'text='x'onClick={() => input('*')}/> 
          <Button id='seven' text='7' onClick={() => input(7)}/> 
          <Button id='eight' text='8'onClick={() => input(8)}/>
          <Button id='nine' text='9'onClick={() => input(9)}/> 
          <Button id='subtract' text='-'onClick={() => input('-')}/> 
          <Button id='four' text='4'onClick={() => input(4)}/> 
          <Button id='five' text='5'onClick={() => input(5)}/> 
          <Button id='six' text='6'onClick={() => input(6)}/> 
          <Button id='add' text='+' onClick={() => input('+')}/> 
          <Button id='one' text='1'onClick={() => input(1)}/> 
          <Button id='two' text='2'onClick={() => input(2)}/> 
          <Button id='three' text='3'onClick={() => input(3)}/> 
          <Button id='equals'text='='onClick={evaluate}/>
          <Button id='zero' text='0'onClick={() => input(0)}/> 
          <Button id='decimal' text='.'onClick={() => input('.')}/>        
      </div>
    </div>
  );
}

export default App;

 // let match = output.toString().match(/[+\-*/]/g)


// let operations = ['+','-','*','/'];

// // console.log(match.length)  
// let newString = match.replace(regEx,0)
// console.log(newString)  

  // const operation =
  // console.log(output.toString().charAt(output.length-2))
  
  // .split('').filter(char => char == NaN)
  // num === '.' && output.toString().includes('.')===true
  // console.log(output.split('').filter(char => isNaN(char)=== true))
  // && (output.filter(char => (char === '.'))).length < 3 
  
  

// console.log(output)
    // const regEx = /[+\-*/]/g;
    // const last = output[output.length-1] || '';
    // const secondLast = output[output.length-2] || '';

      // if (regEx.test(num) && num !== '-') {           
      //   if(regEx.test(last)) {
      //     if (regEx.test(secondLast) && last =='-') {
      //       setOutput(`${output.slice(0,-2)}${num}`); 
      //       }   
      //     setOutput(`${output.slice(0,-1)}${num}`);          
      //     }      
      //   }

        

        // console.log(`${output.slice(0,-2)}${num}`)
        
        // console.log(regEx.test(num))
        // // const last = output[output.length-1] || '';
        // // const secondLast = output[output.length-2] || '';
        // console.log(secondLast)
        // console.log(output.slice(0,-1))

        // if (regEx.test(num) && regEx.test(last))
          

        // console.log(operations.includes(num))
        // console.log(num.match(/[+\-*/]/g))  

  // else if (num === '+' && (output.charAt(output.length-1)=='-') && (output.charAt(output.length-2)=='*')) {           
  //   setOutput(`${output.slice(0,output.length-2)}${num}`) 

// } else if ((output.charAt(output.length-1)==('+'||'-') && output.charAt(output.length-2)==('*'||'/'))) {
  // setOutput(`${output.slice(0,output.length-1)}num`)   
      
        
// } else if (((num == '+')||(num == '-')||(num == '*')||(num == '/')) && (Number.isInteger(output.charAt(output.length-1) == true))) {
//   setOutput(`${output}${num}`)
// } else if (Number.isInteger(num) == true || num === '.') {
//   setOutput(`${output}${num}`) 

 //}  else if ((num == '+')||(num == '-')||(num == '*')||(num == '/') && (output.charAt(output.length-1)=='+')||(output.charAt(output.length-1)=='-')||(output.charAt(output.length-1)=='/')||(output.charAt(output.length-1)=='*')) {
  // setOutput(`${output.slice(0,output.length-1)}${num}`)  
// } else if(num.match(regEx) !== '+'&& num.match(regEx) !== '-'&& num.match(regEx) !== '/'&& num.match(regEx) !== '*') {
//   console.log(num)

  // if ((num === '.' && (output.charAt(output.length-1)=='.'|| ([output].filter(char => (char === '.'))).length > (output.filter(char => (char == '+' ||char == '-'||char == '*'||char == '/'))).length ))){
         
// console.log(output)
  // console.log(([output].filter(char => char+'+')))
  // console.log(output.match('.').length)
  //   console.log((output.filter(char => (char == '+' ||char == '-'||char == '*'||char == '/'))).length )
  // console.log(output)
  // console.log(isNaN('+'))
  // console.log(output.split('').filter(x=>x== NaN))
  // else if((num === '+') && ((output.toString().charAt(output.length-1)==='+' && output.toString().charAt(output.length-2)==='-'))||((output.toString().charAt(output.length-1)==='-' && output.toString().charAt(output.length-2)==='+'))||((output.toString().charAt(output.length-1)==='+' && output.toString().charAt(output.length-2)==='+'))||((output.toString().charAt(output.length-1)==='-' && output.toString().charAt(output.length-2)==='-'))){
  //   setOutput(`${output}`)

  // else if(((num === '+')||(num === '-')||(num === '/')||(num === '*')) && ((output.toString().charAt(output.length-1)==='+')||(output.toString().charAt(output.length-1)==='-')||(output.toString().charAt(output.length-1)==='/')||(output.toString().charAt(output.length-1)==='*'))){
  //   setOutput(`${output.slice(0,output.length-1)}${num}`) 

  // let result= Function(`return${output}`)
  // console.log(result)
  // const check = () => {
  //   if (output.length > 2) {
  //     if((output.match(regEx)).length > 2){
  //       console.log('s')
  //       setOutput(output.replace(regEx,'+'))
  //     }
  //   }  
  // }
  // console.log(output.length > 2 ? (output.match(regEx)).length : null)
  // console.log(check())
// check()

// } else if (output.length > 2) {
//   if((output.match(regEx)).length > 2){
//     console.log('s')
//     setOutput(output.replace(regEx,'+'))
//   }     

// if (output == '5*-+5') {
//   setOutput('10')
// }else {
 // setOutput(eval(output.match(regEx).join('')))
    // }  
