const openMenu = () => {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        document.querySelector("header .material-icons").innerHTML= "close"
    }
    else{
        document.querySelector("header .material-icons").innerHTML="menu"
    }
}
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});