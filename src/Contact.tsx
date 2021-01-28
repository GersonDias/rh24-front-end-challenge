export const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <p>
          send your code/instructions to{" "}
          <a href="mailto:gerson@metal-heaven.com">gerson@metal-heaven.com</a>
          {", "}
          <a href="https://www.linkedin.com/in/gersondias/">
            ping me at linkedin
          </a>
        </p>
        <p>
          or submit a pull request on{" "}
          <a href="https://github.com/GersonDias/rh24-front-end-challenge">
            {" "}
            GitHub
          </a>
        </p>
        <a href="https://www.metal-heaven.com/rhodium24/" target="blank">
          <img
            alt="Rh24 logo"
            src="https://www.metal-heaven.com/wp-content/uploads/2019/09/icon_rh24-2.png"
          />
        </a>
      </div>
    </section>
  );
};
