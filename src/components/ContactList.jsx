import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { Link } from "react-router-dom";

const ContactList = (props) => {
  return (
    <div className="row">
      <table className="table table-hover table-bordered">
        <thead>
          <tr className="table-primary">
            {<th scope="col" className="align-middle">#</th>}
            <th scope="col" className="align-middle">
              Name
            </th>
            <th scope="col" className="align-middle">
              Contact Number
            </th>
            <th scope="col" className="align-middle">
              Email Address
            </th>
            <th scope="col" className="align-middle">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {props.value && props.value.length > 0 ? (
            props.value.map((user, index) => (
              <tr id={"list_user_id_" + index} key={index}>
                {<td className="align-middle">{index}</td>}
                <td className="align-middle">
                  <Link
                    className="text-body"
                    to={{
                      pathname: `contact-details/${index}`,
                      state: user,
                    }}
                  >
                    {user.name}
                  </Link>
                </td>
                <td className="align-middle">{user.phone}</td>
                <td className="align-middle">{user.email}</td>
                <td className="align-middle">
                  <button
                    className="btn btn-light bg-transparent border-0 me-2"
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
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th scope="row" colSpan={5} className="text-center">
                No data found.
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
