 //Adding variables to store our data
const raphael = document.querySelector('.me')
const preview = document.querySelector('.name')
const review = document.querySelector('.amt')

 //Arrow function

function ayokunle(some_data){
    const optName = some_data.replace(' ', '')
    const price = optName.length * 5;
    console.log('customername', some_data);
    console.log('cost', price);
    preview.textContent = some_data;
    review.textContent = '$'+ price;
        
    }

    akorede.addEventListener('input', function(e){
        ayokunle(e.target.value)
    })
        
       