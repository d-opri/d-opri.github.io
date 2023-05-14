import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

export default function ContactForm() {
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
    <StyledContactForm>
      <h1>Contact Me</h1>
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
  );
}

const StyledContactForm = styled.div`
  width: 40%;
  margin: 6rem;
  outline: dashed white;
  h1 {
    font-size: clamp(1.2rem, 5vw + 0.1rem, 2rem);
    line-height: 2em;
    font-weight: 400;
  }
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    input {
      width: 100%;
      height: 35px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      width: 100%;
      max-height: 100px;
      min-height: 100px;

      outline: none;
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
      width: 100%;
      margin-top: 2rem;
      cursor: pointer;
      background: grey;
      color: white;
      border: none;
      &:hover {
        color: black;
      }
    }
  }

  @media screen and (max-width: 500px) {
    margin-top: 5rem;
    margin-inline: auto;
    width: 90%;
    form,
    input,
    textarea,
    input[type="submit"] {
    }
  }
`;
