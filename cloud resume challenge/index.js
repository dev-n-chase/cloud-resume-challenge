const counter = document.querySelector(".counter-number");
async function updateCounter () {
    let response = await fetch("https://xxeazn5a7cyz5miphwiyrnl5am0adhzi.lambda-url.us-east-1.on.aws/")
    let data = await response.json ();
    counter.innerHTML = 'Views: ${data}';
}

updateCounter();