async function getRandomDogFromApi() {
  //     fetch("https://dog.ceo/api/breeds/image/random");

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  try {
    const res = await fetch("https://dog.ceo/api/breeds/list/all").then((res) =>
      res.json()
    );
    //console.log(res);
    return res.message;
  } catch (error) {
    console.log(error);
  }
}

//https://dog.ceo/api/breed/${dog}/images/random`);
//("https://dog.ceo/api/breeds/list/all");

async function getRandomDogImageFromApi(dog) {
  //     fetch("https://dog.ceo/api/breeds/image/random");

  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  try {
    const res = await fetch(
      `https://dog.ceo/api/breed/${dog}/images/random`
    ).then((res) => res.json());
    return res.message;
  } catch (error) {
    console.log(error);
  }
}
