/**
	* @module config/bot
	* @desc Before editing, this file should be cloned from bot.js.template to bot.js
	* @author WizardCM <bots@wizardcm.com>
*/

/**
	@type {Object.<string, string>}
*/
module.exports = {
	/**
	 * @desc Bot username without discriminator
	 * @default "MyTimeBot"
	 * @type string
	 */
	name: "MyTimeBot",
	/**
	 * @desc Global bot command prefix
	 * @default "?"
	 * @type string
	*/
	prefix: "?",
	/** 
	 * @desc Discord API bot token (keep it secret)
	 * @default "NjIxNTQ4MjkzMzM5NDgwMDk1.XXm8dg.pNGIgrWljqsAFE4vgmjvjRzFi-g"
	 * @type string
	 */
	token: "NjIxNTQ4MjkzMzM5NDgwMDk1.XXm8dg.pNGIgrWljqsAFE4vgmjvjRzFi-g",
	/** 
	 * @desc Global bot response heading
	 * @default "\uD83D\uDD52 Discord Time Bot"
	 * @type string
	 */
	title: "\uD83D\uDD52 Discord Time Bot"
};