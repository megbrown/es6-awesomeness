const name = "Megan Brown";

let cheerName = name.toUpperCase();

let nameArr = [...cheerName];

let cheer = (nameArr) => {
for( let [index, elem] of nameArr) {
	if (index === "A" || index === "E" || index === "O") {
		console.log(`Give me an ${index}!`);
	}
	else if (index === " ") {
		console.log("");
	}
	else {
		console.log(`Give me a ${index}!`);
	}
}
console.log("What does that spell?");
console.log(`${name}!`)
}

cheer(nameArr);











