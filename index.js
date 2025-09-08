

function showname(response) {
  new Typewriter("#nameOutput", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generator(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#name-generator");
  let apikey = "ta654bee04c3753o585ff2189fe74b0a";
  let context = "You are a creative name generator. You generate unique and catchy names based on user instructions. list three names in a list format. using the <strong> tag for the names. ue the <li> tag for the list. Do not use the <ul> tag. the names are either for boys or girls.";
  let prompt = `User instructions: Generate name for ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let outcome = document.querySelector("#nameOutput");
  outcome.classList.remove("hidden"); 
  outcome.innerHTML = `<div class="generating">⏳ Generating names </div>`;

  axios.get(apiURL).then(showname);
}

let form = document.querySelector("#name-generator"); // Make sure your HTML has a form with this ID
form.addEventListener("submit", generator);
