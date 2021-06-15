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
        <Navbar bg="primary" variant="light">
          <Nav className="mr-auto">
          

            <Link to="/ ">Home</Link>
            <Link to="/admin/prof">Profs</Link>
            <Link to="/admin/students">Students</Link>
            <Link to="/admin/pfes">Pfes</Link>
            <Link href="#pricing">Admin</Link>
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
