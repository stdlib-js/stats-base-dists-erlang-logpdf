// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=Math.floor;function v(r){return y(r)===r&&r>=0}function p(r){return r!=r}var s,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),b=Object.prototype.toString,w=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",h=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return b.call(r);t=r[d],f=d,n=null!=(u=r)&&w.call(u,f);try{r[d]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[d]=t:delete r[d],e}:function(r){return b.call(r)},_="function"==typeof Uint32Array,A="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;s=function(){var r,n,t;if("function"!=typeof A)return!1;try{n=new A(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(_&&t instanceof Uint32Array||"[object Uint32Array]"===h(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?m:function(){throw new Error("not implemented")};var U,g=s,j="function"==typeof Float64Array,I="function"==typeof Float64Array?Float64Array:null,O="function"==typeof Float64Array?Float64Array:void 0;U=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===h(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E=U,F="function"==typeof Uint8Array,T="function"==typeof Uint8Array?Uint8Array:null,H="function"==typeof Uint8Array?Uint8Array:void 0;S=function(){var r,n,t;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===h(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?H:function(){throw new Error("not implemented")};var G,P=S,x="function"==typeof Uint16Array,M="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===h(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?k:function(){throw new Error("not implemented")};var L,V={uint16:G,uint8:P};(L=new V.uint16(1))[0]=4660;var W=52===new V.uint8(L.buffer)[0],Y=!0===W?1:0,q=new E(1),C=new g(q.buffer);function z(r){return q[0]=r,C[Y]}var B=!0===W?1:0,D=new E(1),J=new g(D.buffer);function K(r,n){return D[0]=r,J[B]=n>>>0,D[0]}var Q=1023,R=Number.NEGATIVE_INFINITY,X=.6931471803691238,Z=1.9082149292705877e-10,$=1048575;function rr(r){var n,t,e,u,f,i,o,a,c,l,y,v;return 0===r?R:p(r)||r<0?NaN:(f=0,(t=z(r))<1048576&&(f-=54,t=z(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-Q|0,f+=(a=614244+(t&=$)&1048576|0)>>20|0,o=(r=K(r,t|1072693248^a))-1,($&2+t)<3?0===o?0===f?0:f*X+f*Z:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*X-(i-f*Z-o)):(a=t-398458|0,c=440401-t|0,u=(y=(v=(l=o/(2+o))*l)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(y),e=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(y),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*X-(n-(l*(n+i)+f*Z)-o)):0===f?o-l*(o-i):f*X-(l*(o-i)-f*Z-o))))}var nr=Number.POSITIVE_INFINITY;function tr(r){return r===nr||r===R}function er(r){return Math.abs(r)}var ur=Math.ceil;function fr(r){return r<0?ur(r):y(r)}function ir(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var or=-.16666666666666632;function ar(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(or+u*t):r-(u*(.5*n-e*t)-n-e*or)}var cr,lr,yr=!0===W?0:1,vr=new E(1),pr=new g(vr.buffer);!0===W?(cr=1,lr=0):(cr=0,lr=1);var sr,Nr,br={HIGH:cr,LOW:lr},wr=new E(1),dr=new g(wr.buffer),hr=br.HIGH,_r=br.LOW;function Ar(r,n){return dr[hr]=r,dr[_r]=n,wr[0]}!0===W?(sr=1,Nr=0):(sr=0,Nr=1);var mr={HIGH:sr,LOW:Nr},Ur=new E(1),gr=new g(Ur.buffer),jr=mr.HIGH,Ir=mr.LOW;function Or(r,n){return Ur[0]=n,r[0]=gr[jr],r[1]=gr[Ir],r}function Sr(r,n){return 1===arguments.length?Or([0,0],r):Or(r,n)}var Er=[0,0];function Fr(r,n){var t,e;return Sr(Er,r),t=Er[0],t&=2147483647,e=z(n),Ar(t|=e&=2147483648,Er[1])}function Tr(r,n,t,e){return p(r)||tr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&er(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Tr(r,[0,0],1,0)}),"assign",Tr);var Hr=[0,0],Gr=[0,0];function Pr(r,n){var t,e;return 0===n||0===r||p(r)||tr(r)?r:(Tr(r,Hr,1,0),n+=Hr[1],n+=function(r){var n=z(r);return(n=(2146435072&n)>>>20)-Q|0}(r=Hr[0]),n<-1074?Fr(0,r):n>1023?r<0?R:nr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Sr(Gr,r),t=Gr[0],t&=2148532223,e*Ar(t|=n+Q<<20,Gr[1])))}function xr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Mr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],kr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Lr=16777216,Vr=5.960464477539063e-8,Wr=xr(20),Yr=xr(20),qr=xr(20),Cr=xr(20);function zr(r,n,t,e,u,f,i,o,a){var c,l,v,p,s,N,b,w,d;for(p=f,d=e[t],w=t,s=0;w>0;s++)l=Vr*d|0,Cr[s]=d-Lr*l|0,d=e[w-1]+l,w-=1;if(d=Pr(d,u),d-=8*y(.125*d),d-=b=0|d,v=0,u>0?(b+=s=Cr[t-1]>>24-u,Cr[t-1]-=s<<24-u,v=Cr[t-1]>>23-u):0===u?v=Cr[t-1]>>23:d>=.5&&(v=2),v>0){for(b+=1,c=0,s=0;s<t;s++)w=Cr[s],0===c?0!==w&&(c=1,Cr[s]=16777216-w):Cr[s]=16777215-w;if(u>0)switch(u){case 1:Cr[t-1]&=8388607;break;case 2:Cr[t-1]&=4194303}2===v&&(d=1-d,0!==c&&(d-=Pr(1,u)))}if(0===d){for(w=0,s=t-1;s>=f;s--)w|=Cr[s];if(0===w){for(N=1;0===Cr[f-N];N++);for(s=t+1;s<=t+N;s++){for(a[o+s]=Mr[i+s],l=0,w=0;w<=o;w++)l+=r[w]*a[o+(s-w)];e[s]=l}return zr(r,n,t+=N,e,u,f,i,o,a)}}if(0===d)for(t-=1,u-=24;0===Cr[t];)t-=1,u-=24;else(d=Pr(d,-u))>=Lr?(l=Vr*d|0,Cr[t]=d-Lr*l|0,u+=24,Cr[t+=1]=l):Cr[t]=0|d;for(l=Pr(1,u),s=t;s>=0;s--)e[s]=l*Cr[s],l*=Vr;for(s=t;s>=0;s--){for(l=0,N=0;N<=p&&N<=t-s;N++)l+=kr[N]*e[s+N];qr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=qr[s];for(n[0]=0===v?l:-l,l=qr[0]-l,s=1;s<=t;s++)l+=qr[s];return n[1]=0===v?l:-l,7&b}function Br(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Wr[a]=c<0?0:Mr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Wr[i+(a-c)];Yr[a]=u}return zr(r,n,4,Yr,o,4,f,i,Wr)}var Dr=Math.round;function Jr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Dr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(z(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(z(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Kr=1.5707963267341256,Qr=6077100506506192e-26,Rr=2*Qr,Xr=3*Qr,Zr=4*Qr,$r=[0,0,0],rn=[0,0];function nn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&z(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Jr(r,u,n):u<=1073928572?r>0?(a=r-Kr,n[0]=a-Qr,n[1]=a-n[0]-Qr,1):(a=r+Kr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-1):r>0?(a=r-2*Kr,n[0]=a-Rr,n[1]=a-n[0]-Rr,2):(a=r+2*Kr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Jr(r,u,n):r>0?(a=r-3*Kr,n[0]=a-Xr,n[1]=a-n[0]-Xr,3):(a=r+3*Kr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-3):1075388923===u?Jr(r,u,n):r>0?(a=r-4*Kr,n[0]=a-Zr,n[1]=a-n[0]-Zr,4):(a=r+4*Kr,n[0]=a+Zr,n[1]=a-n[0]+Zr,-4);if(u<1094263291)return Jr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return vr[0]=r,pr[yr]}(r),a=Ar(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)$r[i]=0|a,a=16777216*(a-$r[i]);for($r[2]=a,f=3;0===$r[f-1];)f-=1;return o=Br($r,rn,e,f),r<0?(n[0]=-rn[0],n[1]=-rn[1],-o):(n[0]=rn[0],n[1]=rn[1],o)}var tn=[0,0];function en(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1044381696?1:ir(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,tn)){case 0:return ir(tn[0],tn[1]);case 1:return-ar(tn[0],tn[1]);case 2:return-ir(tn[0],tn[1]);default:return ar(tn[0],tn[1])}}var un=[0,0];function fn(r){var n;if(n=z(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ar(r,0);if(n>=2146435072)return NaN;switch(3&nn(r,un)){case 0:return ar(un[0],un[1]);case 1:return ir(un[0],un[1]);case 2:return-ar(un[0],un[1]);default:return-ir(un[0],un[1])}}var on=3.141592653589793,an=1.4616321449683622,cn=1.4616321449683622;function ln(r){var n,t,e,u,f,i,o,a,c,l,y,v,s;if(p(r)||tr(r))return r;if(0===r)return nr;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-rr(r);if(n){if(r>=4503599627370496)return nr;if(c=function(r){var n,t;return p(r)||tr(r)?NaN:0===(n=er(t=r%2))||1===n?Fr(0,t):n<.25?fn(on*t):n<.75?Fr(en(on*(n=.5-n)),t):n<1.25?(t=Fr(1,t)-t,fn(on*t)):n<1.75?-Fr(en(on*(n-=1.5)),t):(t-=Fr(2,t),fn(on*t))}(r),0===c)return nr;t=rr(on/er(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(s=-rr(r),r>=an-1+.27?(y=1-r,e=0):r>=an-1-.27?(y=r-(cn-1),e=1):(y=r,e=2)):(s=0,r>=an+.27?(y=2-r,e=0):r>=an-.27?(y=r-cn,e=1):(y=r-1,e=2)),e){case 0:i=.07721566490153287+(v=y*y)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),f=v*(.3224670334241136+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),s+=(o=y*i+f)-.5*y;break;case 1:i=.48383612272381005+(l=(v=y*y)*y)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),s+=(o=v*i-(-3638676997039505e-33-l*(f+y*u)))-.12148629053584961;break;case 2:i=y*(y*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(y)-.07721566490153287),f=1+y*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(y),s+=-.5*y+i/f}else if(r<8)switch(o=(y=r-(e=fr(r)))*(y*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(y)-.07721566490153287),a=1+y*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(y),s=.5*y+o/a,v=1,e){case 7:v*=y+6;case 6:v*=y+5;case 5:v*=y+4;case 4:v*=y+3;case 3:s+=rr(v*=y+2)}else r<0x400000000000000?(c=rr(r),l=.4189385332046727+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(y=v*v),s=(r-.5)*(c-1)+l):s=r*(rr(r)-1);return n&&(s=t-s),s}var yn=1.4426950408889634,vn=1/(1<<28);function pn(r){var n;return p(r)||r===nr?r:r===R?0:r>709.782712893384?nr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<vn?1+r:function(r,n,t){var e,u,f,i;return Pr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=fr(r<0?yn*r-.5:yn*r+.5)),1.9082149292705877e-10*n,n)}function sn(r){return y(r)===r}function Nn(r){return 0===r&&1/r===R}function bn(r){return sn(r/2)}function wn(r){return bn(r>0?r-1:r+1)}var dn=Math.sqrt,hn=!0===W?0:1,_n=new E(1),An=new g(_n.buffer);function mn(r,n){return _n[0]=r,An[hn]=n>>>0,_n[0]}function Un(r){return 0|r}var gn=1048576,jn=[1,1.5],In=[0,.5849624872207642],On=[0,1.350039202129749e-8],Sn=2147483647,En=1048575,Fn=1048576,Tn=2147483647,Hn=1083179008,Gn=1e300,Pn=1e-300,xn=[0,0],Mn=[0,0];function kn(r,n){var t,e,u,f,i,o,a,c,l,y,v,s,N,b;if(p(r)||p(n))return NaN;if(Sr(xn,n),i=xn[0],0===xn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return dn(r);if(-.5===n)return 1/dn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(tr(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:er(r)<1==(n===nr)?0:nr}(r,n)}if(Sr(xn,r),f=xn[0],0===xn[1]){if(0===f)return function(r,n){return n===R?nr:n===nr?0:n>0?wn(n)?r:0:wn(n)?Fr(nr,r):nr}(r,n);if(1===r)return 1;if(-1===r&&wn(n))return-1;if(tr(r))return r===R?kn(-0,-n):n<0?0:nr}if(r<0&&!1===sn(n))return(r-r)/(r-r);if(u=er(r),t=f&Tn|0,e=i&Tn|0,a=i>>>31|0,o=(o=f>>>31|0)&&wn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&z(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Gn*Gn:o*Pn*Pn;if(t>1072693248)return 0===a?o*Gn*Gn:o*Pn*Pn;v=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=mn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(Mn,u)}else v=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,N,b,w,d,h,_,A,m,U;return _=0,t<gn&&(_-=53,t=z(n*=9007199254740992)),_+=(t>>20)-Q|0,t=1072693248|(A=1048575&t|0),A<=235662?m=0:A<767610?m=1:(m=0,_+=1,t-=gn),i=mn(u=(d=(n=K(n,t))-(c=jn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=K(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=mn(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),N=(p=-7.028461650952758e-9*(y=mn(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+On[m])-((s=mn(s=(v=.9617967009544373*y)+p+(l=In[m])+(b=_),0))-b-l-v),r[0]=s,r[1]=N,r}(Mn,u,t);if(y=(n-(c=mn(n,0)))*v[0]+n*v[1],l=c*v[0],Sr(xn,s=y+l),N=Un(xn[0]),b=Un(xn[1]),N>=Hn){if(0!=(N-Hn|b))return o*Gn*Gn;if(y+8008566259537294e-32>s-l)return o*Gn*Gn}else if((N&Tn)>=1083231232){if(0!=(N-3230714880|b))return o*Pn*Pn;if(y<=s-l)return o*Pn*Pn}return s=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&Sn|0)>>20)-Q|0,c=0,l>1071644672&&(u=K(0,((c=r+(Fn>>y+1)>>>0)&~(En>>(y=((c&Sn)>>20)-Q|0)))>>>0),c=(c&En|Fn)>>20-y>>>0,r<0&&(c=-c),n-=u),r=Un(r=z(a=1-((a=(f=.6931471824645996*(u=mn(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Pr(a,c):K(a,r)}(N,l,y),o*s}function Ln(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=pn(r),2.5066282746310007*(t=r>143.01608?(e=kn(r,.5*r-.25))*(e/t):kn(r,r-.5)/t)*n}function Vn(r,n){return n/((1+.5772156649015329*r)*r)}var Wn=.6931471803691238,Yn=1.9082149292705877e-10;function qn(r){return 0===r&&1/r===nr}function Cn(r,n){var t,e,u,f;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===nr||n===nr?nr:r===n&&0===r?qn(r)?r:n:r>n?r:n;for(e=R,f=0;f<t;f++){if(p(u=arguments[f])||u===nr)return u;(u>e||u===e&&0===u&&qn(u))&&(e=u)}return e}function zn(r,n){var t,e,u,f;if(2===(t=arguments.length))return p(r)||p(n)?NaN:r===R||n===R?R:r===n&&0===r?Nn(r)?r:n:r<n?r:n;for(e=nr,f=0;f<t;f++){if(p(u=arguments[f])||u===R)return u;(u<e||u===e&&0===u&&Nn(u))&&(e=u)}return e}var Bn=709.782712893384,Dn=-708.3964185322641,Jn=10.900511;function Kn(r,n){var t,e,u,f,i,o,a,c,l,v;return a=(n-r-Jn+.5)/(u=r+Jn-.5),r<1?n<=Dn?pn(r*rr(n)-n-ln(r)):kn(n,r)*pn(-n)/function(r){var n,t,e,u;if(sn(r)&&r<0||r===R||p(r))return NaN;if(0===r)return Nn(r)?R:nr;if(r>171.61447887182297)return nr;if(r<-170.5674972726612)return 0;if((t=er(r))>33)return r>=0?Ln(r):(n=0==(1&(e=y(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*fn(on*u),n*on/(er(u)*Ln(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Vn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Vn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(er(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||p(r))return NaN;if(-1===r)return R;if(r===nr)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=z(c=1+r))>>20)-Q)>0?1-(c-r):r-(c-1),f/=c):(l=((t=z(c=r))>>20)-Q,f=0),(t&=1048575)<434334?c=K(c,1072693248|t):(l+=1,c=K(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Wn+(f+=l*Yn):l*Wn-((a=n*(1-.6666666666666666*u))-(l*Yn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*Wn-(n-(i*(n+a)+(l*Yn+f))-u))}(a)-a)+-10.400511*n/u,t=pn(t)):zn(f=r*rr(n/u),i=r-n)<=Dn||Cn(f,i)>=Bn?(e=i/r,zn(f,i)/2>Dn&&Cn(f,i)/2<Bn?t=(o=kn(n/u,r/2)*pn(i/2))*o:zn(f,i)/4>Dn&&Cn(f,i)/4<Bn&&n>r?(t=(o=kn(n/u,r/4)*pn(i/4))*o,t*=t):t=e>Dn&&e<Bn?kn(n*pn(e)/u,r):pn(f+i)):t=kn(n/u,r)*pn(i),t*=dn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(l=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),v=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(l=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),v=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),l/v)))}function Qn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:nr:(t=Kn(r,n),n<1&&17976931348623157e292*n<t?nr:(0===t?t=pn(t=r*rr(n)-n-ln(r)-rr(n)):t/=n,t))}function Rn(r,n,t){return p(r)||p(n)||p(t)||n<0||t<=0?NaN:r<0||r===nr?R:0===n?0===r?nr:R:rr(Qn(n,r*t))+rr(t)}function Xn(r){return function(){return r}}function Zn(r){return p(r)?Xn(NaN):function(n){return p(n)?NaN:n===r?nr:R}}function $n(r,n){return p(r)||p(n)||r<0||n<=0?Xn(NaN):0===r?Zn(0):function(t){return p(t)?NaN:t<0||t===nr?R:rr(Qn(r,t*n))+rr(n)}}function rt(r,n,t){return v(n)?Rn(r,n,t):NaN}function nt(r,n){return v(r)?$n(r,n):Xn(NaN)}l((function(r,n){return p(r)||p(n)?NaN:r===n?nr:R}),"factory",Zn),l(Rn,"factory",$n),l(rt,"factory",nt),r.default=rt,r.factory=nt,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).logpdf={});
//# sourceMappingURL=index.js.map
