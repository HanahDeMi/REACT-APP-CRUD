import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from "react-router-dom";

const ContactGrid = (props) => {
  return (
    <div className="row">
      {props.value && props.value.length > 0 ? (
        props.value.map((user, index) => (
          <div
            className="col-sm-4 g-3"
            id={"grid_user_id_" + index}
            key={index}
          >
            <div className="card">
              <div className="card-body">
                <div className="card-title row">
                  <div className="col-8">
                    <Link
                      className="fw-bold text-body"
                      to={{
                        pathname: `contact-details/${index}`,
                        state: user,
                      }}
                    >
                      {user.name}
                    </Link>
                  </div>
                  <div className="col-4 align-items-right d-grid gap-1 d-md-flex justify-content-md-end">
                    <button
                      className="btn btn-light bg-transparent border-0"
                      onClick={() => {
                        props.setEditId(index);
                        props.handleShowEditPage(index);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      className="btn btn-light bg-transparent border-0"
                      onClick={() => {
                        props.deleteData(index);
                      }}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
                <div className="card-text row">
                  <p>{user.email}</p>
                  <p className="mb-0">{user.phone}</p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
};

export default ContactGrid;
