// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,e,t,a,o,f,c,s,l,p,v,y,g;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(t=r[s]))f+=t;else{if(n=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function x(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(k(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function I(r){var n,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[x(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return U.apply(null,n)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(V.call(r,n)||$.call(r,n)?(t=r.__proto__,r.__proto__=F,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,n,e.get),o&&O&&O.call(r,n,e.set),r};function H(r,n,e){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=Math.floor;function C(r){return W(r)===r&&r>=0}function L(r){return r!=r}var P,M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",q=M&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return R.call(r);e=r[Y],a=Y,n=null!=(i=r)&&Z.call(i,a);try{r[Y]=void 0}catch(n){return R.call(r)}return t=R.call(r),n?r[Y]=e:delete r[Y],t}:function(r){return R.call(r)},z="function"==typeof Uint32Array,B="function"==typeof Uint32Array?Uint32Array:null,D="function"==typeof Uint32Array?Uint32Array:void 0;P=function(){var r,n,e;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(z&&e instanceof Uint32Array||"[object Uint32Array]"===q(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?D:function(){throw new Error("not implemented")};var J,K=P,Q="function"==typeof Float64Array,rr="function"==typeof Float64Array?Float64Array:null,nr="function"==typeof Float64Array?Float64Array:void 0;J=function(){var r,n,e;if("function"!=typeof rr)return!1;try{n=new rr([1,3.14,-3.14,NaN]),e=n,r=(Q&&e instanceof Float64Array||"[object Float64Array]"===q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var er,tr=J,ir="function"==typeof Uint8Array,ar="function"==typeof Uint8Array?Uint8Array:null,or="function"==typeof Uint8Array?Uint8Array:void 0;er=function(){var r,n,e;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),e=n,r=(ir&&e instanceof Uint8Array||"[object Uint8Array]"===q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur,fr=er,cr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,lr="function"==typeof Uint16Array?Uint16Array:void 0;ur=function(){var r,n,e;if("function"!=typeof sr)return!1;try{n=new sr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(cr&&e instanceof Uint16Array||"[object Uint16Array]"===q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,vr={uint16:ur,uint8:fr};(pr=new vr.uint16(1))[0]=4660;var yr=52===new vr.uint8(pr.buffer)[0],gr=!0===yr?1:0,dr=new tr(1),hr=new K(dr.buffer);function wr(r){return dr[0]=r,hr[gr]}var br=!0===yr?1:0,mr=new tr(1),Nr=new K(mr.buffer);function Ar(r,n){return mr[0]=r,Nr[br]=n>>>0,mr[0]}var _r=1023,Er=Number.NEGATIVE_INFINITY,Ur=.6931471803691238,Sr=1.9082149292705877e-10,kr=0x40000000000000,xr=.3333333333333333,Ir=1048575,Fr=2146435072,jr=1048576,Tr=1072693248;function Or(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?Er:L(r)||r<0?NaN:(a=0,(e=wr(r))<jr&&(a-=54,e=wr(r*=kr)),e>=Fr?r+r:(a+=(e>>20)-_r|0,a+=(f=614244+(e&=Ir)&1048576|0)>>20|0,u=(r=Ar(r,e|f^Tr))-1,(Ir&2+e)<3?0===u?0===a?0:a*Ur+a*Sr:(o=u*u*(.5-xr*u),0===a?u-o:a*Ur-(o-a*Sr-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Ur-(n-(s*(n+o)+a*Sr)-u)):0===a?u-s*(u-o):a*Ur-(s*(u-o)-a*Sr-u))))}var Vr=Number.POSITIVE_INFINITY;function $r(r){return r===Vr||r===Er}function Gr(r){return Math.abs(r)}var Hr=Math.ceil;function Wr(r){return r<0?Hr(r):W(r)}function Cr(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Lr=-.16666666666666632,Pr=.00833333333332249,Mr=-.0001984126982985795,Rr=27557313707070068e-22,Zr=-2.5050760253406863e-8,Xr=1.58969099521155e-10;function Yr(r,n){var e,t,i;return e=Pr+(i=r*r)*(Mr+i*Rr)+i*(i*i)*(Zr+i*Xr),t=i*r,0===n?r+t*(Lr+i*e):r-(i*(.5*n-t*e)-n-t*Lr)}var qr,zr,Br=2147483647,Dr=2146435072,Jr=1048575,Kr=!0===yr?0:1,Qr=new tr(1),rn=new K(Qr.buffer);!0===yr?(qr=1,zr=0):(qr=0,zr=1);var nn={HIGH:qr,LOW:zr},en=new tr(1),tn=new K(en.buffer),an=nn.HIGH,on=nn.LOW;function un(r,n){return tn[an]=r,tn[on]=n,en[0]}var fn,cn,sn=1023,ln=-1023,pn=-1074,vn=2147483648;!0===yr?(fn=1,cn=0):(fn=0,cn=1);var yn={HIGH:fn,LOW:cn},gn=new tr(1),dn=new K(gn.buffer),hn=yn.HIGH,wn=yn.LOW;function bn(r,n,e,t){return gn[0]=r,n[t]=dn[hn],n[t+e]=dn[wn],n}function mn(r){return bn(r,[0,0],1,0)}H(mn,"assign",bn);var Nn=[0,0];function An(r,n){var e,t;return mn.assign(r,Nn,1,0),e=Nn[0],e&=Br,t=wr(n),un(e|=t&=vn,Nn[1])}var _n=22250738585072014e-324,En=4503599627370496;function Un(r,n,e,t){return L(r)||$r(r)?(n[t]=r,n[t+e]=0,n):0!==r&&Gr(r)<_n?(n[t]=r*En,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}H((function(r){return Un(r,[0,0],1,0)}),"assign",Un);var Sn=2220446049250313e-31,kn=2148532223,xn=[0,0],In=[0,0];function Fn(r,n){var e,t;return 0===n||0===r||L(r)||$r(r)?r:(Un(r,xn,1,0),r=xn[0],n+=xn[1],n+=function(r){var n=wr(r);return(n=(n&Dr)>>>20)-_r|0}(r),n<pn?An(0,r):n>sn?r<0?Er:Vr:(n<=ln?(n+=52,t=Sn):t=1,mn.assign(r,In,1,0),e=In[0],e&=kn,t*un(e|=n+_r<<20,In[1])))}function jn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Tn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],On=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vn=16777216,$n=5.960464477539063e-8,Gn=jn(20),Hn=jn(20),Wn=jn(20),Cn=jn(20);function Ln(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,y,g,d,h;for(p=a,h=t[e],d=e,v=0;d>0;v++)s=$n*h|0,Cn[v]=h-Vn*s|0,h=t[d-1]+s,d-=1;if(h=Fn(h,i),h-=8*W(.125*h),h-=g=0|h,l=0,i>0?(g+=v=Cn[e-1]>>24-i,Cn[e-1]-=v<<24-i,l=Cn[e-1]>>23-i):0===i?l=Cn[e-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<e;v++)d=Cn[v],0===c?0!==d&&(c=1,Cn[v]=16777216-d):Cn[v]=16777215-d;if(i>0)switch(i){case 1:Cn[e-1]&=8388607;break;case 2:Cn[e-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=Fn(1,i)))}if(0===h){for(d=0,v=e-1;v>=a;v--)d|=Cn[v];if(0===d){for(y=1;0===Cn[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[u+v]=Tn[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return Ln(r,n,e+=y,t,i,a,o,u,f)}}if(0===h)for(e-=1,i-=24;0===Cn[e];)e-=1,i-=24;else(h=Fn(h,-i))>=Vn?(s=$n*h|0,Cn[e]=h-Vn*s|0,i+=24,Cn[e+=1]=s):Cn[e]=0|h;for(s=Fn(1,i),v=e;v>=0;v--)t[v]=s*Cn[v],s*=$n;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=On[y]*t[v+y];Wn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Wn[v];for(n[0]=0===l?s:-s,s=Wn[0]-s,v=1;v<=e;v++)s+=Wn[v];return n[1]=0===l?s:-s,7&g}function Pn(r,n,e,t){var i,a,o,u,f,c,s;for((a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)Gn[f]=c<0?0:Tn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*Gn[o+(f-c)];Hn[f]=i}return Ln(r,n,4,Hn,u,4,a,o,Gn)}var Mn=Math.round,Rn=.6366197723675814,Zn=1.5707963267341256,Xn=6077100506506192e-26,Yn=6077100506303966e-26,qn=20222662487959506e-37,zn=20222662487111665e-37,Bn=84784276603689e-45,Dn=2047;function Jn(r,n,e){var t,i,a,o,u;return a=r-(t=Mn(r*Rn))*Zn,o=t*Xn,u=n>>20|0,e[0]=a-o,u-(wr(e[0])>>20&Dn)>16&&(o=t*qn-((i=a)-(a=i-(o=t*Yn))-o),e[0]=a-o,u-(wr(e[0])>>20&Dn)>49&&(o=t*Bn-((i=a)-(a=i-(o=t*zn))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var Kn=0,Qn=16777216,re=1.5707963267341256,ne=6077100506506192e-26,ee=2*ne,te=3*ne,ie=4*ne,ae=598523,oe=1072243195,ue=1073928572,fe=1074752122,ce=1074977148,se=1075183036,le=1075388923,pe=1075594811,ve=1094263291,ye=[0,0,0],ge=[0,0];function de(r,n){var e,t,i,a,o,u,f;if((i=wr(r)&Br|0)<=oe)return n[0]=r,n[1]=0,0;if(i<=fe)return(i&Jr)===ae?Jn(r,i,n):i<=ue?r>0?(f=r-re,n[0]=f-ne,n[1]=f-n[0]-ne,1):(f=r+re,n[0]=f+ne,n[1]=f-n[0]+ne,-1):r>0?(f=r-2*re,n[0]=f-ee,n[1]=f-n[0]-ee,2):(f=r+2*re,n[0]=f+ee,n[1]=f-n[0]+ee,-2);if(i<=pe)return i<=se?i===ce?Jn(r,i,n):r>0?(f=r-3*re,n[0]=f-te,n[1]=f-n[0]-te,3):(f=r+3*re,n[0]=f+te,n[1]=f-n[0]+te,-3):i===le?Jn(r,i,n):r>0?(f=r-4*re,n[0]=f-ie,n[1]=f-n[0]-ie,4):(f=r+4*re,n[0]=f+ie,n[1]=f-n[0]+ie,-4);if(i<ve)return Jn(r,i,n);if(i>=Dr)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Qr[0]=r,rn[Kr]}(r),f=un(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)ye[o]=0|f,f=(f-ye[o])*Qn;for(ye[2]=f,a=3;ye[a-1]===Kn;)a-=1;return u=Pn(ye,ge,t,a),r<0?(n[0]=-ge[0],n[1]=-ge[1],-u):(n[0]=ge[0],n[1]=ge[1],u)}var he=[0,0],we=2147483647,be=1072243195,me=1044381696,Ne=2146435072;function Ae(r){var n;if(n=wr(r),(n&=we)<=be)return n<me?1:Cr(r,0);if(n>=Ne)return NaN;switch(3&de(r,he)){case 0:return Cr(he[0],he[1]);case 1:return-Yr(he[0],he[1]);case 2:return-Cr(he[0],he[1]);default:return Yr(he[0],he[1])}}var _e=1072243195,Ee=1045430272,Ue=[0,0];function Se(r){var n;if(n=wr(r),(n&=Br)<=_e)return n<Ee?r:Yr(r,0);if(n>=Dr)return NaN;switch(3&de(r,Ue)){case 0:return Yr(Ue[0],Ue[1]);case 1:return Cr(Ue[0],Ue[1]);case 2:return-Yr(Ue[0],Ue[1]);default:return-Cr(Ue[0],Ue[1])}}var ke=3.141592653589793,xe=.07721566490153287,Ie=.3224670334241136,Fe=1,je=-.07721566490153287,Te=.48383612272381005,Oe=-.1475877229945939,Ve=.06462494023913339,$e=-.07721566490153287,Ge=1,He=.4189385332046727,We=1.4616321449683622,Ce=4503599627370496,Le=0x400000000000000,Pe=8470329472543003e-37,Me=1.4616321449683622,Re=-.12148629053584961,Ze=-3638676997039505e-33;function Xe(r){var n,e,t,i,a,o,u,f,c,s,l,p,v;if(L(r)||$r(r))return r;if(0===r)return Vr;if(r<0?(n=!0,r=-r):n=!1,r<Pe)return-Or(r);if(n){if(r>=Ce)return Vr;if(c=function(r){var n,e;return L(r)||$r(r)?NaN:0===(n=Gr(e=r%2))||1===n?An(0,e):n<.25?Se(ke*e):n<.75?An(Ae(ke*(n=.5-n)),e):n<1.25?(e=An(1,e)-e,Se(ke*e)):n<1.75?-An(Ae(ke*(n-=1.5)),e):(e-=An(2,e),Se(ke*e))}(r),0===c)return Vr;e=Or(ke/Gr(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Or(r),r>=We-1+.27?(l=1-r,t=0):r>=We-1-.27?(l=r-(Me-1),t=1):(l=r,t=2)):(v=0,r>=We+.27?(l=2-r,t=0):r>=We-.27?(l=r-Me,t=1):(l=r-1,t=2)),t){case 0:o=xe+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Ie+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=Te+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Oe+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Ve+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Re+(u=p*o-(Ze-s*(a+l*i)));break;case 2:o=l*($e+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=Ge+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Wr(r)))*(je+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Fe+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Or(p*=l+2)}else r<Le?(c=Or(r),s=He+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Or(r)-1);return n&&(v=e-v),v}var Ye=.6931471803691238,qe=1.9082149292705877e-10,ze=1.4426950408889634,Be=709.782712893384,De=-745.1332191019411,Je=1/(1<<28),Ke=-Je;function Qe(r){var n;return L(r)||r===Vr?r:r===Er?0:r>Be?Vr:r<De?0:r>Ke&&r<Je?1+r:function(r,n,e){var t,i,a,o;return Fn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-(n=Wr(r<0?ze*r-.5:ze*r+.5))*Ye,n*qe,n)}var rt=17976931348623157e292;function nt(r){return W(r)===r}function et(r){return 0===r&&1/r===Er}var tt=2.5066282746310007;function it(r){return nt(r/2)}function at(r){return it(r>0?r-1:r+1)}var ot=Math.sqrt,ut=!0===yr?0:1,ft=new tr(1),ct=new K(ft.buffer);function st(r,n){return ft[0]=r,ct[ut]=n>>>0,ft[0]}function lt(r){return 0|r}var pt=1072693247,vt=1e300,yt=1e-300,gt=1048575,dt=1048576,ht=1072693248,wt=536870912,bt=524288,mt=20,Nt=9007199254740992,At=.9617966939259756,_t=.9617967009544373,Et=-7.028461650952758e-9,Ut=[1,1.5],St=[0,.5849624872207642],kt=[0,1.350039202129749e-8],xt=1.4426950408889634,It=1.4426950216293335,Ft=1.9259629911266175e-8,jt=.6931471805599453,Tt=1048576,Ot=1071644672,Vt=20,$t=.6931471824645996,Gt=-1.904654299957768e-9,Ht=1072693247,Wt=1105199104,Ct=1139802112,Lt=1083179008,Pt=1072693248,Mt=1083231232,Rt=3230714880,Zt=31,Xt=1e300,Yt=1e-300,qt=8008566259537294e-32,zt=[0,0],Bt=[0,0];function Dt(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,y,g;if(L(r)||L(n))return NaN;if(mn.assign(n,zt,1,0),o=zt[0],0===zt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return ot(r);if(-.5===n)return 1/ot(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if($r(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Gr(r)<1==(n===Vr)?0:Vr}(r,n)}if(mn.assign(r,zt,1,0),a=zt[0],0===zt[1]){if(0===a)return function(r,n){return n===Er?Vr:n===Vr?0:n>0?at(n)?r:0:at(n)?An(Vr,r):Vr}(r,n);if(1===r)return 1;if(-1===r&&at(n))return-1;if($r(r))return r===Er?Dt(-0,-n):n<0?0:Vr}if(r<0&&!1===nt(n))return(r-r)/(r-r);if(i=Gr(r),e=a&Br|0,t=o&Br|0,f=o>>>Zt|0,u=(u=a>>>Zt|0)&&at(n)?-1:1,t>Wt){if(t>Ct)return function(r,n){return(wr(r)&Br)<=pt?n<0?vt*vt:yt*yt:n>0?vt*vt:yt*yt}(r,n);if(e<Ht)return 1===f?u*Xt*Xt:u*Yt*Yt;if(e>Pt)return 0===f?u*Xt*Xt:u*Yt*Yt;p=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*Ft-a*xt)-((t=st(t=(o=It*i)+u,0))-o),r[0]=t,r[1]=e,r}(Bt,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,y,g,d,h,w,b,m,N,A,_;return m=0,e<dt&&(m-=53,e=wr(n*=Nt)),m+=(e>>mt)-_r|0,e=(N=e&gt|0)|ht|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=dt),o=st(i=(w=(n=Ar(n,e))-(c=Ut[A]))*(b=1/(n+c)),0),t=(e>>1|wt)+bt,f=Ar(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=st(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),l=st(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=_t*l,g=(v=Et*l+(b-(l-w))*At+kt[A])-((y=st(y=p+v+(s=St[A])+(d=m),0))-d-s-p),r[0]=y,r[1]=g,r}(Bt,i,e);if(v=(l=(n-(c=st(n,0)))*p[0]+n*p[1])+(s=c*p[0]),mn.assign(v,zt,1,0),y=lt(zt[0]),g=lt(zt[1]),y>=Lt){if(0!=(y-Lt|g))return u*Xt*Xt;if(l+qt>v-s)return u*Xt*Xt}else if((y&Br)>=Mt){if(0!=(y-Rt|g))return u*Yt*Yt;if(l<=v-s)return u*Yt*Yt}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&Br|0)>>Vt)-_r|0,c=0,s>Ot&&(i=Ar(0,((c=r+(Tt>>l+1)>>>0)&~(Jr>>(l=((c&Br)>>Vt)-_r|0)))>>>0),c=(c&Jr|Tt)>>Vt-l>>>0,r<0&&(c=-c),n-=i),r=lt(r=wr(f=1-((f=(a=(i=st(i=e+n,0))*$t)+(o=(e-(i-n))*jt+i*Gt))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Vt>>>0)>>Vt<=0?Fn(f,c):Ar(f,r)}(y,s,l),u*v}var Jt=143.01608;function Kt(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Qe(r),e=r>Jt?(t=Dt(r,.5*r-.25))*(t/e):Dt(r,r-.5)/e,tt*e*n}var Qt=.5772156649015329;function ri(r,n){return n/((1+Qt*r)*r)}var ni=.6931471803691238,ei=1.9082149292705877e-10,ti=.41421356237309503,ii=-.2928932188134525,ai=1.862645149230957e-9,oi=5551115123125783e-32,ui=9007199254740992,fi=.6666666666666666;function ci(r,n){return L(r)||L(n)?NaN:r===Vr||n===Vr?Vr:r===n&&0===r?function(r){return 0===r&&1/r===Vr}(r)?r:n:r>n?r:n}function si(r,n){return L(r)||L(n)?NaN:r===Er||n===Er?Er:r===n&&0===r?et(r)?r:n:r<n?r:n}var li=709.782712893384,pi=-708.3964185322641,vi=10.900511,yi=2.718281828459045;function gi(r,n){var e,t,i,a,o,u,f,c,s,l;return f=(n-r-vi+.5)/(i=r+vi-.5),r<1?n<=pi?Qe(r*Or(n)-n-Xe(r)):Dt(n,r)*Qe(-n)/function(r){var n,e,t,i;if(nt(r)&&r<0||r===Er||L(r))return NaN;if(0===r)return et(r)?Er:Vr;if(r>171.61447887182297)return Vr;if(r<-170.5674972726612)return 0;if((e=Gr(r))>33)return r>=0?Kt(r):(n=0==(1&(t=W(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*Se(ke*i),n*ke/(Gr(i)*Kt(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ri(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ri(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}(r):(Gr(f*f*r)<=100&&r>150?(e=r*(function(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||L(r))return NaN;if(-1===r)return Er;if(r===Vr)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<ti){if(t<ai)return t<oi?r:r-r*r*.5;r>ii&&(s=0,i=r,e=1)}return 0!==s&&(t<ui?(a=(s=((e=wr(c=1+r))>>20)-_r)>0?1-(c-r):r-(c-1),a/=c):(s=((e=wr(c=r))>>20)-_r,a=0),(e&=1048575)<434334?c=Ar(c,1072693248|e):(s+=1,c=Ar(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*ni+(a+=s*ei):s*ni-((f=n*(1-fi*i))-(s*ei+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ni-(n-(o*(n+f)+(s*ei+a))-i))}(f)-f)+n*(.5-vi)/i,e=Qe(e)):si(a=r*Or(n/i),o=r-n)<=pi||ci(a,o)>=li?(t=o/r,si(a,o)/2>pi&&ci(a,o)/2<li?e=(u=Dt(n/i,r/2)*Qe(o/2))*u:si(a,o)/4>pi&&ci(a,o)/4<li&&n>r?(e=(u=Dt(n/i,r/4)*Qe(o/4))*u,e*=e):e=t>pi&&t<li?Dt(n*Qe(t)/i,r):Qe(a+o)):e=Dt(n/i,r)*Qe(o),e*=ot(i/yi)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}function di(r,n){var e;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:Vr:(e=gi(r,n),n<1&&rt*n<e?Vr:(0===e?e=Qe(e=r*Or(n)-n-Xe(r)-Or(n)):e/=n,e))}function hi(r,n,e){return L(r)||L(n)||L(e)||n<0||e<=0?NaN:r<0||r===Vr?Er:0===n?0===r?Vr:Er:Or(di(n,r*e))+Or(e)}function wi(r){return function(){return r}}function bi(r){return L(r)?wi(NaN):function(n){return L(n)?NaN:n===r?Vr:Er}}function mi(r,n){return L(r)||L(n)||r<0||n<=0?wi(NaN):0===r?bi(0):function(e){return L(e)?NaN:e<0||e===Vr?Er:Or(di(r,e*n))+Or(n)}}function Ni(r,n,e){return C(n)?hi(r,n,e):NaN}return H((function(r,n){return L(r)||L(n)?NaN:r===n?Vr:Er}),"factory",bi),H(hi,"factory",mi),H(Ni,"factory",(function(r,n){return C(r)?mi(r,n):wi(NaN)})),Ni},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
