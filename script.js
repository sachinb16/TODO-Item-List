window.onload = function () {
    let txtAddTask = document.getElementById("txtAddTask");
    let btnAddTask = document.getElementById("btnAddTask");
    let listGroup = document.getElementById("content");

    txtAddTask.focus()

    txtAddTask.addEventListener("keyup",(event)=>{
        if(event.key === 'Enter'){
            manageTask()
        }
    })

    btnAddTask.addEventListener("click", function () {
        manageTask()
    });

    function manageTask(){
        
        if (txtAddTask.value === "") {
            alert("Write some Task first!!");
            return;
        }

        let listItem = document.createElement("div");
        listItem.id = "listItem";

        let listText = document.createElement("span");
        listText.innerText = txtAddTask.value;
        listText.id = "listText";

        let btnDelete = document.createElement("button");
        btnDelete.style.border = "none"
        btnDelete.style.marginRight = "3px"
        btnDelete.innerText = "❌";
        btnDelete.id = "btnDelete";

        let checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.id = "checkBox";

        checkBox.onclick = function () {
            if (checkBox.checked == true) {
                // listText.innerHTML = `<s>${listText.innerText} <\s>`
                listText.style.textDecoration = "line-through double";
                listText.style.fontWeight = "normal";
            } else {
                listText.style.removeProperty("text-decoration");
                listText.style.fontWeight = "bold";
            }
        };

        btnDelete.onclick = function (event) {
            event.target.parentElement.remove();
        };

        listItem.append(checkBox);
        listItem.append(listText);
        listItem.append(btnDelete);

        listGroup.appendChild(listItem);

        txtAddTask.value = "";
    }
};
