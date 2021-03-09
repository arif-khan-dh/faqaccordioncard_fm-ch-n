const arraySection = document.getElementsByClassName('section');

for (let i = 0; i < arraySection.length; i++){
    arraySection[i].addEventListener('click', (event) => {
        expand(arraySection[i], 2);
    }, false);

    arraySection[i].addEventListener('keydown' , (e) => {
        switch (e.key) {
            case 'ArrowDown':
                expand(arraySection[i], 1);
                break;
            case 'ArrowUp':
                expand(arraySection[i], 0);
                break;
            case 'Enter':
                expand(arraySection[i], 2);
                break;
        }        
    });
}

function expand (section, action) {
    const answer = section.querySelector('.answer');
    // const arrow = section.querySelector('.arrow');
    if (action === 0) {
        section.classList.remove('expand');
        // arrow.classList.remove('arrow-up');
    } else if (action === 1) {
        section.classList.add('expand');
        // arrow.classList.add('arrow-up');
    } else {
        section.classList.toggle('expand');
        // arrow.classList.toggle('arrow-up');
    }

    if (answer.style.maxHeight && action !== 1){
        answer.style.maxHeight = null;
    } else if (action !== 0) {                
        answer.style.maxHeight = answer.scrollHeight + 'px';            
    }
}