// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;r=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};var c=r;function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var v=Math.floor,p=Math.ceil;function b(r){return r<0?p(r):v(r)}var s=Number.NEGATIVE_INFINITY,d=Number.POSITIVE_INFINITY,w=1023;function N(r){return r===d||r===s}var A,m=2147483647,_="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),g=Object.prototype.toString,h=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol.toStringTag:"";A=_&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,o;if(null==r)return g.call(r);t=r[U],o=U,n=null!=(u=r)&&h.call(u,o);try{r[U]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[U]=t:delete r[U],e}:function(r){return g.call(r)};var j,I=A,O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(O&&t instanceof Uint32Array||"[object Uint32Array]"===I(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G([1,3.14,-3.14,NaN]),t=n,r=(H&&t instanceof Float64Array||"[object Float64Array]"===I(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var L,M=F,V="function"==typeof Uint8Array,W="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;L=function(){var r,n,t;if("function"!=typeof W)return!1;try{n=new W(n=[1,3.14,-3.14,256,257]),t=n,r=(V&&t instanceof Uint8Array||"[object Uint8Array]"===I(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var k,Y=L,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,65536,65537]),t=n,r=(q&&t instanceof Uint16Array||"[object Uint16Array]"===I(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new M(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function nr(r,n,t,e){return X[0]=r,n[e]=Z[$],n[e+t]=Z[rr],n}function tr(r){return nr(r,[0,0],1,0)}l(tr,"assign",nr);var er,ur,or=!0===Q?1:0,ir=new M(1),fr=new T(ir.buffer);function ar(r){return ir[0]=r,fr[or]}!0===Q?(er=1,ur=0):(er=0,ur=1);var cr={HIGH:er,LOW:ur},lr=new M(1),yr=new T(lr.buffer),vr=cr.HIGH,pr=cr.LOW;function br(r,n){return yr[vr]=r,yr[pr]=n,lr[0]}var sr=[0,0];function dr(r,n){var t,e;return tr.assign(r,sr,1,0),t=sr[0],t&=m,e=ar(n),br(t|=e&=2147483648,sr[1])}function wr(r){return Math.abs(r)}function Nr(r,n,t,e){return y(r)||N(r)?(n[e]=r,n[e+t]=0,n):0!==r&&wr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Nr(r,[0,0],1,0)}),"assign",Nr);var Ar=[0,0],mr=[0,0];function _r(r,n){var t,e;return 0===n||0===r||y(r)||N(r)?r:(Nr(r,Ar,1,0),n+=Ar[1],n+=function(r){var n=ar(r);return(n=(2146435072&n)>>>20)-w|0}(r=Ar[0]),n<-1074?dr(0,r):n>1023?r<0?s:d:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,tr.assign(r,mr,1,0),t=mr[0],t&=2148532223,e*br(t|=n+w<<20,mr[1])))}var gr=1.4426950408889634,hr=1/(1<<28);function Ur(r){var n;return y(r)||r===d?r:r===s?0:r>709.782712893384?d:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<hr?1+r:function(r,n,t){var e,u,o,i;return _r(1-(n-(e=r-n)*(o=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),t)}(r-.6931471803691238*(n=b(r<0?gr*r-.5:gr*r+.5)),1.9082149292705877e-10*n,n)}function jr(r){return v(r)===r}function Ir(r){return jr(r/2)}function Or(r){return Ir(r>0?r-1:r+1)}var Sr=Math.sqrt,Er=!0===Q?0:1,Fr=new M(1),Tr=new T(Fr.buffer);function Hr(r,n){return Fr[0]=r,Tr[Er]=n>>>0,Fr[0]}function Gr(r){return 0|r}var Pr=!0===Q?1:0,Lr=new M(1),Mr=new T(Lr.buffer);function Vr(r,n){return Lr[0]=r,Mr[Pr]=n>>>0,Lr[0]}var Wr=1048576,xr=[1,1.5],kr=[0,.5849624872207642],Yr=[0,1.350039202129749e-8],qr=1048575,Cr=1048576,zr=1083179008,Br=1e300,Dr=1e-300,Jr=[0,0],Kr=[0,0];function Qr(r,n){var t,e,u,o,i,f,a,c,l,v,p,b,A,_;if(y(r)||y(n))return NaN;if(tr.assign(n,Jr,1,0),i=Jr[0],0===Jr[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Sr(r);if(-.5===n)return 1/Sr(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(N(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:wr(r)<1==(n===d)?0:d}(r,n)}if(tr.assign(r,Jr,1,0),o=Jr[0],0===Jr[1]){if(0===o)return function(r,n){return n===s?d:n===d?0:n>0?Or(n)?r:0:Or(n)?dr(d,r):d}(r,n);if(1===r)return 1;if(-1===r&&Or(n))return-1;if(N(r))return r===s?Qr(-0,-n):n<0?0:d}if(r<0&&!1===jr(n))return(r-r)/(r-r);if(u=wr(r),t=o&m|0,e=i&m|0,a=i>>>31|0,f=(f=o>>>31|0)&&Or(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(ar(r)&m)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?f*Br*Br:f*Dr*Dr;if(t>1072693248)return 0===a?f*Br*Br:f*Dr*Dr;p=function(r,n){var t,e,u,o,i,f;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(f=u)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Hr(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r}(Kr,u)}else p=function(r,n,t){var e,u,o,i,f,a,c,l,y,v,p,b,s,d,N,A,m,_,g,h,U;return _=0,t<Wr&&(_-=53,t=ar(n*=9007199254740992)),_+=(t>>20)-w|0,t=1072693248|(g=1048575&t|0),g<=235662?h=0:g<767610?h=1:(h=0,_+=1,t-=Wr),i=Hr(u=(A=(n=Vr(n,t))-(c=xr[h]))*(m=1/(n+c)),0),e=524288+(t>>1|536870912),a=Vr(0,e+=h<<18),N=(o=u*u)*o*(0===(U=o)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=Hr(a=3+(o=i*i)+(N+=(f=m*(A-i*a-i*(n-(a-c))))*(i+u)),0),s=(p=-7.028461650952758e-9*(y=Hr(y=(A=i*a)+(m=f*a+(N-(a-3-o))*u),0))+.9617966939259756*(m-(y-A))+Yr[h])-((b=Hr(b=(v=.9617967009544373*y)+p+(l=kr[h])+(d=_),0))-d-l-v),r[0]=b,r[1]=s,r}(Kr,u,t);if(b=(v=(n-(c=Hr(n,0)))*p[0]+n*p[1])+(l=c*p[0]),tr.assign(b,Jr,1,0),A=Gr(Jr[0]),_=Gr(Jr[1]),A>=zr){if(0!=(A-zr|_))return f*Br*Br;if(v+8008566259537294e-32>b-l)return f*Br*Br}else if((A&m)>=1083231232){if(0!=(A-3230714880|_))return f*Dr*Dr;if(v<=b-l)return f*Dr*Dr}return b=function(r,n,t){var e,u,o,i,f,a,c,l,y,v;return y=((l=r&m|0)>>20)-w|0,c=0,l>1071644672&&(u=Vr(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&m)>>20)-w|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Gr(r=ar(a=1-((a=(o=.6931471824645996*(u=Hr(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-o))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?_r(a,c):Vr(a,r)}(A,l,v),f*b}var Rr=.8450629115104675;function Xr(r){var n,t,e,u,o,i,f,a;if(y(r))return NaN;if(r===d)return 0;if(r===s)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(u=.12837916709551256+(e=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(e),o=1+e*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(e),i=u/o,r<.25?1-(r+r*i):(u=r*i,.5-(u+=r-.5)));if(t<1.25)return f=(o=t-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(o)-.0023621185607526594,a=1+o*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(o),n?1+Rr+f/a:1-Rr-f/a;if(t<28){if(o=1/(t*t),t<2.857142857142857)u=o*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(o)-.009864944034847148,o=1+o*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(o);else{if(r<-6)return 2;u=o*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(o)-.0098649429247001,o=1+o*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(o)}return u=Ur(-(e=Hr(t,0))*e-.5625)*Ur((e-t)*(e+t)+u/o),n?2-u/t:u/t}return n?2:0}function Zr(r){return function(){return r}}function $r(r){return y(r)?Zr(NaN):function(n){return y(n)?NaN:n<r?0:1}}function rn(r,n){var t;return y(r)||y(n)||n<0?Zr(NaN):0===n?$r(r):(t=n*Sr(2),function(n){return y(n)?NaN:.5*Xr(-(n-r)/t)})}l((function(r,n){return y(r)||y(n)?NaN:r<n?0:1}),"factory",$r),l((function(r,n,t){return y(r)||y(n)||y(t)||t<0?NaN:0===t?r<n?0:1:.5*Xr(-(r-n)/(t*Sr(2)))}),"factory",rn);var nn=3.141592653589793,tn=rn(0,1);function en(r,n,t,e,u){var o,i,f,a;return y(r)||y(n)||y(t)||u<=0||n>=t?NaN:r<n||r>t?0:(o=2*Qr(u,2),i=1/Sr(o*nn),f=-1/o,a=tn((t-e)/u)-tn((n-e)/u),i*Ur(f*Qr(r-e,2))/a)}var un=rn(0,1);l(en,"factory",(function(r,n,t,e){var u,o,i,f;return y(r)||y(n)||y(t)||y(e)||e<=0||r>=n?Zr(NaN):(u=2*Qr(e,2),o=1/Sr(u*nn),i=-1/u,f=un((n-t)/e)-un((r-t)/e),function(e){return y(e)?NaN:e<r||e>n?0:o*Ur(i*Qr(e-t,2))/f})}));var on={};return c(on,"pdf",{configurable:!1,enumerable:!0,writable:!1,value:en}),on},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).truncatedNormal=n();
//# sourceMappingURL=index.js.map
