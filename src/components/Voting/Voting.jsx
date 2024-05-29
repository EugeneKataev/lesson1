import { Component } from 'react'
import SmileCard from '../SmileCard/SmileCard';
import './Voting.css';

export default class Voting extends Component {
  state = {
    candidates: [],
    showRes: false,
    winner: null,
  };

  componentDidMount() {
    fetch('http://localhost:3000/data.json')
      .then(result => result.json())
      .then(result => {
        const myCandidates = result.map(candidate => {
          return {
            ...candidate,
            counter: 0,
          };
        });
        this.setState({ candidates: myCandidates })
      });
  }

  changeCounter = (id) => {
    this.setState(state => {
      const candidateIndex = state.candidates.findIndex(candidate => candidate.id == id);
      state.candidates[candidateIndex].counter++;
      return state;
    });
  }

  showResults = () => {

    const maxVotes = Math.max(...this.state.candidates.map(candidate => candidate.counter));
    const candidates = this.state.candidates.filter(candidate => candidate.counter === maxVotes);

    if (candidates.length > 1) {
      this.setState({ showRes: true, winner: null });
    } else {
      const winner = candidates[0];
      this.setState({ showRes: true, winner: winner });
    }
  }

  render() {

    return (
      <div>
        <p>Hello world. Here is our voting:</p>
        {!this.state.candidates.length && (<div>No candidates available</div>)}
        {!!this.state.candidates.length && (
          <div className='container'>
            {this.state.candidates.map(candidate => (
              <SmileCard
                id={candidate.id}
                name={candidate.name}
                key={candidate.id}
                counter={candidate.counter}
                votingAction={this.changeCounter}
              />
            ))}
          </div>
        )}

        <input type="button" value="Show Results" onClick={this.showResults}/>
        {this.state.showRes && (
            <div>
              {this.state.winner != null ? (
                  <span>Winner is: {this.state.winner.name} has {this.state.winner.counter} votes!</span>
                  ) : (
                      <span>no winner</span>
              )}
            </div>
        )}
      </div>
    )
  }
}
