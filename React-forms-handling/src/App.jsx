import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(4);
    console.log(data);
  };

  return (
    <div className="container-fluid mt-3">
      {isSubmitting && <div>Loading...</div>}
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}{" "}
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username", {
              required: { value: true, message: "This feild is required!" },
              minLength: { value: 4, message: "Minimum Length should be 4" },
              maxLength: { value: 12, message: "Maximum Length should be 12" },
            })}
          />
          {errors.username && <div> {errors.username.message} </div>}{" "}
        </Form.Group>
        {/* include validation with required or other standard HTML validation rules */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            {...register("password", {
              required: { value: true, message: "This feild is required!" },
            })}
          />
          {/* errors will return when field validation fails  */}
          {errors.password && <div>This field is required</div>}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>{" "}
      </Form>
    </div>
  );
}
