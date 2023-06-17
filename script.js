const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];

  const searchTerm = str.toLowerCase(); 

  for(let i = 0; i < fruit.length; i++) {
    const lowercaseFruit = fruit[i].toLowerCase();

    if(lowercaseFruit.includes(searchTerm)) {
        results.push(fruit[i]);
    }
  }
  // TODO

  return results;
}

function searchHandler(e) {
  // TODO
  const inputVal = e.target.value.trim();
  if (inputVal !== "") {
    const results = search(inputVal);
    showSuggestions(results, inputVal);
  } else {
    suggestions.innerHTML = "";
  }
}

function showSuggestions(results, inputVal) {
    const dropdownHTML = results
    .map((result => `<li class="suggestion">${result}</li>`))
    .join('');
    suggestions.innerHTML = dropdownHTML;
    const suggestionItems = suggestions.querySelectorAll('.suggestions');

    suggestionItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.classList.add('highlighted');
        });

        item.addEventListener('mouseout', () => {
            item.classList.remove('highlighted');
        });
    });
  // TODO
  
}

function useSuggestion(e) {
    const selectedSuggestion = e.target.textContent;
    input.value = selectedSuggestion;
    suggestions.innerHTML = '';
  // TODO
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
