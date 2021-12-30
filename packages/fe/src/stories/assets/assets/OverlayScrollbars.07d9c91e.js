import { ae as Nc, ac as xe } from './vendor.499b2e68.js';
var Ys = { exports: {} };
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */ (function (ae) {
	(function (Z, or) {
		ae.exports = or(Z, Z.document, void 0);
	})(typeof window != 'undefined' ? window : Nc, function (Z, or, w) {
		var ke = 'OverlayScrollbars',
			p = {
				o: 'object',
				f: 'function',
				a: 'array',
				s: 'string',
				b: 'boolean',
				n: 'number',
				u: 'undefined',
				z: 'null'
			},
			s = {
				c: 'class',
				s: 'style',
				i: 'id',
				l: 'length',
				p: 'prototype',
				ti: 'tabindex',
				oH: 'offsetHeight',
				cH: 'clientHeight',
				sH: 'scrollHeight',
				oW: 'offsetWidth',
				cW: 'clientWidth',
				sW: 'scrollWidth',
				hOP: 'hasOwnProperty',
				bCR: 'getBoundingClientRect'
			},
			He = (function () {
				var g = {},
					m = {},
					e = ['-webkit-', '-moz-', '-o-', '-ms-'],
					f = ['WebKit', 'Moz', 'O', 'MS'];
				function u(d) {
					return d.charAt(0).toUpperCase() + d.slice(1);
				}
				return {
					_cssPrefixes: e,
					_jsPrefixes: f,
					_cssProperty: function (d) {
						var T = m[d];
						if (m[s.hOP](d)) return T;
						for (
							var vr = u(d), ir = or.createElement('div')[s.s], E, j = 0, mr, U;
							j < e.length;
							j++
						)
							for (
								U = e[j].replace(/-/g, ''), E = [d, e[j] + d, U + vr, u(U) + vr], mr = 0;
								mr < E[s.l];
								mr++
							)
								if (ir[E[mr]] !== w) {
									T = E[mr];
									break;
								}
						return (m[d] = T), T;
					},
					_cssPropertyValue: function (d, T, vr) {
						var ir = d + ' ' + T,
							E = m[ir];
						if (m[s.hOP](ir)) return E;
						for (
							var j = or.createElement('div')[s.s],
								mr = T.split(' '),
								U = vr || '',
								Pr = 0,
								H = -1,
								Q;
							Pr < mr[s.l];
							Pr++
						)
							for (; H < He._cssPrefixes[s.l]; H++)
								if (
									((Q = H < 0 ? mr[Pr] : He._cssPrefixes[H] + mr[Pr]),
									(j.cssText = d + ':' + Q + U),
									j[s.l])
								) {
									E = Q;
									break;
								}
						return (m[ir] = E), E;
					},
					_jsAPI: function (d, T, vr) {
						var ir = 0,
							E = g[d];
						if (!g[s.hOP](d)) {
							for (E = Z[d]; ir < f[s.l]; ir++)
								E = E || Z[(T ? f[ir] : f[ir].toLowerCase()) + u(d)];
							g[d] = E;
						}
						return E || vr;
					}
				};
			})(),
			O = (function () {
				function g(e) {
					return e
						? Z.innerWidth || or.documentElement[s.cW] || or.body[s.cW]
						: Z.innerHeight || or.documentElement[s.cH] || or.body[s.cH];
				}
				function m(e, f) {
					if (typeof e != p.f) throw "Can't bind function!";
					var u = s.p,
						d = Array[u].slice.call(arguments, 2),
						T = function () {},
						vr = function () {
							return e.apply(
								this instanceof T ? this : f,
								d.concat(Array[u].slice.call(arguments))
							);
						};
					return e[u] && (T[u] = e[u]), (vr[u] = new T()), vr;
				}
				return {
					wW: m(g, 0, !0),
					wH: m(g, 0),
					mO: m(He._jsAPI, 0, 'MutationObserver', !0),
					rO: m(He._jsAPI, 0, 'ResizeObserver', !0),
					rAF: m(He._jsAPI, 0, 'requestAnimationFrame', !1, function (e) {
						return Z.setTimeout(e, 1e3 / 60);
					}),
					cAF: m(He._jsAPI, 0, 'cancelAnimationFrame', !1, function (e) {
						return Z.clearTimeout(e);
					}),
					now: function () {
						return (Date.now && Date.now()) || new Date().getTime();
					},
					stpP: function (e) {
						e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
					},
					prvD: function (e) {
						e.preventDefault && e.cancelable ? e.preventDefault() : (e.returnValue = !1);
					},
					page: function (e) {
						e = e.originalEvent || e;
						var f = 'page',
							u = 'client',
							d = 'X',
							T = 'Y',
							vr = e.target || e.srcElement || or,
							ir = vr.ownerDocument || or,
							E = ir.documentElement,
							j = ir.body;
						if (e.touches !== w) {
							var mr = e.touches[0];
							return { x: mr[f + d], y: mr[f + T] };
						}
						return !e[f + d] && e[u + d] && e[u + d] != null
							? {
									x:
										e[u + d] +
										((E && E.scrollLeft) || (j && j.scrollLeft) || 0) -
										((E && E.clientLeft) || (j && j.clientLeft) || 0),
									y:
										e[u + T] +
										((E && E.scrollTop) || (j && j.scrollTop) || 0) -
										((E && E.clientTop) || (j && j.clientTop) || 0)
							  }
							: { x: e[f + d], y: e[f + T] };
					},
					mBtn: function (e) {
						var f = e.button;
						return !e.which && f !== w ? (f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0) : e.which;
					},
					inA: function (e, f) {
						for (var u = 0; u < f[s.l]; u++)
							try {
								if (f[u] === e) return u;
							} catch {}
						return -1;
					},
					isA: function (e) {
						var f = Array.isArray;
						return f ? f(e) : this.type(e) == p.a;
					},
					type: function (e) {
						return e === w || e === null
							? e + ''
							: Object[s.p].toString
									.call(e)
									.replace(/^\[object (.+)\]$/, '$1')
									.toLowerCase();
					},
					bind: m
				};
			})(),
			N = Math,
			vt = Z.jQuery,
			Js = (function () {
				var g = {
					p: N.PI,
					c: N.cos,
					s: N.sin,
					w: N.pow,
					t: N.sqrt,
					n: N.asin,
					a: N.abs,
					o: 1.70158
				};
				return {
					swing: function (m, e, f, u, d) {
						return 0.5 - g.c(m * g.p) / 2;
					},
					linear: function (m, e, f, u, d) {
						return m;
					},
					easeInQuad: function (m, e, f, u, d) {
						return u * (e /= d) * e + f;
					},
					easeOutQuad: function (m, e, f, u, d) {
						return -u * (e /= d) * (e - 2) + f;
					},
					easeInOutQuad: function (m, e, f, u, d) {
						return (e /= d / 2) < 1 ? (u / 2) * e * e + f : (-u / 2) * (--e * (e - 2) - 1) + f;
					},
					easeInCubic: function (m, e, f, u, d) {
						return u * (e /= d) * e * e + f;
					},
					easeOutCubic: function (m, e, f, u, d) {
						return u * ((e = e / d - 1) * e * e + 1) + f;
					},
					easeInOutCubic: function (m, e, f, u, d) {
						return (e /= d / 2) < 1
							? (u / 2) * e * e * e + f
							: (u / 2) * ((e -= 2) * e * e + 2) + f;
					},
					easeInQuart: function (m, e, f, u, d) {
						return u * (e /= d) * e * e * e + f;
					},
					easeOutQuart: function (m, e, f, u, d) {
						return -u * ((e = e / d - 1) * e * e * e - 1) + f;
					},
					easeInOutQuart: function (m, e, f, u, d) {
						return (e /= d / 2) < 1
							? (u / 2) * e * e * e * e + f
							: (-u / 2) * ((e -= 2) * e * e * e - 2) + f;
					},
					easeInQuint: function (m, e, f, u, d) {
						return u * (e /= d) * e * e * e * e + f;
					},
					easeOutQuint: function (m, e, f, u, d) {
						return u * ((e = e / d - 1) * e * e * e * e + 1) + f;
					},
					easeInOutQuint: function (m, e, f, u, d) {
						return (e /= d / 2) < 1
							? (u / 2) * e * e * e * e * e + f
							: (u / 2) * ((e -= 2) * e * e * e * e + 2) + f;
					},
					easeInSine: function (m, e, f, u, d) {
						return -u * g.c((e / d) * (g.p / 2)) + u + f;
					},
					easeOutSine: function (m, e, f, u, d) {
						return u * g.s((e / d) * (g.p / 2)) + f;
					},
					easeInOutSine: function (m, e, f, u, d) {
						return (-u / 2) * (g.c((g.p * e) / d) - 1) + f;
					},
					easeInExpo: function (m, e, f, u, d) {
						return e == 0 ? f : u * g.w(2, 10 * (e / d - 1)) + f;
					},
					easeOutExpo: function (m, e, f, u, d) {
						return e == d ? f + u : u * (-g.w(2, (-10 * e) / d) + 1) + f;
					},
					easeInOutExpo: function (m, e, f, u, d) {
						return e == 0
							? f
							: e == d
							? f + u
							: (e /= d / 2) < 1
							? (u / 2) * g.w(2, 10 * (e - 1)) + f
							: (u / 2) * (-g.w(2, -10 * --e) + 2) + f;
					},
					easeInCirc: function (m, e, f, u, d) {
						return -u * (g.t(1 - (e /= d) * e) - 1) + f;
					},
					easeOutCirc: function (m, e, f, u, d) {
						return u * g.t(1 - (e = e / d - 1) * e) + f;
					},
					easeInOutCirc: function (m, e, f, u, d) {
						return (e /= d / 2) < 1
							? (-u / 2) * (g.t(1 - e * e) - 1) + f
							: (u / 2) * (g.t(1 - (e -= 2) * e) + 1) + f;
					},
					easeInElastic: function (m, e, f, u, d) {
						var T = g.o,
							vr = 0,
							ir = u;
						return e == 0
							? f
							: (e /= d) == 1
							? f + u
							: (vr || (vr = d * 0.3),
							  ir < g.a(u) ? ((ir = u), (T = vr / 4)) : (T = (vr / (2 * g.p)) * g.n(u / ir)),
							  -(ir * g.w(2, 10 * (e -= 1)) * g.s(((e * d - T) * (2 * g.p)) / vr)) + f);
					},
					easeOutElastic: function (m, e, f, u, d) {
						var T = g.o,
							vr = 0,
							ir = u;
						return e == 0
							? f
							: (e /= d) == 1
							? f + u
							: (vr || (vr = d * 0.3),
							  ir < g.a(u) ? ((ir = u), (T = vr / 4)) : (T = (vr / (2 * g.p)) * g.n(u / ir)),
							  ir * g.w(2, -10 * e) * g.s(((e * d - T) * (2 * g.p)) / vr) + u + f);
					},
					easeInOutElastic: function (m, e, f, u, d) {
						var T = g.o,
							vr = 0,
							ir = u;
						return e == 0
							? f
							: (e /= d / 2) == 2
							? f + u
							: (vr || (vr = d * (0.3 * 1.5)),
							  ir < g.a(u) ? ((ir = u), (T = vr / 4)) : (T = (vr / (2 * g.p)) * g.n(u / ir)),
							  e < 1
									? -0.5 * (ir * g.w(2, 10 * (e -= 1)) * g.s(((e * d - T) * (2 * g.p)) / vr)) + f
									: ir * g.w(2, -10 * (e -= 1)) * g.s(((e * d - T) * (2 * g.p)) / vr) * 0.5 +
									  u +
									  f);
					},
					easeInBack: function (m, e, f, u, d, T) {
						return (T = T || g.o), u * (e /= d) * e * ((T + 1) * e - T) + f;
					},
					easeOutBack: function (m, e, f, u, d, T) {
						return (T = T || g.o), u * ((e = e / d - 1) * e * ((T + 1) * e + T) + 1) + f;
					},
					easeInOutBack: function (m, e, f, u, d, T) {
						return (
							(T = T || g.o),
							(e /= d / 2) < 1
								? (u / 2) * (e * e * (((T *= 1.525) + 1) * e - T)) + f
								: (u / 2) * ((e -= 2) * e * (((T *= 1.525) + 1) * e + T) + 2) + f
						);
					},
					easeInBounce: function (m, e, f, u, d) {
						return u - this.easeOutBounce(m, d - e, 0, u, d) + f;
					},
					easeOutBounce: function (m, e, f, u, d) {
						var T = 7.5625;
						return (e /= d) < 1 / 2.75
							? u * (T * e * e) + f
							: e < 2 / 2.75
							? u * (T * (e -= 1.5 / 2.75) * e + 0.75) + f
							: e < 2.5 / 2.75
							? u * (T * (e -= 2.25 / 2.75) * e + 0.9375) + f
							: u * (T * (e -= 2.625 / 2.75) * e + 0.984375) + f;
					},
					easeInOutBounce: function (m, e, f, u, d) {
						return e < d / 2
							? this.easeInBounce(m, e * 2, 0, u, d) * 0.5 + f
							: this.easeOutBounce(m, e * 2 - d, 0, u, d) * 0.5 + u * 0.5 + f;
					}
				};
			})(),
			R = (function () {
				var g = /[^\x20\t\r\n\f]+/g,
					m = ' ',
					e = '',
					f = 'scrollLeft',
					u = 'scrollTop',
					d = [],
					T = O.type,
					vr = {
						animationIterationCount: !0,
						columnCount: !0,
						fillOpacity: !0,
						flexGrow: !0,
						flexShrink: !0,
						fontWeight: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0
					};
				function ir() {
					var t,
						o,
						n,
						v,
						b,
						S,
						D = arguments[0] || {},
						J = 1,
						rr = arguments[s.l],
						z = !1;
					for (
						T(D) == p.b && ((z = D), (D = arguments[1] || {}), (J = 2)),
							T(D) != p.o && !T(D) == p.f && (D = {}),
							rr === J && ((D = G), --J);
						J < rr;
						J++
					)
						if ((b = arguments[J]) != null)
							for (v in b)
								(t = D[v]),
									(n = b[v]),
									D !== n &&
										(z && n && (U(n) || (o = O.isA(n)))
											? (o ? ((o = !1), (S = t && O.isA(t) ? t : [])) : (S = t && U(t) ? t : {}),
											  (D[v] = ir(z, S, n)))
											: n !== w && (D[v] = n));
					return D;
				}
				function E(t, o, n) {
					for (var v = n || 0; v < o[s.l]; v++) if (o[v] === t) return v;
					return -1;
				}
				function j(t) {
					return T(t) == p.f;
				}
				function mr(t) {
					for (var o in t) return !1;
					return !0;
				}
				function U(t) {
					if (!t || T(t) != p.o) return !1;
					var o,
						n = s.p,
						v = Object[n].hasOwnProperty,
						b = v.call(t, 'constructor'),
						S = t.constructor && t.constructor[n] && v.call(t.constructor[n], 'isPrototypeOf');
					if (t.constructor && !b && !S) return !1;
					for (o in t);
					return T(o) == p.u || v.call(t, o);
				}
				function Pr(t, o) {
					var n = 0;
					if (H(t)) for (; n < t[s.l] && o.call(t[n], n, t[n]) !== !1; n++);
					else for (n in t) if (o.call(t[n], n, t[n]) === !1) break;
					return t;
				}
				function H(t) {
					var o = !!t && [s.l] in t && t[s.l],
						n = T(t);
					return j(n) ? !1 : n == p.a || o === 0 || (T(o) == p.n && o > 0 && o - 1 in t);
				}
				function Q(t) {
					var o = t.match(g) || [];
					return o.join(m);
				}
				function $(t, o) {
					for (var n = (t.parentNode || or).querySelectorAll(o) || [], v = n[s.l]; v--; )
						if (n[v] == t) return !0;
					return !1;
				}
				function k(t, o, n) {
					if (O.isA(n)) for (var v = 0; v < n[s.l]; v++) k(t, o, n[v]);
					else
						T(n) == p.s
							? t.insertAdjacentHTML(o, n)
							: t.insertAdjacentElement(o, n.nodeType ? n : n[0]);
				}
				function hr(t, o, n) {
					try {
						t[s.s][o] !== w && (t[s.s][o] = Re(o, n));
					} catch {}
				}
				function Re(t, o) {
					return !vr[t.toLowerCase()] && T(o) == p.n && (o += 'px'), o;
				}
				function K(t, o) {
					var n, v;
					o !== !1 && t.q.splice(0, 1),
						t.q[s.l] > 0
							? ((v = t.q[0]), A(t.el, v.props, v.duration, v.easing, v.complete, !0))
							: ((n = E(t, d)), n > -1 && d.splice(n, 1));
				}
				function Kr(t, o, n) {
					o === f || o === u ? (t[o] = n) : hr(t, o, n);
				}
				function A(t, o, n, v, b, S) {
					var D = U(n),
						J = {},
						rr = {},
						z = 0,
						Y,
						Yr,
						Er,
						Ir,
						qr,
						Or;
					for (
						D
							? ((v = n.easing),
							  (Er = n.progress),
							  (Ir = n.step),
							  (qr = n.specialEasing),
							  (b = n.complete),
							  (Or = n.duration))
							: (Or = n),
							qr = qr || {},
							Or = Or || 400,
							v = v || 'swing',
							S = S || !1;
						z < d[s.l];
						z++
					)
						if (d[z].el === t) {
							Yr = d[z];
							break;
						}
					Yr || ((Yr = { el: t, q: [] }), d.push(Yr));
					for (Y in o) Y === f || Y === u ? (J[Y] = t[Y]) : (J[Y] = G(t).css(Y));
					for (Y in J) J[Y] !== o[Y] && o[Y] !== w && (rr[Y] = o[Y]);
					if (mr(rr)) S && K(Yr);
					else {
						var Fe,
							Tr,
							pe,
							ge,
							Ue,
							dr,
							Dr,
							xa,
							Ce,
							Ae = S ? 0 : E(xr, Yr.q),
							xr = { props: rr, duration: D ? n : Or, easing: v, complete: b };
						if ((Ae === -1 && ((Ae = Yr.q[s.l]), Yr.q.push(xr)), Ae === 0))
							if (Or > 0)
								(Dr = O.now()),
									(xa = function () {
										(Fe = O.now()),
											(Ce = Fe - Dr),
											(Tr = xr.stop || Ce >= Or),
											(pe = 1 - (N.max(0, Dr + Or - Fe) / Or || 0));
										for (Y in rr)
											(ge = parseFloat(J[Y])),
												(Ue = parseFloat(rr[Y])),
												(dr = (Ue - ge) * Js[qr[Y] || v](pe, pe * Or, 0, 1, Or) + ge),
												Kr(t, Y, dr),
												j(Ir) &&
													Ir(dr, {
														elem: t,
														prop: Y,
														start: ge,
														now: dr,
														end: Ue,
														pos: pe,
														options: {
															easing: v,
															speacialEasing: qr,
															duration: Or,
															complete: b,
															step: Ir
														},
														startTime: Dr
													});
										j(Er) && Er({}, pe, N.max(0, Or - Ce)),
											Tr ? (K(Yr), j(b) && b()) : (xr.frame = O.rAF()(xa));
									}),
									(xr.frame = O.rAF()(xa));
							else {
								for (Y in rr) Kr(t, Y, rr[Y]);
								K(Yr);
							}
					}
				}
				function pr(t, o, n) {
					for (var v, b, S, D = 0; D < d[s.l]; D++)
						if (((v = d[D]), v.el === t)) {
							if (v.q[s.l] > 0) {
								if (((b = v.q[0]), (b.stop = !0), O.cAF()(b.frame), v.q.splice(0, 1), n))
									for (S in b.props) Kr(t, S, b.props[S]);
								o ? (v.q = []) : K(v, !1);
							}
							break;
						}
				}
				function br(t) {
					return !!(t[s.oW] || t[s.oH] || t.getClientRects()[s.l]);
				}
				function G(t) {
					if (arguments[s.l] === 0) return this;
					var o = new G(),
						n = t,
						v = 0,
						b,
						S;
					if (T(t) == p.s)
						for (
							n = [],
								t.charAt(0) === '<'
									? ((S = or.createElement('div')), (S.innerHTML = t), (b = S.children))
									: (b = or.querySelectorAll(t));
							v < b[s.l];
							v++
						)
							n.push(b[v]);
					if (n) {
						for (
							T(n) != p.s && (!H(n) || n === Z || n === n.self) && (n = [n]), v = 0;
							v < n[s.l];
							v++
						)
							o[v] = n[v];
						o[s.l] = n[s.l];
					}
					return o;
				}
				return (
					(G[s.p] = {
						on: function (t, o) {
							t = (t || e).match(g) || [e];
							var n = t[s.l],
								v = 0,
								b;
							return this.each(function () {
								b = this;
								try {
									if (b.addEventListener) for (; v < n; v++) b.addEventListener(t[v], o);
									else if (b.detachEvent) for (; v < n; v++) b.attachEvent('on' + t[v], o);
								} catch {}
							});
						},
						off: function (t, o) {
							t = (t || e).match(g) || [e];
							var n = t[s.l],
								v = 0,
								b;
							return this.each(function () {
								b = this;
								try {
									if (b.removeEventListener) for (; v < n; v++) b.removeEventListener(t[v], o);
									else if (b.detachEvent) for (; v < n; v++) b.detachEvent('on' + t[v], o);
								} catch {}
							});
						},
						one: function (t, o) {
							return (
								(t = (t || e).match(g) || [e]),
								this.each(function () {
									var n = G(this);
									G.each(t, function (v, b) {
										var S = function (D) {
											o.call(this, D), n.off(b, S);
										};
										n.on(b, S);
									});
								})
							);
						},
						trigger: function (t) {
							var o, n;
							return this.each(function () {
								(o = this),
									or.createEvent
										? ((n = or.createEvent('HTMLEvents')),
										  n.initEvent(t, !0, !1),
										  o.dispatchEvent(n))
										: o.fireEvent('on' + t);
							});
						},
						append: function (t) {
							return this.each(function () {
								k(this, 'beforeend', t);
							});
						},
						prepend: function (t) {
							return this.each(function () {
								k(this, 'afterbegin', t);
							});
						},
						before: function (t) {
							return this.each(function () {
								k(this, 'beforebegin', t);
							});
						},
						after: function (t) {
							return this.each(function () {
								k(this, 'afterend', t);
							});
						},
						remove: function () {
							return this.each(function () {
								var t = this,
									o = t.parentNode;
								o != null && o.removeChild(t);
							});
						},
						unwrap: function () {
							var t = [],
								o,
								n,
								v;
							for (
								this.each(function () {
									(v = this.parentNode), E(v, t) === -1 && t.push(v);
								}),
									o = 0;
								o < t[s.l];
								o++
							) {
								for (n = t[o], v = n.parentNode; n.firstChild; ) v.insertBefore(n.firstChild, n);
								v.removeChild(n);
							}
							return this;
						},
						wrapAll: function (t) {
							for (
								var o, n = this, v = G(t)[0], b = v, S = n[0].parentNode, D = n[0].previousSibling;
								b.childNodes[s.l] > 0;

							)
								b = b.childNodes[0];
							for (o = 0; n[s.l] - o; b.firstChild === n[0] && o++) b.appendChild(n[o]);
							var J = D ? D.nextSibling : S.firstChild;
							return S.insertBefore(v, J), this;
						},
						wrapInner: function (t) {
							return this.each(function () {
								var o = G(this),
									n = o.contents();
								n[s.l] ? n.wrapAll(t) : o.append(t);
							});
						},
						wrap: function (t) {
							return this.each(function () {
								G(this).wrapAll(t);
							});
						},
						css: function (t, o) {
							var n,
								v,
								b,
								S = Z.getComputedStyle;
							return T(t) == p.s
								? o === w
									? ((n = this[0]),
									  (b = S ? S(n, null) : n.currentStyle[t]),
									  S ? (b != null ? b.getPropertyValue(t) : n[s.s][t]) : b)
									: this.each(function () {
											hr(this, t, o);
									  })
								: this.each(function () {
										for (v in t) hr(this, v, t[v]);
								  });
						},
						hasClass: function (t) {
							for (var o, n = 0, v = m + t + m, b; (o = this[n++]); ) {
								if (((b = o.classList), b && b.contains(t))) return !0;
								if (o.nodeType === 1 && (m + Q(o.className + e) + m).indexOf(v) > -1) return !0;
							}
							return !1;
						},
						addClass: function (t) {
							var o,
								n,
								v,
								b,
								S,
								D,
								J,
								rr,
								z = 0,
								Y = 0;
							if (t) {
								for (o = t.match(g) || []; (n = this[z++]); )
									if (((rr = n.classList), J === w && (J = rr !== w), J))
										for (; (S = o[Y++]); ) rr.add(S);
									else if (((b = n.className + e), (v = n.nodeType === 1 && m + Q(b) + m), v)) {
										for (; (S = o[Y++]); ) v.indexOf(m + S + m) < 0 && (v += S + m);
										(D = Q(v)), b !== D && (n.className = D);
									}
							}
							return this;
						},
						removeClass: function (t) {
							var o,
								n,
								v,
								b,
								S,
								D,
								J,
								rr,
								z = 0,
								Y = 0;
							if (t) {
								for (o = t.match(g) || []; (n = this[z++]); )
									if (((rr = n.classList), J === w && (J = rr !== w), J))
										for (; (S = o[Y++]); ) rr.remove(S);
									else if (((b = n.className + e), (v = n.nodeType === 1 && m + Q(b) + m), v)) {
										for (; (S = o[Y++]); )
											for (; v.indexOf(m + S + m) > -1; ) v = v.replace(m + S + m, m);
										(D = Q(v)), b !== D && (n.className = D);
									}
							}
							return this;
						},
						hide: function () {
							return this.each(function () {
								this[s.s].display = 'none';
							});
						},
						show: function () {
							return this.each(function () {
								this[s.s].display = 'block';
							});
						},
						attr: function (t, o) {
							for (var n = 0, v; (v = this[n++]); ) {
								if (o === w) return v.getAttribute(t);
								v.setAttribute(t, o);
							}
							return this;
						},
						removeAttr: function (t) {
							return this.each(function () {
								this.removeAttribute(t);
							});
						},
						offset: function () {
							var t = this[0],
								o = t[s.bCR](),
								n = Z.pageXOffset || or.documentElement[f],
								v = Z.pageYOffset || or.documentElement[u];
							return { top: o.top + v, left: o.left + n };
						},
						position: function () {
							var t = this[0];
							return { top: t.offsetTop, left: t.offsetLeft };
						},
						scrollLeft: function (t) {
							for (var o = 0, n; (n = this[o++]); ) {
								if (t === w) return n[f];
								n[f] = t;
							}
							return this;
						},
						scrollTop: function (t) {
							for (var o = 0, n; (n = this[o++]); ) {
								if (t === w) return n[u];
								n[u] = t;
							}
							return this;
						},
						val: function (t) {
							var o = this[0];
							return t ? ((o.value = t), this) : o.value;
						},
						first: function () {
							return this.eq(0);
						},
						last: function () {
							return this.eq(-1);
						},
						eq: function (t) {
							return G(this[t >= 0 ? t : this[s.l] + t]);
						},
						find: function (t) {
							var o = [],
								n;
							return (
								this.each(function () {
									var v = this,
										b = v.querySelectorAll(t);
									for (n = 0; n < b[s.l]; n++) o.push(b[n]);
								}),
								G(o)
							);
						},
						children: function (t) {
							var o = [],
								n,
								v,
								b;
							return (
								this.each(function () {
									for (v = this.children, b = 0; b < v[s.l]; b++)
										(n = v[b]),
											t ? ((n.matches && n.matches(t)) || $(n, t)) && o.push(n) : o.push(n);
								}),
								G(o)
							);
						},
						parent: function (t) {
							var o = [],
								n;
							return (
								this.each(function () {
									(n = this.parentNode), (t ? G(n).is(t) : !0) && o.push(n);
								}),
								G(o)
							);
						},
						is: function (t) {
							var o, n;
							for (n = 0; n < this[s.l]; n++) {
								if (((o = this[n]), t === ':visible')) return br(o);
								if (t === ':hidden') return !br(o);
								if ((o.matches && o.matches(t)) || $(o, t)) return !0;
							}
							return !1;
						},
						contents: function () {
							var t = [],
								o,
								n;
							return (
								this.each(function () {
									for (o = this.childNodes, n = 0; n < o[s.l]; n++) t.push(o[n]);
								}),
								G(t)
							);
						},
						each: function (t) {
							return Pr(this, t);
						},
						animate: function (t, o, n, v) {
							return this.each(function () {
								A(this, t, o, n, v);
							});
						},
						stop: function (t, o) {
							return this.each(function () {
								pr(this, t, o);
							});
						}
					}),
					ir(G, { extend: ir, inArray: E, isEmptyObject: mr, isPlainObject: U, each: Pr }),
					G
				);
			})(),
			Ma = (function () {
				var g = [],
					m = '__overlayScrollbars__';
				return function (e, f) {
					var u = arguments[s.l];
					if (u < 1) return g;
					if (f) (e[m] = f), g.push(e);
					else {
						var d = O.inA(e, g);
						if (d > -1)
							if (u > 1) delete e[m], g.splice(d, 1);
							else return g[d][m];
					}
				};
			})(),
			Sn = (function () {
				var g,
					m,
					e,
					f = [],
					u = (function () {
						var E = O.type,
							j = [p.b, p.n, p.s, p.a, p.o, p.f, p.z],
							mr = ' ',
							U = ':',
							Pr = [p.z, p.s],
							H = p.n,
							Q = [p.z, p.b],
							$ = [!0, p.b],
							k = [!1, p.b],
							hr = [null, [p.z, p.f]],
							Re = [['img'], [p.s, p.a, p.z]],
							K = [
								['style', 'class'],
								[p.s, p.a, p.z]
							],
							Kr = 'n:none b:both h:horizontal v:vertical',
							A = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden',
							pr = 'v:visible h:hidden a:auto',
							br = 'n:never s:scroll l:leave m:move',
							G = {
								className: ['os-theme-dark', Pr],
								resize: ['none', Kr],
								sizeAutoCapable: $,
								clipAlways: $,
								normalizeRTL: $,
								paddingAbsolute: k,
								autoUpdate: [null, Q],
								autoUpdateInterval: [33, H],
								updateOnLoad: Re,
								nativeScrollbarsOverlaid: { showNativeScrollbars: k, initialize: $ },
								overflowBehavior: { x: ['scroll', A], y: ['scroll', A] },
								scrollbars: {
									visibility: ['auto', pr],
									autoHide: ['never', br],
									autoHideDelay: [800, H],
									dragScrolling: $,
									clickScrolling: k,
									touchSupport: $,
									snapHandle: k
								},
								textarea: { dynWidth: k, dynHeight: k, inheritedAttrs: K },
								callbacks: {
									onInitialized: hr,
									onInitializationWithdrawn: hr,
									onDestroyed: hr,
									onScrollStart: hr,
									onScroll: hr,
									onScrollStop: hr,
									onOverflowChanged: hr,
									onOverflowAmountChanged: hr,
									onDirectionChanged: hr,
									onContentSizeChanged: hr,
									onHostSizeChanged: hr,
									onUpdated: hr
								}
							},
							t = function (o) {
								var n = function (v) {
									var b, S, D;
									for (b in v)
										!v[s.hOP](b) ||
											((S = v[b]),
											(D = E(S)),
											D == p.a ? (v[b] = S[o ? 1 : 0]) : D == p.o && (v[b] = n(S)));
									return v;
								};
								return n(R.extend(!0, {}, G));
							};
						return {
							_defaults: t(),
							_template: t(!0),
							_validate: function (o, n, v, b) {
								var S = {},
									D = {},
									J = R.extend(!0, {}, o),
									rr = R.inArray,
									z = R.isEmptyObject,
									Y = function (Yr, Er, Ir, qr, Or, Fe) {
										for (var Tr in Er)
											if (Er[s.hOP](Tr) && Yr[s.hOP](Tr)) {
												var pe = !1,
													ge = !1,
													Ue = Er[Tr],
													dr = E(Ue),
													Dr = dr == p.o,
													xa = O.isA(Ue) ? Ue : [Ue],
													Ce = Ir[Tr],
													Ae = Yr[Tr],
													xr = E(Ae),
													ga = Fe ? Fe + '.' : '',
													Pt = 'The option "' + ga + Tr + `" wasn't set, because`,
													te = [],
													_e = [],
													qe,
													Rr,
													ce,
													Se,
													_r,
													Oe,
													Ia,
													V;
												if (((Ce = Ce === w ? {} : Ce), Dr && xr == p.o))
													(qr[Tr] = {}),
														(Or[Tr] = {}),
														Y(Ae, Ue, Ce, qr[Tr], Or[Tr], ga + Tr),
														R.each([Yr, qr, Or], function (zr, We) {
															z(We[Tr]) && delete We[Tr];
														});
												else if (!Dr) {
													for (Oe = 0; Oe < xa[s.l]; Oe++)
														if (
															((_r = xa[Oe]),
															(dr = E(_r)),
															(ce = dr == p.s && rr(_r, j) === -1),
															ce)
														)
															for (
																te.push(p.s), qe = _r.split(mr), _e = _e.concat(qe), Ia = 0;
																Ia < qe[s.l];
																Ia++
															) {
																for (Rr = qe[Ia].split(U), Se = Rr[0], V = 0; V < Rr[s.l]; V++)
																	if (Ae === Rr[V]) {
																		pe = !0;
																		break;
																	}
																if (pe) break;
															}
														else if ((te.push(_r), xr === _r)) {
															pe = !0;
															break;
														}
													pe
														? ((ge = Ae !== Ce),
														  ge && (qr[Tr] = Ae),
														  (ce ? rr(Ce, Rr) < 0 : ge) && (Or[Tr] = ce ? Se : Ae))
														: v &&
														  console.warn(
																Pt +
																	" it doesn't accept the type [ " +
																	xr.toUpperCase() +
																	' ] with the value of "' +
																	Ae +
																	`".\r
Accepted types are: [ ` +
																	te.join(', ').toUpperCase() +
																	' ].' +
																	(_e[length] > 0
																		? `\r
Valid strings are: [ ` +
																		  _e.join(', ').split(U).join(', ') +
																		  ' ].'
																		: '')
														  ),
														delete Yr[Tr];
												}
											}
									};
								return (
									Y(J, n, b || {}, S, D),
									!z(J) &&
										v &&
										console.warn(
											`The following options are discarded due to invalidity:\r
` + Z.JSON.stringify(J, null, 2)
										),
									{ _default: S, _prepared: D }
								);
							}
						};
					})();
				function d() {
					m || (m = new T(u._defaults)), e || (e = new vr(m));
				}
				function T(E) {
					var j = this,
						mr = 'overflow',
						U = 'hidden',
						Pr = 'scroll',
						H = R('body'),
						Q = R('<div id="os-dummy-scrollbar-size"><div></div></div>'),
						$ = Q[0],
						k = R(Q.children('div').eq(0));
					H.append(Q), Q.hide().show();
					var hr = Kr($),
						Re = { x: hr.x === 0, y: hr.y === 0 },
						K = (function () {
							var A = Z.navigator.userAgent,
								pr = 'indexOf',
								br = 'substring',
								G = A[pr]('MSIE '),
								t = A[pr]('Trident/'),
								o = A[pr]('Edge/'),
								n = A[pr]('rv:'),
								v,
								b = parseInt;
							return (
								G > 0
									? (v = b(A[br](G + 5, A[pr]('.', G)), 10))
									: t > 0
									? (v = b(A[br](n + 3, A[pr]('.', n)), 10))
									: o > 0 && (v = b(A[br](o + 5, A[pr]('.', o)), 10)),
								v
							);
						})();
					R.extend(j, {
						defaultOptions: E,
						msie: K,
						autoUpdateLoop: !1,
						autoUpdateRecommended: !O.mO(),
						nativeScrollbarSize: hr,
						nativeScrollbarIsOverlaid: Re,
						nativeScrollbarStyling: (function () {
							var A = !1;
							Q.addClass('os-viewport-native-scrollbars-invisible');
							try {
								A =
									(Q.css('scrollbar-width') === 'none' && (K > 9 || !K)) ||
									Z.getComputedStyle($, '::-webkit-scrollbar').getPropertyValue('display') ===
										'none';
							} catch {}
							return A;
						})(),
						overlayScrollbarDummySize: { x: 30, y: 30 },
						cssCalc: He._cssPropertyValue('width', 'calc', '(1px)') || null,
						restrictedMeasuring: (function () {
							Q.css(mr, U);
							var A = { w: $[s.sW], h: $[s.sH] };
							Q.css(mr, 'visible');
							var pr = { w: $[s.sW], h: $[s.sH] };
							return A.w - pr.w != 0 || A.h - pr.h != 0;
						})(),
						rtlScrollBehavior: (function () {
							Q.css({ 'overflow-y': U, 'overflow-x': Pr, direction: 'rtl' }).scrollLeft(0);
							var A = Q.offset(),
								pr = k.offset();
							Q.scrollLeft(-999);
							var br = k.offset();
							return { i: A.left === pr.left, n: pr.left !== br.left };
						})(),
						supportTransform: !!He._cssProperty('transform'),
						supportTransition: !!He._cssProperty('transition'),
						supportPassiveEvents: (function () {
							var A = !1;
							try {
								Z.addEventListener(
									'test',
									null,
									Object.defineProperty({}, 'passive', {
										get: function () {
											A = !0;
										}
									})
								);
							} catch {}
							return A;
						})(),
						supportResizeObserver: !!O.rO(),
						supportMutationObserver: !!O.mO()
					}),
						Q.removeAttr(s.s).remove(),
						(function () {
							if (Re.x && Re.y) return;
							var A = N.abs,
								pr = O.wW(),
								br = O.wH(),
								G = n(),
								t = function () {
									if (Ma().length > 0) {
										var v = O.wW(),
											b = O.wH(),
											S = v - pr,
											D = b - br;
										if (S === 0 && D === 0) return;
										var J = N.round(v / (pr / 100)),
											rr = N.round(b / (br / 100)),
											z = A(S),
											Y = A(D),
											Yr = A(J),
											Er = A(rr),
											Ir = n(),
											qr = z > 2 && Y > 2,
											Or = !o(Yr, Er),
											Fe = Ir !== G && G > 0,
											Tr = qr && Or && Fe,
											pe = j.nativeScrollbarSize,
											ge;
										Tr &&
											(H.append(Q),
											(ge = j.nativeScrollbarSize = Kr(Q[0])),
											Q.remove(),
											(pe.x !== ge.x || pe.y !== ge.y) &&
												R.each(Ma(), function () {
													Ma(this) && Ma(this).update('zoom');
												})),
											(pr = v),
											(br = b),
											(G = Ir);
									}
								};
							function o(v, b) {
								var S = A(v),
									D = A(b);
								return !(S === D || S + 1 === D || S - 1 === D);
							}
							function n() {
								var v = Z.screen.deviceXDPI || 0,
									b = Z.screen.logicalXDPI || 1;
								return Z.devicePixelRatio || v / b;
							}
							R(Z).on('resize', t);
						})();
					function Kr(A) {
						return { x: A[s.oH] - A[s.cH], y: A[s.oW] - A[s.cW] };
					}
				}
				function vr(E) {
					var j = this,
						mr = R.inArray,
						U = O.now,
						Pr = 'autoUpdate',
						H = Pr + 'Interval',
						Q = s.l,
						$ = [],
						k = [],
						hr = !1,
						Re = 33,
						K = Re,
						Kr = U(),
						A,
						pr = function () {
							if ($[Q] > 0 && hr) {
								A = O.rAF()(function () {
									pr();
								});
								var br = U(),
									G = br - Kr,
									t,
									o,
									n,
									v,
									b,
									S;
								if (G > K) {
									(Kr = br - (G % K)), (t = Re);
									for (var D = 0; D < $[Q]; D++)
										(o = $[D]),
											o !== w &&
												((n = o.options()),
												(v = n[Pr]),
												(b = N.max(1, n[H])),
												(S = U()),
												(v === !0 || v === null) &&
													S - k[D] > b &&
													(o.update('auto'), (k[D] = new Date((S += b)))),
												(t = N.max(1, N.min(t, b))));
									K = t;
								}
							} else K = Re;
						};
					(j.add = function (br) {
						mr(br, $) === -1 &&
							($.push(br),
							k.push(U()),
							$[Q] > 0 && !hr && ((hr = !0), (E.autoUpdateLoop = hr), pr()));
					}),
						(j.remove = function (br) {
							var G = mr(br, $);
							G > -1 &&
								(k.splice(G, 1),
								$.splice(G, 1),
								$[Q] === 0 &&
									hr &&
									((hr = !1), (E.autoUpdateLoop = hr), A !== w && (O.cAF()(A), (A = -1))));
						});
				}
				function ir(E, j, mr, U, Pr) {
					var H = O.type,
						Q = R.inArray,
						$ = R.each,
						k = new g(),
						hr = R[s.p];
					if (!zs(E)) return;
					if (Ma(E)) {
						var Re = Ma(E);
						return Re.options(j), Re;
					}
					var K,
						Kr,
						A,
						pr,
						br,
						G,
						t,
						o,
						n,
						v,
						b,
						S,
						D,
						J,
						rr,
						z,
						Y,
						Yr,
						Er,
						Ir,
						qr,
						Or,
						Fe,
						Tr,
						pe,
						ge,
						Ue,
						dr,
						Dr,
						xa = {},
						Ce = {},
						Ae = {},
						xr = {},
						ga = {},
						Pt = '-hidden',
						te = 'margin-',
						_e = 'padding-',
						qe = 'border-',
						Rr = 'top',
						ce = 'right',
						Se = 'bottom',
						_r = 'left',
						Oe = 'min-',
						Ia = 'max-',
						V = 'width',
						zr = 'height',
						We = 'float',
						B = '',
						$r = 'auto',
						Nn = 'sync',
						je = 'scroll',
						Ra = '100%',
						Dt = 'x',
						zt = 'y',
						Ve = '.',
						oe = ' ',
						Pn = 'scrollbar',
						Dn = '-horizontal',
						zn = '-vertical',
						ve = je + 'Left',
						le = je + 'Top',
						wt = 'mousedown touchstart',
						Mt = 'mouseup touchend touchcancel',
						It = 'mousemove touchmove',
						Pi = 'mouseenter',
						Di = 'mouseleave',
						Mn = 'keydown',
						In = 'keyup',
						Rt = 'selectstart',
						Rn = 'transitionend webkitTransitionEnd oTransitionEnd',
						Wn = '__overlayScrollbarsRO__',
						Ne = 'os-',
						zi = Ne + 'html',
						we = Ne + 'host',
						sn = we + '-foreign',
						Bn = we + '-textarea',
						Mi = we + '-' + Pn + Dn + Pt,
						Ii = we + '-' + Pn + zn + Pt,
						Ri = we + '-transition',
						Wi = we + '-rtl',
						Fn = we + '-resize-disabled',
						cn = we + '-scrolling',
						Wt = we + '-overflow',
						Wt = we + '-overflow',
						Bi = Wt + '-x',
						Fi = Wt + '-y',
						on = Ne + 'textarea',
						Xs = on + '-cover',
						Un = Ne + 'padding',
						vn = Ne + 'viewport',
						qn = vn + '-native-scrollbars-invisible',
						Ui = vn + '-native-scrollbars-overlaid',
						jn = Ne + 'content',
						Zs = Ne + 'content-arrange',
						$s = Ne + 'content-glue',
						rc = Ne + 'size-auto-observer',
						lt = Ne + 'resize-observer',
						ln = Ne + 'resize-observer-item',
						qi = ln + '-final',
						un = Ne + 'text-inherit',
						Wa = Ne + Pn,
						ji = Wa + '-track',
						Vi = ji + '-off',
						Qi = Wa + '-handle',
						Ki = Qi + '-off',
						Yi = Wa + '-unusable',
						Bt = Wa + '-' + $r + Pt,
						Vn = Wa + '-corner',
						Ft = Vn + '-resize',
						Gi = Ft + '-both',
						Ji = Ft + Dn,
						Xi = Ft + zn,
						ec = Wa + Dn,
						ac = Wa + zn,
						ut = Ne + 'dragging',
						fn = Ne + 'theme-none',
						Qn = [qn, Ui, Vi, Ki, Yi, Bt, Ft, Gi, Ji, Xi, ut].join(oe),
						Kn = [],
						Yn = [s.ti],
						Zi,
						Ut,
						re,
						Ba = {},
						tc = 'added removed on contract',
						$i,
						ft = {},
						rs,
						es = 42,
						Gn = 'load',
						qt = [],
						hn,
						Ca,
						Et,
						ht,
						sr,
						F,
						fa,
						ha,
						$e,
						ar,
						Wr,
						Fa,
						Ee,
						Ua,
						Pe,
						dt,
						dn,
						jt,
						pt,
						pn,
						Vt,
						Qt,
						Tt,
						Za,
						Qe,
						_n,
						bn,
						$a,
						_t,
						da,
						Kt,
						bt,
						as,
						Aa,
						Yt,
						ra,
						rt,
						ts,
						Jn,
						ns,
						is,
						ss,
						cs,
						os,
						vs,
						ls,
						Lt,
						kt,
						Xn,
						Zn,
						us,
						fs,
						hs,
						ds,
						ps,
						_s,
						$n,
						bs,
						qa,
						Gt,
						ri,
						yn,
						ei,
						ys,
						ms,
						xs,
						et,
						gs = {},
						mn,
						xn,
						ai,
						ti,
						Oa,
						Cs = ['wrap', 'cols', 'rows'],
						ni = [s.i, s.c, s.s, 'open'].concat(Yn),
						ii = [],
						si,
						As,
						Os,
						ci,
						oi,
						at,
						ea,
						yt,
						vi,
						tt,
						gn,
						Cn,
						li,
						ui;
					function Be(r, a, i, c, l) {
						var h = O.isA(a) && O.isA(i),
							_ = c ? 'removeEventListener' : 'addEventListener',
							x = c ? 'off' : 'on',
							y = h ? !1 : a.split(oe),
							C = 0,
							W = R.isPlainObject(l),
							P = (b && (W ? l._passive : l)) || !1,
							X = W && (l._capture || !1),
							er = b ? { passive: P, capture: X } : X;
						if (h) for (; C < a[s.l]; C++) Be(r, a[C], i[C], c, l);
						else for (; C < y[s.l]; C++) b ? r[0][_](y[C], i, er) : r[x](y[C], i);
					}
					function pa(r, a, i, c) {
						Be(r, a, i, !1, c), ii.push(O.bind(Be, 0, r, a, i, !0, c));
					}
					function An(r, a) {
						if (r) {
							var i = O.rO(),
								c = 'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
								l = 'childNodes',
								h = 3333333,
								_ = function () {
									r[le](h)[ve](dr ? (A.n ? -h : A.i ? 0 : h) : h), a();
								};
							if (a) {
								if (S) {
									var x = r.addClass('observed').append(Ye(lt)).contents()[0],
										y = (x[Wn] = new i(_));
									y.observe(x);
								} else if (br > 9 || !pr) {
									r.prepend(
										Ye(
											lt,
											Ye(
												{ c: ln, dir: 'ltr' },
												Ye(ln, Ye(qi)) + Ye(ln, Ye({ c: qi, style: 'width: 200%; height: 200%' }))
											)
										)
									);
									var C = r[0][l][0][l][0],
										W = R(C[l][1]),
										P = R(C[l][0]),
										X = R(P[0][l][0]),
										er = C[s.oW],
										cr = C[s.oH],
										q,
										lr,
										tr,
										Lr,
										ye = 2,
										jr = U.nativeScrollbarSize,
										ze = function () {
											P[ve](h)[le](h), W[ve](h)[le](h);
										},
										ne = function () {
											(lr = 0), !!q && ((er = tr), (cr = Lr), _());
										},
										Jr = function (gr) {
											return (
												(tr = C[s.oW]),
												(Lr = C[s.oH]),
												(q = tr != er || Lr != cr),
												gr && q && !lr ? (O.cAF()(lr), (lr = O.rAF()(ne))) : gr || ne(),
												ze(),
												gr && (O.prvD(gr), O.stpP(gr)),
												!1
											);
										},
										Xr = {},
										Br = {};
									mt(Br, B, [-((jr.y + 1) * ye), jr.x * -ye, jr.y * -ye, -((jr.x + 1) * ye)]),
										R(C).css(Br),
										P.on(je, Jr),
										W.on(je, Jr),
										r.on(c, function () {
											Jr(!1);
										}),
										(Xr[V] = h),
										(Xr[zr] = h),
										X.css(Xr),
										ze();
								} else {
									var ee = Tt.attachEvent,
										ya = br !== w;
									if (ee) r.prepend(Ye(lt)), Ht(r, Ve + lt)[0].attachEvent('onresize', _);
									else {
										var Fr = Tt.createElement(p.o);
										Fr.setAttribute(s.ti, '-1'),
											Fr.setAttribute(s.c, lt),
											(Fr.onload = function () {
												var gr = this.contentDocument.defaultView;
												gr.addEventListener('resize', _),
													(gr.document.documentElement.style.display = 'none');
											}),
											(Fr.type = 'text/html'),
											ya && r.prepend(Fr),
											(Fr.data = 'about:blank'),
											ya || r.prepend(Fr),
											r.on(c, _);
									}
								}
								if (r[0] === bn) {
									var na = function () {
										var gr = F.css('direction'),
											L = {},
											kr = 0,
											Hr = !1;
										return (
											gr !== cs &&
												(gr === 'ltr'
													? ((L[_r] = 0), (L[ce] = $r), (kr = h))
													: ((L[_r] = $r), (L[ce] = 0), (kr = A.n ? -h : A.i ? 0 : h)),
												ha.children().eq(0).css(L),
												ha[ve](kr)[le](h),
												(cs = gr),
												(Hr = !0)),
											Hr
										);
									};
									na(),
										pa(r, je, function (gr) {
											return na() && _a(), O.prvD(gr), O.stpP(gr), !1;
										});
								}
							} else if (S) {
								var x = r.contents()[0],
									Cr = x[Wn];
								Cr && (Cr.disconnect(), delete x[Wn]);
							} else Va(r.children(Ve + lt).eq(0));
						}
					}
					function nc() {
						if (D) {
							var r = 11,
								a = O.mO(),
								i = O.now(),
								c,
								l,
								h,
								_,
								x,
								y,
								C,
								W,
								P,
								X;
							(ai = function (er) {
								var cr = !1,
									q = !1,
									lr,
									tr = [];
								return (
									J &&
										!Dr &&
										($(er, function () {
											(lr = this),
												(c = lr.target),
												(l = lr.attributeName),
												(h = l === s.c),
												(_ = lr.oldValue),
												(x = c.className),
												Er &&
													h &&
													!q &&
													_.indexOf(sn) > -1 &&
													x.indexOf(sn) < 0 &&
													((y = Ds(!0)),
													(Qe.className = x
														.split(oe)
														.concat(
															_.split(oe).filter(function (Lr) {
																return Lr.match(y);
															})
														)
														.join(oe)),
													(cr = q = !0)),
												cr || (cr = h ? ks(_, x) : l === s.s ? _ !== c[s.s].cssText : !0),
												tr.push(l);
										}),
										pi(tr),
										cr && k.update(q || $r)),
									cr
								);
							}),
								(ti = function (er) {
									var cr = !1,
										q;
									return (
										J &&
											!Dr &&
											($(er, function () {
												return (q = this), (cr = cc(q)), !cr;
											}),
											cr &&
												((W = O.now()),
												(P = rt || ra),
												(X = function () {
													rr || ((i = W), z && _i(), P ? _a() : k.update($r));
												}),
												clearTimeout(C),
												r <= 0 || W - i > r || !P ? X() : (C = setTimeout(X, r)))),
										cr
									);
								}),
								(mn = new a(ai)),
								(xn = new a(ti));
						}
					}
					function ws() {
						D &&
							!Oa &&
							(mn.observe(Qe, { attributes: !0, attributeOldValue: !0, attributeFilter: ni }),
							xn.observe(z ? Za : da, {
								attributes: !0,
								attributeOldValue: !0,
								subtree: !z,
								childList: !z,
								characterData: !z,
								attributeFilter: z ? Cs : ni
							}),
							(Oa = !0));
					}
					function fi() {
						D && Oa && (mn.disconnect(), xn.disconnect(), (Oa = !1));
					}
					function ic() {
						if (!Dr) {
							var r,
								a = { w: bn[s.sW], h: bn[s.sH] };
							(r = xt(a, hs)), (hs = a), r && _a({ _hostSizeChanged: !0 });
						}
					}
					function Es() {
						yt && wa(!0);
					}
					function Ts() {
						yt && !ht.hasClass(ut) && wa(!1);
					}
					function sc() {
						ea &&
							(wa(!0),
							clearTimeout(Os),
							(Os = setTimeout(function () {
								ea && !rr && wa(!1);
							}, 100)));
					}
					function Jt(r) {
						return O.prvD(r), !1;
					}
					function hi(r) {
						var a = R(r.target);
						Is(function (i, c) {
							a.is(c) && _a({ _contentSizeChanged: !0 });
						});
					}
					function di(r) {
						r || di(!0),
							Be(F, It.split(oe)[0], sc, !ea || r, !0),
							Be(F, [Pi, Di], [Es, Ts], !yt || r, !0),
							!J && !r && F.one('mouseover', Es);
					}
					function Ls() {
						var r = {};
						return (
							Y &&
								Fa &&
								((r.w = Ea(Fa.css(Oe + V))),
								(r.h = Ea(Fa.css(Oe + zr))),
								(r.c = xt(r, et)),
								(r.f = !0)),
							(et = r),
							!!r.c
						);
					}
					function ks(r, a) {
						var i = typeof a == p.s ? a.split(oe) : [],
							c = typeof r == p.s ? r.split(oe) : [],
							l = dc(c, i),
							h = Q(fn, l),
							_,
							x;
						if ((h > -1 && l.splice(h, 1), l[s.l] > 0)) {
							for (x = Ds(!0, !0), _ = 0; _ < l.length; _++) if (!l[_].match(x)) return !0;
						}
						return !1;
					}
					function cc(r) {
						var a = r.attributeName,
							i = r.target,
							c = r.type,
							l = 'closest';
						if (i === da) return a === null;
						if (c === 'attributes' && (a === s.c || a === s.s) && !z) {
							if (a === s.c && R(i).hasClass(we)) return ks(r.oldValue, i.className);
							if (typeof i[l] != p.f) return !0;
							if (i[l](Ve + lt) !== null || i[l](Ve + Wa) !== null || i[l](Ve + Vn) !== null)
								return !1;
						}
						return !0;
					}
					function oc() {
						if (Dr) return !1;
						var r = Ms(),
							a = z && ra && !yn ? sr.val().length : 0,
							i = !Oa && ra && !z,
							c = {},
							l,
							h,
							_,
							x;
						return (
							i && ((l = Wr.css(We)), (c[We] = dr ? ce : _r), (c[V] = $r), Wr.css(c)),
							(x = { w: r[s.sW] + a, h: r[s.sH] + a }),
							i && ((c[We] = l), (c[V] = Ra), Wr.css(c)),
							(h = Ls()),
							(_ = xt(x, fs)),
							(fs = x),
							_ || h
						);
					}
					function vc() {
						if (!(Dr || Oa)) {
							var r,
								a,
								i,
								c = [],
								l = [
									{ _elem: F, _attrs: ni.concat(':visible') },
									{ _elem: z ? sr : w, _attrs: Cs }
								];
							return (
								$(l, function (h, _) {
									(r = _._elem),
										r &&
											$(_._attrs, function (x, y) {
												(a = y.charAt(0) === ':' ? r.is(y) : r.attr(y)),
													(i = gs[y]),
													xt(a, i) && c.push(y),
													(gs[y] = a);
											});
								}),
								pi(c),
								c[s.l] > 0
							);
						}
					}
					function lc(r) {
						if (!J) return !0;
						var a = 'flex-grow',
							i = 'flex-shrink',
							c = 'flex-basis',
							l = [
								V,
								Oe + V,
								Ia + V,
								te + _r,
								te + ce,
								_r,
								ce,
								'font-weight',
								'word-spacing',
								a,
								i,
								c
							],
							h = [_e + _r, _e + ce, qe + _r + V, qe + ce + V],
							_ = [zr, Oe + zr, Ia + zr, te + Rr, te + Se, Rr, Se, 'line-height', a, i, c],
							x = [_e + Rr, _e + Se, qe + Rr + V, qe + Se + V],
							y = 's',
							C = 'v-s',
							W = Lt.x === y || Lt.x === C,
							P = Lt.y === y || Lt.y === C,
							X = !1,
							er = function (cr, q) {
								for (var lr = 0; lr < cr[s.l]; lr++) if (cr[lr] === q) return !0;
								return !1;
							};
						return (
							P && ((X = er(_, r)), !X && !Ir && (X = er(x, r))),
							W && !X && ((X = er(l, r)), !X && !Ir && (X = er(h, r))),
							X
						);
					}
					function pi(r) {
						(r = r || Yn),
							$(r, function (a, i) {
								if (O.inA(i, Yn) > -1) {
									var c = sr.attr(i);
									H(c) == p.s ? ar.attr(i, c) : ar.removeAttr(i);
								}
							});
					}
					function _i() {
						if (!Dr) {
							var r = !yn,
								a = xr.w,
								i = xr.h,
								c = {},
								l = ra || r,
								h,
								_,
								x,
								y;
							return (
								(c[Oe + V] = B),
								(c[Oe + zr] = B),
								(c[V] = $r),
								sr.css(c),
								(h = Za[s.oW]),
								(_ = l ? N.max(h, Za[s.sW] - 1) : 1),
								(c[V] = ra ? $r : Ra),
								(c[Oe + V] = Ra),
								(c[zr] = $r),
								sr.css(c),
								(x = Za[s.oH]),
								(y = N.max(x, Za[s.sH] - 1)),
								(c[V] = _),
								(c[zr] = y),
								Ua.css(c),
								(c[Oe + V] = a),
								(c[Oe + zr] = i),
								sr.css(c),
								{ _originalWidth: h, _originalHeight: x, _dynamicWidth: _, _dynamicHeight: y }
							);
						}
					}
					function _a(r) {
						clearTimeout(rs),
							(r = r || {}),
							(ft._hostSizeChanged |= r._hostSizeChanged),
							(ft._contentSizeChanged |= r._contentSizeChanged),
							(ft._force |= r._force);
						var a = O.now(),
							i = !!ft._hostSizeChanged,
							c = !!ft._contentSizeChanged,
							l = !!ft._force,
							h = r._changedOptions,
							_ = J && !rr && !l && !h && a - $i < es && !rt && !ra,
							x;
						if (
							(_ && (rs = setTimeout(_a, es)),
							!(
								rr ||
								_ ||
								(Dr && !h) ||
								(J && !l && (x = F.is(':hidden'))) ||
								F.css('display') === 'inline'
							))
						) {
							($i = a),
								(ft = {}),
								G && !(K.x && K.y) ? ((o.x = 0), (o.y = 0)) : (o = De({}, U.nativeScrollbarSize)),
								(ga = { x: (o.x + (K.x ? 0 : 3)) * 3, y: (o.y + (K.y ? 0 : 3)) * 3 }),
								(h = h || {});
							var y = function () {
									return xt.apply(this, [].slice.call(arguments).concat([l]));
								},
								C = { x: ar[ve](), y: ar[le]() },
								W = re.scrollbars,
								P = re.textarea,
								X = W.visibility,
								er = y(X, ds),
								cr = W.autoHide,
								q = y(cr, ps),
								lr = W.clickScrolling,
								tr = y(lr, _s),
								Lr = W.dragScrolling,
								ye = y(Lr, $n),
								jr = re.className,
								ze = y(jr, Gt),
								ne = re.resize,
								Jr = y(ne, bs) && !Y,
								Xr = re.paddingAbsolute,
								Br = y(Xr, os),
								ee = re.clipAlways,
								ya = y(ee, vs),
								Fr = re.sizeAutoCapable && !Y,
								na = y(Fr, us),
								Cr = re.nativeScrollbarsOverlaid.showNativeScrollbars,
								gr = y(Cr, Xn),
								L = re.autoUpdate,
								kr = y(L, Zn),
								Hr = re.overflowBehavior,
								Ge = y(Hr, Lt, l),
								Qa = P.dynWidth,
								gt = y(xs, Qa),
								Me = P.dynHeight,
								Ta = y(ms, Me);
							if (
								((oi = cr === 'n'),
								(at = cr === 's'),
								(ea = cr === 'm'),
								(yt = cr === 'l'),
								(ci = W.autoHideDelay),
								(ri = Gt),
								(gn = ne === 'n'),
								(Cn = ne === 'b'),
								(li = ne === 'h'),
								(ui = ne === 'v'),
								(qa = re.normalizeRTL),
								(Cr = Cr && K.x && K.y),
								(ds = X),
								(ps = cr),
								(_s = lr),
								($n = Lr),
								(Gt = jr),
								(bs = ne),
								(os = Xr),
								(vs = ee),
								(us = Fr),
								(Xn = Cr),
								(Zn = L),
								(Lt = De({}, Hr)),
								(xs = Qa),
								(ms = Me),
								(Aa = Aa || { x: !1, y: !1 }),
								ze &&
									(be(F, ri + oe + fn), Gr(F, jr !== w && jr !== null && jr.length > 0 ? jr : fn)),
								kr && (L === !0 || (L === null && pr) ? (fi(), Pr.add(k)) : (Pr.remove(k), ws())),
								na)
							)
								if (Fr)
									if ((Ee ? Ee.show() : ((Ee = R(Ye($s))), $e.before(Ee)), qr)) fa.show();
									else {
										(fa = R(Ye(rc))), (_n = fa[0]), Ee.before(fa);
										var La = { w: -1, h: -1 };
										An(fa, function () {
											var At = { w: _n[s.oW], h: _n[s.oH] };
											xt(At, La) &&
												((J && rt && At.h > 0) ||
													(ra && At.w > 0) ||
													(J && !rt && At.h === 0) ||
													(!ra && At.w === 0)) &&
												_a(),
												(La = At);
										}),
											(qr = !0),
											t !== null && fa.css(zr, t + '(100% + 1px)');
									}
								else qr && fa.hide(), Ee && Ee.hide();
							l && (ha.find('*').trigger(je), qr && fa.find('*').trigger(je)),
								(x = x === w ? F.is(':hidden') : x);
							var Je = z ? sr.attr('wrap') !== 'off' : !1,
								Zt = y(Je, yn),
								Xe = F.css('direction'),
								Te = y(Xe, ss),
								Ka = F.css('box-sizing'),
								Ze = y(Ka, ts),
								Mr = Ci(_e),
								ue;
							try {
								ue = qr ? _n[s.bCR]() : null;
							} catch {
								return;
							}
							(dr = Xe === 'rtl'), (Ir = Ka === 'border-box');
							var fe = dr ? _r : ce,
								ur = dr ? ce : _r,
								ia = !1,
								nt =
									qr && F.css(We) !== 'none'
										? N.round(ue.right - ue.left) === 0 && (Xr ? !0 : Qe[s.cW] - Or > 0)
										: !1;
							if (Fr && !nt) {
								var Ct = Qe[s.oW],
									Ya = Ee.css(V);
								Ee.css(V, $r);
								var ka = Qe[s.oW];
								Ee.css(V, Ya),
									(ia = Ct !== ka),
									ia || (Ee.css(V, Ct + 1), (ka = Qe[s.oW]), Ee.css(V, Ya), (ia = Ct !== ka));
							}
							var nr = (nt || ia) && Fr && !x,
								he = y(nr, ra),
								Ga = !nr && ra,
								wr = qr && Fr && !x ? N.round(ue.bottom - ue.top) === 0 : !1,
								de = y(wr, rt),
								sa = !wr && rt,
								$t = (nr && Ir) || !Ir,
								On = (wr && Ir) || !Ir,
								ca = Ci(qe, '-' + V, !$t, !On),
								Ha = Ci(te),
								M = {},
								I = {},
								Vr = function () {
									return { w: Qe[s.cW], h: Qe[s.cH] };
								},
								Le = function () {
									return {
										w: $a[s.oW] + N.max(0, da[s.cW] - da[s.sW]),
										h: $a[s.oH] + N.max(0, da[s.cH] - da[s.sH])
									};
								},
								yr = (Or = Mr.l + Mr.r),
								oa = (Fe = Mr.t + Mr.b);
							if (
								((yr *= Xr ? 1 : 0),
								(oa *= Xr ? 1 : 0),
								(Mr.c = y(Mr, Jn)),
								(Tr = ca.l + ca.r),
								(pe = ca.t + ca.b),
								(ca.c = y(ca, ns)),
								(ge = Ha.l + Ha.r),
								(Ue = Ha.t + Ha.b),
								(Ha.c = y(Ha, is)),
								(yn = Je),
								(ss = Xe),
								(ts = Ka),
								(ra = nr),
								(rt = wr),
								(Jn = Mr),
								(ns = ca),
								(is = Ha),
								Te && qr && fa.css(We, ur),
								Mr.c || Te || Br || he || de || Ze || na)
							) {
								var Zr = {},
									Ie = {},
									it = [Mr.t, Mr.r, Mr.b, Mr.l];
								mt(I, te, [-Mr.t, -Mr.r, -Mr.b, -Mr.l]),
									Xr ? (mt(Zr, B, it), mt(z ? Ie : M, _e)) : (mt(Zr, B), mt(z ? Ie : M, _e, it)),
									$e.css(Zr),
									sr.css(Ie);
							}
							xr = Le();
							var Sr = z ? _i() : !1,
								va = z && y(Sr, ys),
								Sa =
									z && Sr
										? {
												w: Qa ? Sr._dynamicWidth : Sr._originalWidth,
												h: Me ? Sr._dynamicHeight : Sr._originalHeight
										  }
										: {};
							if (
								((ys = Sr),
								wr && (de || Br || Ze || Mr.c || ca.c) ? (M[zr] = $r) : (de || Br) && (M[zr] = Ra),
								nr && (he || Br || Ze || Mr.c || ca.c || Te)
									? ((M[V] = $r), (I[Ia + V] = Ra))
									: (he || Br) && ((M[V] = Ra), (M[We] = B), (I[Ia + V] = B)),
								nr
									? ((I[V] = $r),
									  (M[V] = He._cssPropertyValue(V, 'max-content intrinsic') || $r),
									  (M[We] = ur))
									: (I[V] = B),
								wr ? (I[zr] = Sa.h || da[s.cH]) : (I[zr] = B),
								Fr && Ee.css(I),
								Wr.css(M),
								(M = {}),
								(I = {}),
								i ||
									c ||
									va ||
									Te ||
									Ze ||
									Br ||
									he ||
									nr ||
									de ||
									wr ||
									gr ||
									Ge ||
									ya ||
									Jr ||
									er ||
									q ||
									ye ||
									tr ||
									gt ||
									Ta ||
									Zt)
							) {
								var ie = 'overflow',
									Ja = ie + '-x',
									Na = ie + '-y',
									st = 'hidden',
									la = 'visible';
								if (!G) {
									var Pa = {},
										wi = Aa.y && Yt.ys && !Cr ? (K.y ? ar.css(fe) : -o.y) : 0,
										yc = Aa.x && Yt.xs && !Cr ? (K.x ? ar.css(Se) : -o.x) : 0;
									mt(Pa, B), ar.css(Pa);
								}
								var ct = Ms(),
									rn = { w: Sa.w || ct[s.cW], h: Sa.h || ct[s.cH] },
									Rs = { w: ct[s.sW], h: ct[s.sH] };
								G || ((Pa[Se] = sa ? B : yc), (Pa[fe] = Ga ? B : wi), ar.css(Pa)), (xr = Le());
								var en = Vr(),
									Ei = { w: en.w - ge - Tr - (Ir ? 0 : Or), h: en.h - Ue - pe - (Ir ? 0 : Fe) },
									St = {
										w: N.max((nr ? rn.w : Rs.w) + yr, Ei.w),
										h: N.max((wr ? rn.h : Rs.h) + oa, Ei.h)
									};
								if (((St.c = y(St, ls)), (ls = St), Fr)) {
									(St.c || wr || nr) &&
										((I[V] = St.w), (I[zr] = St.h), z || (rn = { w: ct[s.cW], h: ct[s.cH] }));
									var Ws = {},
										Bs = function (Qr) {
											var me = aa(Qr),
												ua = me._w_h,
												Ur = me._width_height,
												fr = Qr ? nr : wr,
												ma = Qr ? Tr : pe,
												Ot = Qr ? Or : Fe,
												Si = Qr ? ge : Ue,
												Hn = xr[ua] - ma - Si - (Ir ? 0 : Ot);
											(!fr || (!fr && ca.c)) && (I[Ur] = Ei[ua] - 1),
												fr &&
													rn[ua] < Hn &&
													(Qr && z ? !Je : !0) &&
													(z && (Ws[Ur] = Ea(Ua.css(Ur)) - 1), (I[Ur] -= 1)),
												rn[ua] > 0 && (I[Ur] = N.max(1, I[Ur]));
										};
									Bs(!0), Bs(!1), z && Ua.css(Ws), Ee.css(I);
								}
								nr && (M[V] = Ra), nr && !Ir && !Oa && (M[We] = 'none'), Wr.css(M), (M = {});
								var ot = { w: ct[s.sW], h: ct[s.sH] };
								(ot.c = c = y(ot, bt)),
									(bt = ot),
									(xr = Le()),
									(en = Vr()),
									(i = y(en, Kt)),
									(Kt = en);
								var Ti = z && (xr.w === 0 || xr.h === 0),
									wn = kt,
									Nt = {},
									an = {},
									Fs = {},
									Da = {},
									Nr = {},
									Ar = {},
									tn = {},
									Us = $a[s.bCR](),
									qs = function (Qr) {
										var me = aa(Qr),
											ua = aa(!Qr),
											Ur = ua._x_y,
											fr = me._x_y,
											ma = me._w_h,
											Ot = me._width_height,
											Si = je + me._Left_Top + 'Max',
											Hn = Us[Ot] ? N.abs(Us[Ot] - xr[ma]) : 0,
											Sc = wn && wn[fr] > 0 && _t[Si] === 0;
										(Nt[fr] = Hr[fr] === 'v-s'),
											(an[fr] = Hr[fr] === 'v-h'),
											(Fs[fr] = Hr[fr] === 's'),
											(Da[fr] = N.max(0, N.round((ot[ma] - xr[ma]) * 100) / 100)),
											(Da[fr] *= Ti || (Sc && Hn > 0 && Hn < 1) ? 0 : 1),
											(Nr[fr] = Da[fr] > 0),
											(Ar[fr] = Nt[fr] || an[fr] ? Nr[Ur] && !Nt[Ur] && !an[Ur] : Nr[fr]),
											(Ar[fr + 's'] = Ar[fr] ? Fs[fr] || Nt[fr] : !1),
											(tn[fr] = Nr[fr] && Ar[fr + 's']);
									};
								if (
									(qs(!0),
									qs(!1),
									(Da.c = y(Da, kt)),
									(kt = Da),
									(Nr.c = y(Nr, Aa)),
									(Aa = Nr),
									(Ar.c = y(Ar, Yt)),
									(Yt = Ar),
									K.x || K.y)
								) {
									var mc = 'px solid transparent',
										Li = {},
										Xa = {},
										En = l,
										ki;
									(Nr.x || Nr.y) &&
										((Xa.w = K.y && Nr.y ? ot.w + Kr.y : B),
										(Xa.h = K.x && Nr.x ? ot.h + Kr.x : B),
										(En = y(Xa, as)),
										(as = Xa)),
										(Nr.c || Ar.c || ot.c || Te || he || de || nr || wr || gr) &&
											((M[te + ur] = M[qe + ur] = B),
											(ki = function (Qr) {
												var me = aa(Qr),
													ua = aa(!Qr),
													Ur = me._x_y,
													fr = Qr ? Se : fe,
													ma = Qr ? wr : nr;
												K[Ur] && Nr[Ur] && Ar[Ur + 's']
													? ((M[te + fr] = ma ? (Cr ? B : Kr[Ur]) : B),
													  (M[qe + fr] = (Qr ? !ma : !0) && !Cr ? Kr[Ur] + mc : B))
													: ((Xa[ua._w_h] = M[te + fr] = M[qe + fr] = B), (En = !0));
											}),
											G ? ta(ar, qn, !Cr) : (ki(!0), ki(!1))),
										Cr && ((Xa.w = Xa.h = B), (En = !0)),
										En &&
											!G &&
											((Li[V] = Ar.y ? Xa.w : B),
											(Li[zr] = Ar.x ? Xa.h : B),
											Fa || ((Fa = R(Ye(Zs))), ar.prepend(Fa)),
											Fa.css(Li)),
										Wr.css(M);
								}
								var se = {},
									Zr = {},
									Hi;
								if (
									(i || Nr.c || Ar.c || ot.c || Ge || Ze || gr || Te || ya || de) &&
									((se[ur] = B),
									(Hi = function (Qr) {
										var me = aa(Qr),
											ua = aa(!Qr),
											Ur = me._x_y,
											fr = me._X_Y,
											ma = Qr ? Se : fe,
											Ot = function () {
												(se[ma] = B), (xa[ua._w_h] = 0);
											};
										Nr[Ur] && Ar[Ur + 's']
											? ((se[ie + fr] = je),
											  Cr || G
													? Ot()
													: ((se[ma] = -(K[Ur] ? Kr[Ur] : o[Ur])),
													  (xa[ua._w_h] = K[Ur] ? Kr[ua._x_y] : 0)))
											: ((se[ie + fr] = B), Ot());
									}),
									Hi(!0),
									Hi(!1),
									!G &&
									(xr.h < ga.x || xr.w < ga.y) &&
									((Nr.x && Ar.x && !K.x) || (Nr.y && Ar.y && !K.y))
										? ((se[_e + Rr] = ga.x),
										  (se[te + Rr] = -ga.x),
										  (se[_e + ur] = ga.y),
										  (se[te + ur] = -ga.y))
										: (se[_e + Rr] = se[te + Rr] = se[_e + ur] = se[te + ur] = B),
									(se[_e + fe] = se[te + fe] = B),
									(Nr.x && Ar.x) || (Nr.y && Ar.y) || Ti
										? z && Ti && (Zr[Ja] = Zr[Na] = st)
										: (!ee || an.x || Nt.x || an.y || Nt.y) &&
										  (z && (Zr[Ja] = Zr[Na] = B), (se[Ja] = se[Na] = la)),
									$e.css(Zr),
									ar.css(se),
									(se = {}),
									(Nr.c || Ze || he || de) && !(K.x && K.y))
								) {
									var Tn = da[s.s];
									(Tn.webkitTransform = 'scale(1)'),
										(Tn.display = 'run-in'),
										(Tn.display = B),
										(Tn.webkitTransform = B);
								}
								if (((M = {}), Te || he || de))
									if (dr && nr) {
										var xc = Wr.css(We),
											js = N.round(Wr.css(We, B).css(_r, B).position().left);
										Wr.css(We, xc);
										var gc = N.round(Wr.position().left);
										js !== gc && (M[_r] = js);
									} else M[_r] = B;
								if ((Wr.css(M), z && c)) {
									var za = pc();
									if (za) {
										var Vs = ei === w ? !0 : za._rows !== ei._rows,
											Qs = za._cursorRow,
											Cc = za._cursorColumn,
											Ac = za._widestRow,
											Oc = za._rows,
											wc = za._columns,
											Ec = za._cursorPosition,
											Tc = za._cursorMax,
											Ks = Ec >= Tc && si,
											Ln = {
												x: !Je && Cc === wc && Qs === Ac ? kt.x : -1,
												y: (Je ? Ks || (Vs && (wn ? C.y === wn.y : !1)) : (Ks || Vs) && Qs === Oc)
													? kt.y
													: -1
											};
										(C.x = Ln.x > -1 ? (dr && qa && A.i ? 0 : Ln.x) : C.x),
											(C.y = Ln.y > -1 ? Ln.y : C.y);
									}
									ei = za;
								}
								dr && A.i && K.y && Nr.x && qa && (C.x += xa.w || 0),
									nr && F[ve](0),
									wr && F[le](0),
									ar[ve](C.x)[le](C.y);
								var Lc = X === 'v',
									kc = X === 'h',
									Hc = X === 'a',
									kn = function (Qr, me) {
										(me = me === w ? Qr : me), Ns(!0, Qr, tn.x), Ns(!1, me, tn.y);
									};
								ta(F, Wt, Ar.x || Ar.y),
									ta(F, Bi, Ar.x),
									ta(F, Fi, Ar.y),
									Te && !Y && ta(F, Wi, dr),
									Y && Gr(F, Fn),
									Jr &&
										(ta(F, Fn, gn),
										ta(Pe, Ft, !gn),
										ta(Pe, Gi, Cn),
										ta(Pe, Ji, li),
										ta(Pe, Xi, ui)),
									(er || Ge || Ar.c || Nr.c || gr) &&
										(Cr
											? gr && (be(F, cn), Cr && kn(!1))
											: Hc
											? kn(tn.x, tn.y)
											: Lc
											? kn(!0)
											: kc && kn(!1)),
									(q || gr) && (di(!yt && !ea), wa(oi, !oi)),
									(i || Da.c || de || he || Jr || Ze || Br || gr || Te) &&
										(xi(!0), ba(!0), xi(!1), ba(!1)),
									tr && Ps(!0, lr),
									ye && Ps(!1, Lr),
									Ke('onDirectionChanged', { isRTL: dr, dir: Xe }, Te),
									Ke('onHostSizeChanged', { width: Kt.w, height: Kt.h }, i),
									Ke('onContentSizeChanged', { width: bt.w, height: bt.h }, c),
									Ke(
										'onOverflowChanged',
										{
											x: Nr.x,
											y: Nr.y,
											xScrollable: Ar.xs,
											yScrollable: Ar.ys,
											clipped: Ar.x || Ar.y
										},
										Nr.c || Ar.c
									),
									Ke('onOverflowAmountChanged', { x: Da.x, y: Da.y }, Da.c);
							}
							Y &&
								et &&
								(Aa.c || et.c) &&
								(et.f || Ls(),
								K.y && Aa.x && Wr.css(Oe + V, et.w + Kr.y),
								K.x && Aa.y && Wr.css(Oe + zr, et.h + Kr.x),
								(et.c = !1)),
								J && h.updateOnLoad && Hs(),
								Ke('onUpdated', { forced: l });
						}
					}
					function Hs() {
						z ||
							Is(function (r, a) {
								Wr.find(a).each(function (i, c) {
									O.inA(c, qt) < 0 && (qt.push(c), R(c).off(Gn, hi).on(Gn, hi));
								});
							});
					}
					function bi(r) {
						var a = u._validate(r, u._template, !0, Ut);
						return (Ut = De({}, Ut, a._default)), (re = De({}, re, a._prepared)), a._prepared;
					}
					function yi(r) {
						var a = 'parent',
							i = 'os-resize-observer-host',
							c = on + oe + un,
							l = z ? oe + un : B,
							h = re.textarea.inheritedAttrs,
							_ = {},
							x = function () {
								var W = r ? sr : F;
								$(_, function (P, X) {
									H(X) == p.s && (P == s.c ? W.addClass(X) : W.attr(P, X));
								});
							},
							y = [we, sn, Bn, Fn, Wi, Mi, Ii, Ri, cn, Wt, Bi, Fi, fn, on, un, Gt].join(oe),
							C = {};
						(F = F || (z ? (Er ? sr[a]()[a]()[a]()[a]() : R(Ye(Bn))) : sr)),
							(Wr = Wr || ja(jn + l)),
							(ar = ar || ja(vn + l)),
							($e = $e || ja(Un + l)),
							(ha = ha || ja(i)),
							(Ua = Ua || (z ? ja(Xs) : w)),
							Er && Gr(F, sn),
							r && be(F, y),
							(h = H(h) == p.s ? h.split(oe) : h),
							O.isA(h) &&
								z &&
								$(h, function (W, P) {
									H(P) == p.s && (_[P] = r ? F.attr(P) : sr.attr(P));
								}),
							r
								? (Er && J
										? (ha.children().remove(),
										  $([$e, ar, Wr, Ua], function (W, P) {
												P && be(P.removeAttr(s.s), Qn);
										  }),
										  Gr(F, z ? Bn : we))
										: (Va(ha),
										  Wr.contents().unwrap().unwrap().unwrap(),
										  z && (sr.unwrap(), Va(F), Va(Ua), x())),
								  z && sr.removeAttr(s.s),
								  Y && be(Et, zi))
								: (z &&
										(re.sizeAutoCapable || ((C[V] = sr.css(V)), (C[zr] = sr.css(zr))),
										Er || sr.addClass(un).wrap(F),
										(F = sr[a]().css(C))),
								  Er ||
										(Gr(sr, z ? c : we),
										F.wrapInner(Wr).wrapInner(ar).wrapInner($e).prepend(ha),
										(Wr = Ht(F, Ve + jn)),
										(ar = Ht(F, Ve + vn)),
										($e = Ht(F, Ve + Un)),
										z && (Wr.prepend(Ua), x())),
								  G && Gr(ar, qn),
								  K.x && K.y && Gr(ar, Ui),
								  Y && Gr(Et, zi),
								  (bn = ha[0]),
								  (Qe = F[0]),
								  ($a = $e[0]),
								  (_t = ar[0]),
								  (da = Wr[0]),
								  pi());
					}
					function uc() {
						var r = [
								112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34, 37, 38, 39, 40, 16,
								17, 18, 19, 20, 144
							],
							a = [],
							i,
							c,
							l = 175,
							h = 'focus';
						function _(q) {
							_i(), k.update($r), q && pr && clearInterval(i);
						}
						function x(q) {
							return sr[ve](A.i && qa ? 9999999 : 0), sr[le](0), O.prvD(q), O.stpP(q), !1;
						}
						function y(q) {
							setTimeout(function () {
								rr || _();
							}, 50);
						}
						function C() {
							(si = !0), Gr(F, h);
						}
						function W() {
							(si = !1), (a = []), be(F, h), _(!0);
						}
						function P(q) {
							var lr = q.keyCode;
							Q(lr, r) < 0 &&
								(a[s.l] || (_(), (i = setInterval(_, 1e3 / 60))), Q(lr, a) < 0 && a.push(lr));
						}
						function X(q) {
							var lr = q.keyCode,
								tr = Q(lr, a);
							Q(lr, r) < 0 && (tr > -1 && a.splice(tr, 1), a[s.l] || _(!0));
						}
						function er(q) {
							Zn !== !0 && ((q = q.originalEvent || q), lc(q.propertyName) && k.update($r));
						}
						function cr(q) {
							Dr ||
								(c !== w
									? clearTimeout(c)
									: ((at || ea) && wa(!0), Xt() || Gr(F, cn), Ke('onScrollStart', q)),
								tt || (ba(!0), ba(!1)),
								Ke('onScroll', q),
								(c = setTimeout(function () {
									rr ||
										(clearTimeout(c),
										(c = w),
										(at || ea) && wa(!1),
										Xt() || be(F, cn),
										Ke('onScrollStop', q));
								}, l)));
						}
						z
							? (br > 9 || !pr ? pa(sr, 'input', _) : pa(sr, [Mn, In], [P, X]),
							  pa(sr, [je, 'drop', h, h + 'out'], [x, y, C, W]))
							: pa(Wr, Rn, er),
							pa(ar, je, cr, !0);
					}
					function mi(r) {
						var a = function (h) {
							var _ = h ? ec : ac,
								x = ja(Wa + oe + _, !0),
								y = ja(ji, x),
								C = ja(Qi, x);
							return (
								!Er && !r && (x.append(y), y.append(C)), { _scrollbar: x, _track: y, _handle: C }
							);
						};
						function i(h) {
							var _ = aa(h),
								x = _._scrollbar,
								y = _._track,
								C = _._handle;
							Er && J
								? $([x, y, C], function (W, P) {
										be(P.removeAttr(s.s), Qn);
								  })
								: Va(x || a(h)._scrollbar);
						}
						var c, l;
						r
							? (i(!0), i())
							: ((c = a(!0)),
							  (l = a()),
							  (dt = c._scrollbar),
							  (dn = c._track),
							  (jt = c._handle),
							  (pt = l._scrollbar),
							  (pn = l._track),
							  (Vt = l._handle),
							  Er || ($e.after(pt), $e.after(dt)));
					}
					function Ss(r) {
						var a = aa(r),
							i = a._info,
							c = Qt.top !== Qt,
							l = a._x_y,
							h = a._X_Y,
							_ = je + a._Left_Top,
							x = 'active',
							y = 'snapHandle',
							C = 'click',
							W = 1,
							P = [16, 17],
							X,
							er,
							cr,
							q;
						function lr(L) {
							return br && c ? L['screen' + h] : O.page(L)[l];
						}
						function tr(L) {
							return re.scrollbars[L];
						}
						function Lr() {
							W = 0.5;
						}
						function ye() {
							W = 1;
						}
						function jr(L) {
							O.stpP(L);
						}
						function ze(L) {
							Q(L.keyCode, P) > -1 && Lr();
						}
						function ne(L) {
							Q(L.keyCode, P) > -1 && ye();
						}
						function Jr(L) {
							var kr = L.originalEvent || L,
								Hr = kr.touches !== w;
							return Dr || rr || Xt() || !$n || (Hr && !tr('touchSupport'))
								? !1
								: O.mBtn(L) === 1 || Hr;
						}
						function Xr(L) {
							if (Jr(L)) {
								var kr = i._trackLength,
									Hr = i._handleLength,
									Ge = i._maxScroll,
									Qa = (lr(L) - cr) * q,
									gt = Qa / (kr - Hr),
									Me = Ge * gt;
								(Me = isFinite(Me) ? Me : 0),
									dr && r && !A.i && (Me *= -1),
									ar[_](N.round(er + Me)),
									tt && ba(r, er + Me),
									b || O.prvD(L);
							} else Br(L);
						}
						function Br(L) {
							if (
								((L = L || L.originalEvent),
								Be(Ca, [It, Mt, Mn, In, Rt], [Xr, Br, ze, ne, Jt], !0),
								O.rAF()(function () {
									Be(Ca, C, jr, !0, { _capture: !0 });
								}),
								tt && ba(r, !0),
								(tt = !1),
								be(ht, ut),
								be(a._handle, x),
								be(a._track, x),
								be(a._scrollbar, x),
								(er = w),
								(cr = w),
								(q = 1),
								ye(),
								X !== w && (k.scrollStop(), clearTimeout(X), (X = w)),
								L)
							) {
								var kr = Qe[s.bCR](),
									Hr =
										L.clientX >= kr.left &&
										L.clientX <= kr.right &&
										L.clientY >= kr.top &&
										L.clientY <= kr.bottom;
								Hr || Ts(), (at || ea) && wa(!1);
							}
						}
						function ee(L) {
							Jr(L) && ya(L);
						}
						function ya(L) {
							(er = ar[_]()),
								(er = isNaN(er) ? 0 : er),
								((dr && r && !A.n) || !dr) && (er = er < 0 ? 0 : er),
								(q = Ai()[l]),
								(cr = lr(L)),
								(tt = !tr(y)),
								Gr(ht, ut),
								Gr(a._handle, x),
								Gr(a._scrollbar, x),
								Be(Ca, [It, Mt, Rt], [Xr, Br, Jt]),
								O.rAF()(function () {
									Be(Ca, C, jr, !1, { _capture: !0 });
								}),
								(br || !Yr) && O.prvD(L),
								O.stpP(L);
						}
						function Fr(L) {
							if (Jr(L)) {
								var kr =
										a._info._handleLength /
										Math.round(N.min(1, xr[a._w_h] / bt[a._w_h]) * a._info._trackLength),
									Hr = N.round(xr[a._w_h] * kr),
									Ge = 270 * kr,
									Qa = 400 * kr,
									gt = a._track.offset()[a._left_top],
									Me = L.ctrlKey,
									Ta = L.shiftKey,
									La = Ta && Me,
									Je = !0,
									Zt = 'linear',
									Xe,
									Te,
									Ka = function (ue) {
										tt && ba(r, ue);
									},
									Ze = function () {
										Ka(), ya(L);
									},
									Mr = function () {
										if (!rr) {
											var ue = (cr - gt) * q,
												fe = i._handleOffset,
												ur = i._trackLength,
												ia = i._handleLength,
												nt = i._maxScroll,
												Ct = i._currentScroll,
												Ya = Ge * W,
												ka = Je ? N.max(Qa, Ya) : Ya,
												nr = nt * ((ue - ia / 2) / (ur - ia)),
												he = dr && r && ((!A.i && !A.n) || qa),
												Ga = he ? fe < ue : fe > ue,
												wr = {},
												de = {
													easing: Zt,
													step: function (sa) {
														tt && (ar[_](sa), ba(r, sa));
													}
												};
											(nr = isFinite(nr) ? nr : 0),
												(nr = dr && r && !A.i ? nt - nr : nr),
												Ta
													? (ar[_](nr),
													  La
															? ((nr = ar[_]()),
															  ar[_](Ct),
															  (nr = he && A.i ? nt - nr : nr),
															  (nr = he && A.n ? -nr : nr),
															  (wr[l] = nr),
															  k.scroll(wr, De(de, { duration: 130, complete: Ze })))
															: Ze())
													: ((Xe = Je ? Ga : Xe),
													  (Te = he
															? Xe
																? fe + ia >= ue
																: fe <= ue
															: Xe
															? fe <= ue
															: fe + ia >= ue),
													  Te
															? (clearTimeout(X), k.scrollStop(), (X = w), Ka(!0))
															: ((X = setTimeout(Mr, ka)),
															  (wr[l] = (Xe ? '-=' : '+=') + Hr),
															  k.scroll(wr, De(de, { duration: Ya }))),
													  (Je = !1));
										}
									};
								Me && Lr(),
									(q = Ai()[l]),
									(cr = O.page(L)[l]),
									(tt = !tr(y)),
									Gr(ht, ut),
									Gr(a._track, x),
									Gr(a._scrollbar, x),
									Be(Ca, [Mt, Mn, In, Rt], [Br, ze, ne, Jt]),
									Mr(),
									O.prvD(L),
									O.stpP(L);
							}
						}
						function na(L) {
							(vi = !0), (at || ea) && wa(!0);
						}
						function Cr(L) {
							(vi = !1), (at || ea) && wa(!1);
						}
						function gr(L) {
							O.stpP(L);
						}
						pa(a._handle, wt, ee),
							pa(a._track, [wt, Pi, Di], [Fr, na, Cr]),
							pa(a._scrollbar, wt, gr),
							n &&
								pa(a._scrollbar, Rn, function (L) {
									L.target === a._scrollbar[0] && (xi(r), ba(r));
								});
					}
					function Ns(r, a, i) {
						var c = r ? Mi : Ii,
							l = r ? dt : pt;
						ta(F, c, !a), ta(l, Yi, !i);
					}
					function wa(r, a) {
						if ((clearTimeout(As), r)) be(dt, Bt), be(pt, Bt);
						else {
							var i,
								c = 'active',
								l = function () {
									!vi &&
										!rr &&
										((i = jt.hasClass(c) || Vt.hasClass(c)),
										!i && (at || ea || yt) && Gr(dt, Bt),
										!i && (at || ea || yt) && Gr(pt, Bt));
								};
							ci > 0 && a !== !0 ? (As = setTimeout(l, ci)) : l();
						}
					}
					function xi(r) {
						var a = {},
							i = aa(r),
							c = i._info,
							l = 1e6,
							h = N.min(1, xr[i._w_h] / bt[i._w_h]);
						(a[i._width_height] = N.floor(h * 100 * l) / l + '%'),
							Xt() || i._handle.css(a),
							(c._handleLength = i._handle[0]['offset' + i._Width_Height]),
							(c._handleLengthRatio = h);
					}
					function ba(r, a) {
						var i = H(a) == p.b,
							c = 250,
							l = dr && r,
							h = aa(r),
							_ = h._info,
							x = 'translate(',
							y = He._cssProperty('transform'),
							C = He._cssProperty('transition'),
							W = r ? ar[ve]() : ar[le](),
							P = a === w || i ? W : a,
							X = _._handleLength,
							er = h._track[0]['offset' + h._Width_Height],
							cr = er - X,
							q = {},
							lr,
							tr,
							Lr =
								(_t[je + h._Width_Height] - _t['client' + h._Width_Height]) * (A.n && l ? -1 : 1),
							ye = function (Br) {
								return isNaN(Br / Lr) ? 0 : N.max(0, N.min(1, Br / Lr));
							},
							jr = function (Br) {
								var ee = cr * Br;
								return (
									(ee = isNaN(ee) ? 0 : ee),
									(ee = l && !A.i ? er - X - ee : ee),
									(ee = N.max(0, ee)),
									ee
								);
							},
							ze = ye(W),
							ne = ye(P),
							Jr = jr(ne),
							Xr = jr(ze);
						(_._maxScroll = Lr),
							(_._currentScroll = W),
							(_._currentScrollRatio = ze),
							v
								? ((lr = l ? -(er - X - Jr) : Jr),
								  (tr = r ? x + lr + 'px, 0)' : x + '0, ' + lr + 'px)'),
								  (q[y] = tr),
								  n &&
										(q[C] =
											i && N.abs(Jr - _._handleOffset) > 1
												? hc(h._handle) + ', ' + (y + oe + c + 'ms')
												: B))
								: (q[h._left_top] = Jr),
							Xt() ||
								(h._handle.css(q),
								v &&
									n &&
									i &&
									h._handle.one(Rn, function () {
										rr || h._handle.css(C, B);
									})),
							(_._handleOffset = Jr),
							(_._snappedHandleOffset = Xr),
							(_._trackLength = er);
					}
					function Ps(r, a) {
						var i = a ? 'removeClass' : 'addClass',
							c = r ? dn : jt,
							l = r ? pn : Vt,
							h = r ? Vi : Ki;
						c[i](h), l[i](h);
					}
					function aa(r) {
						return {
							_width_height: r ? V : zr,
							_Width_Height: r ? 'Width' : 'Height',
							_left_top: r ? _r : Rr,
							_Left_Top: r ? 'Left' : 'Top',
							_x_y: r ? Dt : zt,
							_X_Y: r ? 'X' : 'Y',
							_w_h: r ? 'w' : 'h',
							_l_t: r ? 'l' : 't',
							_track: r ? dn : pn,
							_handle: r ? jt : Vt,
							_scrollbar: r ? dt : pt,
							_info: r ? Ce : Ae
						};
					}
					function gi(r) {
						(Pe = Pe || ja(Vn, !0)),
							r ? (Er && J ? be(Pe.removeAttr(s.s), Qn) : Va(Pe)) : Er || F.append(Pe);
					}
					function fc() {
						var r = Qt.top !== Qt,
							a = {},
							i = {},
							c = {},
							l;
						function h(C) {
							if (x(C)) {
								var W = y(C),
									P = {};
								(li || Cn) && (P[V] = i.w + (W.x - a.x) * c.x),
									(ui || Cn) && (P[zr] = i.h + (W.y - a.y) * c.y),
									F.css(P),
									O.stpP(C);
							} else _(C);
						}
						function _(C) {
							var W = C !== w;
							Be(Ca, [Rt, It, Mt], [Jt, h, _], !0),
								be(ht, ut),
								Pe.releaseCapture && Pe.releaseCapture(),
								W && (l && ws(), k.update($r)),
								(l = !1);
						}
						function x(C) {
							var W = C.originalEvent || C,
								P = W.touches !== w;
							return Dr || rr ? !1 : O.mBtn(C) === 1 || P;
						}
						function y(C) {
							return br && r ? { x: C.screenX, y: C.screenY } : O.page(C);
						}
						pa(Pe, wt, function (C) {
							x(C) &&
								!gn &&
								(Oa && ((l = !0), fi()),
								(a = y(C)),
								(i.w = Qe[s.oW] - (Ir ? 0 : Or)),
								(i.h = Qe[s.oH] - (Ir ? 0 : Fe)),
								(c = Ai()),
								Be(Ca, [Rt, It, Mt], [Jt, h, _]),
								Gr(ht, ut),
								Pe.setCapture && Pe.setCapture(),
								O.prvD(C),
								O.stpP(C));
						});
					}
					function Ke(r, a, i) {
						if (i !== !1)
							if (J) {
								var c = re.callbacks[r],
									l = r,
									h;
								l.substr(0, 2) === 'on' && (l = l.substr(2, 1).toLowerCase() + l.substr(3)),
									H(c) == p.f && c.call(k, a),
									$(Ba, function () {
										(h = this), H(h.on) == p.f && h.on(l, a);
									});
							} else rr || Kn.push({ n: r, a });
					}
					function mt(r, a, i) {
						(a = a || B),
							(i = i || [B, B, B, B]),
							(r[a + Rr] = i[0]),
							(r[a + ce] = i[1]),
							(r[a + Se] = i[2]),
							(r[a + _r] = i[3]);
					}
					function Ci(r, a, i, c) {
						return (
							(a = a || B),
							(r = r || B),
							{
								t: c ? 0 : Ea(F.css(r + Rr + a)),
								r: i ? 0 : Ea(F.css(r + ce + a)),
								b: c ? 0 : Ea(F.css(r + Se + a)),
								l: i ? 0 : Ea(F.css(r + _r + a))
							}
						);
					}
					function hc(r) {
						var a = He._cssProperty('transition'),
							i = r.css(a);
						if (i) return i;
						for (
							var c = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
								l = new RegExp(c),
								h = new RegExp('^(' + c + ')+$'),
								_ = 'property duration timing-function delay'.split(' '),
								x = [],
								y,
								C,
								W = 0,
								P,
								X = function (er) {
									if (((y = []), !er.match(h))) return er;
									for (; er.match(l); ) y.push(RegExp.$1), (er = er.replace(l, B));
									return y;
								};
							W < _[s.l];
							W++
						)
							for (C = X(r.css(a + '-' + _[W])), P = 0; P < C[s.l]; P++)
								x[P] = (x[P] ? x[P] + oe : B) + C[P];
						return x.join(', ');
					}
					function Ds(r, a) {
						var i,
							c,
							l,
							h = function (_, x) {
								if (((l = ''), x && typeof _ == p.s))
									for (c = _.split(oe), i = 0; i < c[s.l]; i++) l += '|' + c[i] + '$';
								return l;
							};
						return new RegExp('(^' + we + '([-_].+|)$)' + h(Gt, r) + h(ri, a), 'g');
					}
					function Ai() {
						var r = $a[s.bCR]();
						return {
							x: (v && 1 / (N.round(r.width) / $a[s.oW])) || 1,
							y: (v && 1 / (N.round(r.height) / $a[s.oH])) || 1
						};
					}
					function zs(r) {
						var a = 'ownerDocument',
							i = 'HTMLElement',
							c = (r && r[a] && r[a].parentWindow) || Z;
						return typeof c[i] == p.o
							? r instanceof c[i]
							: r && typeof r == p.o && r !== null && r.nodeType === 1 && typeof r.nodeName == p.s;
					}
					function dc(r, a) {
						var i = [],
							c = [],
							l,
							h;
						for (l = 0; l < r.length; l++) i[r[l]] = !0;
						for (l = 0; l < a.length; l++) i[a[l]] ? delete i[a[l]] : (i[a[l]] = !0);
						for (h in i) c.push(h);
						return c;
					}
					function Ea(r, a) {
						var i = a ? parseFloat(r) : parseInt(r, 10);
						return isNaN(i) ? 0 : i;
					}
					function pc() {
						var r = Za.selectionStart;
						if (r !== w) {
							var a = sr.val(),
								i = a[s.l],
								c = a.split(`
`),
								l = c[s.l],
								h = a.substr(0, r).split(`
`),
								_ = 0,
								x = 0,
								y = h[s.l],
								C = h[h[s.l] - 1][s.l],
								W,
								P;
							for (P = 0; P < c[s.l]; P++) (W = c[P][s.l]), W > x && ((_ = P + 1), (x = W));
							return {
								_cursorRow: y,
								_cursorColumn: C,
								_rows: l,
								_columns: x,
								_widestRow: _,
								_cursorPosition: r,
								_cursorMax: i
							};
						}
					}
					function Xt() {
						return Xn && K.x && K.y;
					}
					function Ms() {
						return z ? Ua[0] : da;
					}
					function Ye(r, a) {
						return (
							'<div ' +
							(r
								? H(r) == p.s
									? 'class="' + r + '"'
									: (function () {
											var i,
												c = B;
											if (R.isPlainObject(r))
												for (i in r) c += (i === 'c' ? 'class' : i) + '="' + r[i] + '" ';
											return c;
									  })()
								: B) +
							'>' +
							(a || B) +
							'</div>'
						);
					}
					function ja(r, a) {
						var i = H(a) == p.b,
							c = i ? F : a || F;
						return Er && !c[s.l]
							? null
							: Er
							? c[i ? 'children' : 'find'](Ve + r.replace(/\s/g, Ve)).eq(0)
							: R(Ye(r));
					}
					function Oi(r, a) {
						for (var i = a.split(Ve), c = 0, l; c < i.length; c++) {
							if (!r[s.hOP](i[c])) return;
							(l = r[i[c]]), c < i.length && H(l) == p.o && (r = l);
						}
						return l;
					}
					function _c(r, a, i) {
						for (var c = a.split(Ve), l = c.length, h = 0, _ = {}, x = _; h < l; h++)
							_ = _[c[h]] = h + 1 < l ? {} : i;
						R.extend(r, x, !0);
					}
					function Is(r) {
						var a = re.updateOnLoad;
						(a = H(a) == p.s ? a.split(oe) : a), O.isA(a) && !rr && $(a, r);
					}
					function xt(r, a, i) {
						if (i) return i;
						if (H(r) == p.o && H(a) == p.o) {
							for (var c in r)
								if (c !== 'c')
									if (r[s.hOP](c) && a[s.hOP](c)) {
										if (xt(r[c], a[c])) return !0;
									} else return !0;
						} else return r !== a;
						return !1;
					}
					function De() {
						return R.extend.apply(this, [!0].concat([].slice.call(arguments)));
					}
					function Gr(r, a) {
						return hr.addClass.call(r, a);
					}
					function be(r, a) {
						return hr.removeClass.call(r, a);
					}
					function ta(r, a, i) {
						return i ? Gr(r, a) : be(r, a);
					}
					function Va(r) {
						return hr.remove.call(r);
					}
					function Ht(r, a) {
						return hr.find.call(r, a).eq(0);
					}
					(k.sleep = function () {
						Dr = !0;
					}),
						(k.update = function (r) {
							if (!rr) {
								var a,
									i,
									c = H(r) == p.s,
									l,
									h,
									_;
								return (
									c
										? r === $r
											? ((a = vc()),
											  (i = oc()),
											  (l = a || i),
											  l && _a({ _contentSizeChanged: i, _changedOptions: J ? w : re }))
											: r === Nn
											? Oa
												? ((h = ai(mn.takeRecords())), (_ = ti(xn.takeRecords())))
												: (h = k.update($r))
											: r === 'zoom' && _a({ _hostSizeChanged: !0, _contentSizeChanged: !0 })
										: ((r = Dr || r), (Dr = !1), (!k.update(Nn) || r) && _a({ _force: r })),
									Hs(),
									l || h || _
								);
							}
						}),
						(k.options = function (r, a) {
							var i = {},
								c;
							if (R.isEmptyObject(r) || !R.isPlainObject(r))
								if (H(r) == p.s)
									if (arguments.length > 1) _c(i, r, a), (c = bi(i));
									else return Oi(Ut, r);
								else return Ut;
							else c = bi(r);
							R.isEmptyObject(c) || _a({ _changedOptions: c });
						}),
						(k.destroy = function () {
							if (!rr) {
								Pr.remove(k), fi(), An(ha), An(fa);
								for (var r in Ba) k.removeExt(r);
								for (; ii[s.l] > 0; ) ii.pop()();
								di(!0), Ee && Va(Ee), Fa && Va(Fa), qr && Va(fa), mi(!0), gi(!0), yi(!0);
								for (var a = 0; a < qt[s.l]; a++) R(qt[a]).off(Gn, hi);
								(qt = w), (rr = !0), (Dr = !0), Ma(E, 0), Ke('onDestroyed');
							}
						}),
						(k.scroll = function (r, a, i, c) {
							if (arguments.length === 0 || r === w) {
								var l = Ce,
									h = Ae,
									_ = qa && dr && A.i,
									x = qa && dr && A.n,
									y = l._currentScroll,
									C = l._currentScrollRatio,
									W = l._maxScroll;
								return (
									(C = _ ? 1 - C : C),
									(y = _ ? W - y : y),
									(y *= x ? -1 : 1),
									(W *= x ? -1 : 1),
									{
										position: { x: y, y: h._currentScroll },
										ratio: { x: C, y: h._currentScrollRatio },
										max: { x: W, y: h._maxScroll },
										handleOffset: { x: l._handleOffset, y: h._handleOffset },
										handleLength: { x: l._handleLength, y: h._handleLength },
										handleLengthRatio: { x: l._handleLengthRatio, y: h._handleLengthRatio },
										trackLength: { x: l._trackLength, y: h._trackLength },
										snappedHandleOffset: { x: l._snappedHandleOffset, y: h._snappedHandleOffset },
										isRTL: dr,
										isRTLNormalized: qa
									}
								);
							}
							k.update(Nn);
							var P = qa,
								X = [Dt, _r, 'l'],
								er = [zt, Rr, 't'],
								cr = ['+=', '-=', '*=', '/='],
								q = H(a) == p.o,
								lr = q ? a.complete : c,
								tr,
								Lr = {},
								ye = {},
								jr,
								ze,
								ne,
								Jr = 'end',
								Xr = 'begin',
								Br = 'center',
								ee = 'nearest',
								ya = 'always',
								Fr = 'never',
								na = 'ifneeded',
								Cr = s.l,
								gr,
								L,
								kr,
								Hr,
								Ge,
								Qa = [Dt, zt, 'xy', 'yx'],
								gt = [Xr, Jr, Br, ee],
								Me = [ya, Fr, na],
								Ta = r[s.hOP]('el'),
								La = Ta ? r.el : r,
								Je = La instanceof R || vt ? La instanceof vt : !1,
								Zt = Je ? !1 : zs(La),
								Xe = function () {
									jr && ba(!0), ze && ba(!1);
								},
								Te =
									H(lr) != p.f
										? w
										: function () {
												Xe(), lr();
										  };
							function Ka(M, I) {
								for (tr = 0; tr < I[Cr]; tr++) if (M === I[tr]) return !0;
								return !1;
							}
							function Ze(M, I) {
								var Vr = M ? X : er;
								if (((I = H(I) == p.s || H(I) == p.n ? [I, I] : I), O.isA(I)))
									return M ? I[0] : I[1];
								if (H(I) == p.o) {
									for (tr = 0; tr < Vr[Cr]; tr++) if (Vr[tr] in I) return I[Vr[tr]];
								}
							}
							function Mr(M, I) {
								var Vr = H(I) == p.s,
									Le,
									yr,
									oa = M ? Ce : Ae,
									Zr = oa._currentScroll,
									Ie = oa._maxScroll,
									it = ' * ',
									Sr,
									va = dr && M,
									Sa = va && A.n && !P,
									ie = 'replace',
									Ja = eval,
									Na;
								if (
									(Vr
										? (I[Cr] > 2 && ((Na = I.substr(0, 2)), Q(Na, cr) > -1 && (Le = Na)),
										  (I = Le ? I.substr(2) : I),
										  (I = I[ie](/min/g, 0)
												[ie](/</g, 0)
												[ie](/max/g, (Sa ? '-' : B) + Ra)
												[ie](/>/g, (Sa ? '-' : B) + Ra)
												[ie](/px/g, B)
												[ie](/%/g, it + (Ie * (va && A.n ? -1 : 1)) / 100)
												[ie](/vw/g, it + xr.w)
												[ie](/vh/g, it + xr.h)),
										  (yr = Ea(isNaN(I) ? Ea(Ja(I), !0).toFixed() : I)))
										: (yr = I),
									yr !== w && !isNaN(yr) && H(yr) == p.n)
								) {
									var st = P && va,
										la = Zr * (st && A.n ? -1 : 1),
										Pa = st && A.i,
										wi = st && A.n;
									switch (((la = Pa ? Ie - la : la), Le)) {
										case '+=':
											Sr = la + yr;
											break;
										case '-=':
											Sr = la - yr;
											break;
										case '*=':
											Sr = la * yr;
											break;
										case '/=':
											Sr = la / yr;
											break;
										default:
											Sr = yr;
											break;
									}
									(Sr = Pa ? Ie - Sr : Sr),
										(Sr *= wi ? -1 : 1),
										(Sr = va && A.n ? N.min(0, N.max(Ie, Sr)) : N.max(0, N.min(Ie, Sr)));
								}
								return Sr === Zr ? w : Sr;
							}
							function ue(M, I, Vr, Le) {
								var yr = [Vr, Vr],
									oa = H(M),
									Zr,
									Ie;
								if (oa == I) M = [M, M];
								else if (oa == p.a) {
									if (((Zr = M[Cr]), Zr > 2 || Zr < 1)) M = yr;
									else
										for (Zr === 1 && (M[1] = Vr), tr = 0; tr < Zr; tr++)
											if (((Ie = M[tr]), H(Ie) != I || !Ka(Ie, Le))) {
												M = yr;
												break;
											}
								} else oa == p.o ? (M = [M[Dt] || Vr, M[zt] || Vr]) : (M = yr);
								return { x: M[0], y: M[1] };
							}
							function fe(M) {
								var I = [],
									Vr,
									Le,
									yr = [Rr, ce, Se, _r];
								for (tr = 0; tr < M[Cr] && tr !== yr[Cr]; tr++)
									(Vr = M[tr]),
										(Le = H(Vr)),
										Le == p.b
											? I.push(Vr ? Ea(Ge.css(te + yr[tr])) : 0)
											: I.push(Le == p.n ? Vr : 0);
								return I;
							}
							if (Je || Zt) {
								var ur = Ta ? r.margin : 0,
									ia = Ta ? r.axis : 0,
									nt = Ta ? r.scroll : 0,
									Ct = Ta ? r.block : 0,
									Ya = [0, 0, 0, 0],
									ka = H(ur),
									nr;
								if (((Ge = Je ? La : R(La)), Ge[Cr] > 0)) {
									ka == p.n || ka == p.b
										? (ur = fe([ur, ur, ur, ur]))
										: ka == p.a
										? ((nr = ur[Cr]),
										  nr === 2
												? (ur = fe([ur[0], ur[1], ur[0], ur[1]]))
												: nr >= 4
												? (ur = fe(ur))
												: (ur = Ya))
										: ka == p.o
										? (ur = fe([ur[Rr], ur[ce], ur[Se], ur[_r]]))
										: (ur = Ya),
										(gr = Ka(ia, Qa) ? ia : 'xy'),
										(L = ue(nt, p.s, ya, Me)),
										(kr = ue(Ct, p.s, Xr, gt)),
										(Hr = ur);
									var he = { l: Ce._currentScroll, t: Ae._currentScroll },
										Ga = $e.offset(),
										wr = Ge.offset(),
										de = { x: L.x == Fr || gr == zt, y: L.y == Fr || gr == Dt };
									(wr[Rr] -= Hr[0]), (wr[_r] -= Hr[3]);
									var sa = {
										x: N.round(wr[_r] - Ga[_r] + he.l),
										y: N.round(wr[Rr] - Ga[Rr] + he.t)
									};
									if (
										(dr &&
											(!A.n && !A.i && (sa.x = N.round(Ga[_r] - wr[_r] + he.l)),
											A.n && P && (sa.x *= -1),
											A.i && P && (sa.x = N.round(Ga[_r] - wr[_r] + (Ce._maxScroll - he.l)))),
										kr.x != Xr || kr.y != Xr || L.x == na || L.y == na || dr)
									) {
										var $t = Ge[0],
											On = v ? $t[s.bCR]() : { width: $t[s.oW], height: $t[s.oH] },
											ca = { w: On[V] + Hr[3] + Hr[1], h: On[zr] + Hr[0] + Hr[2] },
											Ha = function (M) {
												var I = aa(M),
													Vr = I._w_h,
													Le = I._left_top,
													yr = I._x_y,
													oa = kr[yr] == (M && dr ? Xr : Jr),
													Zr = kr[yr] == Br,
													Ie = kr[yr] == ee,
													it = L[yr] == Fr,
													Sr = L[yr] == na,
													va = xr[Vr],
													Sa = Ga[Le],
													ie = ca[Vr],
													Ja = wr[Le],
													Na = Zr ? 2 : 1,
													st = Ja + ie / 2,
													la = Sa + va / 2,
													Pa = ie <= va && Ja >= Sa && Ja + ie <= Sa + va;
												it
													? (de[yr] = !0)
													: de[yr] ||
													  ((Ie || Sr) &&
															((de[yr] = Sr ? Pa : !1), (oa = ie < va ? st > la : st < la)),
													  (sa[yr] -=
															oa || Zr ? (va / Na - ie / Na) * (M && dr && P ? -1 : 1) : 0));
											};
										Ha(!0), Ha(!1);
									}
									de.y && delete sa.y, de.x && delete sa.x, (r = sa);
								}
							}
							(Lr[ve] = Mr(!0, Ze(!0, r))),
								(Lr[le] = Mr(!1, Ze(!1, r))),
								(jr = Lr[ve] !== w),
								(ze = Lr[le] !== w),
								(jr || ze) && (a > 0 || q)
									? q
										? ((a.complete = Te), ar.animate(Lr, a))
										: ((ne = { duration: a, complete: Te }),
										  O.isA(i) || R.isPlainObject(i)
												? ((ye[ve] = i[0] || i.x), (ye[le] = i[1] || i.y), (ne.specialEasing = ye))
												: (ne.easing = i),
										  ar.animate(Lr, ne))
									: (jr && ar[ve](Lr[ve]), ze && ar[le](Lr[le]), Xe());
						}),
						(k.scrollStop = function (r, a, i) {
							return ar.stop(r, a, i), k;
						}),
						(k.getElements = function (r) {
							var a = {
								target: Za,
								host: Qe,
								padding: $a,
								viewport: _t,
								content: da,
								scrollbarHorizontal: { scrollbar: dt[0], track: dn[0], handle: jt[0] },
								scrollbarVertical: { scrollbar: pt[0], track: pn[0], handle: Vt[0] },
								scrollbarCorner: Pe[0]
							};
							return H(r) == p.s ? Oi(a, r) : a;
						}),
						(k.getState = function (r) {
							function a(c) {
								if (!R.isPlainObject(c)) return c;
								var l = De({}, c),
									h = function (_, x) {
										l[s.hOP](_) && ((l[x] = l[_]), delete l[_]);
									};
								return h('w', V), h('h', zr), delete l.c, l;
							}
							var i = {
								destroyed: !!a(rr),
								sleeping: !!a(Dr),
								autoUpdate: a(!Oa),
								widthAuto: a(ra),
								heightAuto: a(rt),
								padding: a(Jn),
								overflowAmount: a(kt),
								hideOverflow: a(Yt),
								hasOverflow: a(Aa),
								contentScrollSize: a(bt),
								viewportSize: a(xr),
								hostSize: a(Kt),
								documentMixed: a(Yr)
							};
							return H(r) == p.s ? Oi(i, r) : i;
						}),
						(k.ext = function (r) {
							var a,
								i = tc.split(' '),
								c = 0;
							if (H(r) == p.s) {
								if (Ba[s.hOP](r)) for (a = De({}, Ba[r]); c < i.length; c++) delete a[i[c]];
							} else {
								a = {};
								for (c in Ba) a[c] = De({}, k.ext(c));
							}
							return a;
						}),
						(k.addExt = function (r, a) {
							var i = g.extension(r),
								c,
								l,
								h,
								_,
								x = !0;
							if (i) {
								if (Ba[s.hOP](r)) return k.ext(r);
								if (
									((c = i.extensionFactory.call(k, De({}, i.defaultOptions), R, O)),
									c &&
										((h = c.contract), H(h) == p.f && ((_ = h(Z)), (x = H(_) == p.b ? _ : x)), x))
								)
									return (Ba[r] = c), (l = c.added), H(l) == p.f && l(a), k.ext(r);
							} else console.warn('A extension with the name "' + r + `" isn't registered.`);
						}),
						(k.removeExt = function (r) {
							var a = Ba[r],
								i;
							return a ? (delete Ba[r], (i = a.removed), H(i) == p.f && i(), !0) : !1;
						});
					function bc(r, a, i) {
						(Zi = U.defaultOptions),
							(G = U.nativeScrollbarStyling),
							(o = De({}, U.nativeScrollbarSize)),
							(K = De({}, U.nativeScrollbarIsOverlaid)),
							(Kr = De({}, U.overlayScrollbarDummySize)),
							(A = De({}, U.rtlScrollBehavior)),
							bi(De({}, Zi, a)),
							(t = U.cssCalc),
							(br = U.msie),
							(pr = U.autoUpdateRecommended),
							(n = U.supportTransition),
							(v = U.supportTransform),
							(b = U.supportPassiveEvents),
							(S = U.supportResizeObserver),
							(D = U.supportMutationObserver),
							(Ca = R(r.ownerDocument)),
							(Tt = Ca[0]),
							(hn = R(Tt.defaultView || Tt.parentWindow)),
							(Qt = hn[0]),
							(Et = Ht(Ca, 'html')),
							(ht = Ht(Et, 'body')),
							(sr = R(r)),
							(Za = sr[0]),
							(z = sr.is('textarea')),
							(Y = sr.is('body')),
							(Yr = Tt !== or),
							(Er = z
								? sr.hasClass(on) && sr.parent().hasClass(jn)
								: sr.hasClass(we) && sr.children(Ve + Un)[s.l]);
						var c, l;
						return K.x && K.y && !re.nativeScrollbarsOverlaid.initialize
							? (Ke('onInitializationWithdrawn'),
							  Er && (yi(!0), mi(!0), gi(!0)),
							  (rr = !0),
							  (Dr = !0),
							  k)
							: (Y &&
									((c = {}),
									(c.l = N.max(sr[ve](), Et[ve](), hn[ve]())),
									(c.t = N.max(sr[le](), Et[le](), hn[le]())),
									(l = function () {
										ar.removeAttr(s.ti), Be(ar, wt, l, !0, !0);
									})),
							  yi(),
							  mi(),
							  gi(),
							  uc(),
							  Ss(!0),
							  Ss(!1),
							  fc(),
							  nc(),
							  An(ha, ic),
							  Y &&
									(ar[ve](c.l)[le](c.t),
									or.activeElement == r &&
										_t.focus &&
										(ar.attr(s.ti, '-1'), _t.focus(), Be(ar, wt, l, !1, !0))),
							  k.update($r),
							  (J = !0),
							  Ke('onInitialized'),
							  $(Kn, function (h, _) {
									Ke(_.n, _.a);
							  }),
							  (Kn = []),
							  H(i) == p.s && (i = [i]),
							  O.isA(i)
									? $(i, function (h, _) {
											k.addExt(_);
									  })
									: R.isPlainObject(i) &&
									  $(i, function (h, _) {
											k.addExt(h, _);
									  }),
							  setTimeout(function () {
									n && !rr && Gr(F, Ri);
							  }, 333),
							  k);
					}
					return g.valid(bc(E, j, mr)) && Ma(E, k), k;
				}
				return (
					(g = Z[ke] =
						function (E, j, mr) {
							if (arguments[s.l] === 0) return this;
							var U = [],
								Pr = R.isPlainObject(j),
								H,
								Q;
							return E
								? ((E = E[s.l] != w ? E : [E[0] || E]),
								  d(),
								  E[s.l] > 0 &&
										(Pr
											? R.each(E, function ($, k) {
													(H = k), H !== w && U.push(ir(H, j, mr, m, e));
											  })
											: R.each(E, function ($, k) {
													(H = Ma(k)),
														((j === '!' && g.valid(H)) ||
															(O.type(j) == p.f && j(k, H)) ||
															j === w) &&
															U.push(H);
											  }),
										(Q = U[s.l] === 1 ? U[0] : U)),
								  Q)
								: Pr || !j
								? Q
								: U;
						}),
					(g.globals = function () {
						d();
						var E = R.extend(!0, {}, m);
						return delete E.msie, E;
					}),
					(g.defaultOptions = function (E) {
						d();
						var j = m.defaultOptions;
						if (E === w) return R.extend(!0, {}, j);
						m.defaultOptions = R.extend(!0, {}, j, u._validate(E, u._template, !0, j)._default);
					}),
					(g.valid = function (E) {
						return E instanceof g && !E.getState().destroyed;
					}),
					(g.extension = function (E, j, mr) {
						var U = O.type(E) == p.s,
							Pr = arguments[s.l],
							H = 0;
						if (Pr < 1 || !U) return R.extend(!0, { length: f[s.l] }, f);
						if (U) {
							if (O.type(j) == p.f) f.push({ name: E, extensionFactory: j, defaultOptions: mr });
							else
								for (; H < f[s.l]; H++)
									if (f[H].name === E)
										if (Pr > 1) f.splice(H, 1);
										else return R.extend(!0, {}, f[H]);
						}
					}),
					g
				);
			})();
		return (
			vt &&
				vt.fn &&
				(vt.fn.overlayScrollbars = function (g, m) {
					var e = this;
					return vt.isPlainObject(g)
						? (vt.each(e, function () {
								Sn(this, g, m);
						  }),
						  e)
						: Sn(e, g);
				}),
			Sn
		);
	});
})(Ys);
var nn = Ys.exports;
function Ni() {
	return (
		(Ni =
			Object.assign ||
			function (ae) {
				for (var Z = 1; Z < arguments.length; Z++) {
					var or = arguments[Z];
					for (var w in or) Object.prototype.hasOwnProperty.call(or, w) && (ae[w] = or[w]);
				}
				return ae;
			}),
		Ni.apply(this, arguments)
	);
}
function Pc(ae, Z) {
	if (ae == null) return {};
	var or = Dc(ae, Z),
		w,
		ke;
	if (Object.getOwnPropertySymbols) {
		var p = Object.getOwnPropertySymbols(ae);
		for (ke = 0; ke < p.length; ke++)
			(w = p[ke]),
				!(Z.indexOf(w) >= 0) &&
					(!Object.prototype.propertyIsEnumerable.call(ae, w) || (or[w] = ae[w]));
	}
	return or;
}
function Dc(ae, Z) {
	if (ae == null) return {};
	var or = {},
		w = Object.keys(ae),
		ke,
		p;
	for (p = 0; p < w.length; p++) (ke = w[p]), !(Z.indexOf(ke) >= 0) && (or[ke] = ae[ke]);
	return or;
}
var zc = function (Z) {
	var or = Z.options,
		w = or === void 0 ? {} : or,
		ke = Z.extensions,
		p = Z.className,
		s = Z.children,
		He = Pc(Z, ['options', 'extensions', 'className', 'children']),
		O = xe.useRef(),
		N = xe.useRef();
	return (
		xe.useEffect(function () {
			return (
				(N.current = nn(O.current, w, ke)),
				Gs(N.current, p),
				function () {
					nn.valid(N.current) && (N.current.destroy(), (N.current = null));
				}
			);
		}, []),
		xe.useEffect(
			function () {
				nn.valid(N.current) && N.current.options(w);
			},
			[w]
		),
		xe.useEffect(
			function () {
				nn.valid(N.current) && Gs(N.current, p);
			},
			[p]
		),
		xe.createElement(
			'div',
			Ni({ className: 'os-host' }, He, { ref: O }),
			xe.createElement('div', { className: 'os-resize-observer-host' }),
			xe.createElement(
				'div',
				{ className: 'os-padding' },
				xe.createElement(
					'div',
					{ className: 'os-viewport' },
					xe.createElement('div', { className: 'os-content' }, s)
				)
			),
			xe.createElement(
				'div',
				{ className: 'os-scrollbar os-scrollbar-horizontal ' },
				xe.createElement(
					'div',
					{ className: 'os-scrollbar-track' },
					xe.createElement('div', { className: 'os-scrollbar-handle' })
				)
			),
			xe.createElement(
				'div',
				{ className: 'os-scrollbar os-scrollbar-vertical' },
				xe.createElement(
					'div',
					{ className: 'os-scrollbar-track' },
					xe.createElement('div', { className: 'os-scrollbar-handle' })
				)
			),
			xe.createElement('div', { className: 'os-scrollbar-corner' })
		)
	);
};
zc.displayName = 'OverlayScrollbarsComponent';
function Gs(ae, Z) {
	if (nn.valid(ae)) {
		var or = ae.getElements(),
			w = or.host,
			ke = new RegExp(
				'(^os-host([-_].+|)$)|'.concat(ae.options().className.replace(/\s/g, '$|'), '$'),
				'g'
			),
			p = w.className
				.split(' ')
				.filter(function (s) {
					return s.match(ke);
				})
				.join(' ');
		w.className = ''.concat(p, ' ').concat(Z || '');
	}
}
export { zc as OverlayScrollbarsComponent, zc as default };
//# sourceMappingURL=OverlayScrollbars.07d9c91e.js.map
