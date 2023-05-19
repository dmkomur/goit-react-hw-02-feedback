import css from './Statistics.module.css'
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div className={css.wrap}>
          <p className={css.textFeed}>Good:  <span className={css.textDigit}>{good}</span></p>
          <p className={css.textFeed}>Neutral:  <span className={css.textDigit}>{neutral}</span></p>
          <p className={css.textFeed}>Bad:  <span className={css.textDigit}>{bad}</span></p>
          <p className={css.textFeed}>Total:  <span className={css.textDigit}>{total}</span></p>
          <p className={css.textFeed}>Percent:  <span className={css.textDigit}>{positivePercentage}</span>%</p>
        </div>
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
   
}