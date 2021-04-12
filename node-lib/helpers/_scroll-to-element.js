
// TODO -- maybe move this out of node-lib helpers?? (since it deals with the browser)
const scrollToElement = (element) => {
    element.scrollIntoView();
    element.focus();
}

module.exports = scrollToElement