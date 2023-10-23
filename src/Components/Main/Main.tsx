import { Header } from "../Header/Header";
import { BlogCards } from "./BlogCards/BlogCards";
import "./Main.css";
import { OtherCards } from "./OtherCards/OtherCards";

export const Main = () => {
  return (
    <div className="Main">
      <BlogCards />
      <OtherCards />
    </div>
  );
};
