import { formatDate, formatNumber } from '../src/utils';

describe('Utils', () => {
  it('Should format date', () => {
    const data = formatDate('2023-01-10T19:40:39.766Z', 'DD-MM-YYYY');
    expect(data).toBe('10-01-2023');
  });

  it('Should format number', () => {
    const data = formatNumber('200500');
    expect(data).toBe('200,500');
  });
});
