import moment from 'moment';

export function getCurrentDate(date = moment().locale('fi').format('LL')) {
  return { date };
}

export function getCurrentDateTreeninLopetus(date = moment().locale('fi').format('LL')) {
  return { date };
}
