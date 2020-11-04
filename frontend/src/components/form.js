import React, { Component } from "react";


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        leaving: 'my leaving destination',
        destination: '',
        date: '',
        adults: '',
        children: '',
        class: ''
      
      };
  
      this.handleLeavingChange = this.handleLeavingChange.bind(this);
      this.handleDestinationChange = this.handleDestinationChange.bind(this);
      this.handleDateChange = this.handleDateChange.bind(this);
      this.handleAdultChange = this.handleAdultChange.bind(this);
      this.handleChildrenChange = this.handleChildrenChange.bind(this);
      this.handleClassChange = this.handleClassChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleLeavingChange(event) {
      this.setState({leaving: event.target.value});
    }

    handleDestinationChange(event) {
      this.setState({destination: event.target.value});
    }

    handleDateChange(event) {
      this.setState({date: event.target.value});
    }

    handleAdultChange(event) {
      this.setState({adults: event.target.value});
    }

    handleChildrenChange(event) {
      this.setState({children: event.target.value});
    }

    handleClassChange(event) {
      this.setState({class: event.target.value});
    }
  
    handleSubmit(event) {
     alert(`a) You are Leaving from: ${this.state.leaving} b) Your Destination is: ${this.state.destination} c) Your Travel Date is on: ${this.state.date} d) Number of Adults: ${this.state.adults} e) Number of Children: ${this.state.children} f) Selected Travel Class: ${this.state.class}`);
      event.preventDefault();
     }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <section id="busForm">
        <div id="booking" class="section">
          <div class="section-center">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="booking-cta">
                    <h1>Book your Bus today</h1>
                    <p>The easiest and fastest way to book your bus online!</p>
                  </div>
                </div>
                <div class="col-md-7 col-md-offset-1">
                  <div class="booking-form">
                    <form>
                      <div class="form-group">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <span class="form-label">Leaving from</span>
                              <select class="form-control" value={this.state.leaving} onChange={this.handleLeavingChange}>
                                <option value="" ></option>
                                <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Dar es salam</option>
                                <option>Dodoma</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <span class="form-label">Destination to</span>
                              <select class="form-control" value={this.state.destination} onChange={this.handleDestinationChange}>
                                <option value=""></option>
                                <option>Nairobi</option>
                                <option>Mombasa</option>
                                <option>Dar es salam</option>
                                <option>Dodoma</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <span class="form-label">Travel Date</span>

                              <input
                                class="form-control"
                                type="date"
                                required
                                value={this.state.date} onChange={this.handleDateChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <span class="form-label">Adults (18+)</span>
                              <select class="form-control" value={this.state.adults} onChange={this.handleAdultChange}>
                                <option value=""></option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <span class="form-label">Children (0-17)</span>
                              <select class="form-control" value={this.state.children} onChange={this.handleChildrenChange}>
                                <option value=""></option>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <div class="form-group">
                              <span class="form-label">Travel class</span>
                              <select class="form-control" value={this.state.class} onChange={this.handleClassChange}>
                                <option value=""></option>
                                <option>Economy class</option>
                                <option>First class</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                        </div>
                        <div class="form-btn">
                          <button type='submit' class="submit-btn">Book Now</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  
        </form>
      );
    }
  }
  export default Form;