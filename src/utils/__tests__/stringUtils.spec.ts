import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize first letter of each word', () => {
      const name = stringUtils.capitalizeFirstLetter('hello world');

      expect(name).toBe('Hello World');
    });

    it('should remove extra spaces', () => {
      const name = stringUtils.capitalizeFirstLetter('  hello world  ');

      expect(name).toBe('Hello World');
    });
  });
});
