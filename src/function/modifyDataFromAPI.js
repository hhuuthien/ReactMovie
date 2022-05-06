// nhận dữ liệu mảng movie từ API, bổ sung thuộc tính extraTime, sau đó sắp xếp theo thứ tự thời gian phát hành

// sắp xếp phim mới ra mắt trước, áp dụng cho movie now playing
function compare1(a, b) {
  if (a.extraTime < b.extraTime) {
    return 1;
  }
  if (a.extraTime > b.extraTime) {
    return -1;
  }
  return 0;
}

// sắp xếp phim sắp ra mắt trước, áp dụng cho movie up coming
function compare2(a, b) {
  if (a.extraTime < b.extraTime) {
    return -1;
  }
  if (a.extraTime > b.extraTime) {
    return 1;
  }
  return 0;
}

export const modifyDataFromAPI = (arrayFromAPI, mode) => {
  let newArray = arrayFromAPI.map((movie) => {
    let temp = movie.release_date.split("-");
    return {
      ...movie,
      extraTime: Number(temp[0] + temp[1] + temp[2]),
    };
  });

  let sortedArray = [];

  if (mode === 1) sortedArray = newArray.sort(compare1);
  else if (mode === 2) sortedArray = newArray.sort(compare2);
  return sortedArray;
};
