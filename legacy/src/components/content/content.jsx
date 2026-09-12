import "./content.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineMedium } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import MyContentList from './MyContentList';
import Challenges from "./Challenges";
import { SiHackthebox } from "react-icons/si";

// https://www.hackthebox.com/api/v4/profile/content/1098862
function Content() {
  return (
    <div id="content" className="container content-container">
      <script src="https://tryhackme.com/badge/749337"></script>
    

      <h1>Explore my Content</h1>
      <div className="content-links">
        <a
          href="https://www.youtube.com/@PakCyberbot"
          className="content youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>PakCyberbot</span>
          </h2>
          <MyContentList category='youtube' />

        </a>

        <a
          href="https://pakcyberbot.medium.com/"
          className="content medium"
          target={"blank"}
        >
          <AiOutlineMedium className="icon" />
          <h2>
            medium <span>PakCyberbot</span>
          </h2>
          <MyContentList category='medium' />

        </a>

        

        <a href="#" className="content">
          <SiHackthebox className="icon" />
          <h2>
            Challenges <span>PakCyberbot</span>
          </h2>
          <Challenges/>
        </a>
      </div>
    </div>
  );
}

export default Content;
