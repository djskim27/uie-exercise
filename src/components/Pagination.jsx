import React from 'react'
import { Col, Button } from 'react-bootstrap'

const Pagination = (props) => {
	return (  
		<Col className='d-flex justify-content-end align-items-center'>
			{ 
				props.num > 1 ? 
				<Button onClick={props.change} action='-'>Prev</Button>
				:
				''
			}
			<span className='mx-2'>{props.num} / {props.den}</span>
			{ 
				props.num !== props.den ? 
				<Button onClick={props.change} action='+'>Next</Button>
				:
				''
			}
		</Col>
	)
}
 
export default Pagination;