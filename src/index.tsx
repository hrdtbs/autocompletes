import React from "react";
import ReactDOM from "react-dom";

const autoCompletes = [
  {
    value: "name",
    type: "text",
    placeholder: "Sir Timothy John Berners-Lee, OM, KBE, FRS, FREng, FRSA",
  },
  {
    value: "honorific-prefix",
    type: "text",
    placeholder: "Sir",
  },
  {
    value: "given-name",
    type: "text",
    placeholder: "Timothy",
  },
  {
    value: "additional-name",
    type: "text",
    placeholder: "John",
  },
  {
    value: "family-name",
    type: "text",
    placeholder: "Berners-Lee",
  },
  {
    value: "honorific-suffix",
    type: "text",
    placeholder: "OM, KBE, FRS, FREng, FRSA",
  },
  {
    value: "nickname",
    type: "text",
    placeholder: "Tim",
  },
  {
    value: "organization-title",
    type: "text",
    placeholder: "Professor",
  },
  {
    value: "username",
    type: "text",
    placeholder: "timbl",
  },
  {
    value: "new-password",
    type: "password",
    placeholder: "GUMFXbadyrS3",
  },
  {
    value: "current-password",
    type: "password",
    placeholder: "qwerty",
  },
  {
    value: "one-time-code",
    type: "password",
    placeholder: "123456",
  },
  {
    value: "organization",
    type: "text",
    placeholder: "World Wide Web Consortium",
  },
  {
    value: "street-address",
    type: "multiline",
    placeholder: "32 Vassar Street\nMIT Room 32-G524",
  },
  {
    value: "address-line1",
    type: "text",
    placeholder: "32 Vassar Street",
  },
  {
    value: "address-line2",
    type: "text",
    placeholder: "MIT Room 32-G524",
  },
  {
    value: "address-line3",
    type: "text",
    placeholder: "",
  },
  {
    value: "address-level4",
    type: "text",
    placeholder: "",
  },
  {
    value: "address-level3",
    type: "text",
    placeholder: "",
  },
  {
    value: "address-level2",
    type: "text",
    placeholder: "Cambridge",
  },
  {
    value: "address-level1",
    type: "text",
    placeholder: "MA",
  },
  {
    value: "country",
    type: "text",
    placeholder: "US",
  },
  {
    value: "country-name",
    type: "text",
    placeholder: "US",
  },
  {
    value: "postal-code",
    type: "text",
    placeholder: "02139",
  },
  {
    value: "cc-name",
    type: "text",
    placeholder: "Tim Berners-Lee",
  },
  {
    value: "cc-given-name",
    type: "text",
    placeholder: "Tim",
  },
  {
    value: "cc-additional-name",
    type: "text",
    placeholder: "",
  },
  {
    value: "cc-family-name",
    type: "text",
    placeholder: "Berners-Lee",
  },
  {
    value: "cc-number",
    type: "text",
    placeholder: "4114360123456785",
  },
  {
    value: "cc-exp",
    type: "month",
    placeholder: "2014-12",
  },
  {
    value: "cc-exp-month",
    type: "number",
    placeholder: "12",
  },
  {
    value: "cc-exp-year",
    type: "number",
    placeholder: "2014",
  },
  {
    value: "cc-csc",
    type: "text",
    placeholder: "419",
  },
  {
    value: "cc-type",
    type: "text",
    placeholder: "Visa",
  },
  {
    value: "transaction-currency",
    type: "text",
    placeholder: "GBP",
  },
  {
    value: "transaction-amount",
    type: "number",
    placeholder: "401.00",
  },
  {
    value: "language",
    type: "text",
    placeholder: "en",
  },
  {
    value: "bday",
    type: "date",
    placeholder: "1955-06-08",
  },
  {
    value: "bday-day",
    type: "number",
    placeholder: "8",
  },
  {
    value: "bday-month",
    type: "number",
    placeholder: "6",
  },
  {
    value: "bday-year",
    type: "number",
    placeholder: "1955",
  },
  {
    value: "sex",
    type: "text",
    placeholder: "Male",
  },
  {
    value: "url",
    type: "url",
    placeholder: "https://www.w3.org/People/Berners-Lee/",
  },
  {
    value: "photo",
    type: "url",
    placeholder:
      "https://www.w3.org/Press/Stock/Berners-Lee/2001-europaeum-eighth.jpg",
  },
  {
    value: "tel",
    type: "tel",
    placeholder: "+1 617 253 5702",
  },
  {
    value: "tel-country-code",
    type: "text",
    placeholder: "+1",
  },
  {
    value: "tel-national",
    type: "text",
    placeholder: "617 253 5702",
  },
  {
    value: "tel-area-code",
    type: "text",
    placeholder: "617",
  },
  {
    value: "tel-local",
    type: "text",
    placeholder: "2535702",
  },
  {
    value: "tel-local-prefix",
    type: "text",
    placeholder: "253",
  },
  {
    value: "tel-local-suffix",
    type: "text",
    placeholder: "5702",
  },
  {
    value: "tel-extension",
    type: "text",
    placeholder: "1000",
  },
  {
    value: "email",
    type: "text",
    placeholder: "timbl@w3.org",
  },
  {
    value: "impp",
    type: "url",
    placeholder: "irc://example.org/timbl,isuser",
  },
];

const App = () => {
  return (
    <section>
      <h1>The HTML autocomplete attributes</h1>
      <p>
        Specification：
        <a href="https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill">
          HTML Living Standard
        </a>
      </p>
      <form>
        {autoCompletes.map(({ value, type, ...props }) => {
          return type === "multiline" ? (
            <label key={value} id={value}>
              <a href={`#${value}`}>{value}</a>
              <textarea name={value} autoComplete={value} {...props}></textarea>
            </label>
          ) : (
            <label key={value} id={value}>
              <a href={`#${value}`}>{value}</a>
              <input name={value} autoComplete={value} type={type} {...props} />
            </label>
          );
        })}
      </form>
    </section>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
