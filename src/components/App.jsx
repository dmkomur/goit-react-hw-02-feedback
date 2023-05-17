import React from "react";
import { Button } from "./Button/Button";
import { Section } from "./Section/Section";

const feedbackArray = ["good", "neutral", "bad"];

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    percent: 0
      }
  onClick = (evt) => {
    this.setState({
      [evt.target.id]: this.state[evt.target.id] + 1
    });

    this.setState(prevState => ({
      total: prevState.total + 1
    }))
    this.setState(prevState => ({
      percent: ((prevState.good / prevState.total) * 100).toFixed(2) }))

  }
  
   
  
  render() { 
    return (
      <div className="container">

        <Section title="Please leave your feedback">

          {feedbackArray.map(el => (<Button feed={el} key={el} onClick={ this.onClick} />))}
          
        </Section>

        <Section title="Statistic">
          <p className="textFeed">Good  <span className="textDigit">{this.state.good}</span></p>
          <p className="textFeed">Neutral  <span className="textDigit">{this.state.neutral}</span></p>
          <p className="textFeed">Bad  <span className="textDigit">{this.state.bad}</span></p>
          <p className="textFeed">Total  <span className="textDigit">{this.state.total}</span></p>
          <p className="textFeed">Percent  <span className="textDigit">{this.state.percent}</span></p>
        </Section>

      </div>
  )
  }

}