const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'].filter((town) => {
        if(town.name === 'Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs') {
            return town;
        }
    });


    for (let i = 0; i < towns.length; i++) {

      // Create section 
      let card = document.createElement('section');
      // Add card to class "cards" div element
      document.querySelector("div.cards").appendChild(card);
      
      let info = document.createElement('div')
      document.querySelector('section').appendChild(info)
      // City names
      let h2 = document.createElement('h2');
      h2.textContent = towns[i].name;
      card.appendChild(h2);
      // Motto
      let h3 = document.createElement("h3");
      h3.textContent = towns[i].motto;
      card.appendChild(h3);
      // Year Founded
      let h4 = document.createElement("h4");
      h4.textContent = "Year Founded: " + towns[i].yearFounded;
      card.appendChild(h4);
      // Population
      let h5 = document.createElement("h5");
      h5.textContent = "Population: " + towns[i].currentPopulation;
      card.appendChild(h5);
      // Annual Rain Fall
      let h6 = document.createElement("h6");
      h6.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
      card.appendChild(h6);
      // images   
      let image = document.createElement("img");
      image.setAttribute("src", "./images/images/img" + (i + 1) + ".png")
      image.className = 'townimage'
      card.appendChild(image);

      let imgLabel = document.querySelector("h2");
      imgLabel.setAttribute('class', 'img1');
    }   
  });