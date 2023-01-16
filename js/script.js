
var last = null;



function calculate(type, value) {

    if (last === '=') 
        document.getElementById('result').value = '';
    



    if (type === 'action') {


        if (value === 'c')
            document.getElementById('result').value = '';


        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.')
            document.getElementById('result').value += value;

        if (value === '=')
            document.getElementById('result').value = eval(document.getElementById('result').value);





    } else if (type === 'value') {

        document.getElementById('result').value += value;

    }
    last = value;
}