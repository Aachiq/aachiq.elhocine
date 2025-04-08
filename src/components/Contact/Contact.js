import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      {/* href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`} */}
      {/* <a href={`mailto:${contact.email}`}> */}
      <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact
