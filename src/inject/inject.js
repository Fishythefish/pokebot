chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			document.body.addEventListener("DOMSubtreeModified", pokeBack);
			pokeBack();
		}
	}, 10);
});

function pokeBack() {
	var aTags = document.getElementsByTagName("a");
	for (var i = 0; i < aTags.length; ++i) {
		if (aTags[i].innerHTML.search("Return Fire!") > -1) {
			aTags[i].click();
		}
	}
}