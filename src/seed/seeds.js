const dayjs = require("dayjs");
const date = dayjs();
module.exports = [
  {
    company: "Pathrise",
    job: "Web Developer",
    thumbnail: require("./images/pathrise.png").default,
    date: date
  },
  {
    company: "Airbnb",
    job: "Junior Developer",
    thumbnail: require("./images/airbnb.png").default,
    date: date
  },
  {
    company: "Google",
    job: "Intern",
    thumbnail: require("./images/google.png").default,
    date: date
  },
  {
    company: "Facebook",
    job: "React Developer",
    thumbnail: require("./images/facebook.png").default,
    date: date
  },

];
