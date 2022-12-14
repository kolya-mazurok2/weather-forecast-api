export const todayStartDate = () => {
  const date = new Date();
  date.setUTCHours(0, 0, 0, 0);

  return date;
};

export const todayEndDate = () => {
  const date = new Date();
  date.setUTCHours(23, 59, 59, 999);

  return date;
};

export const getNDaysAgo = (n = 1) => {
  const date = new Date();
  date.setDate(date.getDate() - n);

  return date;
};
