const menu = [
  { id: 1, title: "Panqueca Doce", category: "Café da Manhã", price: 15.99, desc: "Panquecas fofas com calda de maple." },
  { id: 2, title: "Hambúrguer Duplo", category: "Almoço", price: 25.99, desc: "Dois blends de carne e queijo cheddar." },
  { id: 3, title: "Macarrão", category: "Almoço", price: 30.99, desc: "Molho de tomate/branco." },
  { id: 4, title: "Strogonoff", category: "Almoço", price: 30.99, desc: "Arroz, Fritas/batata palha e Salada." },
  { id: 5, title: "Picanha",  category: "Almoço",  price: 25.50, desc: "Arroz, Fritas/batata, 180g de picanha, feijão e salada." },
  { id: 6, title: "Milkshake Oreo", category: "Sobremesas", price: 18.50, desc: "O clássico batido com sorvete premium." },
  { id: 7, title: "Petit Gâteau", category: "Sobremesas", price: 32.99, desc: "O clássico com morangos e uma bola de sorvete artesanal." },
  { id: 8, title: "Ovos Mexidos", category: "Café da Manhã", price: 12.50, desc: "Acompanha torradas e bacon crocante." },
  { id: 9, title: "Pão de Queijo", category: "Café da Manhã", price: 8.99, desc: "Acompanha chocolate quente." },
  { id: 10, title: "Pudim", category: "Sobremesas", price: 10.50, desc: "O clássico com morangos e uma bola de sorvete artesanal." },
  { id: 11, title: "Balde", category: "Bedidas Alcólicas", price: 25.99, desc: "Balde de gelo térmico com 4 cervejas de sua escolha." },
  { id: 12, title: "Heineken", category: "Bedidas Alcólicas", price: 8.99, desc: "Por unidade. " },
  { id: 13, title: "Chopp", category: "Bedidas Alcólicas", price: 169.99, desc: "Torre de Chopp com 3,5L de sua escolha. " },
  { id: 14, title: "Ipa", category: "Bedidas Alcólicas", price: 17.99, desc: "Por unidade." },
  { id: 15, title: "Batata Frita", category: "Porções", price: 14.99, desc: "Podendo ser alterada com cheddar e bacon. " },
  { id: 16, title: "Torresmo", category: "Porções", price: 9.99, desc: "" },
  { id: 17, title: "Calabresa Acebolada", category: "Porções", price: 12.00, desc: "Calabresa com cebola refogada. " },
  { id: 18, title: "Amendoim", category: "Porções", price: 5.00, desc: "Amendoim japones sem casca. " },
  { id: 19, title: "Batata Rústica", category: "Porções", price: 12.00, desc: "Batata rústica com páprica picante. " },
  { id: 20, title: "Café expresso", category: "Café da Manhã", price: 5.00, desc: "Café expresso ou capuccino. " },
  { id: 21, title: "Porção de pão c/ vinagrete", category: "Porções", price: 18.00, desc: "Fatias de pão francês c/ porções separadas de manteiga e vinagrete. " },
  { id: 22, title: "Pão na Chapa", category: "Café da Manhã", price: 7.00, desc: "Pão francês com manteiga na chapa. " },
  { id: 23, title: "Misto Quente", category: "Café da Manhã", price: 9.50, desc: "Pão francês com presunto e queijo.  " },
  { id: 24, title: "Frango à Parmegiana", category: "Almoço", price: 20.50, desc: "Arroz, fritas, frango à parmegiana e feijão.  " },
  { id: 25, title: "Nhoque", category: "Almoço", price: 30.50, desc: "Nhoque acompanhado com molho de tomate/branco.  " },
  { id: 26, title: "Whisky", category: "Bedidas Alcólicas", price: 34.99, desc: "Whisky de sua preferência." },
  { id: 27, title: "Cerveja Long Neck", category: "Bedidas Alcólicas", price: 14.99, desc: "Corona, Império, Brahama, Budweiser. " },
  { id: 28, title: "Refrigerante", category: "Bedidas", price: 7.99, desc: "Guaraná, Coca Cola, H2O, Sprite, Schweppes e Fanta Larranja/Uva." },
  { id: 29, title: "Água c/s gás", category: "Bedidas", price: 4.50, desc: "Com/sem gelo, limão espremido (preferência do cliente). " },
  { id: 30, title: "Suco Natural", category: "Bedidas", price: 9.99, desc: "Sucos: Uva, Laranja, Limonada e Morango, Abacaxi c/s Hortelã. " },
  { id: 31, title: "Energético", category: "Bedidas", price: 7.99, desc: "Opções: Red Bull de sua preferência. " },

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