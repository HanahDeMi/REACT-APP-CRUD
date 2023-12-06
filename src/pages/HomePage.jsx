import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import ContactGrid from "../components/ContactGrid";
import ContactList from '../components/ContactList'
import CreatePage from "./CreatePage";
import EditPage from "./EditPage";

export class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <h1>Customer Information</h1>
            <p className="fs-5 col">
              Your list of contacts appear here. To add a new contact, click on
              the Add New Contact button.
            </p>
          </div>
          <div className="col-4 position-relative">
            <button
              className="position-absolute bottom-0 end-0 btn btn-primary btn-lg"
              onClick={() => {
                this.props.handleShow();
              }}
            >
              Add New Contact
            </button>
          </div>
        </div>

        <div className="row my-3 g-5">
          <div className="col-12 align-items-right d-grid gap-1 d-md-flex justify-content-md-end">
            <button
              className={
                this.props.toggleView
                  ? "btn-light border border-dark btn-lg"
                  : "btn-light border border-light btn-lg"
              }
              onClick={() => {
                this.props.setToggle(true);
              }}
            >
              <i className="bi bi-grid"></i>
            </button>
            <button
              className={
                !this.props.toggleView
                  ? "btn-light border border-dark btn-lg"
                  : "btn-light border border-light btn-lg"
              }
              onClick={() => {
                this.props.setToggle(false);
              }}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>

        {this.props.toggleView ? (
          <ContactGrid
            value={this.props.data}
            editData={this.props.editData}
            deleteData={this.props.deleteData}
            handleShowEditPage={this.props.handleShowEditPage}
            handleCloseEditPage={this.props.handleCloseEditPage}
            editId={this.props.editId}
            setEditId={this.props.setEditId}
          />
        ) : (
          <ContactList
            value={this.props.data}
            editData={this.props.editData}
            deleteData={this.props.deleteData}
            handleShowEditPage={this.props.handleShowEditPage}
            handleCloseEditPage={this.props.handleCloseEditPage}
            editId={this.props.editId}
            setEditId={this.props.setEditId}
          />
        )}
        <CreatePage
          show={this.props.show}
          handleShow={this.props.handleShow}
          handleClose={this.props.handleClose}
          addData={this.props.addData}
        />
        <EditPage
          showEditPage={this.props.showEditPage}
          handleShowEditPage={this.props.handleShowEditPage}
          handleCloseEditPage={this.props.handleCloseEditPage}
          editData={this.props.editData}
          editId={this.props.editId}
        />
      </div>
    );
  }
}
