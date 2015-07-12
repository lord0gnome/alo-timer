/**
 * Creates the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param {number} timeout How many miliseconds to have the timeout for
 * @constructor
 */
function AloTimer(timeout) {
    /**
     * How long the timeout is set for
     * @type {number}
     */
    this.timeout = timeout;

    /**
     * When the timeout started
     * @type {number}
     */
    this.timeStart = new Date().getTime();
}

/**
 * Methods to call for toString()
 * @type {string[]}
 */
AloTimer.prototype.timeChain = ['Days', 'Hours', 'Minutes', 'Seconds'];

/**
 * Adds miliseconds to the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.addMS = function (val) {
    this.timeout += val;
    return this;
};

/**
 * Adds seconds to the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.addSeconds = function (val) {
    this.timeout += val * 1000;
    return this;
};

/**
 * Adds minutes to the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.addMinutes = function (val) {
    this.timeout += val * 60000;
    return this;
};

/**
 * Adds hours to the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.addHours = function (val) {
    this.timeout += val * 3600000;
    return this;
};

/**
 * Adds days to the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.addDays = function (val) {
    this.timeout += val * 86400000;
    return this;
};

/**
 * Subtracts miliseconds from the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.subMS = function (val) {
    this.timeout -= val;
    return this;
};

/**
 * Subtracts seconds from the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.subSeconds = function (val) {
    this.timeout -= val * 1000;
    return this;
};

/**
 * Subtracts minutes from the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.subMinutes = function (val) {
    this.timeout -= val * 60000;
    return this;
};

/**
 * Subtracts hours from the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.subHours = function (val) {
    this.timeout -= val * 3600000;
    return this;
};

/**
 * Subtracts days from the timer
 * @author Art <a.molcanovas@gmail.com>
 * @param val The amount to add
 * @returns {AloTimer}
 */
AloTimer.prototype.subDays = function (val) {
    this.timeout -= val * 86400000;
    return this;
};

/**
 * Checks whether the timeout has finished
 * @author Art <a.molcanovas@gmail.com>
 * @returns {boolean}
 */
AloTimer.prototype.isFinished = function () {
    return (new Date().getTime() - this.timeStart) >= this.timeout;
};

/**
 * Returns the amount of miliseconds remaining
 * @author Art <a.molcanovas@gmail.com>
 * @returns {number}
 */
AloTimer.prototype.getMSLeft = function () {
    var diff = new Date().getTime() - this.timeStart;
    return diff < this.timeout ? (this.timeout - diff) % 1000 : 0;
};

/**
 * Returns the amount of seconds remaining
 * @author Art <a.molcanovas@gmail.com>
 * @returns {number}
 */
AloTimer.prototype.getSecondsLeft = function () {
    var diff = new Date().getTime() - this.timeStart;
    return diff < this.timeout ? Math.floor(((this.timeout - diff) / 1000) % 60) : 0;
};

/**
 * Returns the amount of minutes remaining
 * @author Art <a.molcanovas@gmail.com>
 * @returns {number}
 */
AloTimer.prototype.getMinutesLeft = function () {
    var diff = new Date().getTime() - this.timeStart;
    return diff < this.timeout ? Math.floor(((this.timeout - diff) / 60000) % 60) : 0;
};

/**
 * Returns the amount of hours remaining
 * @author Art <a.molcanovas@gmail.com>
 * @returns {number}
 */
AloTimer.prototype.getHoursLeft = function () {
    var diff = new Date().getTime() - this.timeStart;
    return diff < this.timeout ? Math.floor(((this.timeout - diff) / 3600000) % 24) : 0;
};

/**
 * Returns the amount of days remaining
 * @author Art <a.molcanovas@gmail.com>
 * @returns {number}
 */
AloTimer.prototype.getDaysLeft = function () {
    var diff = new Date().getTime() - this.timeStart;
    return diff < this.timeout ? Math.floor((this.timeout - diff) / 86400000) : 0;
};

/**
 * Returns a string representation of the amount of time remaining (DD:HH:mm:ss)
 * @author Art <a.molcanovas@gmail.com>
 * @returns {string}
 */
AloTimer.prototype.toString = function () {
    var arr = [], i;

    for (i = 0; i < this.timeChain.length; i++) {
        arr.push(this["get" + this.timeChain[i] + "Left"]());
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr[i] = "0" + arr[i];
        }
    }

    return arr.join(":");
};