import PropTypes from 'prop-types'
import s from './ContactList.module.css'

export const ContactList = ({ contacts, onContactDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li className={s.contactItem} key={id}>
            <p>
              {name}: {number}
            </p>

            <button
              className={s.btnItem}
              type="button"
              onClick={() => {
                onContactDelete(id)
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
}
