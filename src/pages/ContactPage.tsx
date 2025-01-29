import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="page contact-page">
      <div className="page__header">
        <h1 className="page__title">// Contact Me</h1>
      </div>
      <div className="page__content">
        <form className="contact-form">
          <div className="contact-form__group">
            <label htmlFor="name" className="contact-form__label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-form__input effect"
              placeholder="Your name"
              required
            />
            <span className="focus-border" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="email" className="contact-form__label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              className="contact-form__input effect"
              required
            />
            <span className="focus-border" />
          </div>
          <div className="contact-form__group">
            <label htmlFor="message" className="contact-form__label">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              name="message"
              className="contact-form__textarea effect"
              required
            />
            <span className="focus-border" />
          </div>
          <button type="submit" className="btn contact-form__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
