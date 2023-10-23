import "./Posts.css";

export const Posts = () => {
  return (
    <div className="container">
      <div className="category">Popular Posts</div>
      <div className="postCards">
        <div className="postCard">
          <img
            src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
            alt="#"
          />

          <div className="post">
            <p>Denim</p>
            <p>Sed mattis nunc</p>
          </div>
        </div>
        <hr />
        <div className="postCard">
          <img
            src="https://www.w3schools.com/w3images/bandmember.jpg"
            alt="#"
          />

          <div className="post">
            <p>Sweaters</p>
            <p>Praes tinci sed</p>
          </div>
        </div>
        <hr />
        <div className="postCard">
          <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="#" />

          <div className="post">
            <p>Workshop</p>
            <p>Ultricies congue</p>
          </div>
        </div>
        <hr />
        <div className="postCard">
          <img
            src="https://www.w3schools.com/w3images/avatar_smoke.jpg"
            alt="#"
          />

          <div className="post">
            <p>Trends</p>
            <p>Lorem ipsum dipsum</p>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};
