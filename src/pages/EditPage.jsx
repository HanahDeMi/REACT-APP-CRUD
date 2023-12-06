import React, { useEffect, useState } from "react";

const EditPage = (props) => {
  const [rawEditId, setRawEditId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof props.editId !== "undefined" && props.editId != null) {
          setRawEditId(props.editId);
          const localData = localStorage.getItem("data");
          let users = JSON.parse(localData);
          document.querySelector("#editName").value = users[props.editId].name;
          document.querySelector("#editNumber").value =
            users[props.editId].phone;
          document.querySelector("#editEmail").value =
            users[props.editId].email;
        }
      } catch (error) {

      }
    };

    fetchData();
  }, [props.editId]);

  const saveData = () => {
    const rawData = {
      index: rawEditId,
      value: {
        name: document.querySelector("#editName").value,
        phone: document.querySelector("#editNumber").value,
        email: document.querySelector("#editEmail").value,
      },
    };

    props.editData(rawData);
    props.handleCloseEditPage();
  };

  return (
    <div
      className={`modal ${props.showEditPage ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: props.showEditPage ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body my-3">
            <div className="row">
              <div className="col-12 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control py-3"
                  id="editName"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Contact Number</label>
                <input
                  type="text"
                  className="form-control py-3"
                  id="editNumber"
                />
              </div>
              <div className="col-12 mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control py-3"
                  id="editEmail"
                />
              </div>
            </div>
            <div className="col-12 align-items-center text-center g-2 mx-auto">
              <button
                className="btn-lg col-5 btn-light bg-transparent border-dark me-1"
                onClick={props.handleCloseEditPage}
              >
                Cancel
              </button>
              <button
                className="btn-lg col-5 btn-secondary border-0 ms-1"
                onClick={saveData}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
