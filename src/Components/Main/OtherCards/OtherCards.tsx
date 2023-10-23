import { Advertise } from "./Advertise/Advertise";
import { Follow } from "./Folllow/Follow";
import { Inspiration } from "./Inspiration/Inspiration";
import "./OtherCards.css";
import { Posts } from "./Posts/Posts";
import { Profile } from "./Profile/Profile";
import { Subscribe } from "./Subscribe/Subscribe";
import { Tags } from "./Tags/Tags";

export const OtherCards = () => {
  return (
    <div className="otherCards">
      <Profile />
      <Posts />
      <Advertise />
      <Tags />
      <Inspiration />
      <Follow />
      <Subscribe />
    </div>
  );
};
