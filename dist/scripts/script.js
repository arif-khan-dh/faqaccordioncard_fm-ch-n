const arraySection = document.getElementsByClassName('section');

for (let i = 0; i < arraySection.length; i++){
    arraySection[i].addEventListener('click', (event) => {
        arraySection[i].classList.toggle('expand');
        const answer = arraySection[i].querySelector('.answer');
        const arrow = arraySection[i].querySelector('.arrow');
        arrow.classList.toggle('arrow-up');
        if (answer.style.maxHeight){
            answer.style.maxHeight = null;
        } else {                
            answer.style.maxHeight = answer.scrollHeight + 'px';            
        }
    }, false);

}