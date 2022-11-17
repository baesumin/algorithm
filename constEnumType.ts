const Colors = {
  red: '#FF0000',
  blue: '#0000FF',
  green: '#008000'
};

console.log(Colors.blue);

const colors = {
  red: '#FF0000',
  blue: '#0000FF',
  green: '#008000'
} as const;

enum EColors {
  red = '#FF0000',
  blue = '#0000FF',
  green = '#008000'
}

const enum CEColors {
  red = '#FF0000',
  blue = '#0000FF',
  green = '#008000'
}

const MOBILE_OS = {
  IOS: 'iOS',
  Android: 'Android'
} as const;

type MOBILE_OS = typeof MOBILE_OS[keyof typeof MOBILE_OS]; // 'iOS' | 'Android'
