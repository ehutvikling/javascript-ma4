async function callApi() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json = await response.json();
        loopThroughResults(json);
    } catch (error) {
        console.log(error);
    }
}

callApi();


function loopThroughResults(json) {

    const resultsContainer = document.getElementById("todos");

    const results = json;

    for (let i = 0; i < results.length; i++) {
        resultsContainer.innerHTML += '<div class="todo-card">' +
            '<div class="inner">' +
            ' <input type="checkbox" ' + (results[i].completed ? 'checked=checked' : '') + '> ' +
            results[i].id + ". " +
            results[i].title +
            '</div>' +
            '</div>';
    }
}