document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var fade = document.getElementById('fade');
    var mostrarPlayer1 = document.getElementById('mostrarPlayer1');
    var closeBtn = document.getElementById('close-modal');
    
    mostrarPlayer1.addEventListener('click', function () {
        modal.classList.remove('hide');
        fade.classList.remove('hide');
    });
    
    closeBtn.addEventListener('click', function () {
        modal.classList.add('hide');
        fade.classList.add('hide');
    });
    fade.addEventListener('click', function () {
        modal.classList.add('hide');
        fade.classList.add('hide');
    });
 });