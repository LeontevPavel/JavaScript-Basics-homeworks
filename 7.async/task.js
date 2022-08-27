class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(time, callback, id) {
		if (id === undefined) throw new Error('error text');
		if (this.alarmCollection .findIndex(item => item.id === id) != -1) {
			console.error('error ID');
			return;
		}
		this.alarmCollection[this.alarmCollection.length] = {
			id: id,
			time: time,
			callback: callback
		}
		return;
	}

	removeClock(id) {
		let removeCollectionItem = this.alarmCollection.findIndex(item => item.id === id);
		if (removeCollectionItem === -1) return false;
		this.alarmCollection.splice(removeCollectionItem, 1);
		return true;
	}

	getCurrentFormattedTime() {
		let currentTime = new Date();
		let hours = currentTime.getHours();
		let minutes = currentTime.getMinutes();
		hours = "0" + hours;
		minutes = "0" + minutes;
		let time = hours.substr(-2, 2) + ':' + minutes.substr(-2, 2);
		return time;
	}

	start() {
		const checkClock = (alarm) => {
			if (this.getCurrentFormattedTime() === alarm.time) {
				alarm.callback();
			}
		}
		if (this.timerId === null) {
			this.timerId = setInterval(() => this.alarmCollection.forEach((alarm) => checkClock(alarm)), 1000);
		}
	}

	stop() {
		if (this.timerId != null) {
			clearInterval (this.timerId);
			this.timerId = null;
		}
		return;
	}

	printAlarms() {
		this.alarmCollection.forEach((alarm) => {
			console.log (alarm.id + ' : ' + alarm.time)
		})
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}
