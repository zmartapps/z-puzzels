(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+Sv0":function(l,n,t){"use strict";t.d(n,"a",function(){return e});var e=function(){return function(){}}()},Z63W:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),i=function(){return function(){}}(),u=t("pMnS"),s=t("NgMZ"),a=t("gIcY"),o=t("Z4CC"),r=t("Ip0R"),g=t("rk39"),h=t("kcMI"),c=(t("O5R2"),t("wBv1"),t("oVYL")),d=t("lgup"),m=t("oiff"),f=t("AilQ"),p=function(){function l(l,n,t,e,i){this.rest=l,this.gameBusiness=n,this.sanitizer=t,this.route=e,this.router=i,this.withvalue=50,this.valw="50",this.options={floor:0,ceil:100,step:1,minLimit:20,maxLimit:90},this.cat=0,this.title="helloworld",this.widthImg=0,this.heightImg=0,this.grillex=5,this.grilley=5,this.widthcase=0,this.heightcase=0,this.status=0,this.nbdep=0,this.sel1="",this.delay=300,this.sel2="",this.level="",this.stage="",this.stageNb=1,this.conf="",this.gameStatus=new d.a,this.imageConfig=new m.a,this.showorign=!1,this.curStat=new Map}return l.prototype.changeStatus=function(){this.showorign=!this.showorign,document.getElementById("ddd").hidden=!this.showorign},l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.filter(function(l){return l.conf}).subscribe(function(n){console.log(n);var t=n.conf;l.stage=t.substr(1,1),l.level=t.substr(0,1),l.cat=parseInt(t.substr(2,1)),l.stageNb=parseInt(l.stage)+1,l.gameStatus.level=parseInt(l.level),l.gameStatus.stage=parseInt(l.stage),l.imageConfig=l.gameBusiness.getImageConfig(l.gameStatus),l.delay=l.imageConfig.gametime;var e=l.gameBusiness.getRandomImageIDCat(l.cat);l.imageSrc="assets/images/"+e+".jpeg",l.gameBusiness.initTable(l.gameBusiness.tabImages,10,10)})},l.prototype.ngAfterViewInit=function(){var l=this;this.timer.stop(),this.timer.countdown=!0,this.timer.startTime=this.delay,this.grillex=this.imageConfig.nbx,this.grilley=this.imageConfig.nby,this.timer.start(),setTimeout(function(){l.melanger()},1e4),this.rest.track("PUZZ","CHAL:"+this.level+"-"+this.stage).subscribe(function(l){})},l.prototype.finish=function(){this.showorign=!0,this.status=3,alert("YOU LOSE ! GAME OVER ."),document.getElementById("ddd").hidden=!0},l.prototype.dosomething=function(l){var n=this;this.initImg=l,this.widthImg=l.clientWidth,this.heightImg=l.clientHeight,this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase),document.getElementById("rrr").hidden=!0,"1"==this.level&&(this.showorign=!0),"2"==this.level&&(this.showorign=!0,setTimeout(function(){n.showorign=!1},1e3))},l.prototype.extract=function(l){var n=new Uint8Array(l).reduce(function(l,n){return l+String.fromCharCode(n)},""),t=btoa(n);return this.sanitizer.bypassSecurityTrustUrl("data:image/jpeg;base64,"+t)},l.prototype.getRandomInt=function(l,n){return Math.floor(Math.random()*(n-l+1))+l},l.prototype.checkPuzzel=function(){for(var l=this,n=!0,t=0;t<this.grillex;t++)for(var e=0;e<this.grilley;e++){var i=void 0;this.curStat.get(i=(i=""+e)+t)!=i&&(n=!1)}n&&setTimeout(function(){l.status=2,l.timer.stop(),10==l.stageNb?(alert("BRAVO ! "),alert("LEVEL  "+l.level+" COMPLETED !"),l.router.navigate(["education/"])):(alert("BRAVO !"),l.newimage())},1e3)},l.prototype.newimage=function(){var l=this;setTimeout(function(){l.gameBusiness.initTable(l.gameBusiness.tabImages,10,10),l.router.navigate(["summurize"],{queryParams:{conf:""+l.level+l.stageNb+l.cat}})},3e3)},l.prototype.melanger=function(){var l=this;this.nbdep=0,this.status=0,this.timer.reset(),this.gameBusiness.initTable(this.gameBusiness.tabImages,10,10),this.widthcase=this.widthImg/this.grillex,this.heightcase=this.heightImg/this.grilley,this.widthcase=Math.floor(this.widthcase),this.heightcase=Math.floor(this.heightcase);for(var n=t("fjcx"),e=0,i=function(t){for(var i=function(i){var s=t*u.widthcase,a=i*u.heightcase;setTimeout(function(){n.read(l.imageSrc,function(u,o){o.crop(s,a,l.widthcase,l.heightcase).getBuffer(n.MIME_JPEG,function(n,u){var s=l.extract(u),a=""+i+t;l.curStat.set(a,a),l.gameBusiness.tabImages.set(a,s),++e==l.grillex*l.grilley&&l.startMel()})})},2e3)},s=0;s<u.grilley;s++)i(s)},u=this,s=0;s<this.grillex;s++)i(s)},l.prototype.handleEvent=function(l){"done"!=l.action||alert("YOU LOSE ! GAME OVER .")},l.prototype.startMel=function(){var l=this;setTimeout(function(){l.gameBusiness.randomizeTables(l.gameBusiness.tabImages,l.curStat,l.grillex,l.grilley),l.status=1,l.timer.start()},2e3)},l.prototype.selectCase=function(l){if(1==this.status)if(""==this.sel1)this.sel1=l;else if(l!=this.sel1){var n=this.gameBusiness.tabImages.get(l),t=this.gameBusiness.tabImages.get(this.sel1);this.gameBusiness.tabImages.set(this.sel1,n),this.gameBusiness.tabImages.set(l,t);var e=this.curStat.get(l),i=this.curStat.get(this.sel1);this.curStat.set(this.sel1,e),this.curStat.set(l,i),this.sel1="",this.nbdep++,this.checkPuzzel()}},l.prototype.ngOnDestroy=function(){for(var l=0;l<this.grillex;l++)for(var n=0;n<this.grilley;n++){var t=""+this.gameBusiness.tabImages.get(""+n+l);console.log("base64Img="+t),null!=t&&(t=t.replace("data:image/jpeg;base64,",""))}this.gameBusiness.initTable(this.gameBusiness.tabImages,10,10),this.imageSrc=void 0},l}(),v=t("ZYjt"),I=t("ZYCi"),b=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[],options:{}}]}});function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["id","ddd"],["style"," width: 40%"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.component.imageSrc)})}function y(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,[["img2",1]],null,0,"img",[["id","rrr"]],[[8,"src",4]],[[null,"load"]],function(l,n,t){var i=!0;return"load"===n&&(i=!1!==l.component.dosomething(e["\u0275nov"](l,0))&&i),i},null,null))],null,function(l,n){l(n,0,0,n.component.imageSrc)})}function C(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["alt",""],["src","assets/load.gif"],["style","width:220px;height:320px;"]],null,null,null,null,null))],null,null)}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"ng5-slider",[["class","ng5-slider"],["style"," width: 30%"]],[[2,"vertical",null],[2,"animate",null],[1,"disabled",0]],[[null,"valueChange"],["window","resize"]],function(l,n,t){var i=!0,u=l.component;return"window:resize"===n&&(i=!1!==e["\u0275nov"](l,2).onResize(t)&&i),"valueChange"===n&&(i=!1!==(u.withvalue=t)&&i),i},s.b,s.a)),e["\u0275prd"](5120,null,a.c,function(l){return[l]},[o.b]),e["\u0275did"](2,4964352,null,1,o.b,[e.Renderer2,e.ElementRef,e.ChangeDetectorRef,e.NgZone],{value:[0,"value"],options:[1,"options"]},{valueChange:"valueChange"}),e["\u0275qud"](335544320,2,{tooltipTemplate:0})],function(l,n){var t=n.component;l(n,2,0,t.withvalue,t.options)},function(l,n){l(n,0,0,e["\u0275nov"](n,2).sliderElementVerticalClass,e["\u0275nov"](n,2).sliderElementAnimateClass,e["\u0275nov"](n,2).sliderElementDisabledAttr)})}function E(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,0,"img",[["style","display: block; width: 100%;"]],[[8,"src",4]],[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.selectCase(""+l.parent.parent.context.$implicit+l.parent.context.$implicit)&&e),e},null,null))],null,function(l,n){l(n,0,0,n.component.gameBusiness.tabImages.get(""+n.parent.parent.context.$implicit+n.parent.context.$implicit))})}function B(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,2,"td",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,E)),e["\u0275did"](2,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(l,n){l(n,2,0,null!=n.component.gameBusiness.tabImages.get(""+n.parent.context.$implicit+n.context.$implicit))},null)}function S(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"tr",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"],["style","width: 100%"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,B)),e["\u0275did"](2,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](3,10)],function(l,n){var t=l(n,3,0,0,1,2,3,4,5,6,7,8,9);l(n,2,0,t)},null)}function L(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"table",[["BORDER","0"],["CELLPADDING","0"],["CELLSPACING","0"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,r.NgStyle,[e.KeyValueDiffers,e.ElementRef,e.Renderer2],{ngStyle:[0,"ngStyle"]},null),e["\u0275pod"](2,{width:0}),(l()(),e["\u0275eld"](3,0,null,null,3,"tbody",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,2,null,S)),e["\u0275did"](5,278528,null,0,r.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),e["\u0275pad"](6,10)],function(l,n){var t=l(n,2,0,n.component.withvalue+"%");l(n,1,0,t);var e=l(n,6,0,0,1,2,3,4,5,6,7,8,9);l(n,5,0,e)},null)}function T(l){return e["\u0275vid"](0,[e["\u0275qud"](402653184,1,{timer:0}),(l()(),e["\u0275eld"](1,0,null,null,26,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,1,"h2",[["style","color:tomato;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](5,null,["LEVEL : ",""])),(l()(),e["\u0275eld"](6,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,null,1,"h3",[["style","color:blue;"]],null,null,null,null,null)),(l()(),e["\u0275ted"](8,null,["STAGE : ",""])),(l()(),e["\u0275and"](16777216,null,null,1,null,w)),e["\u0275did"](10,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](11,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275ted"](12,null,[" Moves : "," Time : "])),(l()(),e["\u0275eld"](13,0,null,null,1,"cd-timer",[["format","hms"]],null,[[null,"onComplete"]],function(l,n,t){var e=!0;return"onComplete"===n&&(e=!1!==l.component.finish()&&e),e},g.b,g.a)),e["\u0275did"](14,4374528,[[1,4],["basicTimer",4]],0,h.a,[e.ElementRef,e.Renderer2],{format:[0,"format"]},{onComplete:"onComplete"}),(l()(),e["\u0275eld"](15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,y)),e["\u0275did"](18,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](19,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,C)),e["\u0275did"](21,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275and"](16777216,null,null,1,null,R)),e["\u0275did"](23,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](26,16384,null,0,r.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),e["\u0275eld"](27,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var t=n.component;l(n,10,0,t.showorign),l(n,14,0,"hms"),l(n,18,0,5!=t.status),l(n,21,0,0==t.status),l(n,23,0,1==t.status),l(n,26,0,1==t.status||3==t.status)},function(l,n){var t=n.component;l(n,1,0,void 0),l(n,5,0,t.level),l(n,8,0,t.stageNb),l(n,12,0,t.nbdep)})}function N(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-grid1",[],null,null,null,T,b)),e["\u0275did"](1,4440064,null,0,p,[f.a,c.a,v.c,I.a,I.l],null,null)],function(l,n){l(n,1,0)},null)}var x=e["\u0275ccf"]("app-grid1",p,N,{},{},[]),M=function(){return function(){}}(),O=t("+Sv0"),A=t("WB5j");t.d(n,"Grid1ModuleNgFactory",function(){return D});var D=e["\u0275cmf"](i,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,x]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,r.NgLocalization,r.NgLocaleLocalization,[e.LOCALE_ID,[2,r["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,a.j,a.j,[]),e["\u0275mpd"](1073742336,r.CommonModule,r.CommonModule,[]),e["\u0275mpd"](1073742336,I.o,I.o,[[2,I.u],[2,I.l]]),e["\u0275mpd"](1073742336,M,M,[]),e["\u0275mpd"](1073742336,O.a,O.a,[]),e["\u0275mpd"](1073742336,A.a,A.a,[]),e["\u0275mpd"](1073742336,a.i,a.i,[]),e["\u0275mpd"](1073742336,a.a,a.a,[]),e["\u0275mpd"](1073742336,o.a,o.a,[]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1024,I.j,function(){return[[{path:"",component:p}]]},[])])})}}]);