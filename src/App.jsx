import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import { HomePage } from "./pages/HomePage";
import ViewPage from "./pages/ViewPage";
import NotFoundPage from "./pages/NotFoundPage";
import Toast from "./assets/Toast";

function App() {
  const [toggleView, setToggleView] = useState(
    localStorage.getItem("view") === "false" ? false : true
  );
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const [showEditPage, setShowEditPage] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("data") !== null) {
      const localData = localStorage.getItem("data");
      const users = JSON.parse(localData);
      setData(users);
    } else {
      // Function to fetch data using Axios
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setData(response.data);
          localStorage.setItem("data", JSON.stringify(response.data));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      // Call the function to fetch data
      fetchData();
    }
  }, []);

  const setToggle = (state) => {
    setToggleView(state);
    localStorage.setItem("view", state);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEditPage = () => setShowEditPage(false);
  const handleShowEditPage = () => setShowEditPage(true);
  const toggleShowToast = () => setShowToast(!showToast);

  const deleteData = (index) => {
    const localData = localStorage.getItem("data");
    let users = JSON.parse(localData);
    users.splice(index, 1);
    setData(users);
    localStorage.setItem("data", JSON.stringify(users));
    setToastMessage("Successfully removed contact.");
    toggleShowToast();
  };

  const editData = (raw) => {
    const localData = localStorage.getItem("data");
    let users = JSON.parse(localData);
    users[raw.index] = raw.value;
    setData(users);
    localStorage.setItem("data", JSON.stringify(users));
    setToastMessage("Changes Saved.");
    toggleShowToast();
  };

  const addData = (value) => {
    const localData = localStorage.getItem("data");
    let users = JSON.parse(localData);
    users.push(value);
    setData(users);
    localStorage.setItem("data", JSON.stringify(users));
    setToastMessage("Successfully added a new contact.");
    toggleShowToast();
  };

  return (
    <div className="col mx-auto p-4 py-md-5">
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path=""
              element={
                <HomePage
                  toggleView={toggleView}
                  setToggle={setToggle}
                  data={data}
                  show={show}
                  handleShow={handleShow}
                  handleClose={handleClose}
                  deleteData={deleteData}
                  addData={addData}
                  editData={editData}
                  showEditPage={showEditPage}
                  handleCloseEditPage={handleCloseEditPage}
                  handleShowEditPage={handleShowEditPage}
                  editId={editId}
                  setEditId={setEditId}
                />
              }
            />
            <Route path="contact-details/:id" element={<ViewPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Toast
        showToast={showToast}
        toggleShowToast={toggleShowToast}
        toastMessage={toastMessage}
      />
    </div>
  );
}

export default App;
