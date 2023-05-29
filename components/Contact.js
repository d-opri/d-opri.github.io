import styled from "styled-components";
import SectionElement from "./Container";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import LinkSection from "./LinkSection";

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
      <StyledContactForm ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </StyledContactForm>
      <LinkSection />
    </SectionElement>
  );
}

const StyledContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  opacity: 0.9;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;

  input {
    width: 100%;
    background-color: #000;
    height: 2.5rem;
    outline: none;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid white;
    &:focus {
      border: 2px solid white;
    }
  }
  textarea {
    background-color: #000;
    width: 100%;
    height: 10rem;
    outline: none;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid white;
    &:focus {
      border: 2px solid white;
    }
  }
  label {
    font-size: 18px;
    line-height: 1.8em;
  }
  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: white;
    border-radius: 20px;
    width: 50%;
    align-self: flex-end;
    color: black;
    border: none;
    &:hover {
      color: black;
      opacity: 0.7;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;
