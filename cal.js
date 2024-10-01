window.onload = () => {
    const display = document.getElementById("display");
    let currentInput = '';
    let operator = '';
    let previousInput = '';
  
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
      button.addEventListener("click", function() {
        const value = this.innerText;
  
        if (value === 'C') {
          currentInput = '';
          operator = '';
          previousInput = '';
          display.value = '';
        } else if (value === '←') {
          currentInput = currentInput.slice(0, -1);
          display.value = currentInput;
        } else if (['+', '-', '*', '/'].includes(value)) {
          operator = value;
          previousInput = currentInput;
          currentInput = '';
        } else if (value === '=') {
          if (previousInput && operator && currentInput) {
            currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
            display.value = currentInput;
            operator = '';
            previousInput = '';
          }
        } else {
          currentInput += value;
          
        }
      });
    });
  };
  
