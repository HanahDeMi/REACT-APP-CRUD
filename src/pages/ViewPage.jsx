import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import { useParams, useNavigate } from "react-router-dom";

const ViewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = localStorage.getItem("data");
        const users = JSON.parse(data);

        if (!users || !users[id]) {
          navigate("/404");
        } else {
          setUserData(users[id]);
        }
      } catch (error) {
        navigate("/404");
      }
    };

    // Call the function to fetch data
    fetchData();
  }, [id, navigate]);

  return (
    <>
      {userData && (
        <div className="container py-4">
          <header className="pb-3 mb-4">
            <button
              className="btn btn-light bg-transparent border-0 btn-lg fw-bold mb-5"
              onClick={() => {
                navigate(-1);
              }}
            >
              <i className="bi bi-arrow-left"></i> Customer Information
            </button>

            <div className="row mx-3">
              <div className="col-4">
                <span className="text-secondary">Name</span>
                <h5>{userData.name}</h5>
              </div>
              <div className="col-4">
                <span className="text-secondary">Email Address</span>
                <h5>{userData.email}</h5>
              </div>
              <div className="col-4">
                <span className="text-secondary">Contact Number</span>
                <h5>{userData.phone}</h5>
              </div>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default ViewPage;
