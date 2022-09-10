import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({
  children,
  id = "moida-portal",
  element = "div",
}: {
  children: React.ReactNode;
  id: `${string}-portal`;
  element?: keyof HTMLElementTagNameMap;
}) => {
  const [container] = useState(() => {
    const el = document.createElement(element);
    el.setAttribute("id", id);
    return el;
  });

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return createPortal(children, container);
};

export default Portal;
