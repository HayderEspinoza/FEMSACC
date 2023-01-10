import dayjs from 'dayjs';

export const date = {
  format: (data: string, format: string) => {
    return dayjs(data).format(format);
  },
};
