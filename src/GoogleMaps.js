import React,{Component} from 'react'
import './App.css'
import escapeRegExp from 'escape-string-regexp'
import {withGoogleMap,GoogleMap,InfoWindow} from 'react-google-maps'
import {Marker} from 'react-google-maps'
import Sidebar from "react-sidebar";


class GoogleMaps extends Component{

	state={
		isopen:true,
		sidebaropen:false,
		query:''
	
	}
	showingtitles=[

	]

	updatequery=(query) =>{
		this.setState({query:query})
		this.searchingtitles(query)
	}

	searchingtitles=(query)=>{
		if(query){
			if(this.state.query.error){
				this.setState({query:[]})
			}
			else{

				const match=new RegExp(escapeRegExp(query),'i')
				this.showingtitles=this.locations.filter((location1)=>match.test(location1.title))
				console.log(this.showingtitles)
			}
		}
		else{
			this.setState({query:[]})
		}
	}
	
	clearquery=()=>{
		this.setState({query:''})
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
		
	{/*let titles
		if(this.state.query){
			const match=new RegExp(escapeRegExp(this.state.query),'i')
			titles=this.locations.filter((location1)=>match.test(location1.name))
		}
		else{
			titles=titles
		}
		 */}	
		
	 
		const Googlemapexample=withGoogleMap(props=>(
            <div>
			<GoogleMap
				defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
				defaultZoom={13} >
				</GoogleMap>
				
			 		{this.locations.map((location,i)=>{
				//console.log(location);
				return (
				<div>


			 
			 	
			 
			 </div>
			 )
			})
			}
			{
				<Sidebar
			 		sidebar={
						<div>
								<h1>Map-Locations</h1>
							<input type="text" placeholder="enter the location" value={this.state.query}
								onChange={(event) => this.updatequery(event.target.value)}
							  className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-white"  style={{color:'black'}}></input>
							
							<button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black">Filter</button>
						{	
						
							this.showingtitles.map((Locations,i)=>{
							return 	<ul>
									<li>
											{this.showingtitles[i].title}
										{this.state.isopen&&
											<Marker onClick={this.handletoggleopen}
												title = { this.showingtitles[i].title }

												position = { this.showingtitles[i].location}



										/>}
										{ this.state.isopen&&
										<InfoWindow onCloseClick={this.handletoggleclose}
													position={ this.showingtitles[i].location}
										>
											<h1>{this.showingtitles[i].title}</h1>
										</InfoWindow>
										}

									</li>
								</ul>

								})
						}
							
						</div>
					 
					 }
					 open={this.state.sidebaropen}
					 onSetOpen={this.onclicksidebaropen}
					 styles={{sidebar:{background:'black',color:'white',}}}
			 	>
				 <button    onClick={()=>this.onclicksidebaropen(true)} style={{position:'absolute',top:'5px',left:'1000px'}} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-near-black">
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