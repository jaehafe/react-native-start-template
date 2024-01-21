import {DefaultTheme} from 'styled-components';

export const colors: Record<string, string> = {
  white: '#ffffff',
  black: '#000000',

  gray1: '#F3F3F8',
  gray2: '#E2E2E4',
  gray3: '#B9B9C1',
  gray4: '#8D8E96',
  gray5: '#545664',
  gray6: '#373942',
  gray7: '#26272D',
  gray8: '#141417',

  blue0: '#bfe1ff',
  blue1: '#8bc7fd',
  blue2: '#52acfe',
  blue3: '#0085ff',
  blue4: '#0062bd',
  blue5: '#034581',
  blue6: '#012561',
  blue7: '#001040',

  red1: '#ffe6eb',
  red2: '#fba2b2',
  red3: '#ec4868',
  red4: '#d11043',
  red5: '#970721',
  red6: '#690419',
  red7: '#4F0314',

  pink1: '#f8ccff',
  pink2: '#e966ff',
  pink3: '#db00ff',
  pink4: '#a601c1',
  pink5: '#570066',

  purple1: '#ebdbff',
  purple2: '#ba85ff',
  purple3: '#9747ff',
  purple4: '#6d00fa',
  purple5: '#380080',

  green1: '#c1ffb8',
  green2: '#27f406',
  green3: '#20bc07',
  green4: '#148203',
  green5: '#082b03',

  unreadNotifBg: '#ebf6ff',
  brandBlue: '#0066FF',
  like: '#ec4899',
};

export const theme: DefaultTheme = {
  colors,
} as const;
