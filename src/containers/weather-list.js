import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
	renderWeather(data){
		console.log(data.city.name)
		const temp = data.list.map(weather => weather.main.temp)
		console.log(temp)

		return (
			<tr key={data.city.id}>
				<td>{data.city.name}</td>
			</tr>
		)
	}
	render(){
		console.log(this.props.weather)
		return(
			<table className='table tabe-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}){
	return {weather}
}

export default connect(mapStateToProps)(WeatherList)
