import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    nameError: '',
    lastError: '',
    isSubmmited: false,
  }

  onChangeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  onChangeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  eventHandler = () => {
    const {firstname} = this.state
    this.setState({nameError: '*Required'})
    if (firstname !== '') {
      this.setState({nameError: ''})
    }
  }

  lastEventHandler = () => {
    const {lastname} = this.state
    this.setState({lastError: '*Required'})
    if (lastname !== '') {
      this.setState({lastError: ''})
    }
  }

  onSubmitForm = event => {
    const {firstname, lastname} = this.state
    event.preventDefault()
    if (firstname === '') {
      this.setState({nameError: '*Required'})
    } else {
      this.setState({nameError: ''})
    }
    if (lastname === '') {
      this.setState({lastError: '*Required'})
    } else {
      this.setState({lastError: ''})
    }
    if (firstname !== '' && lastname !== '') {
      this.setState({isSubmmited: true})
    }
  }

  renderSuccess = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="para">Submitted Successfully</p>
      <button type="button" className="response" onClick={this.onClickResponse}>
        Submit Another Response
      </button>
    </div>
  )

  onClickResponse = () => {
    this.setState({isSubmmited: false})
  }

  render() {
    const {nameError, lastError, isSubmmited} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {isSubmmited ? (
          this.renderSuccess()
        ) : (
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="container">
              <label htmlFor="first" className="label">
                FIRST NAME
              </label>
              <input
                className="input"
                type="text"
                id="first"
                onChange={this.onChangeFirstname}
                onBlur={this.eventHandler}
                placeholder="First name"
              />
              <p className="error">{nameError}</p>
              <label htmlFor="last" className="label">
                LAST NAME
              </label>
              <input
                type="text"
                className="input"
                id="last"
                onChange={this.onChangeLastname}
                onBlur={this.lastEventHandler}
                placeholder="Last name"
              />
              <p className="error">{lastError}</p>
            </div>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
