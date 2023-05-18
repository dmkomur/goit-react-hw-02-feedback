// import css from './Feedback.module.css'
import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button'


export const FeedbackOptions = ({ hendleClick, options }) => {
    return options.map(el => (<Button feed={el} key={el} onClick={hendleClick} />))
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    hendleClick: PropTypes.func.isRequired
}