import React, { Component } from "react";


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
    //   event.preventDefault();
    // }
  
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
                              <select class="form-control"value={this.state.value} onChange={this.handleChange}>
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
                              <select class="form-control" value={this.state.value} onChange={this.handleChange}>
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
                                value={this.state.value} onChange={this.handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div class="form-group">
                              <span class="form-label">Adults (18+)</span>
                              <select class="form-control" value={this.state.value} onChange={this.handleChange}>
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
                              <select class="form-control" value={this.state.value} onChange={this.handleChange}>
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
                              <select class="form-control" value={this.state.value} onChange={this.handleChange}>
                                <option value=""></option>
                                <option>Economy class</option>
                                <option>First class</option>
                              </select>
                              <span class="select-arrow"></span>
                            </div>
                          </div>
                        </div>
                        <div class="form-btn">
                          <button class="submit-btn">Book Now</button>
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