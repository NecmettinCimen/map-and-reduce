(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{244:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(11),o=a(15),r=a(14),i=a(16),c=a(0),s=a.n(c),m=a(145),p=a(133),u=a(123),d=a(175),h=a(241),E=a(184),g=a(245),k=a(35),y=[{lat:21.2105052,lng:72.8653491},{lat:21.2206445,lng:72.8704506},{lat:21.2183091,lng:72.8631228}],C=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(i)))).state={activeMarker:{},selectedPlace:{},showingInfoWindow:!1,position:null},a.onMarkerClick=function(e,t){return a.setState({activeMarker:t,selectedPlace:e,showingInfoWindow:!0})},a.onInfoWindowClose=function(){return a.setState({activeMarker:null,showingInfoWindow:!1})},a.onMapClicked=function(){a.state.showingInfoWindow&&a.setState({activeMarker:null,showingInfoWindow:!1})},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.renderAutoComplete()}},{key:"componentDidUpdate",value:function(e){this.props!==e.map&&this.renderAutoComplete()}},{key:"onSubmit",value:function(e){e.preventDefault()}},{key:"renderAutoComplete",value:function(){var e=this,t=this.props,a=t.google,n=t.map;if(a&&n){var l=new a.maps.places.Autocomplete(this.autocomplete);l.bindTo("bounds",n),l.addListener("place_changed",function(){var t=l.getPlace();t.geometry&&(t.geometry.viewport?n.fitBounds(t.geometry.viewport):(n.setCenter(t.geometry.location),n.setZoom(17)),e.setState({position:t.geometry.location}))})}}},{key:"render",value:function(){var e=this,t=this.state.position;return s.a.createElement(k.a,null,s.a.createElement(m.a,null,s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Basic")),s.a.createElement(u.a.Body,null,s.a.createElement("div",{style:{height:"300px",width:"100%"}},s.a.createElement(g.Map,{centerAroundCurrentLocation:!0,className:"map",google:this.props.google,zoom:14}))))),s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Simple Markers")),s.a.createElement(u.a.Body,null,s.a.createElement("div",{style:{height:"300px",width:"100%"}},s.a.createElement(g.Map,{centerAroundCurrentLocation:!0,google:this.props.google,className:"map",zoom:13},s.a.createElement(g.Marker,{name:"Codedthemes",position:{lat:21.2335163,lng:72.8643298}}),s.a.createElement(g.Marker,{name:"Roman Point",position:{lat:21.2148165,lng:72.8627243}}),s.a.createElement(g.Marker,null)))))),s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Click-Able Markers")),s.a.createElement(u.a.Body,null,s.a.createElement("div",{style:{height:"300px",width:"100%"}},s.a.createElement(g.Map,{centerAroundCurrentLocation:!0,className:"map",google:this.props.google,onClick:this.onMapClicked,zoom:12},s.a.createElement(g.Marker,{name:"Codedthemes",position:{lat:21.2335163,lng:72.8643298},onClick:this.onMarkerClick}),s.a.createElement(g.Marker,{name:"Roman Point",position:{lat:21.2148165,lng:72.8627243},onClick:this.onMarkerClick}),s.a.createElement(g.Marker,{name:"Current Location",onClick:this.onMarkerClick}),s.a.createElement(g.InfoWindow,{marker:this.state.activeMarker,onClose:this.onInfoWindowClose,visible:this.state.showingInfoWindow},s.a.createElement("div",null,s.a.createElement("h3",null,this.state.selectedPlace.name)))))))),s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Geo-Coding")),s.a.createElement(u.a.Body,null,s.a.createElement(d.a,{onSubmit:this.onSubmit},s.a.createElement(h.a,{className:"mb-3"},s.a.createElement(d.a.Control,{ref:function(t){return e.autocomplete=t},type:"text",placeholder:"Search your favorite place"}),s.a.createElement(h.a.Append,null,s.a.createElement(E.a,{type:"submit"},"Search")))),s.a.createElement("div",{style:{height:"240px",width:"100%"}},s.a.createElement(g.Map,Object.assign({className:"map"},this.props,{center:t,centerAroundCurrentLocation:!0}),s.a.createElement(g.Marker,{position:t})))))),s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Polygon")),s.a.createElement(u.a.Body,null,s.a.createElement("div",{style:{height:"300px",width:"100%"}},s.a.createElement(g.Map,{centerAroundCurrentLocation:!0,google:this.props.google,className:"map",zoom:14},s.a.createElement(g.Polygon,{fillColor:"#dc3545",fillOpacity:.35,paths:[y],strokeColor:"#dc3545",strokeOpacity:.8,strokeWeight:2})))))),s.a.createElement(p.a,{xl:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Polyline")),s.a.createElement(u.a.Body,null,s.a.createElement("div",{style:{height:"300px",width:"100%"}},s.a.createElement(g.Map,{centerAroundCurrentLocation:!0,google:this.props.google,className:"map",zoom:14},s.a.createElement(g.Polyline,{fillColor:"#dc3545",fillOpacity:.35,path:y,strokeColor:"#dc3545",strokeOpacity:.8,strokeWeight:5}))))))))}}]),t}(s.a.Component);t.default=Object(g.GoogleApiWrapper)({apiKey:"AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"})(C)}}]);
//# sourceMappingURL=32.688d189c.chunk.js.map