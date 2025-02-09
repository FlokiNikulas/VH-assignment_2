import {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  addSeconds,
  addMinutes,
  isBefore,
  isSameDay as isSameDayFn,
  isWithinInterval
} from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";

export const getCurrentYear = (): number => new Date().getFullYear();

export const addToDate = (date: Date, value: number, unit: DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS): Date => {
  switch (unit) {
    case DATE_UNIT_TYPES.SECONDS:
      return addSeconds(date, value);
    case DATE_UNIT_TYPES.MINUTES:
      return addMinutes(date, value);
    case DATE_UNIT_TYPES.DAYS:
      return addDays(date, value);
    case DATE_UNIT_TYPES.WEEKS:
      return addWeeks(date, value);
    case DATE_UNIT_TYPES.MONTHS:
      return addMonths(date, value);
    case DATE_UNIT_TYPES.YEARS:
      return addYears(date, value);
    default:
      throw new Error("Unsupported date unit type");
  }
};

export const isWithinRange = (date: Date, startDate: Date, endDate: Date): boolean => 
  isWithinInterval(date, { start: startDate, end: endDate });

export const isDateBefore = (date: Date, compareDate: Date): boolean => isBefore(date, compareDate);

export const isSameDay = (date: Date, compareDate: Date): boolean => isSameDayFn(date, compareDate);