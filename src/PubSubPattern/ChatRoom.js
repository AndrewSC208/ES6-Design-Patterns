import {PubSub} from './PubSubPattern';

class ChatRoom {
	constructor() {
		this.pubsub = new PubSub();
		this.pubsub.subscribe('message', this.emitMessage, this);
	}

	emitMessage(msg) {
		console.group('PubSub')
		console.log('User send message:', msg);
		console.groupEnd();
	}

	sendMessage() {
		this.pubsub.publish('message', 'Hey, how are you?');
	}

}

export let room = new ChatRoom();
room.sendMessage();