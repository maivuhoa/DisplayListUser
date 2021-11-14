let users = [];
var vName = document.getElementById("name");
var vPhone = document.getElementById("phone");
var vAddress = document.getElementById("address");
const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = "form-input success";
};
const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const pTag = formControl.querySelector("p");
    pTag.innerText = message;
    formControl.className = "form-input error";
};
function validate(e) {
    let user = {
        nameValue: vName.value.trim(),
        phoneValue: vPhone.value.trim(),
        addressValue: vAddress.value.trim(),
    };

    if (!user.nameValue || user.nameValue.length != 5) {
        setErrorFor(vName, "user name must be 5 characters");
        return;
    } else setSuccessFor(vName);
    if (/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(user.phoneValue) === false) {
        setErrorFor(vPhone, "Phone number must be 10 numbers");
        return;
    } else setSuccessFor(vPhone);
    if (!user.addressValue) {
        setErrorFor(vAddress, "User address must be from 6 to 20 characters");
        return;
    } else setSuccessFor(vAddress);
    vName.value = "";
    vPhone.value = "";
    vAddress.value = "";

    alert("Save success !")
    users = [...users, user];
    console.log("users", users);
    document.getElementById("pPhone").innerHTML = "";
    document.getElementById("pName").innerHTML = "";
    document.getElementById("pAddress").innerHTML = "";

}
function showAllUser(){
    let usersTable = "";
    for (const person of users) {
      console.log(person)
      userRow =  "<tr>" +
      `<td> ${person.nameValue} </td>` +
      `<td> ${person.phoneValue} </td>` +
      `<td> ${person.addressValue} </td>` +
      `<td> 00${users.indexOf(person)} </td>` +
      "</tr>";
      usersTable = usersTable + userRow;
      console.log("ccc",userRow);
      document.querySelector("#table  tbody").innerHTML = usersTable;
    }
}

document.getElementById("submit").onclick = validate;
document.getElementById("showUser").onclick = showAllUser;