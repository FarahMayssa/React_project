import "bootstrap/dist/css/bootstrap.min.css";
import "./PfeRequest.css";
import Button from "react-bootstrap/Button";
import { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class PfeRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requests: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/api/pfeRequet/" + this.props.match.params.name,
        {}
      )

      .then((response) => {
        this.setState({
          requests: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="PfeRequest">
        <div class="card-block">
          <div class="title" style={{ fontFamily: "cursive" }}>
            All Requests
          </div>
          <div class="table-responsive">
            <table class="table mb-0 new-patient-table">
              <thead>
                <tr>
                  <th className="name1">Name</th>
                  <th className="email1">Title</th>
                  <th className="CE">Supervisor</th>
                  <th className="phone1">Description</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requests.map((item) => (
                  <tr>
                    <td>
                      <h2>{item.name}</h2>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.supervisor}</td>
                    <td>{item.description}</td>
                    <>
                      <td>
                        <Button
                          variant="outline-success"
                          style={{ marginRight: "20px" }}
                        >
                          Accept
                        </Button>
                        <Button variant="outline-danger">Decline</Button>
                      </td>
                    </>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PfeRequest;
