"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/Modal.js

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

function Modal(_ref) {
  var message = _ref.message,
    closeModal = _ref.closeModal;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modale-overlay"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modale"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-button",
    onClick: closeModal
  }, "X"), /*#__PURE__*/_react["default"].createElement("span", null, message)));
}
Modal.propTypes = {
  /**
   * Le message à afficher dans la modal.
   */
  message: _propTypes["default"].string.isRequired,
  /**
   * Fonction pour fermer la modal.
   */
  closeModal: _propTypes["default"].func.isRequired
};