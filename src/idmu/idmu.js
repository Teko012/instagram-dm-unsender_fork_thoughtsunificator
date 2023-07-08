import UIPI from "../uipi/uipi.js"

export default class IDMU {

	/**
	 *
	 * @param {Window} window
	 */
	constructor(window) {
		this.window = window
		this.uipi = null
	}

	/**
	 *
	 * @returns {Promise<UIPIMessage[]>}
	 */
	createUIPIMessages() {
		return this.#getUIPI().createUIPIMessages()
	}


	/**
	 *
	 * @returns {Promise}
	 */
	fetchAndRenderThreadNextMessagePage() {
		return this.#getUIPI().fetchAndRenderThreadNextMessagePage()
	}

	/**
	 *
	 * @returns {UIPI}
	 */
	#getUIPI() {
		if(this.uipi === null) {
			this.uipi = UIPI.create(this.window)
		}
		return this.uipi
	}

}
