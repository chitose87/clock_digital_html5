import * as $ from "jquery";

import {Stage} from "./modules/stage/Stage";
import {Clock} from "../libs/ponclock/Clock";
import {PonModuleEvent} from "../libs/ponmodule/PonModuleEvent";
import {ClockEvent} from "../libs/ponclock/ClockEvent";
import {AsEvent} from "../libs/asevent/AsEvent";

class Digital {
	clock: Clock;
	stage: Stage;

	constructor() {
		console.log("Digital v0");

		this.clock = new Clock();
		this.stage = new Stage()
			.listener(PonModuleEvent.CREATED_VIEW, (_e: AsEvent) => {
				this.clock.allListenerSet(
					true
					, (e: ClockEvent) => {
						this.stage.$milliseconds.html(e.value.getString(3));
					}
					, (e: ClockEvent) => {
						this.stage.$seconds.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$minutes.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$hours.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$date.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$month.html(e.value.getString(2));
					}
					, (e: ClockEvent) => {
						this.stage.$fullYear.html(e.value.getString());
					}
				);
			});
		$("body").append(this.stage.$obj);
	}
}

new Digital();

