/*
	Publish/Subscript Pattern
*/
export class PubSub {
	constructor() {
		this.handlers = [];
	}

	subscribe(event, handler, context) {
		if(typeof context === 'undefined') {
			constext = handler;
		}

		this.handlers.push({ 
				event: event, 
				handler: handler.bind(context)
			}
		);

	}

	publish(event, args) {
		this.handlers.forEach(topic => {
			if(topic.event === event) {
				topic.handler(args);
			}
		})
	}
}

