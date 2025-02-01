export const generateTime = () => {
  const timeField = [];
  for (let hour = 8; hour <= 18; hour++) {
    timeField.push(`${hour.toString().padStart(2, "0")}:00`);
    timeField.push(`${hour.toString().padStart(2, "0")}:30`);
  }

  return timeField;
};

export const generateWeekdays = () => {
  const days: any = [
    {
      name: "31-decabr",
      date: "dush",
    },
    {
      name: "1-yanvar",
      date: "sesh",
    },
    {
      name: "2-yanvar",
      date: "chor",
    },
    {
      name: "3-yanvar",
      date: "pay",
    },
    {
      name: "4-yanvar",
      date: "jum",
    },
    {
      name: "5-yanvar",
      date: "shanba",
    },
    {
      name: "6-yanvar",
      date: "yak",
    },
  ];

  return days;
};
