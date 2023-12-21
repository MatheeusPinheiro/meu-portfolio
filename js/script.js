
let trilho = document.querySelector('.trilho')
let body = document.querySelector('body')
let menu = document.querySelector('.menu')


document.addEventListener('DOMContentLoaded', ()=> {
    // Verifica se a preferência do usuário está armazenada no localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Atualiza o estado da página conforme a preferência do usuário
    if (isDarkMode) {
        document.body.classList.add('dark');
        trilho.classList.add('dark');
        menu.classList.add('dark');
    }

    trilho.addEventListener('click', () => {
        // Alterna a classe 'dark' nos elementos relevantes
        trilho.classList.toggle('dark');
        body.classList.toggle('dark');
        menu.classList.toggle('dark');

        // Atualiza a preferência do usuário no localStorage
        localStorage.setItem('darkMode', body.classList.contains('dark'));
    });
});


let pages = document.querySelectorAll('.projects .barra nav ul li')
let area_pages = document.querySelectorAll('.projects-area .area')

pages.forEach((item, index) => {
    item.addEventListener('click', function() {
        // Remove a classe 'activate' de todos os itens de menu
        pages.forEach((otherItem) => {
            otherItem.classList.remove('activate');
        });

        // Adiciona a classe 'activate' ao item de menu clicado
        item.classList.add('activate');

        // Remove a classe 'active' de todas as áreas de conteúdo
        area_pages.forEach((otherItem) => {
            otherItem.classList.remove('active');
        });

        // Adiciona a classe 'active' à área de conteúdo correspondente ao item de menu clicado
        area_pages[index].classList.add('active');

        // Faça algo com o item clicado, por exemplo, exiba o texto do item no console
        console.log('Clicou no item:', item.textContent);
    });
});



projects.map((item, index)=>{

    let cardProject = document.querySelector('.models .card').cloneNode(true)

    document.querySelector('.projects .projects-area #automation').append(cardProject)

    cardProject.querySelector('.card img').src = item.image
    cardProject.querySelector('.card h3').innerHTML = item.name


});



let btn_hambuguer = document.querySelector('.menu-hamburgue i')

btn_hambuguer.addEventListener('click', ()=>{
    alert('Olá')
})


let close_modal = document.querySelector('.close-modal i')

close_modal.addEventListener('click', ()=>{
    document.querySelector('.modal').style.display = 'none'
})