(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6OTL":function(t,n,l){"use strict";l.r(n);var e=l("CcnG"),i=function(){return function(){}}(),o=l("pMnS"),u=l("Ip0R"),r=l("rk39"),s=l("kcMI"),a=(l("wBv1"),function(){function t(t,n,l){this.sanitizer=t,this.route=n,this.router=l,this.title="helloworld",this.widthImg=0,this.heightImg=0,this.grillex=5,this.grilley=5,this.widthcase=0,this.heightcase=0,this.status=0,this.nbdep=0,this.sel1="",this.sel2="",this.showorign=!1,this.tabImages=new Map,this.curStat=new Map}return t.prototype.changeStatus=function(){console.log("1111111"+document.getElementById("ddd")+this.showorign),this.showorign=!this.showorign,document.getElementById("ddd").hidden=!this.showorign},t.prototype.ngOnInit=function(){l("fjcx");var t=this.getRandomInt(1,9);this.imageSrc="assets/images/"+t+".jpeg",l("fjcx");for(var n=0;n<10;n++)for(var e=0;e<10;e++)this.tabImages.set(""+e+n,void 0)},t.prototype.ngAfterViewInit=function(){var t=this;this.timer.stop(),this.timer.countdown=!0,this.timer.startTime=300,this.grillex=4,this.grilley=4,this.timer.start(),setTimeout(function(){t.melanger()},1e3)},t.prototype.finish=function(){this.showorign=!0,this.status=3,alert("YOU LOSE ! GAME OVER ."),document.getElementById("ddd").hidden=!0},t.prototype.dosomething=function(t){this.initImg=t,this.widthImg=t.clientWidth,this.heightImg=t.clientHeight,this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,l("fjcx"),document.getElementById("rrr").hidden=!0},t.prototype.fillImage=function(t,n,e,i,o){var u=this,r=l("fjcx");r.read(this.imageSrc,function(l,s){s.crop(t,n,e,i).getBuffer(r.MIME_JPEG,function(t,n){var l=u.extract(n);u.tabImages.set(o,l)})})},t.prototype.extract=function(t){var n=new Uint8Array(t).reduce(function(t,n){return t+String.fromCharCode(n)},""),l=btoa(n);return this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+l)},t.prototype.getRandomInt=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},t.prototype.checkPuzzel=function(){var t=this;console.log("checkPuzzel");for(var n=!0,l=0;l<this.grillex;l++)for(var e=0;e<this.grilley;e++){var i=void 0;this.curStat.get(i=(i=""+e)+l)!=i&&(n=!1)}n&&setTimeout(function(){t.status=2,t.timer.stop(),alert("BRAVO !")},1e3)},t.prototype.melanger=function(){var t=this;this.nbdep=0,this.status=0,this.timer.reset();for(var n=0;n<10;n++)for(var e=0;e<10;e++)this.tabImages.set(""+e+n,void 0);console.log("1"),this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley;var i=l("fjcx"),o=function(n){for(var l=function(l){var e=n*u.widthcase,o=l*u.heightcase;i.read(u.imageSrc,function(u,r){r.crop(e,o,t.widthcase,t.heightcase).getBuffer(i.MIME_JPEG,function(e,i){var o=t.extract(i),u=""+l+n;t.curStat.set(u,u),t.tabImages.set(u,o)})})},e=0;e<u.grilley;e++)l(e)},u=this;for(n=0;n<this.grillex;n++)o(n);setTimeout(function(){for(var n=0;n<50;n++){var l=t.getRandomInt(0,t.grillex-1),e=""+t.getRandomInt(0,t.grilley-1)+l,i=t.getRandomInt(0,t.grillex-1),o=""+t.getRandomInt(0,t.grilley-1)+i,u=t.tabImages.get(e),r=t.tabImages.get(o);t.tabImages.set(o,u),t.tabImages.set(e,r);var s=t.curStat.get(e),a=t.curStat.get(o);t.curStat.set(o,s),t.curStat.set(e,a)}t.status=1,t.timer.start()},this.grillex*this.grilley*500)},t.prototype.handleEvent=function(t){"done"!=t.action||alert("YOU LOSE ! GAME OVER .")},t.prototype.selectCase=function(t){if(1==this.status)if(""==this.sel1)this.sel1=t;else if(t!=this.sel1){var n=this.tabImages.get(t),l=this.tabImages.get(this.sel1);this.tabImages.set(this.sel1,n),this.tabImages.set(t,l);var e=this.curStat.get(t),i=this.curStat.get(this.sel1);this.curStat.set(this.sel1,e),this.curStat.set(t,i),this.sel1="",this.nbdep++,this.checkPuzzel()}},t}()),c=l("ZYjt"),d=l("ZYCi"),h=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function g(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,0,"img",[["id","ddd"],["style"," width: 40%"]],[[8,"src",4]],null,null,null,null))],null,function(t,n){t(n,0,0,n.component.imageSrc)})}function m(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,[["img2",1]],null,0,"img",[["id","rrr"]],[[8,"src",4]],[[null,"load"]],function(t,n,l){var i=!0;return"load"===n&&(i=!1!==t.component.dosomething(e["\u0275nov"](t,0))&&i),i},null,null))],null,function(t,n){t(n,0,0,n.component.imageSrc)})}function f(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,0,"img",[["style","display: block; width: 100%;"]],[[8,"src",4]],[[null,"click"]],function(t,n,l){var e=!0;return"click"===n&&(e=!1!==t.component.selectCase(""+t.parent.parent.context.$implicit+t.parent.context.$implicit)&&e),e},null,null))],null,function(t,n){t(n,0,0,n.component.tabImages.get(""+n.parent.parent.context.$implicit+n.parent.context.$implicit))})}function p(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,2,"td",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),(t()(),e["\u0275and"](16777216,null,null,1,null,f)),e["\u0275did"](2,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,2,0,null!=n.component.tabImages.get(""+n.parent.context.$implicit+n.context.$implicit))},null)}function I(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,3,"tr",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style","width: 100%"]],null,null,null,null,null)),(t()(),e["\u0275and"](16777216,null,null,2,null,p)),e["\u0275did"](2,278528,null,0,u.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](3,10)],function(t,n){var l=t(n,3,0,0,1,2,3,4,5,6,7,8,9);t(n,2,0,l)},null)}function v(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,4,"table",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style"," width: 80%"]],null,null,null,null,null)),(t()(),e["\u0275eld"](1,0,null,null,3,"tbody",[],null,null,null,null,null)),(t()(),e["\u0275and"](16777216,null,null,2,null,I)),e["\u0275did"](3,278528,null,0,u.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](4,10)],function(t,n){var l=t(n,4,0,0,1,2,3,4,5,6,7,8,9);t(n,3,0,l)},null)}function y(t){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{timer:0}),(t()(),e["\u0275eld"](1,0,null,null,12,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(t()(),e["\u0275and"](16777216,null,null,1,null,g)),e["\u0275did"](3,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),e["\u0275eld"](4,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),e["\u0275ted"](5,null,["\nNb Coups : "," Time : "])),(t()(),e["\u0275eld"](6,0,null,null,1,"cd-timer",[["format","hms"]],null,[[null,"onComplete"]],function(t,n,l){var e=!0;return"onComplete"===n&&(e=!1!==t.component.finish()&&e),e},r.b,r.a)),e["\u0275did"](7,4374528,[[1,4],["basicTimer",4]],0,s.a,[e.ElementRef,e.Renderer2],{format:[0,"format"]},{onComplete:"onComplete"}),(t()(),e["\u0275eld"](8,0,null,null,0,"br",[],null,null,null,null,null)),(t()(),e["\u0275and"](16777216,null,null,1,null,m)),e["\u0275did"](10,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),e["\u0275and"](16777216,null,null,1,null,v)),e["\u0275did"](12,16384,null,0,u.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(t()(),e["\u0275eld"](13,0,null,null,0,"br",[],null,null,null,null,null))],function(t,n){var l=n.component;t(n,3,0,l.showorign),t(n,7,0,"hms"),t(n,10,0,5!=l.status),t(n,12,0,1==l.status||3==l.status)},function(t,n){var l=n.component;t(n,1,0,void 0),t(n,5,0,l.nbdep)})}function w(t){return e["\u0275vid"](0,[(t()(),e["\u0275eld"](0,0,null,null,1,"app-grid",[],null,null,null,y,h)),e["\u0275did"](1,4308992,null,0,a,[c.c,d.a,d.l],null,null)],function(t,n){t(n,1,0)},null)}var b=e["\u0275ccf"]("app-grid",a,w,{},{},[]),R=l("gIcY"),C=function(){return function(){}}(),E=l("+Sv0"),S=l("WB5j");l.d(n,"GridModuleNgFactory",function(){return x});var x=e["\u0275cmf"](i,[],function(t){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,b]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[e.LOCALE_ID,[2,u["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,R.j,R.j,[]),e["\u0275mpd"](1073742336,u.CommonModule,u.CommonModule,[]),e["\u0275mpd"](1073742336,d.o,d.o,[[2,d.u],[2,d.l]]),e["\u0275mpd"](1073742336,C,C,[]),e["\u0275mpd"](1073742336,E.a,E.a,[]),e["\u0275mpd"](1073742336,S.a,S.a,[]),e["\u0275mpd"](1073742336,R.i,R.i,[]),e["\u0275mpd"](1073742336,R.a,R.a,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,d.j,function(){return[[{path:"",component:a}]]},[])])})}}]);