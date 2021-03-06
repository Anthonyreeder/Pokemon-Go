var rsaKEY = "10001|A237060180D24CDEF3E4E27D828BDB6A13E12C6959820770D7F2C1671DD0AEF4729670C20C6C5967C664D18955058B69549FBE8BF3609EF64832D7C033008A818700A9B0458641C5824F5FCBB9FF83D5A83EBDF079E73B81ACA9CA52FDBCAD7CD9D6A337A4511759FA21E34CD166B9BABD512DB7B2293C0FE48B97CAB3DE8F6F1A8E49C08D23A98E986B8A995A8F382220F06338622631435736FA064AEAC5BD223BAF42AF2B66F1FEA34EF3C297F09C10B364B994EA287A5602ACF153D0B4B09A604B987397684D19DBC5E6FE7E4FFE72390D28D6E21CA3391FA3CAADAD80A729FEF4823F6BE9711D4D51BF4DFCB6A3607686B34ACCE18329D415350FD0654D"

BigInteger.prototype.am = am3;
dbits = 28 // menjati ako se promeni prototip
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = ((1 << dbits) - 1);
BigInteger.prototype.DV = (1 << dbits);
BigInteger.prototype.fromString = bnpFromString
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.copyTo = bnpCopyTo
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
BigInteger.prototype.invDigit = bnpInvDigit
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.clamp = bnpClamp
BigInteger.prototype.compareTo = bnCompareTo
BigInteger.prototype.isEven = bnpIsEven;
RSAKey.prototype.setPublic = RSASetPublic;
BigInteger.prototype.divRemTo = bnpDivRemTo
RSAKey.prototype.encrypt_b64 = RSAEncryptB64
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.encrypt = RSAEncrypt
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.prototype.fromInt = bnpFromInt
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.negate = bnNegate;
BigInteger.ONE = nbv(1);

var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array();
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv
}
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv
}
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv
}
Montgomery.prototype.convert = montConvert;
function Test(){
    return "test"
}
function Classic(a) {
    this.m = a
}
function bnpFromInt(a) {
    this.t = 1;
    this.s = (a < 0) ? -1 : 0;
    if (a > 0) {
        this[0] = a
    } else {
        if (a < -1) {
            this[0] = a + this.DV
        } else {
            this.t = 0
        }
    }
}
function bnpMultiplyTo(c, e) {
    var b = this.abs()
        , f = c.abs();
    var d = b.t;
    e.t = d + f.t;
    while (--d >= 0) {
        e[d] = 0
    }
    for (d = 0; d < f.t; ++d) {
        e[d + b.t] = b.am(0, f[d], e, d, 0, b.t)
    }
    e.s = 0;
    e.clamp();
    if (this.s != c.s) {
        BigInteger.ZERO.subTo(e, e)
    }
}
function bnpDRShiftTo(c, b) {
    for (var a = c; a < this.t; ++a) {
        b[a - c] = this[a]
    }
    b.t = Math.max(this.t - c, 0);
    b.s = this.s
}
function bnpLShiftTo(j, e) {
    var b = j % this.DB;
    var a = this.DB - b;
    var g = (1 << a) - 1;
    var f = Math.floor(j / this.DB), h = (this.s << b) & this.DM, d;
    for (d = this.t - 1; d >= 0; --d) {
        e[d + f + 1] = (this[d] >> a) | h;
        h = (this[d] & g) << b
    }
    for (d = f - 1; d >= 0; --d) {
        e[d] = 0
    }
    e[f] = h;
    e.t = this.t + f + 1;
    e.s = this.s;
    e.clamp()
}
function bnpCopyTo(b) {
    for (var a = this.t - 1; a >= 0; --a) {
        b[a] = this[a]
    }
    b.t = this.t;
    b.s = this.s
}
function bnpSubTo(d, f) {
    var e = 0
        , g = 0
        , b = Math.min(d.t, this.t);
    while (e < b) {
        g += this[e] - d[e];
        f[e++] = g & this.DM;
        g >>= this.DB
    }
    if (d.t < this.t) {
        g -= d.s;
        while (e < this.t) {
            g += this[e];
            f[e++] = g & this.DM;
            g >>= this.DB
        }
        g += this.s
    } else {
        g += this.s;
        while (e < d.t) {
            g -= d[e];
            f[e++] = g & this.DM;
            g >>= this.DB
        }
        g -= d.s
    }
    f.s = (g < 0) ? -1 : 0;
    if (g < -1) {
        f[e++] = this.DV + g
    } else {
        if (g > 0) {
            f[e++] = g
        }
    }
    f.t = e;
    f.clamp()
}
function bnpDLShiftTo(c, b) {
    var a;
    for (a = this.t - 1; a >= 0; --a) {
        b[a + c] = this[a]
    }
    for (a = c - 1; a >= 0; --a) {
        b[a] = 0
    }
    b.t = this.t + c;
    b.s = this.s
}
function bnpInvDigit() {
    if (this.t < 1) {
        return 0
    }
    var a = this[0];
    if ((a & 1) == 0) {
        return 0
    }
    var b = a & 3;
    b = (b * (2 - (a & 15) * b)) & 15;
    b = (b * (2 - (a & 255) * b)) & 255;
    b = (b * (2 - (((a & 65535) * b) & 65535))) & 65535;
    b = (b * (2 - a * b % this.DV)) % this.DV;
    return (b > 0) ? this.DV - b : -b
}
function nbi() {
    return new BigInteger(null)
}
function nbv(a) {
    var b = nbi();
    b.fromInt(a);
    return b
}
function bnCompareTo(b) {
    var d = this.s - b.s;
    if (d != 0) {
        return d
    }
    var c = this.t;
    d = c - b.t;
    if (d != 0) {
        return (this.s < 0) ? -d : d
    }
    while (--c >= 0) {
        if ((d = this[c] - b[c]) != 0) {
            return d
        }
    }
    return 0
}

function bnpSquareTo(d) {
    var a = this.abs();
    var b = d.t = 2 * a.t;
    while (--b >= 0) {
        d[b] = 0
    }
    for (b = 0; b < a.t - 1; ++b) {
        var e = a.am(b, a[b], d, 2 * b, 0, 1);
        if ((d[b + a.t] += a.am(b + 1, 2 * a[b], d, 2 * b + 1, e, a.t - b - 1)) >= a.DV) {
            d[b + a.t] -= a.DV;
            d[b + a.t + 1] = 1
        }
    }
    if (d.t > 0) {
        d[d.t - 1] += a.am(b, a[b], d, 2 * b, 0, 1)
    }
    d.s = 0;
    d.clamp()
}


