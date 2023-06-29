export interface ListItem {
  amount: string;
  text: string;
}

export interface ListItemData {
  amount: string | number;
  text: string;
}

export interface InsetListProps {
  items: ListItemData[];
}

export const amountOfMoney: ListItem[] = [
  { amount: '100', text: 'משיכה' },
  { amount: '200', text: 'משיכה' },
  { amount: '300', text: 'משיכה' },
  { amount: '400', text: 'משיכה' },
  { amount: '500', text: 'משיכה' },
];

export const foreignCurrency: ListItem[] = [
  { amount: 'שקל', text: 'המרת מטבע' },
  { amount: 'דולר', text: 'המרת מטבע' },
  { amount: 'לירה', text: 'המרת מטבע' },
  { amount: 'ין', text: 'המרת מטבע' },
  { amount: 'אירו', text: 'המרת מטבע' },
];

export const moneyType = ['₪','$','£','¥','€'];