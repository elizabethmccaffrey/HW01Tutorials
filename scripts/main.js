const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/doves.jpeg") {
        myImage.setAttribute("src", "images/doves2.jpg");
    } else {
        myImage.setAttribute("src", "images/doves.jpeg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Doves: ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};