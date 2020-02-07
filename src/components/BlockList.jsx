import React, { Component } from 'react';
import Block from './Block'
import Sort from './Sort'
import Pagination from './Pagination'
import axios from 'axios';
import { Container, Row } from 'react-bootstrap'

class BlockList extends Component {

	state = {
		collection: [],
		pageNumber: 1,
		firstIndex: 0,
		lastIndex: 5,
		cardsPerPage: 5
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

	sortCards = (e) => {
		let collection = [...this.state.collection]
		let attribute = e.target.getAttribute('value')
		let newCollection = collection.sort((a, b) => (a[attribute] > b[attribute] ? 1 : -1));

		this.setState({
			collection: newCollection
		})
	}

	changePage = (e) => {
		let copyState = {...this.state}
		let action = e.target.getAttribute('action')

		if (action === '+'){
			copyState.pageNumber ++
			copyState.firstIndex += copyState.cardsPerPage
			copyState.lastIndex += copyState.cardsPerPage
		} else {
			copyState.pageNumber --
			copyState.firstIndex -= copyState.cardsPerPage
			copyState.lastIndex -= copyState.cardsPerPage
		}

		this.setState(copyState)
	}

	render() { 
		const blockJsx = [...this.state.collection]
											.slice(this.state.firstIndex, this.state.lastIndex)
											.map( (card, index)  => <Block key={index} card={card} {...card} /> )
		return (
			<Container>
				<Row>
					<Sort sort={this.sortCards}/>
				</Row>
				<Row>
					{blockJsx}
				</Row>
				<Row>
					{
						this.state.collection.length > 0 ?
						<Pagination 
							change={this.changePage} 
							num={this.state.pageNumber}
							den={Math.ceil(this.state.collection.length / this.state.cardsPerPage)}/>
							:
							''
					}
				</Row>
			</Container>
		);
	}
}
 
export default BlockList;