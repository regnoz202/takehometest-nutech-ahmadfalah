import React from "react";

export default function ModalDelete(props) {
  return (
    <>
      {/* Open the modal using ID.showModal() method */}
      <button
        className="m-5 bg-gray-400 btn"
        onClick={() => window.my_modal_1.showModal()}
      >
        DELETE
      </button>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="flex flex-wrap justify-end">
            <div className="modal-action">
            <button className="mx-5 bg-gray-400 btn" onClick={props.click}>DELETE ITEM</button>
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </div>
          </div>
        </form>
      </dialog>
    </>
  );
}
