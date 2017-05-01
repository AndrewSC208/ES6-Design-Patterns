/*
* module pattern
*/
const shoppingList = new WeakMap();

class AbstractDataType {
	constructor() {
		shoppingList.set(this, ['coffe', 'chicken', 'pizza'])
	}

	getShoppingList() {
		return shoppingList.get(this);
	}

	addItem(item) {
		shoppingList.get(this).push(item);
	}
}

export let data = new AbstractDataType();

console.group('Module Pattern');
console.log(data.getShoppingList());
console.groupEnd();