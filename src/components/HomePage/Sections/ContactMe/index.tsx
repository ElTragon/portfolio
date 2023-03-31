import { ChangeEvent, ChangeEventHandler, useState } from "react";
import SectionHeader from "../SectionHeader";
import css from "./index.module.css";

type EmailType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type StateType = {
  isLoading: boolean;
  error: string;
  values: EmailType;
};

const ContactMe = (): JSX.Element => {
  const initValue: EmailType = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const initState: StateType = {
    isLoading: false,
    error: "",
    values: initValue,
  };

  const [state, setState] = useState<StateType>(initState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));

  const onSubmit = () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // try code

    setState((prev) => ({ ...initState }));
  };

  return (
    <div className={css.container}>
      <SectionHeader num={"03"} title={"Contact Me"} />

      <form onSubmit={onSubmit}>
        <h3>Get in touch</h3>
        <input
          type="text"
          name="name"
          value={state.values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="subject"
          value={state.values.subject}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={state.values.email}
          onChange={handleChange}
        />
        <input
          type="textarea"
          name="message"
          value={state.values.message}
          onChange={handleChange}
        />

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default ContactMe;
