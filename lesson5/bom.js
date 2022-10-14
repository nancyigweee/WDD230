const input = document.getElementsById("favchap");
const button = document.getElementsByTagName("button");
const list = document.getElementsByClassName("list");

function addChapter() {
    if (input.value != "") {
        listElement = document.createElement('li');
        listElement.innerText = input.value;

        deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";

        listElement.appendChild(deleteButton);
        list.appendChild(listElement);

        deleteButton.addEventListener('click', function() {
            listElement.removeChild(this.parentElement);
        })
    }

    input.value="";
    input.focus();
}

button.addEventListener('click', addChapter);