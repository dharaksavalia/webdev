function formSubmit() {
    try {
        console.log("Dharak");
        var name = document.getElementById("name").value;
        consoleLogging("name", name);
        var email = document.getElementById("email_id").value;
        consoleLogging("Email Id:", email);
        var password = document.getElementById("password").value;
        consoleLogging("Password:", password);
        var city = document.getElementById("city").value;
        consoleLogging("City:", city);
        var address1 = document.getElementById("address").value;
        consoleLogging("address1:", address1);
        var address2 = document.getElementById("address2").value;
        consoleLogging("Address 2:", address2);
        var userType = findSelection("user_type");
        consoleLogging("User Type:", userType);
        var zip = document.getElementById("zip").value;
        consoleLogging("Zip:", zip);
        return false;
    }
    catch{
        return false;
    }
}
/*
* funtion to take input from name
*/
function findSelection(field) {
    var radios = document.getElementsByName(field);
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
}
function consoleLogging(name, value) {
    console.log(name + ":" + value);
}