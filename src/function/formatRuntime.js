// format 66 mins thành 1h 6m

export const formatRuntime = (runtime) => {
  if (!runtime) return "No information";

  let hour = 0;
  let minute = 0;

  if (runtime <= 59) {
    hour = 0;
    minute = runtime;
  } else if (runtime <= 119) {
    hour = 1;
    minute = runtime - hour * 60;
  } else if (runtime <= 179) {
    hour = 2;
    minute = runtime - hour * 60;
  } else if (runtime <= 239) {
    hour = 3;
    minute = runtime - hour * 60;
  } else if (runtime <= 299) {
    hour = 4;
    minute = runtime - hour * 60;
  } else {
    hour = 0;
    minute = runtime;
  }

  let hourString = hour === 0 ? "" : hour + "h";
  let minuteString = minute === 0 ? "" : minute + "m";

  return `${hourString} ${minuteString}`;
};
