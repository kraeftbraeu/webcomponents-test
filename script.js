function loadArticle(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => document.querySelector("article").innerHTML = html);
}