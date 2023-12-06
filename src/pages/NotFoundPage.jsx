import React from 'react';
import { useNavigate } from 'react-router-dom';
import '/Users/hannah.rose.miranda/Desktop/react-contact-app/src/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="page-404">
        <div class="outer">
          <div class="middle">
            <div class="inner">
              <div class="inner-circle">
                <i class="fa fa-home"></i>
                <span>404</span>
              </div>
              <span class="inner-status">Oops! Page Not Found</span>
              <span class="inner-detail">
                Sorry, the requested page is not found. Please check the URL again.
                <button
                  class="btn btn-info mtl"
                  onClick={() => navigate('/')}
                >
                  <i class="fa fa-home"></i>&nbsp; Return home
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

