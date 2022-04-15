import{o as n,f as a,g as s,t as _,h as r,i as u,w as h,v as g,F as m,j as b,n as k,r as v,m as C,p as S,k as O,q as f,l as L,s as y}from"./vendor.3cbabd63.js";import{_ as w,U as N}from"./plugin-vue_export-helper.3b9b12da.js";const I={data(){return{email:"",password:"",loading:!1,message:""}},methods:{handleLogin(){this.loading=!0,this.message="",this.$store.dispatch("auth/login",{email:this.email,password:this.password}).then(()=>{this.$router.push("/")},l=>{this.loading=!1,this.message=l.response&&l.response.data&&l.response.data.message||l.message||l.toString()})}}},J=s("div",{class:"d-flex align-items-start offcanvas-header bg-secondary pb-2",style:{"--bs-bg-opacity":".15"}},[s("div",{class:"offcanvas-title mt-5",id:"offcanvasLabel"},[s("h4",null,"Login")]),s("button",{class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),U={class:"offcanvas-body my-3"},E={key:0,class:"alert alert-danger",role:"alert"},V={class:"mb-3"},B=s("label",{for:"emailInput",class:"form-label"},"Email:",-1),T=["disabled"],D={class:"mb-3"},$=s("label",{for:"passwordInput",class:"form-label"},"Password:",-1),W=["disabled"],j=["disabled"],z=s("label",{class:"form-text my-4"},[b("New User? Sign up "),s("a",{href:"/register",style:{"text-decoration":"none"}},"here"),b(".")],-1),F={key:1,class:"card d-flex flex-column align-items-center py-3 px-4 position-absolute top-50 start-50 translate-middle"},M=s("strong",{class:"mb-3"},"Logging In",-1),R=s("div",{class:"spinner-border text-primary",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")],-1),q=[M,R];function A(l,t,p,d,e,o){return n(),a(m,null,[J,s("div",U,[e.message?(n(),a("div",E,_(e.message),1)):r("",!0),s("form",{onSubmit:t[2]||(t[2]=u((...i)=>o.handleLogin&&o.handleLogin(...i),["prevent"]))},[s("div",V,[B,h(s("input",{class:"form-control me-10",id:"emailInput",name:"email",type:"email",placeholder:"Enter your email here","onUpdate:modelValue":t[0]||(t[0]=i=>e.email=i),disabled:e.loading},null,8,T),[[g,e.email]])]),s("div",D,[$,h(s("input",{class:"form-control me-10",id:"passwordInput",name:"password",type:"password",placeholder:"Enter your password here","onUpdate:modelValue":t[1]||(t[1]=i=>e.password=i),disabled:e.loading,"aria-label":"password"},null,8,W),[[g,e.password]])]),s("button",{type:"submit",class:"btn btn-primary mt-2",disabled:e.loading},"Login",8,j)],32),z,e.loading?(n(),a("div",F,q)):r("",!0)])],64)}var G=w(I,[["render",A]]);const H={data(){return{message:"",loading:!1,editing:!1,file:null,user:JSON.parse(JSON.stringify(this.$store.state.auth.user)),usr_pw:""}},methods:{goToProfile(){this.$router.push("/user")},logOut(){this.$store.dispatch("auth/logout"),this.$router.push("/")},editProfile(){this.editing=!0},changePfp(l){this.file=l.target.files[0],this.user.pfp_url=URL.createObjectURL(this.file),console.log(this.user)},saveChanges(){if(this.loading=!0,this.message="",this.user.password=this.usr_pw,this.user.username.length==0||this.user.username.length>20){this.message="Invalid username! Username must be of length 1-20.",this.loading=!1;return}if(this.user.email.length==0||this.user.email.length>50){this.message="Invalid email!",this.loading=!1;return}if(this.file!=null)console.log("test"),N.upload(this.file).then(t=>{var p={user_id:this.user.user_id,username:this.user.username,email:this.user.email,pfp_url:t.data.newfile,password:this.user.password};this.$store.dispatch("auth/edit",p).then(()=>{this.loading=!1,this.editing=!1,this.user=JSON.parse(JSON.stringify(this.$store.state.auth.user)),this.message="Success!"},d=>{this.loading=!1,this.message=d.response&&d.response.data&&d.response.data.message||d.message||d.toString()})}).catch(t=>{this.message="Could not upload the image! "+t,this.loading=!1});else{var l={user_id:this.user.user_id,username:this.user.username,email:this.user.email,password:this.user.password};this.$store.dispatch("auth/edit",l).then(()=>{this.loading=!1,this.editing=!1,this.user=JSON.parse(JSON.stringify(this.$store.state.auth.user))},t=>{this.loading=!1,this.message=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()})}},discardChanges(){console.log(this.$store.state.auth.user),this.editing=!1,this.user=JSON.parse(JSON.stringify(this.$store.state.auth.user)),this.file=null,this.usr_pw=""}}},Q=s("div",{class:"d-flex align-items-start offcanvas-header bg-primary text-light pb-2",style:{"--bs-bg-opacity":"1"}},[s("div",{class:"offcanvas-title mt-5",id:"offcanvasLabel"},[s("h4",null,"Account Info")]),s("button",{class:"btn-close btn-close-white","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),Y={class:"d-flex flex-column align-items-center offcanvas-body"},K={key:0,class:"alert alert-danger",role:"alert"},X={key:1,class:"alert alert-success",role:"alert"},Z=["src"],ss=s("br",null,null,-1),es={class:"table table-borderless"},ts=s("th",{class:"align-middle"},"Username",-1),ns=["disabled"],as=s("th",{class:"align-middle"},"Email",-1),is=["disabled"],os={key:0},ls=s("th",null,"Profile Picture",-1),rs=[ls],ds={key:1},cs={colspan:"2"},us=["disabled"],hs={key:2},gs=s("th",{colspan:"2"},"Confirm Your Password",-1),ms=[gs],ps={key:3},fs={colspan:"2"},_s=["disabled"],bs={key:2,class:"card d-flex flex-column align-items-center py-3 px-4 position-absolute top-50 start-50 translate-middle"},vs=s("strong",{class:"mb-3"},"Editing Profile",-1),ys=s("div",{class:"spinner-border text-primary",role:"status"},[s("span",{class:"visually-hidden"},"Loading...")],-1),ws=[vs,ys],xs=["disabled"],ks={class:"d-flex mt-auto shadow-lg container py-3"},Cs=["disabled"];function Ss(l,t,p,d,e,o){return n(),a(m,null,[Q,s("div",Y,[e.message&&e.editing?(n(),a("div",K,_(e.message),1)):r("",!0),e.message&&!e.editing?(n(),a("div",X,_(e.message),1)):r("",!0),s("img",{class:"img-fluid rounded-circle border border-4 border-info my-3",src:e.user.pfp_url,width:"250",height:"250",id:"pfp"},null,8,Z),ss,s("table",es,[s("tbody",null,[s("tr",null,[ts,s("td",null,[h(s("input",{type:"text",class:k([e.editing?"form-control":"form-control-plaintext  text-muted"]),id:"username",disabled:e.loading||!e.editing,"onUpdate:modelValue":t[0]||(t[0]=i=>e.user.username=i)},null,10,ns),[[g,e.user.username]])])]),s("tr",null,[as,s("td",null,[h(s("input",{type:"text",class:k([e.editing?"form-control":"form-control-plaintext  text-muted"]),id:"email",disabled:e.loading||!e.editing,"onUpdate:modelValue":t[1]||(t[1]=i=>e.user.email=i)},null,10,is),[[g,e.user.email]])])]),e.editing?(n(),a("tr",os,rs)):r("",!0),e.editing?(n(),a("tr",ds,[s("td",cs,[s("input",{type:"file",class:"form-control form-control-sm align-middle",id:"pfp_url",disabled:e.loading,accept:"image/*",onChange:t[2]||(t[2]=(...i)=>o.changePfp&&o.changePfp(...i))},null,40,us)])])):r("",!0),e.editing?(n(),a("tr",hs,ms)):r("",!0),e.editing?(n(),a("tr",ps,[s("td",fs,[h(s("input",{type:"password",class:"form-control",id:"password",disabled:e.loading,"onUpdate:modelValue":t[3]||(t[3]=i=>e.usr_pw=i)},null,8,_s),[[g,e.usr_pw]])])])):r("",!0)])]),e.loading?(n(),a("div",bs,ws)):r("",!0),e.editing?(n(),a("button",{key:4,type:"submit",onClick:t[5]||(t[5]=u((...i)=>o.saveChanges&&o.saveChanges(...i),["prevent"])),class:"btn btn-success mt-2 me-3",disabled:e.loading},"Save Changes",8,xs)):(n(),a("button",{key:3,type:"submit",class:"btn btn-primary mt-2 me-3",onClick:t[4]||(t[4]=u((...i)=>o.goToProfile&&o.goToProfile(...i),["prevent"])),"data-bs-dismiss":"offcanvas"},"Visit Profile Page"))]),s("div",ks,[e.editing?r("",!0):(n(),a("button",{key:0,type:"submit",onClick:t[6]||(t[6]=u((...i)=>o.editProfile&&o.editProfile(...i),["prevent"])),class:"btn btn-outline-success me-auto"},"Quick Edit Profile")),e.editing?(n(),a("button",{key:2,type:"submit",onClick:t[8]||(t[8]=u((...i)=>o.discardChanges&&o.discardChanges(...i),["prevent"])),class:"btn btn-outline-danger ms-auto me-2",disabled:e.loading},"Discard Changes",8,Cs)):(n(),a("button",{key:1,type:"submit",onClick:t[7]||(t[7]=u((...i)=>o.logOut&&o.logOut(...i),["prevent"])),"data-bs-dismiss":"offcanvas",class:"btn btn-outline-primary me-2"},"Logout"))])],64)}var Os=w(H,[["render",Ss]]);const Ps={data(){return{user:"",navItems:[{textContent:"Character & Weapons",to:"/pullable"},{textContent:"Event Banners",to:"/event"}],wishItems:[{textContent:"Permanent Banners",class:"dropdown-header"},{textContent:"Novice Banner",href:"/banner/novice",class:"dropdown-item"},{textContent:"Standard Banner",href:"/banner/standard",class:"dropdown-item"},{class:"dropdown-divider"},{textContent:"Event Banners",class:"dropdown-header"},{textContent:"Event Character",href:"/banner/character",class:"dropdown-item"},{textContent:"Event Weapon",href:"/banner/weapon",class:"dropdown-item"}]}},created(){this.loggedIn&&(this.user=JSON.parse(JSON.stringify(this.$store.state.auth.user)))},computed:{loggedIn(){return this.$store.state.auth.status.loggedIn?(this.user=JSON.parse(JSON.stringify(this.$store.state.auth.user)),!0):!1}},components:{LoginOffcanvas:G,ProfileOffcanvas:Os}},Ls={class:"offcanvas offcanvas-start",tabindex:"-1",id:"accOffcanvas","aria-labelledby":"offcanvasLabel"},Ns={class:"navbar navbar-expand-sm",id:"top-nav"},Is={class:"container-fluid stylised",id:"navbar"},Js={class:"navbar-brand d-flex align-items-center",href:"/"},Us=["src"],Es=b(" Gneshni "),Vs=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),Bs={class:"collapse navbar-collapse",id:"navbarSupportedContent"},Ts={class:"navbar-nav me-auto"},Ds=s("li",{class:"mx-2 v-divider"},null,-1),$s={class:"nav-item"},Ws={key:0,class:"nav-item dropdown"},js=b(" Wish History "),zs={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},Fs={class:"navbar-nav"},Ms={class:"d-flex nav-link active","data-bs-toggle":"offcanvas",href:"#accOffcanvas",id:"acc"},Rs=s("span",{class:"material-icons me-2 ps-0"}," account_circle ",-1),qs={key:0},As={key:1};function Gs(l,t,p,d,e,o){const i=v("ProfileOffcanvas"),P=v("LoginOffcanvas"),x=v("router-link");return n(),a(m,null,[s("div",Ls,[o.loggedIn?(n(),C(i,{key:0})):(n(),C(P,{key:1}))]),s("div",Ns,[s("div",Is,[s("a",Js,[s("img",{class:"img-fix",src:"/icon-1.png",style:{height:"2.5rem"}},null,8,Us),Es]),Vs,s("div",Bs,[s("ul",Ts,[Ds,(n(!0),a(m,null,S(e.navItems,c=>(n(),a("li",$s,[O(x,f({class:"nav-link"},c),null,16)]))),256)),o.loggedIn?(n(),a("li",Ws,[O(x,{class:"nav-link dropdown-toggle",to:"/banner",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false","data-bs-auto-close":"outside"},{default:L(()=>[js]),_:1}),s("ul",zs,[(n(!0),a(m,null,S(e.wishItems,c=>(n(),a("li",null,[c.class=="dropdown-header"?(n(),a("span",y(f({key:0},c)),null,16)):c.class=="dropdown-divider"?(n(),a("hr",y(f({key:1},c)),null,16)):(n(),a("a",y(f({key:2},c)),null,16))]))),256))])])):r("",!0)]),s("div",Fs,[s("a",Ms,[Rs,o.loggedIn?(n(),a("a",qs,_(e.user.username),1)):(n(),a("a",As,"Log In"))])])])])])],64)}var Ys=w(Ps,[["render",Gs]]);export{Ys as T};
