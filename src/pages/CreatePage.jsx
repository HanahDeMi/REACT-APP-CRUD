import React, { useRef, useState } from "react";

const CreatePage = (props) => {
  const addNameRef = useRef();
  const addNumberRef = useRef();
  const addEmailRef = useRef();

  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const saveData = () => {
    const name = addNameRef.current.value;
    const number = addNumberRef.current.value;
    const email = addEmailRef.current.value;

    // Validation logic for name (letters only)
    if (!/^[A-Za-z ]+$/.test(name)) {
      setNameError("Name should contain letters only");
      return;
    } else {
      setNameError("");
    }

    // Validation logic for contact number (numbers only, 11 digits)
    if (!/^[0-9]{11}$/.test(number)) {
      setNumberError("Contact number should contain 11 digits");
      return;
    } else {
      setNumberError("");
    }

    // Validation logic for email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    const value = { name, phone: number, email };
    props.addData(value);
    props.handleClose();
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: props.show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body my-3">
            <div className="row">
              {["Name", "Contact Number", "Email address"].map(
                (label, index) => (
                  <div key={index} className="col-12 mb-3">
                    <label className="form-label">{label}</label>
                    <input
                      type={label === "Email address" ? "email" : "text"}
                      className={`form-control py-3 ${
                        label === "Name"
                          ? nameError
                            ? "border-danger"
                            : ""
                          : label === "Contact Number"
                          ? numberError
                            ? "border-danger"
                            : ""
                          : emailError
                          ? "border-danger"
                          : ""
                      }`}
                      ref={
                        label === "Name"
                          ? addNameRef
                          : label === "Contact Number"
                          ? addNumberRef
                          : addEmailRef
                      }
                      onChange={() => {
                        // Clear the corresponding error when user starts typing
                        label === "Name"
                          ? setNameError("")
                          : label === "Contact Number"
                          ? setNumberError("")
                          : setEmailError("");
                      }}
                    />
                    <div className="text-danger">
                      {label === "Name"
                        ? nameError
                        : label === "Contact Number"
                        ? numberError
                        : emailError}
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="col-12 align-items-center text-center g-2 mx-auto">
              <button
                className="btn-lg col-5 btn-light bg-transparent border-dark me-1"
                onClick={props.handleClose}
              >
                Cancel
              </button>
              <button
                className="btn-lg col-5 btn-secondary border-0 ms-1"
                onClick={saveData}
              >
                Add Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
