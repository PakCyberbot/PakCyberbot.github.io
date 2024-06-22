import "./button.css";
import { Link } from "react-router-dom";

function Buttons() {
  return (
    <div>
    <div className="container button-container">
      <a href="https://pastebin.com/LyL4UA6q" className="btn sec">
        pakcyberbot@proton.me (PGP PublicKey)
      </a>
      {/* <Link to="/content" className="btn pri">
        Skills
      </Link>

      <Link to="/content" className="btn pri">
        My Content
      </Link> */}
      
      
    </div>
    <div className="container button-container">

    <a href="mailto:pakcyberbot@proton.me?subject=Request%20for%20your%20Resume&body=FILL%20ALL%20THE%20%5BPLACEHOLDERS%5D%0D%0A%0D%0AHi%20PakCyberbot,%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20to%20request%20your%20resume%20for%20%5Bpurpose%20of%20the%20request,%20e.g.,%20a%20job%20opening%20at%20%5BCompany%20Name%5D%20or%20an%20opportunity%20to%20collaborate%20on%20a%20project%5D.%0D%0A%0D%0A%5Bmention%20your%20authenticity%20like%20website,%20reputation,%20or%20any%20relevant%20information%20that%20proves%20your%20credibility%5D.%0D%0A%0D%0AIf%20possible,%20could%20you%20please%20share%20your%20updated%20resume%20with%20me?%20It%20would%20help%20us%20evaluate%20your%20fit%20for%20the%20role/opportunity.%0D%0A%0D%0AThank%20you%20for%20considering%20this%20request.%20I%20look%20forward%20to%20hearing%20from%20you%20soon.%0D%0A%0D%0ABest%20regards,%0D%0A%0D%0A%5BRequester's%20Name%5D%0D%0A%5BRequester's%20Position%5D%0D%0A%5BRequester's%20Company/Organization%5D%0D%0A%5BContact%20Information%5D" className="btn pri">
      Request My Resume
    </a>
  </div>
  </div>
  );
}

export default Buttons;
