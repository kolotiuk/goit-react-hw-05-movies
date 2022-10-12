import PropTypes from 'prop-types';

const ButtonBack = ({ onClick }) => {
  console.log('~ onClick', onClick);
  return <button onClick={onClick}>BACK</button>;
};

export default ButtonBack;

ButtonBack.propTypes = {
  onClick: PropTypes.func.isRequired,
};
