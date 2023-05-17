import css from './Button.module.css'

export const Button = ({ feed, onClick }) => {
    return <button className={`${css.btn} ${css[feed]}`} id={ feed } onClick={onClick}>{ feed }</button>
}