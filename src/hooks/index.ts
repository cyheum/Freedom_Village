import { useSelector } from "react-redux";
import { IStore } from "modules/store.interface";

export const useGetData = () => {
  const data = useSelector(({ mainStore: { data } }: IStore) => data);
  return data;
};

export const useGetActiveModal = () => {
  const activeModal = useSelector(
    ({ mainStore: { activeModal } }: IStore) => activeModal
  );
  return activeModal;
};
