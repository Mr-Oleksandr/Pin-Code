window.addEventListener('DOMContentLoaded', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, ''];

    const numbersSection = document.querySelector('.left-section');
    const inputValue = document.querySelector('.menu-content');
    const btnCancel = document.querySelector('[data-cancel]');
    const btnClear = document.querySelector('[data-clear]');
    const btnEnter = document.querySelector('[data-enter]');
    const btnShowPin = document.querySelector('[data-show]')
    
//functions
    const render = () => {
        numbersSection.innerHTML = ''

        numbers.map((number) => {
            numbersSection.innerHTML += `
            <button class="numbers">${number}</button>
            `
        });

        document.querySelectorAll('.numbers').forEach((item) => {
            item.addEventListener('click', (e) => {
                inputValue.value += e.target.textContent
                randomShuffleArray(numbers)
            });
        });
    };
    render();

    function randomShuffleArray (arr) {
        arr.sort((a, b) => {
            return Math.random() - 0.5
        });

        render()
    } 

    
//listeners
    btnCancel.addEventListener('click', () => {
        const result = inputValue.value;
        inputValue.value = result.slice(0, -1)
    });

    btnClear.addEventListener('click', () => {
        inputValue.value = ''
    });

    btnEnter.addEventListener('click', () => {
        if(inputValue.value !== ''){
            alert(inputValue.value)
        }
    });

    btnShowPin.addEventListener('click', () => {
        if(inputValue.type === 'text'){
            inputValue.type = 'password'
        }else{
            inputValue.type = 'text'
        }
    });
});