import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'add'} onClick={onAdd} />
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Do Things'
  }

  Header.propTypes ={
      title: PropTypes.string.isRequired,
  }

// css in js
//   const headingStyle = {
//       color: 'Red',
//       backgroundColor: 'grey',
//   }

export default Header
