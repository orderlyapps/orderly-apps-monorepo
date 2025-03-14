import { useEffect, useRef, useState } from "react";

export const useCardModal = () => {
  const modalRef = useRef<HTMLIonModalElement>(null);
  const pageRef = useRef(null);

  const [presentingElement, setPresentingElement] =
    useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(pageRef.current);
  }, []);

  return {
    pageProps: {
      ref: pageRef,
    },
    modalProps: {
      ref: modalRef,
      presentingElement: presentingElement!,
    },
  };
};
