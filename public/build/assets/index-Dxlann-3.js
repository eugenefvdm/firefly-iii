import{d as m}from"./dates-D_KJE76d.js";import{f as d,i as s}from"./vendor-CTKi4Xbf.js";/* empty css                       */import{G as h}from"./get-ciw8XVTZ.js";import{P as w}from"./post-DXyTgb66.js";let c=function(){return{notifications:{error:{show:!1,text:"",url:""},success:{show:!1,text:"",url:""},wait:{show:!1,text:""}},editors:{},userGroups:[],format(t){return d(t,s.t("config.date_time_fns"))},init(){this.notifications.wait.show=!0,this.notifications.wait.text=s.t("firefly.wait_loading_data"),this.loadAdministrations()},useAdministration(t){let i=parseInt(t);new w().use(i).then(o=>{this.loadAdministrations()})},loadAdministrations(){this.userGroups=[],this.notifications.wait.show=!0,this.notifications.wait.text=s.t("firefly.wait_loading_data"),this.accounts=[],new h().index({page:this.page}).then(t=>{for(let i=0;i<t.data.data.length;i++)if(t.data.data.hasOwnProperty(i)){let o=t.data.data[i],r={id:parseInt(o.id),title:o.attributes.title,in_use:o.attributes.in_use,owner:"",you:"",memberCountExceptYou:0,isOwner:!1,membersVisible:o.attributes.can_see_members,members:[]},a={};for(let l=0;l<o.attributes.members.length;l++){let e=o.attributes.members[l];if(e.role==="owner"&&(r.owner=s.t("firefly.administration_owner",{email:e.user_email})),e.you===!0&&e.role==="owner"&&(r.isOwner=!0),e.you===!0){r.you=s.t("firefly.administration_you",{role:s.t("firefly.administration_role_"+e.role)});continue}if(e.you===!1){r.memberCountExceptYou++;const n=e.user_email;a.hasOwnProperty(n)||(a[n]={email:n,roles:[]}),a[n].roles.push(s.t("firefly.administration_role_"+e.role))}}r.members=Object.values(a),this.userGroups.push(r)}this.notifications.wait.show=!1})}}},u={index:c,dates:m};function f(){Object.keys(u).forEach(t=>{console.log(`Loading page component "${t}"`);let i=u[t]();Alpine.data(t,()=>i)}),Alpine.start()}document.addEventListener("firefly-iii-bootstrapped",()=>{console.log("Loaded through event listener."),f()});window.bootstrapped&&(console.log("Loaded through window variable."),f());
