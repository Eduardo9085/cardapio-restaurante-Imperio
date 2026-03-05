const menu = [
  { id: 1, title: "Panqueca Doce", category: "Café da Manhã", price: 15.99, desc: "Panquecas fofas com calda de maple." },
  { id: 2, title: "Hambúrguer Duplo", category: "Almoço", price: 25.00, desc: "Dois blends de carne e queijo cheddar." },
  { id: 3, title: "Macarrão", category: "Almoço", price: 30.00, desc: "Molho de tomate/branco." },
  { id: 4, title: "Strogonoff", category: "Almoço", price: 30.00, desc: "Arroz, Fritas/batata palha e Salada." },
  { id: 5, title: "Frango",  category: "Almoço",  price: 25.00, desc: "Arroz, Fritas/batata." },
  { id: 6, title: "Milkshake Oreo", category: "Sobremesas", price: 18.50, desc: "O clássico batido com sorvete premium." },
  { id: 7, title: "Petit Gâteau", category: "Sobremesas", price: 32.00, desc: "O clássico com morangos e uma bola de sorvete artesanal." },
  { id: 8, title: "Ovos Mexidos", category: "Café da Manhã", price: 12.00, desc: "Acompanha torradas e bacon crocante." },
  { id: 9, title: "Pão de Queijo", category: "Café da Manhã", price: 8.00, desc: "Acompanha chocolate quente." },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Carregar itens iniciais
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuButtons();
});

// Função para renderizar os pratos
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">R$ ${item.price.toFixed(2)}</h4>
          </header>
          <p class="item-text">${item.desc}</p>
        </div>
      </article>`;
  }).join("");
  sectionCenter.innerHTML = displayMenu;
}

// Função para criar botões de categorias dinamicamente
function displayMenuButtons() {
  const categories = ["todos", ...new Set(menu.map(item => item.category))];
  
  btnContainer.innerHTML = categories.map(category => {
    return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
  }).join("");

  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(item => item.category === category);
      category === "todos" ? displayMenuItems(menu) : displayMenuItems(menuCategory);
    });
  });
}