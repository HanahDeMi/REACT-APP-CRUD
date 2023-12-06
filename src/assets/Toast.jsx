import React, { useEffect } from 'react';

const Toast = (props) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.toggleShowToast();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [props.showToast, props.toggleShowToast]);

  const handleCloseToast = () => {
    props.toggleShowToast();
  };

  return (
    <div
      className={`position-fixed bottom-0 end-0 p-3 ${props.showToast ? 'show' : 'hide'}`}
    >
      <div
        className={`toast bg-success text-light`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        onClick={handleCloseToast}
      >
        <div className="toast-body">
          <i className="bi bi-check-lg me-2"></i>
          {props.toastMessage}
        </div>
      </div>
    </div>
  );
};

export default Toast;

