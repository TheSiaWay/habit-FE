import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import './index.css';

Modal.setAppElement('#app');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

const LoginForm = ({signIn, isModalOpen, closeModal, input, setInput, type }) => {
    return (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => closeModal()}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal">
            <h1 className="modal--header">Habits</h1>
            <form>
              <input type="email"
                className="modal--input"
                placeholder="Email"
                onChange={setInput}
                value={input} />
              <input type="password"
                className="modal--input"
                placeholder="Password" />
              <Link to="/test">
                <button
                  className="modal--button modal--button__primary"
                  onClick={signIn}>
                  {type}
                </button>
              </Link>
              <button onClick={closeModal}
                className="modal--button modal--button__secondary">Cancel</button>
            </form>
          </div>
        </Modal>
    )
}

export default LoginForm;