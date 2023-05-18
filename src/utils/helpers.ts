import { format as fnsFormat, parse } from 'date-fns';
import { utcToZonedTime, format } from 'date-fns-tz';

export const formatDateDespiteTimeZone = (
  dateParams: string,
  dateFormat: string
) => {
  //method expect this date format 2021-12-03T00:45:00.000+0000
  const date = new Date(dateParams);
  const timeZone = 'UTC';
  const zonedDate = utcToZonedTime(date, timeZone);
  const pattern = dateFormat;
  return format(zonedDate, pattern, { timeZone });
};
