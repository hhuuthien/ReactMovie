import { genres } from "../data/genreData";

export const findGenreByID = (id) => {
  let genre = genres.find((genre) => genre.id === id);
  if (genre) {
    return genre.name;
  } else {
    return "Undefined";
  }
};
