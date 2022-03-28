
var today = new Date();
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;

document.getElementById('date').textContent = fulldate;

document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))

function toggleMenu() {
	document.getElementsByClassName('navigation')[0].classList.toggle("responsive");
}

if (dayName == 'Tuesday') {
	var banner = document.createElement('div');
	banner.innerHTML = 'Pancakes in the Park! 9:00 a.m. Every Saturday at the City Park.';

    document.body.insertBefore(banner,document.body.childNodes[0]).style.display = "block";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.fontSize = "3em";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.textAlign = "center";
	document.body.insertBefore(banner,document.body.childNodes[0]).style.backgroundColor = "blue";
    document.body.insertBefore(banner,document.body.childNodes[0]).style.color = "white";

}