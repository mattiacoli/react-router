import { Link } from "react-router-dom";
import Home from "./Home";

export default function NotFound() {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid text-center py-5">
          <h1 className="display-5 fw-bolder">4&#128559;4</h1>
          <h2>Page Not Found </h2>
          <p className="col-12 fs-4 text-center">
            Opss! The page you were looking doesn't exist!
          </p>
          <Link to={'/'} className="btn btn-primary btn-lg" type="button">
            Back to Home
          </Link>
        </div>
      </div>
    </>
  )

}