import React from "react"
import {Table} from "semantic-ui-react"
import axios from "axios"
import PeopleInfo from "./PeopleInfo"

class People extends React.Component {
  state = {people: []}

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      this.setState({people: res.data.results})
      }
    )
  }

  render () {
  return (
    <>
    <br />
    <h1 style={{textAlign: "center"}}> Star Wars </h1>
    <br />

    <Table style={{width: "70%", margin: "0 auto"}}>
    <Table.Body>
    {this.state.people.map( person =>
    <PeopleInfo history={this.props.history} person={person} /> )}
    </Table.Body>
    </Table>
    </>
    )
  }
}

export default People