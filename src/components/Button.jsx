import PropTypes from 'prop-types';

const Button = ({styles}) => {

  Button.propTypes = {
    styles: PropTypes.string
  }

  return (
    <button type="button" className={`py-4 px-6
    bg-blue-gradient font-poppins font-medium rounded-[10px]
    text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button