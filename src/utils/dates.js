const date = new Date()
const theDayOfTheMonthOnNextWeek = date.getDate() + 7;
date.setDate(theDayOfTheMonthOnNextWeek)
export const nextSevenDays = date.toLocaleDateString().slice(0, 15);
export const today = new Date().toLocaleDateString().slice(0, 15);
export const lastSevenDays = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString().slice(0, 15)