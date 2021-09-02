import { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import { format } from 'date-fns';

export default function useAgendaQuery() {
  const [calendarData, setCalendarData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();

    db.collection('users')
      .doc(currentUser.uid)
      .collection('treenidata')
      .orderBy('timestamp', 'desc')
      .get()

      .then((snapshot) => {
        const mappedData = snapshot.docs.map((treeni) => {
          const data = treeni.data();
          const { timestamp } = data;

          return {
            ...data,
            date: format(timestamp, 'yyyy-MM-dd'),
          };
        });

        const reduced = mappedData.reduce((acc, currentItem) => {
          const { date, ...rest } = currentItem;

          acc[date] = [rest];

          return acc;
        }, {});
        setCalendarData(reduced);
        setLoading(false);
      });
  }, []);
  return { calendarData, error, loading };
}
