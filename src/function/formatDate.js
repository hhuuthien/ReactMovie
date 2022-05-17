// format date 2022-05-13 thành 13/05/2022

export const formatDate = (stringDate) => {
  if (!stringDate) return "";
  let temp = stringDate.split("-");
  return `${temp[2]}/${temp[1]}/${temp[0]}`;
};
