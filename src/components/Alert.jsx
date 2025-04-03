import { useAlert } from "../contexts/AlertContext"

export default function Alert() {
  const { alert = {}, setAlert } = useAlert()

  const { type, message } = alert


  if (!message) return null

  return (
    <div className="container">

      <div className="alert alert-danger text-center" role="alert">
        <h1 className="text-center my-3 fw-bolder">Alert</h1>
        <p className="text-center">{message}</p>
      </div>
    </div>
  )
}
