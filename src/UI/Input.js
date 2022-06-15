import "./Input.scss";
import { Fragment, useState } from "react";
import "../../node_modules/font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MdLock } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const MODAL = ["default", "error"];
const SIZES = ["sm", "md"];

const Input = (props) => {
  const [focusLabel, setFocusLabel] = useState("");
  const {
    error,
    disabled,
    helperText,
    startIcon = "",
    endIcon = "",
    value,
    size,
    fullWidth,
    getrow,
  } = props;
  const getInputError = MODAL.includes(error)
    ? `input--${error}`
    : "input--default";
  const getDisabled = disabled ? true : false;
  const getHelperText = helperText ? "help-block" : "";
  const getStartIcon = startIcon === "phone" ? "input--start-icon" : "";
  const getEndIcon = endIcon === "lock" ? "input--end-icon" : "";
  const getValue = value ? "Text" : "";

  const getSize = SIZES.includes(size)
    ? `input--size-${size}`
    : "input--size-md";
  const getFullWidth = fullWidth ? "fullWidth" : "";
  return (
    <Fragment>
      {error ? (
        <label className={`labelError ${focusLabel}`}>
          Label
          <br></br>
          <input
            onFocus={(e) => {
              setFocusLabel("labelFocusError");
            }}
            onBlur={(e) => {
              setFocusLabel("");
            }}
            type="text"
            className={`${getInputError} ${getStartIcon} ${getEndIcon} ${getSize} ${getFullWidth}`}
            placeholder="  Placeholder"
            disabled={getDisabled}
            defaultValue={getValue}
          ></input>
        </label>
      ) : getrow ? (
        <label className={focusLabel}>
          {" "}
          Label <br></br>{" "}
          <textarea
            onFocus={(e) => {
              setFocusLabel("labelFocus");
            }}
            onBlur={(e) => {
              setFocusLabel("");
            }}
            name="Text1"
            cols="40"
            rows="4"
            placeholder="  Placeholder"
          ></textarea>{" "}
        </label>
      ) : (
        <label className={focusLabel}>
          Label
          <br></br>
          <input
            onFocus={(e) => {
              setFocusLabel("labelFocus");
            }}
            onBlur={(e) => {
              setFocusLabel("");
            }}
            type="text"
            className={`${getInputError} ${getStartIcon} ${getEndIcon} ${getSize} ${getFullWidth}`}
            placeholder="  Placeholder"
            disabled={getDisabled}
            defaultValue={getValue}
          ></input>
        </label>
      )}
      {getHelperText && (
        <span className={`${getInputError}`}>Some interesting text</span>
      )}
      {getStartIcon && (
        <span>
          <FaPhoneAlt className="startIconCustom" />
        </span>
      )}
      {getEndIcon && (
        <span>
          <MdLock className="endIconCustom" />
        </span>
      )}
    </Fragment>
  );
};

export default Input;
