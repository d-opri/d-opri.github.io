import styled from "styled-components";
import HiddenElement from "./Container";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <HiddenElement id="Contact" title="Contact">
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </StyledContactForm>
    </HiddenElement>
  );
}

const StyledContactForm = styled.span`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: left;

  input {
    width: 100%;
    height: 2.5rem;
    outline: none;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }
  textarea {
    width: 100%;
    height: 10rem;
    outline: none;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    &:focus {
      border: 2px solid rgba(0, 206, 158, 1);
    }
  }
  label {
    margin-top: 1rem;
  }
  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: grey;
    color: white;
    border: none;
    &:hover {
      color: black;
    }
  }
`;
