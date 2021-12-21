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
  { name: "Blonde", qty: ["25cl", "50cl"], price: [5, 8] },
  { name: "Chouffe", qty: ["25cl", "50cl"], price: [6, 10] },
  { name: "1664", qty: "33cl", price: 4 },
];

const vinesArray = [
  { name: "Rouge", qty: ["Verre", "Bouteille"], price: [6, 26] },
  { name: "Rosé", qty: ["Verre", "Bouteille"], price: [5, 20] },
  { name: "Blanc", qty: ["Verre", "Bouteille"], price: [6, 23] },
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

    tablesArray.forEach((table) => {
      const liTable = document.createElement("li");
      liTable.classList = "table";
      liTable.id = `table${table.tableNumber}`;

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

    main.appendChild(liste);

    const tables = document.querySelectorAll(".table");
    const nav = document.querySelector(".menu");

    tables.forEach((tableBtn) => {
      tableBtn.addEventListener("click", () => {
        nav.classList.toggle("nav_open");
      });
    });
  },
};

page.lobby();