Montgomery.prototype.sqrTo = montSqrTo;
function Montgomery(a) {
    this.m = a;
    this.mp = a.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << (a.DB - 15)) - 1;
    this.mt2 = 2 * a.t
}
function montSqrTo(a, b) {
    a.squareTo(b);
    this.reduce(b)
}
function bnAbs() {
    return (this.s < 0) ? this.negate() : this
}
function bnpDLShiftTo(c, b) {
    var a;
    for (a = this.t - 1; a >= 0; --a) {
        b[a + c] = this[a]
    }
    for (a = c - 1; a >= 0; --a) {
        b[a] = 0
    }
    b.t = this.t + c;
    b.s = this.s
}
function bnpDivRemTo(n, h, g) {
    var w = n.abs();
    if (w.t <= 0) {
        return
    }
    var k = this.abs();
    if (k.t < w.t) {
        if (h != null) {
            h.fromInt(0)
        }
        if (g != null) {
            this.copyTo(g)
        }
        return
    }
    if (g == null) {
        g = nbi()
    }
    var d = nbi()
        , a = this.s
        , l = n.s;
    var v = this.DB - nbits(w[w.t - 1]);
    if (v > 0) {
        w.lShiftTo(v, d);
        k.lShiftTo(v, g)
    } else {
        w.copyTo(d);
        k.copyTo(g)
    }
    var p = d.t;
    var b = d[p - 1];
    if (b == 0) {
        return
    }
    var o = b * (1 << this.F1) + ((p > 1) ? d[p - 2] >> this.F2 : 0);
    var A = this.FV / o
        , z = (1 << this.F1) / o
        , x = 1 << this.F2;
    var u = g.t
        , s = u - p
        , f = (h == null) ? nbi() : h;
    d.dlShiftTo(s, f);
    if (g.compareTo(f) >= 0) {
        g[g.t++] = 1;
        g.subTo(f, g)
    }
    BigInteger.ONE.dlShiftTo(p, f);
    f.subTo(d, d);
    while (d.t < p) {
        d[d.t++] = 0
    }
    while (--s >= 0) {
        var c = (g[--u] == b) ? this.DM : Math.floor(g[u] * A + (g[u - 1] + x) * z);
        if ((g[u] += d.am(0, c, g, s, 0, p)) < c) {
            d.dlShiftTo(s, f);
            g.subTo(f, g);
            while (g[u] < --c) {
                g.subTo(f, g)
            }
        }
    }
    if (h != null) {
        g.drShiftTo(p, h);
        if (a != l) {
            BigInteger.ZERO.subTo(h, h)
        }
    }
    g.t = p;
    g.clamp();
    if (v > 0) {
        g.rShiftTo(v, g)
    }
    if (a < 0) {
        BigInteger.ZERO.subTo(g, g)
    }
}
function montMulTo(a, c, b) {
    a.multiplyTo(c, b);
    this.reduce(b)
}
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.revert = montRevert;
function montConvert(a) {
    var b = nbi();
    a.abs().dlShiftTo(this.m.t, b);
    b.divRemTo(this.m, null, b);
    if (a.s < 0 && b.compareTo(BigInteger.ZERO) > 0) {
        this.m.subTo(b, b)
    }
    return b
}
function montReduce(a) {
    while (a.t <= this.mt2) {
        a[a.t++] = 0
    }
    for (var c = 0; c < this.m.t; ++c) {
        var b = a[c] & 32767;
        var d = (b * this.mpl + (((b * this.mph + (a[c] >> 15) * this.mpl) & this.um) << 15)) & a.DM;
        b = c + this.m.t;
        a[b] += this.m.am(0, d, a, c, 0, this.m.t);
        while (a[b] >= a.DV) {
            a[b] -= a.DV;
            a[++b]++
        }
    }
    a.clamp();
    a.drShiftTo(this.m.t, a);
    if (a.compareTo(this.m) >= 0) {
        a.subTo(this.m, a)
    }
}
function montRevert(a) {
    var b = nbi();
    a.copyTo(b);
    this.reduce(b);
    return b
}
function bnpIsEven() {
    return ((this.t > 0) ? (this[0] & 1) : this.s) == 0
}

function bnpExp(h, j) {
    if (h > 4294967295 || h < 1) {
        return BigInteger.ONE
    }
    var f = nbi()
        , a = nbi()
        , d = j.convert(this)
        , c = nbits(h) - 1;
    d.copyTo(f);
    while (--c >= 0) {
        j.sqrTo(f, a);
        if ((h & (1 << c)) > 0) {
            j.mulTo(a, d, f)
        } else {
            var b = f;
            f = a;
            a = b
        }
    }
    return j.revert(f)
}
function bnpRShiftTo(g, d) {
    d.s = this.s;
    var e = Math.floor(g / this.DB);
    if (e >= this.t) {
        d.t = 0;
        return
    }
    var b = g % this.DB;
    var a = this.DB - b;
    var f = (1 << b) - 1;
    d[0] = this[e] >> b;
    for (var c = e + 1; c < this.t; ++c) {
        d[c - e - 1] |= (this[c] & f) << a;
        d[c - e] = this[c] >> b
    }
    if (b > 0) {
        d[this.t - e - 1] |= (this.s & f) << a
    }
    d.t = this.t - e;
    d.clamp()
}
function bnModPowInt(b, a) {
    var c;
    if (b < 256 || a.isEven()) {
        c = new Classic(a)
    } else {
        c = new Montgomery(a)
    }
    return this.exp(b, c)
}

function bnBitLength() {
    if (this.t <= 0) {
        return 0
    }
    return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM))
}

function nbits(a) {
    var c = 1, b;
    if ((b = a >>> 16) != 0) {
        a = b;
        c += 16
    }
    if ((b = a >> 8) != 0) {
        a = b;
        c += 8
    }
    if ((b = a >> 4) != 0) {
        a = b;
        c += 4
    }
    if ((b = a >> 2) != 0) {
        a = b;
        c += 2
    }
    if ((b = a >> 1) != 0) {
        a = b;
        c += 1
    }
    return c
}
function am3(f, q, r, e, o, a) {
    var k = q & 16383
        , p = q >> 14;
    while (--a >= 0) {
        var d = this[f] & 16383;
        var g = this[f++] >> 14;
        var b = p * d + g * k;
        d = k * d + ((b & 16383) << 14) + r[e] + o;
        o = (d >> 28) + (b >> 14) + p * g;
        r[e++] = d & 268435455
    }
    return o
}
function RSAKey() {
    this.n = null;
    this.e = 0;
    this.d = null;
    this.p = null;
    this.q = null;
    this.dmp1 = null;
    this.dmq1 = null;
    this.coeff = null
}

