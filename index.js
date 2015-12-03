/**
 * Uses the given condition to determine if a browser
 * is considered modern. Added a class of `modern-browser`
 * or `not-modern-browser` to the HTML element.
 *
 * @param  {condition} condition Condition to evaluate
 * @return null
 */
module.exports = function (condition) {

  var html = document.getElementsByTagName("html")[0];

  if (condition) {
    html.className = html.className + " modern-browser";
    window.modernBrowser = true;
  } else {
    html.className = html.className + " not-modern-browser";
    window.modernBrowser = false;
  }

};
