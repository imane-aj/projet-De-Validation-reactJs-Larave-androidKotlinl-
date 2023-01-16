import axios from 'axios'
import React, { Component } from 'react'

export default class SearchTest extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
            message : '',
            dataInput : []
        }
    }
    getData = (e) => {
        axios.get('http://localhost:8000/api/stagiaire/'+e.target.value).then((res) => {
          this.setState({
            data: res.data
          });
        });
      };

  render() {
    return (
      <div>
        <h3>Question 1</h3>
            <input type='search' placeholder='Search'  onChange={this.getData}/>
            <p>{this.state.data.length !== 0 ? 'yes' : "no"}</p>
        <h3>Question 2</h3>
            {this.state.data.map((item) => (
                <><p>{item?.name}</p>
                <p>{item?.lastName}</p></>
            ))}
      </div>
    )
  }
}