function bnpClamp() {
    var a = this.s & this.DM;
    while (this.t > 0 && this[this.t - 1] == a) {
        --this.t
    }
}
function pkcs1pad2(c, g) {
    if (g < c.length + 11) {
        alert("Message too long for RSA");
        return null
    }
    var f = new Array();
    var e = c.length - 1;
    while (e >= 0 && g > 0) {
        f[--g] = c[e--]
    }
    f[--g] = 0;
    var d = new SecureRandom();
    var a = new Array();
    while (g > 2) {
        a[0] = 0;
        while (a[0] == 0) {
            d.nextBytes(a)
        }
        f[--g] = a[0]
    }
    f[--g] = 2;
    f[--g] = 0;
    return new BigInteger(f)
}
function bnNegate() {
    var a = nbi();
    BigInteger.ZERO.subTo(this, a);
    return a
}
function int2char(a) {
    return BI_RM.charAt(a)
}
function bnToString(c) {
    if (this.s < 0) {
        return "-" + this.negate().toString(c)
    }
    var e;
    if (c == 16) {
        e = 4
    } else {
        if (c == 8) {
            e = 3
        } else {
            if (c == 2) {
                e = 1
            } else {
                if (c == 32) {
                    e = 5
                } else {
                    if (c == 4) {
                        e = 2
                    } else {
                        return this.toRadix(c)
                    }
                }
            }
        }
    }
    var g = (1 << e) - 1, l, a = false, h = "", f = this.t;
    var j = this.DB - (f * this.DB) % e;
    if (f-- > 0) {
        if (j < this.DB && (l = this[f] >> j) > 0) {
            a = true;
            h = int2char(l)
        }
        while (f >= 0) {
            if (j < e) {
                l = (this[f] & ((1 << j) - 1)) << (e - j);
                l |= this[--f] >> (j += this.DB - e)
            } else {
                l = (this[f] >> (j -= e)) & g;
                if (j <= 0) {
                    j += this.DB;
                    --f
                }
            }
            if (l > 0) {
                a = true
            }
            if (a) {
                h += int2char(l)
            }
        }
    }
    return a ? h : "0"
}
function RSADoPublic(a) {
    return a.modPowInt(this.e, this.n)
}
function RSAEncrypt(b) {
    var a = pkcs1pad2(b, (this.n.bitLength() + 7) >> 3);
    if (a == null) {
        return null
    }
    var e = this.doPublic(a);
    if (e == null) {
        return null
    }
    var d = e.toString(16);
    if ((d.length & 1) == 0) {
        return d
    } else {
        return "0" + d
    }
}

var rng_psize = 256;
var rng_state;
var rng_pool;
var rng_pptr;
if (rng_pool == null) {
    rng_pool = [];
    rng_pptr = 0;
    var t;
    try {
        var getRandomValuesLib = require('get-random-values');

        var ua = new Uint8Array(32);
        getRandomValuesLib(ua);
        for (t = 0; t < 32; ++t) {
            rng_pool[rng_pptr++] = ua[t]
        }
    } catch (e) { console.log(e) }
    while (rng_pptr < rng_psize) {
        t = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = t >>> 8;
        rng_pool[rng_pptr++] = t & 255
    }
    rng_pptr = 0;
    rng_seed_time()
}
function rng_seed_int(a) {
    rng_pool[rng_pptr++] ^= a & 255;
    rng_pool[rng_pptr++] ^= (a >> 8) & 255;
    rng_pool[rng_pptr++] ^= (a >> 16) & 255;
    rng_pool[rng_pptr++] ^= (a >> 24) & 255;
    if (rng_pptr >= rng_psize) {
        rng_pptr -= rng_psize
    }
}



function Arcfour() {
    this.i = 0;
    this.j = 0;
    this.S = new Array
}
function ARC4init(c) {
    var a, d, b;
    for (a = 0; a < 256; ++a) {
        this.S[a] = a
    }
    d = 0;
    for (a = 0; a < 256; ++a) {
        d = d + this.S[a] + c[a % c.length] & 255;
        b = this.S[a];
        this.S[a] = this.S[d];
        this.S[d] = b
    }
    this.i = 0;
    this.j = 0
}
function ARC4next() {
    var a;
    this.i = this.i + 1 & 255;
    this.j = this.j + this.S[this.i] & 255;
    a = this.S[this.i];
    this.S[this.i] = this.S[this.j];
    this.S[this.j] = a;
    return this.S[a + this.S[this.i] & 255]
}
function prng_newstate() {
    return new Arcfour
}
Arcfour.prototype.init = ARC4init;
Arcfour.prototype.next = ARC4next;

function prng_newstate() {
    return new Arcfour
}
function RSASetPublic(b, a) {
    if (b != null && a != null && b.length > 0 && a.length > 0) {
        this.n = parseBigInt(b, 16);
        this.e = parseInt(a, 16)
    } else {
        alert("Invalid RSA public key")
    }
}
var rng_state;
function SecureRandom() { }
function rng_seed_time() {
    rng_seed_int(new Date().getTime())
}
function rng_get_byte() {
    if (rng_state == null) {
        rng_seed_time();
        rng_state = prng_newstate();
        rng_state.init(rng_pool);
        for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
            rng_pool[rng_pptr] = 0
        }
        rng_pptr = 0
    }
    return rng_state.next()
}
SecureRandom.prototype.nextBytes = rng_get_bytes;
function rng_get_bytes(b) {
    var a;
    for (a = 0; a < b.length; ++a) {
        b[a] = rng_get_byte()
    }
}
function parseBigInt(b, a) {
    return new BigInteger(b, a)
}
var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var b64padchar = "=";
function hex2b64(d) {
    var b;
    var e;
    var a = "";
    for (b = 0; b + 3 <= d.length; b += 3) {
        e = parseInt(d.substring(b, b + 3), 16);
        a += b64map.charAt(e >> 6) + b64map.charAt(e & 63)
    }
    if (b + 1 == d.length) {
        e = parseInt(d.substring(b, b + 1), 16);
        a += b64map.charAt(e << 2)
    } else {
        if (b + 2 == d.length) {
            e = parseInt(d.substring(b, b + 2), 16);
            a += b64map.charAt(e >> 2) + b64map.charAt((e & 3) << 4)
        }
    }
    while ((a.length & 3) > 0) {
        a += b64padchar
    }
    return a
}
function RSAEncryptB64(a) {
    var b = this.encrypt(a);
    if (b) {
        return hex2b64(b)
    } else {
        return null
    }
}
var sjcl = {
    cipher: {},
    hash: {},
    keyexchange: {},
    mode: {},
    misc: {},
    codec: {},
    exception: {
        corrupt: function (b) {
            this.toString = function () {
                return "CORRUPT: " + this.message
            }
                ;
            this.message = b
        },
        invalid: function (b) {
            this.toString = function () {
                return "INVALID: " + this.message
            }
                ;
            this.message = b
        },
        bug: function (b) {
            this.toString = function () {
                return "BUG: " + this.message
            }
                ;
            this.message = b
        },
        notReady: function (b) {
            this.toString = function () {
                return "NOT READY: " + this.message
            }
                ;
            this.message = b
        }
    }
};



