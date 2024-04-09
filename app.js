const nmbr = document.getElementById("nmbr");
const avices = document.getElementById("avice");
const dice = document.getElementById("dice");
const FetchData = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    nmbr.innerText = ` ${data.slip.id}`;
    avices.innerText = `${data.slip.advice}`;
    console.log("done");
  } catch (error) {
    console.log("error to fetching advice:", error);
  }
};

FetchData();

dice.addEventListener("click", FetchData);
