const scrollToElement = require("./_scroll-to-element");

// TODO -- maybe move this out of node-lib helpers?? (since it deals with the browser)
const scrollToElementWhenLoaded = ({ elementId, interval, maxWaitTime }) => {
    const targetElement = document.getElementById(elementId);
    if(targetElement) scrollToElement(targetElement);

    const elementInterval = setInterval(() => {
        const targetElement = document.getElementById(elementId);
        if(targetElement) {
            scrollToElement(targetElement);
            clearInterval(elementInterval);
        }
    }, interval)

    // fallback if no element is found (default behavior should be good enough)
    setTimeout(() => clearInterval(elementInterval), maxWaitTime); 
}

module.exports = scrollToElementWhenLoaded;