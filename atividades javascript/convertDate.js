const dateToday = 1599146836894;

const dateString = "11/18/2020";

const dateTimestamp = Date.parse(dateString);

function foundDate(timestamp) {

  const dateNow = new Date(timestamp);

  const day = `0${dateNow.getDate()}`.slice(-2);
  const month = `0${dateNow.getMonth() + 1}`.slice(-2);
  const year = dateNow.getFullYear();

  return {
    day,
    month,
    year,
    iso: `${month}/${day}/${year}`,
    format: `${day}/${month}/${year}`
  }

}

console.log(foundDate(dateToday).format);
