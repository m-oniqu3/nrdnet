"use client";

import { AuthMode } from "@/types/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextValue = {
  isModalOpen: boolean;
  state: State;
  dispatch: Dispatch<ModalAction>;
  openModal(modal: Modal): void;
  closeModal: () => void;
  stopPropagation(e: React.MouseEvent<HTMLElement, MouseEvent>): void;
};

type ModalType = "AUTH" | "POST";

export const ModalContext = createContext<ModalContextValue | null>(null);

enum ModalActionEnum {
  OPEN_MODAL = "OPEN_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

type OpenModalAction = {
  type: ModalActionEnum.OPEN_MODAL;
  payload: Modal;
};

export type CloseModalAction = {
  type: ModalActionEnum.CLOSE_MODAL;
};

export type ModalAction = OpenModalAction | CloseModalAction;

type ModalState<K extends ModalType, P> = {
  type: K;
  payload: P;
};

type AuthModal = ModalState<"AUTH", { mode: AuthMode }>;

type Modal = AuthModal;

type State = {
  modal: Modal | null;
};

function modalReducer(state: State, action: ModalAction) {
  switch (action.type) {
    case ModalActionEnum.OPEN_MODAL:
      return {
        ...state,
        modal: action.payload,
      };
    case ModalActionEnum.CLOSE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
}

function ModalContextProvider({ children }: ModalProviderProps) {
  const [state, dispatch] = useReducer(modalReducer, { modal: null });

  const openModal = useCallback((modal: Modal) => {
    dispatch({
      type: ModalActionEnum.OPEN_MODAL,
      payload: modal,
    });
  }, []);

  const closeModal = useCallback(() => {
    dispatch({ type: ModalActionEnum.CLOSE_MODAL });
  }, []);

  function stopPropagation(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.stopPropagation();
  }

  const contextValue = useMemo(() => {
    return {
      isModalOpen: state.modal !== null,
      state,
      dispatch,
      openModal,
      closeModal,
      stopPropagation,
    };
  }, [state, openModal, closeModal]);

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const ctx = useContext(ModalContext);

  if (!ctx) throw Error("Modal Context Provider missing");

  return ctx;
}

export default ModalContextProvider;
