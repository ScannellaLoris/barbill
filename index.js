const main = document.querySelector("main");

let tablesArray = [
  { tableNumber: 1, order: [], bill: 0 },
  { tableNumber: 2, order: [], bill: 0 },
  { tableNumber: 3, order: [], bill: 0 },
  { tableNumber: 4, order: [], bill: 0 },
  { tableNumber: 5, order: [], bill: 0 },
  { tableNumber: 6, order: [], bill: 0 },
  { tableNumber: 7, order: [], bill: 0 },
  { tableNumber: 8, order: [], bill: 0 },
  { tableNumber: 9, order: [], bill: 0 },
  { tableNumber: 10, order: [], bill: 0 },
];

const beersArray = [
  { name: "Blonde", price: 5 },
  { name: "Chouffe", price: 6 },
  { name: "1664", price: 4 },
];

const winesArray = [
  { name: "Rouge", price: 26 },
  { name: "Rosé", price: 20 },
  { name: "Blanc", price: 23 },
];

const cocktailsArray = [
  { name: "Whisky Coca", price: 6 },
  { name: "Vodka Jus", price: 6 },
  { name: "Ricard", price: 3 },
];

const page = {
  lobby: function () {
    document.querySelector("h1").innerHTML = "BarBill";

    const liste = document.createElement("ul");

    const nav = document.querySelector(".menu");

    tablesArray.forEach((table) => {
      const liTable = document.createElement("li");
      liTable.classList = "table";
      liTable.id = `table${table.tableNumber}`;

      liTable.addEventListener("click", () => {
        nav.classList.toggle("nav_open");
      });

      const header = document.createElement("div");
      header.classList = "card-header";
      header.innerText = `Table n. ${table.tableNumber}`;

      const footer = document.createElement("div");
      footer.classList = "card-footer";
      footer.innerText = `Note Totale = ${table.bill} €`;

      liste.appendChild(liTable);
      liTable.appendChild(header);
      liTable.appendChild(footer);
    });

    beersArray.forEach((beer) => {
      const liBeer = document.createElement("span");
      liBeer.classList = "beer";
      liBeer.id = `${beer.name}`;
      liBeer.innerText = `${beer.name}  ${beer.price}€`;

      beers.appendChild(liBeer);
    });

    winesArray.forEach((wine) => {
      const liWine = document.createElement("span");
      liWine.classList = "wine";
      liWine.id = `${wine.name}`;
      liWine.innerText = `${wine.name}  ${wine.price}€  `;

      wines.appendChild(liWine);
    });

    cocktailsArray.forEach((cocktail) => {
      const liCocktails = document.createElement("span");
      liCocktails.classList = "wine";
      liCocktails.id = `${cocktail.name}`;
      liCocktails.innerText = `${cocktail.name}  ${cocktail.price}€`;

      cocktails.appendChild(liCocktails);
    });

    main.appendChild(liste);
  },
};

page.lobby();
