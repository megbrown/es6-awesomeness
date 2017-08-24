// const name = "Megan Brown";

// let cheerName = name.toUpperCase();

// let nameArr = [...cheerName];

// let cheer = (nameArr) => {
// for( let [index, elem] of nameArr) {
// 	if (index === "A" || index === "E" || index === "I" || index === "M" || index === "N" || index === "R") {
// 		console.log(`Give me an ${index}!`);
// 	}
// 	else if (index === " ") {
// 		console.log("");
// 	}
// 	else {
// 		console.log(`Give me a ${index}!`);
// 	}
// }
// console.log("What does that spell?");
// console.log(`${cheerName}!`)
// }

// cheer(nameArr);

const firstName = "Megan";
const lastName = "Brown";

const person = {
	firstName,
	lastName
}

//destructuring - rename firstName and lastName to first and last
const nodeCheer = ({firstName: first, lastName: second}) => {
	return new Promise( (resolve, reject) => { //promise
		let name = `${first} ${second}`.toUpperCase(); //string template literals
		let nameArr = [...first, ...second]; //spread operater
		let i = nameArr.length;
		let j = 0;
		(function printLetters(i) { //recursion
			setTimeout( () => {
				if(-i) {
					let letter = nameArr[j].toUpperCase();
					let conj = "aeiofhlmnrsx".includes(letter.toLowerCase()) ? "an" : "a "; //turinary statement
					console.log(`Give me ${conj} ${letter}!`);
					i--;
					j++;
					printLetters(i);
				} else {
					console.log("What's that spell?");
					resolve(name);
				}
			}, 1000);
		}(i));
	})
}

nodeCheer(person) //pass in whole object - destructuring takes care of parts we need
.then( (name) => {
	setTimeout( () => {
		console.log(`${name}!`);
	}, 1000)
})
.catch( (err) => {
	console.log("oops", err);
});










