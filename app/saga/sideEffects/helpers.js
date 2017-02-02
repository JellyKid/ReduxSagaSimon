export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const log = (msg) => console.log(msg);

export const colors = [
  "red",
  "green",
  "yellow",
  "blue"
];

export const cTable = {
  r: "red",
  g: "green",
  y: "yellow",
  b: "blue"
};

export function randColInit(c) {
  return c[Math.floor(Math.random() * c.length)][0];
}

export const getHistory = (state) => state.history;
