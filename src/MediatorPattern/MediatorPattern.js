/*
 * Publish/Subscribe Pattern
 */
class PubSub {
  constructor() {
    this.handlers = [];
  }

  subscribe(event, handler, context) {
    if (typeof context === 'undefined') { context = handler; }
    this.handlers.push({ event: event, handler: handler.bind(context) });
  }

  publish(event, args) {
    this.handlers.forEach(topic => {
      if (topic.event === event) {
        topic.handler(args)
      }
    })
  }
}
/*
	Mediator Pattern
*/
class Mediator extends PubSub {
	constructor(opts) {
		super();
	}

	attachToObject(obj) {
		obj.handlers = [];
		obj.publish = this.publish;
		obj.subscribe = this.subscribe;
	}
}

let mediator = new Mediator();

let myRoom = {
	name: 'myRoom'
};

mediator.attachToObject(myRoom);

myRoom.subscribe('connection', () => {
  console.group('Mediator');
  console.log(`user connected to ${myRoom.name}!`);
  console.groupEnd();
}, myRoom);

myRoom.publish('connection');

export {myRoom};