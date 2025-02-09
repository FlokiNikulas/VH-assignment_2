import {describe} from 'vitest';

describe("Date Utils", () => {
  // Add your tests here
});
import { describe, it, expect } from 'vitest';
import { getCurrentYear, add, isWithinRange, isDateBefore } from '../dateUtils';
import { DATE_UNIT_TYPES } from '../constants';

describe("Date Utils", () => {
  
  it("Returns current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getCurrentYear()).toBe(currentYear);
  });

  it("Adds seconds to a given date", () => {
    const date = new Date(2024, 1, 2, 14, 0, 0);
    const result = add(date, 45, DATE_UNIT_TYPES.SECONDS);
    expect(result.getSeconds()).toBe(45);
  });

  it("Adds minutes to a given date", () => {
    const date = new Date(2024, 1, 2, 14, 0, 0);
    const result = add(date, 50, DATE_UNIT_TYPES.MINUTES);
    expect(result.getMinutes()).toBe(50);
  });

  it("Adds days to a given date", () => {
    const date1 = new Date(2024, 2, 10);
    const date2 = new Date(2024, 6, 20);
    const date3 = new Date(2024, 11, 29);

    expect(add(date1, 7, DATE_UNIT_TYPES.DAYS).getDate()).toBe(17);
    expect(add(date2, 12, DATE_UNIT_TYPES.DAYS).getDate()).toBe(1);
    expect(add(date3, 3, DATE_UNIT_TYPES.DAYS).getFullYear()).toBe(2025);
  });

  it("Adds months to a given date", () => {
    const date1 = new Date(2024, 2, 10);
    const date2 = new Date(2024, 9, 31);
    const date3 = new Date(2024, 4, 18);

    expect(add(date1, 4, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(6);
    expect(add(date2, 5, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(2);
    expect(add(date3, 7, DATE_UNIT_TYPES.MONTHS).getMonth()).toBe(11);
  });

  it("Adds years to a given date", () => {
    const date1 = new Date(2024, 2, 10);
    const date2 = new Date(2010, 5, 15);
    const date3 = new Date(1995, 11, 25);
    
    expect(add(date1, 5, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(2029);
    expect(add(date2, 15, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(2025);
    expect(add(date3, 2, DATE_UNIT_TYPES.YEARS).getFullYear()).toBe(1997);
  });

  it("Correctly determines if a date is within range", () => {
    const date1 = new Date(2024, 4, 10);
    const from1 = new Date(2024, 4, 5);
    const to1 = new Date(2024, 4, 15);

    const date2 = new Date(2024, 6, 25);
    const from2 = new Date(2024, 5, 1);
    const to2 = new Date(2024, 7, 1);

    expect(isWithinRange(date1, from1, to1)).toBe(true);
    expect(isWithinRange(date2, from2, to2)).toBe(true);
  });

  it("Correctly determines if a date is before another date", () => {
    const date1 = new Date(2024, 3, 10);
    const compareDate1 = new Date(2024, 3, 20);

    const date2 = new Date(2012, 8, 15);
    const compareDate2 = new Date(2050, 8, 15);

    expect(isDateBefore(date1, compareDate1)).toBe(true);
    expect(isDateBefore(date2, compareDate2)).toBe(true);
  });
});
