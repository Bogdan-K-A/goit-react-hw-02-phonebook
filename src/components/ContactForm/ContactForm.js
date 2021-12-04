import React, { Component } from 'react'

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  /* ------------------------- Записывает имя контакта ------------------------ */
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  /* -------------- выводит введённые данные по нажатию на кнопку ------------- */
  handleSubmit = (e) => {
    e.preventDefault()
    const { number, name } = this.state

    this.props.onAddContact(name, number)
    this.setState({ name: '', number: '' })
  }

  render() {
    const { name, number } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            placeholder="Annie Copeland"
            required
            onChange={this.handleChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            type="tel"
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    )
  }
}
