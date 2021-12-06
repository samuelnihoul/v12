import React, { useState } from "react";
import { Alert } from "react-bootstrap";
"react-icofont";

const AlertDismissible = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <Alert variant={variant}>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => setShow(!show)}
      >
        <i class="icofont-close"></i>
      </button>
      {children}
    </Alert>
  ) : null;
};

export default AlertDismissible;
