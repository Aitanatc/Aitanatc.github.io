const hambutton = document.querySelector('.menu');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive');}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive');};

///
fetch("https://run.mocky.io/v3/15a301bb-884a-4c85-9827-a867e1ed8b24")
    fetch(myURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function (err){
        console.log(err);
    });

    var mainContainer = document.querySelector(".rentals");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].reservation;
        mainContainer.appendChild(div);
    }