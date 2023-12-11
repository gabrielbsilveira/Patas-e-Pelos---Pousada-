document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;

    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campo.');
    } else {
        alert('Obrigado por se inscrever na nossa newsletter! Em breve você recebera nossas novidades por email.');
    }
});






function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block' || menu.style.display === '') ? 'none' : 'block';
}