(function (a) {
    var b = a.codec.bytes = a.codec.bytes || {};
    b.fromBits = b.fromBits || function (c) {
        var d = [], g = a.bitArray.bitLength(c), f, e;
        for (f = 0; f < g / 8; f++) {
            if ((f & 3) === 0) {
                e = c[f / 4]
            }
            d.push(e >>> 24);
            e <<= 8
        }
        return d
    }
        ;
    b.toBits = b.toBits || function (c) {
        var d = [], f, e = 0;
        for (f = 0; f < c.length; f++) {
            e = e << 8 | c[f];
            if ((f & 3) === 3) {
                d.push(e);
                e = 0
            }
        }
        if (f & 3) {
            d.push(a.bitArray.partial(8 * (f & 3), e))
        }
        return d
    }
}(sjcl));
sjcl.cipher.aes = function (j) {
    this.k[0][0][0] || this.D();
    var i, p, o, n, m = this.k[0][4], l = this.k[1];
    i = j.length;
    var k = 1;
    4 !== i && (6 !== i && 8 !== i) && q(new sjcl.exception.invalid("invalid aes key size"));
    this.b = [o = j.slice(0), n = []];
    for (j = i; j < 4 * i + 28; j++) {
        p = o[j - 1];
        if (0 === j % i || 8 === i && 4 === j % i) {
            p = m[p >>> 24] << 24 ^ m[p >> 16 & 255] << 16 ^ m[p >> 8 & 255] << 8 ^ m[p & 255],
                0 === j % i && (p = p << 8 ^ p >>> 24 ^ k << 24,
                    k = k << 1 ^ 283 * (k >> 7))
        }
        o[j] = o[j - i] ^ p
    }
    for (i = 0; j; i++,
        j--) {
        p = o[i & 3 ? j : j - 4],
            n[i] = 4 >= j || 4 > i ? p : l[0][m[p >>> 24]] ^ l[1][m[p >> 16 & 255]] ^ l[2][m[p >> 8 & 255]] ^ l[3][m[p & 255]]
    }
}
sjcl.cipher.aes.prototype = {
    encrypt: function (b) {
        return y(this, b, 0)
    },
    decrypt: function (b) {
        return y(this, b, 1)
    },
    k: [[[], [], [], [], []], [[], [], [], [], []]],
    D: function () {
        var R = this.k[0], Q = this.k[1], P = R[4], O = Q[4], N, x, w, v = [], r = [], s, j, o, i;
        for (N = 0; 256 > N; N++) {
            r[(v[N] = N << 1 ^ 283 * (N >> 7)) ^ N] = N
        }
        for (x = w = 0; !P[x]; x ^= s || 1,
            w = r[w] || 1) {
            o = w ^ w << 1 ^ w << 2 ^ w << 3 ^ w << 4;
            o = o >> 8 ^ o & 255 ^ 99;
            P[x] = o;
            O[o] = x;
            j = v[N = v[s = v[x]]];
            i = 16843009 * j ^ 65537 * N ^ 257 * s ^ 16843008 * x;
            j = 257 * v[o] ^ 16843008 * o;
            for (N = 0; 4 > N; N++) {
                R[N][x] = j = j << 24 ^ j >>> 8,
                    Q[N][o] = i = i << 24 ^ i >>> 8
            }
        }
        for (N = 0; 5 > N; N++) {
            R[N] = R[N].slice(0),
                Q[N] = Q[N].slice(0)
        }
    }
};
function y(ab, aa, Z) {
    4 !== aa.length && q(new sjcl.exception.invalid("invalid aes block size"));
    var Y = ab.b[Z]
        , X = aa[0] ^ Y[0]
        , W = aa[Z ? 3 : 1] ^ Y[1]
        , V = aa[2] ^ Y[2];
    aa = aa[Z ? 1 : 3] ^ Y[3];
    var U, S, T, Q = Y.length / 4 - 2, R, P = 4, N = [0, 0, 0, 0];
    U = ab.k[Z];
    ab = U[0];
    var O = U[1]
        , o = U[2]
        , j = U[3]
        , i = U[4];
    for (R = 0; R < Q; R++) {
        U = ab[X >>> 24] ^ O[W >> 16 & 255] ^ o[V >> 8 & 255] ^ j[aa & 255] ^ Y[P],
            S = ab[W >>> 24] ^ O[V >> 16 & 255] ^ o[aa >> 8 & 255] ^ j[X & 255] ^ Y[P + 1],
            T = ab[V >>> 24] ^ O[aa >> 16 & 255] ^ o[X >> 8 & 255] ^ j[W & 255] ^ Y[P + 2],
            aa = ab[aa >>> 24] ^ O[X >> 16 & 255] ^ o[W >> 8 & 255] ^ j[V & 255] ^ Y[P + 3],
            P += 4,
            X = U,
            W = S,
            V = T
    }
    for (R = 0; 4 > R; R++) {
        N[Z ? 3 & -R : R] = i[X >>> 24] << 24 ^ i[W >> 16 & 255] << 16 ^ i[V >> 8 & 255] << 8 ^ i[aa & 255] ^ Y[P++],
            U = X,
            X = W,
            W = V,
            V = aa,
            aa = U
    }
    return N
}
sjcl.bitArray = {
    bitSlice: function (e, d, f) {
        e = sjcl.bitArray.P(e.slice(d / 32), 32 - (d & 31)).slice(1);
        return f === t ? e : sjcl.bitArray.clamp(e, f - d)
    },
    extract: function (f, e, h) {
        var g = Math.floor(-e - h & 31);
        return ((e + h - 1 ^ e) & -32 ? f[e / 32 | 0] << 32 - g ^ f[e / 32 + 1 | 0] >>> g : f[e / 32 | 0] >>> g) & (1 << h) - 1
    },
    concat: function (f, e) {
        if (0 === f.length || 0 === e.length) {
            return f.concat(e)
        }
        var h = f[f.length - 1]
            , g = sjcl.bitArray.getPartial(h);
        return 32 === g ? f.concat(e) : sjcl.bitArray.P(e, g, h | 0, f.slice(0, f.length - 1))
    },
    bitLength: function (d) {
        var c = d.length;
        return 0 === c ? 0 : 32 * (c - 1) + sjcl.bitArray.getPartial(d[c - 1])
    },
    clamp: function (e, d) {
        if (32 * e.length < d) {
            return e
        }
        e = e.slice(0, Math.ceil(d / 32));
        var f = e.length;
        d &= 31;
        0 < f && d && (e[f - 1] = sjcl.bitArray.partial(d, e[f - 1] & 2147483648 >> d - 1, 1));
        return e
    },
    partial: function (e, d, f) {
        return 32 === e ? d : (f ? d | 0 : d << 32 - e) + 1099511627776 * e
    },
    getPartial: function (b) {
        return Math.round(b / 1099511627776) || 32
    },
    equal: function (f, e) {
        if (sjcl.bitArray.bitLength(f) !== sjcl.bitArray.bitLength(e)) {
            return u
        }
        var h = 0, g;
        for (g = 0; g < f.length; g++) {
            h |= f[g] ^ e[g]
        }
        return 0 === h
    },
    P: function (g, f, j, i) {
        var h;
        h = 0;
        var xd = typeof t;
        var doIt = false;
        if (typeof i == 'undefined')
            doIt = true;

        for (doIt && (i = []); 32 <= f; f -= 32) {
            i.push(j),
                j = 0
        }
        if (0 === f) {
            return i.concat(g)
        }
        for (h = 0; h < g.length; h++) {
            i.push(j | g[h] >>> f),
                j = g[h] << 32 - f
        }
        h = g.length ? g[g.length - 1] : 0;
        g = sjcl.bitArray.getPartial(h);
        i.push(sjcl.bitArray.partial(f + g & 31, 32 < f + g ? j : i.pop(), 1));

        t = undefined;
        return i
    },
    l: function (d, c) {
        return [d[0] ^ c[0], d[1] ^ c[1], d[2] ^ c[2], d[3] ^ c[3]]
    },
    byteswapM: function (e) {
        var d, f;
        for (d = 0; d < e.length; ++d) {
            f = e[d],
                e[d] = f >>> 24 | f >>> 8 & 65280 | (f & 65280) << 8 | f << 24
        }
        return e
    }
};
sjcl.codec.utf8String = {
    fromBits: function (g) {
        var f = "", j = sjcl.bitArray.bitLength(g), i, h;
        for (i = 0; i < j / 8; i++) {
            0 === (i & 3) && (h = g[i / 4]),
                f += String.fromCharCode(h >>> 24),
                h <<= 8
        }
        return decodeURIComponent(escape(f))
    },
    toBits: function (f) {
        f = unescape(encodeURIComponent(f));
        var e = [], h, g = 0;
        for (h = 0; h < f.length; h++) {
            g = g << 8 | f.charCodeAt(h),
                3 === (h & 3) && (e.push(g),
                    g = 0)
        }
        h & 3 && e.push(sjcl.bitArray.partial(8 * (h & 3), g));
        return e
    }
};
sjcl.codec.hex = {
    fromBits: function (e) {
        var d = "", f;
        for (f = 0; f < e.length; f++) {
            d += ((e[f] | 0) + 263882790666240).toString(16).substr(4)
        }
        return d.substr(0, sjcl.bitArray.bitLength(e) / 4)
    },
    toBits: function (f) {
        var e, h = [], g;
        f = f.replace(/\s|0x/g, "");
        g = f.length;
        f += "00000000";
        for (e = 0; e < f.length; e += 8) {
            h.push(parseInt(f.substr(e, 8), 16) ^ 0)
        }
        return sjcl.bitArray.clamp(h, 4 * g)
    }
};
sjcl.codec.base64 = {
    J: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function (j, i, p) {
        var o = ""
            , n = 0
            , m = sjcl.codec.base64.J
            , l = 0
            , k = sjcl.bitArray.bitLength(j);
        p && (m = m.substr(0, 62) + "-_");
        for (p = 0; 6 * o.length < k;) {
            o += m.charAt((l ^ j[p] >>> n) >>> 26),
                6 > n ? (l = j[p] << 6 - n,
                    n += 26,
                    p++) : (l <<= 6,
                        n -= 6)
        }
        for (; o.length & 3 && !i;) {
            o += "="
        }
        return o
    },
    toBits: function (j, i) {
        j = j.replace(/\s|=/g, "");
        var p = [], o, n = 0, m = sjcl.codec.base64.J, l = 0, k;
        i && (m = m.substr(0, 62) + "-_");
        for (o = 0; o < j.length; o++) {
            k = m.indexOf(j.charAt(o)),
                0 > k && q(new sjcl.exception.invalid("this isn't base64!")),
                26 < n ? (n -= 26,
                    p.push(l ^ k >>> n),
                    l = k << 32 - n) : (n += 6,
                        l ^= k << 32 - n)
        }
        n & 56 && p.push(sjcl.bitArray.partial(n & 56, l, 1));
        return p
    }
};
sjcl.codec.base64url = {
    fromBits: function (b) {
        return sjcl.codec.base64.fromBits(b, 1, 1)
    },
    toBits: function (b) {
        return sjcl.codec.base64.toBits(b, 1)
    }
};
sjcl.hash.sha256 = function (b) {
    this.b[0] || this.D();
    b ? (this.r = b.r.slice(0),
        this.o = b.o.slice(0),
        this.h = b.h) : this.reset()
}
    ;
