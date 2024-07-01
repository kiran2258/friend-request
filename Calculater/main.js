const display = document.getElementById('display');

function appendToDisplay(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = '';
}

function calculate()
{
    if (display.value === "")
        {
            alert("please enter any kye")
            return;
        }
        let result = eval(display.value);
        display.value=result
}
