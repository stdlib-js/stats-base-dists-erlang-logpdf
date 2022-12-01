// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var v=Math.floor;function l(r){return v(r)===r&&r>=0}function y(r){return r!=r}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var N=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=s&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return p.call(r);t=r[b],f=b,n=null!=(u=r)&&N.call(u,f);try{r[b]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[b]=t:delete r[b],e}:function(r){return p.call(r)},A="function"==typeof Uint32Array;var _="function"==typeof Uint32Array?Uint32Array:null;var h,d="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var r,n,t;if("function"!=typeof _)return!1;try{n=new _(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(A&&t instanceof Uint32Array||"[object Uint32Array]"===w(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?d:function(){throw new Error("not implemented")};var m=h,g="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var j,I="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U([1,3.14,-3.14,NaN]),t=n,r=(g&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var O=j,S="function"==typeof Uint8Array;var E="function"==typeof Uint8Array?Uint8Array:null;var F,H="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var r,n,t;if("function"!=typeof E)return!1;try{n=new E(n=[1,3.14,-3.14,256,257]),t=n,r=(S&&t instanceof Uint8Array||"[object Uint8Array]"===w(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var T=F,G="function"==typeof Uint16Array;var P="function"==typeof Uint16Array?Uint16Array:null;var k,M="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,n,t;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,65536,65537]),t=n,r=(G&&t instanceof Uint16Array||"[object Uint16Array]"===w(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var x,L={uint16:k,uint8:T};(x=new L.uint16(1))[0]=4660;var V=52===new L.uint8(x.buffer)[0],W=!0===V?1:0,Y=new O(1),q=new m(Y.buffer);function C(r){return Y[0]=r,q[W]}var z=!0===V?1:0,B=new O(1),D=new m(B.buffer);function J(r,n){return B[0]=r,D[z]=n>>>0,B[0]}var K=Number.NEGATIVE_INFINITY;var Q=.6931471803691238,R=1.9082149292705877e-10;function X(r){var n,t,e,u,f,i,o,a,c,v,l,s;return 0===r?K:y(r)||r<0?NaN:(f=0,(t=C(r))<1048576&&(f-=54,t=C(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-1023|0,f+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=J(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===f?0:f*Q+f*R:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*Q-(i-f*R-o)):(a=t-398458|0,c=440401-t|0,u=(l=(s=(v=o/(2+o))*v)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-v*(n+i)):f*Q-(n-(v*(n+i)+f*R)-o)):0===f?o-v*(o-i):f*Q-(v*(o-i)-f*R-o))))}var Z=Number.POSITIVE_INFINITY;function $(r){return r===Z||r===K}function rr(r){return Math.abs(r)}var nr=Math.ceil;function tr(r){return r<0?nr(r):v(r)}function er(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ur=-.16666666666666632;function fr(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ur+u*t):r-(u*(.5*n-e*t)-n-e*ur)}var ir,or,ar=!0===V?0:1,cr=new O(1),vr=new m(cr.buffer);!0===V?(ir=1,or=0):(ir=0,or=1);var lr={HIGH:ir,LOW:or},yr=new O(1),sr=new m(yr.buffer),pr=lr.HIGH,Nr=lr.LOW;function br(r,n){return sr[pr]=r,sr[Nr]=n,yr[0]}var wr,Ar;!0===V?(wr=1,Ar=0):(wr=0,Ar=1);var _r={HIGH:wr,LOW:Ar},hr=new O(1),dr=new m(hr.buffer),mr=_r.HIGH,gr=_r.LOW;function Ur(r,n,t,e){return hr[0]=r,n[e]=dr[mr],n[e+t]=dr[gr],n}function jr(r){return Ur(r,[0,0],1,0)}c(jr,"assign",Ur);var Ir=[0,0];function Or(r,n){var t,e;return jr.assign(r,Ir,1,0),t=Ir[0],t&=2147483647,e=C(n),br(t|=e&=2147483648,Ir[1])}function Sr(r,n,t,e){return y(r)||$(r)?(n[e]=r,n[e+t]=0,n):0!==r&&rr(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Sr(r,[0,0],1,0)}),"assign",Sr);var Er=[0,0],Fr=[0,0];function Hr(r,n){var t,e;return 0===n||0===r||y(r)||$(r)?r:(Sr(r,Er,1,0),n+=Er[1],n+=function(r){var n=C(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Er[0]),n<-1074?Or(0,r):n>1023?r<0?K:Z:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,jr.assign(r,Fr,1,0),t=Fr[0],t&=2148532223,e*br(t|=n+1023<<20,Fr[1])))}function Tr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Gr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Pr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kr=5.960464477539063e-8,Mr=Tr(20),xr=Tr(20),Lr=Tr(20),Vr=Tr(20);function Wr(r,n,t,e,u,f,i,o,a){var c,l,y,s,p,N,b,w,A;for(s=f,A=e[t],w=t,p=0;w>0;p++)l=kr*A|0,Vr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=Hr(A,u),A-=8*v(.125*A),A-=b=0|A,y=0,u>0?(b+=p=Vr[t-1]>>24-u,Vr[t-1]-=p<<24-u,y=Vr[t-1]>>23-u):0===u?y=Vr[t-1]>>23:A>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Vr[p],0===c?0!==w&&(c=1,Vr[p]=16777216-w):Vr[p]=16777215-w;if(u>0)switch(u){case 1:Vr[t-1]&=8388607;break;case 2:Vr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Hr(1,u)))}if(0===A){for(w=0,p=t-1;p>=f;p--)w|=Vr[p];if(0===w){for(N=1;0===Vr[f-N];N++);for(p=t+1;p<=t+N;p++){for(a[o+p]=Gr[i+p],l=0,w=0;w<=o;w++)l+=r[w]*a[o+(p-w)];e[p]=l}return Wr(r,n,t+=N,e,u,f,i,o,a)}}if(0===A)for(t-=1,u-=24;0===Vr[t];)t-=1,u-=24;else(A=Hr(A,-u))>=16777216?(l=kr*A|0,Vr[t]=A-16777216*l|0,u+=24,Vr[t+=1]=l):Vr[t]=0|A;for(l=Hr(1,u),p=t;p>=0;p--)e[p]=l*Vr[p],l*=kr;for(p=t;p>=0;p--){for(l=0,N=0;N<=s&&N<=t-p;N++)l+=Pr[N]*e[p+N];Lr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Lr[p];for(n[0]=0===y?l:-l,l=Lr[0]-l,p=1;p<=t;p++)l+=Lr[p];return n[1]=0===y?l:-l,7&b}function Yr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)Mr[a]=c<0?0:Gr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Mr[i+(a-c)];xr[a]=u}return 4,Wr(r,n,4,xr,o,4,f,i,Mr)}var qr=Math.round;function Cr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=qr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(C(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(C(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var zr=1.5707963267341256,Br=6077100506506192e-26,Dr=2*Br,Jr=4*Br,Kr=[0,0,0],Qr=[0,0];function Rr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&C(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Cr(r,u,n):u<=1073928572?r>0?(a=r-zr,n[0]=a-Br,n[1]=a-n[0]-Br,1):(a=r+zr,n[0]=a+Br,n[1]=a-n[0]+Br,-1):r>0?(a=r-2*zr,n[0]=a-Dr,n[1]=a-n[0]-Dr,2):(a=r+2*zr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Cr(r,u,n):r>0?(a=r-3*zr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*zr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Cr(r,u,n):r>0?(a=r-4*zr,n[0]=a-Jr,n[1]=a-n[0]-Jr,4):(a=r+4*zr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-4);if(u<1094263291)return Cr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return cr[0]=r,vr[ar]}(r),a=br(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Kr[i]=0|a,a=16777216*(a-Kr[i]);for(Kr[2]=a,f=3;0===Kr[f-1];)f-=1;return o=Yr(Kr,Qr,e,f),r<0?(n[0]=-Qr[0],n[1]=-Qr[1],-o):(n[0]=Qr[0],n[1]=Qr[1],o)}var Xr=[0,0];function Zr(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1044381696?1:er(r,0);if(n>=2146435072)return NaN;switch(3&Rr(r,Xr)){case 0:return er(Xr[0],Xr[1]);case 1:return-fr(Xr[0],Xr[1]);case 2:return-er(Xr[0],Xr[1]);default:return fr(Xr[0],Xr[1])}}var $r=[0,0];function rn(r){var n;if(n=C(r),(n&=2147483647)<=1072243195)return n<1045430272?r:fr(r,0);if(n>=2146435072)return NaN;switch(3&Rr(r,$r)){case 0:return fr($r[0],$r[1]);case 1:return er($r[0],$r[1]);case 2:return-fr($r[0],$r[1]);default:return-er($r[0],$r[1])}}var nn=3.141592653589793;var tn=1.4616321449683622,en=1.4616321449683622;function un(r){var n,t,e,u,f,i,o,a,c,v,l,s,p;if(y(r)||$(r))return r;if(0===r)return Z;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-X(r);if(n){if(r>=4503599627370496)return Z;if(c=function(r){var n,t;return y(r)||$(r)?NaN:0===(n=rr(t=r%2))||1===n?Or(0,t):n<.25?rn(nn*t):n<.75?Or(Zr(nn*(n=.5-n)),t):n<1.25?(t=Or(1,t)-t,rn(nn*t)):n<1.75?-Or(Zr(nn*(n-=1.5)),t):(t-=Or(2,t),rn(nn*t))}(r),0===c)return Z;t=X(nn/rr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-X(r),r>=tn-1+.27?(l=1-r,e=0):r>=tn-1-.27?(l=r-(en-1),e=1):(l=r,e=2)):(p=0,r>=tn+.27?(l=2-r,e=0):r>=tn-.27?(l=r-en,e=1):(l=r-1,e=2)),e){case 0:i=.07721566490153287+(s=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(s),f=s*(.3224670334241136+s*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(s)),p+=(o=l*i+f)-.5*l;break;case 1:i=.48383612272381005+(v=(s=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),f=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),p+=-.12148629053584961+(o=s*i-(-3638676997039505e-33-v*(f+l*u)));break;case 2:i=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),p+=-.5*l+i/f}else if(r<8)switch(o=(l=r-(e=tr(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),p=.5*l+o/a,s=1,e){case 7:s*=l+6;case 6:s*=l+5;case 5:s*=l+4;case 4:s*=l+3;case 3:p+=X(s*=l+2)}else r<0x400000000000000?(c=X(r),v=.4189385332046727+(s=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=s*s),p=(r-.5)*(c-1)+v):p=r*(X(r)-1);return n&&(p=t-p),p}function fn(r){var n;return y(r)||r===Z?r:r===K?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return Hr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=tr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function on(r){return v(r)===r}function an(r){return 0===r&&1/r===K}function cn(r){return on(r/2)}function vn(r){return cn(r>0?r-1:r+1)}var ln=Math.sqrt,yn=!0===V?0:1,sn=new O(1),pn=new m(sn.buffer);function Nn(r,n){return sn[0]=r,pn[yn]=n>>>0,sn[0]}function bn(r){return 0|r}var wn=[1,1.5],An=[0,.5849624872207642],_n=[0,1.350039202129749e-8];var hn=1e300,dn=[0,0],mn=[0,0];function gn(r,n){var t,e,u,f,i,o,a,c,v,l,s,p,N,b;if(y(r)||y(n))return NaN;if(jr.assign(n,dn,1,0),i=dn[0],0===dn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ln(r);if(-.5===n)return 1/ln(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if($(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:rr(r)<1==(n===Z)?0:Z}(r,n)}if(jr.assign(r,dn,1,0),f=dn[0],0===dn[1]){if(0===f)return function(r,n){return n===K?Z:n===Z?0:n>0?vn(n)?r:0:vn(n)?Or(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&vn(n))return-1;if($(r))return r===K?gn(-0,-n):n<0?0:Z}if(r<0&&!1===on(n))return(r-r)/(r-r);if(u=rr(r),t=2147483647&f|0,e=2147483647&i|0,a=i>>>31|0,o=(o=f>>>31|0)&&vn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&C(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*hn*hn:1e-300*o*1e-300;if(t>1072693248)return 0===a?o*hn*hn:1e-300*o*1e-300;s=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=Nn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(mn,u)}else s=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,s,p,N,b,w,A,_,h,d,m,g;return h=0,t<1048576&&(h-=53,t=C(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,h+=1,t-=1048576),i=Nn(u=(A=(n=J(n,t))-(c=wn[m]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=J(0,e+=m<<18),w=(f=u*u)*f*(0===(g=f)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Nn(a=3+(f=i*i)+(w+=(o=_*(A-i*a-i*(n-(a-c))))*(i+u)),0),N=(s=-7.028461650952758e-9*(l=Nn(l=(A=i*a)+(_=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(_-(l-A))+_n[m])-((p=Nn(p=(y=.9617967009544373*l)+s+(v=An[m])+(b=h),0))-b-v-y),r[0]=p,r[1]=N,r}(mn,u,t);if(p=(l=(n-(c=Nn(n,0)))*s[0]+n*s[1])+(v=c*s[0]),jr.assign(p,dn,1,0),N=bn(dn[0]),b=bn(dn[1]),N>=1083179008){if(0!=(N-1083179008|b))return o*hn*hn;if(l+8008566259537294e-32>p-v)return o*hn*hn}else if((2147483647&N)>=1083231232){if(0!=(N-3230714880|b))return 1e-300*o*1e-300;if(l<=p-v)return 1e-300*o*1e-300}return p=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,s;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=J(0,e)),r=bn(r=C(c=1-((c=(i=.6931471824645996*(f=Nn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(s=f)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Hr(c,v):J(c,r)}(N,v,l),o*p}function Un(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=fn(r),2.5066282746310007*(t=r>143.01608?(e=gn(r,.5*r-.25))*(e/t):gn(r,r-.5)/t)*n}function jn(r,n){return n/((1+.5772156649015329*r)*r)}var In=.6931471803691238,On=1.9082149292705877e-10;function Sn(r){return 0===r&&1/r===Z}function En(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===Z||n===Z?Z:r===n&&0===r?Sn(r)?r:n:r>n?r:n;for(e=K,f=0;f<t;f++){if(y(u=arguments[f])||u===Z)return u;(u>e||u===e&&0===u&&Sn(u))&&(e=u)}return e}function Fn(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===K||n===K?K:r===n&&0===r?an(r)?r:n:r<n?r:n;for(e=Z,f=0;f<t;f++){if(y(u=arguments[f])||u===K)return u;(u<e||u===e&&0===u&&an(u))&&(e=u)}return e}function Hn(r,n){var t,e,u,f,i,o,a,c,l,s;return a=(n-r-10.900511+.5)/(u=r+10.900511-.5),r<1?n<=-708.3964185322641?fn(r*X(n)-n-un(r)):gn(n,r)*fn(-n)/function(r){var n,t,e,u;if(on(r)&&r<0||r===K||y(r))return NaN;if(0===r)return an(r)?K:Z;if(r>171.61447887182297)return Z;if(r<-170.5674972726612)return 0;if((t=rr(r))>33)return r>=0?Un(r):(n=0==(1&(e=v(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*rn(nn*u),n*nn/(rr(u)*Un(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return jn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return jn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(rr(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||y(r))return NaN;if(-1===r)return K;if(r===Z)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=C(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=C(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=J(c,1072693248|t):(v+=1,c=J(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*In+(f+=v*On):v*In-((a=n*(1-.6666666666666666*u))-(v*On+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===v?u-(n-i*(n+a)):v*In-(n-(i*(n+a)+(v*On+f))-u))}(a)-a)+-10.400511*n/u,t=fn(t)):Fn(f=r*X(n/u),i=r-n)<=-708.3964185322641||En(f,i)>=709.782712893384?(e=i/r,Fn(f,i)/2>-708.3964185322641&&En(f,i)/2<709.782712893384?t=(o=gn(n/u,r/2)*fn(i/2))*o:Fn(f,i)/4>-708.3964185322641&&En(f,i)/4<709.782712893384&&n>r?(t=(o=gn(n/u,r/4)*fn(i/4))*o,t*=t):t=e>-708.3964185322641&&e<709.782712893384?gn(n*fn(e)/u,r):fn(f+i)):t=gn(n/u,r)*fn(i),t*=ln(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(l=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),s=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(l=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),s=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),l/s)))}function Tn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:Z:(t=Hn(r,n),n<1&&17976931348623157e292*n<t?Z:(0===t?t=fn(t=r*X(n)-n-un(r)-X(n)):t/=n,t))}function Gn(r,n,t){return y(r)||y(n)||y(t)||n<0||t<=0?NaN:r<0||r===Z?K:0===n?0===r?Z:K:X(Tn(n,r*t))+X(t)}function Pn(r){return function(){return r}}function kn(r){return y(r)?Pn(NaN):function(n){if(y(n))return NaN;return n===r?Z:K}}function Mn(r,n){return y(r)||y(n)||r<0||n<=0?Pn(NaN):0===r?kn(0):function(t){if(y(t))return NaN;if(t<0||t===Z)return K;return X(Tn(r,t*n))+X(n)}}function xn(r,n,t){return l(n)?Gn(r,n,t):NaN}function Ln(r,n){return l(r)?Mn(r,n):Pn(NaN)}c((function(r,n){return y(r)||y(n)?NaN:r===n?Z:K}),"factory",kn),c(Gn,"factory",Mn),c(xn,"factory",Ln);export{xn as default,Ln as factory};
//# sourceMappingURL=mod.js.map
