// src/components/Modal.js

import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

/**
 * BasicModal component renders a modal dialog with a message and a close button.
 *
 * @component
 * @example
 * const message = "Your action was successful!";
 * const closeModal = () => console.log('Modal closed');
 * return (
 *   <BasicModal message={message} closeModal={closeModal} />
 * )
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.message - Le message à afficher dans la modal.
 * @param {Function} props.closeModal - Fonction pour fermer la modal.
 *
 * @returns {JSX.Element} Le composant Modal.
 */

export default function Modal({ message, closeModal }) {
  return (
    <div className="modale-overlay">
      <div className="modale">
        <button className="close-button" onClick={closeModal}>
          X
        </button>
        <span>{message}</span>
      </div>
    </div>
  );
}

Modal.propTypes = {
  /**
   * Le message à afficher dans la modal.
   */
  message: PropTypes.string.isRequired,

  /**
   * Fonction pour fermer la modal.
   */
  closeModal: PropTypes.func.isRequired,
};
