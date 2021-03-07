import functions from "../util/Functions";
import { v4 as uuidv4 } from 'uuid';
const dayjs = require("dayjs");
const date = dayjs();
const seeds = [
  {
    company: "Pathrise",
    job: "Web Developer",
    thumbnail: require("./images/pathrise.png").default,
    date: date,
    color: functions.randomColor(),
    id: uuidv4(),
  },
  {
    company: "Airbnb",
    job: "Junior Developer",
    thumbnail: require("./images/airbnb.png").default,
    date: date,
    color: functions.randomColor(),
    id: uuidv4(),
  },
  {
    company: "Google",
    job: "Intern",
    thumbnail: require("./images/google.png").default,
    date: date,
    color: functions.randomColor(),
    id: uuidv4(),
  },
  {
    company: "Facebook",
    job: "React Developer",
    thumbnail: require("./images/facebook.png").default,
    date: date,
    color: functions.randomColor(),
    id: uuidv4(),
  },
];

export default seeds;