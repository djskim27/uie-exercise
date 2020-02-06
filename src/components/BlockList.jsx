import React, { Component } from 'react';
import Block from './Block'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap'

class BlockList extends Component {

	state = {
		collection: []
	}

	componentDidMount(){
		this.getCards()
	}

	getCards = async() => {
		let res = await axios.get('data.json')
		let collection = res.data
		this.setState({
			collection: collection
		})
	}

	render() { 
		const blockJsx = this.state.collection.map( (card, index)  => <Block key={index} card={card} {...card} /> )
		return (
			<Container>
				<Row>
					{blockJsx}
				</Row>
			</Container>
		);
	}
}
 
export default BlockList;