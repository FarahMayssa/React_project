import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import {
 Link ,NavLink, useHistory

} from "react-router-dom";

export default function NavBar() {

 
  return (
    <div className="NavBar">
      <>
        <Navbar bg="primary" variant="dark">
          <Nav className="mr-auto">
            <Link to="/etudiant ">Accueil</Link>
            <Nav.Link href="#features">Enseignants</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      </>
    </div>
  );
}
