var table = document.querySelector("#stdlist");

const btn = document.querySelector(".st");

btn.addEventListener('click',onFormSubmit);

const userName = document.querySelector("#userName");
const rollNo = document.querySelector("#rollNo");
const stdClass = document.querySelector("#stdClass");
const tsub = document.querySelector("#tsub");
const age = document.querySelector("#age");
const userNamevalidationError = document.querySelector("#userNamevalidationError");
const rollNovalidationError = document.querySelector("#rollNovalidationError");
const stdClassvalidationError = document.querySelector("#stdClassvalidationError");
const tsubvalidationError = document.querySelector("#tsubvalidationError");
const agevalidationError = document.querySelector("#agevalidationError");

var edit = false;

var val = null;

function updateValue(selectedRow){
   selectedRow.cells[0].innerHTML = document.getElementById("userName").value;
   selectedRow.cells[1].innerHTML = document.getElementById("rollNo").value;
   selectedRow.cells[2].innerHTML = document.getElementById("stdClass").value;
   selectedRow.cells[3].innerHTML = document.getElementById("tsub").value;
   selectedRow.cells[4].innerHTML = document.getElementById("age").value;
}

function onFormSubmit(){

    if(edit){
        updateValue(val);
        edit = false;
        return;
    }

    if(Validite()){
        userNamevalidationError.classList.add("hide");
        rollNovalidationError.classList.add("hide");
        stdClassvalidationError.classList.add("hide");
        tsubvalidationError.classList.add("hide");
        agevalidationError.classList.add("hide");
        var row = table.insertRow(table.length);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = userName.value;
        cell2.innerHTML = rollNo.value;
        cell3.innerHTML = stdClass.value;
        cell4.innerHTML = tsub.value;
        cell5.innerHTML = age.value;
        cell6.innerHTML = '<a onclick="resetForm(this)">Edit</a> <a onclick="onDelete(this)">Delete</a>'
    
        userName.value = "";
        rollNo.value = "";
        stdClass.value = "";
        tsub.value = "";
        age.value = "";
    }

    else{
        if(userName.value == ""){
            userNamevalidationError.classList.remove("hide");
        }
        if(rollNo.value == ""){
            rollNovalidationError.classList.remove("hide");
        }
        if(stdClass.value == ""){
            stdClassvalidationError.classList.remove("hide");
        }
        if(tsub.value == ""){
            tsubvalidationError.classList.remove("hide");
        }
        if(age.value == ""){
            agevalidationError.classList.remove("hide");
        }
    }

}

function resetForm(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("userName").value=selectedRow.cells[0].innerHTML;
    document.getElementById("rollNo").value=selectedRow.cells[1].innerHTML;
    document.getElementById("stdClass").value=selectedRow.cells[2].innerHTML;
    document.getElementById("tsub").value=selectedRow.cells[3].innerHTML;
    document.getElementById("age").value=selectedRow.cells[4].innerHTML;
    edit = true;
    val = selectedRow;
}

function onDelete(td){
    if(confirm('Are You Sure To Delete This Record?')){
        var i = td.parentNode.parentNode.rowIndex;
       document.getElementById("stdlist").deleteRow(i);

    }
}

function Validite(){
    var flag = true;

    if(userName.value == ""){
        flag = false;
    }
    if(rollNo.value == ""){
        flag = false;
    }
    if(stdClass.value == ""){
        flag = false;
    }
    if(tsub.value == ""){
        flag = false;
    }
    if(age.value == ""){
        flag = false;
    }

    return flag;
}