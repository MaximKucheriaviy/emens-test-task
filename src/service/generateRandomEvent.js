import { v4 } from "uuid";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos minus quo neque! Voluptatem voluptatibus aliquam, dolore quia, expedita molestiae impedit praesentium sapiente, ducimus numquam aperiam odit similique! Dolorum, ratione.".split(
    " "
  );
const cityes = [
  "Lviv",
  "Kyiv",
  "Odesa",
  "Chenihiv",
  "Kharkiv",
  "Cherkacy",
  "Ivano-Frankivsk",
];
const priority = "High Medium Low".split(" ");
const category = [
  "Art",
  "Music",
  "Business",
  "Conference",
  "Workshop",
  "Party",
  "Sport",
];

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const generateRandomEvent = () => {
  const event = {};
  const titleWords = getRandomInt(1, 3);
  event.title = "";
  for (let i = 0; i < titleWords; i++) {
    if (i === 0) {
      event.title = text[getRandomInt(0, text.length - 1)];
    } else {
      event.title = `${event.title} ${text[getRandomInt(0, text.length - 1)]}`;
    }
  }
  event.description = text.slice(0, getRandomInt(5, text.length - 1)).join(" ");
  event.location = cityes[getRandomInt(0, cityes.length - 1)];
  const dateNow = new Date(Date.now());
  const yPus = new Date(Date.now());
  yPus.setFullYear(yPus.getFullYear() + 1);
  event.eventDate = getRandomInt(dateNow.getTime(), yPus.getTime());
  event.category = category[getRandomInt(0, category.length - 1)];
  event.priority = priority[getRandomInt(0, priority.length - 1)];
  event.file = `./images/${event.category}.png`;
  event.id = v4();
  return event;
};
