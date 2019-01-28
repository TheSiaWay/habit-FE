import React, {Component} from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";


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
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => closeModal()}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>{type}</h2>
          <form>
            <input type="text"
              placeholder="Enter your Username"
              onChange={setInput}
              value={input}/>
            <input type="password" placeholder="Enter your password" />
            <Link to="/test">
              <button onClick={signIn}>
                {type}
              </button>
            </Link>
            <button onClick={closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    )
}

export default LoginForm;