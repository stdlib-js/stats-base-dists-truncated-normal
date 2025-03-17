// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,y,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,f,c,s,l,p,y,g,d;if(!N(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,y=t.width,g=t.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function k(r){var e,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F,j=Object.prototype,T=j.toString,O=j.__defineGetter__,V=j.__defineSetter__,$=j.__lookupGetter__,G=j.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===T.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&($.call(r,e)||G.call(r,e)?(t=r.__proto__,r.__proto__=j,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(r,e,n.get),o&&V&&V.call(r,e,n.set),r};var H=F;function W(r,e,n){H(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r){return r!=r}var L=Math.floor,P=Math.ceil;function R(r){return r<0?P(r):L(r)}var M=Number.NEGATIVE_INFINITY,Z=Number.POSITIVE_INFINITY,X=1023,Y=1023,q=-1023,z=-1074;function B(r){return r===Z||r===M}var D,J=2147483648,K=2147483647,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"";D=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return rr.call(r);n=r[tr],a=tr,e=null!=(i=r)&&er.call(i,a);try{r[tr]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return rr.call(r)};var ir,ar=D,or="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,e,n;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(or&&n instanceof Uint32Array||"[object Uint32Array]"===ar(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr,sr=ir,lr="function"==typeof Float64Array,pr="function"==typeof Float64Array?Float64Array:null,yr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr([1,3.14,-3.14,NaN]),n=e,r=(lr&&n instanceof Float64Array||"[object Float64Array]"===ar(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=cr,vr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;gr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(vr&&n instanceof Uint8Array||"[object Uint8Array]"===ar(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr=gr,Ar="function"==typeof Uint16Array,Nr="function"==typeof Uint16Array?Uint16Array:null,_r="function"==typeof Uint16Array?Uint16Array:void 0;br=function(){var r,e,n;if("function"!=typeof Nr)return!1;try{e=new Nr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(Ar&&n instanceof Uint16Array||"[object Uint16Array]"===ar(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")};var Er,Ur={uint16:br,uint8:mr};(Er=new Ur.uint16(1))[0]=4660;var Sr,Ir,xr=52===new Ur.uint8(Er.buffer)[0];!0===xr?(Sr=1,Ir=0):(Sr=0,Ir=1);var kr={HIGH:Sr,LOW:Ir},Fr=new dr(1),jr=new sr(Fr.buffer),Tr=kr.HIGH,Or=kr.LOW;function Vr(r,e,n,t){return Fr[0]=r,e[t]=jr[Tr],e[t+n]=jr[Or],e}function $r(r){return Vr(r,[0,0],1,0)}W($r,"assign",Vr);var Gr,Hr,Wr=!0===xr?1:0,Cr=new dr(1),Lr=new sr(Cr.buffer);function Pr(r){return Cr[0]=r,Lr[Wr]}!0===xr?(Gr=1,Hr=0):(Gr=0,Hr=1);var Rr={HIGH:Gr,LOW:Hr},Mr=new dr(1),Zr=new sr(Mr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function qr(r,e){return Zr[Xr]=r,Zr[Yr]=e,Mr[0]}var zr=[0,0];function Br(r,e){var n,t;return $r.assign(r,zr,1,0),n=zr[0],n&=K,t=Pr(e),qr(n|=t&=J,zr[1])}var Dr=22250738585072014e-324;function Jr(r){return Math.abs(r)}var Kr=4503599627370496;function Qr(r,e,n,t){return C(r)||B(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Jr(r)<Dr?(e[t]=r*Kr,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}W((function(r){return Qr(r,[0,0],1,0)}),"assign",Qr);var re=2146435072,ee=2220446049250313e-31,ne=2148532223,te=[0,0],ie=[0,0];function ae(r,e){var n,t;return 0===e||0===r||C(r)||B(r)?r:(Qr(r,te,1,0),r=te[0],e+=te[1],e+=function(r){var e=Pr(r);return(e=(e&re)>>>20)-X|0}(r),e<z?Br(0,r):e>Y?r<0?M:Z:(e<=q?(e+=52,t=ee):t=1,$r.assign(r,ie,1,0),n=ie[0],n&=ne,t*qr(n|=e+X<<20,ie[1])))}var oe=.6931471803691238,ue=1.9082149292705877e-10,fe=1.4426950408889634,ce=709.782712893384,se=-745.1332191019411,le=1/(1<<28),pe=-le;function ye(r){var e;return C(r)||r===Z?r:r===M?0:r>ce?Z:r<se?0:r>pe&&r<le?1+r:function(r,e,n){var t,i,a,o;return ae(1-(e-(t=r-e)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(e=R(r<0?fe*r-.5:fe*r+.5))*oe,e*ue,e)}function ge(r){return L(r)===r}function de(r){return ge(r/2)}function ve(r){return de(r>0?r-1:r+1)}var he=Math.sqrt,we=!0===xr?0:1,be=new dr(1),me=new sr(be.buffer);function Ae(r,e){return be[0]=r,me[we]=e>>>0,be[0]}function Ne(r){return 0|r}var _e=1072693247,Ee=1e300,Ue=1e-300,Se=!0===xr?1:0,Ie=new dr(1),xe=new sr(Ie.buffer);function ke(r,e){return Ie[0]=r,xe[Se]=e>>>0,Ie[0]}var Fe=1048575,je=1048576,Te=1072693248,Oe=536870912,Ve=524288,$e=20,Ge=9007199254740992,He=.9617966939259756,We=.9617967009544373,Ce=-7.028461650952758e-9,Le=[1,1.5],Pe=[0,.5849624872207642],Re=[0,1.350039202129749e-8],Me=1.4426950408889634,Ze=1.4426950216293335,Xe=1.9259629911266175e-8,Ye=.6931471805599453,qe=1048575,ze=1048576,Be=1071644672,De=20,Je=.6931471824645996,Ke=-1.904654299957768e-9,Qe=1072693247,rn=1105199104,en=1139802112,nn=1083179008,tn=1072693248,an=1083231232,on=3230714880,un=31,fn=1e300,cn=1e-300,sn=8008566259537294e-32,ln=[0,0],pn=[0,0];function yn(r,e){var n,t,i,a,o,u,f,c,s,l,p,y,g,d;if(C(r)||C(e))return NaN;if($r.assign(e,ln,1,0),o=ln[0],0===ln[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return he(r);if(-.5===e)return 1/he(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(B(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Jr(r)<1==(e===Z)?0:Z}(r,e)}if($r.assign(r,ln,1,0),a=ln[0],0===ln[1]){if(0===a)return function(r,e){return e===M?Z:e===Z?0:e>0?ve(e)?r:0:ve(e)?Br(Z,r):Z}(r,e);if(1===r)return 1;if(-1===r&&ve(e))return-1;if(B(r))return r===M?yn(-0,-e):e<0?0:Z}if(r<0&&!1===ge(e))return(r-r)/(r-r);if(i=Jr(r),n=a&K|0,t=o&K|0,f=o>>>un|0,u=(u=a>>>un|0)&&ve(e)?-1:1,t>rn){if(t>en)return function(r,e){return(Pr(r)&K)<=_e?e<0?Ee*Ee:Ue*Ue:e>0?Ee*Ee:Ue*Ue}(r,e);if(n<Qe)return 1===f?u*fn*fn:u*cn*cn;if(n>tn)return 0===f?u*fn*fn:u*cn*cn;p=function(r,e){var n,t,i,a,o,u,f;return a=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(u=i*Xe-a*Me)-((t=Ae(t=(o=Ze*i)+u,0))-o),r[0]=t,r[1]=n,r}(pn,i)}else p=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,v,h,w,b,m,A,N,_;return m=0,n<je&&(m-=53,n=Pr(e*=Ge)),m+=(n>>$e)-X|0,n=(A=n&Fe|0)|Te|0,A<=235662?N=0:A<767610?N=1:(N=0,m+=1,n-=je),o=Ae(i=(w=(e=ke(e,n))-(c=Le[N]))*(b=1/(e+c)),0),t=(n>>1|Oe)+Ve,f=ke(0,t+=N<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Ae(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),l=Ae(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=We*l,d=(y=Ce*l+(b-(l-w))*He+Re[N])-((g=Ae(g=p+y+(s=Pe[N])+(v=m),0))-v-s-p),r[0]=g,r[1]=d,r}(pn,i,n);if(y=(l=(e-(c=Ae(e,0)))*p[0]+e*p[1])+(s=c*p[0]),$r.assign(y,ln,1,0),g=Ne(ln[0]),d=Ne(ln[1]),g>=nn){if(0!=(g-nn|d))return u*fn*fn;if(l+sn>y-s)return u*fn*fn}else if((g&K)>=an){if(0!=(g-on|d))return u*cn*cn;if(l<=y-s)return u*cn*cn}return y=function(r,e,n){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&K|0)>>De)-X|0,c=0,s>Be&&(i=ke(0,((c=r+(ze>>l+1)>>>0)&~(qe>>(l=((c&K)>>De)-X|0)))>>>0),c=(c&qe|ze)>>De-l>>>0,r<0&&(c=-c),e-=i),r=Ne(r=Pr(f=1-((f=(a=(i=Ae(i=n+e,0))*Je)+(o=(n-(i-e))*Ye+i*Ke))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<De>>>0)>>De<=0?ae(f,c):ke(f,r)}(g,s,l),u*y}var gn=1e-300,dn=13877787807814457e-33,vn=.8450629115104675,hn=.12837916709551256,wn=1,bn=-.0023621185607526594,mn=1,An=-.009864944034847148,Nn=1,_n=-.0098649429247001,En=1;function Un(r){var e,n,t,i,a,o,u,f;if(C(r))return NaN;if(r===Z)return 0;if(r===M)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<dn?1-r:(i=hn+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),a=wn+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),o=i/a,r<.25?1-(r+r*o):(i=r*o,.5-(i+=r-.5)));if(n<1.25)return u=bn+(a=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(a),f=mn+a*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(a),e?1+vn+u/f:1-vn-u/f;if(n<28){if(a=1/(n*n),n<2.857142857142857)i=An+a*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(a),a=Nn+a*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(a);else{if(r<-6)return 2-gn;i=_n+a*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(a),a=En+a*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(a)}return i=ye(-(t=Ae(n,0))*t-.5625)*ye((t-n)*(t+n)+i/a),e?2-i/n:i/n}return e?2-gn:gn*gn}function Sn(r){return function(){return r}}function In(r){return C(r)?Sn(NaN):function(e){return C(e)?NaN:e<r?0:1}}function xn(r,e){var n;return C(r)||C(e)||e<0?Sn(NaN):0===e?In(r):(n=e*he(2),function(e){return C(e)?NaN:.5*Un(-(e-r)/n)})}W((function(r,e){return C(r)||C(e)?NaN:r<e?0:1}),"factory",In),W((function(r,e,n){return C(r)||C(e)||C(n)||n<0?NaN:0===n?r<e?0:1:.5*Un(-(r-e)/(n*he(2)))}),"factory",xn);var kn=3.141592653589793,Fn=xn(0,1);function jn(r,e,n,t,i){var a,o,u,f;return C(r)||C(e)||C(n)||i<=0||e>=n?NaN:r<e||r>n?0:(a=2*yn(i,2),o=1/he(a*kn),u=-1/a,f=Fn((n-t)/i)-Fn((e-t)/i),o*ye(u*yn(r-t,2))/f)}var Tn=xn(0,1);W(jn,"factory",(function(r,e,n,t){var i,a,o,u;return C(r)||C(e)||C(n)||C(t)||t<=0||r>=e?Sn(NaN):(i=2*yn(t,2),a=1/he(i*kn),o=-1/i,u=Tn((e-n)/t)-Tn((r-n)/t),function(t){return C(t)?NaN:t<r||t>e?0:a*ye(o*yn(t-n,2))/u})}));var On={};return H(On,"pdf",{configurable:!1,enumerable:!0,writable:!1,value:jn}),On},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).truncatedNormal=e();
//# sourceMappingURL=index.js.map
