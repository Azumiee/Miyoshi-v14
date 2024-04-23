const EasyRed = require("discordjs-red")

/**
 * Logs a message with optional styling.
 *
 * @param {string} string - The message to log.
 * @param {'info' | 'err' | 'warn' | 'done' | undefined} style - The style of the log.
 */
const log = (string, style) => {
    const styles = {
        info: {
            prefix: EasyRed.getColor("[INFO]", BLUE),
            logFunction: console.log
        },
        err: {
            prefix: EasyRed.getColor("[ERROR]", RED),
            logFunction: console.error
        },
        warn: {
            prefix: EasyRed.getColor("[WARNING]", YELLOW),
            logFunction: console.warn
        },
        done: {
            prefix: EasyRed.getColor("[SUCCESS]", GREEN),
            logFunction: console.log
        },
    };

    const selectedStyle = styles[style] || {
        logFunction: console.log
    };
    selectedStyle.logFunction(`${selectedStyle.prefix || ""} ${string}`);
};

/**
 * Formats a timestamp.
 *
 * @param {number} time - The timestamp in milliseconds.
 * @param {import('discord.js').TimestampStylesString} style - The timestamp style.
 * @returns {string} - The formatted timestamp.
 */
const time = (time, style) => {
    return `<t:${Math.floor(time / 1000)}${style ? `:${style}` : ""}>`;
};

/**
 * Whenever a string is a valid snowflake (for Discord).

 * @param {string} id 
 * @returns {boolean}
 */
const isSnowflake = (id) => {
    return /^\d+$/.test(id);
};

module.exports = {
    log,
    time,
    isSnowflake
};