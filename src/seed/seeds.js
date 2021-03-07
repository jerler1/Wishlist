import functions from "../util/Functions";
const dayjs = require("dayjs");
const date = dayjs();
const seeds = [
  {
    company: "Pathrise",
    job: "Web Developer",
    thumbnail: require("./images/pathrise.png").default,
    date: date,
    color: functions.randomColor(),
  },
  {
    company: "Airbnb",
    job: "Junior Developer",
    thumbnail: require("./images/airbnb.png").default,
    date: date,
    color: functions.randomColor(),
  },
  {
    company: "Google",
    job: "Intern",
    thumbnail: require("./images/google.png").default,
    date: date,
    color: functions.randomColor(),
  },
  {
    company: "Facebook",
    job: "React Developer",
    thumbnail: require("./images/facebook.png").default,
    date: date,
    color: functions.randomColor(),
  },
];

export default seeds;