(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{155:function(e,t,a){"use strict";var r=a(127),n=a.n(r),s=a(128),c="https://mapandreduceapi.azurewebsites.net",l={post:function(){var e=Object(s.a)(n.a.mark(function e(t,a){var r,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/").concat(t),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(a)});case 2:if(400!==(r=e.sent).status){e.next=7;break}return e.abrupt("return",{success:!1,errorMsg:"L\xfctfen Girdi\u011finiz Bilgileri Kontrol Ediniz."});case 7:if(500!==r.status){e.next=11;break}return e.abrupt("return",{success:!1,errorMsg:"Sunucu Hatas\u0131 L\xfctfen Data Sonra Tekrar Deneyiniz."});case 11:return e.next=13,r.json();case 13:return s=e.sent,e.abrupt("return",s);case 15:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),get:function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/").concat(t),{method:"get",headers:{"content-type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),put:function(){var e=Object(s.a)(n.a.mark(function e(t,a){var r,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/").concat(t),{method:"put",headers:{"content-type":"application/json"},body:JSON.stringify(a)});case 2:return r=e.sent,e.next=5,r.json();case 5:return s=e.sent,e.abrupt("return",s);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(s.a)(n.a.mark(function e(t){var a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(c,"/").concat(t),{method:"delete",headers:{"content-type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},m={post:function(){var e=Object(s.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.post("job",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getall:function(){var e=Object(s.a)(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("job");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),get:function(){var e=Object(s.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("job/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),put:function(){var e=Object(s.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.put("job",t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),delete:function(){var e=Object(s.a)(n.a.mark(function e(t){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.delete("job/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=m},263:function(e,t,a){"use strict";a.r(t);var r=a(127),n=a.n(r),s=a(128),c=a(10),l=a(11),m=a(15),o=a(14),i=a(16),u=a(0),d=a.n(u),p=a(123),h=a(145),f=a(133),b=a(162),E=a(35),v=a(117),N=a(160),g=a.n(N),x=a(155),w=a(40).a.getInstance(),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,users:[],id:0,name:"",mapfuncstr:"",reducefuncstr:"",job:null,jobsusers:!1,time:0,data:null},a.getJob=function(){var e=Object(s.a)(n.a.mark(function e(t){var r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),e.next=3,x.a.get(t);case 3:r=e.sent,a.setState({id:r.data.id,name:r.data.name,mapfuncstr:r.data.mapFuncStr,reducefuncstr:r.data.reduceFuncStr,loading:!1});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.runJob=function(){w.socket.emit("map",{id:a.state.id,name:a.state.name,mapfuncstr:a.state.mapfuncstr,reducefuncstr:a.state.reducefuncstr,data:a.state.data?a.state.data.split("\n"):null})},a.downloadCsvFile=function(){var e=document.createElement("a"),t=new Blob([a.state.job.result.join("\n")],{type:"text/csv"});e.href=URL.createObjectURL(t),e.download=a.state.name+a.state.time+".csv",document.body.appendChild(e),e.click()},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(w.socket.emit("listenusers"),w.socket.on("users",function(t){e.state.jobsusers||e.setState({users:t})}),w.socket.on("message",function(t){switch(t.type){case"jobupdate":var a=t.job;console.log(a),e.setState({job:a,jobsusers:!0,users:a.users});break;case"users":var r=t.users;e.setState({users:r})}}),this.props.location.pathname.split("/").length>3){var t=this.props.location.pathname.split("/"),a=t[t.length-1];"number"===typeof parseInt(a)&&(this.getJob(a),this.setState({data:localStorage.getItem("data_"+a)}))}}},{key:"render",value:function(){var e=this;return setInterval(function(){e.state.job&&2!==e.state.job.statuscode&&e.setState({time:((new Date).getTime()-new Date(e.state.job.startDate).getTime())/1e3})},500),d.a.createElement(E.a,null,this.state.loading?null:d.a.createElement(p.a,{className:"card-event"},d.a.createElement(p.a.Body,{style:{cursor:"pointer"}},d.a.createElement("div",{className:"row align-items-center justify-content-center"},d.a.createElement("div",{className:"col"},d.a.createElement("h5",{className:"m-0"},this.state.name)),d.a.createElement("div",{className:"col-auto"},d.a.createElement("label",{className:"label theme-bg2 text-white f-14 f-w-400 float-right"},this.state.job?this.state.job.socketresults.length/this.state.job.users.length*100:0,"%"))))),d.a.createElement(h.a,null,d.a.createElement(f.a,{md:6,xl:4},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Ba\u011fl\u0131 Sistem Say\u0131s\u0131"),d.a.createElement("div",{className:"row d-flex align-items-center"},d.a.createElement("div",{className:"col-9"},d.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},d.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," ",this.state.job?this.state.job.users.length:this.state.users.length)),d.a.createElement("div",{className:"col-3 text-right"},d.a.createElement("p",{className:"m-b-0"},"100%"))),d.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},d.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))))),d.a.createElement(f.a,{md:6,xl:4},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"\xc7al\u0131\u015fma S\xfcresi"),d.a.createElement("div",{className:"row d-flex align-items-center"},d.a.createElement("div",{className:"col-9"},d.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},d.a.createElement("i",{className:"feather icon-arrow-down text-c-red f-30 m-r-5"})," ",this.state.time," sn")),d.a.createElement("div",{className:"col-3 text-right"},d.a.createElement("p",{className:"m-b-0"},"100%"))),d.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},d.a.createElement("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))))),d.a.createElement(f.a,{xl:4},d.a.createElement(p.a,null,d.a.createElement(p.a.Body,null,d.a.createElement("h6",{className:"mb-4"},"Son Toplanan Data Boyutu"),d.a.createElement("div",{className:"row d-flex align-items-center"},d.a.createElement("div",{className:"col-9"},d.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},d.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," 10 MB")),d.a.createElement("div",{className:"col-3 text-right"},d.a.createElement("p",{className:"m-b-0"},"100%"))),d.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},d.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}))))),d.a.createElement(f.a,{md:6,xl:8},d.a.createElement(p.a,{className:"Recent-Users"},d.a.createElement(p.a.Header,null,d.a.createElement(p.a.Title,{as:"h5"},"Ba\u011fl\u0131 Sistem Bilgileri")),d.a.createElement(p.a.Body,{className:"px-0 py-2"},d.a.createElement(b.a,{responsive:!0,hover:!0},d.a.createElement("tbody",null,this.state.users.map(function(t,a){return d.a.createElement("tr",{className:"unread",key:"tr_"+a},d.a.createElement("td",null,d.a.createElement("img",{className:"rounded-circle",style:{width:"40px"},src:g.a,alt:"activity-user"})),d.a.createElement("td",null,d.a.createElement("h6",{className:"mb-1"},t.name," || ",t.id),d.a.createElement("p",{className:"m-0"},"Ba\u011flant\u0131 S\xfcresi: ",t.time," sn. CPU: ",t.meter.hardwareConcurrency,", RAM:",t.meter.deviceMemory," GB,",d.a.createElement("br",null)," App Version: ",t.meter.appVersion.split(")")[0]+")",d.a.createElement("br",null)," Durum: ",t.durum)),d.a.createElement("td",null,d.a.createElement("h6",{className:"text-muted"},d.a.createElement("i",{className:"fa fa-circle text-c-green f-10 m-r-15"}),new Date(t.tarih).toTimeString().slice(0,8))),d.a.createElement("td",null,e.state.jobsusers?d.a.createElement("div",null," ",d.a.createElement("a",{href:v.a.BLANK_LINK,className:"label theme-bg2 text-white f-12"},"G\xf6nderilen Datay\u0131 G\xf6ster"),d.a.createElement("a",{href:v.a.BLANK_LINK,className:"label theme-bg text-white f-12"},"Sonu\xe7 Datay\u0131 G\xf6ster")):null))})))))),d.a.createElement(f.a,{md:6,xl:4},d.a.createElement(p.a,{className:"card-event"},d.a.createElement(p.a.Body,{style:{cursor:"pointer"}},d.a.createElement("div",{className:"row align-items-center justify-content-center"},d.a.createElement("div",{className:"col"},d.a.createElement("h5",{className:"m-0"},this.state.job?this.state.job.status:"Sonu\xe7 Datay\u0131 \u0130ndir")),d.a.createElement("div",{className:"col-auto"},d.a.createElement("label",{className:"label theme-bg2 text-white f-14 f-w-400 float-right"},this.state.job?this.state.job.result.length:0))),d.a.createElement("h2",{className:"mt-2 f-w-300"},this.state.job?this.state.job.users.length:0,d.a.createElement("sub",{className:"text-muted f-14"}," Sistem \xfczerinde \xe7al\u0131\u015ft\u0131r\u0131ld\u0131.")),d.a.createElement("h6",{className:"text-muted mt-3 mb-0"},"Sonuc Say\u0131s\u0131 : ",this.state.job?this.state.job.socketresults.length:0),d.a.createElement("h6",{className:"text-muted mt-3 mb-0"},"Sistem Say\u0131s\u0131 : ",this.state.job?this.state.job.users.length:0),d.a.createElement("i",{className:"feather icon-download text-c-purple f-50",onClick:this.downloadCsvFile}))),d.a.createElement(p.a,null,d.a.createElement(p.a.Body,{className:"border-bottom",style:{cursor:"pointer"},onClick:this.runJob},d.a.createElement("div",{className:"row d-flex align-items-center"},d.a.createElement("div",{className:"col-auto"},d.a.createElement("i",{className:"feather icon-play f-30 text-c-green"})),d.a.createElement("div",{className:"col"},d.a.createElement("h3",{className:"f-w-300"},"\xc7al\u0131\u015ft\u0131r"),d.a.createElement("span",{className:"d-block text-uppercase"},"Methodlar\u0131 Sistemlere G\xf6nder")))),d.a.createElement(p.a.Body,{style:{cursor:"pointer"}},d.a.createElement("div",{className:"row d-flex align-items-center"},d.a.createElement("div",{className:"col-auto"},d.a.createElement("i",{className:"feather icon-stop-circle f-30 text-c-red"})),d.a.createElement("div",{className:"col"},d.a.createElement("h3",{className:"f-w-300"},"Durdur"),d.a.createElement("span",{className:"d-block text-uppercase"},"Sistemelere Durma \u0130ste\u011fi G\xf6nder")))))),d.a.createElement(f.a,{md:6,xl:4},d.a.createElement(p.a,{className:"card-social"},d.a.createElement(p.a.Body,{className:"border-bottom"},d.a.createElement("div",{className:"row align-items-center justify-content-center"},d.a.createElement("div",{className:"col-auto"},d.a.createElement("i",{className:"feather icon-cpu text-primary f-36"})),d.a.createElement("div",{className:"col text-right"},d.a.createElement("h3",null,this.state.job?(this.state.job.users.map(function(e){return e.meter.hardwareConcurrency||0}).reduce(function(e,t){return e+t},0)/this.state.job.users.length).toFixed(2):0),d.a.createElement("h5",{className:"text-c-green mb-0"}," ",d.a.createElement("span",{className:"text-muted"},"Ortalama Kullan\u0131lan CPU "))))))),d.a.createElement(f.a,{md:6,xl:4},d.a.createElement(p.a,{className:"card-social"},d.a.createElement(p.a.Body,{className:"border-bottom"},d.a.createElement("div",{className:"row align-items-center justify-content-center"},d.a.createElement("div",{className:"col-auto"},d.a.createElement("i",{className:"feather icon-bar-chart-2 text-c-blue f-36"})),d.a.createElement("div",{className:"col text-right"},d.a.createElement("h3",null,this.state.job?(this.state.job.users.map(function(e){return e.meter.deviceMemory||0}).reduce(function(e,t){return e+t},0)/this.state.job.users.length).toFixed(2):0," GB"),d.a.createElement("h5",{className:"text-c-purple mb-0"}," ",d.a.createElement("span",{className:"text-muted"},"Ortalama Kullan\u0131lan Ram Miktar\u0131"))))))),d.a.createElement(f.a,{xl:4},d.a.createElement(p.a,{className:"card-social"},d.a.createElement(p.a.Body,{className:"border-bottom"},d.a.createElement("div",{className:"row align-items-center justify-content-center"},d.a.createElement("div",{className:"col-auto"},d.a.createElement("i",{className:"feather icon-clock text-c-red f-36"})),d.a.createElement("div",{className:"col text-right"},d.a.createElement("h3",null,this.state.job?this.state.job.time:0," sn"),d.a.createElement("h5",{className:"text-c-purple mb-0"},d.a.createElement("span",{className:"text-muted"},"Ortalama \xe7al\u0131\u015fma s\xfcresi")))))))))}}]),t}(d.a.Component);t.default=y}}]);
//# sourceMappingURL=27.e0c3f003.chunk.js.map