import styled from "styled-components";
import SectionElement from "./Container";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkSection from "../LinkSection";

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
    <SectionElement id="Contact" title="Contact">
      <LinkSection />
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
    </SectionElement>
  );
}

const StyledContactForm = styled.span`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  text-align: left;
  opacity: 0.9;
  padding: 2rem 1rem;

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
    opacity: 0.7;
    font-size: 16px;
    line-height: 1.8em;
  }
  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: grey;
    color: white;
    border: none;
    &:hover {
      color: black;
      opacity: 0.7;
    }
  }
`;
