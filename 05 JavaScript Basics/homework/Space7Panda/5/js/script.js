"use strict";
function sum(a, b) {

	if (typeof a !== "string") {
		throw {"Error":"'a' is not a string type"};
	}

	if (typeof b !== "string") {
		throw {"Error":"'b' is not a string type"};
	}

	if (a == "") {
		a = "0";
	}

	if (b == "") {
		b = "0";
	}
	
	if (!a.match(/^\d+$/)) {
		throw {"Error":"'a' is not a number"};
	} 

	if (!b.match(/^\d+$/)) {
		throw {"Error":"'b' is not a number"};
	} 

	let addon = 0;
	let result = "";
	let maxLength = Math.max(a.length, b.length);

	for (let i = 1; i <= maxLength; i++) {

		let aNum = (i <= a.length) ? parseInt(a[a.length - i], 10) : 0;
		let bNum = (i <= b.length) ? parseInt(b[b.length - i], 10) : 0;
		let sum = aNum + bNum + addon;

		if (sum > 9) {
			addon = 1;
			sum -= 10;
		} else {
			addon = 0;
		}

		result = sum + result;
	}

	if (addon > 0) {
		result = addon + result;
	}

	return result;
};