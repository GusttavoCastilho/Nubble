import {dateUtils} from '@utils';
import {sub, formatISO} from 'date-fns';

const MOCKED_NOW = 1600000000000;

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      const time = sub(Date.now(), {minutes: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 min');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      const time = sub(Date.now(), {hours: 6});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('6 h');
    });

    it('should be displayed in days if less than 1 week ago', () => {
      const time = sub(Date.now(), {days: 3});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('3 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      const time = sub(Date.now(), {weeks: 2});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('2 sem');
    });

    it('should be displayed in months if less than 12 months ago', () => {
      const time = sub(Date.now(), {months: 10});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('10 mes');
    });

    it('should be displayed in dd/MM/yyyy if less than 12 months ago', () => {
      const time = sub(Date.now(), {months: 13});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('13/08/2019');
    });
  });
});
