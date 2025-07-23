import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

import classes from "./Form.module.css";

const Form = () => {
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k8cyzqb",
        "template_iailzhj",
        form.current,
        "Z8qew9rch6IqEM9zu"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Your message is sent!");
          toast.success("Your message is sent!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        },
        (error) => {
          console.log(error.text);
          // alert("Your message is not sent!");
          toast.error("Your message is not sent!", {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      );
    e.target.reset();
  };
  return (
    <form
      className={`${classes.form} mt-5`}
      ref={form}
      onSubmit={submitHandler}
    >
      <div className={`${classes.form__group}`}>
        <input type="text" placeholder="Your Name" name="user_name" required />
      </div>
      <div className={`${classes.form__group}`}>
        <input
          type="email"
          placeholder="Email Address"
          name="user_email"
          required
        />
      </div>
      <div className={`${classes.form__group}`}>
        <textarea
          type="text"
          rows={8}
          placeholder="Message"
          name="message"
          required
        />
      </div>

      <button className="primary__btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
