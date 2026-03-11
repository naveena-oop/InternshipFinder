const internships = [
"Google Software Internship",
"Microsoft Explore Internship",
"Amazon SDE Internship",
"AI Research Internship",
"Data Analyst Internship"
];

function searchInternships(){

let query = document.getElementById("search").value.toLowerCase();

let results = internships.filter(i =>
i.toLowerCase().includes(query)
);

let list = document.getElementById("results");

list.innerHTML = "";

results.forEach(r => {

let li = document.createElement("li");
li.textContent = r;

list.appendChild(li);

});

}