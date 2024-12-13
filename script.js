// Adiciona funcionalidade ao site

// Função para exibir mensagem ao clicar no botão "Comprar"
const botoesComprar = document.querySelectorAll('button');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', () => {
        alert('Obrigado por adquirir nosso curso!');
    });
});

// Função para rolar até uma seção específica
const linksMenu = document.querySelectorAll('a[href^="#"]');

linksMenu.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault(); // Impede o comportamento padrão do link
        const destino = document.querySelector(link.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

// Adiciona efeito de transição nas imagens de produtos ao passar o mouse
const imagensProdutos = document.querySelectorAll('.produto img');

imagensProdutos.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.style.transform = 'scale(1.1)';
        imagem.style.transition = 'transform 0.3s ease';
    });

    imagem.addEventListener('mouseout', () => {
        imagem.style.transform = 'scale(1)';
    });
});

// Validação de formulário (se houver formulário no site)
const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        const email = formulario.querySelector('input[type="email"]');
        if (email && email.value === '') {
            alert('Por favor, insira seu email antes de enviar.');
        } else {
            alert('Formulário enviado com sucesso!');
        }
    });
}
