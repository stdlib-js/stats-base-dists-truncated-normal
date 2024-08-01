// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var A=String.fromCharCode,N=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,e,t,a,o,f,c,s,l,p,v,g,y;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(n=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function k(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(I(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function x(r){var n,e;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[k(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return U.apply(null,n)}var F,j=Object.prototype,T=j.toString,O=j.__defineGetter__,V=j.__defineSetter__,$=j.__lookupGetter__,G=j.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===T.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&($.call(r,n)||G.call(r,n)?(t=r.__proto__,r.__proto__=j,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,n,e.get),o&&V&&V.call(r,n,e.set),r};var H=F;function W(r,n,e){H(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function C(r){return r!=r}var L=Math.floor,P=Math.ceil;function R(r){return r<0?P(r):L(r)}var M=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,X=1023,Y=1023,q=-1023,z=-1074;function B(r){return r===Z||r===M}var D=2147483648,J=2147483647;var K="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Q=Object.prototype.toString;var rr=Object.prototype.hasOwnProperty;var nr,er="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof er?er.toStringTag:"";nr=K&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return Q.call(r);e=r[tr],a=tr,n=null!=(i=r)&&rr.call(i,a);try{r[tr]=void 0}catch(n){return Q.call(r)}return t=Q.call(r),n?r[tr]=e:delete r[tr],t}:function(r){return Q.call(r)};var ir=nr,ar="function"==typeof Uint32Array;var or="function"==typeof Uint32Array?Uint32Array:null;var ur,fr="function"==typeof Uint32Array?Uint32Array:void 0;ur=function(){var r,n,e;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(ar&&e instanceof Uint32Array||"[object Uint32Array]"===ir(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Float64Array;var lr="function"==typeof Float64Array?Float64Array:null;var pr,vr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,n,e;if("function"!=typeof lr)return!1;try{n=new lr([1,3.14,-3.14,NaN]),e=n,r=(sr&&e instanceof Float64Array||"[object Float64Array]"===ir(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=pr,yr="function"==typeof Uint8Array;var dr="function"==typeof Uint8Array?Uint8Array:null;var hr,wr="function"==typeof Uint8Array?Uint8Array:void 0;hr=function(){var r,n,e;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,256,257]),e=n,r=(yr&&e instanceof Uint8Array||"[object Uint8Array]"===ir(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br=hr,mr="function"==typeof Uint16Array;var Ar="function"==typeof Uint16Array?Uint16Array:null;var Nr,_r="function"==typeof Uint16Array?Uint16Array:void 0;Nr=function(){var r,n,e;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),e=n,r=(mr&&e instanceof Uint16Array||"[object Uint16Array]"===ir(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:Nr,uint8:br};(Er=new Ur.uint16(1))[0]=4660;var Sr,Ir,kr=52===new Ur.uint8(Er.buffer)[0];!0===kr?(Sr=1,Ir=0):(Sr=0,Ir=1);var xr={HIGH:Sr,LOW:Ir},Fr=new gr(1),jr=new cr(Fr.buffer),Tr=xr.HIGH,Or=xr.LOW;function Vr(r,n,e,t){return Fr[0]=r,n[t]=jr[Tr],n[t+e]=jr[Or],n}function $r(r){return Vr(r,[0,0],1,0)}W($r,"assign",Vr);var Gr,Hr,Wr=!0===kr?1:0,Cr=new gr(1),Lr=new cr(Cr.buffer);function Pr(r){return Cr[0]=r,Lr[Wr]}!0===kr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Rr={HIGH:Gr,LOW:Hr},Mr=new gr(1),Zr=new cr(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function qr(r,n){return Zr[Xr]=r,Zr[Yr]=n,Mr[0]}var zr=[0,0];function Br(r,n){var e,t;return $r.assign(r,zr,1,0),e=zr[0],e&=J,t=Pr(n),qr(e|=t&=D,zr[1])}var Dr=22250738585072014e-324;function Jr(r){return Math.abs(r)}var Kr=4503599627370496;function Qr(r,n,e,t){return C(r)||B(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Jr(r)<Dr?(n[t]=r*Kr,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}W((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var rn=2146435072;var nn=2220446049250313e-31,en=2148532223,tn=[0,0],an=[0,0];function on(r,n){var e,t;return 0===n||0===r||C(r)||B(r)?r:(Qr(r,tn,1,0),r=tn[0],n+=tn[1],n+=function(r){var n=Pr(r);return(n=(n&rn)>>>20)-X|0}(r),n<z?Br(0,r):n>Y?r<0?M:Z:(n<=q?(n+=52,t=nn):t=1,$r.assign(r,an,1,0),e=an[0],e&=en,t*qr(e|=n+X<<20,an[1])))}var un=.6931471803691238,fn=1.9082149292705877e-10,cn=1.4426950408889634,sn=709.782712893384,ln=-745.1332191019411,pn=1/(1<<28),vn=-pn;function gn(r){var n;return C(r)||r===Z?r:r===M?0:r>sn?Z:r<ln?0:r>vn&&r<pn?1+r:function(r,n,e){var t,i,a,o;return on(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-(n=R(r<0?cn*r-.5:cn*r+.5))*un,n*fn,n)}function yn(r){return L(r)===r}function dn(r){return yn(r/2)}function hn(r){return dn(r>0?r-1:r+1)}var wn=Math.sqrt,bn=!0===kr?0:1,mn=new gr(1),An=new cr(mn.buffer);function Nn(r,n){return mn[0]=r,An[bn]=n>>>0,mn[0]}function _n(r){return 0|r}var En=1072693247,Un=1e300,Sn=1e-300;var In=!0===kr?1:0,kn=new gr(1),xn=new cr(kn.buffer);function Fn(r,n){return kn[0]=r,xn[In]=n>>>0,kn[0]}var jn=1048575,Tn=1048576,On=1072693248,Vn=536870912,$n=524288,Gn=20,Hn=9007199254740992,Wn=.9617966939259756,Cn=.9617967009544373,Ln=-7.028461650952758e-9,Pn=[1,1.5],Rn=[0,.5849624872207642],Mn=[0,1.350039202129749e-8];var Zn=1.4426950408889634,Xn=1.4426950216293335,Yn=1.9259629911266175e-8;var qn=.6931471805599453,zn=1048575;var Bn=1048576,Dn=1071644672,Jn=20,Kn=.6931471824645996,Qn=-1.904654299957768e-9;var re=1072693247,ne=1105199104,ee=1139802112,te=1083179008,ie=1072693248,ae=1083231232,oe=3230714880,ue=31,fe=1e300,ce=1e-300,se=8008566259537294e-32,le=[0,0],pe=[0,0];function ve(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,g,y;if(C(r)||C(n))return NaN;if($r.assign(n,le,1,0),o=le[0],0===le[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return wn(r);if(-.5===n)return 1/wn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(B(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(n===Z)?0:Z}(r,n)}if($r.assign(r,le,1,0),a=le[0],0===le[1]){if(0===a)return function(r,n){return n===M?Z:n===Z?0:n>0?hn(n)?r:0:hn(n)?Br(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&hn(n))return-1;if(B(r))return r===M?ve(-0,-n):n<0?0:Z}if(r<0&&!1===yn(n))return(r-r)/(r-r);if(i=Jr(r),e=a&J|0,t=o&J|0,f=o>>>ue|0,u=(u=a>>>ue|0)&&hn(n)?-1:1,t>ne){if(t>ee)return function(r,n){return(Pr(r)&J)<=En?n<0?Un*Un:Sn*Sn:n>0?Un*Un:Sn*Sn}(r,n);if(e<re)return 1===f?u*fe*fe:u*ce*ce;if(e>ie)return 0===f?u*fe*fe:u*ce*ce;p=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Yn-a*Zn)-((t=Nn(t=(o=Xn*i)+u,0))-o),r[0]=t,r[1]=e,r}(pe,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,A,N,_;return m=0,e<Tn&&(m-=53,e=Pr(n*=Hn)),m+=(e>>Gn)-X|0,e=(A=e&jn|0)|On|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,e-=Tn),o=Nn(i=(w=(n=Fn(n,e))-(c=Pn[N]))*(b=1/(n+c)),0),t=(e>>1|Vn)+$n,f=Fn(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Nn(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),l=Nn(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=Cn*l,y=(v=Ln*l+(b-(l-w))*Wn+Mn[N])-((g=Nn(g=p+v+(s=Rn[N])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(pe,i,e);if(v=(l=(n-(c=Nn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),$r.assign(v,le,1,0),g=_n(le[0]),y=_n(le[1]),g>=te){if(0!=(g-te|y))return u*fe*fe;if(l+se>v-s)return u*fe*fe}else if((g&J)>=ae){if(0!=(g-oe|y))return u*ce*ce;if(l<=v-s)return u*ce*ce}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&J|0)>>Jn)-X|0,c=0,s>Dn&&(i=Fn(0,((c=r+(Bn>>l+1)>>>0)&~(zn>>(l=((c&J)>>Jn)-X|0)))>>>0),c=(c&zn|Bn)>>Jn-l>>>0,r<0&&(c=-c),n-=i),r=_n(r=Pr(f=1-((f=(a=(i=Nn(i=e+n,0))*Kn)+(o=(e-(i-n))*qn+i*Qn))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Jn>>>0)>>Jn<=0?on(f,c):Fn(f,r)}(g,s,l),u*v}var ge=1e-300,ye=13877787807814457e-33,de=.8450629115104675,he=.12837916709551256,we=1,be=-.0023621185607526594,me=1,Ae=-.009864944034847148,Ne=1,_e=-.0098649429247001,Ee=1;function Ue(r){var n,e,t,i,a,o,u,f;if(C(r))return NaN;if(r===Z)return 0;if(r===M)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<ye?1-r:(i=he+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),a=we+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),o=i/a,r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(e<1.25)return u=be+(a=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a),f=me+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),n?1+de+u/f:1-de-u/f;if(e<28){if(a=1/(e*e),e<2.857142857142857)i=Ae+a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a),a=Ne+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a);else{if(r<-6)return 2-ge;i=_e+a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a),a=Ee+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)}return i=gn(-(t=Nn(e,0))*t-.5625)*gn((t-e)*(t+e)+i/a),n?2-i/e:i/e}return n?2-ge:ge*ge}function Se(r){return function(){return r}}function Ie(r){return C(r)?Se(NaN):function(n){if(C(n))return NaN;return n<r?0:1}}function ke(r,n){var e;return C(r)||C(n)||n<0?Se(NaN):0===n?Ie(r):(e=n*wn(2),function(n){if(C(n))return NaN;return.5*Ue(-(n-r)/e)})}W((function(r,n){return C(r)||C(n)?NaN:r<n?0:1}),"factory",Ie),W((function(r,n,e){return C(r)||C(n)||C(e)||e<0?NaN:0===e?r<n?0:1:.5*Ue(-(r-n)/(e*wn(2)))}),"factory",ke);var xe=3.141592653589793,Fe=ke(0,1);function je(r,n,e,t,i){var a,o,u,f;return C(r)||C(n)||C(e)||i<=0||n>=e?NaN:r<n||r>e?0:(a=2*ve(i,2),o=1/wn(a*xe),u=-1/a,f=Fe((e-t)/i)-Fe((n-t)/i),o*gn(u*ve(r-t,2))/f)}var Te=ke(0,1);W(je,"factory",(function(r,n,e,t){var i,a,o,u;return C(r)||C(n)||C(e)||C(t)||t<=0||r>=n?Se(NaN):(i=2*ve(t,2),a=1/wn(i*xe),o=-1/i,u=Te((n-e)/t)-Te((r-e)/t),function(t){if(C(t))return NaN;if(t<r||t>n)return 0;return a*gn(o*ve(t-e,2))/u})}));var Oe={};H(Oe,"pdf",{configurable:!1,enumerable:!0,writable:!1,value:je});export{Oe as default,je as pdf};
//# sourceMappingURL=mod.js.map
