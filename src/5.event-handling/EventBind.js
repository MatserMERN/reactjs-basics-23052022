import React, { Component } from 'react'

class EventBind extends Component {
    constructor(){
        super()

        this.state = {
            message: 'Hello'
        }
        // 3rd way
        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     console.log(this)
    //     this.setState({
    //         message: 'Thank you'
    //     })
    // }
    // 4th way 
    clickHandler = () =>{
        console.log(this)
        this.setState({
            message: 'Thank you'
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className="btn btn-primary" onClick={this.clickHandler}>Change Message</button> */}

        {/* 1st Way */}
        {/* <button className="btn btn-primary" onClick={this.clickHandler.bind(this)}>Change Message</button> */}

        {/* 2nd Way */}
        {/* <button className="btn btn-primary" onClick={()=>{this.clickHandler()}}>Change Message</button>      */}

        {/* 3rd Way */}
        {/* <button className="btn btn-primary" onClick={this.clickHandler}>Change Message</button>  */}

        {/* 4th Way */}
        <button className="btn btn-primary" onClick={this.clickHandler}>Change Message</button>       
      </div>
    )
  }
}

export default EventBind