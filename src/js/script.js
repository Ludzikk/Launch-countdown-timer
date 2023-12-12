const countdownTypes = document.querySelectorAll(".countdown__number");
let date = new Date();
const countdownDate = new Date(date);
countdownDate.setDate(countdownDate.getDate() + 14);

const setCountdown = () => {
  date = new Date();
  const timeLeft = countdownDate - date;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  console.log(timeLeft);

  countdownTypes.forEach((type) => {
    switch (type.id) {
      case "days":
        type.textContent = days;
        break;
      case "hours":
        type.textContent = hours;
        break;
      case "minutes":
        type.textContent = minutes;
        break;
      case "seconds":
        type.textContent = seconds;
        break;
    }
  });
};

setCountdown();

setInterval(() => {
  setCountdown();
}, 1000);

