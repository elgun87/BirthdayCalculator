const userInput = prompt("Enter birth year as: YYYY-MM-DD");
const calculateAge = () => {
  const birth = new Date(userInput);
  const current = new Date();

  const months = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 30,
  };

  const yearDifference = current.getFullYear() - birth.getFullYear();

  let birthMonth = birth.getMonth() + 1;
  let birthDate = birth.getDate() + 1;
  let temp = 0;
  let message = "";
  let currentMonth = current.getMonth() + 1;
  let currentDate = current.getDate();

  if (birthMonth < currentMonth) {
    //* if the birth month smaller than current month get difference between birht month and current month
    let totalDays = months[`${birthMonth}`] - birthDate;
    temp = totalDays;
    let wholeMonth = 0;
    let wholeMontdays = 0;
    let getMonth = birthMonth;
    while (true) {
      getMonth += 1;
      if (getMonth === currentMonth) {
        totalDays += current.getDate() + 1;
        break;
      }
      wholeMonth += 1;
      totalDays += months[`${getMonth}`];
      wholeMontdays += months[`${getMonth}`];
    }
    const remainedMonth =
      (temp + currentDate) / 31 > 0.99
        ? Math.round((temp + currentDate) / 31)
        : 0;

    if (remainedMonth > 0) {
      wholeMonth = wholeMonth + remainedMonth;
    }
    message = `You were born ${yearDifference} years, ${wholeMonth} months and ${
      (totalDays - wholeMontdays) % 31
    } days ago`;
  } else if (birthMonth === currentMonth) {
    //* if the birth month greater than current get just current month and dates
    if (birthDate > currentDate || birthDate === currentDate) {
      birthDate = birthDate - currentDate;
      yearDifference += 1;
    } else {
      birthDate = currentDate;
    }
    message = `You were born ${yearDifference} years, ${
      birthMonth - currentMonth
    } months and ${birthDate} days ago`;
  }
  return message;
};

const element = document.createElement("h1");
element.innerHTML = `${calculateAge()}`;
document.body.appendChild(element);
