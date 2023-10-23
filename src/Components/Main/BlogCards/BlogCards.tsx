import "./BlogCards.css";

export const BlogCards = () => {
  return (
    <div className="blogCards">
      <div className="blogCard">
        <div className="cardTitle">
          <h3>Title Heading</h3>
          <p>
            Title description, <span>May 2, 2016</span>
          </p>
        </div>
        <div className="imageContainer">
          <img src="https://www.w3schools.com/w3images/girl_hat.jpg" alt="#" />
        </div>
        <div className="cardDescription">
          <p>
            <strong>More Hats!</strong>I am crazy about hats these days. Some
            text about this blog entry. Fashion fashion and mauris neque quam,
            fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id
            lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan
            tortor cursus at. Phasellus sed ultricies mi non congue ullam
            corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo
            condimentum, porta lectus vitae, ultricies congue gravida diam non
            fringilla.
          </p>
          <p>
            Sunt in culpa qui officia deserunt mollit anim id est laborum
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
          </p>
        </div>
        <div className="rewiew">
          <button className="likeBtn">Like</button>
          <button className="repliesbtn">Replies</button>
        </div>
      </div>
      <div className="blogCard">
        <div className="cardTitle">
          <h3>Title Heading</h3>
          <p>
            Title description, <span>April 23, 2016</span>
          </p>
        </div>
        <div className="imageContainer">
          <img src="https://www.w3schools.com/w3images/man_hat.jpg" alt="#" />
        </div>
        <div className="cardDescription">
          <p>
            <strong>Hats!</strong>The trend this summer is hats for men!
          </p>
          <p>
            Some text about this blog entry. Fashion fashion and mauris neque
            quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis
            nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
            accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
            justo condimentum, porta lectus vitae, ultricies congue gravida diam
            non fringilla.
          </p>
        </div>
        <div className="rewiew">
          <button className="likeBtn">Like</button>
          <button className="repliesbtn">Replies</button>
        </div>
      </div>
      <div className="blogCard">
        <div className="cardTitle">
          <h3>Title Heading</h3>
          <p>
            Title description, <span>April 7, 2016</span>
          </p>
        </div>
        <div className="imageContainer">
          <img src="https://www.w3schools.com/w3images/runway.jpg" alt="#" />
        </div>
        <div className="cardDescription">
          <p>
            <strong>Dont miss!</strong>The runway in New York City this weekend
            is gonna be legendary!
          </p>
          <p>
            Some text about this blog entry. Fashion fashion and mauris neque
            quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis
            nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac
            accumsan tortor cursus at. Phasellus sed ultricies mi non congue
            ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae
            justo condimentum, porta lectus vitae, ultricies congue gravida diam
            non fringilla.
          </p>
        </div>
        <div className="rewiew">
          <button className="likeBtn">Like</button>
          <button className="repliesbtn">Replies</button>
        </div>
      </div>
    </div>
  );
};
