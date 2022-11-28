import React from 'react';
import { Card } from '@nextui-org/react';

class Fcard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			height: "100vh",
			width: "10vw",
		}
	}

	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100vw', height:'100vh', zIndex:2}}/>
			</div>
		)
	}
}

export default Fcard;