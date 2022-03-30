///////Upcoming events
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject["towns"].filter((town) => {
      if (town.name === "Fish Haven") {
        return town;
      }
    });
    for (let i = 0; i < towns.length; i++) {
      let events = document.createElement("section");

      let headline = document.createElement("h2");
      headline.textContent = "Upcoming Events in the city";
      events.appendChild(headline);

      let event = document.createElement("h4");
      event.textContent = towns[i].events[0];
      events.appendChild(event);

      let event2 = document.createElement("h4");
      event2.textContent = towns[i].events[1];
      events.appendChild(event2);

      let event3 = document.createElement("h4");
      event3.textContent = towns[i].events[2];
      events.appendChild(event3);

      let event4 = document.createElement("h4");
      event4.textContent = towns[i].events[3];
      events.appendChild(event4);

      document.querySelector("div.upcomingevents3").appendChild(events);
    }
  });