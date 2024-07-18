import UIComponent from "./ui-component.js"

 
import UIPIMessage from "../uipi/uipi-message.js"

class UI extends UIComponent {

	/**
	 *
	 * @abstract
	 * @returns {UI}
	 */
	static create() {
	}

	/**
	 *
	 * @abstract
	 * @param {AbortController} abortController
	 * @returns {Promise}
	 */
	async fetchAndRenderThreadNextMessagePage(abortController) {
	}

	/**
	 *
	 * @abstract
	 * @returns {Promise<UIPIMessage>}
	 */
	async getNextUIPIMessage() {
	}

}

export default UI
