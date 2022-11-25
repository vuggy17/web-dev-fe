import moment from "moment";
import "moment/locale/vi";

moment.locale("vi");

export function parseShortTime(time) {
  return moment(new Date(time)).format("DD.MM.YYYY");
}

export function parseDayTime(time) {
  return moment(new Date(time)).format("LLLL");
}

export function timeFromNow(time) {
  return moment(time, "YYYYMMDD").fromNow();
}
