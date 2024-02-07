import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isLogged: false,
    showFirstNameError: false,
    showSecondNameError: false,
  }

  onChangeLogged = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeSecondName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    const isValid = firstName === ''
    this.setState({showFirstNameError: isValid})
  }

  onBlurSecondName = () => {
    const {lastName} = this.state
    const isValid = lastName === ''
    this.setState({showSecondNameError: isValid})
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({
        showFirstNameError: true,
        showSecondNameError: true,
      })
    } else if (firstName === '') {
      this.setState({
        showSecondNameError: false,
        showFirstNameError: true,
      })
    } else if (lastName === '') {
      this.setState({
        showFirstNameError: false,
        showSecondNameError: true,
      })
    } else {
      this.setState({
        showFirstNameError: false,
        showSecondNameError: false,
        isLogged: true,
    })
  }

  render() {
    const {
      firstName,
      lastName,
      isLogged,
      showFirstNameError,
      showSecondNameError,
    } = this.state
    return (
      <div>
        <h1>Registration</h1>
        {isLogged && (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
            />
            <p>Submitted Successfully</p>
            <button onClick={this.onChangeLogged}>
              Submit Another Response
            </button>
          </div>
        )}
        {!isLogged && (
          <form onSubmit={this.submitForm}>
            <label htmlFor="lb1">FIRST NAME</label>
            <input
              id="lb1"
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
              value={firstName}
              type="text"
            />
            {showFirstNameError && <p>Required</p>}
            <label htmlFor="lb2">LAST NAME</label>
            <input
              id="lb2"
              onChange={this.onChangeSecondName}
              onBlur={this.onBlurSecondName}
              value={lastName}
              type="text"
            />
            {showSecondNameError && <p>Required</p>}
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
