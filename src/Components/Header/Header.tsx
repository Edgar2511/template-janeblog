import "./Header.css";

export const Header = () => {
  return (
    <div className="Header">
      <div className="headerTitle">
        <h1>JANE BLOGLIFE</h1>
        <p>
          Welcome to the blog of
          <span>Jane's world</span>
        </p>
      </div>
      <div className="headerImage">
        <div className="imageWrapper">
          <div className="imageTitle">
            <span>Janes's</span>
            <p>FASHION BLOG</p>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
