export const isTimeFieldAvailable = (
  date: any,
  time: any,
  appointments: any
) => {
  return !appointments?.some(
    (app: any) => app.date === date && app.time === time
  );
};
export const setAppointmentForTimeField = (
  date: any,
  time: any,
  appointments: any
) => {

  return appointments.find(
    (app: any) => app.date === date && app.time === time
  );
};
