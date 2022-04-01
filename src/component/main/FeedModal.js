import React from "react";
import "./FeedModal.css";
import FeedModalContents from "./FeedModalContents";

const Modal = (props) => {
  const { open, close, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main style={{ paddingBottom: -16 }}>
            <p>{props.children}</p>
            <FeedModalContents />
          </main>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;