sjcl.hash.sha256.hash = function (b) {
    return (new sjcl.hash.sha256).update(b).finalize()
}
    ;
sjcl.hash.sha256.prototype = {
    blockSize: 512,
    reset: function () {
        this.r = this.N.slice(0);
        this.o = [];
        this.h = 0;
        return this
    },
    update: function (e) {
        "string" === typeof e && (e = sjcl.codec.utf8String.toBits(e));
        var d, f = this.o = sjcl.bitArray.concat(this.o, e);
        d = this.h;
        e = this.h = d + sjcl.bitArray.bitLength(e);
        for (d = 512 + d & -512; d <= e; d += 512) {
            z(this, f.splice(0, 16))
        }
        return this
    },
    finalize: function () {
        var e, d = this.o, f = this.r, d = sjcl.bitArray.concat(d, [sjcl.bitArray.partial(1, 1)]);
        for (e = d.length + 2; e & 15; e++) {
            d.push(0)
        }
        d.push(Math.floor(this.h / 4294967296));
        for (d.push(this.h | 0); d.length;) {
            z(this, d.splice(0, 16))
        }
        this.reset();
        return f
    },
    N: [],
    b: [],
    D: function () {
        function f(b) {
            return 4294967296 * (b - Math.floor(b)) | 0
        }
        var e = 0, h = 2, g;
        f: for (; 64 > e; h++) {
            for (g = 2; g * g <= h; g++) {
                if (0 === h % g) {
                    continue f
                }
            }
            8 > e && (this.N[e] = f(Math.pow(h, 0.5)));
            this.b[e] = f(Math.pow(h, 1 / 3));
            e++
        }
    }
};
function z(V, U) {
    var T, S, R, Q = U.slice(0), P = V.r, O = V.b, x = P[0], N = P[1], o = P[2], w = P[3], j = P[4], X = P[5], i = P[6], W = P[7];
    for (T = 0; 64 > T; T++) {
        16 > T ? S = Q[T] : (S = Q[T + 1 & 15],
            R = Q[T + 14 & 15],
            S = Q[T & 15] = (S >>> 7 ^ S >>> 18 ^ S >>> 3 ^ S << 25 ^ S << 14) + (R >>> 17 ^ R >>> 19 ^ R >>> 10 ^ R << 15 ^ R << 13) + Q[T & 15] + Q[T + 9 & 15] | 0),
            S = S + W + (j >>> 6 ^ j >>> 11 ^ j >>> 25 ^ j << 26 ^ j << 21 ^ j << 7) + (i ^ j & (X ^ i)) + O[T],
            W = i,
            i = X,
            X = j,
            j = w + S | 0,
            w = o,
            o = N,
            N = x,
            x = S + (N & o ^ w & (N ^ o)) + (N >>> 2 ^ N >>> 13 ^ N >>> 22 ^ N << 30 ^ N << 19 ^ N << 10) | 0
    }
    P[0] = P[0] + x | 0;
    P[1] = P[1] + N | 0;
    P[2] = P[2] + o | 0;
    P[3] = P[3] + w | 0;
    P[4] = P[4] + j | 0;
    P[5] = P[5] + X | 0;
    P[6] = P[6] + i | 0;
    P[7] = P[7] + W | 0
}
sjcl.mode.ccm = {
    name: "ccm",
    encrypt: function (w, v, s, r, p) {
        var o, n = v.slice(0), m = sjcl.bitArray, i = m.bitLength(s) / 8, j = m.bitLength(n) / 8;
        p = p || 64;
        r = r || [];
        7 > i && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));
        for (o = 2; 4 > o && j >>> 8 * o; o++) { }
        o < 15 - i && (o = 15 - i);
        s = m.clamp(s, 8 * (15 - o));
        v = sjcl.mode.ccm.L(w, v, s, r, p, o);
        n = sjcl.mode.ccm.p(w, n, s, v, p, o);
        return m.concat(n.data, n.tag)
    },
    decrypt: function (w, v, s, r, p) {
        p = p || 64;
        r = r || [];
        var o = sjcl.bitArray
            , n = o.bitLength(s) / 8
            , m = o.bitLength(v)
            , i = o.clamp(v, m - p)
            , j = o.bitSlice(v, m - p)
            , m = (m - p) / 8;
        7 > n && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes"));
        for (v = 2; 4 > v && m >>> 8 * v; v++) { }
        v < 15 - n && (v = 15 - n);
        s = o.clamp(s, 8 * (15 - v));
        i = sjcl.mode.ccm.p(w, i, s, j, p, v);
        w = sjcl.mode.ccm.L(w, i.data, s, r, p, v);
        o.equal(i.tag, w) || q(new sjcl.exception.corrupt("ccm: tag doesn't match"));
        return i.data
    },
    L: function (s, r, p, o, n, m) {
        var k = []
            , j = sjcl.bitArray
            , i = j.l;
        n /= 8;
        (n % 2 || 4 > n || 16 < n) && q(new sjcl.exception.invalid("ccm: invalid tag length"));
        (4294967295 < o.length || 4294967295 < r.length) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data"));
        m = [j.partial(8, (o.length ? 64 : 0) | n - 2 << 2 | m - 1)];
        m = j.concat(m, p);
        m[3] |= j.bitLength(r) / 8;
        m = s.encrypt(m);
        if (o.length) {
            p = j.bitLength(o) / 8;
            65279 >= p ? k = [j.partial(16, p)] : 4294967295 >= p && (k = j.concat([j.partial(16, 65534)], [p]));
            k = j.concat(k, o);
            for (o = 0; o < k.length; o += 4) {
                m = s.encrypt(i(m, k.slice(o, o + 4).concat([0, 0, 0])))
            }
        }
        for (o = 0; o < r.length; o += 4) {
            m = s.encrypt(i(m, r.slice(o, o + 4).concat([0, 0, 0])))
        }
        return j.clamp(m, 8 * n)
    },
    p: function (w, v, s, r, p, o) {
        var n, m = sjcl.bitArray;
        n = m.l;
        var i = v.length
            , j = m.bitLength(v);
        s = m.concat([m.partial(8, o - 1)], s).concat([0, 0, 0]).slice(0, 4);
        r = m.bitSlice(n(r, w.encrypt(s)), 0, p);
        if (!i) {
            return {
                tag: r,
                data: []
            }
        }
        for (n = 0; n < i; n += 4) {
            s[3]++,
                p = w.encrypt(s),
                v[n] ^= p[0],
                v[n + 1] ^= p[1],
                v[n + 2] ^= p[2],
                v[n + 3] ^= p[3]
        }
        return {
            tag: r,
            data: m.clamp(v, j)
        }
    }
};
sjcl.mode.ocb2 = {
    name: "ocb2",
    encrypt: function (R, Q, P, O, N, x) {
        128 !== sjcl.bitArray.bitLength(P) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        var w, v = sjcl.mode.ocb2.H, r = sjcl.bitArray, s = r.l, j = [0, 0, 0, 0];
        P = v(R.encrypt(P));
        var o, i = [];
        O = O || [];
        N = N || 64;
        for (w = 0; w + 4 < Q.length; w += 4) {
            o = Q.slice(w, w + 4),
                j = s(j, o),
                i = i.concat(s(P, R.encrypt(s(P, o)))),
                P = v(P)
        }
        o = Q.slice(w);
        Q = r.bitLength(o);
        w = R.encrypt(s(P, [0, 0, 0, Q]));
        o = r.clamp(s(o.concat([0, 0, 0]), w), Q);
        j = s(j, s(o.concat([0, 0, 0]), w));
        j = R.encrypt(s(j, s(P, v(P))));
        O.length && (j = s(j, x ? O : sjcl.mode.ocb2.pmac(R, O)));
        return i.concat(r.concat(o, r.clamp(j, N)))
    },
    decrypt: function (U, T, S, R, Q, P) {
        128 !== sjcl.bitArray.bitLength(S) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        Q = Q || 64;
        var O = sjcl.mode.ocb2.H, N = sjcl.bitArray, w = N.l, x = [0, 0, 0, 0], o = O(U.encrypt(S)), v, j, V = sjcl.bitArray.bitLength(T) - Q, i = [];
        R = R || [];
        for (S = 0; S + 4 < V / 32; S += 4) {
            v = w(o, U.decrypt(w(o, T.slice(S, S + 4)))),
                x = w(x, v),
                i = i.concat(v),
                o = O(o)
        }
        j = V - 32 * S;
        v = U.encrypt(w(o, [0, 0, 0, j]));
        v = w(v, N.clamp(T.slice(S), j).concat([0, 0, 0]));
        x = w(x, v);
        x = U.encrypt(w(x, w(o, O(o))));
        R.length && (x = w(x, P ? R : sjcl.mode.ocb2.pmac(U, R)));
        N.equal(N.clamp(x, Q), N.bitSlice(T, V)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match"));
        return i.concat(N.clamp(v, j))
    },
    pmac: function (j, i) {
        var p, o = sjcl.mode.ocb2.H, n = sjcl.bitArray, m = n.l, l = [0, 0, 0, 0], k = j.encrypt([0, 0, 0, 0]), k = m(k, o(o(k)));
        for (p = 0; p + 4 < i.length; p += 4) {
            k = o(k),
                l = m(l, j.encrypt(m(k, i.slice(p, p + 4))))
        }
        p = i.slice(p);
        128 > n.bitLength(p) && (k = m(k, o(k)),
            p = n.concat(p, [-2147483648, 0, 0, 0]));
        l = m(l, p);
        return j.encrypt(m(o(m(k, o(k))), l))
    },
    H: function (b) {
        return [b[0] << 1 ^ b[1] >>> 31, b[1] << 1 ^ b[2] >>> 31, b[2] << 1 ^ b[3] >>> 31, b[3] << 1 ^ 135 * (b[0] >>> 31)]
    }
};
sjcl.mode.gcm = {
    name: "gcm",
    encrypt: function (h, g, l, k, j) {
        var i = g.slice(0);
        g = sjcl.bitArray;
        k = k || [];
        h = sjcl.mode.gcm.p(!0, h, i, k, l, j || 128);
        return g.concat(h.data, h.tag)
    },
    decrypt: function (j, i, p, o, n) {
        var m = i.slice(0)
            , l = sjcl.bitArray
            , k = l.bitLength(m);
        n = n || 128;
        o = o || [];
        n <= k ? (i = l.bitSlice(m, k - n),
            m = l.bitSlice(m, 0, k - n)) : (i = m,
                m = []);
        j = sjcl.mode.gcm.p(u, j, m, o, p, n);
        l.equal(j.tag, i) || q(new sjcl.exception.corrupt("gcm: tag doesn't match"));
        return j.data
    },
    Z: function (j, i) {
        var p, o, n, m, l, k = sjcl.bitArray.l;
        n = [0, 0, 0, 0];
        m = i.slice(0);
        for (p = 0; 128 > p; p++) {
            (o = 0 !== (j[Math.floor(p / 32)] & 1 << 31 - p % 32)) && (n = k(n, m));
            l = 0 !== (m[3] & 1);
            for (o = 3; 0 < o; o--) {
                m[o] = m[o] >>> 1 | (m[o - 1] & 1) << 31
            }
            m[0] >>>= 1;
            l && (m[0] ^= -520093696)
        }
        return n
    },
    g: function (g, f, j) {
        var i, h = j.length;
        f = f.slice(0);
        for (i = 0; i < h; i += 4) {
            f[0] ^= 4294967295 & j[i],
                f[1] ^= 4294967295 & j[i + 1],
                f[2] ^= 4294967295 & j[i + 2],
                f[3] ^= 4294967295 & j[i + 3],
                f = sjcl.mode.gcm.Z(f, g)
        }
        return f
    },
    p: function (U, T, S, R, Q, P) {
        var O, N, w, x, o, v, j, V, i = sjcl.bitArray;
        v = S.length;
        j = i.bitLength(S);
        V = i.bitLength(R);
        N = i.bitLength(Q);
        O = T.encrypt([0, 0, 0, 0]);
        96 === N ? (Q = Q.slice(0),
            Q = i.concat(Q, [1])) : (Q = sjcl.mode.gcm.g(O, [0, 0, 0, 0], Q),
                Q = sjcl.mode.gcm.g(O, Q, [0, 0, Math.floor(N / 4294967296), N & 4294967295]));
        N = sjcl.mode.gcm.g(O, [0, 0, 0, 0], R);
        o = Q.slice(0);
        R = N.slice(0);
        U || (R = sjcl.mode.gcm.g(O, N, S));
        for (x = 0; x < v; x += 4) {
            o[3]++,
                w = T.encrypt(o),
                S[x] ^= w[0],
                S[x + 1] ^= w[1],
                S[x + 2] ^= w[2],
                S[x + 3] ^= w[3]
        }
        S = i.clamp(S, j);
        U && (R = sjcl.mode.gcm.g(O, N, S));
        U = [Math.floor(V / 4294967296), V & 4294967295, Math.floor(j / 4294967296), j & 4294967295];
        R = sjcl.mode.gcm.g(O, R, U);
        w = T.encrypt(Q);
        R[0] ^= w[0];
        R[1] ^= w[1];
        R[2] ^= w[2];
        R[3] ^= w[3];
        return {
            tag: i.bitSlice(R, 0, P),
            data: S
        }
    }
};
sjcl.misc.hmac = function (g, f) {
    this.M = f = f || sjcl.hash.sha256;
    var j = [[], []], i, h = f.prototype.blockSize / 32;
    this.n = [new f, new f];
    g.length > h && (g = f.hash(g));
    for (i = 0; i < h; i++) {
        j[0][i] = g[i] ^ 909522486,
            j[1][i] = g[i] ^ 1549556828
    }
    this.n[0].update(j[0]);
    this.n[1].update(j[1]);
    this.G = new f(this.n[0])
}
    ;
sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function (b) {
    this.Q && q(new sjcl.exception.invalid("encrypt on already updated hmac called!"));
    this.update(b);
    return this.digest(b)
}
    ;
sjcl.misc.hmac.prototype.reset = function () {
    this.G = new this.M(this.n[0]);
    this.Q = u
}
    ;
sjcl.misc.hmac.prototype.update = function (b) {
    this.Q = !0;
    this.G.update(b)
}
    ;
sjcl.misc.hmac.prototype.digest = function () {
    var b = this.G.finalize()
        , b = (new this.M(this.n[1])).update(b).finalize();
    this.reset();
    return b
}
    ;
sjcl.misc.pbkdf2 = function (N, x, w, v, s) {
    w = w || 1000;
    (0 > v || 0 > w) && q(sjcl.exception.invalid("invalid params to pbkdf2"));
    "string" === typeof N && (N = sjcl.codec.utf8String.toBits(N));
    "string" === typeof x && (x = sjcl.codec.utf8String.toBits(x));
    s = s || sjcl.misc.hmac;
    N = new s(N);
    var r, p, o, j, m = [], i = sjcl.bitArray;
    for (j = 1; 32 * m.length < (v || 1); j++) {
        s = r = N.encrypt(i.concat(x, [j]));
        for (p = 1; p < w; p++) {
            r = N.encrypt(r);
            for (o = 0; o < r.length; o++) {
                s[o] ^= r[o]
            }
        }
        m = m.concat(s)
    }
    v && (m = i.clamp(m, v));
    return m
}
    ;
sjcl.prng = function (b) {
    this.c = [new sjcl.hash.sha256];
    this.i = [0];
    this.F = 0;
    this.s = {};
    this.C = 0;
    this.K = {};
    this.O = this.d = this.j = this.W = 0;
    this.b = [0, 0, 0, 0, 0, 0, 0, 0];
    this.f = [0, 0, 0, 0];
    this.A = undefined;
    this.B = b;
    this.q = undefined;
    this.w = {
        progress: {},
        seeded: {}
    };
    this.m = this.V = 0;
    this.t = 1;
    this.u = 2;
    this.S = 65536;
    this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024];
    this.T = 30000;
    this.R = 80
};
function q(b) {
    throw b
}
function B(d) {
    for (var c = 0; 4 > c && !(d.f[c] = d.f[c] + 1 | 0,
        d.f[c]); c++) { }
    return d.A.encrypt(d.f)
}
function A(b) {
    b.b = B(b).concat(B(b));
    b.A = new sjcl.cipher.aes(b.b)
}
sjcl.prng.prototype = {
    randomWords: function (i, h) {
        var n = [], m;
        m = this.isReady(h);
        var l;
        m === this.m && q(new sjcl.exception.notReady("generator isn't seeded"));
        if (m & this.u) {
            m = !(m & this.t);
            l = [];
            var k = 0, j;
            this.O = l[0] = (new Date).valueOf() + this.T;
            for (j = 0; 16 > j; j++) {
                l.push(4294967296 * Math.random() | 0)
            }
            for (j = 0; j < this.c.length && !(l = l.concat(this.c[j].finalize()),
                k += this.i[j],
                this.i[j] = 0,
                !m && this.F & 1 << j); j++) { }
            this.F >= 1 << this.c.length && (this.c.push(new sjcl.hash.sha256),
                this.i.push(0));
            this.d -= k;
            k > this.j && (this.j = k);
            this.F++;
            this.b = sjcl.hash.sha256.hash(this.b.concat(l));
            this.A = new sjcl.cipher.aes(this.b);

            for (m = 0; 4 > m && !(this.f[m] = this.f[m] + 1 | 0,
                this.f[m]); m++) { }
        }
        for (m = 0; m < i; m += 4) {
            0 === (m + 1) % this.S && A(this),
                l = B(this),
                n.push(l[0], l[1], l[2], l[3])
        }
        A(this);
        return n.slice(0, i)
    },
    isReady: function (b) {
        b = this.I[0];
        return this.j && this.j >= b ? this.i[0] > this.R && (new Date).valueOf() > this.O ? this.u | this.t : this.t : this.d >= b ? this.u | this.m : this.m
    }
};

