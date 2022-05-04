import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Nav({ back=false, route = "/details" }) {
  return (
    <div className="row">
      <div className="col-icon">
        <div className="icon"></div>
      </div>
      {back && 
        <div>
          <Link className="back-button" to="/home">
            <FontAwesomeIcon icon={faXmark} className="icon-back" />
          </Link>
        </div>
      }
    </div>
  );
}
