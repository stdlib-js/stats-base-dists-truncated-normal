// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).truncatedNormal=n()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,a=e.__lookupSetter__;var c,v=t,l=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(f.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},y=(c=n()?v:l,c);var p=function(r,n,t){y(r,n,{configurable:!1,enumerable:!0,writable:!1,value:t})},b=c;var d=function(r,n,t){b(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var w=function(r){return r!=r},N=Math.floor,s=Math.ceil,A=N,m=s;var _=function(r){return r<0?m(r):A(r)},h=Number.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,g=U,j=h;var I=function(r){return r===g||r===j};var O=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var S=function(){return O&&"symbol"==typeof Symbol.toStringTag},E=Object.prototype.toString,F=E;var T=function(r){return F.call(r)},H=Object.prototype.hasOwnProperty;var G=function(r,n){return null!=r&&H.call(r,n)},P="function"==typeof Symbol?Symbol.toStringTag:"",L=G,M=P,V=E;var W=T,x=function(r){var n,t,e;if(null==r)return V.call(r);t=r[M],n=L(r,M);try{r[M]=void 0}catch(n){return V.call(r)}return e=V.call(r),n?r[M]=t:delete r[M],e},k=S()?x:W,Y=k,q="function"==typeof Uint32Array;var C="function"==typeof Uint32Array?Uint32Array:null,z=function(r){return q&&r instanceof Uint32Array||"[object Uint32Array]"===Y(r)},B=C;var D=function(){var r,n;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),r=z(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var J="function"==typeof Uint32Array?Uint32Array:void 0,K=function(){throw new Error("not implemented")},Q=D()?J:K,R=k,X="function"==typeof Float64Array;var Z="function"==typeof Float64Array?Float64Array:null,$=function(r){return X&&r instanceof Float64Array||"[object Float64Array]"===R(r)},rr=Z;var nr=function(){var r,n;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),r=$(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var tr="function"==typeof Float64Array?Float64Array:void 0,er=function(){throw new Error("not implemented")},ur=nr()?tr:er,or=k,ir="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null,ar=function(r){return ir&&r instanceof Uint8Array||"[object Uint8Array]"===or(r)},cr=fr;var vr=function(){var r,n;if("function"!=typeof cr)return!1;try{n=new cr(n=[1,3.14,-3.14,256,257]),r=ar(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var lr="function"==typeof Uint8Array?Uint8Array:void 0,yr=function(){throw new Error("not implemented")},pr=vr()?lr:yr,br=k,dr="function"==typeof Uint16Array;var wr="function"==typeof Uint16Array?Uint16Array:null,Nr=function(r){return dr&&r instanceof Uint16Array||"[object Uint16Array]"===br(r)},sr=wr;var Ar=function(){var r,n;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,65536,65537]),r=Nr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var mr,_r="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},Ur={uint16:Ar()?_r:hr,uint8:pr};(mr=new Ur.uint16(1))[0]=4660;var gr,jr,Ir=52===new Ur.uint8(mr.buffer)[0];!0===Ir?(gr=1,jr=0):(gr=0,jr=1);var Or=Q,Sr={HIGH:gr,LOW:jr},Er=new ur(1),Fr=new Or(Er.buffer),Tr=Sr.HIGH,Hr=Sr.LOW;var Gr=function(r,n){return Er[0]=n,r[0]=Fr[Tr],r[1]=Fr[Hr],r};var Pr=function(r,n){return 1===arguments.length?Gr([0,0],r):Gr(r,n)},Lr=Pr,Mr=Q,Vr=!0===Ir?1:0,Wr=new ur(1),xr=new Mr(Wr.buffer);var kr,Yr,qr=function(r){return Wr[0]=r,xr[Vr]};!0===Ir?(kr=1,Yr=0):(kr=0,Yr=1);var Cr=Q,zr={HIGH:kr,LOW:Yr},Br=new ur(1),Dr=new Cr(Br.buffer),Jr=zr.HIGH,Kr=zr.LOW;var Qr=function(r,n){return Dr[Jr]=r,Dr[Kr]=n,Br[0]},Rr=Lr,Xr=qr,Zr=Qr,$r=[0,0];var rn=function(r,n){var t,e;return Rr($r,r),t=$r[0],t&=2147483647,e=Xr(n),Zr(t|=e&=2147483648,$r[1])};var nn=function(r){return Math.abs(r)},tn=I,en=w,un=nn;var on=function(r,n){return en(n)||tn(n)?(r[0]=n,r[1]=0,r):0!==n&&un(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var fn=function(r,n){return 1===arguments.length?on([0,0],r):on(r,n)},an=qr;var cn=function(r){var n=an(r);return(n=(2146435072&n)>>>20)-1023|0},vn=U,ln=h,yn=w,pn=I,bn=rn,dn=fn,wn=cn,Nn=Lr,sn=Qr,An=[0,0],mn=[0,0];var _n=function(r,n){var t,e;return 0===n||0===r||yn(r)||pn(r)?r:(dn(An,r),n+=An[1],(n+=wn(r=An[0]))<-1074?bn(0,r):n>1023?r<0?ln:vn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Nn(mn,r),t=mn[0],t&=2148532223,e*sn(t|=n+1023<<20,mn[1])))},hn=_n;var Un=hn,gn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var jn=w,In=_,On=h,Sn=U,En=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*gn(u),Un(1-(n-e*o/(2-o)-r),t)},Fn=1.4426950408889634,Tn=1/(1<<28);var Hn=function(r){var n;return jn(r)||r===Sn?r:r===On?0:r>709.782712893384?Sn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Tn?1+r:(n=In(r<0?Fn*r-.5:Fn*r+.5),En(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Gn=N;var Pn=function(r){return Gn(r)===r},Ln=Pn;var Mn=function(r){return Ln(r/2)};var Vn=function(r){return Mn(r>0?r-1:r+1)},Wn=Math.sqrt,xn=Q,kn=!0===Ir?0:1,Yn=new ur(1),qn=new xn(Yn.buffer);var Cn=function(r,n){return Yn[0]=r,qn[kn]=n>>>0,Yn[0]},zn=Cn;var Bn=function(r){return 0|r},Dn=Vn,Jn=rn,Kn=h,Qn=U;var Rn=function(r,n){return n===Kn?Qn:n===Qn?0:n>0?Dn(n)?r:0:Dn(n)?Jn(Qn,r):Qn},Xn=qr;var Zn=function(r,n){return(2147483647&Xn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},$n=nn,rt=U;var nt=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:$n(r)<1==(n===rt)?0:rt},tt=Q,et=!0===Ir?1:0,ut=new ur(1),ot=new tt(ut.buffer);var it=function(r,n){return ut[0]=r,ot[et]=n>>>0,ut[0]};var ft=qr,at=zn,ct=it,vt=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},lt=1048576,yt=[1,1.5],pt=[0,.5849624872207642],bt=[0,1.350039202129749e-8];var dt=zn,wt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nt=qr,st=it,At=zn,mt=Bn,_t=hn,ht=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Ut=2147483647,gt=1048575,jt=1048576;var It=w,Ot=Vn,St=I,Et=Pn,Ft=Wn,Tt=nn,Ht=Lr,Gt=zn,Pt=Bn,Lt=h,Mt=U,Vt=Rn,Wt=Zn,xt=nt,kt=function(r,n,t){var e,u,o,i,f,a,c,v,l,y,p,b,d,w,N,s,A,m,_,h;return m=0,t<lt&&(m-=53,t=ft(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(_=1048575&t|0),_<=235662?h=0:_<767610?h=1:(h=0,m+=1,t-=lt),e=524288+(t>>1|536870912),f=(A=1/((n=ct(n,t))+(c=yt[h])))*((s=n-c)-(i=at(u=s*A,0))*(a=ct(0,e+=h<<18))-i*(n-(a-c))),N=(o=u*u)*o*vt(o),a=at(a=3+(o=i*i)+(N+=f*(i+u)),0),d=(p=-7.028461650952758e-9*(l=at(l=(s=i*a)+(A=f*a+(N-(a-3-o))*u),0))+.9617966939259756*(A-(l-s))+bt[h])-((b=at(b=(y=.9617967009544373*l)+p+(v=pt[h])+(w=m),0))-w-v-y),r[0]=b,r[1]=d,r},Yt=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*wt(u)))-((e=dt(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},qt=function(r,n,t){var e,u,o,i,f,a,c,v,l;return l=((v=r&Ut|0)>>20)-1023|0,c=0,v>1071644672&&(u=st(0,((c=r+(jt>>l+1)>>>0)&~(gt>>(l=((c&Ut)>>20)-1023|0)))>>>0),c=(c&gt|jt)>>20-l>>>0,r<0&&(c=-c),n-=u),f=(i=.6931471805599453*(t-((u=At(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(o=.6931471824645996*u)+i)-o),e=a-(u=a*a)*ht(u),r=Nt(a=1-(a*e/(e-2)-(f+a*f)-a)),r=mt(r),a=(r+=c<<20>>>0)>>20<=0?_t(a,c):st(a,r)},Ct=2147483647,zt=1083179008,Bt=1e300,Dt=1e-300,Jt=[0,0],Kt=[0,0];var Qt=function r(n,t){var e,u,o,i,f,a,c,v,l,y,p,b,d,w;if(It(n)||It(t))return NaN;if(Ht(Jt,t),f=Jt[0],0===Jt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Ft(n);if(-.5===t)return 1/Ft(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(St(t))return xt(n,t)}if(Ht(Jt,n),i=Jt[0],0===Jt[1]){if(0===i)return Vt(n,t);if(1===n)return 1;if(-1===n&&Ot(t))return-1;if(St(n))return n===Lt?r(-0,-t):t<0?0:Mt}if(n<0&&!1===Et(t))return(n-n)/(n-n);if(o=Tt(n),e=i&Ct|0,u=f&Ct|0,c=f>>>31|0,a=(a=i>>>31|0)&&Ot(t)?-1:1,u>1105199104){if(u>1139802112)return Wt(n,t);if(e<1072693247)return 1===c?a*Bt*Bt:a*Dt*Dt;if(e>1072693248)return 0===c?a*Bt*Bt:a*Dt*Dt;p=Yt(Kt,o)}else p=kt(Kt,o,e);if(y=(t-(v=Gt(t,0)))*p[0]+t*p[1],l=v*p[0],Ht(Jt,b=y+l),d=Pt(Jt[0]),w=Pt(Jt[1]),d>=zt){if(0!=(d-zt|w))return a*Bt*Bt;if(y+8008566259537294e-32>b-l)return a*Bt*Bt}else if((d&Ct)>=1083231232){if(0!=(d-3230714880|w))return a*Dt*Dt;if(y<=b-l)return a*Dt*Dt}return a*(b=qt(d,l,y))},Rt=Qt;var Xt=w,Zt=Hn,$t=zn,re=U,ne=h,te=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},ee=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},ue=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},oe=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},ie=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},fe=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},ae=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},ce=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},ve=.8450629115104675;var le=function(r){var n,t,e,u,o,i,f,a;if(Xt(r))return NaN;if(r===re)return 0;if(r===ne)return 2;if(0===r)return 1;if(r<0?(n=!0,t=-r):(n=!1,t=r),t<.84375)return t<13877787807814457e-33?1-r:(i=(u=.12837916709551256+(e=r*r)*te(e))/(o=1+e*ee(e)),r<.25?1-(r+r*i):(u=r*i,.5-(u+=r-.5)));if(t<1.25)return f=(o=t-1)*ue(o)-.0023621185607526594,a=1+o*oe(o),n?1+ve+f/a:1-ve-f/a;if(t<28){if(o=1/(t*t),t<2.857142857142857)u=o*ie(o)-.009864944034847148,o=1+o*fe(o);else{if(r<-6)return 2;u=o*ae(o)-.0098649429247001,o=1+o*ce(o)}return e=$t(t,0),u=Zt(-e*e-.5625)*Zt((e-t)*(e+t)+u/o),n?2-u/t:u/t}return n?2:0},ye=le,pe=Wn,be=w;var de=function(r,n,t){var e;return be(r)||be(n)||be(t)||t<0?NaN:0===t?r<n?0:1:(e=t*pe(2),.5*ye(-(r-n)/e))};var we=function(r){return function(){return r}},Ne=w;var se=we,Ae=w;var me=function(r,n){return Ne(r)||Ne(n)?NaN:r<n?0:1};d(me,"factory",(function(r){return Ae(r)?se(NaN):function(n){if(Ae(n))return NaN;return n<r?0:1}}));var _e=we,he=me.factory,Ue=w,ge=Wn,je=le;var Ie=de;d(Ie,"factory",(function(r,n){var t;return Ue(r)||Ue(n)||n<0?_e(NaN):0===n?he(r):(t=n*ge(2),function(n){if(Ue(n))return NaN;return.5*je(-(n-r)/t)})}));var Oe=Ie,Se=Hn,Ee=Rt,Fe=Wn,Te=w,He=(0,Oe.factory)(0,1);var Ge=function(r,n,t,e,u){var o,i,f,a;return Te(r)||Te(n)||Te(t)||u<=0||n>=t?NaN:r<n||r>t?0:(o=2*Ee(u,2),i=1/Fe(3.141592653589793*o),f=-1/o,a=He((t-e)/u)-He((n-e)/u),i*Se(f*Ee(r-e,2))/a)},Pe=we,Le=Hn,Me=Rt,Ve=w,We=Wn,xe=(0,Oe.factory)(0,1);var ke=Ge;d(ke,"factory",(function(r,n,t,e){var u,o,i,f;return Ve(r)||Ve(n)||Ve(t)||Ve(e)||e<=0||r>=n?Pe(NaN):(u=2*Me(e,2),o=1/We(3.141592653589793*u),i=-1/u,f=xe((n-t)/e)-xe((r-t)/e),function(e){if(Ve(e))return NaN;if(e<r||e>n)return 0;return o*Le(i*Me(e-t,2))/f})}));var Ye={};return p(Ye,"pdf",ke),Ye}));
//# sourceMappingURL=bundle.js.map
