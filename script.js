async function getDogName() {
  try {
    const image = await getRandomDogFromApi();

    //console.log(image);
    const dogNames = Object.keys(image);
    console.log(dogNames);
    appendtoSelectInput(dogNames);

    // const dogImage = document.querySelector("#dogImage");
    // dogImage.src = image;
  } catch (error) {
    console.log(error);
  }
}
function appendtoSelectInput(dogNames) {
  const selectInput = document.querySelector("#dog-list");
  for (let i = 0; i < dogNames.length; i++) {
    const item = dogNames[i];
    const option = document.createElement("option");
    option.textContent = item;
    selectInput.appendChild(option);
  }
}

getDogName();

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function () {
  const selectInput = document.querySelector("#dog-list");
  const Dogname = selectInput.value;
  displayImage(Dogname);
});

async function displayImage(Dogname) {
  try {
    const imageUrl = await getRandomDogImageFromApi(Dogname);
    console.log(imageUrl);
    const dogImage = document.querySelector("#dogImage");
    dogImage.src = imageUrl;
  } catch (error) {
    console.log(error);
  }
}
