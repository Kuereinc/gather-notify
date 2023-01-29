function goToGather() {
    var url = "https://app.gather.town/app/oK9Y6Fzo2He6uhXO/Kuere";
    chrome.tabs.create({ url: url });
}

function goToSlack() {
    var url = "https://kuere.slack.com";
    chrome.tabs.create({ url: url });
}


window.addEventListener('load', function () {
    document.getElementById('gather').addEventListener('click', goToGather);
    document.getElementById('slack').addEventListener('click', goToSlack);
});
