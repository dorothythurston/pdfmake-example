const dateformat = require('dateformat');

/**
 * LocaleHelper
 */
module.exports = class LocaleHelper {

  /**
   * format date
   * @param date
   */ 
  static formatDate(date) {
    if (date) {
      return dateformat(date, "mmmm dS, yyyy");
    } else {
      return "";
    }
  }

  /**
   * local Date
   */ 
  static localDate() {
    // this will need to take in a locale
    return Date.now();
  }

  /**
   * local Date
   * @param timezone
   */ 
  static generateTimeStamp(timezone) {
    return LocaleHelper.formatDate(LocaleHelper.localDate()); // eventually this will need to do correct dates
  }
};
