import React, { PropsWithChildren } from "react";
// import styled from "styled-components";
import styled from "styled-components";

interface ModalDefaultType {
  onClickToggleModal: () => void;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer style={{ transitionDuration: "4s" }}>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  // transition: 2s;
  border-radius: 20px;
`;

const DialogBox = styled.dialog`
  display: flex;
  flex-direction: column;
  // transition: 2s;
  align-items: center;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  width: "80%";
  height: "80%";
`;

const Backdrop = styled.div`
  border-radius: 20px;
  // transition: 2s;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;

export default Modal;

// const LoginModal2 = () => {
//   return (
//     <div>
//       <Modal
//         // show={show}
//         // onHide={() => setShow(false)}
//         dialogClassName="modal-90w"
//         aria-labelledby="example-custom-modal-styling-title"
//       >
//         <Modal.Header>
//           <Modal.Title id="example-custom-modal-styling-title">
//             Custom Modal Styling
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>
//             Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//             commodi aspernatur enim, consectetur. Cumque deleniti temporibus
//             ipsam atque a dolores quisquam quisquam adipisci possimus
//             laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
//             accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
//             reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
//             deleniti rem!
//           </p>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// };
// export default LoginModal2;
