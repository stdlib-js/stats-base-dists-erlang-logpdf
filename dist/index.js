"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=t(function(d,a){
var c=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),f=require('@stdlib/stats-base-dists-gamma-logpdf/dist');function v(e,r,s){return c(r)?f(e,r,s):NaN}a.exports=v
});var u=t(function(l,n){
var q=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),N=require('@stdlib/utils-constant-function/dist'),g=require('@stdlib/stats-base-dists-gamma-logpdf/dist').factory;function y(e,r){return q(e)?g(e,r):N(NaN)}n.exports=y
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=i(),p=u();m(o,"factory",p);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
