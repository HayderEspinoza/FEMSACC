import dayjs from 'dayjs';

export const formatDate = (data: string, format: string) => {
  return dayjs(data).format(format);
};
