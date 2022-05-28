// format 7 to 7.0, 8.2 giu nguyen

export const formatPoint = (point) => {
  if (!point) return "";
  if (Number.isInteger(point)) return point + ".0";
  return point.toString();
};