function bnpFromString(h, c) {
    var e;
    if (c == 16) {
        e = 4
    } else {
        if (c == 8) {
            e = 3
        } else {
            if (c == 256) {
                e = 8
            } else {
                if (c == 2) {
                    e = 1
                } else {
                    if (c == 32) {
                        e = 5
                    } else {
                        if (c == 4) {
                            e = 2
                        } else {
                            this.fromRadix(h, c);
                            return
                        }
                    }
                }
            }
        }
    }
    this.t = 0;
    this.s = 0;
    var g = h.length
        , d = false
        , f = 0;
    while (--g >= 0) {
        var a = (e == 8) ? h[g] & 255 : intAt(h, g);
        if (a < 0) {
            if (h.charAt(g) == "-") {
                d = true
            }
            continue
        }
        d = false;
        if (f == 0) {
            this[this.t++] = a
        } else {
            if (f + e > this.DB) {
                this[this.t - 1] |= (a & ((1 << (this.DB - f)) - 1)) << f;
                this[this.t++] = (a >> (this.DB - f))
            } else {
                this[this.t - 1] |= a << f
            }
        }
        f += e;
        if (f >= this.DB) {
            f -= this.DB
        }
    }

    if (e == 8 && (h[0] & 128) != 0) {
        this.s = -1;
        if (f > 0) {
            this[this.t - 1] |= ((1 << (this.DB - f)) - 1) << f
        }
    }
    this.clamp();
    if (d) {
        BigInteger.ZERO.subTo(this, this)
    }
}

