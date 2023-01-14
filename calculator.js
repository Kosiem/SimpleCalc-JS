let result = document.querySelector(".result");
let memory = document.querySelector(".memory");
memory.innerHTML = " ";



// buttons (numbber) handling

const numbers = document.querySelectorAll(".number");
for( let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (addnumbers) =>{
        console.log(addnumbers.target);
        if(result.innerHTML == "0"){
            result.innerHTML = " ";
        }
    
        if(numbers[i].value == "1"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "2"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "3"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "4"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "5"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "6"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "7"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "8"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "9"){
            result.innerHTML += numbers[i].value;
        } else if(numbers[i].value == "0"){
            result.innerHTML += numbers[i].value;
        }
    });
}

// keyboard handling
document.addEventListener("keypress", function (addnumbersKeyboard){
    console.log("test");
    if(result.innerHTML == "0"){
        result.innerHTML = " ";
    }
    if(addnumbersKeyboard.key == "1"){
        result.innerHTML += "1";
    } else if(addnumbersKeyboard.key == "2"){
        result.innerHTML += 2;
    } else if(addnumbersKeyboard.key == "3"){
        result.innerHTML += 3;
    } else if(addnumbersKeyboard.key == "4"){
        result.innerHTML += 4;
    } else if(addnumbersKeyboard.key == "5"){
        result.innerHTML += 5;
    } else if(addnumbersKeyboard.key == "6"){
        result.innerHTML += 6;
    } else if(addnumbersKeyboard.key == "7"){
        result.innerHTML += 7;
    } else if(addnumbersKeyboard.key == "8"){
        result.innerHTML += 8;
    } else if(addnumbersKeyboard.key == "9"){
        result.innerHTML += 9;
    } else if(addnumbersKeyboard.key == "0"){
        result.innerHTML += 0;
    } else if(addnumbersKeyboard.key == "+"){
        localStorage.setItem("numberA", parseFloat(result.innerHTML));
        memory.innerHTML = result.innerHTML + "+"; 
        result.innerHTML = "0";
    }else if(addnumbersKeyboard.key == "-"){
        localStorage.setItem("numberA", parseFloat(result.innerHTML));
        memory.innerHTML = result.innerHTML + "-"; 
        result.innerHTML = "0";
    } else if(addnumbersKeyboard.key == "/"){
        localStorage.setItem("numberA", parseFloat(result.innerHTML));
        memory.innerHTML = result.innerHTML + "/"; 
        result.innerHTML = "0";
    } else if(addnumbersKeyboard.key == "*"){
        localStorage.setItem("numberA", parseFloat(result.innerHTML));
        memory.innerHTML = result.innerHTML + "*"; 
        result.innerHTML = "0";
    } else if(addnumbersKeyboard.key == "c"){
        result.innerHTML = "0";
        memory.innerHTML = "";
    } else if(addnumbersKeyboard.key == "="){
        let numberA = localStorage.getItem("numberA");
        let numberB = parseFloat(result.innerHTML);
        console.log(numberA);
        console.log(numberB);
        memory.innerHTML += result.innerHTML;
        var memory2 = memory.innerHTML
        for (let i = 0 ;i < memory2.length; i++){
            if(memory2[i] == "+"){
                var equal = parseFloat(numberA) + parseFloat(numberB);
            }else if (memory2[i] == "-"){
                var equal = parseFloat(numberA) - parseFloat(numberB);
            }else if (memory2[i] == "*"){
                var equal = parseFloat(numberA) * parseFloat(numberB);
            } else if(memory2[i] == "/"){
                numberA = parseFloat(numberA);
                numberB = parseFloat(numberB)
                console.log(numberA/numberB);
                var equal = numberA / numberB;
                
            }
            result.innerHTML = equal;
        } 
    }
})

// button (actions) handling

const actions = document.querySelectorAll(".action");
for(let i = 0 ; i < actions.length; i++){
    actions[i].addEventListener("click", (addaction) =>{
        if(actions[i].value == "+"){
            localStorage.setItem("numberA", parseFloat(result.innerHTML));
            memory.innerHTML = result.innerHTML + "+"; 
            result.innerHTML = "0";
            }else if(actions[i].value == "-"){
                localStorage.setItem("numberA", parseFloat(result.innerHTML));
                memory.innerHTML = result.innerHTML + "-"; 
                result.innerHTML = "0";
            } else if (actions[i].value == "*"){
                localStorage.setItem("numberA", parseFloat(result.innerHTML));
                memory.innerHTML = result.innerHTML + "*"; 
                result.innerHTML = "0";
            } else if(actions[i].value == "/"){
                localStorage.setItem("numberA", parseFloat(result.innerHTML));
                memory.innerHTML = result.innerHTML + "/"; 
                result.innerHTML = "0";
                console.log("test");
            }else if(actions[i].value == "AC"){
                result.innerHTML = "0";
                memory.innerHTML = "";
            }
            else if (actions[i].value == "="){

            let numberA = localStorage.getItem("numberA");
            let numberB = parseFloat(result.innerHTML);
            console.log(numberA);
            console.log(numberB);
            memory.innerHTML += result.innerHTML;
            var memory2 = memory.innerHTML
            for (let i = 0 ;i < memory2.length; i++){
                if(memory2[i] == "+"){
                    var equal = parseFloat(numberA) + parseFloat(numberB);
                }else if (memory2[i] == "-"){
                    var equal = parseFloat(numberA) - parseFloat(numberB);
                }else if (memory2[i] == "*"){
                    var equal = parseFloat(numberA) * parseFloat(numberB);
                } else if(memory2[i] == "/"){
                    numberA = parseFloat(numberA);
                    numberB = parseFloat(numberB)
                    console.log(numberA/numberB);
                    var equal = numberA / numberB;
                    
                } if(!isNaN(equal)){
                result.innerHTML = equal;
                } else {
                    result.innerHTML = "Error, press AC and try again";
                }
            }       

           } else if(actions[i].value == "."){
               result.innerHTML += ".";
           }
        });

    }







    
    


