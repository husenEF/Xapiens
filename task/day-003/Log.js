const { throws } = require('assert');
const fs = require('fs');
class Log {
  #fullMessage;
  #listMessage = [];

  constructor(message = "", level = "Informational") {
    if (message !== "") this.#createMessage(message, level);
  }

  async   #writeLog(message = '') {
    fs.writeFile("aap.log", message, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });

    fs.appendFile("sync.log", `${message}\r\n`, (e) => {
      if (e)
        console.log({ e })
      console.log("The file was saved! sync");
    })
  }
  
  #createMessage(message = "", nameLog = "Informational") {
    this.#fullMessage =
      new Date().toISOString() + " " + nameLog + ": " + message;
    this.#listMessage.push(this.#fullMessage);
    this.#writeLog(this.#fullMessage)
  }

  /**
   * @param {string} message
   */
  setemergency(message) {
    this.#createMessage(message, "Emergency");

    return true;
  }
  /**
   * @param {string} message
   */
  setalert(message) {
    this.#createMessage(message, "Alert");

    return true;
  }
  /**
   * @param {string} message
   */
  setcritical(message) {
    this.#createMessage(message, "Critical");
    return true;
  }
  /**
   * @param {string} message
   */
  seterror(message) {
    this.#createMessage(message, "Error");
    return true;
  }
  /**
   * @param {string} message
   */
  setwarning(message) {
    this.#createMessage(message, "Warning");
    return true;
  }
  /**
   * @param {string} message
   */
  setnotice(message) {
    this.#createMessage(message, "Notice");
    return true;
  }
  /**
   * @param {string} message
   */
  setinformational(message) {
    this.#createMessage(message, "Informational");
    return true;
  }
  /**
   * @param {string} message
   */
  setdebug(message) {
    this.#createMessage(message, "Debug");
    return true;
  }

  getMessage() {
    return this.#fullMessage;
  }

  getAllMessage() {
    return this.#listMessage;
  }
}

const myLog = new Log();

module.exports = Log