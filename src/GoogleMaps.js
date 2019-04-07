import React,{Component} from 'react'
import './App.css'

import {withGoogleMap,GoogleMap,InfoWindow} from 'react-google-maps'
import {Marker} from 'react-google-maps'
import Sidebar from "react-sidebar";

class GoogleMaps extends Component{

	state={
		isopen:false,
		sidebaropen:true
	}

	onclicksidebaropen=(e)=>{
		this.setState({sidebaropen:e})
	}
	handletoggleopen=()=>{
		this.setState({isopen:true});
	}

	handletoggleclose=()=>{
		this.setState({isopen:false});
	}
			locations =[
				{title: 'Bangalore Palace', location: {lat: 12.9988, lng: 77.5921}},
				{title: 'Tippu Sultan Palace', location: {lat: 12.9595, lng: 77.5738}},
				{title: 'Lal Bagh', location: {lat: 12.9507, lng: 77.5848}},
				{title: 'Vishweshwaraiah Museum', location: {lat: 12.9752, lng: 77.5963}},
				{title: 'Vidhana Sowdha', location: {lat: 12.9779, lng: 77.5896}}
			]
		
			 styles={
				 background:'black',
				 color:'white'
				 

			}

		
		
	

	render(){

	
		const Googlemapexample=withGoogleMap(props=>(
            <div>
			<GoogleMap
				defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
				defaultZoom={13} >
				</GoogleMap>
				
			 		{this.locations.map((location,i)=>{
				console.log(location);
				return (
				<div>	
				<Marker onClick={this.handletoggleopen}
			  	title = { this.locations[i].title }
			 		
				position = { this.locations[i].location}
			
		       
				
			 />
			 { this.state.isopen&&
				<InfoWindow onCloseClick={this.handletoggleclose}
				  position={ this.locations[i].location}
				 >
			      <h1>{this.locations[i].title}</h1>
		        </InfoWindow>
			 }
			 
			 	
			 
			 </div>
			 )
			})
			}
			{
				<Sidebar
			 		sidebar={
					 <h1>Sidebar-contents</h1>
					 
					 }
					 open={this.state.sidebaropen}
					 onSetOpen={this.onclicksidebaropen}
					 styles={{sidebar:{background:'white',color:'black',}}}
			 	>
				 <button onClick={()=>this.onclicksidebaropen(true)}>
					 Open Sidebar
				 </button>
			 </Sidebar>
				
				
			}
            </div>
		));

		
		return(
			
			<div className="renderingmaps">
				<Googlemapexample containerElement={ <div style={{height: `800px`, width: '900px'}} />} 
					mapElement={<div style={{height: `100%`}} />}
				/>
			
			</div>

			)
	}
}

export default GoogleMaps;