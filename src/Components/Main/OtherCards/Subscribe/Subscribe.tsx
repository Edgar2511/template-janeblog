import "./Subscribe.css";

export const Subscribe = () => {
  return (
    <div className="Subscribe">
      <div className="category">Subscribe</div>
      <div className="subSection">
        <p>
          Enter your e-mail below and get notified on the latest blog posts.
        </p>
        <input type="text" placeholder="Enter E-Mail" />
        <button>Subscribe </button>
      </div>
    </div>
  );
};
