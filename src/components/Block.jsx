import React from 'react'
import { Card } from 'react-bootstrap'

const Block = (props) => {
	return (  
		<div className="card-col col-md-3 col-sm-6 col-xs-12 block">
			<Card style={{ width: '100%', height: '100%' }}>
				{ props.card['showBridge'] ? 
					<Card.Img variant="top" src="https://i.imgur.com/PZyxgfT.jpg" />
					:
					<Card.Img variant="top" src="https://i.imgur.com/qqmyoRV.jpg" />
				}
				<Card.Body>
					<Card.Title>{props.card['Heading']}</Card.Title>
					<Card.Text>{props.card['Subheading']}</Card.Text>
				</Card.Body>
				<Card.Footer className="d-flex justify-content-end">
					<span className='price'>${props.card['Price']}</span>
				</Card.Footer>
			</Card>
		</div>
	)
}
 
export default Block;