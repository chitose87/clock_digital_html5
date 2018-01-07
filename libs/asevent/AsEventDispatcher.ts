/**
 *
 */
import {AsEvent} from "./AsEvent";

export class AsEventDispatcher {
	hasListener: { [key: string]: any[] } = {};

	listener(type: string, handler: (AsEvent: any) => void): AsEventDispatcher | any {
		if (!this.hasListener[type]) this.hasListener[type] = [];
		this.hasListener[type].push(handler);
		return this;
	}

	onceListener(type: string, handler: (AsEvent: any) => void): AsEventDispatcher | any {
		let func = (event: AsEvent) => {
			this.removeListener(type, func);
			handler(event);
		};
		return this.listener(type, func);
	}

	removeListener(type: string, handler?: (AsEvent: any) => void): AsEventDispatcher | any {
		let handlers = this.hasListener[type];
		if (handlers) {
			for (let i = handlers.length - 1; i >= 0; i--) {
				if (handlers[i] == handler) {
					handlers.splice(i, 1);
				}
			}
		} else {
			handlers = [];
		}
		this.hasListener[type] = handlers;
		return this;
	}

	dispatchEvent(event: AsEvent): AsEventDispatcher | any {
		if (!this.hasListener[event.type]) {
			return this;
		}
		if (event.type in this.hasListener == false) return this;
		let handlers = this.hasListener[event.type];

		event.current = this;
		for (let handler of handlers) {
			handler(event);
		}
		return this;
	}
}