function intAt(b, a) {
    var d = BI_RC[b.charCodeAt(a)];
    return (d == null) ? -1 : d
}
function BigInteger(e, d, f) {
    if (e != null) {
        if ("number" == typeof e) {
            this.fromNumber(e, d, f)
        } else {
            if (d == null && "string" != typeof e) {
                this.fromString(e, 256)
            } else {
                this.fromString(e, d)
            }
        }
    }
}
createAESKey = function () {
    return new AESKey()
}

sjcl.random = new sjcl.prng(6);
var AESKey = function () { };
AESKey.prototype = {

    constructor: AESKey,
    key: sjcl.random.randomWords(8, 0),
    encrypt: function (text) {
        return this.encryptWithIv(text, sjcl.random.randomWords(3, 0))
    },
    encryptWithIv: function (text, iv) {
        var aes, bits, cipher, cipherIV;
        aes = new sjcl.cipher.aes(this.key);
        bits = sjcl.codec.utf8String.toBits(text);
        cipher = sjcl.mode.ccm.encrypt(aes, bits, iv);
        cipherIV = sjcl.bitArray.concat(iv, cipher);
        return sjcl.codec.base64.fromBits(cipherIV)
    }
}

createRSAKey = function () {
    var k = rsaKEY.split("|");
    if (k.length != 2) {
        throw "Malformed public key"
    }
    var exp = k[0];
    var mod = k[1];
    var rsa = new RSAKey();
    rsa.setPublic(mod, exp);

    return rsa
}

exports.encrypt = function encrypt (data, dfVal, encryptionKey) {
    rsaKEY = encryptionKey;
    var rsa, aes, cipher, keybytes, encrypted, prefix, validationObject = {};
    if (typeof data.number !== "undefined") {
        validationObject.number = data.number
    }
    if (typeof data.cvc !== "undefined") {
        validationObject.cvc = data.cvc
    }
    if (typeof data.expiryMonth !== "undefined") {
        validationObject.month = data.expiryMonth
    }
    if (typeof data.expiryYear !== "undefined") {
        validationObject.year = data.expiryYear
    }
    if (typeof data.holderName !== "undefined") {
        validationObject.holderName = data.holderName
    }

    data.dfValue = dfVal;
    
    rsa = createRSAKey();
    aes = createAESKey();
    cipher = aes.encrypt(JSON.stringify(data));
    keybytes = sjcl.codec.bytes.fromBits(aes.key);
    encrypted = rsa.encrypt_b64(keybytes);
    prefix = "adyenjs_" + "0_1_18" + "$";
    return [prefix, encrypted, "$", cipher].join("")

}