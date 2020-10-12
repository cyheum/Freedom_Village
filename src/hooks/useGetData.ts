import { useSelector } from "react-redux";

export const useGetData = () => {
  const data = useSelector(({ mainStore: { data } }: any) => data);
  return data;
};
