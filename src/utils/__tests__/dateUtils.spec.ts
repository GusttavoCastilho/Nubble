import {dateUtils} from '@utils';
import {sub, add, formatISO, Duration} from 'date-fns';

const MOCKED_NOW = 1600000000000;

function getDateISO(duration: Duration, options?: 'sub' | 'add') {
  options = options || 'sub';
  const time =
    options === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
}

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 30})).toBe('30 min');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 6})).toBe('6 h');
    });

    it('should be displayed in days if less than 1 week ago', () => {
      expect(getDateISO({days: 3})).toBe('3 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 2})).toBe('2 sem');
    });

    it('should be displayed in months if less than 12 months ago', () => {
      expect(getDateISO({months: 10})).toBe('10 mes');
    });

    it('should be displayed in dd/MM/yyyy if less than 12 months ago', () => {
      expect(getDateISO({months: 13})).toBe('13/08/2019');
    });

    it('should be displayed in dd/MM/yyyy if future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('15/09/2020');
    });
  });
});
