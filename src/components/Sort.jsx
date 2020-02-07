import React from 'react'
import { Col, Dropdown } from 'react-bootstrap'

const Sort = (prop) => {
	return ( 
		<Col className='mt-3'>
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Sort By
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item onClick={prop.sort} value="Heading">Heading</Dropdown.Item>
					<Dropdown.Item onClick={prop.sort} value="Subheading">Subheading</Dropdown.Item>
					<Dropdown.Item onClick={prop.sort} value="Price">Price</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Col>
	 )
}
 
export default Sort;