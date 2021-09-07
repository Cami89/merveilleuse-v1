var commandButtons = document.querySelectorAll(".editorCommands a");
for (var i = 0; i < commandButtons.length; i++) {
    commandButtons[i].addEventListener("mousedown", function (e) {
        e.preventDefault();
        var commandName = e.target.getAttribute("data-command");
        if (commandName === "html") {
            var commandArgument = e.target.getAttribute("data-command-argument");
            document.execCommand('formatBlock', false, commandArgument);
        } else {
            document.execCommand(commandName, false);
        }
    });
}
var result = document.getElementById("editor").innerHTML;

// Envoie au localstorage

const publishArticle = document.getElementById('publishButton');
publishArticle.addEventListener('click', function () {
    const article = {
        text: result.text
    }

    let newArticle = localStorage.getItem("article");
    if (newArticle) {
        const publish = JSON.parse(article);
        addToLocalStorage(publish , article);
    } else {
        const publish = [];
        addToLocalStorage(publish, article);
    }
});


function addToLocalStorage(publish, article) {
    publish.push(article);
const commandeString = JSON.stringify(publish);
localStorage.setItem("newArticle", commandeString);
alert("Article publié !")
}