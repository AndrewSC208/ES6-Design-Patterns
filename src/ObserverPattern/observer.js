var model = {
	
};

Object.observe(model, (changes) => {
	// async callback
	changes.forEach((changes) => {
		console.log(change.type, change.name, change.oldValue);
	})
})