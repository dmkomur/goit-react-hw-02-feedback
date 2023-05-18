import css from './Button.module.css'
import PropTypes from 'prop-types';

export const Button = ({ feed, onClick }) => {
    return <button className={`${css.btn} ${css[feed]}`} id={ feed } onClick={onClick}>{ feed }</button>
}

Button.propTypes = {
    feed: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}