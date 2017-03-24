/* global Module */

/* Magic Mirror
 * Module: MMM-fullscreenToggle
 *
 * By Flo
 * MIT Licensed.
 */

Module.register("MMM-fullscreenToggle", {

	toggleElement: null,

	defaults: {
		useBody: true
	},

	getDom: function() {
		// create element wrapper for show into the module
		const wrapper = document.createElement("div");

		// Ensure black background
		const htmlElement = document.getElementsByTagName("html")[0];
		htmlElement.style.backgroundColor = "#000";

		if (this.config.useBody) {
			console.log(document.getElementsByTagName("body"));
			toggleElement = document.getElementsByTagName("body")[0];

			// Show cursor
			htmlElement.style.cursor = "default";

		} else {
			wrapper.innerHTML = "Toggle Fullscreen";
			wrapper.classList.add("xsmall", "dimmed");
			toggleElement = wrapper;
		}

		if (toggleElement) {
			toggleElement.style.cursor = "move";

			toggleElement.addEventListener("click", function() {
				screenfull.toggle();
				window.dispatchEvent(new Event("resize"));
			});
		}

		return wrapper;
	},

	getScripts: function() {
		// Using https://github.com/sindresorhus/screenfull.js
		return ["screenfull.js"];
	}
});
