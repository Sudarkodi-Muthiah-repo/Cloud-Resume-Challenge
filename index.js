// javascript code to fetch lambda 

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://eyhi6cx3fnwdkr7v3mgcci6kfu0hyqfe.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}