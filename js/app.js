

// var i = prompt('Please enter a number'); 

// function checkInput() {
//     if (isNaN(i)) {
//         alert('You must enter a number!');
//         return false;
//     }
// }
// checkInput();



var output =100;

for (i=1; i<= 100; i++){

    if (i % 3 === 0) {
        
        if (i % 5 === 0){

            document.write("FizzBuzz<br />");
        } else {

            document.write('Fizz<br />');

        }

    }

    else if (i % 5 === 0){

        document.write('Buzz<br />');
    }

    else {
        document.write(i + "<br/>");
    }
}




         