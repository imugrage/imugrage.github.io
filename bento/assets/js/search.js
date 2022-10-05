// Search DDG/Google/?
// from https://github.com/tmugrage/tmugrage.github.io/blob/master/personal/index.js
function doSearch() {
    const query = document.getElementById('search-input').value
    switch (document.getElementById("search-engine-select").value) {
        case 'ddg':
            window.location.href = `https://www.duckduckgo.com/?q=${query}`
            break;
        case 'google':
            window.location.href = `https://www.google.com/search?q=${query}`
            break;
        case 'bing':
            window.location.href = `https://www.bing.com/?q=${query}`

    }
}

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
});