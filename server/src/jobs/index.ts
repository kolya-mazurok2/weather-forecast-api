import cron from "node-cron";
import { schedule as scheduleTime } from "./constants";
import {
  sync5day3hoursForecasts,
  syncCurrentForecasts,
} from "../services/task/forecast.task";

export default () => {
  cron.schedule(scheduleTime.every1Hour, syncCurrentForecasts);

  cron.schedule(scheduleTime.every3Hours, sync5day3hoursForecasts);
};
