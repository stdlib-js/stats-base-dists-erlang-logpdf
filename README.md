<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the probability density function (PDF) for an [Erlang][erlang-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution] random variable is

<!-- <equation class="equation" label="eq:erlang_pdf" align="center" raw="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" alt="Probability density function (PDF) for an Erlang distribution."> -->

```math
f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)
```

<!-- <div class="equation" align="center" data-raw-text="f(x; k,\lambda)={\lambda^k x^{k-1} e^{-\lambda x} \over (k-1)!} 1(x \ge 0)" data-equation="eq:erlang_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/erlang/logpdf/docs/img/equation_erlang_pdf.svg" alt="Probability density function (PDF) for an Erlang distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `k` is the shape parameter and `lambda` is the rate parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-logpdf@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-logpdf@deno/mod.js';
```

#### logpdf( x, k, lambda )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for an [Erlang][erlang-distribution]  distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var y = logpdf( 0.1, 1, 1.0 );
// returns ~-0.1

y = logpdf( 0.5, 2, 2.5 );
// returns ~-0.111

y = logpdf( -1.0, 4, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1, NaN );
// returns NaN
```

If not provided a nonnegative integer for `k`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -2, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.5 );
// returns NaN
```

If provided `k = 0`, the function evaluates the logarithm of the [PDF][pdf] of a [degenerate distribution][degenerate-distribution] centered at `0`.

```javascript
var y = logpdf( 2.0, 0.0, 2.0 );
// returns -Infinity

y = logpdf( 0.0, 0.0, 2.0 );
// returns Infinity
```

If provided `lambda <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 1, 0.0 );
// returns NaN

y = logpdf( 2.0, 1, -1.0 );
// returns NaN
```

#### logpdf.factory( k, lambda )

Returns a `function` for evaluating the [PDF][pdf] for an [Erlang][erlang-distribution] distribution with parameters `k` (shape parameter) and `lambda` (rate parameter).

```javascript
var mylogpdf = logpdf.factory( 3, 1.5 );

var y = mylogpdf( 1.0 );
// returns ~-0.977

y = mylogpdf( 4.0 );
// returns ~-2.704
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-erlang-logpdf@deno/mod.js';

var lambda;
var k;
var x;
var y;
var i;

for ( i = 0; i < 20; i++ ) {
    x = randu() * 10.0;
    k = round( randu() * 10.0 );
    lambda = randu() * 5.0;
    y = logpdf( x, k, lambda );
    console.log( 'x: %d, k: %d, λ: %d, ln(f(x;k,λ)): %d', x.toFixed( 4 ), k, lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-erlang-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-erlang-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-erlang-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-erlang-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-erlang-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-erlang-logpdf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-erlang-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-erlang-logpdf/main/LICENSE

[erlang-distribution]: https://en.wikipedia.org/wiki/Erlang_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[degenerate-distribution]: https://en.wikipedia.org/wiki/Degenerate_distribution

</section>

<!-- /.links -->
