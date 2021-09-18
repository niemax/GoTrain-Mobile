import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import moment from 'moment';
import * as firebase from 'firebase';

export function getCurrentDate(date = moment().locale('fi').format('LL')) {
  return { date };
}

export function getCurrentDateTreeninLopetus(date = moment().locale('fi').format('LL')) {
  return { date };
}


