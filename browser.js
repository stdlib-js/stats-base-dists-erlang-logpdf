// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var s,p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),N=Object.prototype.toString,b=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",d=p&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return N.call(r);t=r[w],f=w,n=null!=(u=r)&&b.call(u,f);try{r[w]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[w]=t:delete r[w],e}:function(r){return N.call(r)},h="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,g=s,U="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(U&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=m,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M,L={uint16:H,uint8:G};(M=new L.uint16(1))[0]=4660;var V=52===new L.uint8(M.buffer)[0],W=!0===V?1:0,Y=new S(1),q=new g(Y.buffer);function C(r){return Y[0]=r,q[W]}var z=!0===V?1:0,B=new S(1),D=new g(B.buffer);function J(r,n){return B[0]=r,D[z]=n>>>0,B[0]}var K=1023,Q=Number.NEGATIVE_INFINITY,R=.6931471803691238,X=1.9082149292705877e-10,Z=1048575;function $(r){var n,t,e,u,f,i,o,a,c,l,y,s;return 0===r?Q:v(r)||r<0?NaN:(f=0,(t=C(r))<1048576&&(f-=54,t=C(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-K|0,f+=(a=614244+(t&=Z)&1048576|0)>>20|0,o=(r=J(r,t|1072693248^a))-1,(Z&2+t)<3?0===o?0===f?0:f*R+f*X:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*R-(i-f*X-o)):(a=t-398458|0,c=440401-t|0,u=(y=(s=(l=o/(2+o))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*R-(n-(l*(n+i)+f*X)-o)):0===f?o-l*(o-i):f*R-(l*(o-i)-f*X-o))))}var rr=Number.POSITIVE_INFINITY;function nr(r){return r===rr||r===Q}function tr(r){return Math.abs(r)}var er=Math.ceil;function ur(r){return r<0?er(r):l(r)}function fr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ir=-.16666666666666632;function or(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ir+u*t):r-(u*(.5*n-e*t)-n-e*ir)}var ar,cr,lr=!0===V?0:1,yr=new S(1),vr=new g(yr.buffer);!0===V?(ar=1,cr=0):(ar=0,cr=1);var sr={HIGH:ar,LOW:cr},pr=new S(1),Nr=new g(pr.buffer),br=sr.HIGH,wr=sr.LOW;function dr(r,n){return Nr[br]=r,Nr[wr]=n,pr[0]}var hr,Ar,_r=2147483647;!0===V?(hr=1,Ar=0):(hr=0,Ar=1);var mr={HIGH:hr,LOW:Ar},gr=new S(1),Ur=new g(gr.buffer),jr=mr.HIGH,Ir=mr.LOW;function Or(r,n,t,e){return gr[0]=r,n[e]=Ur[jr],n[e+t]=Ur[Ir],n}function Sr(r){return Or(r,[0,0],1,0)}c(Sr,"assign",Or);var Er=[0,0];function Fr(r,n){var t,e;return Sr.assign(r,Er,1,0),t=Er[0],t&=_r,e=C(n),dr(t|=e&=2147483648,Er[1])}function Tr(r,n,t,e){return v(r)||nr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&tr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||v(r)||nr(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-K|0}(r=Hr[0]),n<-1074?Fr(0,r):n>1023?r<0?Q:rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Sr.assign(r,Gr,1,0),t=Gr[0],t&=2148532223,e*dr(t|=n+K<<20,Gr[1])))}function kr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var xr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lr=16777216,Vr=5.960464477539063e-8,Wr=kr(20),Yr=kr(20),qr=kr(20),Cr=kr(20);function zr(r,n,t,e,u,f,i,o,a){var c,y,v,s,p,N,b,w,d;for(s=f,d=e[t],w=t,p=0;w>0;p++)y=Vr*d|0,Cr[p]=d-Lr*y|0,d=e[w-1]+y,w-=1;if(d=Pr(d,u),d-=8*l(.125*d),d-=b=0|d,v=0,u>0?(b+=p=Cr[t-1]>>24-u,Cr[t-1]-=p<<24-u,v=Cr[t-1]>>23-u):0===u?v=Cr[t-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<t;p++)w=Cr[p],0===c?0!==w&&(c=1,Cr[p]=16777216-w):Cr[p]=16777215-w;if(u>0)switch(u){case 1:Cr[t-1]&=8388607;break;case 2:Cr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=Pr(1,u)))}if(0===d){for(w=0,p=t-1;p>=f;p--)w|=Cr[p];if(0===w){for(N=1;0===Cr[f-N];N++);for(p=t+1;p<=t+N;p++){for(a[o+p]=xr[i+p],y=0,w=0;w<=o;w++)y+=r[w]*a[o+(p-w)];e[p]=y}return zr(r,n,t+=N,e,u,f,i,o,a)}}if(0===d)for(t-=1,u-=24;0===Cr[t];)t-=1,u-=24;else(d=Pr(d,-u))>=Lr?(y=Vr*d|0,Cr[t]=d-Lr*y|0,u+=24,Cr[t+=1]=y):Cr[t]=0|d;for(y=Pr(1,u),p=t;p>=0;p--)e[p]=y*Cr[p],y*=Vr;for(p=t;p>=0;p--){for(y=0,N=0;N<=s&&N<=t-p;N++)y+=Mr[N]*e[p+N];qr[t-p]=y}for(y=0,p=t;p>=0;p--)y+=qr[p];for(n[0]=0===v?y:-y,y=qr[0]-y,p=1;p<=t;p++)y+=qr[p];return n[1]=0===v?y:-y,7&b}function Br(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Wr[a]=c<0?0:xr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Wr[i+(a-c)];Yr[a]=u}return zr(r,n,4,Yr,o,4,f,i,Wr)}var Dr=Math.round;function Jr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Dr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(C(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(C(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Kr=1.5707963267341256,Qr=6077100506506192e-26,Rr=2*Qr,Xr=3*Qr,Zr=4*Qr,$r=[0,0,0],rn=[0,0];function nn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&C(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Jr(r,u,n):u<=1073928572?r>0?(a=r-Kr,n[0]=a-Qr,n[1]=a-n[0]-Qr,1):(a=r+Kr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-1):r>0?(a=r-2*Kr,n[0]=a-Rr,n[1]=a-n[0]-Rr,2):(a=r+2*Kr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Jr(r,u,n):r>0?(a=r-3*Kr,n[0]=a-Xr,n[1]=a-n[0]-Xr,3):(a=r+3*Kr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-3):1075388923===u?Jr(r,u,n):r>0?(a=r-4*Kr,n[0]=a-Zr,n[1]=a-n[0]-Zr,4):(a=r+4*Kr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-4);if(u<1094263291)return Jr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return yr[0]=r,vr[lr]}(r),a=dr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)$r[i]=0|a,a=16777216*(a-$r[i]);for($r[2]=a,f=3;0===$r[f-1];)f-=1;return o=Br($r,rn,e,f),r<0?(n[0]=-rn[0],n[1]=-rn[1],-o):(n[0]=rn[0],n[1]=rn[1],o)}var tn=[0,0];function en(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1044381696?1:fr(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,tn)){case 0:return fr(tn[0],tn[1]);case 1:return-or(tn[0],tn[1]);case 2:return-fr(tn[0],tn[1]);default:return or(tn[0],tn[1])}}var un=[0,0];function fn(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1045430272?r:or(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,un)){case 0:return or(un[0],un[1]);case 1:return fr(un[0],un[1]);case 2:return-or(un[0],un[1]);default:return-fr(un[0],un[1])}}var on=3.141592653589793,an=1.4616321449683622,cn=1.4616321449683622;function ln(r){var n,t,e,u,f,i,o,a,c,l,y,s,p;if(v(r)||nr(r))return r;if(0===r)return rr;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$(r);if(n){if(r>=4503599627370496)return rr;if(c=function(r){var n,t;return v(r)||nr(r)?NaN:0===(n=tr(t=r%2))||1===n?Fr(0,t):n<.25?fn(on*t):n<.75?Fr(en(on*(n=.5-n)),t):n<1.25?(t=Fr(1,t)-t,fn(on*t)):n<1.75?-Fr(en(on*(n-=1.5)),t):(t-=Fr(2,t),fn(on*t))}(r),0===c)return rr;t=$(on/tr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-$(r),r>=an-1+.27?(y=1-r,e=0):r>=an-1-.27?(y=r-(cn-1),e=1):(y=r,e=2)):(p=0,r>=an+.27?(y=2-r,e=0):r>=an-.27?(y=r-cn,e=1):(y=r-1,e=2)),e){case 0:i=.07721566490153287+(s=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(s),f=s*(.3224670334241136+s*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(s)),p+=(o=y*i+f)-.5*y;break;case 1:i=.48383612272381005+(l=(s=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),p+=(o=s*i-(-3638676997039505e-33-l*(f+y*u)))-.12148629053584961;break;case 2:i=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),f=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),p+=-.5*y+i/f}else if(r<8)switch(o=(y=r-(e=ur(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),p=.5*y+o/a,s=1,e){case 7:s*=y+6;case 6:s*=y+5;case 5:s*=y+4;case 4:s*=y+3;case 3:p+=$(s*=y+2)}else r<0x400000000000000?(c=$(r),l=.4189385332046727+(s=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=s*s),p=(r-.5)*(c-1)+l):p=r*($(r)-1);return n&&(p=t-p),p}var yn=1.4426950408889634,vn=1/(1<<28);function sn(r){var n;return v(r)||r===rr?r:r===Q?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<vn?1+r:function(r,n,t){var e,u,f,i;return Pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=ur(r<0?yn*r-.5:yn*r+.5)),1.9082149292705877e-10*n,n)}function pn(r){return l(r)===r}function Nn(r){return 0===r&&1/r===Q}function bn(r){return pn(r/2)}function wn(r){return bn(r>0?r-1:r+1)}var dn=Math.sqrt,hn=!0===V?0:1,An=new S(1),_n=new g(An.buffer);function mn(r,n){return An[0]=r,_n[hn]=n>>>0,An[0]}function gn(r){return 0|r}var Un=1048576,jn=[1,1.5],In=[0,.5849624872207642],On=[0,1.350039202129749e-8],Sn=1048575,En=1048576,Fn=1083179008,Tn=1e300,Hn=1e-300,Gn=[0,0],Pn=[0,0];function kn(r,n){var t,e,u,f,i,o,a,c,l,y,s,p,N,b;if(v(r)||v(n))return NaN;if(Sr.assign(n,Gn,1,0),i=Gn[0],0===Gn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return dn(r);if(-.5===n)return 1/dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(nr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tr(r)<1==(n===rr)?0:rr}(r,n)}if(Sr.assign(r,Gn,1,0),f=Gn[0],0===Gn[1]){if(0===f)return function(r,n){return n===Q?rr:n===rr?0:n>0?wn(n)?r:0:wn(n)?Fr(rr,r):rr}(r,n);if(1===r)return 1;if(-1===r&&wn(n))return-1;if(nr(r))return r===Q?kn(-0,-n):n<0?0:rr}if(r<0&&!1===pn(n))return(r-r)/(r-r);if(u=tr(r),t=f&_r|0,e=i&_r|0,a=i>>>31|0,o=(o=f>>>31|0)&&wn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(C(r)&_r)<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Tn*Tn:o*Hn*Hn;if(t>1072693248)return 0===a?o*Tn*Tn:o*Hn*Hn;s=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=mn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Pn,u)}else s=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,s,p,N,b,w,d,h,A,_,m,g;return A=0,t<Un&&(A-=53,t=C(n*=9007199254740992)),A+=(t>>20)-K|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=Un),i=mn(u=(d=(n=J(n,t))-(c=jn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=J(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=mn(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),N=(s=-7.028461650952758e-9*(y=mn(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+On[m])-((p=mn(p=(v=.9617967009544373*y)+s+(l=In[m])+(b=A),0))-b-l-v),r[0]=p,r[1]=N,r}(Pn,u,t);if(p=(y=(n-(c=mn(n,0)))*s[0]+n*s[1])+(l=c*s[0]),Sr.assign(p,Gn,1,0),N=gn(Gn[0]),b=gn(Gn[1]),N>=Fn){if(0!=(N-Fn|b))return o*Tn*Tn;if(y+8008566259537294e-32>p-l)return o*Tn*Tn}else if((N&_r)>=1083231232){if(0!=(N-3230714880|b))return o*Hn*Hn;if(y<=p-l)return o*Hn*Hn}return p=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&_r|0)>>20)-K|0,c=0,l>1071644672&&(u=J(0,((c=r+(En>>y+1)>>>0)&~(Sn>>(y=((c&_r)>>20)-K|0)))>>>0),c=(c&Sn|En)>>20-y>>>0,r<0&&(c=-c),n-=u),r=gn(r=C(a=1-((a=(f=.6931471824645996*(u=mn(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):J(a,r)}(N,l,y),o*p}function xn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=sn(r),2.5066282746310007*(t=r>143.01608?(e=kn(r,.5*r-.25))*(e/t):kn(r,r-.5)/t)*n}function Mn(r,n){return n/((1+.5772156649015329*r)*r)}var Ln=.6931471803691238,Vn=1.9082149292705877e-10;function Wn(r){return 0===r&&1/r===rr}function Yn(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===rr||n===rr?rr:r===n&&0===r?Wn(r)?r:n:r>n?r:n;for(e=Q,f=0;f<t;f++){if(v(u=arguments[f])||u===rr)return u;(u>e||u===e&&0===u&&Wn(u))&&(e=u)}return e}function qn(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===Q||n===Q?Q:r===n&&0===r?Nn(r)?r:n:r<n?r:n;for(e=rr,f=0;f<t;f++){if(v(u=arguments[f])||u===Q)return u;(u<e||u===e&&0===u&&Nn(u))&&(e=u)}return e}var Cn=709.782712893384,zn=-708.3964185322641,Bn=10.900511;function Dn(r,n){var t,e,u,f,i,o,a,c,y,s;return a=(n-r-Bn+.5)/(u=r+Bn-.5),r<1?n<=zn?sn(r*$(n)-n-ln(r)):kn(n,r)*sn(-n)/function(r){var n,t,e,u;if(pn(r)&&r<0||r===Q||v(r))return NaN;if(0===r)return Nn(r)?Q:rr;if(r>171.61447887182297)return rr;if(r<-170.5674972726612)return 0;if((t=tr(r))>33)return r>=0?xn(r):(n=0==(1&(e=l(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*fn(on*u),n*on/(tr(u)*xn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Mn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Mn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(tr(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||v(r))return NaN;if(-1===r)return Q;if(r===rr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=C(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),f/=c):(l=((t=C(c=r))>>20)-K,f=0),(t&=1048575)<434334?c=J(c,1072693248|t):(l+=1,c=J(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Ln+(f+=l*Vn):l*Ln-((a=n*(1-.6666666666666666*u))-(l*Vn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*Ln-(n-(i*(n+a)+(l*Vn+f))-u))}(a)-a)+-10.400511*n/u,t=sn(t)):qn(f=r*$(n/u),i=r-n)<=zn||Yn(f,i)>=Cn?(e=i/r,qn(f,i)/2>zn&&Yn(f,i)/2<Cn?t=(o=kn(n/u,r/2)*sn(i/2))*o:qn(f,i)/4>zn&&Yn(f,i)/4<Cn&&n>r?(t=(o=kn(n/u,r/4)*sn(i/4))*o,t*=t):t=e>zn&&e<Cn?kn(n*sn(e)/u,r):sn(f+i)):t=kn(n/u,r)*sn(i),t*=dn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(y=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),s=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(y=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),s=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),y/s)))}function Jn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:rr:(t=Dn(r,n),n<1&&17976931348623157e292*n<t?rr:(0===t?t=sn(t=r*$(n)-n-ln(r)-$(n)):t/=n,t))}function Kn(r,n,t){return v(r)||v(n)||v(t)||n<0||t<=0?NaN:r<0||r===rr?Q:0===n?0===r?rr:Q:$(Jn(n,r*t))+$(t)}function Qn(r){return function(){return r}}function Rn(r){return v(r)?Qn(NaN):function(n){return v(n)?NaN:n===r?rr:Q}}function Xn(r,n){return v(r)||v(n)||r<0||n<=0?Qn(NaN):0===r?Rn(0):function(t){return v(t)?NaN:t<0||t===rr?Q:$(Jn(r,t*n))+$(n)}}function Zn(r,n,t){return y(n)?Kn(r,n,t):NaN}return c((function(r,n){return v(r)||v(n)?NaN:r===n?rr:Q}),"factory",Rn),c(Kn,"factory",Xn),c(Zn,"factory",(function(r,n){return y(r)?Xn(r,n):Qn(NaN)})),Zn},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=browser.js.map
