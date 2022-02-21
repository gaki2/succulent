// if you want to change menuList or picture, modify this setup file.

interface menuType {
  name: string;
  imgNum: number;
}

export const titleimges: string[] = [
  "spring",
  "아메치스",
  "autum",
  "winter",
  "spring2",
];

export const menues: menuType[] = [
  { name: "Spring", imgNum: 20 },
  { name: "Summer", imgNum: 20 },
  { name: "Autumn", imgNum: 20 },
  { name: "Winter", imgNum: 20 },
  { name: "LateWinter", imgNum: 20 },
];

export function ErrorCheck() {
  if (titleimges.length !== menues.length) {
    alert("/setup.ts const titleimges and menuNames length must be same!");
  }
}
