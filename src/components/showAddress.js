import React from 'react';
import { Link } from 'react-router-dom';


const ShowAddress = (props) => {
	console.log(props)
	return (
		<div className='container'>
			<div className='panel panel-success'>
				<div className='panel-heading'>
					<h3 className='panel-title'>{props.product.name}</h3>
				</div>
				<div className='panel-body'>
					<table className='table table-bordered table-hover'>
						<tbody>
							<tr>
								<td>Street</td>
								<th>{props.product.street}</th>
							</tr>
							<tr>
								<td>City(town)</td>
								<th>{props.product.town}</th>
							</tr>
							<tr>
								<td>State(area)</td>
								<th>{props.product.area}</th>
							</tr>
						</tbody>
					</table>
					<Link to={`/profile/edit/${props.id}`} type='button' className='btn btn-primary'>
						Edit
					</Link>&nbsp;
					{props.theDelete}
				</div>
			</div>
		</div>
	);
};

export default ShowAddress;
