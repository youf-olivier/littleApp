import GitHubCorner from "./GithubCorner";
import logo from "shared/images/oidc.jpg";
import bannner from 'shared/images/summit.png';

import './style.scss';

const Header = () => (
  <>
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" className="oidc-image"/>
      <GitHubCorner />
    </header>
    <img src={bannner} className="app-banner" alt="logo" />
  </>
);

export default Header;
