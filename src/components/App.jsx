import React from "react";
import { Button } from "./Button/Button";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";

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
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.percent}></Statistics>
         </Section>

      </div>
  )
  }

}