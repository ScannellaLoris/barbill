const main = document.querySelector('main');

let tablesArray = [
  { tableNumber: 1, order: [], bill: 0, selected: false },
  { tableNumber: 2, order: [], bill: 0, selected: false },
  { tableNumber: 3, order: [], bill: 0, selected: false },
  { tableNumber: 4, order: [], bill: 0, selected: false },
  { tableNumber: 5, order: [], bill: 0, selected: false },
  { tableNumber: 6, order: [], bill: 0, selected: false },
  { tableNumber: 7, order: [], bill: 0, selected: false },
  { tableNumber: 8, order: [], bill: 0, selected: false },
  { tableNumber: 9, order: [], bill: 0, selected: false },
  { tableNumber: 10, order: [], bill: 0, selected: false },
];

let tableSelected;

const beersArray = [
  { name: 'Blonde', price: 5 },
  { name: 'Chouffe', price: 6 },
  { name: '1664', price: 4 },
];

const winesArray = [
  { name: 'Rouge', price: 26 },
  { name: 'Rosé', price: 20 },
  { name: 'Blanc', price: 23 },
];

const cocktailsArray = [
  { name: 'Whisky Coca', price: 6 },
  { name: 'Vodka Jus', price: 6 },
  { name: 'Ricard', price: 3 },
];

const page = {
  lobby: function () {
    document.querySelector('h1').innerHTML = 'BarBill';

    const liste = document.createElement('ul');

    const nav = document.querySelector('.menu');

    handleEventAddDrink = function () {
      nav.querySelectorAll('span').forEach((drink) => {
        drink.addEventListener('click', (e) => {
          let drinkSelected = e.target.id;

          const table = tablesArray.find(
            (table) =>
              table.tableNumber ===
              parseInt(tableSelected.charAt(tableSelected.length - 1), 10)
          );
          table.order.push(drinkSelected);

          const orderNode = document.getElementById(`${tableSelected}_order`);

          const newDrinkNode = document.createElement('p');
          newDrinkNode.innerHTML = drinkSelected;

          orderNode.appendChild(newDrinkNode);
        });
      });
    };

    tablesArray.forEach((table) => {
      const liTable = document.createElement('li');
      liTable.classList = 'table';
      liTable.id = `table${table.tableNumber}`;

      handleEventSelectTable = function () {
        liTable.addEventListener('click', (e) => {
          if (tableSelected?.length > 0) {
            document
              .getElementById(tableSelected)
              .classList.toggle('table_selected');
            tableSelected = '';
          }

          tableSelected = e.target.id.split('_')[0];
          document
            .getElementById(tableSelected)
            .classList.toggle('table_selected');

          nav.classList.add('nav_open');
        });
      };
      handleEventSelectTable();

      /*liTable.addEventListener("click", () => {
        if (table.selected == false) {
          table.selected = true;
        } else {
          table.selected = false;
        }
        //console.log(tablesArray);
        if (table.selected == true) {
          liTable.classList.add("table_selected");
          
        } else {
          liTable.classList.remove("table_selected");
          nav.classList.remove("nav_open");
        }
      });*/

      const header = document.createElement('div');
      header.classList = 'card-header';
      header.innerText = `Table n. ${table.tableNumber}`;
      header.id = `table${table.tableNumber}_header`;

      const order = document.createElement('div');
      order.classList = 'card-order';
      order.id = `table${table.tableNumber}_order`;

      const footer = document.createElement('div');
      footer.classList = 'card-footer';
      footer.innerText = `Note Totale = ${table.bill} €`;
      footer.id = `table${table.tableNumber}_footer`;

      liste.appendChild(liTable);
      liTable.appendChild(header);
      liTable.appendChild(order);
      liTable.appendChild(footer);
    });

    beersArray.forEach((beer) => {
      const liBeer = document.createElement('span');
      liBeer.classList = 'beer';
      liBeer.id = `${beer.name}`;
      liBeer.innerText = `${beer.name} : ${beer.price}€`;

      beers.appendChild(liBeer);
    });

    winesArray.forEach((wine) => {
      const liWine = document.createElement('span');
      liWine.classList = 'wine';
      liWine.id = `${wine.name}`;
      liWine.innerText = `${wine.name} : ${wine.price}€  `;

      wines.appendChild(liWine);
    });

    cocktailsArray.forEach((cocktail) => {
      const liCocktails = document.createElement('span');
      liCocktails.classList = 'cocktail';
      liCocktails.id = `${cocktail.name}`;
      liCocktails.innerText = `${cocktail.name} : ${cocktail.price}€`;

      cocktails.appendChild(liCocktails);
    });

    main.appendChild(liste);
    handleEventAddDrink();
  },
};

page.lobby();
