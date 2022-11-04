// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(r,n,a.get),v&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l=Math.floor;function y(r){return l(r)===r&&r>=0}function v(r){return r!=r}var p,s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),N=Object.prototype.toString,b=Object.prototype.hasOwnProperty,w="function"==typeof Symbol?Symbol.toStringTag:"",d=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return N.call(r);t=r[w],f=w,n=null!=(u=r)&&b.call(u,f);try{r[w]=void 0}catch(n){return N.call(r)}return e=N.call(r),n?r[w]=t:delete r[w],e}:function(r){return N.call(r)},h="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===d(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var m,U=p,g="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,I="function"==typeof Float64Array?Float64Array:void 0;m=function(){var r,n,t;if("function"!=typeof j)return!1;try{n=new j([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===d(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O,S=m,E="function"==typeof Uint8Array,F="function"==typeof Uint8Array?Uint8Array:null,T="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof F)return!1;try{n=new F(n=[1,3.14,-3.14,256,257]),t=n,r=(E&&t instanceof Uint8Array||"[object Uint8Array]"===d(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?T:function(){throw new Error("not implemented")};var H,G=O,P="function"==typeof Uint16Array,k="function"==typeof Uint16Array?Uint16Array:null,x="function"==typeof Uint16Array?Uint16Array:void 0;H=function(){var r,n,t;if("function"!=typeof k)return!1;try{n=new k(n=[1,3.14,-3.14,65536,65537]),t=n,r=(P&&t instanceof Uint16Array||"[object Uint16Array]"===d(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var M,L={uint16:H,uint8:G};(M=new L.uint16(1))[0]=4660;var V=52===new L.uint8(M.buffer)[0],W=!0===V?1:0,Y=new S(1),q=new U(Y.buffer);function C(r){return Y[0]=r,q[W]}var z=!0===V?1:0,B=new S(1),D=new U(B.buffer);function J(r,n){return B[0]=r,D[z]=n>>>0,B[0]}var K=1023,Q=Number.NEGATIVE_INFINITY,R=.6931471803691238,X=1.9082149292705877e-10,Z=1048575;function $(r){var n,t,e,u,f,i,o,a,c,l,y,p;return 0===r?Q:v(r)||r<0?NaN:(f=0,(t=C(r))<1048576&&(f-=54,t=C(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-K|0,f+=(a=614244+(t&=Z)&1048576|0)>>20|0,o=(r=J(r,t|1072693248^a))-1,(Z&2+t)<3?0===o?0===f?0:f*R+f*X:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*R-(i-f*X-o)):(a=t-398458|0,c=440401-t|0,u=(y=(p=(l=o/(2+o))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*R-(n-(l*(n+i)+f*X)-o)):0===f?o-l*(o-i):f*R-(l*(o-i)-f*X-o))))}var rr=Number.POSITIVE_INFINITY;function nr(r){return r===rr||r===Q}function tr(r){return Math.abs(r)}var er=Math.ceil;function ur(r){return r<0?er(r):l(r)}function fr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ir=-.16666666666666632;function or(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ir+u*t):r-(u*(.5*n-e*t)-n-e*ir)}var ar,cr,lr=!0===V?0:1,yr=new S(1),vr=new U(yr.buffer);!0===V?(ar=1,cr=0):(ar=0,cr=1);var pr,sr,Nr={HIGH:ar,LOW:cr},br=new S(1),wr=new U(br.buffer),dr=Nr.HIGH,hr=Nr.LOW;function Ar(r,n){return wr[dr]=r,wr[hr]=n,br[0]}!0===V?(pr=1,sr=0):(pr=0,sr=1);var _r={HIGH:pr,LOW:sr},mr=new S(1),Ur=new U(mr.buffer),gr=_r.HIGH,jr=_r.LOW;function Ir(r,n){return mr[0]=n,r[0]=Ur[gr],r[1]=Ur[jr],r}function Or(r,n){return 1===arguments.length?Ir([0,0],r):Ir(r,n)}var Sr=[0,0];function Er(r,n){var t,e;return Or(Sr,r),t=Sr[0],t&=2147483647,e=C(n),Ar(t|=e&=2147483648,Sr[1])}function Fr(r,n,t,e){return v(r)||nr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&tr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Fr(r,[0,0],1,0)}),"assign",Fr);var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||v(r)||nr(r)?r:(Fr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-K|0}(r=Tr[0]),n<-1074?Er(0,r):n>1023?r<0?Q:rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Or(Hr,r),t=Hr[0],t&=2148532223,e*Ar(t|=n+K<<20,Hr[1])))}function Pr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var kr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Mr=16777216,Lr=5.960464477539063e-8,Vr=Pr(20),Wr=Pr(20),Yr=Pr(20),qr=Pr(20);function Cr(r,n,t,e,u,f,i,o,a){var c,y,v,p,s,N,b,w,d;for(p=f,d=e[t],w=t,s=0;w>0;s++)y=Lr*d|0,qr[s]=d-Mr*y|0,d=e[w-1]+y,w-=1;if(d=Gr(d,u),d-=8*l(.125*d),d-=b=0|d,v=0,u>0?(b+=s=qr[t-1]>>24-u,qr[t-1]-=s<<24-u,v=qr[t-1]>>23-u):0===u?v=qr[t-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<t;s++)w=qr[s],0===c?0!==w&&(c=1,qr[s]=16777216-w):qr[s]=16777215-w;if(u>0)switch(u){case 1:qr[t-1]&=8388607;break;case 2:qr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=Gr(1,u)))}if(0===d){for(w=0,s=t-1;s>=f;s--)w|=qr[s];if(0===w){for(N=1;0===qr[f-N];N++);for(s=t+1;s<=t+N;s++){for(a[o+s]=kr[i+s],y=0,w=0;w<=o;w++)y+=r[w]*a[o+(s-w)];e[s]=y}return Cr(r,n,t+=N,e,u,f,i,o,a)}}if(0===d)for(t-=1,u-=24;0===qr[t];)t-=1,u-=24;else(d=Gr(d,-u))>=Mr?(y=Lr*d|0,qr[t]=d-Mr*y|0,u+=24,qr[t+=1]=y):qr[t]=0|d;for(y=Gr(1,u),s=t;s>=0;s--)e[s]=y*qr[s],y*=Lr;for(s=t;s>=0;s--){for(y=0,N=0;N<=p&&N<=t-s;N++)y+=xr[N]*e[s+N];Yr[t-s]=y}for(y=0,s=t;s>=0;s--)y+=Yr[s];for(n[0]=0===v?y:-y,y=Yr[0]-y,s=1;s<=t;s++)y+=Yr[s];return n[1]=0===v?y:-y,7&b}function zr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Vr[a]=c<0?0:kr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Vr[i+(a-c)];Wr[a]=u}return Cr(r,n,4,Wr,o,4,f,i,Vr)}var Br=Math.round;function Dr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Br(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(C(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(C(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Jr=1.5707963267341256,Kr=6077100506506192e-26,Qr=2*Kr,Rr=3*Kr,Xr=4*Kr,Zr=[0,0,0],$r=[0,0];function rn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&C(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Dr(r,u,n):u<=1073928572?r>0?(a=r-Jr,n[0]=a-Kr,n[1]=a-n[0]-Kr,1):(a=r+Jr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-1):r>0?(a=r-2*Jr,n[0]=a-Qr,n[1]=a-n[0]-Qr,2):(a=r+2*Jr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Dr(r,u,n):r>0?(a=r-3*Jr,n[0]=a-Rr,n[1]=a-n[0]-Rr,3):(a=r+3*Jr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-3):1075388923===u?Dr(r,u,n):r>0?(a=r-4*Jr,n[0]=a-Xr,n[1]=a-n[0]-Xr,4):(a=r+4*Jr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-4);if(u<1094263291)return Dr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return yr[0]=r,vr[lr]}(r),a=Ar(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Zr[i]=0|a,a=16777216*(a-Zr[i]);for(Zr[2]=a,f=3;0===Zr[f-1];)f-=1;return o=zr(Zr,$r,e,f),r<0?(n[0]=-$r[0],n[1]=-$r[1],-o):(n[0]=$r[0],n[1]=$r[1],o)}var nn=[0,0];function tn(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1044381696?1:fr(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,nn)){case 0:return fr(nn[0],nn[1]);case 1:return-or(nn[0],nn[1]);case 2:return-fr(nn[0],nn[1]);default:return or(nn[0],nn[1])}}var en=[0,0];function un(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1045430272?r:or(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,en)){case 0:return or(en[0],en[1]);case 1:return fr(en[0],en[1]);case 2:return-or(en[0],en[1]);default:return-fr(en[0],en[1])}}var fn=3.141592653589793,on=1.4616321449683622,an=1.4616321449683622;function cn(r){var n,t,e,u,f,i,o,a,c,l,y,p,s;if(v(r)||nr(r))return r;if(0===r)return rr;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$(r);if(n){if(r>=4503599627370496)return rr;if(c=function(r){var n,t;return v(r)||nr(r)?NaN:0===(n=tr(t=r%2))||1===n?Er(0,t):n<.25?un(fn*t):n<.75?Er(tn(fn*(n=.5-n)),t):n<1.25?(t=Er(1,t)-t,un(fn*t)):n<1.75?-Er(tn(fn*(n-=1.5)),t):(t-=Er(2,t),un(fn*t))}(r),0===c)return rr;t=$(fn/tr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-$(r),r>=on-1+.27?(y=1-r,e=0):r>=on-1-.27?(y=r-(an-1),e=1):(y=r,e=2)):(s=0,r>=on+.27?(y=2-r,e=0):r>=on-.27?(y=r-an,e=1):(y=r-1,e=2)),e){case 0:i=.07721566490153287+(p=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),f=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),s+=(o=y*i+f)-.5*y;break;case 1:i=.48383612272381005+(l=(p=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(o=p*i-(-3638676997039505e-33-l*(f+y*u)))-.12148629053584961;break;case 2:i=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),f=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+i/f}else if(r<8)switch(o=(y=r-(e=ur(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+o/a,p=1,e){case 7:p*=y+6;case 6:p*=y+5;case 5:p*=y+4;case 4:p*=y+3;case 3:s+=$(p*=y+2)}else r<0x400000000000000?(c=$(r),l=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=p*p),s=(r-.5)*(c-1)+l):s=r*($(r)-1);return n&&(s=t-s),s}var ln=1.4426950408889634,yn=1/(1<<28);function vn(r){var n;return v(r)||r===rr?r:r===Q?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<yn?1+r:function(r,n,t){var e,u,f,i;return Gr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=ur(r<0?ln*r-.5:ln*r+.5)),1.9082149292705877e-10*n,n)}function pn(r){return l(r)===r}function sn(r){return 0===r&&1/r===Q}function Nn(r){return pn(r/2)}function bn(r){return Nn(r>0?r-1:r+1)}var wn=Math.sqrt,dn=!0===V?0:1,hn=new S(1),An=new U(hn.buffer);function _n(r,n){return hn[0]=r,An[dn]=n>>>0,hn[0]}function mn(r){return 0|r}var Un=1048576,gn=[1,1.5],jn=[0,.5849624872207642],In=[0,1.350039202129749e-8],On=2147483647,Sn=1048575,En=1048576,Fn=2147483647,Tn=1083179008,Hn=1e300,Gn=1e-300,Pn=[0,0],kn=[0,0];function xn(r,n){var t,e,u,f,i,o,a,c,l,y,p,s,N,b;if(v(r)||v(n))return NaN;if(Or(Pn,n),i=Pn[0],0===Pn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return wn(r);if(-.5===n)return 1/wn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(nr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:tr(r)<1==(n===rr)?0:rr}(r,n)}if(Or(Pn,r),f=Pn[0],0===Pn[1]){if(0===f)return function(r,n){return n===Q?rr:n===rr?0:n>0?bn(n)?r:0:bn(n)?Er(rr,r):rr}(r,n);if(1===r)return 1;if(-1===r&&bn(n))return-1;if(nr(r))return r===Q?xn(-0,-n):n<0?0:rr}if(r<0&&!1===pn(n))return(r-r)/(r-r);if(u=tr(r),t=f&Fn|0,e=i&Fn|0,a=i>>>31|0,o=(o=f>>>31|0)&&bn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&C(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Hn*Hn:o*Gn*Gn;if(t>1072693248)return 0===a?o*Hn*Hn:o*Gn*Gn;p=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=_n(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(kn,u)}else p=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,N,b,w,d,h,A,_,m,U;return A=0,t<Un&&(A-=53,t=C(n*=9007199254740992)),A+=(t>>20)-K|0,t=1072693248|(_=1048575&t|0),_<=235662?m=0:_<767610?m=1:(m=0,A+=1,t-=Un),i=_n(u=(d=(n=J(n,t))-(c=gn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=J(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=_n(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),N=(p=-7.028461650952758e-9*(y=_n(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+In[m])-((s=_n(s=(v=.9617967009544373*y)+p+(l=jn[m])+(b=A),0))-b-l-v),r[0]=s,r[1]=N,r}(kn,u,t);if(y=(n-(c=_n(n,0)))*p[0]+n*p[1],l=c*p[0],Or(Pn,s=y+l),N=mn(Pn[0]),b=mn(Pn[1]),N>=Tn){if(0!=(N-Tn|b))return o*Hn*Hn;if(y+8008566259537294e-32>s-l)return o*Hn*Hn}else if((N&Fn)>=1083231232){if(0!=(N-3230714880|b))return o*Gn*Gn;if(y<=s-l)return o*Gn*Gn}return s=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&On|0)>>20)-K|0,c=0,l>1071644672&&(u=J(0,((c=r+(En>>y+1)>>>0)&~(Sn>>(y=((c&On)>>20)-K|0)))>>>0),c=(c&Sn|En)>>20-y>>>0,r<0&&(c=-c),n-=u),r=mn(r=C(a=1-((a=(f=.6931471824645996*(u=_n(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):J(a,r)}(N,l,y),o*s}function Mn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=vn(r),2.5066282746310007*(t=r>143.01608?(e=xn(r,.5*r-.25))*(e/t):xn(r,r-.5)/t)*n}function Ln(r,n){return n/((1+.5772156649015329*r)*r)}var Vn=.6931471803691238,Wn=1.9082149292705877e-10;function Yn(r){return 0===r&&1/r===rr}function qn(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===rr||n===rr?rr:r===n&&0===r?Yn(r)?r:n:r>n?r:n;for(e=Q,f=0;f<t;f++){if(v(u=arguments[f])||u===rr)return u;(u>e||u===e&&0===u&&Yn(u))&&(e=u)}return e}function Cn(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===Q||n===Q?Q:r===n&&0===r?sn(r)?r:n:r<n?r:n;for(e=rr,f=0;f<t;f++){if(v(u=arguments[f])||u===Q)return u;(u<e||u===e&&0===u&&sn(u))&&(e=u)}return e}var zn=709.782712893384,Bn=-708.3964185322641,Dn=10.900511;function Jn(r,n){var t,e,u,f,i,o,a,c,y,p;return a=(n-r-Dn+.5)/(u=r+Dn-.5),r<1?n<=Bn?vn(r*$(n)-n-cn(r)):xn(n,r)*vn(-n)/function(r){var n,t,e,u;if(pn(r)&&r<0||r===Q||v(r))return NaN;if(0===r)return sn(r)?Q:rr;if(r>171.61447887182297)return rr;if(r<-170.5674972726612)return 0;if((t=tr(r))>33)return r>=0?Mn(r):(n=0==(1&(e=l(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*un(fn*u),n*fn/(tr(u)*Mn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ln(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ln(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(tr(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||v(r))return NaN;if(-1===r)return Q;if(r===rr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=C(c=1+r))>>20)-K)>0?1-(c-r):r-(c-1),f/=c):(l=((t=C(c=r))>>20)-K,f=0),(t&=1048575)<434334?c=J(c,1072693248|t):(l+=1,c=J(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Vn+(f+=l*Wn):l*Vn-((a=n*(1-.6666666666666666*u))-(l*Wn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*Vn-(n-(i*(n+a)+(l*Wn+f))-u))}(a)-a)+-10.400511*n/u,t=vn(t)):Cn(f=r*$(n/u),i=r-n)<=Bn||qn(f,i)>=zn?(e=i/r,Cn(f,i)/2>Bn&&qn(f,i)/2<zn?t=(o=xn(n/u,r/2)*vn(i/2))*o:Cn(f,i)/4>Bn&&qn(f,i)/4<zn&&n>r?(t=(o=xn(n/u,r/4)*vn(i/4))*o,t*=t):t=e>Bn&&e<zn?xn(n*vn(e)/u,r):vn(f+i)):t=xn(n/u,r)*vn(i),t*=wn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(y=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),p=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(y=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),p=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),y/p)))}function Kn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:rr:(t=Jn(r,n),n<1&&17976931348623157e292*n<t?rr:(0===t?t=vn(t=r*$(n)-n-cn(r)-$(n)):t/=n,t))}function Qn(r,n,t){return v(r)||v(n)||v(t)||n<0||t<=0?NaN:r<0||r===rr?Q:0===n?0===r?rr:Q:$(Kn(n,r*t))+$(t)}function Rn(r){return function(){return r}}function Xn(r){return v(r)?Rn(NaN):function(n){return v(n)?NaN:n===r?rr:Q}}function Zn(r,n){return v(r)||v(n)||r<0||n<=0?Rn(NaN):0===r?Xn(0):function(t){return v(t)?NaN:t<0||t===rr?Q:$(Kn(r,t*n))+$(n)}}function $n(r,n,t){return y(n)?Qn(r,n,t):NaN}return c((function(r,n){return v(r)||v(n)?NaN:r===n?rr:Q}),"factory",Xn),c(Qn,"factory",Zn),c($n,"factory",(function(r,n){return y(r)?Zn(r,n):Rn(NaN)})),$n},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
