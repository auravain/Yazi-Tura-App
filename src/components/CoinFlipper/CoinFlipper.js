import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			side: '',
			flipping: false,
			flip: [],
		};
	}
	handleClick = () => {
		let turn = Math.floor(Math.random() * 2);
		const finalSide = turn === 0 ? 'tura' : 'yazı';
		this.setState({ flipping: true }, () => {
			setTimeout(() => {
				this.setState({
					flipping: false,
					side: finalSide,
					flip: [...this.state.flip, finalSide],
				});
				console.log(this.state.flip);
			}, 1000);
		});
	};

	tura = () => {
		let tura = this.state.flip.filter((value) => value === 'tura');
		return tura.length;
	};

	yazı = () => {
		let yazı = this.state.flip.filter((value) => value === 'yazı');
		return yazı.length;
	};

	render() {
		return (
			<div className="CoinFlipper">
				<h1>Yazı mı Tura mı?</h1>
				<Coin side={this.state.side} flipping={this.state.flipping} />
				<button onClick={this.handleClick}>At!</button>
				<p>
					Toplam
					<strong> {this.state.flip.length} </strong>
					atıştan
					<strong> {this.yazı()} </strong>ü tura
					<strong> {this.tura()} </strong>
					si yazı geldi.
				</p>
			</div>
		);
	}
}

export default CoinFlipper;
