const replaceList = ["<", ">", "/"];

export const safeString = (str: string) => {
  replaceList.forEach((el) => {
    str = str.replaceAll(el, "");
  });
  return str;
};
