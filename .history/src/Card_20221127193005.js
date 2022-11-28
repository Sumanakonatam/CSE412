import React from 'react';
import { Card } from '@nextui-org/react';

class Fcard extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			height: "10vh",
			width: "10vw",
		}
	}

	componentDidMount(){
		const card = new mapboxgl.Body({
			container: this.cardContainer,
			style: 'mapbox://styles/sameehsuhail/claymls6e004115mxig2eme72', 
            width:"900vw",
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

	}

	render(){
		return(
			<div>
				<div ref={el => this.cardContainer = el} style={{width:'10vw', height:'10vh', zIndex:1}}/>
			</div>
		)
	}
}

export default Fcard;