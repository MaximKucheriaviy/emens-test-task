export const validate = (
  line = "",
  { rejectSymbols = [], rejectStartSymbols = [] }
) => {
  for (let i = 0; i < rejectStartSymbols.length; i++) {
    if (line.startsWith(rejectStartSymbols[i])) {
      return false;
    }
  }
  for (let i = 0; i < rejectSymbols.length; i++) {
    if (line.includes(rejectSymbols[i])) {
      return false;
    }
  }
  return true;
};
