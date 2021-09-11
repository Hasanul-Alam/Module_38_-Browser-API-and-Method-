//Alert
const alertBox = () => {
    alert("I am an alert box.");
}
//Confirm
const confirmBox = () => {
    const date = confirm("Will you go out for a date with me??");
    console.log(date);
    if (date === true) {
        console.log("Hurreee....");
    }
    else {
        console.log("I won't go in front of her ever again.");
    }
}
//Prompt
const promptBox = () => {
    const userInformation = prompt("Please enter your email here.");
    if (userInformation === '') {
        alert("You must give your email address here.");
    }
    else {
        console.log(userInformation);
    }
}