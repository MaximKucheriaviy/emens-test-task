import { useSelector } from "react-redux";

export const useKeyword = () => {
  return useSelector((state) => state.keyword.value);
};
