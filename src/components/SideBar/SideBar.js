import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css";

export default function SideBar() {
  return (
    <SideNav style={{ color: "black" }} onSelect={(selected) => {}}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href={{}}> Accueil</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href={{}}> Les etudiants</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href={{}}> Les enseignants</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href={{}}> Les Pfes</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="home">
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>
            <a href={{}}> Les années universitaires</a>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
