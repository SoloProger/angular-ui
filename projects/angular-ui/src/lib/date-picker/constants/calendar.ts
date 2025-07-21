import { Calendar } from '../types/calendar';

export const days: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SAN'];

export const calendar: { [key: number]: Calendar } = {
  1: { month: 'January', monthCount: 1, days: 31 },
  2: { month: 'February', monthCount: 2, days: 28 },
  3: { month: 'March', monthCount: 3, days: 31 },
  4: { month: 'April', monthCount: 4, days: 30 },
  5: { month: 'May', monthCount: 5, days: 31 },
  6: { month: 'June', monthCount: 6, days: 30 },
  7: { month: 'Julie', monthCount: 7, days: 31 },
  8: { month: 'August', monthCount: 8, days: 30 },
  9: { month: 'September', monthCount: 9, days: 30 },
  10: { month: 'October', monthCount: 10, days: 31 },
  11: { month: 'November', monthCount: 11, days: 30 },
  12: { month: 'December', monthCount: 12, days: 31 },
};
