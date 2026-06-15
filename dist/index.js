"use strict";var a=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=a(function(d,i){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),f=require('@stdlib/stats-base-dists-gamma-logpdf/dist');function v(e,r,t){return c(r)?f(e,r,t):NaN}i.exports=v
});var o=a(function(l,u){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-gamma-logpdf/dist').factory;function y(e,r){return q(e)?g(e,r):N(NaN)}u.exports=y
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=n(),p=o();m(s,"factory",p);module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
