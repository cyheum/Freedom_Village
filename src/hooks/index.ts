import { useSelector } from "react-redux";
import { IStore } from "modules/store.interface";

export const useGetData = () => {
  const { currentData } = useSelector(({ mainStore }: IStore) => mainStore);
  return currentData;
};

export const useGetActiveModal = () => {
  const activeModal = useSelector(
    ({ mainStore: { activeModal } }: IStore) => activeModal
  );
  return activeModal;
};
