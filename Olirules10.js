function zto864() {
  if (xzu702) return xzu703.username;
  if (12 <= xzu705) {
    var a = xzu704.loadString(20);
    "" == a &&
      ((a = "Android User " + Math.floor(1e3 * Math.random())),
      xzu704.saveString(20, a));
  } else
    5 <= xzu705
      ? ((a = xzu704.loadString(0)),
        "" == a &&
          ((a = "Player " + Math.floor(1e3 * Math.random())),
          xzu704.saveString(0, a)))
      : (a = xzu207.getValue(0));
  return a;
}
function zto865() {
  xzu710 = Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1));
  if (xzu702) xzu710 = xzu703.id;
  else if (12 <= xzu705) {
    var a = xzu704.loadNumber(20);
    -1 == a ? xzu704.saveNumber(20, xzu710) : (xzu710 = a);
  } else
    5 <= xzu705
      ? ((a = xzu704.loadNumber(2)),
        2 == a ? xzu704.saveNumber(2, xzu710 + 3) : (xzu710 = a - 3))
      : (xzu710 = xzu207.getValue(1));
}
function zto866() {
  var a = [0, 0, 0, 0];
  if (xzu702) var d = xzu703.password;
  else if (12 <= xzu705) d = xzu704.loadString(22);
  else {
    if (5 <= xzu705) return a;
    d = xzu207.getValue(9);
  }
  d = d.split("%");
  if (4 != d.length) return a;
  for (a = 3; 0 <= a; a--) d[a] = parseInt(xzu178.decodeNumberString(d[a]));
  return d;
}
function zto867() {
  if (xzu702) return xzu703.sound;
  if (12 <= xzu705) {
    var a = xzu704.loadNumber(22);
    return 1 == Math.abs(a);
  }
  return 5 <= xzu705 ? 0 < xzu704.loadNumber(11) : 0 != xzu207.getValue(2);
}
function zto868() {
  if (xzu702) xzu706 = xzu703.zoom;
  else if (12 <= xzu705) {
    var a = xzu704.loadNumber(21);
    -1 == a
      ? ((xzu706 = 100 >= xzu704.getNumber(0)),
        xzu704.saveNumber(21, xzu706 ? 1 : 0))
      : (xzu706 = 1 == a);
  } else
    5 <= xzu705
      ? ((a = xzu704.loadNumber(1)),
        2 == a
          ? ((xzu706 = !0), xzu704.saveNumber(1, xzu706 ? 1 : 0))
          : (xzu706 = 1 == a))
      : (xzu706 = 0 == xzu207.getValue(4));
}
function zto869(a) {
  if (xzu702)
    return 0 == a
      ? xzu703.freeSpawn
      : 1 == a
      ? xzu703.unlimitedTime
      : xzu703.alliances;
  if (12 <= xzu705) return xzu704.loadNumber(40 + a) == (0 == a ? 1 : 0);
  if (5 <= xzu705) return 1 == xzu704.loadNumber(12 + a);
  var d = xzu207.getValue(6).split("");
  return 3 != d.length ? !1 : 1 == parseInt(d[a]);
}
function zto870() {
  return xzu702
    ? xzu703.emojis
    : 5 <= xzu705
    ? xzu704.loadString(1)
    : xzu207.getValue(7);
}
function zto871() {
  return xzu702
    ? xzu703.colors
    : 12 <= xzu705
    ? xzu704.loadString(21)
    : 5 <= xzu705
    ? xzu704.loadString(2)
    : xzu207.getValue(8);
}
function zto872(a) {
  xzu702
    ? window.webkit.messageHandlers.iosCommandA.postMessage("username " + a)
    : 12 <= xzu705
    ? (xzu704.saveString(20, a), xzu704.setState(10))
    : 5 <= xzu705
    ? xzu704.saveString(0, a)
    : (xzu207.setValue(0, a), xzu207.save());
}
function zto873(a) {
  for (var d = [], c = 0; 4 > c; c++)
    d.push(xzu178.encodeNumberString(a[c].toString()));
  a = d[0] + "%" + d[1] + "%" + d[2] + "%" + d[3];
  return xzu702
    ? (window.webkit.messageHandlers.iosCommandA.postMessage("password " + a),
      !0)
    : 12 <= xzu705
    ? (xzu704.saveString(22, a), !0)
    : 5 <= xzu705
    ? !1
    : 2 == xzu207.accepted()
    ? (xzu207.setValue(9, a), xzu207.save(), !0)
    : !1;
}
function zto874(a, d) {
  xzu702
    ? (window.webkit.messageHandlers.iosCommandA.postMessage(
        "zoom " + (a ? 1 : 0)
      ),
      window.webkit.messageHandlers.iosCommandA.postMessage(
        "sound " + (d ? 1 : 0)
      ))
    : 12 <= xzu705
    ? (xzu704.saveNumber(22, d ? 1 : 0), xzu704.saveNumber(21, a ? 1 : 0))
    : 5 <= xzu705
    ? (xzu704.saveNumber(1, a ? 1 : 0), xzu704.saveNumber(11, d ? 1 : 0))
    : (xzu207.setValue(2, d ? 1 : 0),
      xzu207.setValue(4, a ? 0 : 1),
      xzu207.save());
}
function zto875(a, d, c) {
  xzu702
    ? (window.webkit.messageHandlers.iosCommandA.postMessage(
        "freeSpawn " + (a ? 1 : 0)
      ),
      window.webkit.messageHandlers.iosCommandA.postMessage(
        "unlimitedTime " + (d ? 1 : 0)
      ),
      window.webkit.messageHandlers.iosCommandA.postMessage(
        "alliances " + (c ? 1 : 0)
      ))
    : 12 <= xzu705
    ? (xzu704.saveNumber(40, a ? 1 : 0),
      xzu704.saveNumber(41, d ? 0 : 1),
      xzu704.saveNumber(42, c ? 0 : 1))
    : 5 <= xzu705
    ? (xzu704.saveNumber(12, a ? 1 : 0),
      xzu704.saveNumber(13, d ? 1 : 0),
      xzu704.saveNumber(14, c ? 1 : 0))
    : (xzu207.setValue(6, (a ? "1" : "0") + (d ? "1" : "0") + (c ? "1" : "0")),
      xzu207.save());
}
function zto876() {
  for (var a = "", d = 0; d < xzu715.nAll; d += 2)
    a +=
      xzu715.arrSelected[d] || xzu715.arrSelected[d + 1]
        ? xzu715.arrSelected[d] && !xzu715.arrSelected[d + 1]
          ? "1"
          : !xzu715.arrSelected[d] && xzu715.arrSelected[d + 1]
          ? "2"
          : "3"
        : "0";
  xzu702
    ? window.webkit.messageHandlers.iosCommandA.postMessage("emojis " + a)
    : 5 <= xzu705
    ? xzu704.saveString(1, a)
    : (xzu207.setValue(7, a), xzu207.save());
}
function zto877(a) {
  if (xzu702)
    window.webkit.messageHandlers.iosCommandA.postMessage("colors " + a);
  else {
    if (12 <= xzu705) xzu704.saveString(21, a);
    else if (5 <= xzu705) {
      xzu704.saveString(2, a);
      return;
    }
    xzu207.setValue(8, a);
    xzu207.save();
  }
}
function zto878(a) {
  xzu702 || (5 <= xzu705 && xzu704.setState(a));
}
function zto879() {
  xzu702
    ? window.webkit.messageHandlers.iosCommandA.postMessage("show ad 1800000")
    : 12 <= xzu705 && xzu704.presentAd(18e5);
}
function zto880() {
  xzu702
    ? location.reload()
    : 7 <= xzu705
    ? xzu704.setState(5)
    : location.reload();
}
var xzu8,
  xzu9,
  xzu10,
  xzu11,
  xzu12,
  xzu13,
  xzu14,
  xzu15,
  xzu16,
  xzu17,
  xzu18,
  xzu19,
  xzu20;
function zto881() {
  xzu13 = 0;
  xzu14 = 2048;
  xzu15 = new Uint32Array(4 * xzu14);
  xzu16 = 0;
  xzu17 = new Uint32Array(xzu14);
  xzu18 = new Int32Array(4);
  xzu18[0] = -4 * xzu731;
  xzu18[1] = 4;
  xzu18[2] = -xzu18[0];
  xzu18[3] = -xzu18[1];
  xzu19 = new Uint8Array(xzu731 * xzu732);
}
function zto882(a) {
  xzu9 = a;
  xzu20 = !1;
  zto888();
  zto889();
  for (a = xzu208.getSize(xzu9) - 1; 0 <= a; a--)
    0 == xzu208.getID(xzu9, a) && ((xzu8 = a), zto884());
  xzu20 && zto883();
}
function zto883() {
  zto1351();
  zto1352();
}
function zto884() {
  xzu12 = xzu208.getEnemy(xzu9, xzu8);
  xzu10 = xzu208.getStrength(xzu9, xzu8);
  zto890();
  0 == xzu13 ? zto887() : (zto886(), zto885() ? zto893() : zto887());
}
function zto885() {
  xzu11 = zto1304(xzu10, xzu13);
  return xzu11 > xzu160;
}
function zto886() {
  for (var a = xzu13 - 1; 0 <= a; a--) xzu19[zto1304(xzu15[a], 4)] = 0;
}
function zto887() {
  1 == xzu208.getSize(xzu9) && xzu171.clearAttack(xzu9);
  if (xzu9 != xzu161) (xzu672[xzu9] += xzu10), xzu209.validateBalance(xzu9);
  else {
    var a = xzu672[xzu9];
    xzu672[xzu9] += xzu10;
    xzu209.validateBalance(xzu9);
    xzu717.values[12] -= xzu672[xzu9] - a;
  }
  xzu208.removeIndex(xzu9, xzu8);
}
function zto888() {
  var a = xzu673[xzu9].length;
  a = a > xzu14 ? xzu14 : a;
  xzu16 = 0;
  for (--a; 0 <= a; a--) xzu17[xzu16++] = xzu673[xzu9][a];
}
function zto889() {
  for (var a = xzu673[xzu9].length - 1; 0 <= a; a--)
    xzu206.isLand(xzu673[xzu9][a]) &&
      xzu206.drawBorderSquare(xzu673[xzu9][a], xzu9);
  xzu673[xzu9] = [];
}
function zto890() {
  xzu13 = 0;
  xzu12 == xzu150 ? zto892() : zto891();
}
function zto891() {
  for (var a, d = 3; 0 <= d; d--)
    for (var c = xzu16 - 1; 0 <= c; c--)
      (a = xzu17[c] + xzu18[d]),
        0 == xzu19[a / 4] &&
          xzu206.isPlayer(a) &&
          xzu206.getPlayerAt(a) == xzu12 &&
          ((xzu19[a / 4] = 1), (xzu15[xzu13++] = a));
}
function zto892() {
  for (var a, d = 3; 0 <= d; d--)
    for (var c = xzu16 - 1; 0 <= c; c--)
      (a = xzu17[c] + xzu18[d]),
        0 == xzu19[a / 4] &&
          xzu206.isNeutral(a) &&
          ((xzu19[a / 4] = 1), (xzu15[xzu13++] = a));
}
function zto893() {
  zto896() ? (zto895(), xzu12 != xzu150 && zto894()) : zto887();
}
function zto894() {
  zto1353();
  zto1355(xzu674[xzu12]);
  zto1355(xzu675[xzu12]);
  zto1354(xzu673[xzu12]);
  zto1356(xzu675[xzu12]);
  zto1356(xzu676[xzu12]);
  zto1357();
  zto1358();
}
function zto895() {
  xzu20 = !0;
  xzu208.setStrength(xzu9, xzu8, xzu10);
  xzu670[xzu9] += xzu13;
  zto1350();
  zto904();
}
function zto896() {
  return xzu12 == xzu150 ? zto903() : zto897();
}
function zto897() {
  var a = xzu13 * xzu160,
    d = zto900(),
    c = zto899();
  d = a + 2 * d + c;
  var b = xzu11 * xzu13;
  if (b > d) return (xzu10 -= d), zto898(d - a, c), !0;
  xzu10 -= b;
  zto898(b - a, c);
  return !1;
}
function zto898(a, d) {
  if (0 < d)
    if (a >= d) xzu208.setStrengthAt(xzu12, xzu9, 0), (a -= d);
    else {
      xzu208.setStrengthAt(xzu12, xzu9, d - a);
      return;
    }
  a = zto1304(a, 2);
  xzu672[xzu12] = xzu672[xzu12] >= a ? xzu672[xzu12] - a : 0;
}
function zto899() {
  return xzu208.getStrengthAt(xzu12, xzu9);
}
function zto900() {
  return zto1304(xzu13 * xzu672[xzu12], 1 + zto901() * zto902());
}
function zto901() {
  return Math.floor(2 + zto1308(zto1304(xzu670[xzu12], 100), 8));
}
function zto902() {
  return (
    xzu674[xzu12].length +
    zto1304(xzu675[xzu12].length + xzu676[xzu12].length, 50)
  );
}
function zto903() {
  xzu10 -= xzu13 * xzu160;
  return !0;
}
function zto904() {
  for (var a = xzu13 - 1; 0 <= a; a--)
    xzu673[xzu9].push(xzu15[a]),
      xzu674[xzu9].push(xzu15[a]),
      xzu206.drawBorderSquare(xzu15[a], xzu9);
}
function zto905() {
  var a = 1,
    d = [null, null];
  this.init = function () {
    a = (xzu706 ? 0.0015 : 0.001) * xzu696;
    for (var c = 1; 0 <= c; c--) d[c] && this.setName(c, d[c].str);
  };
  this.setName = function (c, b) {
    d[c] = { str: b, font: xzu332 + 10 + xzu336 };
    this.refresh(c);
  };
  this.refresh = function (c) {
    if (xzu205.loaded() && d[c]) {
      var b = d[c].str,
        g = Math.floor(0.15 * a * xzu205.get(13).height),
        e = xzu332 + g + xzu336,
        m = xzu184.measureText(b, e),
        h = 0.8 * a * xzu205.get(13).width;
      m > h && ((g = Math.floor((g * h) / m)), (e = xzu332 + g + xzu336));
      d[c] = { str: b, font: e };
      xzu720.requestRepaint = !0;
    }
  };
  this.getH = function () {
    return Math.floor(a * xzu205.get(13).height);
  };
  this.mouseDown = function (c, b) {
    return !xzu205.loaded() ||
      c < xzu349 ||
      b < xzu698 - xzu354.w - a * xzu205.get(13).height - 2 * xzu349 ||
      b > xzu698 - xzu354.w - 2 * xzu349
      ? !1
      : c < xzu349 + a * xzu205.get(13).width
      ? ((xzu725.selected = 0),
        (xzu725.isVisible = !0),
        xzu204.deinit(),
        (xzu720.requestRepaint = !0))
      : c < 2 * xzu349 + a * xzu205.get(13).width
      ? !1
      : c < 2 * xzu349 + 2 * a * xzu205.get(13).width
      ? ((xzu725.selected = 1),
        (xzu725.isVisible = !0),
        xzu204.deinit(),
        (xzu720.requestRepaint = !0))
      : !1;
  };
  this.draw = function () {
    if (xzu205.loaded()) {
      xzu690.imageSmoothingEnabled = !0;
      xzu690.setTransform(
        a,
        0,
        0,
        a,
        xzu349,
        xzu698 - xzu354.w - a * xzu205.get(13).height - 2 * xzu349
      );
      xzu690.drawImage(xzu205.get(14), 0, 0);
      xzu690.setTransform(
        a,
        0,
        0,
        a,
        2 * xzu349 + a * xzu205.get(13).width,
        xzu698 - xzu354.w - a * xzu205.get(13).height - 2 * xzu349
      );
      xzu690.drawImage(xzu205.get(13), 0, 0);
      for (var c = 1; 0 <= c; c--)
        d[c] &&
          (xzu690.setTransform(
            1,
            0,
            0,
            1,
            (1 + c) * xzu349 + c * a * xzu205.get(13).width,
            xzu698 - xzu354.w - a * xzu205.get(13).height - 2 * xzu349
          ),
          (xzu690.font = d[c].font),
          (xzu690.textBaseline = xzu326),
          (xzu690.textAlign = xzu329),
          (xzu690.fillStyle = xzu315),
          xzu690.fillText(
            d[c].str,
            0.5 * a * xzu205.get(13).width,
            0.86 * a * xzu205.get(13).height
          ));
      xzu690.setTransform(1, 0, 0, 1, 0, 0);
    }
  };
}
function zto906(a, d, c, b) {
  var g = zto1304(3 * xzu672[a], 256);
  b -= b >= zto1304(xzu672[a], 2) ? g : 0;
  zto909(c, a);
  xzu208.add(a, xzu152 && 0 == d ? zto907(b) : b, d);
  xzu672[a] -= b + g;
  xzu171.newAttack(a, !1);
}
function zto907(a) {
  if (a < xzu672[0]) return a;
  var d = xzu170.getIStrength();
  if (2 <= d) return a;
  if (0 == d) return zto1304(4 * a, 10);
  if (1 == d) return zto1304(6 * a, 10);
}
function zto908(a, d) {
  for (var c, b = xzu674[a].length - 1; 0 <= b; b--)
    if (xzu206.isBorderLand(xzu674[a][b]))
      for (c = 3; 0 <= c; c--)
        if (
          xzu206.isPlayer(xzu674[a][b] + xzu18[c]) &&
          xzu206.getPlayerAt(xzu674[a][b] + xzu18[c]) == d
        ) {
          xzu673[a].push(xzu674[a][b]);
          break;
        }
}
function zto909(a, d) {
  for (var c = xzu673[d].length - 1; c >= a; c--)
    xzu206.drawAttackSquare(xzu673[d][c], d);
}
function zto910(a) {
  for (var d, c = xzu674[a].length - 1; 0 <= c; c--)
    if (xzu206.isBorderLand(xzu674[a][c]))
      for (d = 3; 0 <= d; d--)
        if (xzu206.isNeutral(xzu674[a][c] + xzu18[d])) {
          xzu673[a].push(xzu674[a][c]);
          break;
        }
}
function zto911(a) {
  var d = zto1304(xzu668[a] + xzu666[a], 2),
    c = zto1304(xzu669[a] + xzu667[a], 2),
    b = zto1304(xzu668[a] - xzu666[a], 8),
    g = zto1304(xzu669[a] - xzu667[a], 8);
  d += b - zto1304((2 * b + 1) * xzu219.random(), xzu219.value(100));
  c += g - zto1304((2 * g + 1) * xzu219.random(), xzu219.value(100));
  xzu43 = 0;
  var e = xzu674[a].length - 1;
  a: for (; 0 <= e; e--)
    if (xzu206.isBorderLand(xzu674[a][e]))
      for (b = 3; 0 <= b; b--)
        if (
          ((g = xzu206.isNeutral(xzu674[a][e] + xzu18[b])
            ? xzu150
            : xzu206.getPlayerAt(xzu674[a][e] + xzu18[b])),
          g == xzu150 || (xzu206.isPlayer(xzu674[a][e] + xzu18[b]) && g != a))
        ) {
          for (var m = xzu43 - 1; 0 <= m; m--) if (xzu44[m] == g) continue a;
          xzu44[xzu43] = g;
          xzu45[xzu43] =
            zto1305(d - xzu206.getX(xzu674[a][e])) +
            zto1305(c - xzu206.getY(xzu674[a][e]));
          if (++xzu43 >= xzu42) return;
        }
}
function zto912(a) {
  var d;
  xzu43 = 0;
  for (var c = xzu674[a].length - 1; 0 <= c; c--)
    if (xzu206.isBorderLand(xzu674[a][c]))
      for (d = 3; 0 <= d; d--) {
        var b = xzu206.isNeutral(xzu674[a][c] + xzu18[d])
          ? xzu150
          : xzu206.getPlayerAt(xzu674[a][c] + xzu18[d]);
        b == xzu150
          ? 2 == xzu43 ||
            (1 == xzu43 && xzu44[0] == b) ||
            ((xzu44[1] = xzu44[0]), (xzu44[0] = b), xzu43++)
          : xzu206.isPlayer(xzu674[a][c] + xzu18[d]) &&
            b != a &&
            (0 == xzu43
              ? (xzu44[xzu43++] = b)
              : 1 == xzu43
              ? xzu44[0] == xzu150
                ? (xzu44[xzu43++] = b)
                : xzu672[b] < xzu672[xzu44[0]] && (xzu44[0] = b)
              : xzu672[b] < xzu672[xzu44[1]] && (xzu44[1] = b));
      }
}
function zto913(a) {
  var d;
  xzu43 = 0;
  for (var c = xzu674[a].length - 1; 0 <= c; c--)
    if (xzu206.isBorderLand(xzu674[a][c]))
      for (d = 3; 0 <= d; d--) {
        var b = xzu206.isNeutral(xzu674[a][c] + xzu18[d])
          ? xzu150
          : xzu206.getPlayerAt(xzu674[a][c] + xzu18[d]);
        if (
          b == xzu150 ||
          (xzu206.isPlayer(xzu674[a][c] + xzu18[d]) && b != a && b % 2 != a % 2)
        ) {
          xzu44[0] = b;
          xzu43++;
          return;
        }
      }
}
var xzu42, xzu43, xzu44, xzu45, xzu46;
function zto914() {
  xzu42 = 10;
  xzu43 = 0;
  xzu44 = new Uint16Array(xzu42);
  xzu45 = new Uint32Array(xzu42);
}
function zto915() {
  xzu46 = xzu166 && xzu152 ? new Uint8Array(xzu150) : null;
}
function zto916(a, d) {
  var c;
  if (!(96 > d))
    if (d > xzu672[a]) console.log("Error 34");
    else {
      var b = xzu209.getMaxInterest(a);
      xzu672[a] > b && d < xzu672[a] - b && (d = xzu672[a] - b);
      var g = xzu170.getIStrengthArr();
      if (xzu152 && xzu166)
        if ((zto913(a), 1 == xzu43))
          (xzu46[a] = 1),
            xzu44[0] == xzu150 ? zto919(a, d) : zto917(a, d, xzu44[0]);
        else if (0 < xzu675[a].length && xzu219.random() < xzu219.value(50))
          xzu172.calcuate(a);
        else {
          if (((xzu46[a] = 0), !(0 == g && xzu672[a] < b)))
            for (
              b = zto1304(xzu219.random() * xzu679, xzu219.value(100)), c = 0;
              c < xzu679;
              c++
            )
              if (
                xzu678[(c + b) % xzu679] % 2 == a % 2 &&
                1 == xzu46[xzu678[(c + b) % xzu679]]
              ) {
                zto1100(
                  a,
                  xzu678[(c + b) % xzu679],
                  zto1304(1e3 * d, xzu672[a])
                );
                0 == xzu678[(c + b) % xzu679] &&
                  xzu219.random() < xzu219.value(12) &&
                  (xzu46[0] = 0);
                break;
              }
        }
      else if ((0 < g ? zto911(a) : zto912(a), 0 != xzu43)) {
        c = !1;
        for (b = xzu43 - 1; 0 <= b; b--)
          if (xzu44[b] == xzu150) {
            c = !0;
            break;
          }
        if (c) {
          if (
            1 == xzu43 ||
            400 > xzu679 ||
            xzu219.random() < xzu219.value(60 < g ? g : 60)
          ) {
            zto919(a, d);
            return;
          }
          for (b = xzu43 - 1; 0 <= b; b--)
            if (xzu44[b] == xzu150) {
              xzu43--;
              for (c = b; c < xzu43; c++)
                (xzu44[c] = xzu44[c + 1]), (xzu45[c] = xzu45[c + 1]);
              break;
            }
        }
        1 < xzu43 &&
          xzu44[0] < xzu146 &&
          ((b = xzu44[0]),
          (c = xzu45[0]),
          (xzu44[0] = xzu44[1]),
          (xzu45[0] = xzu45[1]),
          (xzu44[1] = b),
          (xzu45[1] = c));
        g = zto918(0 < g && xzu219.random() < xzu219.value(g));
        zto917(a, d, g);
      }
    }
}
function zto917(a, d, c) {
  if (zto1304(xzu672[a], 8) > xzu672[c]) {
    var b = zto1304(11 * xzu672[c], 5);
    d = d > b ? d : b;
  }
  b = xzu673[a].length;
  zto908(a, c);
  zto906(a, c, b, d);
}
function zto918(a) {
  for (var d = 0, c = xzu43 - 1; 1 <= c; c--)
    xzu45[c] < xzu45[d] && (!a || xzu44[c] >= xzu146) && (d = c);
  return xzu44[d];
}
function zto919(a, d) {
  var c = xzu150,
    b = xzu673[a].length;
  zto910(a);
  return xzu673[a].length != b ? (zto906(a, c, b, d), !0) : !1;
}
function zto920() {
  var a, d, c, b, g, e, m, h, l;
  this.init = function () {
    h = [98, 95, 95, 40, 20, 0];
    l = [85, 80, 80, 30, 7, 3];
    a = new Uint8Array(xzu148);
    d = new Uint16Array(xzu148);
    c = new Uint16Array(xzu148);
    b = new Uint8Array(xzu148);
    g = new Uint16Array(xzu148);
    e = new Uint16Array(xzu148);
    m = xzu194.getIndex(xzu158);
    for (var k = xzu148 - 1; 0 <= k; k--)
      (b[k] = 1 + zto1304(20 * xzu219.random(), xzu219.value(100))),
        (e[k] = 250 + zto1304(1500 * xzu219.random(), xzu219.value(100))),
        (g[k] = 500 + zto1304(501 * xzu219.random(), xzu219.value(100))),
        2 >= m
          ? ((d[k] = 0 == m ? 1e3 : 970),
            (c[k] = 0 == m ? 900 : 850),
            (b[k] = 5),
            (g[k] = 1040),
            (e[k] = 1040))
          : 3 == m
          ? ((d[k] = 600 + zto1304(100 * xzu219.random(), xzu219.value(100))),
            (c[k] = 300 + zto1304(400 * xzu219.random(), xzu219.value(100))))
          : 4 == m
          ? ((d[k] = 300 + zto1304(200 * xzu219.random(), xzu219.value(100))),
            (c[k] = 100 + zto1304(201 * xzu219.random(), xzu219.value(100))))
          : ((d[k] = 200 + zto1304(200 * xzu219.random(), xzu219.value(100))),
            (c[k] = 23 + zto1304(151 * xzu219.random(), xzu219.value(100)))),
        (a[k] = 1 + zto1304(g[k] * xzu219.random(), 10 * xzu219.value(100)));
  };
  this.getIStrength = function () {
    return m;
  };
  this.getIStrengthShip = function () {
    return l[m];
  };
  this.getIStrengthArr = function () {
    return h[m];
  };
  this.calculate = function (k) {
    if (0 == --a[k]) {
      g[k] != e[k] && (g[k] += g[k] < e[k] ? 3 : -3);
      d[k] != c[k] &&
        ((d[k] += d[k] < c[k] ? b[k] : -b[k]),
        (d[k] = Math.abs(d[k] - c[k]) <= b[k] ? c[k] : d[k]));
      a[k] = zto1304(g[k], 10);
      var f = k + xzu146;
      xzu208.isFree(f) &&
        (0 == xzu674[f].length ||
        (0 < xzu675[f].length &&
          xzu219.random() <
            xzu219.value(xzu675[f].length > xzu674[f].length ? 7 : 3))
          ? xzu172.calcuate(f)
          : zto916(f, zto1304(d[k] * xzu672[f], 1e3)));
    }
  };
}
function zto923() {
  xzu181.calculate(!0);
  xzu210.calculate();
  xzu190.calculateSpectators();
  xzu212.check();
}
function zto924() {
  xzu209.calculate();
  xzu174.calcuate();
  xzu173.calcuate();
  xzu171.calculate();
  xzu175.calculate();
  zto1246();
  xzu189.calculate();
  xzu210.calculate();
  xzu213.calculate();
  xzu190.calculate();
  xzu188.calculate();
  xzu183.calculate();
  xzu181.calculate(!1);
  xzu185.calculate();
  xzu717.calculate();
  xzu722.calculate();
  xzu212.check();
}
function zto925() {
  xzu176.calculate();
  xzu191.calculate();
  xzu184.calculate();
  xzu225.calculate();
}
function zto926() {
  xzu189.repaint(!1);
  xzu183.repaint();
  xzu190.repaint(!1);
  xzu188.repaint();
  xzu185.repaint();
  xzu210.repaint();
  xzu722.refresh();
}
function zto927() {
  xzu210.repaint() && (xzu720.requestRepaint = !0);
}
function zto928() {
  function a(h) {
    g[h] =
      10 == g[h]
        ? d
        : 1e3 > xzu670[h]
        ? 3
        : 1e4 > xzu670[h]
        ? 2
        : 6e4 > xzu670[h]
        ? 1
        : 0;
  }
  var d, c, b, g, e, m;
  this.init = function () {
    e = m = 0;
    d = 6;
    c = 0;
    b = new Uint16Array(xzu150);
    g = new Uint8Array(xzu150);
  };
  this.calculate = function () {
    e = xzu717.values[12];
    m = xzu672[xzu161];
    for (var h = c - 1; 0 <= h; h--)
      10 == g[b[h]] ? a(b[h]) : 0 == g[b[h]]-- && (a(b[h]), zto882(b[h]));
    xzu670[xzu161] > xzu717.values[7] && (xzu717.values[7] = xzu670[xzu161]);
    xzu717.values[13] += m - xzu672[xzu161] + e - xzu717.values[12];
  };
  this.clearAttack = function (h) {
    for (var l = c - 1; 0 <= l; l--)
      if (h == b[l]) {
        c--;
        for (h = l; h < c; h++) b[h] = b[h + 1];
        break;
      }
  };
  this.newAttack = function (h, l) {
    for (var k = c - 1; 0 <= k; k--) if (h == b[k]) return;
    b[c++] = h;
    g[h] = l ? 2 : 10;
  };
}
function zto932() {
  function a() {
    b = 3;
    a: {
      for (var h = 40; 1 <= h; h--) {
        g =
          xzu666[m] +
          zto1304(
            xzu219.random() * (xzu668[m] - xzu666[m] + 1),
            xzu219.value(100)
          );
        e =
          xzu667[m] +
          zto1304(
            xzu219.random() * (xzu669[m] - xzu667[m] + 1),
            xzu219.value(100)
          );
        var l = d(xzu206.coordToPoint(g, e));
        if (1 != l) break a;
      }
      l = 1;
    }
    if (0 == l) return !1;
    if (2 == l) return !0;
    l = c(1, 1);
    return 0 == l ? !1 : 2 == l ? !0 : 2 == c(54, 4);
  }
  function d(h) {
    if (
      xzu206.isLand(h) &&
      (xzu206.isNeutral(h) ||
        !(
          xzu206.getPlayerAt(h) == m ||
          (xzu166 && xzu152 && m % 2 == xzu206.getPlayerAt(h) % 2)
        ))
    ) {
      if (xzu218.exists(m, h)) return 2;
      if (0 == b--) return 0;
    }
    return 1;
  }
  function c(h, l) {
    for (var k, f, n, p, r, t, q, u = h; u < h + 50 * l; u += l)
      if (
        ((k = xzu666[m] - u),
        (k = 1 > k ? 1 : k),
        (f = xzu667[m] - u),
        (f = 1 > f ? 1 : f),
        (n = xzu668[m] + u),
        (n = n >= xzu731 - 1 ? xzu731 - 2 : n),
        (p = xzu669[m] + u),
        (p = p >= xzu732 - 1 ? xzu732 - 2 : p),
        (q = zto1304(2 * xzu219.random() * (n - k + p - f), xzu219.value(100))),
        (r = n - k),
        (t = p - f),
        q <= r
          ? ((g = k + q), (e = f))
          : q <= r + t
          ? ((g = n), (e = f + q - r))
          : q <= 2 * r + t
          ? ((g = k + q - r - t), (e = p))
          : ((g = k), (e = f + q - 2 * r - t)),
        (k = d(xzu206.coordToPoint(g, e))),
        1 != k)
      )
        return k;
    return 1;
  }
  var b, g, e, m;
  this.calcuate = function (h) {
    m = h;
    0 != xzu675[m].length &&
      a() &&
      ((h = zto1304(xzu170.getIStrengthShip() * xzu672[m], 100)),
      60 <= h && zto1099(m, xzu218.getCStart(), xzu206.coordToPoint(g, e), h));
  };
}
function zto937() {
  var a, d;
  this.init = function () {
    a = xzu148;
    d = new Uint16Array(xzu148);
    for (var c = xzu148 - 1; 0 <= c; c--) d[c] = c;
  };
  this.calcuate = function () {
    for (var c = a - 1; 0 <= c; c--)
      if (0 == xzu665[d[c] + xzu146]) {
        var b = c;
        for (a--; b < a; b++) d[b] = d[b + 1];
      } else xzu170.calculate(d[c]);
  };
}
function zto940() {
  function a(h, l, k, f, n, p) {
    0 < k &&
      1e3 >= k &&
      (d.push(h), c.push(l), b.push(k), g.push(f), e.push(n), m.push(p));
  }
  var d, c, b, g, e, m;
  this.init = function () {
    d = [];
    c = [];
    b = [];
    g = [];
    e = [];
    m = [];
  };
  this.calcuate = function () {
    var h = d.length;
    h = 100 > h ? h : zto1304(h, 2);
    for (--h; 0 <= h; h--)
      0 == c[0]
        ? zto1098(d[0], g[0], b[0])
        : 1 == c[0]
        ? this.executeSeaAttack(d[0], b[0], e[0], m[0])
        : 2 == c[0] && this.checkCancelAttack(d[0], g[0]),
        d.shift(),
        c.shift(),
        b.shift(),
        g.shift(),
        e.shift(),
        m.shift();
  };
  this.executeSeaAttack = function (h, l, k, f) {
    0 != xzu665[h] &&
      xzu218.exists(h, xzu206.coordToPoint(k, f)) &&
      zto1099(
        h,
        xzu218.getCStart(),
        xzu206.coordToPoint(k, f),
        zto1304(l * xzu672[h], 1e3)
      ) &&
      h == xzu161 &&
      ((xzu717.values[0] += l), xzu717.values[1]++, xzu717.values[2]++);
  };
  this.checkCancelAttack = function (h, l) {
    if (xzu208.exists(h, l)) {
      var k = xzu208.getStrengthAt(h, l);
      xzu208.setStrengthAt(h, l, 0);
      if (h != xzu161) (xzu672[h] += k), xzu209.validateBalance(h);
      else {
        var f = xzu672[h];
        xzu672[h] += k;
        xzu209.validateBalance(h);
        xzu717.values[12] -= xzu672[h] - f;
      }
    }
  };
  this.addNewLandAttack = function (h, l, k) {
    1 == xzu154 && a(h, 0, l, k, 0, 0);
  };
  this.addNewSeaAttack = function (h, l, k, f) {
    1 == xzu154 && (xzu164 ? xzu168.add(h, k, f) : a(h, 1, l, 0, k, f));
  };
  this.addNewCancelAttack = function (h, l) {
    1 == xzu154 && a(h, 2, 1, l, 0, 0);
  };
  this.removePlayer = function (h) {
    1 == xzu154
      ? (0 != xzu665[h] && (zto1204(h), zto1247()), xzu181.addState(h, 4))
      : 2 == xzu154 && xzu181.addState(h, 4);
  };
  this.surrender = function (h) {
    xzu180.surrenderPossible(h) &&
      (xzu181.addState(h, h == xzu161 ? 21 : 22),
      0 < xzu167
        ? xzu726.endGame(1 - h)
        : (zto1204(h), zto1247(), xzu152 && xzu164 && xzu168.calculate()));
  };
}
function zto945() {
  var a, d, c, b, g, e, m, h, l;
  this.init = function () {
    a = 1;
    c = 0;
    d = 2 * xzu150;
    b = new Uint16Array(d);
    g = new Uint8Array(d);
    e = new Uint16Array(d);
    m = new Uint32Array(d);
    h = new Uint32Array(d);
    l = new Uint8Array(d);
  };
  this.setPosition = function (k, f) {
    m[k] = f;
  };
  this.calculate = function () {
    for (var k = c - 1; 0 <= k; k--)
      0 == g[k]-- &&
        ((g[k] = 2), xzu220.calculate(k, e[k], b[k], m[k], h[k], l[k]));
  };
  this.clearAttack = function (k, f) {
    for (var n = c - 1; 0 <= n; n--)
      if (k == b[n] && f == e[n]) {
        for (c--; n < c; n++)
          (b[n] = b[n + 1]),
            (g[n] = g[n + 1]),
            (e[n] = e[n + 1]),
            (m[n] = m[n + 1]),
            (h[n] = h[n + 1]),
            (l[n] = l[n + 1]);
        break;
      }
  };
  this.newAttack = function (k, f, n) {
    if (c >= d) return 0;
    b[c] = k;
    g[c] = 0;
    e[c] = a;
    m[c] = f;
    h[c] = n;
    l[c] =
      Math.abs(xzu206.getX(f) - xzu206.getX(n)) >
      Math.abs(xzu206.getY(f) - xzu206.getY(n))
        ? 1
        : 0;
    k = a;
    a++;
    c++;
    a = a > 2 * d ? 1 : a;
    return k;
  };
}
function zto947() {
  function a(v) {
    t = xzu720.time;
    q = 33;
    e = m = g = 0;
    h = q / v;
    b = 1 / (v / q / 4);
    l = (xzu697 / 2 + xzu394) / xzu393;
    k = (xzu698 / 2 + xzu395) / xzu393;
    f = xzu393;
  }
  function d(v) {
    0.125 > Math.abs(Math.log(r / f)) && (r = v * f);
  }
  function c(v, z, B, w) {
    n = (v + B + 1) / 2;
    p = (z + w + 1) / 2;
    v = xzu697 / (B - v + 1);
    z = xzu698 / (w - z + 1);
    r = 0.9 * (v < z ? v : z);
  }
  var b,
    g,
    e,
    m,
    h,
    l,
    k,
    f,
    n,
    p,
    r,
    t,
    q,
    u = !1,
    y = !1;
  this.setStartPosition = function () {
    a(1);
    this.instant(0, 0, xzu731 - 1, xzu732 - 1);
    xzu164 || this.setDeathCamera(xzu161, 3e3, !0, 0.3);
  };
  this.setDeathCamera = function (v, z, B, w) {
    if (!u || B || !y) {
      xzu186.grMouseMoving = !1;
      y = B;
      a(z);
      n = (xzu666[v] + xzu668[v] + 1) / 2;
      p = (xzu667[v] + xzu669[v] + 1) / 2;
      z = xzu668[v] - xzu666[v] + 1;
      v = xzu669[v] - xzu667[v] + 1;
      B = xzu697 / z;
      var x = xzu698 / v;
      r = B < x ? B : x;
      r *= 0 != w ? w : 20 > z && 20 > v ? 0.5 : 0.9;
      d(0.875);
      u = !0;
      xzu217.deactivateAll();
    }
  };
  this.setMapCamera = function (v) {
    xzu186.grMouseMoving = !1;
    y = !0;
    a(v);
    c(0, 0, xzu731 - 1, xzu732 - 1);
    d(0.875);
    u = !0;
    xzu217.deactivateAll();
  };
  this.instant = function (v, z, B, w) {
    c(v, z, B, w);
    xzu393 = r;
    xzu186.setZoomX(n, xzu697 / 2);
    xzu186.setZoomY(p, xzu698 / 2);
    xzu711.calculatePreRendering();
  };
  this.end = function () {
    if (u && y) return !1;
    u = !1;
    return !0;
  };
  this.calculate = function () {
    if (u) {
      0.5 > g
        ? m < h && ((m += h * b), (e = g))
        : g > 1 - e && ((m -= h * b), (m = m < h * b ? h * b : m));
      t = t >= xzu720.time ? xzu720.time - 1 : t;
      var v = xzu720.time - t;
      1e3 < v ? (g = 1) : ((g += (m * v) / q), (g = 1 < g ? 1 : g));
      t = xzu720.time;
      var z = xzu393;
      v = xzu394;
      var B = xzu395;
      xzu393 = f * Math.pow(r / f, g);
      z = xzu393 / z;
      var w = 1 - (f * Math.pow(r / f, 1 - g) - f) / (r - f);
      xzu186.setZoomX(l + w * (n - l), xzu697 / 2);
      xzu186.setZoomY(k + w * (p - k), xzu698 / 2);
      xzu210.zoom(z, (v * z - xzu394) / (1 - z), (B * z - xzu395) / (1 - z));
      xzu711.calculatePreRendering();
      1 <= g && ((u = !1), (xzu714.pixelInWindowChanged = !0));
      xzu720.requestRepaint = !0;
    }
  };
}
function zto954() {
  function a() {
    var t;
    a: {
      for (t = 0; 8 > t; t++)
        if (
          ((g = zto1304(m * xzu219.random(), xzu219.value(100))),
          (e = zto1304(h * xzu219.random(), xzu219.value(100))),
          d())
        ) {
          t = !0;
          break a;
        }
      t = !1;
    }
    if (!t)
      a: {
        t = zto1304(m * xzu219.random(), xzu219.value(100));
        for (
          var q = zto1304(h * xzu219.random(), xzu219.value(100)), u = 40;
          1 <= u;
          u--
        )
          for (var y = h - u; 0 <= y; y -= 40) {
            e = (y + q) % h;
            for (var v = 40; 1 <= v; v--)
              for (var z = m - v; 0 <= z; z -= 40)
                if (((g = (z + t) % m), d())) {
                  t = !0;
                  break a;
                }
          }
        t = !1;
      }
    return t;
  }
  function d() {
    var t = zto1304(l - n, 2),
      q = f + e * l + t;
    t = k + g * l + t;
    for (var u, y = q + n - 1; y >= q; y--)
      for (var v = t + n - 1; v >= t; v--)
        if (
          ((u = xzu206.coordToPoint(v, y)),
          !xzu206.isLand(u) || xzu206.isBorderLand(u))
        )
          return !1;
    return !0;
  }
  function c() {
    xzu665[p] = 0;
    xzu672[p] = 0;
    xzu670[p] = xzu671[p] = 0;
    xzu673[p] = [];
    xzu674[p] = [];
    xzu675[p] = [];
    xzu676[p] = [];
    xzu666[p] = xzu667[p] = xzu668[p] = xzu669[p] = 0;
  }
  function b(t, q) {
    xzu665[p] = 1;
    xzu672[p] = p < xzu146 ? xzu159 : xzu158;
    xzu666[p] = t + 10;
    xzu667[p] = q + 10;
    xzu669[p] = xzu668[p] = 0;
    var u, y;
    for (u = t; u < t + 4; u++)
      for (y = q; y < q + 4; y++)
        if ((u > t && u < t + 3) || (y > q && y < q + 3)) {
          var v = xzu206.coordToPoint(u, y);
          xzu206.isLand(v) &&
            ((xzu666[p] = u < xzu666[p] ? u : xzu666[p]),
            (xzu668[p] = u > xzu668[p] ? u : xzu668[p]),
            (xzu667[p] = y < xzu667[p] ? y : xzu667[p]),
            (xzu669[p] = y > xzu669[p] ? y : xzu669[p]),
            (r[xzu670[p]] = v),
            xzu670[p]++,
            xzu206.drawTerritorialSquare(v, p));
        }
    xzu671[p] = xzu670[p];
    for (v = xzu670[p] - 1; 0 <= v; v--)
      xzu206.hasNeutralOrEnemyNeighbour(r[v], p)
        ? (xzu206.drawBorderSquare(r[v], p), xzu674[p].push(r[v]))
        : xzu206.zto1271(r[v])
        ? (xzu206.drawBorderSquare(r[v], p), xzu675[p].push(r[v]))
        : xzu206.hasOutsideNeighbour(r[v]) &&
          (xzu206.drawBorderSquare(r[v], p), xzu676[p].push(r[v]));
  }
  var g, e, m, h, l, k, f, n, p, r;
  this.init = function () {
    r = Array(12);
    n = 6;
    l = 10;
    m = zto1304(xzu731, l);
    h = zto1304(xzu732, l);
    k = zto1304(xzu731 - l * m, 2);
    f = zto1304(xzu732 - l * h, 2);
    if (xzu164) for (var t = 0; t < xzu146; t++) (p = t), c(), (xzu665[p] = 1);
    if (!zto1265(xzu737)) {
      t = xzu211.get()[xzu737 - zto1263()];
      var q = t.length + xzu146;
      q = q > xzu150 ? xzu150 : q;
      for (p = xzu146; p < q; p++) {
        var u = t[p - xzu146][1] % xzu731,
          y = zto1304(t[p - xzu146][1], xzu731);
        c();
        b(u - 2, y - 2);
      }
    }
    for (p = 0; p < xzu150; p++)
      1 != xzu665[p] &&
        (a()
          ? ((q = k + g * l + zto1304(l, 2)),
            (t = f + e * l + zto1304(l, 2)),
            c(),
            b(q - 2, t - 2))
          : c());
    xzu717.values[7] = xzu670[xzu161];
    xzu717.values[8] = xzu672[xzu161];
  };
  this.findStartPosition = function (t, q, u) {
    var y, v;
    p = t;
    for (y = 0; 20 > y; y++)
      for (t = q + y; t >= q - y; t--)
        for (v = u + y; v >= u - y; v--)
          if (
            (t == q + y || t == q - y || v == u + y || v == u - y) &&
            3 < t &&
            t < xzu731 - 5 &&
            3 < v &&
            v < xzu732 - 5
          ) {
            var z;
            if ((z = xzu206.isLand(xzu206.coordToPoint(t, v))))
              a: {
                var B,
                  w = t + 3,
                  x = v + 3;
                for (z = x; z > x - 6; z--)
                  for (B = w; B > w - 6; B--) {
                    var C = xzu206.coordToPoint(B, z);
                    if (xzu206.isBorderLand(C)) {
                      z = !1;
                      break a;
                    }
                  }
                z = !0;
              }
            if (z) {
              if (0 < xzu670[p]) {
                for (u = xzu668[p]; u >= xzu666[p]; u--)
                  for (q = xzu669[p]; q >= xzu667[p]; q--)
                    (y = 4 * (q * xzu731 + u)),
                      xzu206.isThisPlayer(p, y) &&
                        (xzu206.drawNeutralSquare(y), xzu670[p]--);
                0 != xzu670[p] && console.log("error 3423");
                c();
              }
              b(t - 1, v - 1);
              return !0;
            }
          }
    return !1;
  };
  this.findFast = function (t) {
    p = t;
    if (a()) {
      t = k + g * l + zto1304(l, 2);
      var q = f + e * l + zto1304(l, 2);
      c();
      b(t - 2, q - 2);
    } else c();
  };
}
function zto966() {
  xzu221.zto1145();
  xzu690.setTransform(xzu393, 0, 0, xzu393, 0, 0);
  xzu690.imageSmoothingEnabled = 3 > xzu393;
  xzu690.drawImage(xzu733, xzu186.getX(), xzu186.getY());
  xzu690.drawImage(xzu767, xzu186.getX(), xzu186.getY());
  xzu690.imageSmoothingEnabled = !1;
  xzu221.draw();
  xzu690.setTransform(1, 0, 0, 1, 0, 0);
  xzu210.draw();
  xzu162 ||
    ((xzu690.imageSmoothingEnabled = !1),
    xzu181.draw(),
    xzu189.draw(),
    xzu185.draw(),
    xzu190.draw(),
    xzu186.draw(),
    xzu184.draw(),
    xzu722.draw(),
    xzu188.draw(),
    xzu183.draw(),
    xzu180.draw(),
    xzu191.draw(),
    xzu179.draw(),
    xzu718.draw(),
    xzu225.draw());
}
function zto967() {
  this.players = null;
  this.init = function (a) {
    this.players = a;
    xzu181.addEloStartMsg(this.players);
  };
  this.setEndingMessage = function (a) {
    var d =
        8 /
        (1 +
          Math.pow(
            2,
            (this.players[a].elo - this.players[1 - a].elo) / 10 / 32
          )),
      c = this.players[a].elo / 10 + d;
    d = this.players[1 - a].elo / 10 - d;
    d = 0 > d ? 0 : d;
    c = 4096 < c ? 4096 : c;
    xzu725.update(
      0,
      this.players[0].name,
      this.players[0].elo / 10,
      0 == a ? c : d
    );
    xzu725.update(
      0,
      this.players[1].name,
      this.players[1].elo / 10,
      0 == a ? d : c
    );
    c = c.toFixed(1);
    d = d.toFixed(1);
    0 == a
      ? xzu181.addEloEndMsg(this.players, c, d, [
          "rgba(10,140,10,0.75)",
          "rgba(140,10,10,0.75)",
        ])
      : xzu181.addEloEndMsg(this.players, d, c, [
          "rgba(140,10,10,0.75)",
          "rgba(10,140,10,0.75)",
        ]);
  };
}
function zto968() {
  function a(m, h, l) {
    m = m.trim();
    a: {
      var k = m.toLowerCase();
      for (var f = e.length - 1; 0 <= f; f--)
        if (0 <= k.indexOf(e[f])) {
          k = !0;
          break a;
        }
      k = !1;
    }
    if (k) return !1;
    k = m.length;
    if (k < h || k > l) return !1;
    for (f = h = 0; f < k; f++)
      if (
        ((l = m.charCodeAt(f)),
        (h += (65 <= l && 90 >= l) || (1040 <= l && 1071 >= l) ? 1 : 0),
        -1 == d(l))
      )
        return !1;
    return 3 < h && h > Math.floor(k / 2) ? !1 : !0;
  }
  function d(m) {
    for (var h = c.length - 1; 0 <= h; h--) if (m >= c[h] && m < b[h]) return h;
    return -1;
  }
  var c,
    b,
    g,
    e = "fuck asshole porn rape nigger rapist nigga nazi".split(" ");
  (function () {
    c = [32, 65, 191, 913, 931];
    b = [64, 127, 688, 930, 1155];
    g = Array(c.length + 1);
    for (var m = 0; m < g.length; m++) {
      g[m] = 0;
      for (var h = m - 1; 0 <= h; h--) g[m] += b[h] - c[h];
    }
  })();
  this.validateUsername = function (m) {
    m = m.trim();
    return 0 == m.indexOf("Bot ") || 0 == m.indexOf("[Bot] ")
      ? !1
      : a(m, 3, 22);
  };
  this.encode = function (m) {
    m = m.trim();
    for (var h = m.length, l = [], k, f = 0; f < h; f++) {
      k = m.charCodeAt(f);
      var n = d(k);
      l.push(g[n] + k - c[n]);
    }
    return l;
  };
  this.decode = function (m) {
    for (var h = "", l = m.length, k, f = 0; f < l; f++)
      for (k = 1; k < g.length; k++)
        if (m[f] < g[k]) {
          k = c[k - 1] + m[f] - g[k - 1];
          h += String.fromCharCode(k);
          break;
        }
    return h;
  };
  this.stringToNumberString = function (m) {
    m = this.encode(m);
    for (var h = "", l = 0; l < m.length; l++)
      (h += 10 > m[l] ? "00" : 100 > m[l] ? "0" : ""), (h += m[l].toString(10));
    return h;
  };
  this.numberStringToString = function (m) {
    for (var h = Array(Math.floor(m.length / 3)), l = 0; l < m.length; l += 3)
      h[Math.floor(l / 3)] = parseInt(m.substring(l, l + 3));
    return this.decode(h);
  };
  this.encodeNumberString = function (m) {
    var h,
      l = [m.length];
    for (h = 0; h < m.length; h++) l[h] = m.charCodeAt(h) - 48;
    var k = "";
    for (h = 0; h < m.length; h++)
      if (h == m.length - 1 || 51 < 10 * l[h] + l[h + 1]) k += l[h].toString();
      else {
        var f = 10 * l[h] + l[h + 1];
        k += String.fromCharCode(f + (26 > f ? 65 : 71));
        h++;
      }
    return k;
  };
  this.decodeNumberString = function (m) {
    for (var h = "", l, k = 0; k < m.length; k++)
      (l = m.charCodeAt(k)),
        48 <= l && 58 > l
          ? (h += String.fromCharCode(l))
          : 65 <= l && 75 > l
          ? (h += "0" + (l - 65).toString())
          : 75 <= l && 91 > l
          ? (h += (l - 65).toString())
          : 97 <= l && 123 > l && (h += (l - 71).toString());
    return h;
  };
  this.decodeMapString = function (m) {
    var h = m.length,
      l,
      k = [];
    for (l = 0; l < h; l++) {
      var f = m.charCodeAt(l);
      58 > f
        ? k.push(m[l])
        : ((f = 91 > f ? f - 65 : f - 71),
          k.push(String(zto1304(f, 10))),
          k.push(String(f - 10 * zto1304(f, 10))));
    }
    h = k.length - 2;
    f = 0;
    m = [];
    for (l = 0; l < h; l += 3) m[f++] = parseInt(k[l] + k[l + 1] + k[l + 2]);
    return m;
  };
}
function zto973() {
  this.endGame = function (a) {
    if (2 == xzu154) var d = !0;
    else
      (xzu154 = 2),
        (xzu149 = xzu147),
        xzu181.removeState(8),
        xzu181.removeState(17),
        (d = !1);
    d ||
      (0 < xzu167
        ? ((a = -1 == a ? (xzu670[0] >= xzu670[1] ? 0 : 1) : a),
          (d = a == xzu161),
          xzu226.wrapPackageGameEnding(d),
          d
            ? (xzu181.addState(a, 2), 2 == xzu167 && xzu169.setEndingMessage(a))
            : (xzu181.addState(1 - xzu161, 3),
              2 == xzu167 && xzu169.setEndingMessage(1 - xzu161)))
        : xzu166
        ? ((d = xzu722.isPlayerVictorious()),
          xzu226.wrapPackageGameEnding(d),
          xzu181.setWinMessageAlliances(d))
        : ((a = xzu442[0]),
          (d = a == xzu161),
          xzu226.wrapPackageGameEnding(d),
          xzu181.addState(a, d ? 2 : 3)),
      xzu191.show(d, !1),
      xzu189.repaint(!0),
      xzu190.repaint(!0),
      (xzu720.requestRepaint = !0),
      xzu714.renderAll(),
      zto878(0));
  };
}
function zto976() {
  this.add = function (a, d, c) {
    0 != xzu665[a] &&
      xzu177.findStartPosition(a, d, c) &&
      ((xzu720.requestRepaint = !0), (xzu714.atLeastOnePixelChanged = !0));
  };
  this.calculate = function () {
    xzu164 = !1;
    for (var a = 0; a < xzu146; a++)
      0 != xzu665[a] && 0 == xzu670[a] && xzu177.findFast(a);
    0 != xzu665[xzu161]
      ? ((xzu717.values[7] = xzu670[xzu161]),
        (xzu717.values[8] = xzu672[xzu161]),
        xzu185.setVisible(),
        xzu190.moveDown(),
        xzu176.instant(
          xzu666[xzu161] - 5,
          xzu667[xzu161] - 5,
          xzu668[xzu161] + 5,
          xzu669[xzu161] + 5
        ),
        xzu225.init(),
        (xzu714.pixelInWindowChanged = !0),
        xzu714.render())
      : xzu191.show(!1, !1);
    xzu181.removeState(18);
    xzu210.endFreePositioning();
    xzu210.repaint();
    xzu168 = null;
    xzu152 && zto878(1);
  };
}
var xzu146,
  xzu147,
  xzu148,
  xzu149,
  xzu150 = 512,
  xzu151 = 512,
  xzu152,
  xzu153,
  xzu154 = 0,
  xzu155,
  xzu156,
  xzu157,
  xzu158,
  xzu159 = 512,
  xzu160 = 2,
  xzu161,
  xzu162,
  xzu163,
  xzu164,
  xzu165,
  xzu166,
  xzu167,
  xzu168,
  xzu169;
function zto977(a, d, c, b, g, e, m) {
  xzu153 = xzu162 = !1;
  xzu166 = e;
  xzu167 = m ? 2 : 2 == b.length ? 1 : 0;
  xzu147 = xzu146 = b.length;
  xzu163 =
    (xzu152 = 1 == xzu147) && xzu196.get(33).colorBg == xzu196.get(5).colorBg;
  xzu168 = (xzu165 = xzu164 = g) ? new zto976() : null;
  xzu148 = xzu150 - xzu146;
  xzu149 = 0;
  xzu161 = c;
  xzu716.deinit();
  xzu219.setSeed(a);
  zto1244(b);
  xzu166 && !xzu152 && xzu721.init();
  xzu154 = 1;
  xzu156 = 2e9;
  xzu157 = zto1304(xzu156, 2);
  xzu158 = d;
  xzu717.init();
  zto1282();
  xzu214.adaptRasterC();
  xzu714.init();
  xzu209.init();
  zto915();
  xzu206.init(b);
  xzu221.init();
  xzu722.init();
  xzu211.create();
  xzu177.init();
  zto1245();
  xzu718.init();
  xzu170.init();
  xzu213.init();
  xzu769.putImageData(xzu770, 0, 0);
  xzu189.init();
  xzu186.init();
  xzu185.init();
  xzu188.init();
  xzu190.init();
  xzu180.init();
  xzu184.init();
  xzu181.init();
  xzu183.init();
  xzu179.init();
  xzu191.init();
  xzu174.init();
  xzu175.init();
  xzu171.init();
  xzu173.init();
  zto881();
  xzu208.init();
  xzu210.init();
  2 == xzu167 ? ((xzu169 = new zto967()), xzu169.init(b)) : (xzu169 = null);
  zto978();
  xzu225.init();
  xzu152 ? xzu720.initSingleplayer() : xzu720.initMultiplayer();
  xzu720.requestRepaint = !0;
  (xzu152 && xzu164) || zto878(1);
}
function zto978() {
  xzu176.setStartPosition();
  0 == xzu665[xzu161] && xzu191.show(!1, !0);
  xzu210.repaint();
}
function zto979() {
  xzu222.close(3200);
  xzu154 = 0;
  xzu720.initMainMenu();
  xzu204.init();
  zto878(0);
}
var xzu170,
  xzu171,
  xzu172,
  xzu173,
  xzu174,
  xzu175,
  xzu176,
  xzu177,
  xzu178,
  xzu179,
  xzu180,
  xzu181,
  xzu182,
  xzu183,
  xzu184,
  xzu185,
  xzu186,
  xzu187,
  xzu188,
  xzu189,
  xzu190,
  xzu191,
  xzu192,
  xzu193,
  xzu194,
  xzu195,
  xzu196,
  xzu197,
  xzu198,
  xzu199,
  xzu200,
  xzu201,
  xzu202,
  xzu203,
  xzu204,
  xzu205,
  xzu206,
  xzu207,
  xzu208,
  xzu209,
  xzu210,
  xzu211,
  xzu212,
  xzu213,
  xzu214,
  xzu215,
  xzu216,
  xzu217,
  xzu218,
  xzu219,
  xzu220,
  xzu221,
  xzu222,
  xzu223,
  xzu224,
  xzu225,
  xzu226,
  xzu227;
function zto980() {
  xzu170 = new zto920();
  xzu171 = new zto928();
  xzu172 = new zto932();
  xzu173 = new zto937();
  xzu174 = new zto940();
  xzu175 = new zto945();
  xzu176 = new zto947();
  xzu177 = new zto954();
  xzu178 = new zto968();
  xzu179 = new zto981();
  xzu180 = new zto989();
  xzu181 = new zto996();
  xzu182 = new zto1002();
  xzu183 = new zto1023();
  xzu184 = new zto1035();
  xzu185 = new zto1041();
  xzu186 = new zto1049();
  xzu187 = new zto1054();
  xzu188 = new zto1063();
  xzu189 = new zto1066();
  xzu190 = new zto1082();
  xzu191 = new zto1095();
  xzu192 = new zto1105();
  xzu193 = new zto1108();
  xzu194 = new zto1110();
  xzu195 = new zto1112();
  xzu196 = new zto1131();
  xzu197 = new zto1139();
  xzu198 = new zto1144();
  xzu199 = new zto1150();
  xzu200 = new zto1152();
  xzu201 = new zto1154();
  xzu202 = new zto1162();
  xzu203 = new zto1163();
  xzu204 = new zto1166();
  xzu205 = new zto1172();
  xzu206 = new zto1181();
  xzu207 = new zto1193();
  xzu208 = new zto1211();
  xzu209 = new zto1214();
  xzu210 = new zto1219();
  xzu211 = new zto1241();
  xzu212 = new zto1243();
  xzu213 = new zto1250();
  xzu214 = new zto1275();
  xzu215 = new zto1281();
  xzu216 = new zto1283();
  xzu217 = new zto1311();
  xzu218 = new zto1314();
  xzu219 = new zto1322();
  xzu220 = new zto1327();
  xzu221 = new zto1337();
  xzu222 = new zto1340();
  xzu223 = new zto1363();
  xzu224 = new zto1366();
  xzu225 = new zto1382();
  xzu226 = new zto1385();
  xzu227 = new zto1323();
}
function zto981() {
  function a(w, x, C, I) {
    for (var O, S = 0; S < w.length; S++) {
      x.push(document.createElement("canvas"));
      x[S].width = C;
      x[S].height = C;
      O = x[S].getContext("2d");
      var Q = C,
        K = O;
      K.fillStyle = I;
      K.beginPath();
      K.arc(
        Math.floor(Q / 2),
        Math.floor(Q / 2),
        Math.floor(0.47 * Q),
        0,
        2 * Math.PI
      );
      K.fill();
      O.drawImage(xzu205.get(3), -w[S] * C, 0);
    }
  }
  function d(w, x) {
    k = w - Math.floor(n / 2);
    f = x - Math.floor(n / 2);
    return g || e || m || h || l;
  }
  function c(w, x) {
    return w < k - n - y ||
      w > k + 2 * n + y ||
      x < f ||
      x > f + 2 * n + y ||
      (x > f + n && (w < k || w > k + n))
      ? !1
      : !0;
  }
  function b() {
    if (q == xzu161) return !1;
    for (var w, x = 3; 0 <= x; x--)
      for (var C = xzu674[xzu161].length - 1; 0 <= C; C--)
        if (
          ((w = xzu674[xzu161][C] + xzu18[x]),
          xzu206.isPlayer(w) && xzu206.getPlayerAt(w) == q)
        )
          return !0;
    return !1;
  }
  var g, e, m, h, l, k, f, n, p, r, t, q, u, y, v, z, B;
  this.init = function () {
    l = h = m = e = g = !1;
    p = r = k = f = t = 0;
    this.prepare();
  };
  this.prepare = function () {
    v = [];
    z = [];
    this.cvsBlack = [];
    var w = xzu205.get(3).height;
    n = Math.floor((xzu706 ? 0.11 : 0.065) * xzu696);
    B = n / w;
    y = Math.floor(n / 3);
    a([0, 1, 2, 3, 4], v, w, "rgba(0,180,0,0.6)");
    a([0], z, w, "rgba(200,0,0,0.6)");
    a([0, 2, 4], this.cvsBlack, w, "rgba(0,0,0,0.6)");
  };
  this.mouseDownSelected = function (w, x) {
    if (this.isVisible()) {
      var C = this.mouseDown(w, x);
      xzu720.requestRepaint = 0 < C;
      return 2 > C;
    }
    return !1;
  };
  this.mouseDownUnselected = function (w, x) {
    this.isVisible() || ((p = w), (r = x), (t = new Date().getTime()));
  };
  this.mouseDown = function (w, x) {
    r = p = -1e3;
    if (0 == xzu665[xzu161] && !xzu164) return this.hide(), 1;
    if (h) {
      this.hide();
      if (xzu715.isInside(w, x)) xzu715.process(w, x, q) && (h = !0);
      else return xzu715.setDefaultState(), 2;
      return 1;
    }
    if (!c(w, x)) return this.hide(), 2;
    if (x > f + n) {
      if (l) return this.hide(), (h = xzu715.show(w, x)), 1;
      this.hide();
      return 2;
    }
    if (w < k - y / 2) {
      if (m)
        return (
          this.hide(),
          xzu181.addBalanceWarning(),
          xzu152
            ? zto1100(xzu161, q, xzu185.getPercentageThousand())
            : xzu226.wrapPackageLandAttack(
                xzu185.getPercentageThousand(),
                q == xzu150 ? xzu161 : q
              ),
          1
        );
      this.hide();
      return 2;
    }
    if (w < k + n + y / 2)
      return g
        ? (xzu164
            ? (this.hide(),
              xzu152
                ? (xzu168.add(0, xzu206.getX(u), xzu206.getY(u)),
                  xzu168.calculate())
                : xzu226.wrapPackageSeaAttack(
                    1e3,
                    xzu206.getX(u),
                    xzu206.getY(u)
                  ))
            : (this.hide(),
              xzu181.addBalanceWarning(),
              xzu152
                ? zto1098(xzu161, q, xzu185.getPercentageThousand())
                : (!xzu165 || 300 < xzu190.getTimePassed()) &&
                  xzu226.wrapPackageLandAttack(
                    xzu185.getPercentageThousand(),
                    q == xzu150 ? xzu161 : q
                  )),
          1)
        : 0;
    if (e)
      return (
        this.hide(),
        xzu181.addBalanceWarning(),
        xzu152
          ? xzu174.executeSeaAttack(
              xzu161,
              xzu185.getPercentageThousand(),
              xzu206.getX(u),
              xzu206.getY(u)
            )
          : xzu226.wrapPackageSeaAttack(
              xzu185.getPercentageThousand(),
              xzu206.getX(u),
              xzu206.getY(u)
            ),
        1
      );
    this.hide();
    return 2;
  };
  this.click = function (w, x) {
    if (this.isVisible() || (0 == xzu665[xzu161] && !xzu164)) return !1;
    var C = (xzu706 ? 0.04 : 0.02) * xzu696;
    if (
      Math.abs(w - p) > C ||
      Math.abs(x - r) > C ||
      new Date().getTime() > t + 425
    )
      return !1;
    C = Math.floor((w + xzu394) / xzu393);
    var I = Math.floor((x + xzu395) / xzu393);
    if (1 > C || 1 > I || C >= xzu731 - 1 || I >= xzu732 - 1) return !1;
    var O = I * xzu731 * 4 + 4 * C;
    if (!xzu206.isLand(O)) return !1;
    if (2 == xzu154)
      return 1 <= xzu715.nSelected && ((q = xzu206.getPlayerAt(O)), q < xzu146)
        ? (q == xzu161 ? (this.hide(), (h = xzu715.show(w, x))) : (l = !0),
          d(w, x))
        : !1;
    u = xzu206.coordToPoint(C, I);
    if (xzu164) return (g = !0), d(w, x);
    e = xzu218.exists(xzu161, u);
    if (xzu206.isNeutral(O)) {
      q = xzu150;
      a: {
        for (I = 3; 0 <= I; I--)
          for (O = xzu674[xzu161].length - 1; 0 <= O; O--)
            if (((C = xzu674[xzu161][O] + xzu18[I]), xzu206.isNeutral(C))) {
              g = !0;
              break a;
            }
        g = !1;
      }
      return d(w, x);
    }
    q = xzu206.getPlayerAt(O);
    if (q == xzu161) return this.hide(), (h = xzu715.show(w, x)), d(w, x);
    l = 1 <= xzu715.nSelected && q < xzu146;
    if (
      b() &&
      (!xzu166 ||
        (xzu152 && 1 == q % 2) ||
        (!xzu152 && (q >= xzu146 || xzu721.ids[q] != xzu721.ids[xzu161])))
    )
      return (g = !0), d(w, x);
    xzu166 &&
      (xzu152
        ? 0 == q % 2 && (m = !0)
        : q < xzu146 && xzu721.ids[q] == xzu721.ids[xzu161] && (m = !0));
    return d(w, x);
  };
  this.mouseMove = function (w, x) {
    if (h) {
      if (xzu715.isInside(w, x)) return !1;
      xzu715.setDefaultState();
      h = !1;
      return (xzu720.requestRepaint = !0);
    }
    return c(w, x) && (e || w <= k + n) && (m || w >= k) && (l || x <= f + n)
      ? !1
      : g || e || m || l
      ? ((l = m = e = g = !1), (xzu720.requestRepaint = !0))
      : !1;
  };
  this.hide = function () {
    l = h = m = e = g = !1;
  };
  this.prepareEndgame = function () {
    m = e = g = !1;
  };
  this.isVisible = function () {
    return g || e || m || h || l;
  };
  this.draw = function () {
    if (g || e || m || h || l)
      h
        ? xzu715.draw()
        : ((xzu690.imageSmoothingEnabled = !0),
          xzu690.setTransform(B, 0, 0, B, k, f),
          l && xzu690.drawImage(v[4], 0, (n + y) / B),
          g
            ? xzu164
              ? xzu690.drawImage(v[3], 0, 0)
              : xzu690.drawImage(v[0], 0, 0)
            : xzu690.drawImage(z[0], 0, 0),
          e && xzu690.drawImage(v[1], (n + y) / B, 0),
          m && xzu690.drawImage(v[2], (-n - y) / B, 0),
          (xzu690.imageSmoothingEnabled = !1),
          xzu690.setTransform(1, 0, 0, 1, 0, 0));
  };
}
function zto989() {
  function a() {
    var k = g.getContext("2d");
    k.clearRect(0, 0, b, b);
    k.fillStyle = xzu289;
    k.fillRect(0, 0, b, b);
    0 == h && ((k.fillStyle = xzu305), k.fillRect(0, 0, b, b));
    k.fillStyle = xzu315;
    k.fillRect(0, 0, b, 1);
    k.fillRect(0, 0, 1, b);
    k.fillRect(0, b - 1, b, 1);
    k.fillRect(b - 1, 0, 1, b);
    var f = (0.9 * b) / xzu205.get(0).width;
    k.imageSmoothingEnabled = !0;
    k.setTransform(
      f,
      0,
      0,
      f,
      Math.floor((b - f * xzu205.get(0).width) / 2),
      Math.floor((b - f * xzu205.get(0).height) / 2)
    );
    k.drawImage(xzu205.get(0), 0, 0);
    k.setTransform(1, 0, 0, 1, 0, 0);
  }
  function d(k, f) {
    if (!xzu180.isSelected) return k <= b + xzu347 && f >= xzu185.y ? 0 : -1;
    if (k <= 4 * b + xzu347) {
      if (f >= xzu185.y) return 0;
      if (f >= xzu185.y - b - l * xzu347) return 2;
      if (f >= xzu185.y - 2 * (b + l * xzu347)) return 3;
    } else if (k <= 5.5 * b + xzu347 && f >= xzu185.y) return 1;
    return -1;
  }
  function c(k, f) {
    xzu690.setTransform(1, 0, 0, 1, xzu347, xzu185.y - k * l * xzu347 - k * b);
    xzu690.fillStyle = xzu289;
    xzu690.fillRect(0, 0, 4 * b, b);
    h == k + 1 &&
      f == xzu315 &&
      ((xzu690.fillStyle = xzu305), xzu690.fillRect(0, 0, 4 * b, b));
    xzu690.fillStyle = f;
    xzu690.fillRect(0, 0, 4 * b, 1);
    xzu690.fillRect(0, 0, 1, b);
    xzu690.fillRect(4 * b, 0, 1, b);
    xzu690.fillRect(0, b - 1, 4 * b, 1);
    xzu690.fillText(m[k], 2 * b, 0.54 * b);
  }
  var b,
    g,
    e,
    m = ["Quit Game", "Surrender", "Statistics"],
    h,
    l;
  this.init = function () {
    h = -1;
    this.isSelected = !1;
    l = xzu706 ? 1.2 : 0.6;
    this.zto1324();
  };
  this.zto1324 = function () {
    b = xzu185.h;
    g = document.createElement("canvas");
    g.width = b;
    g.height = b;
    e = xzu332 + Math.floor((xzu706 ? 0.5 : 0.45) * b) + xzu336;
    a();
  };
  this.switchState = function () {
    (this.isSelected = !this.isSelected)
      ? (xzu181.moveDown(),
        xzu152 &&
          (setTimeout(function () {
            xzu714.renderAll();
          }, 0),
          zto878(0)))
      : (xzu181.moveUp(), (h = -1), a(), xzu152 && zto878(1));
    xzu720.requestRepaint = !0;
  };
  this.mouseDown = function (k, f) {
    var n = d(k, f);
    return this.isSelected
      ? 0 == n
        ? (zto979(), zto879(), 2)
        : 1 == n
        ? (this.switchState(), 2)
        : 2 == n
        ? (this.surrenderPossible(xzu161) &&
            (xzu152 ? xzu174.surrender(xzu161) : xzu226.wrapSurrender(),
            this.switchState()),
          2)
        : 3 == n && 2 <= xzu717.filled
        ? (xzu718.switchState(), (xzu720.requestRepaint = !0), 2)
        : xzu718.isVisible || xzu189.mouseDown(k, f)
        ? 1
        : (this.switchState(), 2)
      : 0 == n
      ? (this.switchState(), 2)
      : 0;
  };
  this.mouseMove = function (k, f) {
    var n = d(k, f);
    if (n == h) return -1 != h;
    h = n;
    this.isSelected || a();
    xzu720.requestRepaint = !0;
    return -1 != h;
  };
  this.draw = function () {
    if (this.isSelected) {
      var k = Math.floor(5.5 * b);
      xzu690.setTransform(1, 0, 0, 1, xzu347, xzu185.y);
      xzu690.fillStyle = xzu289;
      xzu690.fillRect(0, 0, k, b);
      0 == h
        ? ((xzu690.fillStyle = xzu305), xzu690.fillRect(0, 0, 4 * b, b))
        : 1 == h &&
          ((xzu690.fillStyle = xzu305),
          xzu690.fillRect(4 * b, 0, Math.floor(1.5 * b), b));
      xzu690.fillStyle = xzu315;
      xzu690.fillRect(0, 0, k, 1);
      xzu690.fillRect(0, 0, 1, b);
      xzu690.fillRect(4 * b, 0, 1, b);
      xzu690.fillRect(0, b - 1, k, 1);
      xzu690.fillRect(k - 1, 0, 1, b);
      xzu690.font = e;
      xzu690.textBaseline = xzu326;
      xzu690.textAlign = xzu329;
      xzu690.fillText(m[0], 2 * b, 0.54 * b);
      k = 0.4 * b;
      xzu180.drawCross(
        xzu347 + 4 * b + (1.5 * b - k) / 2,
        xzu185.y + 0.3 * b,
        k
      );
      c(1, xzu180.surrenderPossible(xzu161) ? xzu315 : xzu295);
      2 <= xzu717.filled && c(2, xzu315);
      xzu690.setTransform(1, 0, 0, 1, 0, 0);
    } else xzu690.drawImage(g, xzu347, xzu185.y);
  };
  this.surrenderPossible = function (k) {
    return 0 != xzu665[k] && 2 != xzu154 && (xzu152 || 2 == xzu146);
  };
  this.drawCross = function (k, f, n) {
    xzu690.setTransform(1, 0, 0, 1, k, f);
    xzu690.lineWidth = 2;
    xzu690.strokeStyle = xzu315;
    xzu690.beginPath();
    xzu690.moveTo(0, 0);
    xzu690.lineTo(n, n);
    xzu690.moveTo(0, n);
    xzu690.lineTo(n, 0);
    xzu690.stroke();
  };
}
function zto996() {
  function a(f, n, p, r, t, q) {
    var u = 1e3 <= p;
    var y = p - 1e3,
      v = Math.floor(
        xzu184.measureText(n, xzu181.font) + 1.5 * g + (u ? c : 1.5 * g)
      ),
      z = document.createElement("canvas");
    z.width = v;
    z.height = c;
    var B = z.getContext("2d", { alpha: !0 });
    B.font = xzu181.font;
    B.textBaseline = xzu326;
    B.textAlign = xzu330;
    B.clearRect(0, 0, v, c);
    B.fillStyle = q;
    B.fillRect(0, 0, v, c);
    B.fillStyle = t;
    B.fillText(n, Math.floor(1.5 * g), Math.floor(c / 2));
    u &&
      ((u = c / xzu715.w),
      (B.imageSmoothingEnabled = !0),
      B.setTransform(u, 0, 0, u, v - c, 0),
      B.drawImage(xzu715.cvs[y], 0, 0));
    d.unshift({
      time: f,
      str: n,
      id: p,
      player: r,
      canvas: z,
      clrFont: t,
      clrBackground: q,
      w: v,
    });
  }
  var d, c, b, g, e, m, h, l, k;
  this.init = function () {
    k = 0;
    l = xzu706 ? 7 : 12;
    m = [];
    h = [];
    d = [];
    this.zto1324();
    xzu164 && this.addState(0, 18);
    var f = "Map: " + xzu215.get(xzu737).name;
    a(300, f, 6, 0, xzu315, xzu290);
  };
  this.zto1324 = function () {
    c = Math.floor((xzu706 ? 0.0405 : 0.0345) * xzu696);
    c = 10 > c ? 10 : c;
    this.fontSize = Math.floor((2 * c) / 3);
    this.font = xzu332 + this.fontSize + xzu336;
    b = xzu706 && xzu694 < xzu695 ? xzu347 : 0;
    g = Math.floor(c / 5);
    this.moveUp();
    if (0 < d.length) {
      var f = d;
      d = [];
      for (var n = f.length - 1; 0 <= n; n--)
        a(
          f[n].time,
          f[n].str,
          f[n].id,
          f[n].player,
          f[n].clrFont,
          f[n].clrBackground
        );
    }
  };
  this.moveUp = function () {
    e =
      xzu706 && !xzu164 && xzu694 < xzu695 && xzu185.isVisible()
        ? xzu698 - xzu185.y
        : 0;
  };
  this.moveDown = function () {
    e = 0;
  };
  this.mouseDown = function (f, n) {
    for (var p, r = d.length - 1; 0 <= r; r--)
      if (((p = Math.floor(xzu698 - (r + 1) * c - e)), n >= p && n < p + c)) {
        if (f >= xzu697 - d[r].w - b)
          return (
            1 == d[r].id ||
            3 == d[r].id ||
            4 == d[r].id ||
            5 == d[r].id ||
            7 == d[r].id ||
            8 == d[r].id ||
            19 == d[r].id ||
            30 == d[r].id ||
            31 == d[r].id ||
            66 == d[r].id ||
            22 == d[r].id ||
            1e3 <= d[r].id
              ? xzu176.setDeathCamera(d[r].player, 800, !1, 0)
              : 17 == d[r].id && xzu726.endGame(-1),
            !0
          );
        break;
      }
    return !1;
  };
  this.removeState = function (f) {
    for (var n = d.length - 1; 0 <= n; n--) d[n].id == f && (d[n].time = 1);
  };
  this.addState = function (f, n) {
    if (0 == n)
      xzu717.values[f < xzu146 ? 4 : 3]++,
        xzu184.add(f, 0),
        a(
          xzu706 ? 100 : 160,
          "You erased " + xzu664[f] + ".",
          n,
          f,
          "rgb(0,255,0)",
          xzu290
        );
    else if (1 == n)
      xzu184.add(f, 1),
        a(360, "You were erased by " + xzu664[f] + ".", n, f, xzu315, xzu290),
        xzu176.setDeathCamera(f, 2700, !0, 0);
    else if (2 == n)
      xzu184.add(f, 2),
        a(0, "Congratulations! You won the game.", n, f, xzu315, xzu290),
        xzu176.setDeathCamera(f, 2700, !0, 0);
    else if (3 == n)
      xzu184.add(f, 2),
        a(0, xzu664[f] + " won the game.", n, f, xzu315, xzu290),
        xzu176.setDeathCamera(f, 2700, !0, 0);
    else if (4 == n) {
      xzu147--;
      xzu149--;
      var p = h.length;
      if (32 <= xzu147 || 0 < p) {
        var r = xzu720.getCalculations();
        h.push(r);
        h.push(f);
        2 < p &&
          (h[0] < r - 140 || 2 == xzu154) &&
          (a(
            180,
            xzu664[f] +
              " and " +
              Math.floor(p / 2) +
              " other players left the game.",
            4,
            f,
            xzu315,
            xzu290
          ),
          (h = []));
      } else a(180, xzu664[f] + " left the game.", 4, f, xzu315, xzu290);
    } else if (5 == n) {
      if (5 <= d.length)
        for (r = p = 0; r < d.length; r++)
          if (d[r].id == n && (p++, 5 <= p)) {
            d.splice(r, 1);
            break;
          }
      a(180, xzu664[f] + " is attacking you!", n, f, "rgb(255,50,50)", xzu290);
    } else
      8 == n
        ? a(
            125,
            "If the leaderboard stays unchanged, the game will end!",
            n,
            0,
            "rgb(255,255,0)",
            xzu290
          )
        : 17 == n
        ? a(0, "Claim Victory!", n, 0, xzu315, xzu302)
        : 18 == n
        ? a(255, "Choose your start position!", n, 0, xzu315, xzu290)
        : 19 == n
        ? a(
            140,
            xzu664[f] + " has interrupted the countdown.",
            n,
            f,
            "rgb(255,180,255)",
            xzu290
          )
        : 21 == n
        ? a(220, "You surrendered!", n, 0, xzu315, "rgba(160,0,0,0.75)")
        : 22 == n &&
          a(
            5 < xzu146 ? 80 : 220,
            xzu664[f] + " surrendered!",
            n,
            f,
            xzu315,
            xzu290
          );
  };
  this.sendEmoji = function (f, n, p) {
    f == xzu161
      ? a(175, " Message to " + xzu664[n] + ": ", 1e3 + p, n, xzu315, xzu290)
      : this.receiveEmoji(f, p);
  };
  this.receiveEmoji = function (f, n) {
    var p,
      r = 0;
    a(175, xzu664[f] + ": ", 1e3 + n, f, "rgb(200,255,210)", xzu290);
    for (p = 0; p < d.length; p++)
      1e3 <= d[p].id &&
        d[p].player == f &&
        (r++, 3 < r && 20 < d[p].time && (d[p].time = 20));
  };
  this.setWinMessageAlliances = function (f) {
    f
      ? a(
          0,
          "Congratulations! Your alliance won the game.",
          40,
          0,
          xzu315,
          xzu290
        )
      : a(0, "Your alliance was defeated!", 41, 0, xzu315, xzu290);
    xzu184.addText(512 < xzu722.q ? "Team Red" : "Team Blue", 2);
    xzu176.setMapCamera(2700);
  };
  this.addEloStartMsg = function (f) {
    var n = (f[0].elo / 10).toFixed(1),
      p = (f[1].elo / 10).toFixed(1);
    a(
      300,
      f[0].name + " [" + n + "] vs " + f[1].name + " [" + p + "]",
      65,
      0,
      xzu288,
      "rgba(100,255,255,0.75)"
    );
  };
  this.addEloEndMsg = function (f, n, p, r) {
    var t = (f[0].elo / 10).toFixed(1),
      q = (f[1].elo / 10).toFixed(1);
    a(0, f[0].name + ": " + t + " -> " + n, 66, 0, xzu315, r[0]);
    a(0, f[1].name + ": " + q + " -> " + p, 66, 1, xzu315, r[1]);
  };
  this.addClanMsg = function (f) {
    a(0, "[" + f + "] won this contest!", 45, 0, xzu288, xzu320);
  };
  this.addBalanceWarning = function () {
    100 <= xzu672[xzu161] ||
      a(80, "Your balance is too low!", 9, 0, "rgb(255,255,0)", xzu290);
  };
  this.addSupport = function (f, n) {
    a(
      200,
      "You exported " +
        xzu183.createString(f) +
        " war material" +
        (1 == f ? "" : "s") +
        " to " +
        xzu664[n] +
        ".",
      30,
      n,
      "rgb(10,220,10)",
      xzu290
    );
  };
  this.receiveSupport = function (f, n) {
    var p = 200 - 20 * d.length;
    a(
      80 > p ? 80 : p,
      xzu664[n] +
        " supported you with " +
        xzu183.createString(f) +
        " war material" +
        (1 == f ? "" : "s") +
        ".",
      31,
      n,
      xzu315,
      "rgba(0,100,0,0.75)"
    );
  };
  this.addStateErased = function (f, n) {
    var p = m.length;
    if (32 <= xzu147 - xzu149 || 0 < p) {
      var r = xzu720.getCalculations();
      m.push(r);
      m.push(f);
      2 < p &&
        (m[0] < r - 140 || 2 == xzu154) &&
        (a(
          260,
          xzu664[f] +
            " and " +
            Math.floor(p / 2) +
            " other players were erased.",
          7,
          f,
          xzu315,
          xzu290
        ),
        (m = []));
    } else
      a(
        260,
        xzu664[f] + " was erased by " + xzu664[n] + ".",
        7,
        n,
        xzu315,
        xzu290
      );
  };
  this.calculate = function (f) {
    var n,
      p = d.length - l;
    p = 1 >= p ? 1 : p * p;
    for (n = d.length - 1; 0 <= n; n--)
      0 < d[n].time &&
        (!f || 1 == d[n].time || 8 != d[n].id) &&
        ((d[n].time -= 8 == d[n].id ? 1 : p), 0 >= d[n].time && d.splice(n, 1));
    a: if (!(175 <= k)) {
      k++;
      if (125 == k)
        for (f = xzu679 - 1; 0 <= f; f--)
          if (1 == xzu677[xzu678[f]]) {
            a(
              240,
              xzu664[xzu678[f]] + " joined the game.",
              1,
              xzu678[f],
              xzu288,
              "rgba(210,255,210,0.75)"
            );
            break a;
          }
      if (175 == k)
        for (f = xzu679 - 1; 0 <= f; f--)
          if (3 < xzu677[xzu678[f]]) {
            a(
              240,
              "The weakest player of this round: " + xzu664[xzu678[f]],
              1,
              xzu678[f],
              xzu288,
              "rgba(255,210,210,0.75)"
            );
            break;
          }
    }
  };
  this.draw = function () {
    for (var f = d.length - 1; 0 <= f; f--)
      xzu690.drawImage(
        d[f].canvas,
        xzu697 - d[f].w - b,
        Math.floor(xzu698 - (f + 1) * c - e - b)
      );
  };
}
function zto1001() {
  this.fontSize = this.h1 = this.h0 = this.w0 = this.h = this.w = 0;
  this.index = -1;
  this.strs = ["Accept Cookies", "More Information", "Decline"];
  this.colors = ["rgba(0,255,0,0.4)", "rgba(0,0,255,0.4)", "rgba(255,0,0,0.4)"];
  this.isVisible = !1;
  this.init = function () {
    this.zto1324();
    this.isVisible = 5 > xzu705 && !xzu702 && 0 == xzu207.accepted();
  };
  this.zto1324 = function () {
    this.w = Math.floor(2.8 * Math.floor((xzu706 ? 0.13 : 0.085) * xzu696));
    this.h = Math.floor(1 * this.w);
    this.w0 = Math.floor(0.06 * this.w);
    this.w1 = this.w - 2 * this.w0;
    this.h0 = this.w0;
    this.h1 = (this.h - (this.strs.length + 1) * this.h0) / this.strs.length;
    this.fontSize = Math.floor(0.3 * this.h1);
  };
  this.mouseDown = function (a, d) {
    if (!this.isVisible) return !1;
    var c = this.getIndex(a, d);
    if (-1 == c) return !1;
    0 == c
      ? (xzu207.setAccepted(2), (this.isVisible = !1))
      : 1 == c
      ? xzu728.init(xzu344, !0)
      : 2 == c && (xzu207.setAccepted(1), (this.isVisible = !1));
    return (xzu720.requestRepaint = !0);
  };
  this.mouseMove = function (a, d) {
    if (!this.isVisible) return !1;
    var c = this.index;
    this.index = this.getIndex(a, d);
    c != this.index && (xzu720.requestRepaint = !0);
    return -1 != this.index;
  };
  this.getIndex = function (a, d) {
    a -= xzu349;
    d -= Math.floor(xzu698 - this.h - xzu349);
    if (0 > a || 0 > d || a >= this.w || d >= this.h) return -1;
    var c = Math.floor(
      (d - 0.5 * this.h0) / ((this.h - this.h0) / this.strs.length)
    );
    return 0 > c ? 0 : c >= this.strs.length ? this.strs.length - 1 : c;
  };
  this.draw = function () {
    this.isVisible && this.drawAll();
  };
  this.drawAll = function () {
    var a = xzu349,
      d = Math.floor(xzu698 - this.h - xzu349);
    xzu690.setTransform(1, 0, 0, 1, a, d);
    xzu690.fillStyle = xzu290;
    xzu690.fillRect(0, 0, this.w, this.h);
    xzu690.textBaseline = xzu326;
    xzu690.textAlign = xzu329;
    xzu690.strokeStyle = xzu315;
    xzu690.font = xzu332 + this.fontSize + xzu336;
    xzu690.strokeRect(0, 0, this.w, this.h);
    for (var c = this.strs.length - 1; 0 <= c; c--)
      xzu690.setTransform(
        1,
        0,
        0,
        1,
        a + this.w0,
        d + this.h0 + c * (this.h0 + this.h1)
      ),
        (xzu690.fillStyle = this.colors[c]),
        xzu690.fillRect(0, 0, this.w1, this.h1),
        this.index == c &&
          ((xzu690.fillStyle = xzu317),
          xzu690.fillRect(0, 0, this.w1, this.h1)),
        (xzu690.fillStyle = xzu315),
        xzu690.fillText(this.strs[c], this.w1 / 2, 0.54 * this.h1),
        xzu690.strokeRect(0, 0, this.w1, this.h1);
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
  };
}
function zto1002() {
  function a(f) {
    f || ((e = xzu184.measureText(c, h)), (e += Math.floor(0.4 * m)));
  }
  function d(f) {
    return 10 > f ? "0" + f : String(f);
  }
  var c,
    b,
    g,
    e,
    m,
    h,
    l = ["", "", "", ""],
    k;
  this.init = function () {
    k = 0;
    void 0 === e && this.zto1324();
    this.setTime();
  };
  this.zto1324 = function () {
    e = Math.floor((xzu706 ? (xzu695 > xzu694 ? 0.38 : 0.64) : 0.5) * xzu695);
    m = Math.floor(0.065 * e);
    h = xzu332 + Math.floor(0.97 * m) + xzu337;
  };
  this.calculate = function () {
    this.setTime() && (xzu720.requestRepaint = !0);
  };
  this.setTime = function () {
    if (7 == xzu198.getState() && xzu201.isContest()) {
      var f = g;
      g = 100 - xzu201.getProgress();
      c = l[k] + d(g);
      a(f == g);
      return f != g;
    }
    f = new Date();
    var n = f.getUTCMinutes(),
      p = f.getUTCSeconds();
    b = 3600 - 60 * n - p;
    b %= 900;
    b += 60;
    b %= 900;
    k = 46 <= n || 0 == n ? 0 : 31 <= n ? 3 : 16 <= n ? 2 : 1;
    c = l[k] + d(Math.floor(b / 60)) + ":" + d(b % 60);
    f = g;
    g = 60 * n + p;
    a(f == g);
    return f != g
      ? (61 == b && xzu354.objs[1].sel && !xzu716.initiated && xzu716.init(),
        60 == b && xzu716.playGameEntry(),
        !0)
      : !1;
  };
  this.draw = function () {
    xzu690.save();
    xzu690.lineWidth = 1 + Math.floor(m / 15);
    xzu690.translate(xzu697 - m, Math.floor(0.5 * (xzu698 + e)));
    xzu690.rotate(-Math.PI / 2);
    xzu690.fillStyle =
      7 == xzu198.getState() && xzu201.isContest() ? xzu322 : xzu315;
    xzu690.fillRect(0, 0, e, m);
    xzu690.strokeStyle = xzu288;
    xzu690.strokeRect(0, 0, e, m + 10);
    xzu690.fillStyle = xzu288;
    xzu690.font = h;
    xzu690.textBaseline = xzu326;
    xzu690.textAlign = xzu329;
    xzu690.fillText(c, Math.floor(e / 2), Math.floor(0.57 * m));
    xzu690.restore();
  };
}
function zto1006() {
  this.rows = 10;
  this.nFlags = this.nEmojis = 50;
  this.nArrows = 8;
  this.nVisible = this.nEmojis + this.nFlags;
  this.nAll = this.nEmojis + this.nFlags + this.nArrows;
  this.w = 72;
  this.wCell = this.wAdapted = 0;
  this.cvs = Array(this.nAll);
  this.rectRows = 8;
  this.gridX = Array(this.nEmojis + this.nFlags);
  this.gridY = Array(this.nEmojis + this.nFlags);
  this.y1 = this.x1 = 0;
  this.zoom = 1;
  this.gapPercent = 0.2;
  this.nSelected = 0;
  this.indexSelected = this.arrSelected = null;
  this.timeAppearance = 0;
  this.init = function () {
    var a;
    this.arrSelected = Array(this.nAll);
    this.indexSelected = Array(this.nAll);
    var d = xzu205.getByName("emojis");
    this.handleGUIsize();
    for (a = this.nSelected = 0; a < this.nEmojis; a++)
      this.initHelper(a, a, d);
    d = xzu205.getByName("flags");
    for (a = 0; a < this.nFlags; a++) this.initHelper(a, this.nEmojis + a, d);
    this.initCreateArrows();
    this.cvs[26] = this.initCreateArrowsHelper(25, 2);
    this.decodeString();
  };
  this.initHelper = function (a, d, c) {
    this.arrSelected[d] = !1;
    this.indexSelected[d] = 0;
    var b = document.createElement("canvas");
    b.width = this.w;
    b.height = this.w;
    var g = b.getContext("2d", { alpha: !0 });
    g.clearRect(0, 0, this.w, this.w);
    23 == d
      ? g.drawImage(xzu179.cvsBlack[2], 0, 0)
      : 36 == d
      ? g.drawImage(xzu179.cvsBlack[0], 0, 0)
      : 49 == d
      ? g.drawImage(xzu179.cvsBlack[1], 0, 0)
      : g.drawImage(
          c,
          (this.w * a) % (a == d ? this.rows * this.w : 4e3),
          a == d ? zto1304(a, this.rows) * this.w : 0,
          this.w,
          this.w,
          0,
          0,
          this.w,
          this.w
        );
    this.cvs[d] = b;
  };
  this.initCreateArrows = function () {
    this.cvs[this.nAll - 5] = this.cvs[26];
    this.cvs[this.nAll - 4] = this.initCreateArrowsHelper(this.nAll - 5, 2);
    this.cvs[this.nAll - 1] = this.initCreateArrowsHelper(this.nAll - 5, 1);
    this.cvs[this.nAll - 8] = this.initCreateArrowsHelper(this.nAll - 4, 1);
    this.cvs[this.nAll - 3] = this.cvs[39];
    this.cvs[this.nAll - 2] = this.initCreateArrowsHelper(this.nAll - 3, 1);
    this.cvs[this.nAll - 7] = this.initCreateArrowsHelper(this.nAll - 2, 1);
    this.cvs[this.nAll - 6] = this.initCreateArrowsHelper(this.nAll - 7, 1);
  };
  this.initCreateArrowsHelper = function (a, d) {
    var c = document.createElement("canvas");
    c.width = this.w;
    c.height = this.w;
    var b = c.getContext("2d", { alpha: !0 });
    b.clearRect(0, 0, this.w, this.w);
    b.rotate((d * Math.PI) / 2);
    b.drawImage(this.cvs[a], 1 == d ? 0 : -this.w, -this.w);
    return c;
  };
  this.decodeString = function () {
    var a = zto870().split("");
    if (2 * a.length != this.nAll) this.nSelected = 0;
    else {
      for (var d = 0; d < this.nAll; d += 2) {
        var c = parseInt(a[Math.floor(d / 2)]);
        this.arrSelected[d] = 1 == c % 2;
        this.arrSelected[d + 1] = 1 < c;
      }
      this.createIndexArray();
    }
  };
  this.createIndexArray = function () {
    for (var a = (this.nSelected = 0); a < this.nAll; a++)
      this.arrSelected[a] && (this.indexSelected[this.nSelected++] = a);
  };
  this.setDefaultState = function () {
    8 == this.nSelected &&
      this.indexSelected[0] == this.nVisible &&
      this.createIndexArray();
  };
  this.createArrowArray = function () {
    this.nSelected = this.nArrows;
    for (var a = 0; a < this.nArrows; a++)
      this.indexSelected[a] = this.nVisible + a;
  };
  this.handleGUIsize = function () {
    this.wAdapted = Math.floor((xzu706 ? 0.11 : 0.065) * xzu696);
    this.zoom = this.wAdapted / this.w;
    this.wCell = (1 + this.gapPercent) * this.wAdapted;
  };
  this.show = function (a, d) {
    if (1 > this.nSelected) return !1;
    this.timeAppearance = xzu720.time;
    var c = Math.floor(xzu697 / this.wCell);
    c = 3 > c ? 3 : c > this.rectRows ? this.rectRows : c;
    c = this.nSelected > c ? c : this.nSelected;
    var b = 1 + zto1304(this.nSelected - 1, c),
      g = Math.floor(c * this.wCell),
      e = Math.floor(a - g / 2);
    e = e + g > xzu697 ? xzu697 - g : e;
    e = 0 > e ? 0 : e;
    var m = Math.floor(d - this.wCell / 2);
    b = Math.floor(b * this.wCell);
    m = m + b > xzu698 ? xzu698 - b : m;
    m = 0 > m ? 0 : m;
    this.x1 = e + g;
    this.y1 = m + b;
    for (g = 0; g < this.nSelected; g++)
      (this.gridX[g] = Math.floor(e + (g % c) * this.wCell)),
        (this.gridY[g] = Math.floor(m + zto1304(g, c) * this.wCell));
    return !0;
  };
  this.isInside = function (a, d) {
    return !(
      a < this.gridX[0] ||
      d < this.gridY[0] ||
      a >= this.x1 ||
      d >= this.y1
    );
  };
  this.process = function (a, d, c) {
    if (c == xzu161 && this.timeAppearance + 190 > xzu720.time) return !1;
    for (var b = this.nSelected - 1; 0 <= b; b--)
      if (a >= this.gridX[b] && d >= this.gridY[b]) {
        if (39 == this.indexSelected[b])
          return this.createArrowArray(), this.show(a, d), !0;
        xzu152
          ? xzu210.switchEmoji(xzu161, this.indexSelected[b])
          : c == xzu161
          ? xzu226.wrapEmoji(this.indexSelected[b])
          : xzu226.wrapPrivateEmoji(this.indexSelected[b], c);
        this.createIndexArray();
        break;
      }
    return !1;
  };
  this.isCrownable = function (a) {
    return 16 > a || (40 <= a && 47 > a);
  };
  this.isFlag = function (a) {
    return a >= this.nEmojis && a < this.nEmojis + this.nFlags;
  };
  this.draw = function () {
    xzu690.imageSmoothingEnabled = !0;
    for (
      var a = (this.gapPercent * this.wAdapted) / 2, d = this.nSelected - 1;
      0 <= d;
      d--
    )
      xzu690.setTransform(
        this.zoom,
        0,
        0,
        this.zoom,
        this.gridX[d] + a,
        this.gridY[d] + a
      ),
        xzu690.drawImage(this.cvs[this.indexSelected[d]], 0, 0);
    xzu690.imageSmoothingEnabled = !1;
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
  };
  this.drawContact = function (a, d, c) {
    xzu690.imageSmoothingEnabled = !0;
    xzu690.setTransform(this.zoom, 0, 0, this.zoom, a, d);
    xzu690.drawImage(this.cvs[c], 0, 0);
    xzu690.imageSmoothingEnabled = !1;
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
  };
}
var xzu286 = "rgba(0,0,0,0.7)",
  xzu287 = "rgba(0,0,0,0.5)",
  xzu288 = "rgb(0,0,0)",
  xzu289 = "rgba(0,0,0,0.5)",
  xzu290 = "rgba(0,0,0,0.75)",
  xzu291 = "rgba(0,0,0,0.6)",
  xzu292 = "rgba(0,0,0,0.85)",
  xzu293 = "rgb(255,255,255)",
  xzu294 = "rgba(0,255,255,0.4)",
  xzu295 = "rgb(128,128,128)",
  xzu296 = "rgba(0,255,0,0.6)",
  xzu297 = "rgba(0,255,0,0.5)",
  xzu298 = "rgba(0,200,0,0.5)",
  xzu299 = "rgba(0,100,0,0.75)",
  xzu300 = "rgba(0,255,160,0.4)",
  xzu301 = "rgb(128,255,128)",
  xzu302 = "rgba(0,0,200,0.75)",
  xzu303 = "rgba(255,255,150,0.2)",
  xzu304 = "rgba(0,255,0,0.3)",
  xzu305 = "rgba(255,255,255,0.3)",
  xzu306 = "rgba(0,40,90,0.75)",
  xzu307 = "rgba(255,128,0,0.5)",
  xzu308 = "rgba(120,0,0,0.5)",
  xzu309 = "rgba(220,0,0,0.6)",
  xzu310 = "rgba(255,100,100,0.8)",
  xzu311 = "rgba(130,30,20,0.7)",
  xzu312 = "rgb(255,160,160)",
  xzu313 = "rgb(255,0,0)",
  xzu314 = "rgba(0,0,0,0)",
  xzu315 = "rgb(255,255,255)",
  xzu316 = "rgba(255,255,255,0.6)",
  xzu317 = "rgba(255,255,255,0.4)",
  xzu318 = "rgba(255,255,255,0.25)",
  xzu319 = "rgba(255,255,255,0.85)",
  xzu320 = "rgba(255,255,255,0.75)",
  xzu321 = "rgb(255,120,100)",
  xzu322 = "rgb(255,220,100)",
  xzu323 = "rgba(80,80,0,0.75)",
  xzu324 = [
    xzu315,
    "rgb(0,255,0)",
    "rgb(255,220,0)",
    "rgb(0,255,255)",
    "rgb(55,210,210)",
    "rgb(255,180,0)",
  ],
  xzu325 = [
    "rgb(128,16,16)",
    "rgb(255,128,128)",
    "rgb(16,16,128)",
    "rgb(160,160,255)",
    xzu288,
    xzu315,
  ],
  xzu326 = "middle",
  xzu327 = "top",
  xzu328 = "bottom",
  xzu329 = "center",
  xzu330 = "left",
  xzu331 = "right",
  xzu332 = "bold ",
  xzu333 = "lighter ",
  xzu334 = "italic ",
  xzu335 = "normal ",
  xzu336 = "px Arial",
  xzu337 = "px Arial Black",
  xzu338 = [xzu332, xzu334 + xzu332, xzu332, xzu332, xzu333, xzu333],
  xzu339 = "https://play.google.com/store/apps/details?id=territorial.io",
  xzu340 = "https://apps.apple.com/app/id1581110913",
  xzu341 = "https://www.youtube.com/watch?v=37rUqu7exjU",
  xzu342 = "https://discord.gg/pa5TH6hZrv",
  xzu343 = "https://www.instagram.com/davidtschacher/",
  xzu344 = "https://territorial.io/cookie_policy",
  xzu345 = "https://territorial.io/privacy_policy",
  xzu346 = "https://territorial.io/tutorial",
  xzu347,
  xzu348,
  xzu349,
  xzu350,
  xzu351,
  xzu352,
  xzu353,
  xzu354;
function zto1007() {
  zto1009();
  xzu350 = 3;
  xzu354 = new zto1165();
  xzu354.init();
}
function zto1008() {
  xzu689.addEventListener("mousedown", zto1010);
  xzu689.addEventListener("mousemove", zto1013);
  xzu689.addEventListener("click", zto1017);
  xzu689.addEventListener("mouseleave", zto1016);
  xzu689.addEventListener("wheel", zto1021);
  xzu689.addEventListener("touchstart", zto1011);
  xzu689.addEventListener("touchmove", zto1014);
  xzu689.addEventListener("touchend", zto1018);
  xzu689.addEventListener("touchcancel", zto1019);
  xzu351 = !1;
}
function zto1009() {
  xzu349 = Math.floor(0.016 * xzu696);
  xzu349 = 2 > xzu349 ? 2 : xzu349;
  xzu347 = Math.floor(0.018 * xzu696);
  xzu347 = 2 > xzu347 ? 2 : xzu347;
  xzu348 = Math.floor(0.005 * xzu696);
  xzu348 = 1 > xzu348 ? 1 : xzu348;
}
function zto1010(a) {
  xzu351 ||
    (xzu212.setActive(), zto1012(Math.floor(a.clientX), Math.floor(a.clientY)));
}
function zto1011(a) {
  xzu212.setActive();
  xzu351 = !0;
  0 < a.touches.length &&
    ((xzu352 = Math.floor(a.touches[0].clientX)),
    (xzu353 = Math.floor(a.touches[0].clientY)),
    xzu223.touchStart(a) || zto1012(xzu352, xzu353));
}
function zto1012(a, d) {
  if (0 == xzu154) xzu198.mouseDown(a, d);
  else if (
    !(
      xzu718.mouseDown(a, d) ||
      xzu179.mouseDownSelected(a, d) ||
      xzu191.mouseDown(a, d) ||
      xzu183.mouseDown(a, d)
    )
  ) {
    var c = xzu180.mouseDown(a, d);
    2 == c ||
      xzu189.mouseDown(a, d) ||
      (xzu186.mouseDown(a, d)
        ? (xzu720.requestRepaint = !0)
        : xzu185.inside(a, d)
        ? ((xzu186.grMouseMoving = !1),
          xzu185.pressMouse(a, d) && (xzu720.requestRepaint = !0))
        : xzu181.mouseDown(a, d) ||
          (0 == c && xzu179.mouseDownUnselected(a, d)));
  }
}
function zto1013(a) {
  xzu351 || zto1015(Math.floor(a.clientX), Math.floor(a.clientY));
}
function zto1014(a) {
  0 < a.touches.length &&
    ((xzu352 = Math.floor(a.touches[0].clientX)),
    (xzu353 = Math.floor(a.touches[0].clientY)),
    xzu223.touchMove(a) || zto1015(xzu352, xzu353));
}
function zto1015(a, d) {
  0 == xzu154
    ? xzu198.mouseMove(a, d)
    : xzu718.mouseMove(a) ||
      (xzu179.isVisible()
        ? xzu179.mouseMove(a, d)
        : xzu180.mouseMove(a, d) ||
          (xzu185.mouseMoving
            ? xzu185.mouseMove(a, d) && (xzu720.requestRepaint = !0)
            : (xzu189.mouseMove(a, d),
              xzu186.grMouseMoving &&
                xzu186.mouseMove(a, d) &&
                (xzu720.requestRepaint = !0))));
}
function zto1016(a) {
  0 == xzu154
    ? (xzu198.click(-1e3, -1e3), xzu187.reset())
    : (xzu180.mouseMove(-1e3, -1e3),
      xzu189.mouseMove(-1e3, -1e3),
      xzu185.releaseMouse(),
      xzu186.grMouseMoving && (xzu186.grMouseMoving = !1));
}
function zto1017(a) {
  xzu351 || zto1020(Math.floor(a.clientX), Math.floor(a.clientY));
}
function zto1018(a) {
  a && a.touches && 0 < a.touches.length && 0 != xzu154
    ? (xzu186.grMouseMoving = !1)
    : zto1020(xzu352, xzu353);
}
function zto1019(a) {
  zto1020(xzu352, xzu353);
}
function zto1020(a, d) {
  0 == xzu154
    ? xzu198.click(a, d)
    : (xzu718.mouseClick(),
      xzu185.releaseMouse(),
      (xzu186.grMouseMoving = !1),
      xzu179.click(a, d) && (xzu720.requestRepaint = !0));
}
function zto1021(a) {
  xzu212.setActive();
  var d = Math.floor(a.clientX),
    c = Math.floor(a.clientY),
    b = a.deltaY;
  1 == a.deltaMode && (b *= 20);
  0 == xzu154
    ? xzu198.wheel(d, c, b)
    : xzu185.inside(d, c)
    ? xzu185.wheel(b) && (xzu720.requestRepaint = !0)
    : xzu186.wheel(d, c, 2 * b) && (xzu720.requestRepaint = !0);
}
function zto1022(a, d, c) {
  a.fillStyle = xzu315;
  a.fillRect(0, 0, d, 1);
  a.fillRect(0, c - 1, d, 1);
  a.fillRect(0, 0, 1, c);
  a.fillRect(d - 1, 0, 1, c);
}
function zto1023() {
  function a(l) {
    var k = b[l].canvas.width;
    b[l].context.clearRect(0, 0, k, m);
    b[l].context.fillStyle =
      0 != b[l].id
        ? "rgba(33,33,120,0.83)"
        : b[l].enemy == xzu150
        ? "rgba(88,88,88,0.83)"
        : b[l].enemy < xzu146
        ? "rgba(100,70,33,0.83)"
        : "rgba(33,100,80,0.83)";
    b[l].context.fillRect(0, 0, k, m);
    zto1022(b[l].context, k, m);
    k > g + 2 * m &&
      (b[l].context.fillRect(k - g - m, 0, 1, m),
      b[l].context.fillText(
        xzu664[b[l].enemy],
        Math.floor((k - g) / 2),
        Math.floor(0.57 * m)
      ));
    var f = 0 != b[l].id ? 0 : m;
    b[l].context.fillText(
      xzu183.createString(b[l].strength),
      Math.floor(k - g / 2 - f),
      Math.floor(0.57 * m)
    );
    b[l].context.fillStyle = xzu316;
    b[l].context.fillRect(
      Math.floor(k - g - f),
      m - h,
      Math.floor((g * b[l].strength) / b[l].strengthMax),
      h
    );
    0 == b[l].id &&
      ((b[l].context.strokeStyle = b[l].cancelled ? xzu295 : xzu312),
      (b[l].context.fillStyle = xzu315),
      b[l].context.fillRect(k - m, 0, 1, m),
      (f = Math.floor(m / 12)),
      (b[l].context.lineWidth = 3 > f ? 3 : f),
      (b[l].context.lineCap = "round"),
      (f = m + 1),
      b[l].context.beginPath(),
      b[l].context.moveTo(Math.floor(f - 0.35 * m), Math.floor(0.35 * m)),
      b[l].context.lineTo(
        Math.floor(f - m + 0.35 * m),
        Math.floor(m - 0.35 * m)
      ),
      b[l].context.stroke(),
      b[l].context.beginPath(),
      b[l].context.moveTo(Math.floor(f - m + 0.35 * m), Math.floor(0.35 * m)),
      b[l].context.lineTo(Math.floor(f - 0.35 * m), Math.floor(m - 0.35 * m)),
      b[l].context.stroke(),
      (b[l].context.strokeStyle = xzu301),
      b[l].context.fillRect(m, 0, 1, m),
      (k -= m),
      b[l].context.beginPath(),
      b[l].context.moveTo(Math.floor(0.3 * m + k), Math.floor(m / 2)),
      b[l].context.lineTo(Math.floor(m - 0.3 * m + k), Math.floor(m / 2)),
      b[l].context.stroke(),
      b[l].context.beginPath(),
      b[l].context.moveTo(Math.floor(m / 2 + k), Math.floor(0.3 * m)),
      b[l].context.lineTo(Math.floor(m / 2 + k), Math.floor(m - 0.3 * m)),
      b[l].context.stroke());
  }
  function d(l) {
    l.canvas = document.createElement("canvas");
    xzu734.font = e;
    var k = g;
    l.enemy < xzu150 &&
      0 == l.id &&
      (k += Math.floor(xzu734.measureText(xzu664[l.enemy] + "000").width));
    0 == l.id && (k += 2 * m);
    l.canvas.width = k;
    l.canvas.height = m;
    l.context = l.canvas.getContext("2d", { alpha: !0 });
    l.context.font = e;
    l.context.textBaseline = xzu326;
    l.context.textAlign = xzu329;
  }
  function c(l) {
    return Math.floor(
      2 * xzu347 +
        (xzu706 && xzu694 < xzu695 ? xzu190.h + xzu347 : 0) +
        xzu188.h +
        1.3 * l * m
    );
  }
  var b, g, e, m, h;
  this.init = function () {
    b = [];
    this.zto1324();
  };
  this.zto1324 = function () {
    e = xzu181.font;
    m = xzu181.fontSize + 5;
    m = Math.floor(1.25 * m);
    xzu706 && (m = Math.floor(1.25 * m));
    h = Math.floor(0.15 * m);
    xzu734.font = e;
    g = Math.floor(xzu734.measureText("02 000 000 0000").width);
    for (var l = b.length - 1; 0 <= l; l--) d(b[l]), a(l);
  };
  this.repaint = function () {
    for (var l = b.length - 1; 0 <= l; l--)
      b[l].shouldRefresh && ((b[l].shouldRefresh = !1), a(l));
  };
  this.createString = function (l) {
    if (1e3 > l)
      return 0 > l ? "-" + this.createString(Math.abs(l)) : l.toString();
    var k = Math.floor(Math.log(l + 0.5) / Math.log(10)) + 1,
      f = Math.floor((k - 1) / 3);
    l = l.toString();
    for (var n = l.substring(k - 3, k), p = 1; p < f; p++)
      n = l.substring(k - 3 * (p + 1), k - 3 * p) + " " + n;
    return l.substring(0, k - 3 * f) + " " + n;
  };
  this.mouseDown = function (l, k) {
    if (2 == xzu154 || 0 == xzu665[xzu161] || xzu153) return !1;
    for (var f, n, p, r = xzu706 ? m : 0, t = b.length - 1; 0 <= t; t--)
      if (
        0 == b[t].id &&
        ((f =
          xzu706 && xzu694 < xzu695
            ? xzu697 - b[t].canvas.width - xzu347
            : xzu188.x),
        (n = c(t)),
        (p = b[t].canvas.width),
        k >= n - r && k <= n + m + r)
      ) {
        if (l >= f - r && l <= f + m + r)
          return (
            b[t].cancelled ||
              ((b[t].shouldRefresh = !0),
              (b[t].cancelled = !0),
              xzu152
                ? xzu174.checkCancelAttack(xzu161, b[t].enemy)
                : xzu226.wrapPackageCancelAttack(
                    b[t].enemy == xzu150 ? xzu161 : b[t].enemy
                  )),
            !0
          );
        if (l >= f + p - m - r && l <= f + p + r)
          return (
            xzu152
              ? zto1098(xzu161, b[t].enemy, xzu185.getPercentageThousand())
              : xzu226.wrapPackageLandAttack(
                  xzu185.getPercentageThousand(),
                  b[t].enemy == xzu150 ? xzu161 : b[t].enemy
                ),
            !0
          );
      }
    return !1;
  };
  this.calculate = function () {
    if (2 != xzu154 && 0 != xzu665[xzu161] && !xzu153) {
      var l = xzu208.getSize(xzu161);
      b: if (b.length != l) var k = !0;
      else {
        for (k = l - 1; 0 <= k; k--)
          if (
            b[k].id != xzu208.getID(xzu161, k) ||
            b[k].enemy != xzu208.getEnemy(xzu161, k)
          ) {
            k = !0;
            break b;
          }
        k = !1;
      }
      if (k) {
        k = [];
        var f = 0;
        b: for (; f < l; f++) {
          for (
            var n = xzu208.getID(xzu161, f),
              p = xzu208.getEnemy(xzu161, f),
              r = 0;
            r < b.length;
            r++
          )
            if (b[r].id == n && b[r].enemy == p) {
              k.push(b.splice(r, 1)[0]);
              continue b;
            }
          r = xzu208.getStrength(xzu161, f);
          n = {
            enemy: p,
            strength: r,
            strengthMax: r,
            id: n,
            shouldRefresh: !0,
            cancelled: !1,
            canvas: null,
            context: null,
          };
          d(n);
          k.push(n);
        }
        b = k;
      }
      for (--l; 0 <= l; l--)
        (k = xzu208.getStrength(xzu161, l)),
          b[l].strength != k &&
            ((b[l].strength = k),
            (b[l].strengthMax = k > b[l].strengthMax ? k : b[l].strengthMax),
            (b[l].shouldRefresh = !0));
    }
  };
  this.draw = function () {
    if (0 != xzu665[xzu161] && !xzu153)
      for (var l = b.length - 1; 0 <= l; l--)
        xzu690.drawImage(
          b[l].canvas,
          xzu706 && xzu694 < xzu695
            ? xzu697 - b[l].canvas.width - xzu347
            : xzu188.x,
          c(l)
        );
  };
}
function zto1035() {
  function a() {
    xzu690.drawImage(
      u,
      xzu347 + (xzu166 ? xzu347 + xzu722.w : 0),
      xzu438 + 2 * xzu347
    );
  }
  function d() {
    u.width = b[0].width + t;
    u.height = l + t;
    y = u.getContext("2d", { alpha: !0 });
    y.clearRect(0, 0, b[0].width + t, l + t);
    y.translate(Math.floor(t / 2), Math.floor(t / 2));
    y.lineWidth = t;
    y.fillStyle = 3 == b[0].index ? xzu319 : xzu290;
    c();
    y.fill();
    y.strokeStyle = 3 == b[0].index ? xzu288 : xzu315;
    c();
    y.stroke();
    y.textAlign = xzu329;
    y.textBaseline = xzu326;
    y.fillStyle = 3 == b[0].index ? xzu288 : xzu315;
    y.font = k[0];
    y.fillText(
      p[b[0].index],
      Math.floor(b[0].width / 2),
      Math.floor(0.72 * n[0] * l)
    );
    y.font = k[1];
    y.fillText(
      b[0].str,
      Math.floor(b[0].width / 2),
      Math.floor((n[0] + 0.48 * n[1]) * l)
    );
  }
  function c() {
    y.beginPath();
    y.moveTo(q, 0);
    y.lineTo(b[0].width - q, 0);
    y.lineTo(b[0].width, q);
    y.lineTo(b[0].width, l - q);
    y.lineTo(b[0].width - q, l);
    y.lineTo(q, l);
    y.lineTo(0, l - q);
    y.lineTo(0, q);
    y.closePath();
  }
  var b, g, e, m, h, l, k, f, n, p, r, t, q, u, y, v, z;
  this.init = function () {
    v = 0;
    g = 4;
    e = m = 0;
    h = 7;
    b = [];
    k = Array(2);
    f = Array(2);
    n = Array(2);
    p = ["YOU ERASED", "YOU WERE ERASED BY", "THE GAME WAS WON BY", "MAP:"];
    n[0] = 0.3;
    n[1] = 0.7;
    r = Array(4);
    u = document.createElement("canvas");
    z = xzu720.time + 2e3;
    this.zto1324();
  };
  this.zto1324 = function () {
    var B;
    l = Math.floor((xzu706 ? 0.11 : 0.08) * xzu696);
    f[0] = Math.floor(0.85 * n[0] * l);
    f[1] = Math.floor(0.85 * n[1] * l);
    k[0] = xzu332 + f[0] + xzu336;
    k[1] = xzu332 + f[1] + xzu336;
    for (B = r.length - 1; 0 <= B; B--)
      r[B] = this.measureText(p[B] + "000", k[0]);
    t = Math.floor(1 + 0.05 * l);
    q = Math.floor(0.2 * l);
    if (0 < b.length) {
      for (B = b.length - 1; 0 <= B; B--) {
        var w = this.measureText(b[B].str + "00", k[1]);
        b[B].width = w < r[B] ? r[B] : w;
      }
      d();
    }
  };
  this.calculate = function () {
    if (0 != g)
      if (4 == g)
        xzu720.time > z &&
          ((g = 0), 1 == xzu154 && xzu184.addText(xzu215.get(xzu737).name, 3));
      else {
        if (1 == g)
          0 == e && (d(), (e = 1e-4)),
            (e += 0.002 * (xzu720.time - v)),
            1 <= e && ((m = 0), (g = 2), (e = 1)),
            (xzu720.requestRepaint = !0);
        else if (2 == g) {
          if (
            ((m += 0.002 * (xzu720.time - v)), m > h || (3 < m && 1 < b.length))
          )
            g = 3;
        } else
          3 == g &&
            ((e -= 0.002 * (xzu720.time - v)),
            0 >= e && ((e = 0), b.shift(), (g = 0 < b.length ? 1 : 0)),
            (xzu720.requestRepaint = !0));
        v = xzu720.time;
      }
  };
  this.measureText = function (B, w) {
    xzu690.font = w;
    return Math.floor(xzu690.measureText(B).width);
  };
  this.add = function (B, w) {
    this.addText(xzu664[B], w);
  };
  this.addText = function (B, w) {
    h = 0 == w ? 7 : 3 == w ? 18 : 25;
    var x = this.measureText(B + "00", k[1]);
    x = x < r[w] ? r[w] : x;
    b.push({ str: B, index: w, width: x });
    0 == g && ((e = 0), (g = 1), (v = xzu720.time));
  };
  this.draw = function () {
    0 != g &&
      0 != e &&
      (1 > e ? ((xzu690.globalAlpha = e), a(), (xzu690.globalAlpha = 1)) : a());
  };
}
function zto1041() {
  function a() {
    if (f < 1 / 3) {
      var t = Math.floor(540 * f);
      return "rgba(" + t + ",180,0,0.75)";
    }
    if (f < 2 / 3)
      return (
        (t = Math.floor(540 * (f - 1 / 3))),
        "rgba(180," + (180 - t) + ",0,0.75)"
      );
    t = Math.floor(540 * (f - 2 / 3));
    return "rgba(180,0," + t + ",0.75)";
  }
  function d() {
    l.clearRect(0, 0, g, xzu185.h);
    var t = Math.floor(f * (g - 2 * m));
    l.fillStyle = xzu290;
    l.fillRect(0, 0, m, xzu185.h);
    l.fillRect(m + t, 0, g - m - t, xzu185.h);
    l.fillStyle = a();
    l.fillRect(m, 0, t, xzu185.h);
    l.fillStyle = xzu315;
    l.fillRect(0, 0, g, 1);
    l.fillRect(0, xzu185.h - 1, g, 1);
    l.fillRect(0, 0, 1, xzu185.h);
    l.fillRect(m, 0, 1, xzu185.h);
    l.fillRect(m + t, 0, 1, xzu185.h);
    l.fillRect(g - m, 0, 1, xzu185.h);
    l.fillRect(g - 1, 0, 1, xzu185.h);
    t = 1 + Math.floor(0.0625 * xzu185.h);
    var q = 1 + Math.floor(0.3 * xzu185.h);
    l.fillRect(
      Math.floor(0.25 * xzu185.h) + q,
      Math.floor((xzu185.h - t) / 2),
      xzu185.h - 2 * q,
      t
    );
    l.fillRect(
      Math.floor(g - 1.25 * xzu185.h) + q,
      Math.floor((xzu185.h - t) / 2),
      xzu185.h - 2 * q - (q % 2),
      t
    );
    l.fillRect(
      Math.floor(g - 1.25 * xzu185.h) + Math.floor((xzu185.h - t) / 2),
      q,
      t,
      xzu185.h - 2 * q - (q % 2)
    );
    n = Math.floor(xzu672[xzu161] * f);
    l.fillText(
      xzu183.createString(n),
      Math.floor(g / 2),
      Math.floor(0.55 * xzu185.h)
    );
  }
  function c(t) {
    if (1 < t && 0 == f) return (f = 0.01), d(), !0;
    if ((1 < t && 1 == f) || 0 == f) return !1;
    f *= t;
    f = 1 < f ? 1 : 0 > f ? 0 : f;
    d();
    return !0;
  }
  function b(t) {
    var q = f;
    f = (t - e - m) / (g - 2 * m);
    f = 0 > f ? 0 : f;
    f = 1 < f ? 1 : f;
    return q != f ? (d(), !0) : !1;
  }
  var g, e, m, h, l, k, f, n, p, r;
  this.init = function () {
    k = !xzu164;
    r = !1;
    f = 0.8;
    n = 0;
    this.mouseMoving = !1;
    this.zto1324();
  };
  this.zto1324 = function () {
    xzu706 && xzu694 < xzu695
      ? ((this.h = Math.floor(0.081 * xzu694)),
        (g = xzu694 - 4 * xzu347 - this.h))
      : ((g = Math.floor((xzu706 ? 0.9 : 0.54) * xzu696)),
        (g += 12 - (g % 12)),
        (this.h = Math.floor(g / 12)));
    m = Math.floor((3 * this.h) / 2);
    p = xzu332 + Math.floor(0.5 * this.h) + xzu336;
    h = document.createElement("canvas");
    h.width = g;
    h.height = this.h;
    l = h.getContext("2d");
    l.font = p;
    l.textBaseline = xzu326;
    l.textAlign = xzu329;
    this.refreshLocation();
    d();
  };
  this.refreshLocation = function () {
    e =
      xzu706 && xzu694 < xzu695
        ? this.h + 3 * xzu347
        : Math.floor((xzu697 - g) / 2);
    this.y = xzu698 - this.h - (xzu706 ? 2 : 1) * xzu347;
  };
  this.repaint = function () {
    r && ((r = !1), d());
  };
  this.isVisible = function () {
    return k;
  };
  this.setVisible = function () {
    k = !0;
    xzu181.moveUp();
  };
  this.setInvisible = function () {
    k = !1;
    xzu181.moveDown();
  };
  this.getPercentageThousand = function () {
    var t = Math.floor(1e3 * f);
    return 0 >= t ? 1 : 1e3 < t ? 1e3 : t;
  };
  this.draw = function () {
    !k ||
      (xzu180.isSelected && e < Math.floor(xzu347 + 5.5 * this.h)) ||
      xzu690.drawImage(h, e, this.y);
  };
  this.inside = function (t, q) {
    return (
      k &&
      (!xzu180.isSelected || e >= Math.floor(xzu347 + 5.5 * this.h)) &&
      t > e &&
      t < e + g &&
      q > this.y
    );
  };
  this.pressMouse = function (t, q) {
    if (!k || (xzu180.isSelected && e < Math.floor(xzu347 + 5.5 * this.h)))
      return !1;
    if (t > e && t < e + m && q > xzu185.y) return c(0.9375);
    if (t > e + g - m && t < e + g && q > xzu185.y) return c(16 / 15);
    this.mouseMoving = !0;
    return b(t);
  };
  this.keyDown = function (t) {
    0 != xzu154 && k && c(t) && (xzu720.requestRepaint = !0);
  };
  this.wheel = function (t) {
    if (
      0 == t ||
      !k ||
      (xzu180.isSelected && e < Math.floor(xzu347 + 5.5 * this.h))
    )
      return !1;
    0 < t
      ? ((t = 400 / (400 + t)), (t = 0.9375 > t ? 0.9375 : t))
      : ((t = (400 - t) / 400), (t = t > 16 / 15 ? 16 / 15 : t));
    return c(t);
  };
  this.mouseMove = function (t, q) {
    return this.mouseMoving ? b(t, q) : !1;
  };
  this.releaseMouse = function () {
    this.mouseMoving = !1;
  };
  this.calculate = function () {
    k && Math.floor(xzu672[xzu161] * f) != n && (r = !0);
  };
}
var xzu393, xzu394, xzu395;
function zto1049() {
  var a, d, c, b, g, e, m;
  this.init = function () {
    a = Array(2);
    d = Array(2);
    this.grMouseMoving = !1;
    m = e = xzu395 = xzu394 = 0;
    xzu393 = 1;
    this.zto1324();
  };
  this.zto1324 = function () {
    c = Math.floor((xzu706 ? 0.11 : 0.07) * xzu696);
    for (var h = 1; 0 <= h; h--)
      (a[h] = document.createElement("canvas")),
        (a[h].width = c),
        (a[h].height = c),
        (d[h] = a[h].getContext("2d"));
    this.refreshLocation();
    h = 1 + Math.floor(c / 16);
    for (
      var l = 1 + Math.floor(c / 3), k = Math.floor(1 + c / 20), f = 1;
      0 <= f;
      f--
    )
      d[f].clearRect(0, 0, c, c),
        (d[f].fillStyle = xzu286),
        d[f].beginPath(),
        d[f].arc(c / 2, c / 2, c / 2 - k, 0, 2 * Math.PI),
        d[f].fill(),
        (d[f].lineWidth = k),
        (d[f].fillStyle = xzu293),
        (d[f].strokeStyle = xzu293),
        d[f].beginPath(),
        d[f].arc(c / 2, c / 2, c / 2 - k, 0, 2 * Math.PI),
        d[f].stroke(),
        d[f].fillRect(l, Math.floor((c - h) / 2), c - 2 * l, h),
        0 == f && d[f].fillRect(Math.floor((c - h) / 2), l, h, c - 2 * l);
  };
  this.getX = function () {
    return -xzu394 / xzu393;
  };
  this.getY = function () {
    return -xzu395 / xzu393;
  };
  this.setZoomX = function (h, l) {
    xzu394 = xzu393 * h - l;
  };
  this.setZoomY = function (h, l) {
    xzu395 = xzu393 * h - l;
  };
  this.mouseDown = function (h, l) {
    if (
      Math.pow(h - (b + c / 2), 2) + Math.pow(l - (g + c / 2), 2) <
        Math.pow(c, 2) ||
      Math.pow(h - (b + c / 2), 2) + Math.pow(l - (g + (3 * c) / 2), 2) <
        Math.pow(c, 2)
    )
      return l < g + 1.25 * c
        ? this.wheel(Math.floor(xzu697 / 2), Math.floor(xzu698 / 2), -380)
        : this.wheel(Math.floor(xzu697 / 2), Math.floor(xzu698 / 2), 380);
    xzu176.end() && ((this.grMouseMoving = !0), (e = h), (m = l));
    return !1;
  };
  this.mouseMove = function (h, l) {
    if (!xzu176.end()) return !0;
    var k = xzu394,
      f = xzu395,
      n = e - h,
      p = m - l;
    xzu394 += n;
    xzu395 += p;
    xzu210.mouseMove(n, p);
    this.readjustCoords();
    e = h;
    m = l;
    return k != xzu394 || f != xzu395;
  };
  this.wheel = function (h, l, k) {
    if (!xzu176.end()) return !0;
    if (0 < k) (k = 450 / (450 + k)), (k = 0.5 > k ? 0.5 : k);
    else if (0 > k) (k = (450 - k) / 450), (k = 2 < k ? 2 : k);
    else return !1;
    this.applyZoom(h, l, k);
    return !0;
  };
  this.applyZoom = function (h, l, k) {
    k = 1024 < k * xzu393 ? 1024 / xzu393 : k;
    k = 0.125 > k * xzu393 ? 0.125 / xzu393 : k;
    xzu210.zoom(k, h, l);
    xzu393 *= k;
    xzu394 = (xzu394 + h) * k - h;
    xzu395 = (xzu395 + l) * k - l;
    xzu186.readjustCoords();
  };
  this.readjustCoords = function () {
    var h = xzu694 / 16,
      l = 0,
      k = xzu695 / 16,
      f = 0;
    xzu394 < -xzu694 + h && (l = -xzu694 + h - xzu394);
    xzu394 > xzu393 * xzu731 - h && (l = xzu393 * xzu731 - h - xzu394);
    xzu395 < -xzu695 + k && (f = -xzu695 + k - xzu395);
    xzu395 > xzu393 * xzu732 - k && (f = xzu393 * xzu732 - k - xzu395);
    xzu394 += l;
    xzu395 += f;
    xzu711.calculatePreRendering();
    xzu210.resetCoords(l, f);
  };
  this.refreshLocation = function () {
    b = xzu697 - c - xzu347;
    g = Math.floor(xzu698 / 2 - 1.25 * c);
  };
  this.draw = function () {
    xzu690.drawImage(a[0], b, g);
    xzu690.drawImage(a[1], b, Math.floor(g + (3 * c) / 2));
  };
}
function zto1054() {
  function a() {
    l = Math.floor(0.07 * h);
    l = 1 > l ? 1 : l;
    var C = xzu694 / (e.length + k);
    l = C > l ? C : l;
    B = Math.floor((1 - k) * l);
    m = 0;
    d();
  }
  function d() {
    m = -20 > m ? -20 : m;
    m = m > (e.length - 15) * l ? (e.length - 15) * l : m;
    n = Math.floor(m / l);
    p = n + Math.floor(xzu697 / l);
    p = p > e.length - 1 ? e.length - 1 : p;
    n = p < n ? p : n;
    n = 0 > n ? 0 : n;
    var C = p;
    f = h / e[C];
    for (var I = p - 1; I >= n; I--)
      e[I] > e[C] && ((C = I), (f = h / Math.pow(e[I], z)));
  }
  function c(C) {
    C = Math.floor((m + xzu697 - C - k * l) / l);
    C = -1 > C ? -1 : -1 == C ? 0 : C > e.length - 1 ? -1 : C;
    return C != r
      ? ((r = C), -1 == w && 0 == r && v && (w = setInterval(g, 100)), !0)
      : !1;
  }
  function b(C) {
    var I = Math.floor(f * Math.pow(e[C], z));
    xzu690.fillRect(m + xzu697 - (C + 1) * l, xzu698 - I, B, I);
  }
  function g() {
    8 == xzu198.getState() && (r = -1);
    if (0 != r) (x = new Date().getTime()), clearInterval(w), (w = -1);
    else {
      var C = e[1] / 864e3;
      if (-1 != x) {
        var I = new Date().getTime();
        C += Math.floor(((I - x) * e[1]) / 864e5);
        x = -1;
      }
      0 < C && ((e[0] += C), (xzu720.requestRepaint = !0));
    }
  }
  var e, m, h, l, k, f, n, p, r, t, q, u, y, v, z, B, w, x;
  this.init = function () {
    x = w = -1;
    v = !1;
    z = 1;
    r = -1;
    this.mousePressed = !1;
    y = 0;
    u = new Date();
    m = 0;
    k = 0.3;
    e = Array(323);
    e[0] = 14653075;
    e[1] = 14677999;
    e[2] = 14958759;
    e[3] = 14210260;
    e[4] = 15488352;
    e[5] = 15623604;
    e[6] = 14473144;
    e[7] = 12823062;
    e[8] = 14869909;
    e[9] = 15142264;
    e[10] = 15567014;
    e[11] = 17896725;
    e[12] = 20081347;
    e[13] = 17765006;
    e[14] = 12763925;
    e[15] = 13523610;
    e[16] = 13979983;
    e[17] = 15080856;
    e[18] = 17116394;
    e[19] = 18483238;
    e[20] = 18084320;
    e[21] = 12100282;
    e[22] = 12221529;
    e[23] = 12441579;
    e[24] = 12058220;
    e[25] = 12441689;
    e[26] = 12821546;
    e[27] = 13401583;
    e[28] = 13009895;
    e[29] = 12271066;
    e[30] = 12210094;
    e[31] = 12355642;
    e[32] = 13737115;
    e[33] = 14257807;
    e[34] = 14904897;
    e[35] = 14072161;
    e[36] = 15640387;
    e[37] = 15721803;
    e[38] = 16397970;
    e[39] = 19254839;
    e[40] = 21608906;
    e[41] = 20527471;
    e[42] = 16596206;
    e[43] = 15550563;
    e[44] = 14385591;
    e[45] = 15547262;
    e[46] = 13174302;
    e[47] = 12462319;
    e[48] = 13000669;
    e[49] = 12832541;
    e[50] = 12186376;
    e[51] = 13150940;
    e[52] = 14654379;
    e[53] = 14299386;
    e[54] = 14158528;
    e[55] = 15185971;
    e[56] = 12444117;
    e[57] = 14253445;
    e[58] = 15049053;
    e[59] = 14123310;
    e[60] = 16892853;
    e[61] = 15963931;
    e[62] = 11858727;
    e[63] = 10012703;
    e[64] = 9478191;
    e[65] = 9193460;
    e[66] = 8851082;
    e[67] = 9298848;
    e[68] = 9638204;
    e[69] = 9442496;
    e[70] = 8653593;
    e[71] = 9093527;
    e[72] = 8530977;
    e[73] = 8809114;
    e[74] = 9609612;
    e[75] = 9906912;
    e[76] = 9615756;
    e[77] = 9477879;
    e[78] = 9713075;
    e[79] = 9126583;
    e[80] = 8949378;
    e[81] = 9577595;
    e[82] = 10180186;
    e[83] = 9858705;
    e[84] = 9534213;
    e[85] = 9184660;
    e[86] = 8889455;
    e[87] = 8311313;
    e[88] = 9738346;
    e[89] = 9772164;
    e[90] = 9157791;
    e[91] = 8445413;
    e[92] = 8467279;
    e[93] = 8756002;
    e[94] = 9257951;
    e[95] = 10213536;
    e[96] = 10620530;
    e[97] = 10352296;
    e[98] = 9350531;
    e[99] = 9118709;
    e[100] = 9614237;
    e[101] = 9692491;
    e[102] = 10801215;
    e[103] = 10984804;
    e[104] = 9542309;
    e[105] = 9609538;
    e[106] = 9391430;
    e[107] = 9515517;
    e[108] = 10064494;
    e[109] = 11061684;
    e[110] = 10408005;
    e[111] = 9794768;
    e[112] = 9297643;
    e[113] = 9275992;
    e[114] = 9394076;
    e[115] = 9716084;
    e[116] = 10045958;
    e[117] = 9715229;
    e[118] = 9091248;
    e[119] = 10010584;
    e[120] = 9845528;
    e[121] = 9532588;
    e[122] = 8986320;
    e[123] = 9037708;
    e[124] = 9820996;
    e[125] = 8953464;
    e[126] = 9074064;
    e[127] = 8644692;
    e[128] = 8025308;
    e[129] = 8832112;
    e[130] = 10785788;
    e[131] = 10539708;
    e[132] = 8908744;
    e[133] = 8331216;
    e[134] = 8858100;
    e[135] = 8626840;
    e[136] = 7666284;
    e[137] = 8503372;
    e[138] = 8855308;
    e[139] = 6762540;
    e[140] = 6414076;
    e[141] = 6786692;
    e[142] = 6445532;
    e[143] = 6262192;
    e[144] = 5918176;
    e[145] = 5864376;
    e[146] = 5464928;
    e[147] = 5384996;
    e[148] = 5942760;
    e[149] = 5261972;
    e[150] = 5404612;
    e[151] = 6184860;
    e[152] = 6312948;
    e[153] = 5815660;
    e[154] = 5208552;
    e[155] = 4734392;
    e[156] = 4538784;
    e[157] = 4661404;
    e[158] = 5145524;
    e[159] = 4819368;
    e[160] = 4369224;
    e[161] = 4458584;
    e[162] = 4289956;
    e[163] = 3538288;
    e[164] = 3517544;
    e[165] = 3871876;
    e[166] = 3388048;
    e[167] = 3344796;
    e[168] = 3089228;
    e[169] = 2863676;
    e[170] = 2268964;
    e[171] = 2160500;
    e[172] = 2580004;
    e[173] = 2244356;
    e[174] = 2018408;
    e[175] = 1688912;
    e[176] = 1945368;
    e[177] = 1796332;
    e[178] = 1619260;
    e[179] = 2060292;
    e[180] = 1597656;
    e[181] = 1472788;
    e[182] = 1306208;
    e[183] = 1171408;
    e[184] = 1021096;
    e[185] = 1109312;
    e[186] = 1241276;
    e[187] = 1305092;
    e[188] = 1142748;
    e[189] = 1157700;
    e[190] = 991984;
    e[191] = 786992;
    e[192] = 786396;
    e[193] = 1043956;
    e[194] = 1029320;
    e[195] = 860500;
    e[196] = 834824;
    e[197] = 841912;
    e[198] = 736464;
    e[199] = 690328;
    e[200] = 878376;
    e[201] = 907232;
    e[202] = 794932;
    e[203] = 646388;
    e[204] = 752600;
    e[205] = 672836;
    e[206] = 636212;
    e[207] = 794108;
    e[208] = 746856;
    e[209] = 642928;
    e[210] = 671328;
    e[211] = 493568;
    e[212] = 458168;
    e[213] = 428776;
    e[214] = 464736;
    e[215] = 371412;
    e[216] = 314568;
    e[217] = 225472;
    e[218] = 252072;
    e[219] = 227604;
    e[220] = 251048;
    e[221] = 269184;
    e[222] = 174136;
    e[223] = 825576;
    e[224] = 536060;
    e[225] = 165952;
    e[226] = 153252;
    e[227] = 180036;
    e[228] = 149616;
    e[229] = 138472;
    e[230] = 157832;
    e[231] = 188152;
    e[232] = 180108;
    e[233] = 134076;
    e[234] = 70960;
    e[235] = 89236;
    e[236] = 111428;
    e[237] = 60520;
    e[238] = 74620;
    e[239] = 73424;
    e[240] = 74720;
    e[241] = 71584;
    e[242] = 94432;
    e[243] = 62572;
    e[244] = 66420;
    e[245] = 32532;
    e[246] = 34452;
    e[247] = 41048;
    e[248] = 51372;
    e[249] = 61916;
    e[250] = 43236;
    e[251] = 55172;
    e[252] = 26776;
    e[253] = 47e3;
    e[254] = 57424;
    e[255] = 93100;
    e[256] = 64980;
    e[257] = 37288;
    e[258] = 44296;
    e[259] = 34588;
    e[260] = 40700;
    e[261] = 29200;
    e[262] = 24604;
    e[263] = 18184;
    e[264] = 42660;
    e[265] = 31404;
    e[266] = 38096;
    e[267] = 18556;
    e[268] = 17388;
    e[269] = 19568;
    e[270] = 17604;
    e[271] = 22328;
    e[272] = 40300;
    e[273] = 39392;
    e[274] = 33440;
    e[275] = 17960;
    e[276] = 7984;
    e[277] = 11612;
    e[278] = 67700;
    e[279] = 14108;
    e[280] = 22444;
    e[281] = 19756;
    e[282] = 9436;
    e[283] = 16864;
    e[284] = 14400;
    e[285] = 17216;
    e[286] = 14436;
    e[287] = 8612;
    e[288] = 15952;
    e[289] = 29764;
    e[290] = 18748;
    e[291] = 16348;
    e[292] = 23976;
    e[293] = 22080;
    e[294] = 20268;
    e[295] = 20984;
    e[296] = 9480;
    e[297] = 30736;
    e[298] = 15996;
    e[299] = 9484;
    e[300] = 9392;
    e[301] = 9716;
    e[302] = 21540;
    e[303] = 57428;
    e[304] = 24788;
    e[305] = 18728;
    e[306] = 8528;
    e[307] = 5972;
    e[308] = 20560;
    e[309] = 18268;
    e[310] = 28088;
    e[311] = 15364;
    e[312] = 15300;
    e[313] = 29348;
    e[314] = 30992;
    e[315] = 20564;
    e[316] = 34420;
    e[317] = 16716;
    e[318] = 14424;
    e[319] = 12360;
    e[320] = 15124;
    e[321] = 51172;
    e[322] = 13176;
    this.zto1324();
    xzu222.newConnection();
  };
  this.zto1324 = function () {
    h = Math.floor(0.15 * xzu695);
    t = Math.floor(0.13 * h);
    t = 10 > t ? 10 : t;
    q = xzu332 + t + xzu336;
    a();
  };
  this.connectionEstablished = function () {
    v || xzu226.wrapPackageSiteLoaded();
  };
  this.addArr = function (C) {
    v = !0;
    for (var I = 0; I < C.length; I++) e.unshift(C[I]);
    a();
    xzu720.requestRepaint = !0;
  };
  this.refreshPosition = function () {
    d();
  };
  this.mouseMove = function (C, I) {
    I > xzu698 - 0.6 * h
      ? this.mousePressed
        ? C != y &&
          ((m += C - y),
          (y = C),
          d(),
          c(C),
          (this.mousePressed = -1 != r),
          (xzu720.requestRepaint = !0))
        : c(C) && (xzu720.requestRepaint = !0)
      : this.reset();
  };
  this.reset = function () {
    -1 != r &&
      ((this.mousePressed = !1), (r = -1), (xzu720.requestRepaint = !0));
  };
  this.wheel = function (C, I) {
    -1 != r && ((m += Math.floor(I)), d(), c(C), (xzu720.requestRepaint = !0));
  };
  this.mouseDown = function (C, I) {
    this.mouseMove(C, I);
    -1 != r && ((y = C), (this.mousePressed = !0));
  };
  this.mouseClick = function () {
    -1 != r && (this.mousePressed = !1);
  };
  this.draw = function () {
    xzu690.fillStyle = xzu317;
    for (var C = p; C >= n; C--) b(C);
    v && 0 == n && ((xzu690.fillStyle = xzu309), b(0));
    -1 != r && ((xzu690.fillStyle = xzu316), b(r));
    if (-1 != r) {
      xzu690.font = q;
      xzu690.textBaseline = xzu328;
      C = new Date();
      C.setTime(u.getTime() - 864e5 * r);
      var I = new Intl.DateTimeFormat("en-US", { month: "long" }).format(C);
      C =
        new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(C) +
        ", " +
        C.getUTCDate() +
        " " +
        I +
        " " +
        C.getFullYear();
      I = 1 == e[r] ? " second played" : " seconds played";
      I = xzu183.createString(e[r]) + I;
      var O = Math.floor(xzu690.measureText(C).width),
        S = Math.floor(xzu690.measureText(I).width),
        Q = Math.floor(0.5 * (O + t)),
        K = m + xzu697 - (r + 1) * l;
      K = K < Q ? Q : K > xzu697 - Q ? xzu697 - Q : K;
      var V = xzu698 - Math.floor(f * Math.pow(e[r], z)),
        R = Math.floor(1.1 * t),
        T = V > xzu698 - R && 0 == r ? xzu698 - R : V;
      xzu690.fillStyle = xzu290;
      xzu690.fillRect(xzu697 - S - t, T - R, S + t, R);
      xzu690.fillRect(K - Q, xzu698 - R, O + t, R);
      xzu690.fillStyle = xzu315;
      xzu690.textAlign = xzu331;
      xzu690.fillText(I, Math.floor(xzu697 - 0.5 * t), T);
      xzu690.textAlign = xzu329;
      xzu690.fillText(C, K, xzu698);
      xzu690.strokeStyle = xzu318;
      xzu690.lineWidth = 1;
      xzu690.beginPath();
      xzu690.moveTo(0, V);
      xzu690.lineTo(xzu697, V);
      xzu690.closePath();
      xzu690.stroke();
    }
  };
}
function zto1063() {
  function a() {
    e.clearRect(0, 0, c, xzu188.h);
    e.fillStyle = l ? k : f;
    e.fillRect(0, 0, c, xzu188.h);
    e.fillStyle = xzu315;
    e.fillText(xzu183.createString(h), Math.floor(c / 2), n);
    e.fillStyle = xzu316;
    var p = Math.floor(((xzu209.getTimer() - 1) * xzu188.h) / 9),
      r = Math.floor(1 + 0.13 * xzu188.h);
    e.fillRect(0, p, r, xzu188.h - p);
    e.fillRect(c - r, p, r, xzu188.h - p);
    e.fillStyle = xzu315;
    e.fillRect(0, 0, c, 1);
    e.fillRect(0, 0, 1, xzu188.h);
    e.fillRect(0, xzu188.h - 1, c, 1);
    e.fillRect(c - 1, 0, 1, xzu188.h);
  }
  var d, c, b;
  this.h = this.x = 0;
  var g, e, m, h, l, k, f, n;
  this.init = function () {
    k = "rgba(0,100,0,0.8)";
    f = "rgba(150,0,0,0.8)";
    l = !0;
    m = !1;
    h = xzu672[xzu161];
    this.zto1324();
  };
  this.zto1324 = function () {
    c = Math.floor((xzu706 ? 0.45 : 0.333) * xzu696);
    this.h = Math.floor(0.5 + 0.13 * c);
    d = xzu332 + Math.floor(0.9 * this.h) + xzu336;
    n = Math.floor(0.58 * this.h);
    xzu734.font = d;
    c = Math.floor(xzu734.measureText("02 000 000 000").width);
    b = xzu347;
    g = document.createElement("canvas");
    g.width = c;
    g.height = this.h;
    e = g.getContext("2d", { alpha: !0 });
    e.font = d;
    e.textBaseline = xzu326;
    e.textAlign = xzu329;
    a();
  };
  this.refreshLocation = function () {
    this.x =
      xzu706 && xzu694 < xzu695
        ? xzu697 - c - xzu347
        : Math.floor(
            xzu189.getNormalizedWidth() +
              (xzu697 - xzu189.getNormalizedWidth() - xzu190.w - c) / 2 -
              0.5 * xzu347
          );
  };
  this.repaint = function () {
    m && ((m = !1), a());
  };
  this.calculate = function () {
    xzu153 ||
      h == xzu672[xzu161] ||
      ((l = xzu672[xzu161] > h && 10 <= xzu672[xzu161]),
      (h = xzu672[xzu161]),
      (m = !0));
  };
  this.draw = function () {
    0 == xzu665[xzu161] || xzu153 || xzu164 || xzu690.drawImage(g, this.x, b);
  };
}
var xzu437, xzu438, xzu439, xzu440, xzu441, xzu442, xzu443;
function zto1066() {
  function a() {
    k.clearRect(0, 0, xzu437, xzu438);
    k.fillStyle = xzu306;
    k.fillRect(0, 0, p, v);
    var E = Math.floor(0.2 * v);
    k.setTransform(1, 0, 0, 1, Math.floor(0.2 * v), Math.floor(0.2 * v));
    k.lineWidth = 2;
    k.strokeStyle = xzu315;
    k.beginPath();
    k.moveTo(0, 0);
    k.lineTo(E, E);
    k.moveTo(0, E);
    k.lineTo(E, 0);
    k.stroke();
    k.setTransform(1, 0, 0, 1, 0, 0);
    k.fillStyle = xzu292;
    k.fillRect(0, v, p, xzu438 - v);
    c(xzu443[xzu161], xzu304);
    0 != xzu443[xzu161] && c(0, xzu303);
    -1 != T && c(T, xzu305);
    k.fillStyle = xzu293;
    k.fillRect(0, v, p, 1);
    k.fillRect(0, 0, p, xzu348);
    k.fillRect(0, 0, xzu348, xzu438);
    k.fillRect(p - xzu348, 0, xzu348, xzu438);
    k.fillRect(0, xzu438 - xzu348, p, xzu348);
    k.font = xzu439;
    k.textBaseline = xzu326;
    k.textAlign = xzu329;
    k.fillText(S, Math.floor(p / 2), Math.floor(u + xzu441 / 2));
    var L = xzu443[xzu161] < h - 1 ? 1 : 2;
    k.font = xzu440;
    k.textAlign = xzu330;
    for (E = h - L; 0 <= E; E--) d(xzu442[E]), b(E, E, xzu442[E]);
    k.textAlign = xzu331;
    for (E = h - L; 0 <= E; E--) d(xzu442[E]), g(E, xzu442[E]);
    2 == L &&
      (d(xzu161),
      (k.textAlign = xzu330),
      b(h - 1, xzu443[xzu161], xzu161),
      (k.textAlign = xzu331),
      g(h - 1, xzu161));
    E = (0.7 * z) / xzu205.get(4).height;
    k.setTransform(
      E,
      0,
      0,
      E,
      Math.floor(B + 0.58 * z + 0.5 * E * xzu205.get(4).width),
      Math.floor(u + xzu441 + 0.4 * z)
    );
    k.imageSmoothingEnabled = !0;
    k.drawImage(
      xzu205.get(4),
      -Math.floor(xzu205.get(4).width / 2),
      -Math.floor(xzu205.get(4).height / 2)
    );
    k.setTransform(1, 0, 0, 1, 0, 0);
  }
  function d(E) {
    xzu166 &&
      (k.fillStyle = xzu152
        ? xzu325[1 + (E % 2) * 2]
        : E < xzu146
        ? xzu325[1 + 2 * xzu721.ids[E]]
        : xzu293);
  }
  function c(E, L) {
    k.fillStyle = L;
    E = 9 < E ? 9 : E;
    var P = Math.floor((9 == E ? 2 : 0 == E ? 1.15 : 1) * z);
    P = 8 == E ? Math.floor(v + 9.15 * z) - Math.floor(v + 8.15 * z) : P;
    k.fillRect(0, Math.floor(v + (E + (0 == E ? 0 : 0.15)) * z), p, P);
  }
  function b(E, L, P) {
    k.fillText(Q[L], B, Math.floor(u + xzu441 + (E + 0.5) * z));
    1 == xzu677[P] && (k.font = xzu334 + xzu440);
    k.fillText(
      I[P] == P ? xzu664[P] : C[I[P] % xzu150],
      w,
      Math.floor(u + xzu441 + (E + 0.5) * z)
    );
    1 == xzu677[P] && (k.font = xzu440);
  }
  function g(E, L) {
    k.fillText(xzu670[L], x, Math.floor(u + xzu441 + (E + 0.5) * z));
  }
  function e() {
    for (var E = 0, L = h - 2; 0 <= L; L--)
      E = O[xzu442[L]] > E ? O[xzu442[L]] : E;
    E =
      xzu443[xzu161] >= h - 1
        ? O[xzu161] > E
          ? O[xzu161]
          : E
        : O[xzu442[h - 1]] > E
        ? O[xzu442[h - 1]]
        : E;
    n = E + w + r + B;
    n = n < f ? f : n;
    n = n > xzu437 ? xzu437 : n;
    n >= p ? ((p = n), (t = 0)) : 80 < t++ && ((t = 0), (p = n));
    x = p - B;
  }
  function m(E) {
    for (var L, P = h - 1; 0 <= P; P--)
      if (
        ((L = xzu347 + u + xzu441 + P * z), E >= L && (E < L + z || P == h - 1))
      )
        return P;
    return -1;
  }
  var h, l, k, f, n, p, r, t, q, u, y, v, z, B, w, x, C, I, O, S, Q, K, V, R, T;
  this.init = function () {
    var E;
    S = "LEADERBOARD";
    T = -1;
    h = 10;
    R = !1;
    K = new Uint16Array(h + 1);
    V = new Uint32Array(h + 1);
    q = xzu150;
    xzu442 = new Uint16Array(q);
    xzu443 = new Uint16Array(q);
    for (E = q - 1; 0 <= E; E--) (xzu442[E] = E), (xzu443[E] = E);
    this.zto1324(!0);
    C = [];
    I = new Uint16Array(xzu150);
    O = new Uint16Array(xzu150);
    var L = Math.floor(xzu437 - w - B - r),
      P = 0;
    Q = Array(xzu150);
    k.font = xzu440;
    for (E = xzu150 - 1; 0 <= E; E--)
      if (
        ((Q[E] = E + 1 + "."),
        (I[E] = E),
        (O[E] = Math.floor(k.measureText(xzu664[E]).width)),
        O[E] > L)
      ) {
        var A = xzu664[E];
        for (
          var G = xzu664[E].length - 1;
          1 <= G &&
          !((A = A.substring(0, G)),
          (O[E] = Math.floor(k.measureText(A + "...").width)),
          O[E] <= L);
          G--
        );
        A += "...";
        C.push(A);
        I[E] = xzu150 + P++;
      }
    e();
    a();
  };
  this.zto1324 = function (E) {
    xzu438 = xzu437 = xzu706
      ? xzu694 < xzu695
        ? Math.floor(0.44 * xzu696)
        : Math.floor(0.47 * xzu696)
      : Math.floor(0.39 * xzu696);
    l = document.createElement("canvas");
    l.width = xzu437;
    l.height = xzu438;
    k = l.getContext("2d", { alpha: !0 });
    u = 0.025 * xzu438;
    xzu441 = 0.16 * xzu438;
    y = 0 * xzu438;
    v = Math.floor(0.45 * u + xzu441);
    z = (xzu438 - xzu441 - 2 * u - y) / h;
    xzu439 = xzu332 + Math.floor(0.5 * xzu441) + xzu336;
    xzu440 = Math.floor(0.6 * z) + xzu336;
    k.font = xzu440;
    B = Math.floor(k.measureText("555").width);
    w = Math.floor(k.measureText("555600.00").width);
    r = Math.floor(k.measureText("00920600").width);
    k.font = xzu439;
    f = Math.floor(k.measureText(S).width) + 2 * B;
    n = xzu437;
    p = f;
    t = 0;
    x = p - B;
    if (!E) {
      k.font = xzu440;
      for (E = xzu150 - 1; 0 <= E; E--)
        O[E] = Math.floor(
          k.measureText(I[E] == E ? xzu664[E] : C[I[E] % xzu150]).width
        );
      e();
      a();
    }
  };
  this.isFirstPlayerWinning = function () {
    return 0 < xzu665[xzu442[0]] && 1 == xzu679;
  };
  this.getNormalizedWidth = function () {
    return Math.floor(0.9 * xzu437);
  };
  this.repaint = function (E) {
    R &&
      (E ||
        (14 >= xzu713 && 0 == xzu720.getCalculations() % 6) ||
        14 < xzu713) &&
      ((R = !1), a());
  };
  this.calculate = function () {
    for (var E = q - 1; 0 <= E; E--)
      if (0 == xzu665[xzu442[E]]) {
        var L = E,
          P = xzu442[L];
        for (q--; L < q; L++)
          (xzu442[L] = xzu442[L + 1]), (xzu443[xzu442[L]] = L);
        xzu442[q] = P;
        xzu443[xzu442[q]] = q;
      }
    P = q - 1;
    for (L = 0; L < P; L++)
      xzu670[xzu442[L]] < xzu670[xzu442[L + 1]] &&
        ((E = xzu442[L]),
        (xzu442[L] = xzu442[L + 1]),
        (xzu442[L + 1] = E),
        (xzu443[xzu442[L]] = L),
        (xzu443[xzu442[L + 1]] = L + 1));
    e();
    a: {
      E = R;
      R = !0;
      for (L = P = xzu443[xzu161] >= h - 1 ? h - 2 : h - 1; 0 <= L; L--)
        if (K[L] != xzu442[L] || V[L] != xzu670[xzu442[L]]) break a;
      if (P != h - 2 || (K[h] == xzu443[xzu161] && V[h] == xzu670[xzu161]))
        R = E;
    }
    for (E = h - 1; 0 <= E; E--) (K[E] = xzu442[E]), (V[E] = xzu670[xzu442[E]]);
    K[h] = xzu443[xzu161];
    V[h] = xzu670[xzu161];
  };
  this.mouseDown = function (E, L) {
    if (E <= xzu347 + 2 * v && L <= Math.floor(xzu347 + 0.8 * v))
      return (xzu162 = !xzu162), (xzu720.requestRepaint = !0);
    if (
      E >= xzu347 &&
      L >= xzu347 + 0 &&
      E <= xzu347 + p &&
      L <= xzu347 + xzu438
    ) {
      if (L <= xzu347 + v) return !0;
      var P = m(L);
      if (-1 != P) {
        var A = xzu442[P];
        P == h - 1 && xzu443[xzu161] >= h - 1 && (A = xzu161);
        0 != xzu665[A] && xzu176.setDeathCamera(A, 800, !1, 0);
      }
      return !0;
    }
    return !1;
  };
  this.mouseMove = function (E, L) {
    if (
      E >= xzu347 &&
      L >= xzu347 + v &&
      E <= xzu347 + p &&
      L <= xzu347 + xzu438
    ) {
      var P = m(L);
      T != P && ((T = P), a(), (xzu720.requestRepaint = !0));
      return !0;
    }
    -1 != T && ((T = -1), a(), (xzu720.requestRepaint = !0));
    return !1;
  };
  this.draw = function () {
    xzu690.drawImage(l, xzu347, xzu347);
  };
}
function zto1082() {
  function a() {
    g.clearRect(0, 0, xzu190.w, xzu190.h);
    0 >= xzu681
      ? ((g.fillStyle = xzu290),
        g.fillRect(0, 0, xzu190.w, xzu190.h),
        (g.fillStyle = xzu296),
        g.fillRect(
          0,
          xzu190.h - h - 1,
          Math.floor((0 < z ? z : Math.sqrt(q[4] / q[3])) * xzu190.w),
          h
        ))
      : ((g.fillStyle = xzu442[0] == xzu161 ? xzu299 : xzu311),
        g.fillRect(0, 0, xzu190.w, xzu190.h),
        (g.fillStyle = xzu310),
        g.fillRect(
          0,
          xzu190.h - h - 1,
          Math.floor(zto1304(xzu681 * xzu190.w, 1e4)),
          h
        ));
    g.fillStyle = xzu315;
    g.fillRect(0, 0, xzu190.w, 1);
    g.fillRect(0, 0, 1, xzu190.h);
    g.fillRect(xzu190.w - 1, 0, 1, xzu190.h);
    g.fillRect(0, xzu190.h - 1, xzu190.w, 1);
    g.fillRect(0, xzu190.h - h - 1, xzu190.w, 1);
    for (var x = 0, C = 0; C < t.length; C++)
      if (u[C]) {
        g.textAlign = xzu330;
        var I = Math.floor(
          ((l - h + 2 * f) * (C - x + 1)) / (t.length + 1) - 0.7 * f
        );
        g.fillText(t[C], k, I);
        g.textAlign = xzu331;
        5 == C &&
        0 != xzu665[xzu161] &&
        xzu672[xzu161] >= xzu209.getMaxInterest(xzu161)
          ? ((g.fillStyle = xzu321),
            g.fillText(d(C), xzu190.w - k, I),
            (g.fillStyle = xzu315))
          : g.fillText(d(C), xzu190.w - k, I);
      } else x++;
  }
  function d(x) {
    return 3 > x
      ? q[x].toString()
      : 3 == x
      ? xzu190.percentageToString(q[x] / 100, 2)
      : 4 == x
      ? xzu190.percentageToString(q[x] / 100, 2)
      : 5 == x
      ? xzu190.percentageToString(q[x] / 100, 2)
      : 7 > x
      ? xzu183.createString(q[x])
      : xzu190.getTimer(q[7]);
  }
  function c() {
    xzu670[xzu161] != q[6] &&
      ((q[6] = xzu670[xzu161]),
      xzu152 &&
        0 != xzu665[0] &&
        2 > xzu170.getIStrength() &&
        (q[6] += zto1304(2 * (4 - xzu170.getIStrength()) * xzu670[0], 5)),
      r++);
  }
  var b, g, e, m, h, l, k, f, n, p, r, t, q, u, y, v, z, B, w;
  this.init = function () {
    v = !1;
    z = B = 0;
    t = Array(8);
    t[0] = "Humans";
    t[1] = xzu152 ? "Players" : "Bots";
    t[2] = "Spectators";
    t[3] = "Threshold";
    t[4] = "Occupation";
    t[5] = "Interest";
    t[6] = "Income";
    t[7] = "Time";
    q = Array(t.length);
    q[0] = xzu152 ? 0 : xzu146;
    q[1] = xzu152 ? xzu679 : xzu148;
    q[2] = xzu149;
    q[3] = 1e4;
    q[4] = zto1304(1e4 * xzu670[0], xzu155);
    q[5] = 600;
    q[6] = 0;
    c();
    q[7] = 0;
    y = d(6);
    u = Array(t.length);
    for (var x = t.length - 1; 0 <= x; x--) u[x] = !0;
    w = 0;
    xzu152
      ? ((u[0] = !1),
        (u[2] = !1),
        (u[3] = !xzu163 && xzu166),
        (w = 2 + (u[3] ? 0 : 1)))
      : xzu166 || ((u[3] = !1), (w = 1));
    r = 0;
    this.zto1324();
  };
  this.zto1324 = function () {
    this.w = Math.floor((xzu706 ? 0.25 : 0.175) * xzu696);
    this.h = Math.floor(1.18 * this.w);
    h = Math.floor(0.04 * this.w);
    k = Math.floor(0.05 * this.w);
    f = 0.04 * this.w;
    l = this.h;
    this.h -= Math.floor((w * (this.h - 2 * h)) / t.length);
    p = Math.floor((0.55 * (l - h)) / t.length);
    n = xzu332 + p + xzu336;
    b = document.createElement("canvas");
    b.width = this.w;
    b.height = this.h;
    g = b.getContext("2d", { alpha: !0 });
    g.font = n;
    g.textBaseline = xzu326;
    g.lineWidth = 1;
    xzu164 ? this.moveUp() : this.moveDown();
    this.refreshLocation();
    xzu188.refreshLocation();
    a();
  };
  this.refreshLocation = function () {
    e = xzu697 - this.w - xzu347;
  };
  this.moveUp = function () {
    m = xzu347;
  };
  this.moveDown = function () {
    m = xzu347 + (xzu706 && xzu694 < xzu695 ? xzu188.h + xzu347 : 0);
  };
  this.repaint = function (x) {
    0 < r && (x || (12 > xzu713 && 100 <= r) || 12 <= xzu713) && ((r = 0), a());
  };
  this.getTimePassed = function () {
    return q[7];
  };
  this.getTimer = function (x) {
    var C = Math.floor(x / 1e3 / 60);
    x = Math.floor((x - 6e4 * C) / 1e3);
    return 10 > x ? C + ":0" + x : C + ":" + x;
  };
  this.percentageToString = function (x, C) {
    return x.toFixed(C) + "%";
  };
  this.calculate = function () {
    u[0] && xzu147 - xzu149 != q[0] && ((q[0] = xzu147 - xzu149), r++);
    xzu679 - q[0] != q[1] && ((q[1] = xzu679 - q[0]), r++);
    this.calculateSpectators();
    if (u[3]) {
      var x = q[3];
      q[3] = zto1304(xzu680, 10);
      x != q[3] && r++;
    }
    if (xzu166) {
      x = zto1304(1e4 * xzu722.sum[0], xzu155);
      var C = zto1304(1e4 * xzu722.sum[1], xzu155);
      x = x > C ? x : C;
      q[4] != x && (r++, (q[4] = x));
      q[4] >= q[3] && xzu726.endGame(-1);
    } else
      0 < xzu167
        ? 0 == xzu665[0]
          ? xzu726.endGame(1)
          : 0 == xzu665[1]
          ? xzu726.endGame(0)
          : ((x = zto1304(1e4 * xzu670[xzu442[0]], xzu155)),
            x >= q[3] && (xzu726.endGame(-1), (q[4] = -1)),
            q[4] != x && (r++, (q[4] = x)))
        : ((x = zto1304(1e4 * xzu670[xzu442[0]], xzu155)),
          x >= q[3] && (xzu726.endGame(-1), (q[4] = -1)),
          q[4] != x && (r++, (q[4] = x)),
          xzu152 && xzu189.isFirstPlayerWinning()
            ? xzu163
              ? v || ((v = !0), xzu181.addState(0, 17))
              : xzu726.endGame(-1)
            : xzu163 &&
              !v &&
              9500 < x &&
              xzu442[0] == xzu161 &&
              ((v = !0), xzu181.addState(0, 17)));
    x = xzu209.getPlayerInterest(xzu161);
    x != q[5] && ((q[5] = x), r++);
    c();
    q[7] += xzu720.getInterval();
    x = d(7);
    y != x && ((y = x), (r += 100));
    0 != xzu681 && ((r += 100), 1e4 <= xzu681 && xzu726.endGame(-1));
  };
  this.calculateSpectators = function () {
    u[2] && xzu149 != q[2] && ((q[2] = xzu149), r++);
  };
  this.calculateFreeSpawn = function (x) {
    if (19 == x) return (z = 0), a(), !1;
    if (-1 == x && 0 == B) return !1;
    var C = z,
      I = performance.now();
    if (0 <= x) {
      var O = I - 392 * x;
      B = 0 == x || O < B ? O : B;
    }
    z = (I - B) / 7448;
    z = 1 < z ? 1 : z;
    a();
    return z != C;
  };
  this.draw = function () {
    xzu690.drawImage(b, e, m);
  };
}
function zto1095() {
  var a, d, c, b, g, e, m, h, l, k, f, n, p;
  this.init = function () {
    a = !1;
    b = 0;
    g = 0.2;
    e = 0.6;
    m = 0.07;
    h = 0.12;
    l = 0.09;
    p = k = 0;
  };
  this.zto1324 = function () {
    if (a) {
      b = Math.floor(
        (xzu706 ? (xzu694 < xzu695 ? 0.21 : 0.25) : 0.18) * xzu696
      );
      var r = (b - 2 * g * b) / xzu205.get(d).height;
      c = Math.floor(2 * e * b + xzu205.get(d).width * r);
      var t = Math.floor(1 + b / 20);
      f = document.createElement("canvas");
      f.width = c + 2 * t;
      f.height = b + 2 * t;
      n = f.getContext("2d", { alpha: !0 });
      n.clearRect(0, 0, f.width, f.height);
      n.setTransform(1, 0, 0, 1, Math.floor(t / 2), Math.floor(t / 2));
      n.fillStyle = xzu290;
      n.fillRect(0, 0, c, b);
      n.lineJoin = "bevel";
      n.lineWidth = t;
      n.strokeStyle = xzu315;
      n.shadowColor = xzu315;
      n.shadowBlur = t;
      n.shadowOffsetX = Math.floor(t / 2);
      n.shadowOffsetY = Math.floor(t / 2);
      n.strokeRect(0, 0, c, b);
      n.shadowColor = xzu314;
      n.shadowBlur = 0;
      n.shadowOffsetX = 0;
      n.shadowOffsetY = 0;
      n.imageSmoothingEnabled = !0;
      n.setTransform(r, 0, 0, r, Math.floor(c / 2), Math.floor(b / 2));
      r = xzu205.get(d);
      n.drawImage(r, -Math.floor(r.width / 2), -Math.floor(r.height / 2));
      n.setTransform(
        1,
        0,
        0,
        1,
        Math.floor(c - l * b - m * b),
        Math.floor(h * b)
      );
      r = Math.floor(l * b);
      n.lineWidth = Math.floor(1 + b / 80);
      n.strokeStyle = xzu315;
      n.beginPath();
      n.moveTo(0, 0);
      n.lineTo(r, r);
      n.moveTo(0, r);
      n.lineTo(r, 0);
      n.stroke();
      n.setTransform(1, 0, 0, 1, 0, 0);
    }
  };
  this.show = function (r, t) {
    a ||
      ((d = r ? 1 : 2),
      (a = !0),
      this.zto1324(),
      xzu179.prepareEndgame(),
      xzu185.setInvisible(),
      (p = xzu720.time),
      (k = t ? 1 : 0));
  };
  this.calculate = function () {
    !a ||
      1 <= k ||
      ((k += 5e-4 * (xzu720.time - p)),
      (k = 1 < k ? 1 : k),
      (p = xzu720.time),
      (xzu720.requestRepaint = !0));
  };
  this.mouseDown = function (r, t) {
    if (!a || 0 >= k) return !1;
    r -= Math.floor((xzu697 - c) / 2);
    t -= xzu698 - b - 2 * xzu347;
    var q = h * b;
    return r > c - l * b - m * b - q &&
      r < c - l * b + q &&
      t < l * b + h * b + q &&
      t > l * b - q
      ? ((a = !1), (xzu720.requestRepaint = !0))
      : 0 <= r && 0 <= t && r < c && t < b
      ? !0
      : !1;
  };
  this.draw = function () {
    !a ||
      0 >= k ||
      ((xzu690.globalAlpha = k),
      xzu690.drawImage(
        f,
        Math.floor((xzu697 - c) / 2),
        xzu698 - b - 2 * xzu347
      ),
      (xzu690.globalAlpha = 1));
  };
}
function zto1098(a, d, c) {
  if (!(0 == xzu665[a] || 0 > c || 1e3 < c))
    if (xzu166 && !xzu152 && d < xzu146 && xzu721.ids[a] == xzu721.ids[d])
      zto1100(a, d, c);
    else {
      d < xzu150 && 0 == xzu665[d] && (d = xzu150);
      var b = zto1304(3 * xzu672[a], 256),
        g = zto1304(c * xzu672[a], 1e3);
      g -= 500 <= c ? b : 0;
      if (!(g <= xzu160) && xzu208.isFree(a)) {
        var e = xzu673[a].length;
        d == xzu150 ? zto910(a) : zto908(a, d);
        if (0 != e || 0 != xzu673[a].length)
          a == xzu161 &&
            ((xzu717.values[0] += 500 <= c ? c - 12 : c),
            xzu717.values[1]++,
            (xzu717.values[11] += b),
            (xzu717.values[12] += g),
            xzu166 && xzu152 && (xzu46[0] = 1)),
            zto909(e, a),
            xzu208.add(a, g, d),
            (xzu672[a] -= g + b),
            xzu171.newAttack(a, !1);
      }
    }
}
function zto1099(a, d, c, b) {
  if (b <= xzu160 || !xzu208.isFree(a)) return !1;
  d = xzu175.newAttack(a, d, c);
  if (0 == d) return !1;
  c = zto1304(3 * xzu672[a], 128);
  b >= zto1304(xzu672[a], 2) && (b -= c);
  a == xzu161 && (xzu717.values[11] += c);
  xzu208.addShip(a, b, d);
  xzu672[a] -= b + c;
  return !0;
}
function zto1100(a, d, c) {
  if (
    !(!xzu166 || 0 == xzu665[a] || 0 == xzu665[d] || 0 > c || 1e3 < c || a == d)
  ) {
    if (xzu152) {
      if (a % 2 != d % 2) return;
    } else if (a >= xzu146 || d >= xzu146 || xzu721.ids[a] != xzu721.ids[d])
      return;
    var b = zto1304(xzu672[a], 16),
      g = zto1304(c * xzu672[a], 1e3);
    g -= 500 <= c ? b : 0;
    0 >= g ||
      ((c = 200 * xzu670[d] - xzu672[d]),
      0 != c &&
        ((g = g > c ? c : g),
        a == xzu161 &&
          (xzu181.addSupport(g, d),
          (xzu717.values[11] += b),
          (xzu717.values[12] += g)),
        d == xzu161 && (xzu181.receiveSupport(g, a), (xzu717.values[10] += g)),
        (xzu672[a] -= g + b),
        (xzu672[d] += g)));
  }
}
function zto1101() {
  this.atLeastOnePixelChanged =
    this.pixelInWindowChanged =
    this.camMoveDetection =
      !1;
  this.borders = [0, 0, 0, 0];
  this.render = function () {
    this.atLeastOnePixelChanged =
      this.atLeastOnePixelChanged || this.pixelInWindowChanged;
    if (
      this.pixelInWindowChanged ||
      (this.camMoveDetection && this.atLeastOnePixelChanged)
    ) {
      var a = xzu711.camC[0],
        d = xzu711.camC[1],
        c = xzu711.camC[2],
        b = xzu711.camC[3];
      a = a < this.borders[0] ? this.borders[0] : a;
      d = d < this.borders[1] ? this.borders[1] : d;
      c = c > this.borders[2] ? this.borders[2] : c;
      b = b > this.borders[3] ? this.borders[3] : b;
      this.camMoveDetection = this.pixelInWindowChanged = !1;
      a == this.borders[0] &&
      d == this.borders[1] &&
      c == this.borders[2] &&
      b == this.borders[3]
        ? this.renderAll()
        : c >= a &&
          b >= d &&
          xzu769.putImageData(xzu770, 0, 0, a, d, c - a + 1, b - d + 1);
    }
  };
  this.renderAll = function () {
    this.atLeastOnePixelChanged &&
      this.borders[2] >= this.borders[0] &&
      this.borders[3] >= this.borders[1] &&
      xzu769.putImageData(
        xzu770,
        0,
        0,
        this.borders[0],
        this.borders[1],
        this.borders[2] - this.borders[0] + 1,
        this.borders[3] - this.borders[1] + 1
      );
    this.atLeastOnePixelChanged = !1;
  };
  this.init = function () {
    var a;
    this.atLeastOnePixelChanged =
      this.pixelInWindowChanged =
      this.camMoveDetection =
        !1;
    this.borders[0] = xzu731;
    this.borders[1] = xzu732;
    this.borders[2] = this.borders[3] = 0;
    var d = 1;
    a: for (; d < xzu731 - 1; d++)
      for (a = xzu732 - 2; 1 < a; a--)
        if (1 == xzu768[xzu206.coordToPoint(d, a) + 2]) {
          this.borders[0] = d;
          break a;
        }
    a = 1;
    a: for (; a < xzu732 - 1; a++)
      for (d = xzu731 - 2; 1 < d; d--)
        if (1 == xzu768[xzu206.coordToPoint(d, a) + 2]) {
          this.borders[1] = a;
          break a;
        }
    d = xzu731 - 2;
    a: for (; 0 < d; d--)
      for (a = xzu732 - 2; 1 < a; a--)
        if (1 == xzu768[xzu206.coordToPoint(d, a) + 2]) {
          this.borders[2] = d;
          break a;
        }
    a = xzu732 - 2;
    a: for (; 0 < a; a--)
      for (d = xzu731 - 2; 1 < d; d--)
        if (1 == xzu768[xzu206.coordToPoint(d, a) + 2]) {
          this.borders[3] = a;
          break a;
        }
  };
}
function zto1102() {
  this.isVisible = !1;
  this.objs = null;
  this.selected = 0;
  this.h = this.w = null;
  this.gap0 = 0.018;
  this.gap1 = 0.03;
  this.gap2 = 0.05;
  this.gapFactor0 = 4;
  this.gapFactor1 = 2.5;
  this.left0 = 0.17;
  this.left1 = 0.21;
  this.left2 = 0.9;
  this.top0 = 0.1;
  this.init = function () {
    this.objs = [null, null];
    this.isVisible = !1;
    this.selected = 0;
    this.zto1324();
  };
  this.zto1324 = function () {
    this.w = this.getWbasedOnRatio(xzu706 ? 0.85 : 0.5, 0.8, xzu694, xzu695);
    this.h = Math.floor(this.w / 0.8);
    this.objs[0] &&
      this.objs[1] &&
      ((this.objs[0][4] =
        xzu332 + Math.floor((0.4 * this.h) / this.objs[0][1]) + xzu336),
      (this.objs[1][4] =
        xzu332 + Math.floor((0.6 * this.h) / this.objs[1][1]) + xzu336));
  };
  this.getWbasedOnRatio = function (a, d, c, b) {
    return c < d * b ? Math.floor(a * c) : Math.floor(d * a * b);
  };
  this.addList = function (a, d, c, b, g, e) {
    var m = d.length;
    g = xzu332 + Math.floor((g * this.h) / m) + xzu336;
    this.trimNames(d, g, e * this.w);
    b = [[], m, -1, b, g];
    for (e = 0; e < m; e++)
      (g = { name: d[e].name, value: d[e].elo / c }), b[0].push(g);
    this.objs[a] = b;
    this.sortArr(a);
    0 < m && xzu723.setName(a, d[0].name);
  };
  this.sortArr = function (a) {
    this.objs[a][0].sort(function (d, c) {
      return c.value - d.value;
    });
  };
  this.update = function (a, d, c, b) {
    if (this.objs && this.objs[a]) {
      var g,
        e = !1;
      if (0 == a) {
        for (g = 0; g < this.objs[a][0].length; g++)
          if (
            d == this.objs[a][0][g].name &&
            c > 0.99 * this.objs[a][0][g].value &&
            c < 1.01 * this.objs[a][0][g].value
          ) {
            this.objs[a][0][g].value = b;
            e = !0;
            break;
          }
        e || this.objs[a][0].push({ name: d, value: b });
      } else {
        for (g = 0; g < this.objs[a][0].length; g++)
          if (d == this.objs[a][0][g].name) {
            this.objs[a][0][g].value +=
              32 < this.objs[a][0][g].value
                ? (64 - this.objs[a][0][g].value) / 32
                : 1;
            this.objs[a][0][g].value *= 1 / 0.96875;
            e = !0;
            break;
          }
        for (g = 0; g < this.objs[a][0].length; g++)
          this.objs[a][0][g].value *= 0.96875;
        e || this.objs[a][0].push({ name: d, value: 1 });
      }
      this.sortArr(a);
    }
  };
  this.trimNames = function (a, d, c) {
    for (var b = a.length - 1; 0 <= b; b--)
      for (; 3 < a[b].name.length && xzu184.measureText(a[b].name, d) > c; )
        a[b].name = a[b].name.substring(0, a[b].name.length - 4) + "...";
  };
  this.mouseDown = function (a, d) {
    if (!this.isVisible) return !1;
    var c = (xzu697 - this.w) / 2,
      b = (xzu698 - this.h) / 2;
    if (a < c || a > c + this.w || d < b || d > b + this.h)
      (this.isVisible = !1),
        0 == xzu198.getState() && xzu200.setVisible(0, !0),
        (xzu720.requestRepaint = !0);
    return !0;
  };
  this.draw = function () {
    if (this.isVisible) {
      var a = this.gap0 * this.w,
        d = this.gapFactor0 * a,
        c = this.gap1 * this.w,
        b = this.gapFactor1 * c,
        g = this.gap2 * this.w;
      xzu690.setTransform(
        1,
        0,
        0,
        1,
        (xzu697 - this.w) / 2,
        (xzu698 - this.h) / 2
      );
      xzu690.fillStyle = xzu292;
      xzu690.fillRect(0, 0, this.w, this.h);
      xzu690.fillStyle = xzu315;
      xzu690.beginPath();
      xzu690.moveTo(this.w / 4, 0);
      xzu690.lineTo(this.w / 2 - a, 0);
      xzu690.lineTo(this.w / 2, -d);
      xzu690.lineTo(this.w / 2 + a, 0);
      xzu690.lineTo(this.w - c, 0);
      xzu690.lineTo(this.w + b, -b);
      xzu690.lineTo(this.w, c);
      xzu690.lineTo(this.w, this.h / 2 - a);
      xzu690.lineTo(this.w + d, this.h / 2);
      xzu690.lineTo(this.w, this.h / 2 + a);
      xzu690.lineTo(this.w, this.h - c);
      xzu690.lineTo(this.w + b, this.h + b);
      xzu690.lineTo(this.w - c, this.h);
      xzu690.lineTo(this.w / 2 + a, this.h);
      xzu690.lineTo(this.w / 2, this.h + d);
      xzu690.lineTo(this.w / 2 - a, this.h);
      xzu690.lineTo(c, this.h);
      xzu690.lineTo(-b, this.h + b);
      xzu690.lineTo(0, this.h - c);
      xzu690.lineTo(0, this.h / 2 + a);
      xzu690.lineTo(-d, this.h / 2);
      xzu690.lineTo(0, this.h / 2 - a);
      xzu690.lineTo(0, c);
      xzu690.lineTo(-b, -b);
      xzu690.lineTo(c, 0);
      xzu690.lineTo(this.w / 4, 0);
      xzu690.lineTo(this.w / 4, g);
      xzu690.lineTo(g, g);
      xzu690.lineTo(g, this.h - g);
      xzu690.lineTo(this.w - g, this.h - g);
      xzu690.lineTo(this.w - g, g);
      xzu690.lineTo(this.w / 4, g);
      xzu690.fill();
      this.objs[this.selected] && this.drawText();
      xzu690.setTransform(1, 0, 0, 1, 0, 0);
    }
  };
  this.drawText = function () {
    xzu690.font = this.objs[this.selected][4];
    xzu690.textBaseline = xzu326;
    for (var a, d = this.objs[this.selected][1] - 1; 0 <= d; d--)
      (xzu690.fillStyle =
        d == this.objs[this.selected][2] ? "rgb(255,255,155)" : xzu315),
        (xzu690.textAlign = xzu331),
        (a = Math.floor(
          this.top0 * this.h +
            (d * (1 - 2 * this.top0) * this.h) /
              (this.objs[this.selected][1] - 1)
        )),
        xzu690.fillText(
          this.objs[this.selected][0][d].value.toFixed(
            this.objs[this.selected][3]
          ),
          Math.floor(this.left2 * this.w),
          a
        ),
        xzu690.fillText(d + 1 + ".", Math.floor(this.left0 * this.w), a),
        (xzu690.textAlign = xzu330),
        xzu690.fillText(
          this.objs[this.selected][0][d].name,
          Math.floor(this.left1 * this.w),
          a
        );
  };
}
function zto1103() {
  var a, d, c, b, g, e, m, h, l, k, f, n, p;
  this.isVisible = !1;
  this.init = function (r, t) {
    if (13 <= xzu705) t ? (n = r) : n == r && xzu704.saveString(200, r);
    else if (t) {
      (xzu354.objs[2].win.isVisible || xzu354.objs[3].win.isVisible) &&
        xzu354.keyUp();
      xzu204.deinit();
      n = r;
      l = Math.floor((xzu706 ? (xzu694 > xzu695 ? 0.6 : 0.45) : 0.4) * xzu696);
      c = l / xzu205.get(21).width;
      g = Math.floor(c * xzu205.get(21).height);
      e = Math.floor(0.4 * g);
      m = Math.floor(0.6 * g);
      h = Math.floor(2.5 * m);
      b = g + e + 3 * m;
      var q = xzu332 + e + xzu336;
      k = xzu184.measureText(n, q);
      f = (k > l ? k : l) + 2 * h;
      a = Math.floor((xzu697 - f) / 2);
      d = Math.floor((xzu698 - b) / 2);
      p = document.createElement("a");
      p.appendChild(document.createTextNode(n));
      p.title = n;
      p.target = "_blank";
      p.href = n;
      p.style.font = q;
      p.style.textAlign = "center";
      p.style.color = xzu315;
      p.style.position = "absolute";
      p.style.padding = "0px";
      p.style.margin = "0px";
      p.style.top = Math.floor(d + 2 * m + g) + "px";
      p.style.left = Math.floor(a + (f - k) / 2) + "px";
      document.body.appendChild(p);
      this.isVisible = !0;
      xzu720.requestRepaint = !0;
    }
  };
  this.hide = function () {
    if (!this.isVisible) return !1;
    document.body.removeChild(p);
    this.isVisible = !1;
    return !0;
  };
  this.mouseDown = function (r, t) {
    if (!this.isVisible) return !1;
    if (r < a || t < d || r > a + f || t > d + b)
      (xzu720.requestRepaint = !0),
        (this.isVisible = !1),
        document.body.removeChild(p),
        0 == xzu198.getState() && xzu200.setVisible(0, !0);
    return !0;
  };
  this.draw = function () {
    this.isVisible &&
      ((xzu690.imageSmoothingEnabled = !0),
      xzu690.setTransform(1, 0, 0, 1, a, d),
      (xzu690.fillStyle = xzu290),
      xzu690.fillRect(0, 0, f, b),
      (xzu690.lineWidth = xzu350),
      (xzu690.strokeStyle = xzu315),
      xzu690.strokeRect(0, 0, f, b),
      xzu690.setTransform(c, 0, 0, c, a + (f - l) / 2, d + m),
      xzu690.drawImage(xzu205.get(21), 0, 0),
      xzu690.setTransform(1, 0, 0, 1, 0, 0));
  };
}
function zto1104() {
  var a = 0,
    d = [0, 0, 0, 0, 0],
    c = [0, 0, 0, 0, 0],
    b = [1, 1, 1, 1, 1],
    g = [!0, !0, !0, !0, !0],
    e = null,
    m;
  this.initC = function (h, l) {
    e = h;
    g = l;
    m = [xzu339, xzu340, xzu341, xzu342, xzu343];
    this.init();
  };
  this.init = function () {
    if (xzu205.loaded()) {
      var h = Math.floor((xzu706 ? 0.44 : 0.27) * xzu696);
      var l = Math.floor(0.9 * h),
        k = Math.floor(0.17 * l);
      a = xzu706 ? 2 * xzu347 : xzu347;
      b[0] = h / e[0].width;
      b[1] = l / e[1].width;
      b[2] = k / e[2].height;
      b[3] = k / e[3].height;
      b[4] = k / e[4].height;
      b[3] *= 1.07;
      d[0] = a;
      d[1] = a;
      d[2] = a;
      d[3] = a;
      d[4] = a;
      c[0] = a;
      c[1] = c[0] + a + b[0] * e[0].height;
      c[2] = c[1] + a + b[1] * e[1].height;
      c[3] = c[2] + a + b[2] * e[2].height;
      c[4] = c[3] + a + b[3] * e[3].height;
      if (!g[0]) for (h = 0; 5 > h; h++) c[h] -= b[0] * e[0].height + a;
      if (!g[1]) for (h = 2; 5 > h; h++) c[h] -= b[1] * e[1].height + a;
    }
  };
  this.mouseDown = function (h, l, k) {
    if (!e) return !1;
    var f;
    for (f = g.length - 1; 0 <= f; f--)
      if (
        g[f] &&
        h > d[f] &&
        l > c[f] &&
        h < d[f] + b[f] * e[f].width &&
        l < c[f] + b[f] * e[f].height
      )
        return xzu728.init(m[f], k), !0;
    return !1;
  };
  this.draw = function () {
    if (e) {
      xzu690.imageSmoothingEnabled = !0;
      var h;
      for (h = 0; 5 > h; h++)
        g[h] &&
          (xzu690.setTransform(b[h], 0, 0, b[h], d[h], c[h]),
          xzu690.drawImage(e[h], 0, 0));
      xzu690.setTransform(1, 0, 0, 1, 0, 0);
    }
  };
}
function zto1105() {
  var a, d, c, b, g, e, m, h, l, k, f, n, p, r;
  this.init = function () {
    r = [];
    a = !1;
    m = xzu196.get(18).fontSize;
    b = Math.floor(2.3 * xzu196.get(18).fontSize);
  };
  this.mouseDown = function (t, q, u) {
    if (a) {
      if (t >= g && t <= g + c && q >= e && q <= (p ? n : e) + b)
        if (q <= e + b) xzu193.traffic++, xzu226.wrapPackageChallenge(h);
        else if (q >= n) p && (r.push(h), 0 < u && xzu226.wrapPackageReport(h));
        else return;
      a = !1;
      k = l = -1e3;
      xzu720.requestRepaint = !0;
    } else (l = t), (k = q);
  };
  this.click = function (t, q, u, y, v) {
    if (!a && Math.abs(t - l) < 0.5 * b && Math.abs(q - k) < 0.5 * b) {
      p = !0;
      for (var z = r.length - 1; 0 <= z; z--)
        if (r[z] == y) {
          p = !1;
          break;
        }
      if (100 <= r.length || 1 == v) p = !1;
      h = y;
      d = "Challenge " + u + "!";
      f = "Report " + u + "!";
      c = xzu184.measureText(d, xzu196.get(18).font) + 2 * m;
      g = Math.floor(t - c / 2);
      e = Math.floor(q - b / 2);
      n = Math.floor(e + 1.5 * b);
      a = !0;
      xzu720.requestRepaint = !0;
    }
  };
  this.mouseMove = function (t, q) {
    !a ||
      (t >= g && t <= g + c && q >= e && q <= (p ? n : e) + b) ||
      ((a = !1), (xzu720.requestRepaint = !0));
  };
  this.draw = function () {
    a &&
      ((xzu690.fillStyle = xzu196.get(19).colorBg),
      xzu690.fillRect(g, e, c, b),
      (xzu690.lineWidth = 3),
      (xzu690.strokeStyle = xzu315),
      xzu690.strokeRect(g, e, c, b),
      (xzu690.textAlign = xzu329),
      (xzu690.textBaseline = xzu326),
      (xzu690.font = xzu196.get(18).font),
      (xzu690.fillStyle = xzu315),
      xzu690.fillText(d, Math.floor(g + c / 2), Math.floor(e + b / 2)),
      p &&
        ((xzu690.fillStyle = xzu196.get(19).colorBg),
        xzu690.fillRect(g, n, c, b),
        (xzu690.strokeStyle = xzu313),
        xzu690.strokeRect(g, n, c, b),
        (xzu690.fillStyle = xzu313),
        xzu690.fillText(f, Math.floor(g + c / 2), Math.floor(n + b / 2))));
  };
}
function zto1108() {
  var a = [],
    d,
    c,
    b,
    g,
    e,
    m,
    h,
    l,
    k;
  this.init = function () {
    a = [];
    b = "Accept";
    d = Math.floor(2.3 * xzu184.measureText(b, xzu196.get(5).font));
    c = Math.floor(1.8 * xzu196.get(5).fontSize);
    g = Math.floor(0.4 * c);
    e = Math.floor(1 * c);
    m = Math.floor(3 * g + c + xzu196.get(19).fontSize);
    k = g;
    this.traffic = 0;
    this.refreshPosition();
  };
  this.zto1324 = function () {
    var f = a;
    this.init();
    for (var n = 0; n < f.length; n++)
      this.add(f[n].txt.substring(0, f[n].txt.length - 16), f[n].id);
  };
  this.refreshPosition = function () {
    h = xzu196.get(19).x + xzu196.get(19).w;
    l = xzu196.get(19).y - xzu196.get(50);
    for (var f = a.length - 1; 0 <= f; f--)
      (a[f].x = h - a[f].w), (a[f].y = l - m - f * (m + k));
  };
  this.mouseDown = function (f, n) {
    if (f > h || n > l) return !1;
    for (var p = a.length - 1; 0 <= p; p--)
      if (f > a[p].x && f < a[p].x + a[p].w && n > a[p].y && n < a[p].y + m) {
        if (f > a[p].x + a[p].w - 1.1 * e && n < a[p].y + 1.1 * e)
          return a.splice(p, 1), this.refreshPosition(), !0;
        if (
          f > a[p].x + (a[p].w - d) / 2 &&
          f < a[p].x + (a[p].w + d) / 2 &&
          n > a[p].y + m - g - c
        )
          return (
            xzu226.wrapPackageChallenge(a[p].id),
            a.splice(p, 1),
            this.refreshPosition(),
            !0
          );
      }
    return !1;
  };
  this.add = function (f, n) {
    var p = f + " challenges you!",
      r = xzu184.measureText(p, xzu196.get(19).font) + 2 * e;
    r = r < d + 2 * e ? d + 2 * e : r;
    a.push({ txt: p, id: n, x: h - r, y: l - m - a.length * (m + k), w: r });
  };
  this.draw = function () {
    for (var f = a.length - 1; 0 <= f; f--) {
      var n = f;
      xzu690.fillStyle = xzu196.get(19).colorBg;
      xzu690.fillRect(a[n].x, a[n].y, a[n].w, m);
      xzu690.fillStyle = xzu196.get(0).colorBg;
      xzu690.fillRect(
        Math.floor(a[n].x + (a[n].w - d) / 2),
        a[n].y + m - g - c,
        d,
        c
      );
      xzu690.lineWidth = 3;
      xzu690.strokeStyle = xzu315;
      xzu690.strokeRect(
        Math.floor(a[n].x + (a[n].w - d) / 2),
        a[n].y + m - g - c,
        d,
        c
      );
      xzu690.strokeRect(a[n].x, a[n].y, a[n].w, m);
      xzu690.textAlign = xzu329;
      xzu690.textBaseline = xzu326;
      xzu690.font = xzu196.get(19).font;
      xzu690.fillStyle = xzu315;
      xzu690.fillText(
        a[n].txt,
        Math.floor(a[n].x + a[n].w / 2 - 0.2 * e),
        Math.floor(a[n].y + g + 0.5 * xzu196.get(19).fontSize)
      );
      xzu690.font = xzu196.get(5).font;
      xzu690.fillText(
        b,
        Math.floor(a[n].x + a[n].w / 2),
        Math.floor(a[n].y + m - g - 0.5 * c)
      );
      xzu690.save();
      xzu180.drawCross(
        Math.floor(a[n].x + a[n].w - 0.8 * e),
        Math.floor(a[n].y + 0.3 * e),
        Math.floor(0.5 * e)
      );
      xzu690.restore();
    }
  };
}
function zto1110() {
  var a, d, c, b;
  this.init = function () {
    d = [64, 95, 100, 200, 256, 512];
    a = d.length;
    c = "Recruit Soldier Specialist Captain Strategist Commander".split(" ");
    b = "Difficulty: ";
    this.balanceTaken = d[0];
  };
  this.getIndex = function (g) {
    for (var e = a - 1; 1 <= e; e--) if (g >= d[e]) return e;
    return 0;
  };
  this.changeLevel = function (g) {
    var e = this.getIndex(this.balanceTaken);
    e += g;
    e = 0 > e ? a - 1 : e >= a ? 0 : e;
    xzu194.balanceTaken = d[e];
  };
  this.setBalanceIndex = function (g) {
    this.balanceTaken = d[g % a];
  };
  this.fade = function (g) {};
  this.getString = function () {
    for (var g = a - 1; 1 <= g; g--)
      if (this.balanceTaken > (d[g] + d[g - 1]) / 2) return b + c[g];
    return b + c[0];
  };
}
function zto1112() {
  function a(D) {
    var F,
      H = Math.floor(0.68 * h);
    for (F = 0; F < D.length; F++)
      for (
        ;
        3 < D[F].nameShort.length && xzu184.measureText(D[F].nameShort, C) > H;

      )
        D[F].nameShort =
          D[F].nameShort.substring(0, D[F].nameShort.length - 4) + "...";
  }
  function d() {
    f.beginPath();
    f.moveTo(u, u);
    f.lineTo(p, u);
    f.lineTo(h - u, r);
    f.lineTo(h - u, l - r);
    f.lineTo(p, l - u);
    f.lineTo(u, l - u);
    f.closePath();
  }
  function c() {
    f.beginPath();
    f.moveTo(p, Q);
    f.lineTo(h - u, Q + r - u);
    f.lineTo(p, Q + 2 * r - 2 * u);
    f.closePath();
  }
  function b(D, F, H) {
    for (var M, J = 0; J < D.length; J++)
      if (((M = Math.floor(z + (J + F) * O - K)), M > -O && M < (S + 1) * O)) {
        f.fillStyle = xzu324[D[J].idColor];
        1 == D[J].idColor && (f.font = xzu334 + I + xzu336);
        if (2 == D[J].idColor || 5 == D[J].idColor) {
          var N = M,
            U = (0.65 * O) / xzu205.get(4).height;
          f.setTransform(
            U,
            0,
            0,
            U,
            Math.floor(v - 0.5 * B),
            Math.floor(N - 0.3 * B)
          );
          f.drawImage(xzu205.get(4), 0, 0);
          f.setTransform(1, 0, 0, 1, 0, 0);
          f.fillText(D[J].nameShort, v + 2 * B, M);
        } else f.fillText(D[J].nameShort, v, M);
        1 == D[J].idColor && (f.font = C);
        M = J + F;
        f.fillStyle = T[H];
        f.fillRect(y, Math.floor(z + M * O - K), B, B);
        f.strokeStyle = xzu315;
        f.strokeRect(y, Math.floor(z + M * O - K), B, B);
      }
  }
  function g(D, F) {
    if (F > L && F < L + l) {
      if (D > E && D < E + p) return 1;
      if (D > E + p && D < E + h)
        return D > E + p + (2 * (F - L)) / 3 ||
          D > E + p + (2 * (L + l - F)) / 3
          ? 0
          : 2;
    }
    return 0;
  }
  function e(D, F) {
    D -= r;
    var H = Q;
    Q = D;
    Q = Q < u ? u : Q;
    var M = u + l - 2 * r;
    Q = Q > M ? M : Q;
    H != Q &&
      ((H = Math.floor((R - S / 2) * O)),
      (K = Math.floor(((Q - u) / (M - u)) * H)),
      (K = K > H ? H : K),
      (K = 0 > K ? 0 : K),
      xzu195.refresh(),
      F && (xzu720.requestRepaint = !0));
  }
  function m(D) {
    var F = K;
    K = V - (D - P);
    D = Math.floor((R - S / 2) * O);
    K = K > D ? D : K;
    K = 0 > K ? 0 : K;
    F != K &&
      ((F = u + l - 2 * r),
      (Q = Math.floor(u + (K / D) * (F - u))),
      (Q = Q < u ? u : Q),
      (Q = Q > F ? F : Q),
      xzu195.refresh(),
      (xzu720.requestRepaint = !0));
  }
  var h,
    l,
    k,
    f,
    n,
    p,
    r,
    t,
    q,
    u,
    y,
    v,
    z,
    B,
    w,
    x,
    C,
    I,
    O,
    S,
    Q,
    K,
    V,
    R,
    T,
    E,
    L,
    P,
    A,
    G;
  this.init = function (D, F, H, M) {
    G = D;
    this.zto1324();
    a(M);
    R = M.length;
    w = Array(F);
    x = Array(H);
    for (D = 0; D < F; D++) w[D] = M[D];
    for (D = 0; D < H; D++) x[D] = M[D + F];
    T = [];
    T.push("rgba(0,255,0,0.7)");
    T.push("rgba(255,0,0,0.7)");
    T.push("rgba(255,255,0,0.7)");
    T.push("rgba(128,128,128,0.7)");
    e(0, !1);
    this.refresh();
  };
  this.zto1324 = function () {
    l = Math.floor(
      0.7 * xzu695 -
        4 * xzu196.get(50) -
        2 * xzu196.get(15).h -
        xzu196.get(18).h
    );
    h = Math.floor(0.75 * xzu196.get(0).w);
    n = Math.floor(1 + 0.1 * h);
    p = h - n;
    r = Math.floor(1.5 * n);
    t = Math.floor(1 + 0.006 * h);
    t += t % 2;
    q = 2;
    u = Math.floor(t / 2);
    y = Math.floor(1 + 0.04 * h);
    k = document.createElement("canvas");
    k.width = h;
    k.height = l;
    f = k.getContext("2d", { alpha: !0 });
    f.lineWidth = t;
    S = Math.floor(l / (0.09 * h));
    O = l / S;
    I = Math.floor(0.6 * O);
    C = I + xzu336;
    B = Math.floor(0.45 * O);
    K = 0;
    v = 2 * y + B;
    z = y;
    A = 0;
    f.font = C;
    f.textBaseline = xzu327;
    f.textAlign = xzu330;
  };
  this.deinit = function () {
    w = x = f = k = null;
  };
  this.getJoinSize = function () {
    return w.length;
  };
  this.getSkipSize = function () {
    return x.length;
  };
  this.isJoined = function () {
    return G < w.length && G >= w.length - xzu151 && 1 < w.length;
  };
  this.createChallenge = function (D, F) {
    for (var H = [], M, J = 1; 0 <= J; J--)
      for (var N = 0 == J ? w : x, U = N.length - 1; 0 <= U; U--)
        if (N[U].id == D || N[U].id == F)
          if (
            (H.push(N[U]), (0 == J && G == U) || (1 == J && G == U + w.length))
          )
            M = H.length - 1;
    2 == H.length
      ? (H[0].id != D && ((H = [H[1], H[0]]), (M = 1 - M)),
        xzu201.hideWindows(!0),
        zto977(xzu201.getSeedPlacing(), xzu194.balanceTaken, M, H, !0, !1, !1),
        this.deinit())
      : xzu222.close(3224);
  };
  this.indexToPlayer = function (D) {
    return D < w.length ? w[D] : x[D - w.length];
  };
  this.getPlayerIndexRaw = function () {
    return G;
  };
  this.idToPlayer = function (D) {
    var F;
    for (F = w.length - 1; 0 <= F; F--) if (w[F].id == D) return w[F];
    for (F = x.length - 1; 0 <= F; F--) if (x[F].id == D) return x[F];
  };
  this.getGamePlayerIndex = function () {
    return w.length <= xzu151 ? G : G - (w.length - xzu151);
  };
  this.getJoiners = function () {
    if (w.length <= xzu151) return w;
    for (var D = Array(xzu151), F = w.length - xzu151, H = 0; H < xzu151; H++)
      D[H] = w[H + F];
    return D;
  };
  this.refresh = function () {
    f.clearRect(0, 0, h, l);
    f.fillStyle = xzu287;
    d();
    f.fill();
    f.strokeStyle = xzu315;
    f.beginPath();
    f.moveTo(p, 2 * u);
    f.lineTo(p, l - 2 * u);
    f.stroke();
    f.fillStyle = xzu307;
    c();
    f.fill();
    f.strokeStyle = xzu315;
    c();
    f.stroke();
    f.lineWidth = q;
    var D = 0;
    b(w, D, 0);
    D += w.length;
    b(x, D, 1);
    f.lineWidth = t;
    f.strokeStyle = xzu315;
    d();
    f.stroke();
  };
  this.refreshPosition = function () {
    E = xzu196.get(0).x + xzu196.get(0).w - p;
    L = xzu196.get(21).y - xzu196.get(50) - l;
  };
  this.mouseDown = function (D, F) {
    P = F;
    A = g(D, F);
    if (1 == A)
      return (V = K), xzu192.mouseDown(D, F, this.indexToPlayer(G).idColor), !0;
    if (2 == A) return e(F - L, !0), !0;
    xzu192.mouseMove(D, F);
    return !1;
  };
  this.mouseMove = function (D, F) {
    2 == A ? e(F - L, !0) : 1 == A ? m(F) : xzu192.mouseMove(D, F);
  };
  this.click = function (D, F) {
    if (1 == A) {
      if (1 != g(D, F)) var H = -1;
      else
        (H = Math.floor((F - L - z + K) / O + 0.3)),
          (H = H >= w.length + x.length ? -1 : H);
      0 <= H &&
        H != G &&
        2 > xzu193.traffic &&
        xzu192.click(
          D,
          F,
          H < w.length ? w[H].name : x[H - w.length].name,
          H < w.length ? w[H].id : x[H - w.length].id,
          H < w.length ? w[H].idColor : x[H - w.length].idColor
        );
    }
    A = 0;
  };
  this.wheel = function (D, F, H) {
    D = g(D, F);
    1 == D
      ? ((V = K), (P = Math.floor(F + H / 2)), m(F))
      : 2 == D && e(Q + r + H / 12, !0);
  };
  this.newGame = function () {
    var D = w.length;
    if (!(2 > D)) {
      if (D <= xzu151) (R -= D), (G -= D), (w = []);
      else {
        for (var F = Array(D - xzu151), H = 0; H < D - xzu151; H++) F[H] = w[H];
        w = F;
        R -= xzu151;
        G >= w.length && (G -= xzu151);
      }
      this.actualizeScrolling();
      0 < D && this.refresh();
    }
  };
  this.addName = function (D) {
    a([D]);
    G >= w.length && G++;
    x.unshift(D);
    R++;
  };
  this.transformName = function (D) {
    D < w.length
      ? (x.unshift(w[D]),
        G == D ? (G = w.length - 1) : G > D && G < w.length && G--,
        w.splice(D, 1))
      : (xzu716.play(),
        w.unshift(x.splice(D - w.length, 1)[0]),
        G == D ? (G = 0) : G < D && G++);
  };
  this.remove = function (D) {
    G > D && G--;
    D < w.length ? w.splice(D, 1) : x.splice(D - w.length, 1);
    R--;
  };
  this.actualizeScrolling = function () {
    var D = Q;
    Q = 0;
    e(D + r, !1);
  };
  this.draw = function () {
    xzu690.drawImage(k, E, L);
  };
}
function zto1131() {
  function a(f, n, p, r, t, q, u, y, v) {
    return {
      x: f,
      y: n,
      w: p,
      h: r,
      txt: t,
      font: q,
      colorBg: u,
      fontSize: y,
      selectable: v,
    };
  }
  function d(f) {
    var n = void 0 != k ? k[f] : b[f];
    if (void 0 == k && 28 == f) {
      n = b[f].x;
      var p = b[f].y,
        r = b[f].w,
        t = b[f].h;
      xzu690.fillStyle = b[f].colorBg;
      xzu690.fillRect(n, p, r, t);
      f == e && ((xzu690.fillStyle = h), xzu690.fillRect(n, p, r, t));
      xzu690.lineWidth = 3;
      xzu690.strokeStyle = m;
      xzu690.strokeRect(n, p, r, t);
      xzu690.textAlign = xzu329;
      xzu690.textBaseline = xzu326;
      xzu690.font = l[0];
      xzu690.fillStyle = m;
      xzu690.fillText(
        b[f].txt,
        Math.floor(n + r / 2),
        Math.floor(p + 0.45 * t)
      );
      xzu690.font = l[1];
      xzu690.fillStyle = m;
      xzu690.fillText(
        b[f].txt2,
        Math.floor(n + r / 2),
        Math.floor(p + 0.72 * t)
      );
    } else {
      p = n.x;
      r = n.y;
      t = n.w;
      var q = n.h;
      xzu690.fillStyle = n.colorBg;
      xzu690.fillRect(p, r, t, q);
      if (void 0 == k && 9 == f) {
        var u = xzu194.getIndex(xzu194.balanceTaken);
        xzu690.fillStyle = "rgba(" + 51 * u + "," + (255 - 51 * u) + ",0,0.5)";
        xzu690.fillRect(p, r, Math.floor(((u + 1) * t) / 6), q);
      }
      void 0 == k &&
        21 == f &&
        ((xzu690.fillStyle = xzu294),
        xzu690.fillRect(p, r, Math.floor((t * xzu201.getProgress()) / 100), q));
      f == e && ((xzu690.fillStyle = h), xzu690.fillRect(p, r, t, q));
      xzu690.lineWidth = 3;
      xzu690.strokeStyle = m;
      xzu690.strokeRect(p, r, t, q);
      c(n);
    }
  }
  function c(f) {
    var n = f.x,
      p = f.y,
      r = f.w,
      t = f.h;
    xzu690.textAlign = xzu329;
    xzu690.textBaseline = xzu326;
    xzu690.font = f.font;
    xzu690.fillStyle = m;
    xzu690.fillText(
      f.txt,
      Math.floor(n + r / 2),
      Math.floor(p + t / 2 + 0.1 * f.fontSize)
    );
  }
  var b, g, e, m, h, l, k;
  this.init = function () {
    e = -1;
    m = xzu315;
    h = "rgba(255,255,255,0.16)";
    b = Array(35);
    l = Array(2);
    var f = Math.floor((xzu706 ? 0.16 : 0.11) * xzu696),
      n = Math.floor((xzu706 && xzu694 < xzu695 ? 4.7 : 5) * f),
      p = Math.floor(0.31 * f),
      r = xzu332 + p + xzu337;
    b[0] = {
      x: 0,
      y: 0,
      w: n,
      h: f,
      txt: "Multiplayer",
      font: r,
      colorBg: "rgba(22,88,22,0.8)",
      fontSize: p,
      selectable: !0,
    };
    b[29] = {
      x: 0,
      y: 0,
      w: n,
      h: f,
      txt: "Multiplayer",
      font: r,
      colorBg: "rgba(22,88,22,0.8)",
      fontSize: p,
      selectable: !0,
    };
    var t = Math.floor(0.4 * b[0].h),
      q = Math.floor(0.42 * t),
      u = xzu332 + q + xzu337,
      y = Math.floor(0.3 * t),
      v = xzu332 + y + xzu337;
    g = Math.floor(0.025 * n);
    n = Math.floor(0.5 * n - 0.5 * g);
    f = Math.floor(n / 4);
    p = Math.floor(0.35 * f);
    r = xzu332 + p + xzu337;
    b[1] = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
      txt: "or",
      font: r,
      colorBg: "rgba(130,120,110,0.8)",
      fontSize: p,
      selectable: !0,
    };
    f = Math.floor(n / 4);
    p = Math.floor(0.35 * f);
    r = xzu332 + p + xzu337;
    b[2] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: f,
      txt: "Singleplayer",
      font: r,
      colorBg: "rgba(22,88,88,0.8)",
      fontSize: p,
      selectable: !0,
    };
    b[3] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[0].h,
      txt: b[1].txt,
      font: b[0].font,
      colorBg: b[1].colorBg,
      fontSize: b[0].fontSize,
      selectable: !0,
    };
    b[4] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: Math.floor(0.5 * b[0].h),
      txt: "Back",
      font: b[1].font,
      colorBg: "rgba(0,0,0,0.8)",
      fontSize: b[1].fontSize,
      selectable: !0,
    };
    b[5] = {
      x: 0,
      y: 0,
      w: Math.floor(0.1 * b[0].w),
      h: t,
      txt: "<",
      font: u,
      colorBg: b[0].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[6] = {
      x: 0,
      y: 0,
      w: b[0].w - 2 * b[5].w - 2 * g,
      h: t,
      txt: "",
      font: u,
      colorBg: b[4].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[7] = {
      x: 0,
      y: 0,
      w: b[5].w,
      h: t,
      txt: ">",
      font: u,
      colorBg: b[0].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[8] = {
      x: 0,
      y: 0,
      w: Math.floor(0.1 * b[0].w),
      h: t,
      txt: "<",
      font: u,
      colorBg: b[0].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[9] = {
      x: 0,
      y: 0,
      w: b[0].w - 2 * b[5].w - 2 * g,
      h: t,
      txt: "",
      font: u,
      colorBg: b[4].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[10] = {
      x: 0,
      y: 0,
      w: b[5].w,
      h: t,
      txt: ">",
      font: u,
      colorBg: b[0].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[11] = {
      x: 0,
      y: 0,
      w: Math.floor((2 * b[0].w) / 3 - g / 2),
      h: Math.floor((xzu706 ? 0.19 : 0.13) * xzu696),
      txt: "Play",
      font: b[0].font,
      colorBg: b[2].colorBg,
      fontSize: b[0].fontSize,
      selectable: !0,
    };
    b[12] = {
      x: 0,
      y: 0,
      w: Math.floor(b[0].w / 3 - g / 2),
      h: b[11].h,
      txt: b[4].txt,
      font: b[2].font,
      colorBg: b[4].colorBg,
      fontSize: b[2].fontSize,
      selectable: !0,
    };
    b[13] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[4].h,
      txt: "",
      font: b[9].font,
      colorBg: xzu309,
      fontSize: b[9].fontSize,
      selectable: !1,
    };
    b[14] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[0].h,
      txt: b[4].txt,
      font: b[0].font,
      colorBg: xzu291,
      fontSize: b[0].fontSize,
      selectable: !0,
    };
    b[16] = {
      x: 0,
      y: 0,
      w: Math.floor(b[0].w / 3 - (2 * g) / 3),
      h: 2 * b[4].h,
      txt: "Skip",
      font: b[1].font,
      colorBg: xzu308,
      fontSize: b[1].fontSize,
      selectable: !0,
    };
    b[15] = {
      x: 0,
      y: 0,
      w: Math.floor((b[0].w - g) / 2),
      h: Math.floor(0.8 * t),
      txt: "",
      font: v,
      colorBg: b[4].colorBg,
      fontSize: y,
      selectable: !1,
    };
    b[17] = {
      x: 0,
      y: 0,
      w: b[16].w,
      h: b[16].h,
      txt: "Join",
      font: b[1].font,
      colorBg: b[4].colorBg,
      fontSize: b[1].fontSize,
      selectable: !0,
    };
    b[18] = {
      x: 0,
      y: 0,
      w: b[16].w,
      h: b[16].h,
      txt: "Exit Lobby",
      font: u,
      colorBg: b[4].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[19] = {
      x: 0,
      y: 0,
      w: Math.floor(b[0].w - g - 0.675 * b[0].w + 1),
      h: Math.floor(0.2 * b[0].w),
      txt: "",
      font: v,
      colorBg: b[4].colorBg,
      fontSize: y,
      selectable: !1,
    };
    b[20] = {
      x: 0,
      y: 0,
      w: b[15].w,
      h: b[15].h,
      txt: "",
      font: v,
      colorBg: b[4].colorBg,
      fontSize: y,
      selectable: !1,
    };
    b[21] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[15].h,
      txt: "",
      font: v,
      colorBg: b[4].colorBg,
      fontSize: y,
      selectable: !1,
    };
    b[22] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[0].h,
      txt: "Accept Cookies",
      font: b[0].font,
      colorBg: b[0].colorBg,
      fontSize: b[0].fontSize,
      selectable: !0,
    };
    b[23] = {
      x: 0,
      y: 0,
      w: b[4].w,
      h: b[4].h,
      txt: "Cookie Policy",
      font: b[4].font,
      colorBg: b[1].colorBg,
      fontSize: b[4].fontSize,
      selectable: !0,
    };
    b[24] = {
      x: 0,
      y: 0,
      w: b[4].w,
      h: b[4].h,
      txt: "Decline",
      font: b[4].font,
      colorBg: "rgba(88,22,22,0.8)",
      fontSize: b[4].fontSize,
      selectable: !0,
    };
    b[25] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[4].h,
      txt: "The game was updated! Please reload the page!",
      font: b[4].font,
      colorBg: b[4].colorBg,
      fontSize: b[4].fontSize,
      selectable: !1,
    };
    b[26] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[0].h,
      txt: "Reload",
      font: b[0].font,
      colorBg: b[2].colorBg,
      fontSize: b[0].fontSize,
      selectable: !0,
    };
    b[27] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[4].h,
      txt: b[4].txt,
      font: b[4].font,
      colorBg: b[4].colorBg,
      fontSize: b[4].fontSize,
      selectable: !0,
    };
    b[28] = {
      x: 0,
      y: 0,
      w: b[0].w,
      h: b[0].h,
      txt: "Window 1",
      txt2: "Fullscreen",
      colorBg: "rgba(180,130,10,0.6)",
      selectable: !0,
    };
    l[0] = xzu332 + Math.floor(0.35 * b[28].h) + xzu337;
    l[1] = xzu332 + Math.floor(0.2 * b[28].h) + xzu337;
    b[30] = void 0;
    b[31] = {
      x: 0,
      y: 0,
      w: b[2].w,
      h: b[2].h,
      txt: "Back",
      font: l[2],
      colorBg: "rgba(180,180,70,0.6)",
      fontSize: b[2].fontSize,
      selectable: !0,
    };
    b[32] = {
      x: 0,
      y: 0,
      w: Math.floor((b[0].w - 2 * g) / 3),
      h: t,
      txt: "Free Spawn",
      font: u,
      colorBg: zto869(0) ? b[5].colorBg : b[24].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[33] = {
      x: 0,
      y: 0,
      w: b[32].w,
      h: t,
      txt: "Unlimited Time",
      font: u,
      colorBg: zto869(1) ? b[5].colorBg : b[24].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[34] = {
      x: 0,
      y: 0,
      w: b[32].w,
      h: t,
      txt: "Alliances",
      font: u,
      colorBg: zto869(2) ? b[5].colorBg : b[24].colorBg,
      fontSize: q,
      selectable: !0,
    };
    b[29].w = Math.floor(0.6 * b[0].w - g / 2);
    b[29].h = b[11].h;
    b[2].w = Math.floor(0.4 * b[0].w - g / 2);
    b[2].h = b[11].h;
    this.refreshPosition();
  };
  this.get = function (f) {
    return 50 == f ? g : 51 == f ? k : b[f];
  };
  this.createMenu = function (f, n, p) {
    var r;
    k = [];
    k.push(
      a(
        b[f].x,
        b[f].y,
        b[f].w,
        b[f].h,
        p[n],
        b[f].font,
        b[f].colorBg,
        b[f].fontSize,
        !0
      )
    );
    for (r = n + 1; r < p.length; r++)
      k.push(
        a(
          b[f].x,
          k[k.length - 1].y + b[f].h,
          b[f].w,
          b[f].h,
          p[r],
          b[f].font,
          b[f].colorBg,
          b[f].fontSize,
          !0
        )
      );
    for (r = n - 1; 0 <= r; r--)
      k.unshift(
        a(
          b[f].x,
          k[0].y - b[f].h,
          b[f].w,
          b[f].h,
          p[r],
          b[f].font,
          b[f].colorBg,
          b[f].fontSize,
          !0
        )
      );
  };
  this.menuScrol = function (f, n, p) {
    if (
      void 0 != k &&
      ((p = 0 < p ? -k[0].h : k[0].h),
      !(
        (0 > p && k[k.length - 1].y < xzu695 / 2) ||
        (0 < p && k[0].y > xzu695 / 2)
      ))
    ) {
      for (var r = k.length - 1; 0 <= r; r--) k[r].y += p;
      this.mouseMove(f, n, !1);
      xzu720.requestRepaint = !0;
    }
  };
  this.deleteMenu = function () {
    k = void 0;
  };
  this.refreshPosition = function () {
    b[0].x = Math.floor(0.5 * xzu697 - 0.5 * b[0].w);
    b[1].x = b[0].x;
    b[2].x = b[0].x + b[29].w + g;
    b[31].x = b[0].x;
    b[3].x = b[0].x;
    b[4].x = b[0].x;
    b[32].x = b[5].x = b[0].x;
    b[33].x = b[32].x + b[32].w + g;
    b[34].x = b[33].x + b[32].w + g;
    b[6].x = b[5].x + b[5].w + g;
    b[7].x = b[6].x + b[6].w + g;
    b[8].x = b[0].x;
    b[9].x = b[6].x;
    b[10].x = b[7].x;
    b[12].x = b[0].x;
    b[11].x = b[12].x + b[12].w + g;
    b[13].x = b[14].x = b[0].x;
    b[15].x = b[18].x = b[19].x = b[21].x = b[0].x;
    b[16].x = b[18].x + b[18].w + g;
    b[17].x = b[0].x + b[0].w - b[17].w;
    b[20].x = b[0].x + b[0].w - b[20].w;
    b[22].x = b[23].x = b[24].x = b[0].x;
    b[25].x = b[26].x = b[27].x = b[28].x = b[0].x;
    b[29].x = b[0].x;
    b[0].y = Math.floor(0.54 * xzu698);
    b[1].y = b[0].y;
    b[2].y = b[0].y;
    b[31].y = b[2].y;
    b[3].y = b[0].y + Math.floor(0.04 * xzu696);
    b[4].y = b[3].y + b[3].h + g;
    b[5].y = b[6].y = b[7].y = b[0].y - Math.floor(0.062 * xzu698);
    b[32].y = b[33].y = b[34].y = b[5].y - b[5].h - g;
    b[8].y = b[9].y = b[10].y = b[5].y + b[5].h + g;
    b[11].y = b[8].y + b[8].h + g;
    b[12].y = b[11].y;
    b[13].y = b[0].y;
    b[14].y = b[13].y + b[13].h + g;
    b[18].y = Math.floor(0.85 * xzu695 - b[18].h - 0.5 * (xzu695 - xzu698));
    b[17].y = b[16].y = b[18].y;
    b[15].y = b[16].y - g - b[15].h;
    b[20].y = b[15].y;
    b[21].y = b[15].y - g - b[21].h;
    b[19].y = b[21].y - g - b[19].h;
    b[22].y = b[5].y;
    b[23].y = b[22].y + b[22].h + g;
    b[24].y = b[23].y + b[23].h + g;
    b[25].y = b[5].y;
    b[26].y = b[25].y + b[25].h + g;
    b[27].y = b[26].y + b[26].h + g;
    b[28].y = Math.floor(0.4 * xzu698);
    b[29].y = b[0].y;
  };
  this.drawStart = function () {
    d(29);
    d(2);
  };
  this.drawSingleplayer = function () {
    var f;
    if (void 0 != k)
      for (f = 0; f < k.length; f++)
        0 <= k[f].y && k[f].y + k[f].h <= xzu698 && d(f);
    else {
      for (f = 5; 13 > f; f++) d(f);
      d(32);
      d(33);
      d(34);
    }
  };
  this.drawError = function () {
    for (var f = 13; 15 > f; f++) d(f);
  };
  this.drawLobby = function () {
    for (var f = 15; 22 > f; f++) d(f);
  };
  this.drawReload = function () {
    c(25);
    d(26);
    d(27);
  };
  this.mouseMove = function (f, n, p) {
    var r = -1;
    0 == xzu198.getState()
      ? ((r = this.inside(f, n, 2, 1)),
        -1 == r && (r = this.inside(f, n, 29, 1)))
      : 1 == xzu198.getState()
      ? (r = this.inside(f, n, 3, 2))
      : 2 == xzu198.getState()
      ? ((r = this.inside(f, n, 5, 8)),
        -1 == r && (r = this.inside(f, n, 32, 3)))
      : 3 == xzu198.getState()
      ? (r = this.inside(f, n, 13, 2))
      : 4 == xzu198.getState()
      ? (r = this.inside(f, n, 22, 3))
      : 5 == xzu198.getState()
      ? (r = this.inside(f, n, 26, 2))
      : 7 == xzu198.getState()
      ? (r = this.inside(f, n, 15, 4))
      : xzu198.getState();
    e != r && ((e = r), p && (xzu720.requestRepaint = !0));
    return -1 != r ? (xzu187.reset(), !0) : !1;
  };
  this.inside = function (f, n, p, r) {
    if (void 0 == k) var t = b;
    else (t = k), (p = 0), (r = k.length);
    for (var q = p; q < p + r; q++)
      if (
        f >= t[q].x &&
        n >= t[q].y &&
        f <= t[q].x + t[q].w &&
        n <= t[q].y + t[q].h &&
        t[q].selectable
      )
        return q;
    return -1;
  };
}
function zto1136() {
  function a(d) {
    return 0 > d ? 0 : 255 < d ? 255 : Math.floor(d);
  }
  this.h = this.w = 0;
  this.isVisible = !1;
  this.hSlider =
    this.wSlider =
    this.wBox =
    this.indexSelected =
    this.gap =
    this.isMousePressing =
      0;
  this.colors = null;
  this.init = function () {
    xzu694 < 2 * xzu695
      ? (this.w = Math.floor((xzu706 ? 0.94 : 0.4) * xzu694))
      : ((this.h = Math.floor((xzu706 ? 0.94 : 0.4) * xzu695)),
        (this.w = Math.floor(2 * this.h)));
    this.h = this.w / 2;
    this.gap = this.h / 16;
    this.isVisible = !0;
    this.isMousePressing = 0;
    this.wBox = (this.h - 3 * this.gap) / 2;
    this.wSlider = this.w - 3 * this.gap - this.wBox;
    this.hSlider = (this.h - 4 * this.gap) / 3;
  };
  this.initColors = function () {
    this.colors = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    var d = zto871().split("");
    if (6 != d.length)
      for (d = 1; 0 <= d; d--)
        for (var c = 2; 0 <= c; c--) this.colors[d][c] = a(256 * Math.random());
    else
      for (c = 2; 0 <= c; c--)
        (this.colors[0][c] = a(36 * parseInt(d[c]))),
          (this.colors[1][c] = a(36 * parseInt(d[c + 3])));
    this.validateColors();
  };
  this.mouseDown = function (d, c) {
    this.isMousePressing = 0;
    var b = (xzu698 - this.h) / 2;
    d -= (xzu697 - this.w) / 2;
    c -= b;
    if (0 > d || 0 > c || d >= this.w - 1 || c >= this.h - 1)
      return (
        (this.isVisible = !1),
        0 == xzu198.getState() && xzu200.setVisible(0, !0),
        (xzu720.requestRepaint = !0),
        !1
      );
    if (
      d < this.gap ||
      c < this.gap ||
      d >= this.w - this.gap ||
      c >= this.h - this.gap
    )
      return !0;
    if (d < this.gap + this.wBox) {
      if (c < this.gap + this.wBox)
        return (
          0 != this.indexSelected &&
            ((this.indexSelected = 0), (xzu720.requestRepaint = !0)),
          !0
        );
      c >= 2 * this.gap + this.wBox &&
        1 != this.indexSelected &&
        ((this.indexSelected = 1), (xzu720.requestRepaint = !0));
      return !0;
    }
    if (d < 2 * this.gap + this.wBox) return !0;
    d -= 2 * this.gap + this.wBox;
    if (c < this.gap + this.hSlider)
      return (
        (this.isMousePressing = 1),
        (this.colors[this.indexSelected][0] = a((256 * d) / this.wSlider)),
        (xzu720.requestRepaint = !0)
      );
    if (c < 2 * this.gap + this.hSlider) return !0;
    if (c < 2 * this.gap + 2 * this.hSlider)
      return (
        (this.isMousePressing = 2),
        (this.colors[this.indexSelected][1] = a((256 * d) / this.wSlider)),
        (xzu720.requestRepaint = !0)
      );
    c >= 3 * this.gap + 2 * this.hSlider &&
      ((this.isMousePressing = 3),
      (this.colors[this.indexSelected][2] = a((256 * d) / this.wSlider)),
      (xzu720.requestRepaint = !0));
    return !0;
  };
  this.validateColors = function () {
    for (var d = 1; 0 <= d; d--)
      for (var c = 2; 0 <= c; c--) {
        var b = this.colors[d],
          g = c,
          e = this.colors[d][c];
        e = 0 > e ? 0 : 255 < e ? 255 : e;
        e += 18 > e % 36 ? -(e % 36) : 36 - (e % 36);
        b[g] = 0 > e ? 0 : 252 < e ? 252 : e;
      }
    this.colors[0][0] == this.colors[1][0] &&
      this.colors[0][1] == this.colors[1][1] &&
      this.colors[0][2] == this.colors[1][2] &&
      (this.colors[this.indexSelected][0] +=
        36 <= this.colors[this.indexSelected][0] ? -36 : 36);
  };
  this.saveColors = function () {
    for (var d = "", c = 0; 6 > c; c++)
      d += zto1304(this.colors[zto1304(c, 3)][c % 3], 36).toString();
    zto877(d);
  };
  this.mouseMove = function (d) {
    0 != this.isMousePressing &&
      ((d -= 2 * this.gap + this.wBox + (xzu697 - this.w) / 2),
      (this.colors[this.indexSelected][this.isMousePressing - 1] = a(
        (256 * d) / this.wSlider
      )),
      (xzu720.requestRepaint = !0));
  };
  this.mouseRelease = function () {
    0 < this.isMousePressing &&
      ((this.isMousePressing = 0),
      this.validateColors(),
      this.saveColors(),
      (xzu720.requestRepaint = !0));
  };
  this.draw = function () {
    xzu690.setTransform(
      1,
      0,
      0,
      1,
      (xzu697 - this.w) / 2,
      (xzu698 - this.h) / 2
    );
    xzu690.fillStyle = xzu290;
    xzu690.fillRect(0, 0, this.w, this.h);
    xzu690.lineWidth = xzu350;
    xzu690.strokeStyle = xzu315;
    xzu690.strokeRect(-1, -1, this.w + 2, this.h + 2);
    xzu690.font = xzu332 + Math.floor(0.8 * this.wBox) + xzu336;
    xzu690.textBaseline = xzu326;
    xzu690.textAlign = xzu329;
    this.drawBox(0);
    this.drawBox(1);
    xzu690.lineWidth = xzu350;
    this.drawSlider(0);
    this.drawSlider(1);
    this.drawSlider(2);
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
  };
  this.drawBox = function (d) {
    xzu690.fillStyle =
      "rgb(" +
      this.colors[d][0] +
      "," +
      this.colors[d][1] +
      "," +
      this.colors[d][2] +
      ")";
    xzu690.fillRect(
      this.gap,
      this.gap + d * (this.gap + this.wBox),
      this.wBox,
      this.wBox
    );
    xzu690.fillStyle = this.getNumberColor(d);
    xzu690.fillText(
      (1 + d).toString(),
      this.gap + this.wBox / 2,
      this.gap + 0.565 * this.wBox + d * (this.gap + this.wBox)
    );
    xzu690.lineWidth = d == this.indexSelected ? 3 + xzu350 : xzu350;
    xzu690.strokeStyle = xzu315;
    xzu690.strokeRect(
      this.gap,
      this.gap + d * (this.gap + this.wBox),
      this.wBox,
      this.wBox
    );
  };
  this.getNumberColor = function (d) {
    return 420 > this.colors[d][0] + this.colors[d][1] + this.colors[d][2]
      ? "rgb(255,255,255)"
      : "rgb(0,0,0)";
  };
  this.drawSlider = function (d) {
    xzu690.fillStyle =
      "rgb(" +
      (0 == d ? 200 : 2 == d ? 50 : 0) +
      "," +
      (1 == d ? 200 : 2 == d ? 50 : 0) +
      "," +
      (2 == d ? 255 : 0) +
      ")";
    xzu690.fillRect(
      2 * this.gap + this.wBox,
      this.gap + d * (this.gap + this.hSlider),
      Math.floor((this.colors[this.indexSelected][d] * this.wSlider) / 255),
      this.hSlider
    );
    xzu690.strokeStyle = xzu315;
    xzu690.strokeRect(
      2 * this.gap + this.wBox,
      this.gap + d * (this.gap + this.hSlider),
      this.wSlider,
      this.hSlider
    );
  };
}
function zto1139() {
  function a(l, k, f) {
    var n = Math.floor((xzu697 - b) / 2),
      p = n + Math.floor(f * b);
    xzu690.lineWidth = k;
    xzu690.beginPath();
    xzu690.moveTo(n, l);
    xzu690.lineTo(p, l);
    xzu690.lineTo(Math.floor(p - c + 3 * f * c), l + c);
    xzu690.lineTo(n - 2 * c, l + c);
    xzu690.closePath();
  }
  var d, c, b, g, e, m, h;
  this.init = function () {
    h = xzu720.time;
    g = xzu198.getState();
    xzu198.setState(6);
    d = 0;
    c = Math.floor((xzu706 ? 0.048 : 0.038) * xzu696);
    b = Math.floor((xzu694 > xzu695 ? 0.3 : 0.5) * xzu694);
    m = Math.floor(0.5 * c);
    e = xzu335 + m + xzu337;
    2 == g && xzu699
      ? xzu226.wrapPackageSingleplayer()
      : (xzu222.isFree()
          ? xzu222.newConnection()
          : xzu222.isConnected() &&
            (0 == g
              ? xzu226.wrapPackageLobbyEntry()
              : 2 == g && xzu226.wrapPackageSingleplayer()),
        (xzu720.requestRepaint = !0));
  };
  this.connectionEstablished = function () {
    0 == g
      ? xzu226.wrapPackageLobbyEntry()
      : 2 == g
      ? xzu226.wrapPackageSingleplayer()
      : xzu222.close(3201);
  };
  this.calculate = function () {
    if (6 == xzu198.getState()) {
      var l = 0.04 * (90 - d);
      d += 0.05 * (xzu720.time - h) * (0.025 > l ? 0.025 : l);
      h = xzu720.time;
      xzu720.requestRepaint = !0;
      100 <= d && (xzu222.close(3202), xzu199.init(3202));
    }
  };
  this.draw = function () {
    var l = "Connection: " + xzu190.percentageToString(d, 1),
      k = Math.floor(0.5 * (xzu698 - c)),
      f = d / 100;
    xzu690.fillStyle = xzu287;
    a(k, 3, 1);
    xzu690.fill();
    xzu690.fillStyle = xzu300;
    a(k, 3, f);
    xzu690.fill();
    xzu690.strokeStyle = xzu315;
    a(k, 3, 1);
    xzu690.stroke();
    xzu690.textAlign = xzu329;
    xzu690.textBaseline = xzu326;
    xzu690.font = e;
    xzu690.fillStyle = xzu315;
    xzu690.fillText(l, Math.floor(0.5 * xzu697), Math.floor(k + 0.58 * c));
  };
}
function zto1144() {
  var a, d;
  this.init = function () {
    this.zto1324();
    xzu196.init();
    xzu200.init();
    a = 0;
    xzu719.init();
    xzu204.init(600);
  };
  this.zto1324 = function () {
    d = xzu332 + Math.floor((xzu706 ? 0.026 : 0.018) * xzu696) + xzu336;
  };
  this.setState = function (c) {
    a = c;
  };
  this.getState = function () {
    return a;
  };
  this.keyUp = function (c) {
    if (!xzu739) return !1;
    if ("Enter" == c.key || "Escape" == c.key) {
      if (this.hidePopups()) return 0 == a && xzu200.setVisible(0, !0), !0;
      if ("Enter" == c.key) {
        if (0 == a) return xzu204.pressEnter(), !0;
        if (7 == a) return xzu201.pressEnter(), !0;
      }
    }
    return !1;
  };
  this.hidePopups = function () {
    return xzu728.hide() || xzu354.keyUp()
      ? !0
      : xzu725.isVisible
      ? ((xzu725.isVisible = !1), !0)
      : !1;
  };
  this.mouseDown = function (c, b) {
    if (
      !xzu719.mouseDown(c, b) &&
      xzu739 &&
      !(
        xzu728.mouseDown(c, b) ||
        xzu725.mouseDown(c, b) ||
        xzu727.mouseDown(c, b, !0) ||
        xzu354.mouseDown(c, b, !0)
      )
    ) {
      xzu187.mouseDown(c, b);
      if (0 == a) xzu204.mouseDown(c, b);
      else if (2 == a) xzu203.mouseDown(c, b);
      else if (3 == a) xzu199.mouseDown(c, b);
      else if (5 == a) xzu202.mouseDown(c, b);
      else if (7 == a && xzu201.mouseDown(c, b)) return;
      xzu723.mouseDown(c, b);
    }
  };
  this.mouseMove = function (c, b) {
    if (!xzu187.mousePressed) {
      if (xzu719.mouseMove(c, b)) {
        xzu187.reset();
        return;
      }
      if (0 <= xzu354.inside(c, b)) {
        xzu187.reset();
        return;
      }
      if (xzu354.mouseMove(c, b)) {
        xzu187.reset();
        return;
      }
      if (xzu196.mouseMove(c, b, !0)) return;
    }
    xzu187.mouseMove(c, b);
    7 == a && xzu195.mouseMove(c, b);
  };
  this.click = function (c, b) {
    xzu354.mouseRelease() ||
      xzu727.mouseDown(c, b, !1) ||
      xzu354.mouseDown(c, b, !1) ||
      (xzu187.mouseClick(), 7 == a && xzu195.click(c, b));
  };
  this.wheel = function (c, b, g) {
    xzu354.objs[2].win.isVisible ||
      (0 == a
        ? xzu187.wheel(c, g)
        : 2 == a
        ? xzu196.menuScrol(c, b, g)
        : 7 == a && xzu195.wheel(c, b, g));
  };
  this.refreshPositions = function () {
    xzu196.refreshPosition();
    xzu354.refreshPosition();
    0 == a
      ? (xzu200.refreshPosition(0), xzu187.refreshPosition())
      : 7 == a && (xzu195.refreshPosition(), xzu193.refreshPosition());
    xzu720.requestRepaint = !0;
  };
  this.draw = function () {
    if (8 != a) {
      xzu690.imageSmoothingEnabled = !0;
      if (7 == a) xzu201.drawMap();
      else if (xzu739) {
        var c = xzu694 / xzu731,
          b = xzu695 / xzu732;
        c = c > b ? c : b;
        xzu690.save();
        xzu690.scale(c, c);
        xzu690.drawImage(xzu733, 0, 0);
        xzu690.restore();
      } else (xzu690.fillStyle = xzu288), xzu690.fillRect(0, 0, xzu694, xzu695);
      xzu690.fillStyle = xzu287;
      xzu690.fillRect(0, 0, xzu694, xzu695);
      xzu187.draw();
      xzu182.draw();
      if (!((xzu702 || 0 < xzu705) && xzu694 < xzu695)) {
        var g = Math.floor(0.3 * xzu698);
        c = 0.96;
        b = xzu205.getByName("");
        c = Math.floor(c * xzu694) / b.width;
        xzu690.globalAlpha = 0.15;
        var e = Math.floor(0.5 * (xzu697 - c * b.width));
        e = Math.floor(e / c);
        g = Math.floor(g - 0.5 * b.height * c);
        g = Math.floor(g / c);
        xzu690.save();
        xzu690.scale(c, c);
        xzu690.drawImage(b, e, g);
        xzu690.restore();
        xzu690.globalAlpha = 1;
      }
      xzu690.textAlign = xzu331;
      xzu690.textBaseline = xzu327;
      xzu690.font = d;
      xzu690.fillStyle = xzu315;
      xzu690.fillText(xzu691, xzu697 - xzu347, xzu347);
      xzu727.draw();
      xzu723.draw();
      xzu354.draw();
      0 == a
        ? xzu204.draw()
        : 2 == a
        ? xzu203.draw()
        : 3 == a
        ? xzu199.draw()
        : 5 == a
        ? xzu202.draw()
        : 6 == a
        ? xzu197.draw()
        : 7 == a && xzu201.draw();
      xzu354.drawWindow();
      xzu719.draw();
      xzu725.draw();
      xzu728.draw();
    }
  };
}
function zto1149() {
  this.h = this.w = 0;
  this.isVisible = !1;
  this.rows = 10;
  this.p = 0.12;
  this.changeDetected = this.pressBool = this.isMousePressing = !1;
  this.init = function () {
    this.w =
      xzu694 < 1 * xzu695
        ? Math.floor((xzu706 ? 0.94 : 0.55) * xzu694)
        : Math.floor((xzu706 ? 0.94 : 0.55) * xzu695);
    this.w -= this.w % this.rows;
    this.h = 1 * this.w;
    this.isVisible = !0;
    this.isMousePressing = !1;
  };
  this.mouseDown = function (a, d, c) {
    var b = (xzu698 - this.h) / 2;
    a -= (xzu697 - this.w) / 2;
    d -= b;
    if (0 > a || 0 > d || a >= this.w - 1 || d >= this.h - 1)
      return (
        0 == c &&
          ((this.isVisible = !1),
          0 == xzu198.getState() && xzu200.setVisible(0, !0),
          (xzu720.requestRepaint = !0)),
        !1
      );
    b = Math.floor(this.w / this.rows);
    a = zto1304(a, b) + this.rows * zto1304(d, b);
    a = 0 > a ? 0 : a >= xzu715.nVisible ? xzu715.nVisible - 1 : a;
    if (
      0 == c ||
      (1 == c && !xzu715.arrSelected[a]) ||
      (2 == c && xzu715.arrSelected[a])
    )
      (this.pressBool = !xzu715.arrSelected[a]),
        (this.changeDetected = this.isMousePressing = !0),
        (xzu715.arrSelected[a] = !xzu715.arrSelected[a]),
        xzu715.createIndexArray(),
        (xzu720.requestRepaint = !0);
    return !0;
  };
  this.mouseMove = function (a, d) {
    this.isMousePressing && this.mouseDown(a, d, this.pressBool ? 1 : 2);
  };
  this.mouseRelease = function () {
    this.changeDetected && (zto876(), (this.changeDetected = !1));
    this.isMousePressing = this.changeDetected = !1;
  };
  this.draw = function () {
    xzu690.imageSmoothingEnabled = !0;
    var a = (xzu697 - this.w) / 2,
      d = (xzu698 - this.h) / 2;
    xzu690.setTransform(1, 0, 0, 1, a, d);
    xzu690.fillStyle = xzu290;
    xzu690.fillRect(0, 0, this.w, this.h);
    xzu690.lineWidth = xzu350;
    xzu690.strokeStyle = xzu315;
    xzu690.strokeRect(-1, -1, this.w + 2, this.h + 2);
    for (
      var c = Math.floor(this.w / this.rows),
        b = (c - 2 * this.p * c) / xzu715.w,
        g = xzu715.nVisible - 1;
      0 <= g;
      g--
    )
      xzu690.setTransform(
        1,
        0,
        0,
        1,
        Math.floor(a + (g % this.rows) * c),
        Math.floor(d + zto1304(g, this.rows) * c)
      ),
        xzu715.arrSelected[g] &&
          ((xzu690.fillStyle = xzu297), xzu690.fillRect(0, 0, c, c)),
        xzu690.setTransform(
          b,
          0,
          0,
          b,
          Math.floor(a + (g % this.rows) * c + this.p * c),
          Math.floor(d + zto1304(g, this.rows) * c + this.p * c)
        ),
        xzu690.drawImage(xzu715.cvs[g], 0, 0);
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
    xzu690.imageSmoothingEnabled = !1;
  };
}
function zto1150() {
  function a(c) {
    c =
      1006 == c || 3202 == c
        ? "No Server Response"
        : 3220 == c
        ? "Invalid Username"
        : 3221 == c
        ? "Lobby Spam Error"
        : 3226 == c
        ? "Timeout Error"
        : 3231 == c
        ? "Password successfully saved!"
        : 3232 == c
        ? "Invalid Password Format!"
        : 4207 == c
        ? "Lobby Timeout"
        : 4211 == c
        ? "Please reload the game."
        : 4212 == c
        ? "Please upgrade the game."
        : 4215 == c
        ? "Username reserved by the creator."
        : 4216 == c
        ? "Server Lobby Spam Error"
        : 4224 == c
        ? "User already exists."
        : 4229 == c
        ? "No Client Response Error"
        : 4235 == c
        ? "The Creator banned you."
        : 4241 == c
        ? "You were banned by users. Duration: 1 day"
        : 7777 == c
        ? "Under Construction Error"
        : "Error " + c;
    xzu196.get(13).txt = c;
  }
  var d;
  this.init = function (c) {
    d = c;
    xzu699 && console.log("mmeInit " + c + " " + xzu198.getState());
    if (
      0 != xzu198.getState() ||
      (3220 != c &&
        3226 != c &&
        3228 != c &&
        7777 != c &&
        3231 != c &&
        3232 != c)
    ) {
      if (
        0 == xzu198.getState() ||
        2 == xzu198.getState() ||
        4 == xzu198.getState() ||
        5 == xzu198.getState() ||
        9 == xzu198.getState()
      )
        return;
      if (6 == xzu198.getState()) {
        if (4211 == c) {
          xzu202.init(0, 0);
          return;
        }
      } else if (8 == xzu198.getState()) {
        if (4236 != c || xzu699) if (xzu152 || 2 == xzu154) return;
        zto979();
        xzu204.deinit();
        if (4211 == c || 4236 == c) {
          xzu202.init(0, 0);
          return;
        }
      } else if (7 == xzu198.getState()) xzu201.deinit();
      else if (3 == xzu198.getState() && 3203 == c) return;
    } else xzu204.deinit();
    xzu198.setState(3);
    xzu196.refreshPosition();
    a(c);
    xzu720.requestRepaint = !0;
  };
  this.zto1324 = function () {
    a(d);
  };
  this.mouseDown = function (c, b) {
    14 == xzu196.inside(c, b, 13, 2) && this.escape(c, b);
  };
  this.escape = function (c, b) {
    xzu204.init(600);
    xzu196.mouseMove(c, b, !1);
    xzu720.requestRepaint = !0;
  };
  this.draw = function () {
    xzu196.drawError();
  };
}
function zto1152() {
  function a() {
    d.push({ input: document.createElement("INPUT"), isVisible: !1, color: c });
    var g = d.length - 1;
    d[g].input.setAttribute("type", "text");
    d[g].input.value = "";
    d[g].input.style.textAlign = 0 == g ? "center" : "left";
    d[g].input.style.backgroundColor = c;
    d[g].input.style.border = "3px solid " + xzu315;
    d[g].input.style.color = xzu315;
    d[g].input.style.position = "absolute";
    d[g].input.readOnly = 3 == g;
    d[g].input.addEventListener("input", function () {
      0 == g && xzu204.input();
    });
  }
  var d, c, b;
  this.init = function () {
    c = "rgba(0,0,0,0.6)";
    b = xzu309;
    void 0 !== d && this.setVisible(0, !1);
    d = [];
    a();
    this.zto1324();
  };
  this.zto1324 = function () {
    var g = Math.floor(0.25 * xzu196.get(0).h);
    d[0].input.style.font = xzu332 + g + xzu336;
    d[0].input.style.padding = Math.floor(0.3 * g) + "px 5px";
    d[0].input.style.width = xzu196.get(0).w - 13 + "px";
  };
  this.get = function (g) {
    return d[g];
  };
  this.refreshPosition = function (g) {
    d[g].input.style.left =
      Math.floor((xzu697 - (xzu196.get(0).w - 3) - 7) / 2) + "px";
    0 == g &&
      (d[g].input.style.bottom =
        Math.floor(xzu698 - xzu196.get(0).y + xzu196.get(50)) + "px");
  };
  this.setVisible = function (g, e) {
    d[g].isVisible != e &&
      ((d[g].isVisible = e)
        ? document.body.appendChild(d[g].input)
        : document.body.removeChild(d[g].input));
  };
  this.activate = function (g, e) {
    (e && d[g].color == c) ||
      (!e && d[g].color == b) ||
      ((d[g].color = e ? c : b),
      (d[g].input.style.backgroundColor = d[g].color));
  };
}
function zto1154() {
  function a() {
    xzu196.get(20).txt =
      (t ? "One vs One" : r ? "Alliances" : "Battle Royale") +
      (p ? " & Free Spawn" : "");
    xzu196.get(20).colorBg = t
      ? "rgba(160,20,160,0.8)"
      : r && p
      ? "rgba(20,160,160,0.8)"
      : r && !p
      ? "rgba(20,20,160,0.8)"
      : !r && p
      ? "rgba(160,160,20,0.8)"
      : "rgba(160,20,20,0.8)";
  }
  function d(u, y) {
    zto1262(u % xzu740, y);
    xzu196.get(15).txt = "Map: " + xzu215.get(xzu737).name;
  }
  function c(u, y, v) {
    y = xzu694 / y;
    v = xzu695 / v;
    v = y > v ? y : v;
    xzu690.save();
    xzu690.imageSmoothingEnabled = !0;
    xzu690.scale(v, v);
    xzu690.drawImage(u, 0, 0);
    xzu690.restore();
  }
  function b(u) {
    if (q != u)
      if (4 <= m++) xzu199.init(3221);
      else if (!u || xzu739)
        (q = u),
          xzu226.wrapPackageSkipJoin(q),
          (xzu196.get(16).colorBg = q ? xzu291 : xzu308),
          (xzu196.get(17).colorBg = q ? xzu297 : xzu291),
          (xzu720.requestRepaint = !0);
  }
  var g, e, m, h, l, k, f, n, p, r, t, q;
  this.init = function (u, y, v, z, B, w, x, C, I, O, S, Q, K, V) {
    xzu198.setState(7);
    xzu716.init();
    xzu193.init();
    xzu192.init();
    k = u;
    n = z;
    p = w;
    r = x;
    t = C;
    f = !1;
    g = ["Joined", "Skipped", "Multiplayer", "Singleplayer"];
    e = [O, S - O, Q, K];
    xzu194.setBalanceIndex(B);
    xzu194.setBalanceIndex(B);
    m = 0;
    q = !1;
    xzu195.init(I, O, S - O, V);
    xzu195.refreshPosition();
    this.zto1324();
    l = 0;
    h = 100;
    d(y, v);
    xzu720.requestRepaint = !0;
  };
  this.zto1324 = function () {
    a();
    xzu196.get(21).txt = "Progress: " + k + "%";
    xzu196.get(16).colorBg = q ? xzu291 : xzu308;
    xzu196.get(17).colorBg = q ? xzu297 : xzu291;
  };
  this.getProgress = function () {
    return k;
  };
  this.getSeedPlacing = function () {
    return n;
  };
  this.isContest = function () {
    return f;
  };
  this.setNumbers = function (u, y) {
    e[2] = u;
    e[3] = y;
  };
  this.endProgress = function (u, y, v, z, B, w, x) {
    m = 0;
    xzu193.traffic = 0;
    xzu195.isJoined()
      ? t ||
        (this.hideWindows(!0),
        zto977(
          n,
          xzu194.balanceTaken,
          xzu195.getGamePlayerIndex(),
          xzu195.getJoiners(),
          p,
          r,
          !1
        ),
        xzu195.deinit())
      : (xzu195.newGame(),
        (p = B),
        (r = w),
        (t = x),
        (n = v),
        xzu194.setBalanceIndex(z),
        void 0 == xzu767 && (xzu767 = document.createElement("canvas")),
        (xzu767.width = xzu731),
        (xzu767.height = xzu732),
        (xzu769 = xzu767.getContext("2d", { alpha: !0 })),
        xzu769.drawImage(xzu733, 0, 0),
        d(u, y),
        (h = 0.1),
        (l = xzu720.time),
        a(),
        (e[0] = xzu195.getJoinSize()),
        (e[1] = xzu195.getSkipSize()),
        this.setProgress(0));
  };
  this.hideWindows = function (u) {
    u && xzu716.playGameEntry();
    xzu198.setState(8);
    xzu354.keyUp();
    xzu725.isVisible = !1;
    xzu728.mouseDown(-1e3, -1e3);
  };
  this.setProgress = function (u) {
    f = 5 > Math.abs(u - k);
    k = u;
    xzu196.get(21).txt = "Progress: " + k + "%";
    e[0] = xzu195.getJoinSize();
    e[1] = xzu195.getSkipSize();
    xzu212.check();
    xzu182.setTime();
    xzu720.requestRepaint = !0;
  };
  this.calculate = function () {
    7 == xzu198.getState() &&
      100 != h &&
      ((h += 0.08 * (xzu720.time - l)),
      (h = 100 < h ? 100 : h),
      xzu194.fade(h),
      (xzu720.requestRepaint = !0),
      (l = xzu720.time));
  };
  this.deinit = function () {
    xzu716.deinit();
    xzu222.close(3203);
  };
  this.pressEnter = function () {
    b(!0);
  };
  this.draw = function () {
    xzu195.draw();
    xzu196.drawLobby();
    xzu690.textBaseline = xzu326;
    xzu690.font = xzu196.get(19).font;
    xzu690.fillStyle = xzu315;
    for (var u, y = 0; 4 > y; y++)
      (xzu690.textAlign = xzu330),
        xzu690.fillText(
          g[y],
          Math.floor(xzu196.get(19).x + 0.06 * xzu196.get(19).w),
          Math.floor(
            xzu196.get(19).y -
              0.04 * xzu196.get(19).h +
              ((y + 1) * (xzu196.get(19).h + 0.08 * xzu196.get(19).h)) / 5 +
              0.1 * xzu196.get(19).fontSize
          )
        ),
        (xzu690.textAlign = xzu331),
        (u = e[y].toString()),
        xzu690.fillText(
          u,
          Math.floor(
            xzu196.get(19).x + xzu196.get(19).w - 0.06 * xzu196.get(19).w
          ),
          Math.floor(
            xzu196.get(19).y -
              0.04 * xzu196.get(19).h +
              ((y + 1) * (xzu196.get(19).h + 0.08 * xzu196.get(19).h)) / 5 +
              0.1 * xzu196.get(19).fontSize
          )
        );
    xzu193.draw();
    xzu192.draw();
  };
  this.drawMap = function () {
    100 == h
      ? c(xzu733, xzu731, xzu732)
      : ((xzu690.globalAlpha = 1 - h / 100),
        c(xzu767, xzu767.width, xzu767.height),
        (xzu690.globalAlpha = h / 100),
        c(xzu733, xzu731, xzu732),
        (xzu690.globalAlpha = 1));
  };
  this.mouseDown = function (u, y) {
    if (xzu193.mouseDown(u, y)) return (xzu720.requestRepaint = !0);
    var v = xzu196.inside(u, y, 15, 4);
    return 18 == v
      ? (this.deinit(),
        xzu204.init(1e3),
        xzu196.mouseMove(u, y, !1),
        (xzu720.requestRepaint = !0))
      : 16 == v
      ? (b(!1), !0)
      : 17 == v
      ? (b(!0), !0)
      : xzu195.mouseDown(u, y)
      ? !0
      : !1;
  };
}
function zto1162() {
  this.init = function (a, d) {
    xzu198.setState(5);
    xzu196.mouseMove(a, d, !1);
    xzu720.requestRepaint = !0;
  };
  this.draw = function () {
    xzu196.drawReload();
  };
  this.mouseDown = function (a, d) {
    26 == xzu196.inside(a, d, 26, 2)
      ? zto880()
      : (xzu204.init(),
        xzu196.mouseMove(a, d, !1),
        (xzu720.requestRepaint = !0));
  };
}
function zto1163() {
  function a(c) {
    c = 0 > c ? xzu740 - 1 : c >= xzu740 ? 0 : c;
    zto1262(c, Math.floor(16384 * Math.random()));
    xzu196.get(6).txt = "Map: " + xzu215.get(xzu737).name;
  }
  var d;
  this.init = function (c, b) {
    xzu198.setState(2);
    d = Math.floor(16384 * Math.random());
    xzu196.get(6).txt = "Map: " + xzu215.get(xzu737).name;
    xzu196.mouseMove(c, b, !1);
    xzu196.get(9).txt = xzu194.getString();
    xzu720.requestRepaint = !0;
  };
  this.getSeedPlacing = function () {
    return d;
  };
  this.draw = function () {
    xzu196.drawSingleplayer();
  };
  this.escape = function () {
    void 0 != xzu196.get(51) ? xzu196.deleteMenu() : xzu204.init();
    xzu720.requestRepaint = !0;
  };
  this.mouseDown = function (c, b) {
    if (void 0 != xzu196.get(51)) {
      var g = xzu196.inside(c, b, 0, xzu740);
      -1 == g || (g == xzu737 && !zto1266(g)) || a(g);
      xzu196.deleteMenu();
      xzu720.requestRepaint = !0;
    } else if (((g = xzu196.inside(c, b, 5, 8)), 5 == g))
      a(xzu737 - 1), (xzu720.requestRepaint = !0);
    else if (6 == g) {
      g = [];
      for (var e = 0; e < xzu740; e++) g.push(xzu215.get(e).name);
      xzu196.createMenu(6, xzu737, g);
      xzu196.mouseMove(c, b, !1);
      xzu720.requestRepaint = !0;
    } else
      7 == g
        ? (a(xzu737 + 1), (xzu720.requestRepaint = !0))
        : 8 == g
        ? (xzu194.changeLevel(-1),
          (xzu196.get(9).txt = xzu194.getString()),
          (xzu720.requestRepaint = !0))
        : 11 == g
        ? xzu739 && xzu197.init()
        : 9 == g || 10 == g
        ? (xzu194.changeLevel(1),
          (xzu196.get(9).txt = xzu194.getString()),
          (xzu720.requestRepaint = !0))
        : 12 == g
        ? (xzu204.init(),
          xzu196.mouseMove(c, b, !1),
          (xzu720.requestRepaint = !0))
        : ((g = xzu196.inside(c, b, 32, 3)),
          -1 != g &&
            ((xzu196.get(g).colorBg =
              xzu196.get(g).colorBg == xzu196.get(5).colorBg
                ? xzu196.get(24).colorBg
                : xzu196.get(5).colorBg),
            zto875(
              xzu196.get(32).colorBg == xzu196.get(5).colorBg,
              xzu196.get(33).colorBg == xzu196.get(5).colorBg,
              xzu196.get(34).colorBg == xzu196.get(5).colorBg
            ),
            (xzu720.requestRepaint = !0)));
  };
}
function zto1165() {
  this.w = this.s = 0;
  this.objs = null;
  this.init = function () {
    this.objs = [];
    this.objs.push({ x: 0, y: 0, sel: xzu706, win: null });
    this.objs.push({ x: 0, y: 0, sel: zto867(), win: null });
    this.objs.push({ x: 0, y: 0, sel: !1, win: new zto1149() });
    this.objs.push({ x: 0, y: 0, sel: !1, win: new zto1136() });
    this.objs.push({ x: 0, y: 0, sel: !1, win: null });
    this.objs.push({ x: 0, y: 0, sel: !1, win: null });
    xzu702 || 0 != xzu705 || this.objs.push({ x: 0, y: 0, sel: !1, win: null });
    this.objs[3].win.initColors();
    this.s = this.objs.length;
    this.w = 0;
  };
  this.refreshPosition = function () {
    this.w = Math.floor((xzu706 ? 0.092 : 0.056) * xzu696);
    this.w += 4 - (this.w % 4);
    this.objs[0].x = xzu349;
    this.objs[0].y = xzu698 - this.w - xzu349;
    for (var a = 1; a < this.s; a++) {
      this.objs[a].x = this.objs[a - 1].x + xzu349 + this.w;
      if (2 == a || 4 == a || 5 == a) this.objs[a].x += xzu349;
      this.objs[a].y = this.objs[0].y;
    }
  };
  this.inside = function (a, d) {
    if (!xzu205.loaded()) return -1;
    for (var c = this.s - 1; 0 <= c; c--)
      if (
        a >= this.objs[c].x &&
        d >= this.objs[c].y &&
        a < this.objs[c].x + this.w &&
        d < this.objs[c].y + this.w
      )
        return c;
    return -1;
  };
  this.isWinVisible = function () {
    for (var a = 3; 2 <= a; a--) if (this.objs[a].win.isVisible) return !0;
    return !1;
  };
  this.keyUp = function () {
    return this.objs[2].win.isVisible
      ? (this.objs[2].win.mouseDown(-5e3, -5e3, 0), !0)
      : this.objs[3].win.isVisible
      ? (this.objs[3].win.mouseDown(-5e3, -5e3), !0)
      : !1;
  };
  this.mouseDown = function (a, d, c) {
    if (c) {
      if (this.objs[2].win.isVisible)
        return this.objs[2].win.mouseDown(a, d, 0), !0;
      if (this.objs[3].win.isVisible)
        return this.objs[3].win.mouseDown(a, d), !0;
    }
    a = this.inside(a, d);
    if (c) {
      if (0 == a)
        return (
          (this.objs[a].sel = !this.objs[a].sel),
          (xzu706 = this.objs[a].sel),
          xzu227.publicResize(),
          zto874(this.objs[0].sel, this.objs[1].sel),
          !0
        );
      if (1 == a)
        return (
          (this.objs[a].sel = !this.objs[a].sel),
          zto874(this.objs[0].sel, this.objs[1].sel),
          (xzu720.requestRepaint = !0)
        );
      if (2 <= a && 4 > a)
        return (
          this.objs[a].win.init(), xzu204.deinit(), (xzu720.requestRepaint = !0)
        );
    }
    return 4 == a
      ? (xzu728.init(xzu346, c), !0)
      : 5 == a
      ? (xzu728.init(xzu345, c), !0)
      : 6 == a
      ? (xzu728.init(xzu344, c), !0)
      : !1;
  };
  this.mouseMove = function (a, d) {
    return this.objs[2].win.isVisible
      ? (this.objs[2].win.mouseMove(a, d), !0)
      : this.objs[3].win.isVisible
      ? (this.objs[3].win.mouseMove(a), !0)
      : !1;
  };
  this.mouseRelease = function () {
    for (var a = 3; 2 <= a; a--)
      if (this.objs[a].win.isVisible)
        return this.objs[a].win.mouseRelease(), !0;
    return !1;
  };
  this.draw = function () {
    if (xzu205.loaded()) {
      xzu690.imageSmoothingEnabled = !0;
      for (var a = this.s - 1; 0 <= a; a--)
        4 > a &&
          ((xzu690.fillStyle = this.objs[a].sel ? xzu299 : xzu290),
          xzu690.fillRect(this.objs[a].x, this.objs[a].y, this.w, this.w)),
          0 == a
            ? this.drawSymb(a, xzu205.get(15))
            : 1 == a
            ? this.drawSymb(a, xzu205.get(16))
            : 2 == a
            ? this.drawEmojiSquare()
            : 3 == a
            ? this.drawColorSquare()
            : 4 <= a &&
              ((xzu690.fillStyle =
                4 == a
                  ? "rgba(140,0,70,0.75)"
                  : 5 == a
                  ? "rgba(140,0,140,0.75)"
                  : "rgba(0,0,140,0.75)"),
              xzu690.fillRect(this.objs[a].x, this.objs[a].y, this.w, this.w),
              this.drawSymb(a, xzu205.get(14 + a))),
          xzu690.setTransform(1, 0, 0, 1, 0, 0),
          (xzu690.lineWidth = xzu350),
          (xzu690.strokeStyle = xzu315),
          xzu690.strokeRect(this.objs[a].x, this.objs[a].y, this.w, this.w);
      xzu690.imageSmoothingEnabled = !1;
    }
  };
  this.drawSymb = function (a, d) {
    var c = 0.08 * this.w,
      b = (this.w - 2 * c) / d.width;
    xzu690.setTransform(
      b,
      0,
      0,
      b,
      this.objs[a].x + c,
      this.objs[a].y + (this.w - b * d.height) / 2
    );
    xzu690.drawImage(d, 0, 0);
  };
  this.drawEmojiSquare = function () {
    var a = 0.06 * this.w,
      d = (this.w - 2 * a) / xzu715.w;
    xzu690.setTransform(d, 0, 0, d, this.objs[2].x + a, this.objs[2].y + a);
    xzu690.drawImage(xzu715.cvs[4], 0, 0);
  };
  this.drawColorSquare = function () {
    xzu690.setTransform(1, 0, 0, 1, this.objs[3].x, this.objs[3].y);
    for (var a = this.w / 4, d = 3; 0 <= d; d--)
      for (var c = 3; 0 <= c; c--)
        (xzu690.fillStyle =
          "rgb(" +
          Math.floor((367 * (d + 1) * (c + 1)) % 256) +
          "," +
          Math.floor((687 * (d + 1) * (c + 1)) % 256) +
          "," +
          Math.floor((651 * (d + 1) * (c + 1)) % 256) +
          ")"),
          xzu690.fillRect(d * a, c * a, a, a);
  };
  this.drawWindow = function () {
    for (var a = 3; 2 <= a; a--)
      if (this.objs[a].win.isVisible) {
        this.objs[a].win.draw();
        break;
      }
  };
}
function zto1166() {
  function a() {
    0 == xzu198.getState() && ((g = !0), c());
  }
  function d() {
    var e = b.split("%");
    if (4 != e.length) return !1;
    for (var m = Math.floor(Math.pow(2, 30)), h = 0, l = 3; 0 <= l; l--) {
      e[l] = parseInt(xzu178.decodeNumberString(e[l]));
      if (0 > e[l] || e[l] >= m) return xzu199.init(3232), !0;
      h += 0 == e[l] ? 1 : 0;
    }
    if (4 == h) return xzu199.init(3232), !0;
    zto873(e);
    xzu199.init(3231);
    return !0;
  }
  function c() {
    if (g && void 0 !== b && xzu178.validateUsername(b))
      return xzu200.activate(0, !0), !0;
    xzu200.activate(0, !1);
    return !1;
  }
  var b, g;
  this.init = function (e) {
    g = !1;
    xzu198.setState(0);
    xzu196.refreshPosition();
    xzu200.setVisible(0, !0);
    xzu200.refreshPosition(0);
    c();
    setTimeout(a, void 0 === e ? 80 : e);
    xzu182.init();
    xzu354.refreshPosition();
    void 0 === b && ((b = zto864()), (xzu200.get(0).input.value = b));
  };
  this.deinit = function () {
    xzu200.setVisible(0, !1);
  };
  this.getValues = function (e) {
    return 0 == e
      ? xzu196.get(0).w
      : 1 == e
      ? Math.floor(0.3 * xzu196.get(0).h)
      : 2 == e
      ? xzu200.get(0).input.style.font
      : b;
  };
  this.input = function () {
    b = xzu200.get(0).input.value.trim();
    zto872(b);
    c();
    if (0 <= b.toLowerCase().indexOf("password")) {
      for (var e = zto866(), m = [], h = 0; 4 > h; h++)
        m.push(xzu178.encodeNumberString(e[h].toString()));
      e = m[0] + "%" + m[1] + "%" + m[2] + "%" + m[3];
      b = xzu200.get(0).input.value = e;
    }
  };
  this.mouseDown = function (e, m) {
    2 == xzu196.inside(e, m, 2, 1)
      ? d() || (zto878(10), this.deinit(), xzu203.init(e, m))
      : 29 == xzu196.inside(e, m, 29, 1) && this.pressEnter();
  };
  this.pressEnter = function () {
    d() ||
      (zto878(10),
      c()
        ? xzu205.loaded()
          ? (this.deinit(), xzu197.init())
          : xzu199.init(3228)
        : xzu199.init(g ? 3220 : 3226));
  };
  this.draw = function () {
    if (!xzu354.isWinVisible() && !xzu725.isVisible && !xzu728.isVisible) {
      xzu690.imageSmoothingEnabled = !0;
      var e = xzu205.getByName(""),
        m = (1.1 * xzu196.get(0).w) / e.width;
      xzu690.setTransform(
        m,
        0,
        0,
        m,
        Math.floor((xzu697 - m * e.width) / 2),
        xzu196.get(0).y - m * e.height - 0.85 * xzu196.get(0).h
      );
      xzu690.drawImage(e, 0, 0);
      xzu690.setTransform(1, 0, 0, 1, 0, 0);
      xzu196.drawStart();
    }
  };
  this.getName = function () {
    return b;
  };
}
function zto1172() {
  function a(e, m, h, l) {
    b[e] = m;
    c[e] = new Image();
    c[e].onload = function () {
      if (0 < h) {
        var k,
          f,
          n = document.createElement("canvas"),
          p = c[e].width,
          r = c[e].height;
        n.width = p;
        n.height = r;
        var t = n.getContext("2d", { alpha: !0 });
        t.drawImage(c[e], 0, 0);
        var q = t.getImageData(0, 0, p, r),
          u = q.data;
        if (3 > h) {
          var y = 2 == h ? 160 : 600;
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--) {
              var v = 4 * (k + f * p);
              u[v] + u[v + 1] + u[v + 2] < y &&
                (u[v + 3] = Math.floor(
                  (255 * (u[v] + u[v + 1] + u[v + 2])) / y
                ));
            }
        } else if (3 == h)
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--)
              (v = 4 * (k + f * p)),
                0 == u[v] && 200 < u[v + 1] && 0 == u[v + 2] && (u[v + 3] = 0);
        else if (4 == h)
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--)
              (v = 4 * (k + f * p)),
                u[v + 1] > u[v] + 20 &&
                  u[v + 1] > u[v + 2] + 20 &&
                  40 > u[v] + u[2] &&
                  ((u[v + 3] = 255 - u[v + 1]),
                  (u[v] = u[v + 1] = u[v + 2] = u[v]));
        else if (5 == h)
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--)
              (v = 4 * (k + f * p)),
                200 < u[v + 1] &&
                u[v + 1] - 20 > u[v] &&
                u[v + 1] - 20 > u[v + 2]
                  ? 40 > u[v] + u[v + 2]
                    ? (u[v + 3] = 0)
                    : ((u[v + 3] = u[v]),
                      (u[v] = 255),
                      (u[v + 1] = 255),
                      (u[v + 2] = 255))
                  : 50 > u[v] &&
                    50 > u[v + 1] &&
                    50 > u[v + 2] &&
                    (50 > u[v] + u[v + 1] + u[v + 2]
                      ? ((u[v + 1] = u[v + 1]), (u[v + 3] = 180))
                      : ((u[v + 1] = u[v + 1]),
                        (u[v + 3] =
                          180 +
                          Math.floor(
                            (75 * (u[v] + u[v + 1] + u[v + 2] - 50)) / 100
                          ))));
        else if (6 == h)
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--)
              (v = 4 * (k + f * p)),
                (u[v + 3] = Math.floor(
                  (255 * (u[v] + u[v + 1] + u[v + 2])) / 765
                )),
                (u[v] = u[v + 1] = u[v + 2] = 255);
        else if (7 == h)
          for (k = p - 1; 0 <= k; k--)
            for (f = r - 1; 0 <= f; f--)
              (v = 4 * (k + f * p)),
                u[v + 1] > u[v + 2] + 10 &&
                  ((u[v + 3] = u[v]), (u[v + 1] = u[v + 2]));
        t.putImageData(q, 0, 0);
        c[e] = n;
      }
      d--;
      xzu205.loaded() &&
        (xzu723.refresh(),
        xzu179.prepare(),
        xzu715.init(),
        xzu727.initC(
          [c[8], c[17], c[7], c[9], c[10]],
          [!xzu702, 0 == xzu705, !0, !0, !0]
        ),
        (xzu720.requestRepaint = !0),
        (c[7] = g),
        (c[8] = g),
        (c[9] = g),
        (c[10] = g));
    };
    c[e].src = l;
  }
  var d, c, b, g;
  this.init = function () {
    if (void 0 === c) {
      d = 22;
      c = Array(d);
      b = Array(d);
      g = document.createElement("canvas");
      g.width = 1;
      g.height = 1;
      for (var e = d - 1; 0 <= e; e--) c[e] = g;
      a(
        0,
        "exit",
        6,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABGBAMAAACkrn5fAAAAHlBMVEUAAAAiJCI4OjdcXltoameIioejpqPExsPY29j///9xarZIAAAAyUlEQVRIx+3WQQqCQBTG8TdOB5DUI+S6nRcoPIFhu1bBHGGO4Any3TYxAkWTv1DSYr71D4b5mOE9kWmszkeC/ZptT6Ocl+xj5qgtbVR1iZn9VE2wU2uO2Jryhm2h2OaKbdZgu/NKrXVK7f6q1JpaqTWFYpvrUtqhPTTYpst0aBOv2Drltlxh392iu0U1t5I4biX13PZvF7+zvOFWihXWlNy+aqZ/M3LcivXcds1xK9kKK3GYAVtYe+8CZ/c/7Br9blSNcgn75O/tE26TasUvH0ImAAAAAElFTkSuQmCC"
      );
      a(
        2,
        "defeat",
        6,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAABABAMAAADL6o5mAAAAHlBMVEUAAAAlJyU7PTtUVlNsbmuJi4ijpaLCxMHX2db///+Cup+UAAACo0lEQVRo3s3ZsW7bMBAAUNqyZWUzsnT1VECbhy7ZvHTwlqmAN6PoUG0CggzairpIyi1Nk1b629awTPGOpHm0DyE1WYJEPlHk3UkW6w5t7eMXEWczKHvN52QoXfcjHUoUi4PSbdOhtItkKBEekZPSLdOh7NKhtOlQ3nwRnaC8pENp06F0t+lQvsWi/O/4+uPXiJNljcbgvUb5G5ci3mmWeVyKqGLNW5MyGyh1ZMo41hIyKaJRh573u9JY5HDo1LMsjBOfBLq9/oC0Rg4L5UYdeuWi5HqDAZShyT9clAKGBzJlBgMLB0UN9CKMksOEyEFpYOFBpkxBpywU1AmZkrFThpv7HUYZwcjPQEGzj04RsOpnoJRwnGNScFo7h7JS16HqcmbJDIUzW0hrWstQVfQWlMkhXg655BzKkoVyOPn7EMDjUa4Os0SidsIoCxbK5tBWhV7FCZSRJ8RtT1M6mE2PYb/tE1EdQsnoFNCpizLudwqYDCiUqScdhlLyfunkeslCo+TMlKJvPkNvNASKr14JpayPV0mtZKFRfFVcKKU5Cir4rYRAWXtq21CKetY31uVxiiI9FX8gZap+F7BrP2WC3oMupRSqZprBeeunlCiNXkopVesTrWShUDJpLS7sgd9GwYG/cn1B8lFGVWctuc7PQcao1hTK9YdP0hjgCykTo1579lLM7RcHxSg9VZYMoWw5KFfOL58BlHbOQdmYDa+CKeC1/2yKpbqvgyk1B2VsafgplNI6b6smVnH7wJq7h5tO2bFQCvdNkintkoVibX8RRtkJFkoDUmCpRwkqpZ3zUMDsgDObStkKFspUj9tqEr+EUO4EDwUt8Ez/ykKj3AkmSonGWGopn0J5WAkuSoX+KG60ksVL+Xm/8kXuAAoO1RvtOkT5B9F51EylDpRdAAAAAElFTkSuQmCC"
      );
      a(
        3,
        "orders",
        6,
        "data:image/png;base64,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"
      );
      a(
        4,
        "crown",
        4,
        "data:image/png;base64,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"
      );
      a(
        5,
        "arena",
        6,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAABABAMAAAAHc7SNAAAAHlBMVEUAAAAjJSM7PTpUVlNqbWqHiYalp6S/wr7W2NX////RSpP4AAAD9klEQVRo3sWZvW+bQBiHiSGAt6hdki1Dh7Jl9eapkjdPrbxV6lCxeaw3okqpbqNuzMd/2yRw3PvJkQVYYhHgnvfer9/dBQG4WnftgwWuawBwXAIgBQB/lwDIAEC1BEAOAJolAAwAaB/mHz+C4y8RhQkCKOcHuEMAl/kBDgigWTgG2/Z+7vFDPH77fW6AmAAUSxbi1+t5boAdAajnBjgRgHbm8a/o+HNLgiEGfy0UhUMMfrU/zvMCbOy4HxeSBKehBJtlirGze9AlW1GqtM2fH0rp6HroCTWzNcnpTMmxa+f5HZcEORnnyQ9gewkFyJUcS1zsp1wSUID2tx/gKAMYJccy14MSLgkYQOeeUYCLCBBqOZY7LRhxScABzl6A3gcEINFyDIY+lwQcoPEDFBLAWhE8IQQ7MUnAAd58MA5wkQAOiuxOYBM+sGIsABy9AN0QBMAosnsNx7xjkkAAKP0ABQdYabL7IBpWjwD88wNUHCDWZLeBPditkm8wwMuvD1+Mez8VU/qE3IwBUkV2r5AKWTFJkIPymUwHKBhAV2VzJrtjPOmGRiEECKcDVAzg7X9NxmR3ih2TQ0dTgGg6wKsPMED3aspe2+F9iYyWKwjwmQWhDlAQgC66zjGyLmCZ4yakYQCffo6lYUUAKgLQmx4y2U2WQ3FLJMHUQkQBXt5HANb5hkiCa1L9Q1quppZiBlBgABv+OZEEvKCQvSoOUAeTAGoMYHq/bkjsZCpA9b52zADaLQSI7EMpkQS5CtC8T5AAgEt35xECJHbcmEgCowL0TXOqJAMAZfenhgBrO/MhLsaRPn4fhRSgvvED9H7dAYDDkGkGye5kBKCUAJ7uAz9An1qGlfiH4ZmjuDvVCntVGKDZBxMASDYMTa5xpbcUd6ekXQIyA80WAYiluAxu6Wdi2brRGOxLUw+w+obfHAeIvGWjkXenhL2qoRfsUHKMA0Af1NIejC288ShAgQBs0X6cAnBLAE6ydSOFeGiarhsaGBoegIgAKNYJM8Oi0AHshEqoAQCTa3Igg2T3aRSgxQAJZPcBpAggVay7Ek9JDBKmDmAF88AHEKGRMsW6WNyazJGfcjYZytqwRgDuK7XS8vboK6V4fnTGAHfiqwoAWuIYJcc24motRY7J+YQVUwBCcF9seWc0M3vx+KQhqtg4Li/A8PF6+OIRLYUqNDP38gHSFgMc3LLND5C6+2tspbHWXStnJEgSQIDUVTE/QOjuH8Tl5hbMdaWcn5TiyujVfX4A+2YNTEYbo0cgBp6VU8wLBrCFq54EkNr7K2Jlaq3LlR2DDLoGAWyGjjgBILT3Y7zadItsbc8khU0TASTD8xMAetfXrGr2sdf8B96/CJXN/8t1AAAAAElFTkSuQmCC"
      );
      a(
        6,
        "territorial.io",
        6,
        "data:image/png;base64,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"
      );
      a(
        7,
        "youtube",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAkCAMAAADW8qrvAAAANlBMVEX+AgDxYgDjhgD/eXnQpAC7vAD/oaMA/wClzwCH4QAx/zdf/1ty/3Sf/6D/3d2+/77d/93///85QMf8AAACr0lEQVRYw8WYWbaDIAxAsdVqAzzi/jf7GBIGZxxO89GiUbgGEkJEH+Q7DF3bti8rjRPhxTftLavpuuH77X8gwv10BLQrTfsEpHECG4TwEhUy0ItKW1Gh7Zp6AwF0KRP16GSLsApQCLKidt1igE3NZZFjKZWEXR2gaMguaSwPa54jbCoJ2Yjo+lWxpR8jhFpA0dH6jlzbIzhCdOIf8606wm814atPq8+whXDXY+WS+Y4QDtWETdYxHlmGFwm7akLRZwsRaLrVc4TtAsL7vUkIWbxRRBrCngu9xArSinvS/cuccKYhQpletjrXl3ZasRQNP+Pfe9+ZZZhd4EnW5KmYHNxwVFIZ4UwTCP1U0GqhC3+5QjiOn11CPxQGj9EJ0Io8QchM6fMIcZVw/PvsEfpOAxkUMQ9PEObvZh87KtGsEY6rU81bs46zg4SLoNiI1YRaYvGECl2aLcI1Rib0Q2gM42HuN7qeUFOEtV8HZMvwv2ikTzLyZ4PQj2WK5U62NCc8Jd2ImcghwiUzRkI/wWHcOD7nPCcI2ZhxC/BPXiJUaXWrOwjxDOHmLLMXxlhzD6EpCbc9ZdOXadF5172dEJUK83Il2jBXCmE3Eka5ErF5EPMbwgO7Xp5e30+IJBcyh2cJzQ3ZV0GoniM8n8HeTziN2DZH1PrCKaAghCd2PZ/enT9JlYQ9D8dHQFNPqMYskUuEp0+jE0IaVxakCJQt54SswYIQZci+MGVfwZaitihSuHJGSMF7MQstCWea4tpM+tKiHy4sw7zcgMWoNIdOOyWcaRIOnSAAs5T7dGVpRpi61dmOOCqYEs403nQqf1dyXwjnq3NZXU5yMmbsFmA0ZJdGhmeAS3RJA1ET6nyg7c14GtW+L8UVzuEo4zMVzgM1WKoSU5m44TJxw0VirhLDL6rE/6vBvdrCmmWnAAAAAElFTkSuQmCC"
      );
      a(
        8,
        "googleplay",
        3,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA1CAMAAADf/zF9AAAAwFBMVEUAAgAHCgUmBAcPEQ44DAkZGhhcDRktIwEoKicyLAQPNR81NzSYGTE/QT8KVjKuJivSJUZPUU/rK01yXQYVdUNcXlvyMkn7M0VlZ2Rwc3B7fXoWqGCEh4MCtMqQko+3iKe4mQIAwuianJn/hy0ExfEAx/78iy2go6CjpaIA0/8O23QA3LXFrRIR1PIE2v4A4P60tXoA8HPftAuytLEA/wC+wL3/wQD/xwDHycan3VT/0QDU1tPg49/q7Ony9PH7/vsMGtIFAAAFvUlEQVRo3uWaa5ebNhCGpRJSGtbJalN2kZfKqZr0sJtbN5SEWLf//68yI4GNDb6sG5+E0/mAMQbxMLx6NQKTfyFkOZmQyEsAWeZpRCcRUZpLidBSJGRCkQiJ0JNiBmqAljmZWOSSlOnUoGclKeOpQcf/O+g0xS4cxRDUL31LMYlX64SmKa7Q1eIc0M9ub3+nxx3KGmsNHFxprU1RawzoHrlOFa4qbDZX1mpJidAFIVwl54H+4+39/e3zo5iNLrjUOamVEIJx0RhRQFPcpnOhlCgiYLZqzitbEunMjBT2TNBv3gD1/e2zw0fWeoaeCStN2FDqCD8AmpDGb6PKp1taJo2uzgmN1A9HYJuSkIxzntYaMh2PQae28IOBFdIUlp8T+s3bB4j7Q9I2ghBQrJO1BQEn49Bzfw4jpSGNPit0oAbsvUeqBu2DWVE3lI7LI8G7AffDzgGa2eas0C31w94eKayMSVKbWd2g5Y1Bk9LOI8KUjgEaOuO5oF+/7lPvkzatrFYGBIDyQEcbgU4aq5TVGUHoSJ0PeoMasKPddUtZSQYfBQR8ZvMw4qDv5V0RxqsKC1+Gv7EiOhP03Rb1IWn/DMP467sB9cP9858feoT6mMHmB0L/eTdG/fXTq+hnh96m/vrly/LTy7HBJuEwjy8eM4uIosHl0yhE9+VE6E1qYP6yXC7fvRyUppVxGLZmR0MrKEK2Yq5DNLkfojR7NPSHAfXXz5899HL56rdNy9Oe2MLCzI+FNq4ZDFOui4qSyrns8dDb1MDcQS/fbTADrZYsYYVy9j9Cq7quG2hPngR992GL+p/PPehlL9UJ5LkKQxwVRzPvgBahRnEmPhW6T724+WtHpkvnGvr4nr8HGpvkp0C//7BBvbi5QepO07/2XMA4Oxt6Q5az1ZWkebZqOsnzmGA12ELHWZ4OoKVzRQud5IVviLatUUoPQXfUyIzUHvrVhnvkbpiyxLuJFr59rryvzILNgF4NGIMM0H5H27At6BqAPXRaY++GKkz4UgyUo/umM4D+2KMOzEDtfXoTsMBe4+mrEJIkam0CK0swQJbqlT146LjdsTU3hIbqNoFEa98Ru9+dmFmncBfYWuyDXlN3zDc3f396GQ2FKLt7GggiaFnNmTB4AuhUtmR5A5tiCsuGs9J20KBdxVNp23sFTRmc0UPyuYeeKdfkDH43CSQ/x9mE09Fe6I56cd0xX794MlAvZLpsJwMYAJ1ah48QYIoCCavb1AAvz4AxCpfnoaE7wI7+IvINn9actJaXZbzIYf95hsesM7QbOlAvrq9b6hdPR3owkoQWUgwNCuxarp3F71Er/QpPHuaKAXoG18sbr/JZz6crLMQDNPP6MKh15UxKcXEIGqkXV9eB+vLpuO/oNk/hIYh1dd+5ss7ZIP0VfPfipTpAM9ABMKki3uqIrXqzFHCNwU4tyBxSEdJ9CPojMHvo68uLXWZZuKAG73SggvljMu1MlQ19uoOGqyyTdnuknaqcZYeh3wMzUl9d/LK7XANQHXKd1qjapNV01tM0HdW0djbzRpiOQ1d+CozHCn+U3XLXUejAfHU10v/6NR4KrymlRNNFZ6vQWvvukXF0jwjPrjjmr3UP4Xcs4G7MRqGBs8nReXB7gjLhh6ED8y4xr8eSelWeaT+K9X26cGsv3vbpqO7tuEPTzgtfhC06Ogi9OArZj3roAc4qGbeNode2I2Ku4DcbFJD4EdHLw9fTkdTroRPr6fXI4etpBu1a1W7fuKZd0Mh8uUfMm8pmWdZ7mkFZtu4yadbVHjSOYT3tu21/xzHtZavCBvwuOQS9QOQn33NKR0UoHOS2No8KvuV3Y8+nF5eXF0/Jd40ItF4xHJb1CdPjZlhNbkPHF98b2T9/D93q+PkN2Ri2fsyLIob2BbZ3wqFS6+wHvd2iM87ZSY9ORh45TPeV3BTf2E7y3fgk/4Uwzf97TPKfNRP8D9M3N725zWJlxsgAAAAASUVORK5CYII="
      );
      a(
        9,
        "discord",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAyBAMAAADVdiTZAAAAG1BMVEUA/wBI/0lu/26P/5Cl/6O8/73R/9Hn/+j///+iRuwXAAABJUlEQVQ4y83TvW7CMBQF4BsKdKVIpYxIRaJjVLUSI6JDGSNlCCOq1JC1f+CxFIL92D22E+di/ABciZB8seRj35joVZ3VN1FXBSqhRYgPJEIsSQXrAnmjL2uP5Usm81z83Bec5WM+J9T4vS8Yfzz1yFQ0v2ackKsrxr2G7d4ZPjK1O214z3no+Jdz1/EKTy1NI/w6jmcIID6JJirGe8cYdIdGIcQOwx3j/gEpI6X+qoRkGqrnd6OXFR/NRAcdOWFc6hDPera0Xk/Fozo1ck4bHsSVpg0jYJSlervGW9zWSdQXhhXozlbGek1uY9/s2hRWect7ucnsf5ld7DfosX+kcsv+AdwtDfvHdW877x/u0raB6Oa0qG35rKZhbokg41sKclQEmTr/f+SUPtWxuyYAAAAASUVORK5CYII="
      );
      a(
        10,
        "insta",
        3,
        "data:image/png;base64,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"
      );
      a(
        11,
        "emojis",
        4,
        "data:image/png;base64,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"
      );
      a(
        12,
        "flags",
        3,
        "data:image/png;base64,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"
      );
      a(
        13,
        "clan",
        5,
        "data:image/png;base64,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"
      );
      a(
        14,
        "bestPlayer",
        5,
        "data:image/png;base64,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"
      );
      a(
        15,
        "zoom",
        6,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuBAMAAACllzYEAAAAHlBMVEUAAAAhIyA3ODZTVVJrbWqEhoOkpqO8v7vX2tb///8goTJXAAABaElEQVQ4y32Tu1ODQBDGL8QAdlg5dml8dZTa2TijXQpnIh2TwoQOxwehi2PB0flKYP/b7HFv5nALBn5337d7ewshXZyuKX2PST8egUW76OE7EJFa+BhJ9bSsUWFaeTV3GKHbn8EvlB79bjSv4VO8jUr4VdiHNnK938MHPie0Yh+ZLqmGuNsJ7CNURgewI5qPoRE86GwkJyWIBIfcUfJrmMm0sclDyDnPWmLyADacl8jnRbEGKIoiJRP4EmU2LJmIDfLvAf7z/37mv6IUm08pzbV/rx5f1pPA1Fn/iX3eS3nekAslz7gcGw9bg3uqn6Rup5oH+uaTLpO4r0SmZVuUFE2lfTc+z1qr9+BVtGJqzq1RHNfQdAtnrEW75UwuXOFgvj3crpCyDu6UIpP9fPHZU5XkiYVXvsXIPcc+VwspzY2pPorE/NgCfYK+QJ5+QFA6fjQt2A4IWuIWODixe2ELcuIUNJGL+zQle92exY5pfDIaAAAAAElFTkSuQmCC"
      );
      a(
        16,
        "sound",
        6,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAApBAMAAAC4kga8AAAAHlBMVEUAAAAjJSI5OjhTVVJpa2iHiYakp6PAwr/Y2tf///80ejApAAABF0lEQVQoz5XTMXOCQBAF4AUOtLRL7NIFO7oMXTpNmS52JAUTOrWzw4lFrkvU8Xj/NofDcQcu42SH6mPm9nG7EN2uty+WIyjWt7zfgXVf8r4A6wKtP+4dX1p/qRIno/URdk5G4+LVk2cno/FUUYpnm9F4jCzCiij81gXrAkdPnojGsKXo6Z0KVT89L840w8Os6nuKZIRsrBt3XbcUKCNkPfdRevJH6EBdJ3kgeQxQXvlJu/8P58+59P297qtzBlzOoe/SNzNFMq0mFOR5/tn6Yl2/WjYL4Dn3HzT33Iy09XtkoY7ZVGHnWE1iM0c9tdbDD5KK3Z/I2RMS0u6VPeayB8bjfWeft/w+11n5/6UY8HDAab65/c/+AYrN7UlrALeaAAAAAElFTkSuQmCC"
      );
      a(
        17,
        "apple",
        3,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAA8BAMAAAA9AI20AAAAG1BMVEUAAAAjJCJUVlOEhoOanZkA/wC8vrvW2dX7/fq38z8cAAAEbUlEQVRYw+2YzXOiSBTAGzW6x8ZY6pGYFMMxUct4JGbLcMwld9QpliNkLeUqUvT7s+e9BoUITpIpuWxtp0IJdP943/3B3t7eXtnF2xViGZIbf1+8mVcS3YQKmk3o16AKtLhCdAsqad4be3WrQcdX7BUqalesURXaZM2q0DZr/TfQQVVo8fTXb/LgzO9SiQpon/WPg0fjk5j3cuNnH74ZQPcztOBsegz6xnP7i+i99Tk6ZOwoadwH34LnR5jDBB6j9RjR4vkF4pEF6wmho1EQOyP83uwWuisX1uPgPNpmdciho/5efwiWoiZau86T5QX+ZACL+S0MpEKDVW9/PTMAljq0R026P4/WmJFHx30v2E/9+GFj7KzI8IIZ+K6AZdyCAXbowd3ewN9kkA4McYB+Hs078BG9gNgI/12trJ1L6BGEVjRoRwbZOsbrfipaqa1nUXvQOY+eB1kUIXpv+BAZ0VM8DI5od7id4auh7DBK0VOJ/rEtt7WYqXoAmxvlLn0f94Tp7qx3K24LFRL0IrCDOxiIzgZtLbqim6INQosevJSiTZwtr2ccr6lWsaJ2IFaRocM4Re/x0WIwhEV7hD2e1GmCjtUA0fB0Y5Shw9x8bCWPtlu6BIeswD95K7YiTT6xpWQJZG7ic7ovQ9/n0MZFa4jIkeuXLU/hpYXO0H4O7V4WbWfkWvZ6NT4zbp3F6HfQOVNzpXx8RDHalcX0c7SZobM5XpwzjqlMHA0/azf/FL1XeKlLBccKF6G7v4vObL2rm6WzciznC631NXTO1pl97ZZHKtxMl/wOdWiLG+UxQVO+btwFV7AMrDk99bvvbYhvFL2A9op5jnL1Q1KB38lgDxUz/a5gvYM8CsToUsUFr85rMqWnp+hdDt08mtSKGKI413/yOmaVMl8m+aQpE9nBbGzBV17WaHtPuXYipm+0xil6n0Mr7sGkgSAVUBxMqSAkWbVmmmBtqp9k63v8t2uotgs+dgwP9jyi4/xOJHVkqJBNEN2ieLBCikSvlqxWsJcu0YKCCHn0wqb6eojXrPLxIpp8aKJMvE/mnYZknJ1ySEfyCaFJL7SbVycFHMc5uCpDm0Vjmw3HMXGEDG5mkBJSk6Qt0T6IllLihdCaHD09RfvF0id7KglaFNBk9lN0nXZfBYNEhdInmIoNbwoGiZ1EqYJBWuWrJ+20PkX0CZQWeDN1I0LsuizuFAWmlBoSNwKhZXJugwLaP7VH4jGth8EXwELB4OtiPDRlOP3ACwazjY6+J2fXJdrHjlExQmRWfUh0WwY/ysbV6xkWrZDx8cMxZRwNlfDYLYqkk0cJHbGOo9VKljgLpky2K04SJROxfIXxynVOfg+VBcal/O47S9YUe/Sy0ORTQsswM0rQ4iepsnEO96pcaYdqwI31YCINOrtNtV2pqpxl1nNUd0hPo7lcJg0m39rLpEU7F3cX2yb9jz5paRJ8WNF9BV3hRrrC7X+FhxYVHrVUeEBU5bFWhYdxb6+Nf7YXbpv0CLGqg89fkK30UIXyeWIAAAAASUVORK5CYII="
      );
      a(
        18,
        "tutorial",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAALBAMAAADcs4MTAAAAGFBMVEUA/wFY/1p//36U/5Ss/6y5/7nh/+H///8ynU50AAAAw0lEQVQY013QPQ+CMBAG4KslddWEhNUBmY1LVyAoK/GL1QRsVw3Q9+97bdQQ3+WaPO1dW6o4BfmIDX0Sl6GkBYEzBGybr+oplHYgY2E6v5Zo/s6yksJGmCbrMzjK0NGxd1kvbnj8FHc9akDylLyG05OCQTPXGCeFNZ612+spui5wnyvPTRzZVz3yrbjzXGuvy6AD6xKnmTqMC3QKFe/zmrj4p2RhRwEIC7cKqvDpLKsVRWd+4vZC8rrzPxSX4lCkeVq8ASbnSQaqZubjAAAAAElFTkSuQmCC"
      );
      a(
        19,
        "privacy policy",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAcBAMAAAAD5/ucAAAAGFBMVEUA/wA7/z5a/1t//32i/6LB/8Hd/93///86vFL4AAABJklEQVQoz8WSzVPCMBDF19qPa0fH4doZ63CtguZaEci148FcCxVyLTTd9++7LaAIePbNJDn8ZvM2eUu3oycSjWI6kQaWciA7A61pieJpX+HFu9WDJmoVO7y0PgdAfgd+YA8JabZOYYExh045UxtnK6TcexTKER6hNt4ctS1uyM5ddxWR2oq5sYX41TZPM203R2AorLLdVWWE4giETApmK+ZJcNZ80rd8FYAuyoe7DLxZRv+uwS4R0qUpToDlHtSz/DdoQ3gfq1jX8yJYV+Hn9WoPWPOAUeralpbxzGH77dHozbARsEQ2vcegOVS8xaaMnIAKSUzWlAcP+fhGbwUs8C5xIf8B3Rh0HlrSiLCfE38i23hCaTbOvOkrhXz5vYFt/ohp3Vt8AcHXXK+G+E0HAAAAAElFTkSuQmCC"
      );
      a(
        20,
        "cookie policy",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAcBAMAAADo0ECfAAAAGFBMVEUA/wA7/z5Y/1p8/3ug/5/C/8Lf/9////++CsWBAAABG0lEQVQoz82ST2vCQBDFJ2azuVpo8WqhxWuUtrmmVeI1UpNctbXZq7J/3tfv7Ca2CH4AB2YZfixv3s4s0Wg1pSHiBec8lJGCPWPJVar7Eh0KuuPqMWDxTqMx0cxSnZX4phZ7aXObagGXUW6IRmhwj8ZJhyrVuWlPHi+EI5RWQAJZqlvbapq4SNX/eOdx/UkJgMWfSG68SLkhbmVofW4pMeGWbI2Cud7gEN7g7UcMOG80cdJeYJ5bwGJ7gQu1e+42iUsOUdPNu6ysAv7BF5TzIhJKq0oVvTZeXczJy9HiIz9hHPB2nrgo4PUx4oW6QZsEXvDAeGbejOBBD5gUjNfmnewjHMNH8d8nXk3jZbykpxVfqa49r0F2FR/4+AUdhVcfg4Qm4QAAAABJRU5ErkJggg=="
      );
      a(
        21,
        "open link",
        7,
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAPBAMAAADpFNeEAAAAGFBMVEUA/wBi/2N//4CX/5i//8DU/9Pq/+r///90hWfkAAAA6klEQVQoz5XSPQ+CMBAG4FME1i6GlUHjSuLA6uaqEyt+JF3VSt+/b99WhRQG7XCB0qdcrycia42rkomxgJ2edsP8AfYEKH8Gc+CYaLQ/g5Szm8mcpkGGZwgurwsDKqfrrgf6kaNKcMihCpwk5+YZOr+2DMCOQBuAtkoKgpTgvsQOd7cCOMSg82DJz/0fHKjewMQAW4KGxRyeAYqBTyNgCFy6gyq517MEYKAjUNsA2nAPc95DyMaHW4Pu0wNoCVIQPJjN96aHoIjBzINqD9X30vu8cKW6JTGQ2pc18x2x0pbdOgTSxCD1YAHzAmJBjxvc7JBGAAAAAElFTkSuQmCC"
      );
    }
  };
  this.get = function (e) {
    return c[e];
  };
  this.getByName = function (e) {
    for (var m = b.length - 1; 0 <= m; m--) if (b[m] == e) return c[m];
    return g;
  };
  this.loaded = function () {
    return 0 == d;
  };
}
function zto1181() {
  function a(q, u) {
    xzu768[q] = 0;
    xzu768[q + 1] = 0;
    xzu768[q + 2] = u;
    xzu768[q + 3] = 0;
    c(q);
  }
  function d(q, u, y) {
    xzu768[q] = n[u];
    xzu768[q + 1] = p[u];
    xzu768[q + 2] = r[u];
    xzu768[q + 3] = y;
    c(q);
  }
  function c(q) {
    if (!xzu714.pixelInWindowChanged) {
      var u = xzu206.getX(q);
      q = xzu206.getY(q);
      xzu714.pixelInWindowChanged =
        u >= xzu711.camC[0] &&
        u <= xzu711.camC[2] &&
        q >= xzu711.camC[1] &&
        q <= xzu711.camC[3];
    }
  }
  var b, g, e, m, h, l, k, f, n, p, r, t;
  this.init = function (q) {
    h = 112;
    l = 200;
    k = 255;
    f = 240;
    t = new Int32Array(4);
    t[0] = -4 * xzu731;
    t[1] = 4;
    t[2] = -t[0];
    t[3] = -t[1];
    n = new Uint8Array(xzu150);
    p = new Uint8Array(xzu150);
    r = new Uint8Array(xzu150);
    b = 8;
    g = 255 - 7 * b;
    e = new Uint16Array(xzu150);
    m = new Uint16Array(xzu150);
    var u, y;
    for (u = xzu146 - 1; 0 <= u; u--)
      if (0 == m[q[u].color0]) (e[u] = q[u].color0), (m[q[u].color0] = 1);
      else if (0 == m[q[u].color1]) (e[u] = q[u].color1), (m[q[u].color1] = 1);
      else
        for (y = 1; y < xzu150; y++) {
          var v = (q[u].color0 + y) % xzu150;
          if (0 == m[v]) {
            e[u] = v;
            m[v] = 1;
            break;
          }
        }
    for (u = xzu150 - 1; u >= xzu146; u--)
      if (
        ((v = zto1304(xzu150 * xzu219.random(), xzu219.value(100))), 0 == m[v])
      )
        (e[u] = v), (m[v] = 1);
      else
        for (y = 1; y < xzu150; y++)
          if (((q = (v + y) % xzu150), 0 == m[q])) {
            e[u] = q;
            m[q] = 1;
            break;
          }
    for (u = xzu150 - 1; 0 <= u; u--) m[e[u]] = u;
    for (u = xzu150 - 1; 0 <= u; u--)
      (n[u] = 36 * (e[u] >> 6)),
        (p[u] = 36 * ((e[u] >> 3) & 7)),
        (r[u] = 36 * (e[u] & 7));
  };
  this.getX = function (q) {
    return zto1304(q, 4) % xzu731;
  };
  this.getY = function (q) {
    return zto1304(q, 4 * xzu731);
  };
  this.coordToPoint = function (q, u) {
    return Math.floor(4 * (u * xzu731 + q));
  };
  this.hasOutsideNeighbour = function (q) {
    return (
      xzu206.isOutside(q + t[0]) ||
      xzu206.isOutside(q + t[1]) ||
      xzu206.isOutside(q + t[2]) ||
      xzu206.isOutside(q + t[3])
    );
  };
  this.hasNeutralOrEnemyNeighbour = function (q, u) {
    return (
      this.isNeutralOrEnemy(q + t[0], u) ||
      this.isNeutralOrEnemy(q + t[1], u) ||
      this.isNeutralOrEnemy(q + t[2], u) ||
      this.isNeutralOrEnemy(q + t[3], u)
    );
  };
  this.isPlayer = function (q) {
    return 0 != xzu768[q + 3] && xzu768[q + 3] != f;
  };
  this.isThisPlayer = function (q, u) {
    return this.isPlayer(u) && q == this.getPlayerAt(u);
  };
  this.isBorderLand = function (q) {
    return xzu768[q + 3] == l;
  };
  this.zto1271 = function (q) {
    for (var u = 3; 0 <= u; u--) if (this.isOcean(q + t[u])) return !0;
    return !1;
  };
  this.isThisShip = function (q, u) {
    return (
      xzu768[q + 3] == f &&
      u ==
        m[
          zto1304(
            64 * (xzu768[q] - g) +
              8 * (xzu768[q + 1] - g) +
              (xzu768[q + 2] - g),
            b
          )
        ]
    );
  };
  this.isLand = function (q) {
    return 2 != xzu768[q + 2] && 3 != xzu768[q + 2] && xzu768[q + 3] != f;
  };
  this.isOcean = function (q) {
    return 2 == xzu768[q + 2] || xzu768[q + 3] == f;
  };
  this.isTerritorialLand = function (q) {
    return xzu768[q + 3] == h;
  };
  this.isNeutral = function (q) {
    return 1 == xzu768[q + 2];
  };
  this.isOutside = function (q) {
    return 3 == xzu768[q + 2];
  };
  this.isNeutralOrEnemy = function (q, u) {
    return this.isNeutral(q) || (this.isPlayer(q) && u != this.getPlayerAt(q));
  };
  this.getPlayerAt = function (q) {
    return m[zto1304(64 * xzu768[q] + 8 * xzu768[q + 1] + xzu768[q + 2], 36)];
  };
  this.drawNeutralSquare = function (q) {
    a(q, 1);
  };
  this.drawSeaSquare = function (q) {
    a(q, 2);
  };
  this.drawTerritorialSquare = function (q, u) {
    d(q, u, h);
  };
  this.drawBorderSquare = function (q, u) {
    d(q, u, l);
  };
  this.drawAttackSquare = function (q, u) {
    d(q, u, k);
  };
  this.drawShipSquare = function (q, u) {
    xzu768[q] = g + (e[u] >> 6) * b;
    xzu768[q + 1] = g + ((e[u] >> 3) & 7) * b;
    xzu768[q + 2] = g + (e[u] & 7) * b;
    xzu768[q + 3] = f;
    c(q);
  };
  this.rgbToIndex = function (q) {
    return zto1304(64 * q[0] + 8 * q[1] + q[2], 36);
  };
}
function zto1193() {
  function a() {
    for (var f = 0, n = 1; 5 > n; n++) f += m[n] % 1024;
    return f;
  }
  function d() {
    for (var f = 1; f < h - k; f++) m[f] = parseInt(m[f]);
  }
  function c() {
    m[0] = "Player " + Math.floor(1e3 * Math.random());
    m[1] =
      xzu694 < xzu695
        ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1))
        : 0;
    m[2] = 1;
    m[3] = 1;
    m[4] = xzu694 < xzu695 ? 0 : 1;
    m[5] = 0;
    m[6] = "000";
    m[7] = "0";
    m[8] = "0";
    m[9] = "0%0%0%0";
    xzu207.save();
  }
  function b() {
    for (var f = h - k - 1; 0 <= f; f--) m[f] = xzu178.decodeNumberString(m[f]);
    m[0] = xzu178.numberStringToString(m[0]);
  }
  function g(f, n, p) {
    var r = new Date();
    r.setTime(r.getTime() + Math.floor(31536e6 * p));
    f =
      f +
      "=" +
      n +
      ";expires=" +
      r.toUTCString() +
      ";SameSite=Strict;Secure;path=/";
    document.cookie = f;
  }
  var e, m, h, l, k;
  this.init = function () {
    if (!(5 <= xzu705 || xzu702)) {
      k = 4;
      l = 0;
      e = [];
      h = 10;
      for (var f = 0; f < h; f++) e.push("u" + f);
      m = Array(h);
      for (
        var n, p = document.cookie.split(";"), r = p.length - 1;
        0 <= r;
        r--
      ) {
        p[r] = p[r].trim();
        for (f = 2; 0 <= f; f--) p[r] = p[r].replace(" ", "");
        3 < p[r].length &&
          ((f = e.indexOf(p[r].substring(0, 2))),
          (n = p[r].indexOf("=")),
          0 <= f && 2 == n
            ? (m[f] = p[r].substring(n + 1, p[r].length))
            : 0 < n && g(p[r].substring(0, n), "0", 0));
      }
      m[9] || (m[9] = "0");
      a: {
        for (f = h - 1; 0 <= f; f--)
          if (void 0 === m[f]) {
            f = !1;
            break a;
          }
        f = !0;
      }
      f ? ((l = 2), b(), d(), a() != m[5] && c()) : c();
    }
  };
  this.save = function () {
    if (2 == l) {
      m[1] =
        0 == m[1]
          ? Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1))
          : m[1];
      m[5] = a();
      for (var f = 1; f < h - k; f++) m[f] = m[f].toString();
      m[0] = xzu178.stringToNumberString(m[0]);
      for (f = h - k - 1; 0 <= f; f--) m[f] = xzu178.encodeNumberString(m[f]);
      for (f = h - 1; 0 <= f; f--) g(e[f], m[f], 1);
      b();
      d();
    }
  };
  this.accepted = function () {
    return l;
  };
  this.setAccepted = function (f) {
    l = f;
    xzu207.save();
  };
  this.setValue = function (f, n) {
    5 <= xzu705 || xzu702 || (m[f] = n);
  };
  this.getValue = function (f) {
    return 5 <= xzu705 || xzu702 ? 0 : m[f];
  };
}
function zto1204(a) {
  zto1205(a);
  zto1210(a);
  zto1209(a);
  xzu171.clearAttack(a);
  xzu208.clear(a);
}
function zto1205(a) {
  a < xzu146 && xzu149++;
  var d = xzu208.findErasingPlayers(a);
  0 == d.length
    ? a == xzu161 && (xzu191.show(!1, !1), xzu190.moveUp())
    : (zto1206(a, d), zto1208(a, d));
}
function zto1206(a, d) {
  for (var c = d.length - 1; 0 <= c; c--) xzu208.eraseEnemy(d[c], a);
}
function zto1207(a) {
  for (var d = 0, c = a.length - 1; 1 <= c; c--)
    xzu670[a[c]] > xzu670[a[d]] && (d = c);
  return d;
}
function zto1208(a, d) {
  if (a == xzu161)
    xzu181.addState(d[zto1207(d)], 1), xzu191.show(!1, !1), xzu190.moveUp();
  else {
    for (var c = d.length - 1; 0 <= c; c--)
      if (d[c] == xzu161) {
        xzu181.addState(a, 0);
        return;
      }
    a < xzu146 && xzu181.addStateErased(a, d[zto1207(d)]);
  }
}
function zto1209(a) {
  xzu665[a] = xzu672[a] = 0;
  xzu673[a] = null;
  xzu674[a] = null;
  xzu675[a] = null;
  xzu676[a] = null;
}
function zto1210(a) {
  for (var d, c = xzu668[a]; c >= xzu666[a]; c--)
    for (var b = xzu669[a]; b >= xzu667[a]; b--)
      (d = 4 * (b * xzu731 + c)),
        xzu206.isThisPlayer(a, d) && (xzu206.drawNeutralSquare(d), xzu670[a]--);
}
function zto1211() {
  function a(h) {
    return h < xzu146 ? d * h : d * xzu146 + c * (h - xzu146);
  }
  var d, c, b, g, e, m;
  this.init = function () {
    d = 16 > xzu146 ? 12 : 8;
    c = 3;
    var h = a(xzu150);
    b = new Uint16Array(h);
    g = new Uint32Array(h);
    e = new Uint8Array(h);
    m = new Uint16Array(h);
  };
  this.clear = function (h) {
    e[h] = 0;
  };
  this.eraseEnemy = function (h, l) {
    var k;
    a: {
      for (k = e[h] - 1; 0 <= k; k--)
        if (0 == m[a(h) + k] && b[a(h) + k] == l) break a;
      k = e[h];
    }
    if (k != e[h]) {
      var f = g[a(h) + k];
      xzu208.removeIndex(h, k);
      xzu208.add(h, f, xzu150);
    }
  };
  this.exists = function (h, l) {
    for (var k = e[h] - 1; 0 <= k; k--)
      if (0 == m[a(h) + k] && b[a(h) + k] == l) return !0;
    return !1;
  };
  this.isFree = function (h) {
    return h < xzu146 ? e[h] < d : e[h] < c;
  };
  this.getSize = function (h) {
    return e[h];
  };
  this.getEnemy = function (h, l) {
    return b[a(h) + l];
  };
  this.getID = function (h, l) {
    return m[a(h) + l];
  };
  this.getSeaIndex = function (h, l) {
    for (var k = e[h] - 1; 0 <= k; k--) if (m[a(h) + k] == l) return k;
    return -1;
  };
  this.getStrengthAt = function (h, l) {
    for (var k = e[h] - 1; 0 <= k; k--)
      if (0 == m[a(h) + k] && b[a(h) + k] == l) return g[a(h) + k];
    return 0;
  };
  this.getStrength = function (h, l) {
    return g[a(h) + l];
  };
  this.getOverallStrength = function (h) {
    for (var l = 0, k = e[h] - 1; 0 <= k; k--)
      0 == m[a(h) + k] && (l += g[a(h) + k]);
    return l;
  };
  this.setStrengthAt = function (h, l, k) {
    for (var f = e[h] - 1; 0 <= f; f--)
      0 == m[a(h) + f] && b[a(h) + f] == l && (g[a(h) + f] = k);
  };
  this.setStrength = function (h, l, k) {
    g[a(h) + l] = k;
  };
  this.add = function (h, l, k) {
    k == xzu161 && xzu717.values[h < xzu146 ? 6 : 5]++;
    for (var f = e[h] - 1; 0 <= f; f--)
      if (0 == m[a(h) + f] && b[a(h) + f] == k) {
        g[a(h) + f] += l;
        g[a(h) + f] = g[a(h) + f] > xzu156 ? xzu156 : g[a(h) + f];
        return;
      }
    b[a(h) + e[h]] = k;
    g[a(h) + e[h]] = l;
    m[a(h) + e[h]] = 0;
    e[h]++;
    k == xzu161 && h < xzu146 && xzu181.addState(h, 5);
  };
  this.addShip = function (h, l, k) {
    xzu665[h] = 2;
    b[a(h) + e[h]] = 0;
    g[a(h) + e[h]] = l;
    m[a(h) + e[h]] = k;
    e[h]++;
  };
  this.removeIndex = function (h, l) {
    if (0 != e[h]) {
      e[h]--;
      for (var k = l; k < e[h]; k++)
        (b[a(h) + k] = b[a(h) + k + 1]),
          (g[a(h) + k] = g[a(h) + k + 1]),
          (m[a(h) + k] = m[a(h) + k + 1]);
    }
  };
  this.findErasingPlayers = function (h) {
    for (var l = [], k = xzu679 - 1; 0 <= k; k--)
      for (var f = e[xzu678[k]] - 1; 0 <= f; f--)
        if (0 == m[a(xzu678[k]) + f] && b[a(xzu678[k]) + f] == h) {
          l.push(xzu678[k]);
          break;
        }
    return l;
  };
}
function zto1214() {
  var a, d, c, b, g, e;
  this.init = function () {
    b = c = d = a = 10;
  };
  this.setArray = function () {
    e = 512;
    g = new Uint16Array(e);
    for (var m = 0; m < e; m++)
      g[m] = 100 + zto1308(zto1304(25600 * m, e - 4), 9);
  };
  this.getTimer = function () {
    return b;
  };
  this.calculate = function () {
    if (0 >= --c) {
      c = a;
      for (var m = xzu672[xzu161], h = xzu679 - 1; 0 <= h; h--) {
        var l = zto1304(
          xzu209.getPlayerInterest(xzu678[h]) * xzu672[xzu678[h]],
          1e4
        );
        xzu672[xzu678[h]] += 1 > l ? 1 : l;
        xzu209.validateBalance(xzu678[h]);
      }
      xzu717.values[9] += xzu672[xzu161] - m;
      if (0 >= --b) {
        b = d;
        m = xzu672[xzu161];
        for (h = xzu679 - 1; 0 <= h; h--)
          (xzu672[xzu678[h]] += xzu670[xzu678[h]]),
            xzu209.validateBalance(xzu678[h]);
        xzu152 &&
          0 != xzu665[0] &&
          2 > xzu170.getIStrength() &&
          ((xzu672[0] += zto1304(
            2 * (4 - xzu170.getIStrength()) * xzu670[0],
            5
          )),
          xzu209.validateBalance(0));
        xzu717.values[8] += xzu672[xzu161] - m;
      }
    }
  };
  this.getPlayerInterest = function (m) {
    var h = g[zto1304((e - 1) * xzu670[m], xzu155)];
    if (2048 > xzu720.getCalculations()) {
      var l = zto1304(100 * (12288 - 5 * xzu720.getCalculations()), 2048);
      h = l > h ? l : h;
    }
    l = this.getMaxInterest(m);
    xzu672[m] > l && (h -= zto1304(h * (xzu672[m] - l), l));
    return 0 > h ? 0 : 600 < h ? 600 : h;
  };
  this.getMaxInterest = function (m) {
    m = 100 * xzu670[m];
    return m > xzu157 ? xzu157 : m;
  };
  this.validateBalance = function (m) {
    var h = 200 * xzu670[m];
    xzu672[m] = xzu672[m] > xzu156 ? xzu156 : xzu672[m] > h ? h : xzu672[m];
  };
}
function zto1219() {
  function a() {
    Q.width = xzu697;
    Q.height = xzu698;
    K = Q.getContext("2d", { alpha: !0 });
    K.textAlign = xzu329;
    K.textBaseline = xzu326;
    K.imageSmoothingEnabled = !0;
  }
  function d() {
    S = !1;
    O = 1;
    C = I = 0;
    K.clearRect(0, 0, xzu697, xzu698);
    for (
      var A = xzu394 / xzu393,
        G = xzu395 / xzu393,
        D = (xzu697 + xzu394) / xzu393,
        F = (xzu698 + xzu395) / xzu393,
        H,
        M,
        J,
        N,
        U,
        Z = xzu679 - 1;
      0 <= Z;
      Z--
    )
      if (
        ((J = xzu442[Z]),
        (N = Math.floor(x * xzu393 * q[J] * r[J])),
        !(N < w || N >= y) &&
          n[J] + r[J] >= A &&
          n[J] <= D &&
          p[J] + t[J] >= G &&
          p[J] <= F)
      ) {
        H = Math.floor((xzu697 * (n[J] + r[J] / 2 - A)) / (D - A));
        M = Math.floor((xzu698 * (p[J] + t[J] / 2 - G)) / (F - G) - 0.1 * N);
        K.font = xzu338[xzu677[J]] + N + xzu336;
        U = K;
        var Y = N;
        var X = J;
        var W = X;
        W =
          1200 >
          g(
            xzu206.coordToPoint(
              n[W] + Math.floor(r[W] / 3),
              p[W] + Math.floor(t[W] / 2)
            )
          ) +
            g(
              xzu206.coordToPoint(
                n[W] + Math.floor((2 * r[W]) / 3),
                p[W] + Math.floor(t[W] / 2)
              )
            )
            ? 1
            : 0;
        X = xzu152
          ? xzu166
            ? W + (X % 2) * 2
            : 4 + W
          : !xzu166 || X >= xzu146
          ? 4 + W
          : W + 2 * xzu721.ids[X];
        Y =
          Y >= v && Y < y
            ? "rgba(" +
              P[3 * X] +
              "," +
              P[3 * X + 1] +
              "," +
              P[3 * X + 2] +
              "," +
              e(Y) +
              ")"
            : xzu325[X];
        U.fillStyle = Y;
        K.fillText(xzu664[J], H, M);
        S = !0;
        if (J < xzu146 && 0 < R[J])
          if (0 == xzu443[J])
            if (xzu715.isFlag(T[J])) {
              U = H;
              Y = N;
              X = J;
              W = (0.9 * Y) / xzu715.w;
              var ca = Math.floor(M - 0.5 * W * xzu715.w - 0.05 * Y);
              K.globalAlpha = e(Y);
              for (
                var aa = Math.floor(
                    U - (0.5 * Y) / u[X] - 0.4 * Y - W * xzu715.w
                  ),
                  ba = 0;
                2 > ba;
                ba++
              )
                K.setTransform(W, 0, 0, W, aa, ca),
                  K.drawImage(xzu715.cvs[T[X]], 0, 0),
                  (aa = Math.floor(U + (0.5 * Y) / u[X] + 0.4 * Y));
              K.globalAlpha = 1;
              K.setTransform(1, 0, 0, 1, 0, 0);
              c(H, M, N, 0, 0);
            } else
              xzu715.isCrownable(T[J])
                ? (b(H, M, N, J, 0), c(H, M, N, 0, 1))
                : (b(H, M, N, J, 1), c(H, M, N, 1, 0));
          else b(H, M, N, J, 0);
        else 0 == xzu443[J] && c(H, M, N, 0, 0);
        U = Math.floor(z * N);
        U < w ||
          ((K.font = xzu332 + U + xzu336),
          K.fillText(
            xzu183.createString(xzu672[J]),
            H,
            M + Math.floor(0.78 * N)
          ));
      }
  }
  function c(A, G, D, F, H) {
    var M = (0.95 * D) / L;
    K.setTransform(
      M,
      0,
      0,
      M,
      Math.floor(A - 0.5 * M * E + 0.8 * F * D),
      Math.floor(G - 1.76 * M * L - 0.82 * H * D)
    );
    K.globalAlpha = e(D);
    K.drawImage(xzu205.get(4), 0, 0);
    K.globalAlpha = 1;
    K.setTransform(1, 0, 0, 1, 0, 0);
  }
  function b(A, G, D, F, H) {
    var M = (1.2 * D) / xzu715.w;
    K.setTransform(
      M,
      0,
      0,
      M,
      Math.floor(A - 0.5 * M * xzu715.w - 0.8 * H * D),
      Math.floor(G - 1.5 * M * xzu715.w)
    );
    K.globalAlpha = e(D);
    K.drawImage(xzu715.cvs[T[F]], 0, 0);
    K.globalAlpha = 1;
    K.setTransform(1, 0, 0, 1, 0, 0);
  }
  function g(A) {
    return (
      xzu736[A] +
      xzu768[A] +
      xzu736[A + 1] +
      xzu768[A + 1] +
      xzu736[A + 2] +
      xzu768[A + 2]
    );
  }
  function e(A) {
    return A >= v && A < y ? 1 - (A - v) / (y - v) : 1;
  }
  function m(A) {
    var G,
      D = n[A];
    for (G = n[A] - xzu666[A] - 1; 0 <= G; G--)
      if ((D--, !l(A, D, p[A], t[A]))) {
        D++;
        break;
      }
    var F = n[A];
    for (G = xzu668[A] - n[A] - r[A]; 0 <= G; G--)
      if ((F++, !l(A, F + r[A] - 1, p[A], t[A]))) {
        F--;
        break;
      }
    D = Math.floor((D + F) / 2);
    F = p[A];
    for (G = p[A] - xzu667[A] - 1; 0 <= G; G--)
      if ((F--, !k(A, D, F, r[A]))) {
        F++;
        break;
      }
    var H = p[A];
    for (G = xzu669[A] - p[A] - t[A]; 0 <= G; G--)
      if ((H++, !k(A, D, H + t[A] - 1, r[A]))) {
        H--;
        break;
      }
    G = Math.floor((F + H) / 2);
    h(A, D, G, r[A], t[A]) && ((n[A] = D), (p[A] = G));
  }
  function h(A, G, D, F, H) {
    var M;
    for (M = G + F - 1; M >= G; M--) if (!l(A, M, D, H)) return !1;
    var J = Math.floor(0.25 * H);
    J = 1 > J ? 1 : J;
    for (M = D + H - 1 - J; M >= D + J; M--) if (!k(A, G, M, F)) return !1;
    return !0;
  }
  function l(A, G, D, F) {
    return (
      xzu206.isThisPlayer(A, 4 * (D * xzu731 + G)) &&
      xzu206.isThisPlayer(A, 4 * ((D + F - 1) * xzu731 + G))
    );
  }
  function k(A, G, D, F) {
    return (
      xzu206.isThisPlayer(A, 4 * (D * xzu731 + G)) &&
      xzu206.isThisPlayer(A, 4 * (D * xzu731 + G + F - 1))
    );
  }
  var f, n, p, r, t, q, u, y, v, z, B, w, x, C, I, O, S, Q, K, V, R, T, E, L, P;
  this.init = function () {
    P = new Uint8Array(18);
    P[0] = 128;
    P[1] = 16;
    P[2] = 16;
    P[3] = 255;
    P[4] = 128;
    P[5] = 128;
    P[6] = 16;
    P[7] = 16;
    P[8] = 128;
    P[9] = 160;
    P[10] = 160;
    P[11] = 255;
    P[12] = 0;
    P[13] = 0;
    P[14] = 0;
    P[15] = 255;
    P[16] = 255;
    P[17] = 255;
    S = !1;
    x = 0.88;
    z = 0.5;
    B = 1.8;
    y = Math.floor(0.5 * xzu696);
    v = Math.floor(0.2 * y);
    w = 4 >= xzu713 ? 9 : 7 >= xzu713 ? 8 : 7;
    f = 0;
    n = new Uint16Array(xzu150);
    p = new Uint16Array(xzu150);
    r = new Uint16Array(xzu150);
    t = new Uint16Array(xzu150);
    q = new Float32Array(xzu150);
    u = new Float32Array(xzu150);
    R = new Uint8Array(xzu146);
    T = new Uint8Array(xzu146);
    Q = document.createElement("canvas");
    a();
    I = C = 0;
    O = 1;
    V = 0;
    var A;
    K.font = xzu332 + Math.floor(100 * z) + xzu336;
    var G = 80 / Math.floor(K.measureText(xzu183.createString(xzu156)).width);
    K.font = xzu332 + 100 + xzu336;
    for (A = xzu150 - 1; 0 <= A; A--)
      (u[A] = 100 / Math.floor(K.measureText(xzu664[A]).width)),
        (q[A] = G < u[A] ? G : u[A]),
        12 > xzu670[A]
          ? ((n[A] = xzu666[A] + 1),
            (p[A] = xzu667[A] + 1),
            (r[A] = 1),
            (t[A] = 1))
          : ((n[A] = xzu666[A]),
            (p[A] = xzu667[A] + 1),
            (r[A] = 4),
            (t[A] = 2));
    if (xzu164) for (A = 0; A < xzu146; A++) r[A] = 0;
    E = xzu205.get(4).width;
    L = xzu205.get(4).height;
  };
  this.zto1324 = function () {
    a();
    d();
  };
  this.endFreePositioning = function () {
    for (var A = (V = 0); A < xzu146; A++)
      3 != xzu668[A] - xzu666[A] || 3 != xzu669[A] - xzu667[A]
        ? ((n[A] = xzu666[A] + (xzu668[A] != xzu666[A] ? 1 : 0)),
          (p[A] = xzu667[A]),
          (r[A] = 1),
          (t[A] = 1))
        : ((n[A] = xzu666[A]), (p[A] = xzu667[A] + 1), (r[A] = 4), (t[A] = 2));
  };
  this.switchEmoji = function (A, G) {
    0 != xzu665[A] &&
      ((G %= xzu715.nAll),
      T[A] == G && 0 < R[A]
        ? (R[A] = 0)
        : ((T[A] = G), (R[A] = A < xzu146 && xzu715.isFlag(G) ? 255 : 254)));
  };
  this.draw = function () {
    S &&
      (1 != O
        ? ((xzu690.imageSmoothingEnabled = !0),
          xzu690.setTransform(O, 0, 0, O, 0, 0),
          xzu690.drawImage(Q, -C / O, -I / O),
          xzu690.setTransform(1, 0, 0, 1, 0, 0))
        : ((xzu690.imageSmoothingEnabled = !1), xzu690.drawImage(Q, -C, -I)));
  };
  this.resetCoords = function (A, G) {
    C += A;
    I += G;
  };
  this.mouseMove = function (A, G) {
    xzu210.resetCoords(A, G);
  };
  this.zoom = function (A, G, D) {
    O *= A;
    C = (C + G) * A - G;
    I = (I + D) * A - D;
  };
  this.repaint = function () {
    return 0 >= --V
      ? ((V = 4 >= xzu713 ? 10 : 12 > xzu713 ? 5 : 2), d(), !0)
      : !1;
  };
  this.calculate = function () {
    if (2 != xzu154)
      for (var A = xzu146 - 1; 0 <= A; A--) 0 < R[A] && 255 > R[A] && R[A]--;
    A = Math.floor(0.05 * xzu679);
    A = 8 > A ? 8 : A;
    A = A > xzu679 ? xzu679 : A;
    for (var G, D = f + A - 1; D >= f; D--)
      if (
        ((G = D % xzu679),
        (G = xzu678[G]),
        0 < r[G] && h(G, n[G], p[G], r[G], t[G]))
      ) {
        for (var F, H, M, J, N = G, U = !1, Z = 0; 8 > Z; Z++) {
          H = r[N] + 2;
          F = t[N] + 2;
          if (H > xzu668[N] - xzu666[N] + 1 || F > xzu669[N] - xzu667[N] + 1)
            break;
          J = n[N] - 1;
          M = p[N] - 1;
          if (h(N, J, M, H, F))
            (n[N] = J), (p[N] = M), (r[N] = H), (t[N] = F), (U = !0);
          else break;
        }
        if ((F = !U)) {
          N = G;
          U = !1;
          Z = r[N];
          for (var Y = 1 + Math.floor(0.02 * Z), X = 1; 5 > X; X++) {
            H = Z + X * Y;
            if (H > xzu668[N] - xzu666[N] + 1) break;
            F = 1 + Math.floor(B * q[N] * H);
            if (F > xzu669[N] - xzu667[N] + 1) break;
            J =
              xzu666[N] +
              Math.floor(Math.random() * (xzu668[N] - xzu666[N] + 2 - H));
            M =
              xzu667[N] +
              Math.floor(Math.random() * (xzu669[N] - xzu667[N] + 2 - F));
            h(N, J, M, H, F) &&
              ((n[N] = J), (p[N] = M), (r[N] = H), (t[N] = F), (U = !0));
          }
          F = U;
        }
        F && m(G);
      } else {
        a: {
          H = G;
          M = n[H] + 1;
          J = p[H] + 1;
          for (N = r[H] - 2; ; ) {
            if (1 > N) {
              r[H] = 0;
              break;
            }
            F = 1 + Math.floor(B * q[H] * N);
            if (h(H, M, J, N, F)) {
              n[H] = M;
              p[H] = J;
              r[H] = N;
              t[H] = F;
              F = !0;
              break a;
            }
            M++;
            J++;
            N -= 2;
          }
          F = !1;
        }
        if (F) m(G);
        else
          for (J = G, N = 6; -8 <= N; N--)
            if (
              ((F = 0 < N ? N : 1),
              (G = 1 + Math.floor(B * q[J] * F)),
              !(
                F > xzu668[J] - xzu666[J] + 1 || G > xzu669[J] - xzu667[J] + 1
              ) &&
                ((M =
                  xzu666[J] +
                  Math.floor(Math.random() * (xzu668[J] - xzu666[J] + 2 - F))),
                (H =
                  xzu667[J] +
                  Math.floor(Math.random() * (xzu669[J] - xzu667[J] + 2 - G))),
                h(J, M, H, F, G)))
            ) {
              n[J] = M;
              p[J] = H;
              r[J] = F;
              t[J] = G;
              break;
            }
      }
    f += A;
    f %= xzu679;
  };
}
function zto1241() {
  var a, d, c;
  this.init = function () {
    d = "[Bot] ";
    a =
      "Afghanistan;Albania;Algeria;Andorra;Angola;Antigua and Barbuda;Argentina;Armenia;Australia;Austria;Azerbaijan;The Bahamas;Bahrain;Bangladesh;Barbados;Belarus;Belgium;Belize;Benin;Bhutan;Bolivia;Bosnia and Herzegovina;Botswana;Brazil;Brunei;Bulgaria;Burkina Faso;Burundi;C\u00f4te d'Ivoire;Cape Verde;Cambodia;Cameroon;Canada;Central African Republic;Chad;Chile;China;Colombia;Comoros;Republic of the Congo;Costa Rica;Croatia;Cuba;Cyprus;Czechia;Denmark;Djibouti;Dominica;Dominican Republic;DRC;East Timor;Ecuador;Egypt;El Salvador;Equatorial Guinea;Eritrea;Estonia;Eswatini;Ethiopia;Fiji;Finland;France;Gabon;The Gambia;Georgia;Germany;Ghana;Greece;Grenada;Guatemala;Guinea;Guinea-Bissau;Guyana;Haiti;Vatican City;Honduras;Hungary;Iceland;India;Indonesia;Iran;Iraq;Ireland;Israel;Italy;Jamaica;Japan;Jordan;Kazakhstan;Kenya;Kiribati;Kuwait;Kyrgyzstan;Laos;Latvia;Lebanon;Lesotho;Liberia;Libya;Liechtenstein;Lithuania;Luxembourg;Madagascar;Malawi;Malaysia;Maldives;Mali;Malta;Marshall Islands;Mauritania;Mauritius;Mexico;Micronesia;Moldova;Monaco;Mongolia;Montenegro;Morocco;Mozambique;Myanmar;Namibia;Nauru;Nepal;Netherlands;New Zealand;Nicaragua;Niger;Nigeria;North Korea;North Macedonia;Norway;Oman;Pakistan;Palau;Palestine;Panama;Papua New Guinea;Paraguay;Peru;Philippines;Poland;Portugal;Qatar;Romania;Russia;Rwanda;Saint Kitts and Nevis;Saint Lucia;Saint Vincent;Samoa;San Marino;S\u00e3o Tom\u00e9 and Pr\u00edncipe;Saudi Arabia;Senegal;Serbia;Seychelles;Sierra Leone;Singapore;Slovakia;Slovenia;Solomon Islands;Somalia;South Africa;South Korea;South Sudan;Spain;Sri Lanka;Sudan;Suriname;Sweden;Switzerland;Syria;Tajikistan;Tanzania;Thailand;Togo;Tonga;Trinidad and Tobago;Tunisia;Turkey;Turkmenistan;Tuvalu;Uganda;Ukraine;United Arab Emirates;United Kingdom;United States;Uruguay;Uzbekistan;Vanuatu;Venezuela;Vietnam;Yemen;Zambia;Zimbabwe;Taiwan".split(
        ";"
      );
    c = Array(4);
    c[0] = Array(47);
    var b = 0;
    c[0][b++] = [61, 651017];
    c[0][b++] = [65, 507759];
    c[0][b++] = [140, 489294];
    c[0][b++] = [144, 235424];
    c[0][b++] = [165, 854854];
    c[0][b++] = [185, 364083];
    c[0][b++] = [45, 330505];
    c[0][b++] = [123, 447023];
    c[0][b++] = [16, 500625];
    c[0][b++] = [44, 541657];
    c[0][b++] = [9, 639602];
    c[0][b++] = [170, 667430];
    c[0][b++] = [84, 852937];
    c[0][b++] = [82, 346502];
    c[0][b++] = [141, 873377];
    c[0][b++] = [169, 184899];
    c[0][b++] = [158, 579075];
    c[0][b++] = [76, 665359];
    c[0][b++] = [159, 707233];
    c[0][b++] = [41, 752722];
    c[0][b++] = [21, 788929];
    c[0][b++] = [154, 763336];
    c[0][b++] = [116, 840267];
    c[0][b++] = [129, 885799];
    c[0][b++] = [1, 906755];
    c[0][b++] = [67, 983769];
    c[0][b++] = [25, 845078];
    c[0][b++] = [179, 924567];
    c[0][b++] = [143, 682991];
    c[0][b++] = [113, 645774];
    c[0][b++] = [183, 563097];
    c[0][b++] = [100, 322621];
    c[0][b++] = [94, 263172];
    c[0][b++] = [56, 183880];
    c[0][b++] = [15, 371702];
    c[0][b++] = [60, 54446];
    c[0][b++] = [130, 108974];
    c[0][b++] = [3, 821171];
    c[0][b++] = [99, 662803];
    c[0][b++] = [101, 546122];
    c[0][b++] = [43, 1069192];
    c[0][b++] = [150, 795790];
    c[0][b++] = [114, 789836];
    c[0][b++] = [74, 876242];
    c[0][b++] = [178, 1100034];
    c[0][b++] = [2, 1060214];
    c[0][b++] = [117, 1090282];
    c[1] = Array(146);
    b = 0;
    c[1][b++] = [186, 277419];
    c[1][b++] = [36, 323204];
    c[1][b++] = [144, 159005];
    c[1][b++] = [78, 423229];
    c[1][b++] = [185, 199456];
    c[1][b++] = [61, 234295];
    c[1][b++] = [23, 606978];
    c[1][b++] = [65, 211106];
    c[1][b++] = [8, 706406];
    c[1][b++] = [86, 304471];
    c[1][b++] = [127, 480986];
    c[1][b++] = [84, 273521];
    c[1][b++] = [165, 276347];
    c[1][b++] = [111, 378965];
    c[1][b++] = [32, 184581];
    c[1][b++] = [157, 524908];
    c[1][b++] = [83, 321486];
    c[1][b++] = [80, 328827];
    c[1][b++] = [179, 285195];
    c[1][b++] = [142, 382489];
    c[1][b++] = [163, 305882];
    c[1][b++] = [79, 551072];
    c[1][b++] = [123, 205283];
    c[1][b++] = [170, 234319];
    c[1][b++] = [152, 385365];
    c[1][b++] = [195, 387127];
    c[1][b++] = [140, 206777];
    c[1][b++] = [169, 155982];
    c[1][b++] = [174, 439287];
    c[1][b++] = [16, 212534];
    c[1][b++] = [9, 229982];
    c[1][b++] = [82, 193630];
    c[1][b++] = [6, 783960];
    c[1][b++] = [139, 491627];
    c[1][b++] = [130, 144354];
    c[1][b++] = [52, 360635];
    c[1][b++] = [184, 383957];
    c[1][b++] = [191, 465435];
    c[1][b++] = [45, 174828];
    c[1][b++] = [104, 514747];
    c[1][b++] = [13, 381200];
    c[1][b++] = [35, 699770];
    c[1][b++] = [20, 656259];
    c[1][b++] = [138, 614136];
    c[1][b++] = [37, 500954];
    c[1][b++] = [190, 487928];
    c[1][b++] = [135, 486417];
    c[1][b++] = [42, 403733];
    c[1][b++] = [2, 341664];
    c[1][b++] = [98, 351863];
    c[1][b++] = [126, 434556];
    c[1][b++] = [4, 620317];
    c[1][b++] = [102, 692983];
    c[1][b++] = [162, 743679];
    c[1][b++] = [58, 486914];
    c[1][b++] = [161, 475351];
    c[1][b++] = [166, 494345];
    c[1][b++] = [77, 123954];
    c[1][b++] = [124, 800848];
    c[1][b++] = [128, 282652];
    c[1][b++] = [141, 283584];
    c[1][b++] = [60, 137151];
    c[1][b++] = [73, 415359];
    c[1][b++] = [48, 415365];
    c[1][b++] = [5, 425561];
    c[1][b++] = [85, 419690];
    c[1][b++] = [11, 374710];
    c[1][b++] = [69, 437049];
    c[1][b++] = [17, 426897];
    c[1][b++] = [53, 450112];
    c[1][b++] = [75, 442867];
    c[1][b++] = [125, 454480];
    c[1][b++] = [40, 471894];
    c[1][b++] = [72, 509727];
    c[1][b++] = [168, 514092];
    c[1][b++] = [51, 550271];
    c[1][b++] = [137, 683854];
    c[1][b++] = [187, 756420];
    c[1][b++] = [59, 658702];
    c[1][b++] = [160, 597687];
    c[1][b++] = [117, 325675];
    c[1][b++] = [178, 311224];
    c[1][b++] = [109, 418512];
    c[1][b++] = [106, 415648];
    c[1][b++] = [34, 425882];
    c[1][b++] = [167, 428841];
    c[1][b++] = [55, 443386];
    c[1][b++] = [46, 462263];
    c[1][b++] = [153, 441714];
    c[1][b++] = [63, 450414];
    c[1][b++] = [71, 462026];
    c[1][b++] = [70, 467841];
    c[1][b++] = [156, 483805];
    c[1][b++] = [97, 493968];
    c[1][b++] = [28, 488182];
    c[1][b++] = [26, 469332];
    c[1][b++] = [66, 491101];
    c[1][b++] = [175, 496913];
    c[1][b++] = [18, 479505];
    c[1][b++] = [31, 502769];
    c[1][b++] = [33, 502803];
    c[1][b++] = [164, 495585];
    c[1][b++] = [89, 530443];
    c[1][b++] = [182, 527516];
    c[1][b++] = [49, 546346];
    c[1][b++] = [39, 546308];
    c[1][b++] = [62, 547747];
    c[1][b++] = [54, 533232];
    c[1][b++] = [193, 630513];
    c[1][b++] = [173, 581215];
    c[1][b++] = [27, 562331];
    c[1][b++] = [145, 555076];
    c[1][b++] = [103, 629091];
    c[1][b++] = [118, 668269];
    c[1][b++] = [194, 671152];
    c[1][b++] = [22, 689993];
    c[1][b++] = [120, 684158];
    c[1][b++] = [96, 737888];
    c[1][b++] = [57, 713237];
    c[1][b++] = [151, 536118];
    c[1][b++] = [44, 216925];
    c[1][b++] = [158, 222742];
    c[1][b++] = [76, 232905];
    c[1][b++] = [159, 238689];
    c[1][b++] = [41, 241595];
    c[1][b++] = [21, 251763];
    c[1][b++] = [154, 250325];
    c[1][b++] = [116, 260477];
    c[1][b++] = [129, 263387];
    c[1][b++] = [1, 269185];
    c[1][b++] = [67, 277897];
    c[1][b++] = [25, 259051];
    c[1][b++] = [143, 241633];
    c[1][b++] = [113, 230035];
    c[1][b++] = [183, 216997];
    c[1][b++] = [100, 180681];
    c[1][b++] = [94, 169079];
    c[1][b++] = [56, 160373];
    c[1][b++] = [15, 186502];
    c[1][b++] = [3, 260409];
    c[1][b++] = [99, 231423];
    c[1][b++] = [101, 213995];
    c[1][b++] = [43, 311316];
    c[1][b++] = [150, 253193];
    c[1][b++] = [114, 250273];
    c[1][b++] = [74, 267705];
    c[2] = Array(29);
    b = 0;
    c[2][b++] = [144, 308644];
    c[2][b++] = [9, 16915];
    c[2][b++] = [158, 20904];
    c[2][b++] = [76, 85896];
    c[2][b++] = [159, 91004];
    c[2][b++] = [41, 171619];
    c[2][b++] = [21, 266521];
    c[2][b++] = [154, 323832];
    c[2][b++] = [116, 360137];
    c[2][b++] = [129, 460300];
    c[2][b++] = [1, 487542];
    c[2][b++] = [67, 694345];
    c[2][b++] = [25, 439642];
    c[2][b++] = [179, 633575];
    c[2][b++] = [143, 249856];
    c[2][b++] = [113, 153760];
    c[2][b++] = [183, 120179];
    c[2][b++] = [43, 940379];
    c[2][b++] = [98, 967236];
    c[2][b++] = [80, 868274];
    c[2][b++] = [88, 168827];
    c[2][b++] = [188, 305491];
    c[2][b++] = [180, 592707];
    c[2][b++] = [10, 591300];
    c[2][b++] = [7, 628811];
    c[2][b++] = [64, 537811];
    c[2][b++] = [81, 875793];
    c[2][b++] = [171, 878124];
    c[2][b++] = [95, 966486];
    c[3] = [];
  };
  this.create = function () {
    var b = xzu146,
      g = a.length,
      e = xzu146 + g;
    if (!zto1265(xzu737)) {
      e = xzu737 - zto1263();
      var m = c[e].length + xzu146;
      m = m > xzu150 ? xzu150 : m;
      for (b = xzu146; b < m; b++) xzu664[b] = d + a[c[e][b - xzu146][0]];
      e = b = m;
    }
    for (m = xzu219.random() % g; b < xzu150; b++)
      xzu664[b] =
        b < e
          ? d + a[(b + m) % g]
          : "Bot " + zto1304(1e3 * xzu219.random(), xzu219.value(100));
  };
  this.get = function () {
    return c;
  };
}
function zto1243() {
  var a, d, c;
  this.reset = function () {
    a = new Date();
    d = !1;
    c = 12e3;
  };
  this.setActive = function () {
    d = !0;
  };
  this.check = function () {
    new Date().getTime() > a.getTime() + c &&
      (xzu226.wrapPingPong(d), this.reset());
  };
}
var xzu664,
  xzu665,
  xzu666,
  xzu667,
  xzu668,
  xzu669,
  xzu670,
  xzu671,
  xzu672,
  xzu673,
  xzu674,
  xzu675,
  xzu676,
  xzu677;
function zto1244(a) {
  xzu664 = Array(xzu150);
  xzu665 = new Uint8Array(xzu150);
  xzu666 = new Uint16Array(xzu150);
  xzu667 = new Uint16Array(xzu150);
  xzu668 = new Uint16Array(xzu150);
  xzu669 = new Uint16Array(xzu150);
  xzu670 = new Uint32Array(xzu150);
  xzu671 = new Uint32Array(xzu150);
  xzu672 = new Uint32Array(xzu150);
  xzu673 = Array(xzu150);
  xzu674 = Array(xzu150);
  xzu675 = Array(xzu150);
  xzu676 = Array(xzu150);
  xzu677 = new Uint8Array(xzu150);
  for (var d = a.length - 1; 0 <= d; d--)
    (xzu664[d] = a[d].name), (xzu677[d] = a[d].idColor);
}
var xzu678, xzu679;
function zto1245() {
  var a;
  xzu679 = 0;
  for (a = xzu150 - 1; 0 <= a; a--) 0 != xzu665[a] && xzu679++;
  xzu678 = new Uint16Array(xzu679);
  var d = 0;
  for (a = 0; a < xzu150; a++) 0 != xzu665[a] && (xzu678[d++] = a);
}
function zto1246() {
  zto1249();
  zto1247();
}
function zto1247() {
  for (var a = xzu679 - 1; 0 <= a; a--) 0 == xzu665[xzu678[a]] && zto1248(a);
}
function zto1248(a) {
  for (xzu679--; a < xzu679; a++) xzu678[a] = xzu678[a + 1];
}
function zto1249() {
  for (var a, d = xzu679 - 1; 0 <= d; d--)
    xzu670[xzu678[d]] <= zto1304(xzu671[xzu678[d]], 4)
      ? 1e3 >= xzu670[xzu678[d]] &&
        (2 != xzu665[xzu678[d]] || 0 == xzu670[xzu678[d]]) &&
        zto1204(xzu678[d])
      : xzu670[xzu678[d]] >= xzu671[xzu678[d]]
      ? (xzu671[xzu678[d]] = xzu670[xzu678[d]])
      : ((a = zto1304(xzu671[xzu678[d]] - xzu670[xzu678[d]], 1e3)),
        (xzu671[xzu678[d]] -= 1 > a ? 1 : a));
}
var xzu680, xzu681;
function zto1250() {
  function a() {
    if (xzu679 > zto1304(7 * xzu150, 8)) return !0;
    var k = zto1304(xzu670[xzu442[0]], m),
      f = !1;
    e = -1;
    for (var n = b - 1; 0 <= n; n--)
      c[n] != xzu670[xzu442[n]] &&
        (xzu670[xzu442[n]] > k && xzu670[xzu442[n]] > c[n] && (e = xzu442[n]),
        (c[n] = xzu670[xzu442[n]]),
        (f = f || c[n] >= k));
    return f && -1 != e;
  }
  var d, c, b, g, e, m, h, l;
  this.init = function () {
    xzu680 = 1e5;
    b = d = 10;
    xzu681 = g = 0;
    e = -1;
    c = new Uint32Array(b);
    m = xzu166 ? 5 : 4;
    h = xzu163 ? 10 : 60;
    l = xzu163 ? 0 : xzu166 ? 25 : 45;
  };
  this.calculate = function () {
    0 == --d &&
      ((d = 10),
      a() ? (g = 0) : 3 == ++g && xzu181.addState(0, 8),
      (xzu680 -= l),
      (xzu680 = 0 > xzu680 ? 0 : xzu680));
    3 <= g && 10 != d && a() && (g = 0);
    3 > g
      ? ((xzu681 = 0 < xzu681 ? -1 : 0),
        -1 == xzu681 &&
          (xzu181.removeState(8),
          -1 != e && (xzu181.addState(e, 19), (e = -1))))
      : ((xzu681 += h), (xzu681 = 1e4 < xzu681 ? 1e4 : xzu681));
  };
}
var xzu689,
  xzu690,
  xzu691,
  xzu692,
  xzu693,
  xzu694,
  xzu695,
  xzu696,
  xzu697,
  xzu698,
  xzu699,
  xzu700,
  xzu701,
  xzu702,
  xzu703,
  xzu704,
  xzu705,
  xzu706,
  xzu707 = !1,
  xzu708,
  xzu709,
  xzu710,
  xzu711,
  xzu712,
  xzu713,
  xzu714,
  xzu715,
  xzu716,
  xzu717,
  xzu718,
  xzu719,
  xzu720,
  xzu721,
  xzu722,
  xzu723,
  xzu724,
  xzu725,
  xzu726,
  xzu727,
  xzu728;
function zto1255() {
  zto980();
  zto914();
  xzu700 = xzu699 = !1;
  xzu693 = 6321;
  xzu691 = "No Clutter 0.3 - By Olirules10";
  xzu705 = (xzu704 = "undefined" !== typeof Android ? Android : null)
    ? xzu704.getVersion()
    : 0;
  12 <= xzu705 && xzu704.prepareAd("6685097465");
  xzu702 = !1;
  window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.iosCommandA &&
    ((xzu702 = !0),
    window.webkit.messageHandlers.iosCommandA.postMessage(
      "prepare ad 5907904081"
    ),
    (xzu703 =
      "undefined" !== typeof mwIOSdataX
        ? mwIOSdataX
        : {
            username: "iOS User " + Math.floor(1e3 * Math.random()),
            id: Math.floor(1 + Math.random() * (Math.pow(2, 30) - 1)),
            zoom: !0,
            sound: !0,
            emojis: "0",
            colors: "0",
            password: "0%0%0%0",
            freeSpawn: !1,
            unlimitedTime: !1,
            alliances: !1,
          }));
  xzu692 = "Server Location: Europe";
  xzu708 = zto1256();
  xzu227.init();
  zto1261();
  xzu207.init();
  zto865();
  zto868();
  document.addEventListener
    ? document.addEventListener(
        "contextmenu",
        function (a) {
          a.preventDefault();
        },
        !1
      )
    : document.attachEvent("oncontextmenu", function () {
        window.event.returnValue = !1;
      });
  zto1260();
  document.addEventListener("keyup", zto1259);
  document.addEventListener("keydown", zto1258);
  window.addEventListener("error", zto1257, !0);
  xzu713 = 0;
  xzu741 = new zto1267();
  xzu711 = new zto1381();
  xzu712 = new zto1319();
  xzu712.calculate();
  xzu714 = new zto1101();
  xzu715 = new zto1006();
  xzu716 = new zto1345();
  xzu717 = new zto1347();
  xzu718 = new zto1348();
  xzu719 = new zto1001();
  xzu720 = new zto1359();
  xzu720.initMainMenu();
  xzu720.init();
  xzu721 = new zto1349();
  xzu722 = new zto1321();
  xzu723 = new zto905();
  xzu723.init();
  xzu724 = new zto1318();
  xzu725 = new zto1102();
  xzu725.init();
  xzu726 = new zto973();
  xzu727 = new zto1104();
  xzu728 = new zto1103();
  zto1007();
  xzu219.init();
  xzu209.setArray();
  xzu205.init();
  xzu194.init();
  xzu215.init();
  xzu214.init();
  xzu198.init();
  zto1008();
  xzu187.init();
  xzu211.init();
  xzu720.requestRepaint = !0;
  setTimeout(function () {
    zto1262(2, 0);
  }, 0);
}
function zto1256() {
  try {
    return window.self !== window.top;
  } catch (a) {
    return !0;
  }
}
function zto1257(a) {
  xzu707 ||
    ((xzu707 = !0),
    (a = a.message
      ? "[ERROR " + a.lineno + "][" + a.message + "]"
      : "[ERROR " + a.type + "][" + (a.srcElement || a.target) + "]"),
    xzu704 && xzu704.showToast(a),
    alert(a));
}
function zto1258(a) {
  "ArrowLeft" == a.key
    ? xzu217.activate(3)
    : "ArrowUp" == a.key
    ? xzu217.activate(0)
    : "ArrowRight" == a.key
    ? xzu217.activate(1)
    : "ArrowDown" == a.key
    ? xzu217.activate(2)
    : "a" == a.key
    ? xzu185.keyDown(0.96875)
    : "d" == a.key
    ? xzu185.keyDown(32 / 31)
    : "s" == a.key
    ? xzu185.keyDown(0.875)
    : "w" == a.key && xzu185.keyDown(8 / 7);
}
function zto1259(a) {
  8 != xzu198.getState() && xzu198.keyUp(a)
    ? (xzu720.requestRepaint = !0)
    : "Escape" == a.key
    ? 1 <= xzu154
      ? xzu162
        ? ((xzu162 = !xzu162), (xzu720.requestRepaint = !0))
        : xzu718.isVisible
        ? xzu718.hide()
        : xzu180.switchState()
      : 7 == xzu198.getState()
      ? (xzu201.deinit(), xzu204.init(1e3), (xzu720.requestRepaint = !0))
      : 2 == xzu198.getState()
      ? xzu203.escape()
      : 3 == xzu198.getState() && xzu199.escape(0, 0)
    : "ArrowLeft" == a.key
    ? xzu217.deactivate(3)
    : "ArrowUp" == a.key
    ? xzu217.deactivate(0)
    : "ArrowRight" == a.key
    ? xzu217.deactivate(1)
    : "ArrowDown" == a.key
    ? xzu217.deactivate(2)
    : "h" == a.key &&
      1 <= xzu154 &&
      ((xzu162 = !xzu162), (xzu720.requestRepaint = !0));
}
function zto1260() {
  xzu701 = window.location.hostname;
  xzu709 = 0 <= xzu701.toLowerCase().indexOf("territorial.io");
}
function zto1261() {
  var a = screen.width,
    d = document.body.clientWidth;
  a = a > d ? a : d;
  d = window.screen.availWidth;
  a = a > d ? a : d;
  d = document.documentElement.clientWidth;
  a = a > d ? a : d;
  d = screen.height;
  var c = document.body.clientHeight;
  d = d > c ? d : c;
  c = window.screen.availHeight;
  d = d > c ? d : c;
  c = document.documentElement.clientHeight;
  d = d > c ? d : c;
  xzu689 = document.getElementById("canvasA");
  xzu689.width = a;
  xzu689.height = d;
  xzu690 = xzu689.getContext("2d", { alpha: !1 });
  xzu690.imageSmoothingEnabled = !1;
  xzu733 = document.createElement("canvas");
}
var xzu731,
  xzu732,
  xzu733,
  xzu734,
  xzu735,
  xzu736,
  xzu737,
  xzu738,
  xzu739,
  xzu740 = 14,
  xzu741;
function zto1262(a, d) {
  a < zto1263() && (d = xzu215.getPreferredIndex(a, d));
  if (a != xzu737 || (zto1266(xzu737) && d != xzu738))
    if (
      ((xzu739 = !1),
      xzu741.stop(),
      xzu219.setSeed(a),
      (xzu737 = a),
      (xzu738 = d),
      zto1266(a) &&
        ((xzu215.get(a).seed = d),
        2 == xzu737
          ? (xzu219.setSeed(d),
            (xzu215.get(a).speed =
              60 + zto1304(141 * xzu219.random(), xzu219.value(100))),
            (xzu215.get(a).acceleration =
              zto1304(xzu215.get(a).speed, 6) +
              zto1304(
                xzu215.get(a).speed * xzu219.random(),
                3 * xzu219.value(100)
              )),
            xzu219.setSeed(a))
          : 4 == xzu737
          ? (xzu219.setSeed(d),
            (xzu215.get(a).speed =
              20 + zto1304(141 * xzu219.random(), xzu219.value(100))),
            (xzu215.get(a).acceleration = zto1304(
              xzu215.get(a).speed * xzu219.value(100) +
                xzu215.get(a).speed * xzu219.random(),
              20 * xzu219.value(100)
            )),
            xzu219.setSeed(a))
          : 8 == xzu737 &&
            (xzu219.setSeed(d),
            (xzu215.get(a).speed =
              200 + zto1304(300 * xzu219.random(), xzu219.value(100))),
            (xzu215.get(a).acceleration = xzu215.get(a).speed),
            xzu219.setSeed(a))),
      zto1264(xzu737))
    )
      zto1280();
    else {
      var c = xzu215.get(xzu737);
      xzu731 = c.w;
      xzu732 = c.h;
      xzu219.setSeed(c.seed);
      xzu216.create([xzu731, xzu732, c.speed, c.acceleration]);
      zto1272();
      xzu214.run();
      xzu216.clean();
    }
}
function zto1263() {
  return xzu740 - 4;
}
function zto1264(a) {
  return a >= zto1263();
}
function zto1265(a) {
  return !(10 == a || 11 == a || 12 == a);
}
function zto1266(a) {
  return 1 < a && a < zto1263();
}
function zto1267() {
  function a() {
    xzu741.calculate();
  }
  function d(b, g) {
    0 < g && ((xzu736[b] += g), (xzu736[b + 1] += g), (xzu736[b + 2] += g));
  }
  function c(b) {
    return xzu736[b + 2] > xzu736[b] && xzu736[b + 2] > xzu736[b + 1];
  }
  this.thread = -1;
  this.positionY = this.state = 0;
  this.radiusMin = 8;
  this.radiusMax = 32;
  this.radiusMinCoast = 8;
  this.radiusMaxCoast = 32;
  this.oldRed = [0, 0];
  this.brightness = [0, 0, 0, 0];
  this.matrix = null;
  this.stop = function () {
    -1 != this.thread &&
      (clearTimeout(this.thread),
      (this.thread = -1),
      (this.matrix = null),
      xzu216.clean());
  };
  this.init = function () {
    this.state = 0;
    this.positionY = 1;
    this.oldRed = [
      xzu215.get(xzu737).colorLand[0],
      xzu215.get(xzu737).colorOcean[0],
    ];
    this.brightness = [
      xzu215.get(xzu737).borderAlgo[3],
      xzu215.get(xzu737).borderAlgo[4],
      xzu215.get(xzu737).borderAlgo[5],
      xzu215.get(xzu737).borderAlgo[6],
    ];
    this.radiusMin = xzu215.get(xzu737).borderAlgo[7];
    this.radiusMax = xzu215.get(xzu737).borderAlgo[8];
    this.radiusMinCoast = xzu215.get(xzu737).borderAlgo[9];
    this.radiusMaxCoast = xzu215.get(xzu737).borderAlgo[10];
    this.calculate();
  };
  this.calculate = function () {
    if (0 == this.state) {
      var b = xzu219.getSeed();
      xzu219.setSeed(xzu215.get(xzu737).borderAlgo[2]);
      xzu216.create([
        xzu731,
        xzu732,
        xzu215.get(xzu737).borderAlgo[0],
        xzu215.get(xzu737).borderAlgo[1],
      ]);
      xzu219.setSeed(b);
      this.matrix = xzu216.getV();
      this.state++;
      this.thread = setTimeout(a, 0);
    } else {
      b = 8 == xzu198.getState() ? 9 : 40;
      b = xzu732 - this.positionY - 1 < b ? xzu732 - this.positionY - 1 : b;
      b = this.positionY + b;
      for (var g, e, m = this.positionY; m < b; m++)
        for (var h = 1; h < xzu731 - 1; h++)
          if (((e = h + m * xzu731), (g = 4 * e), c(g)))
            this.dyeDeepOceanLand(g, e, 1);
          else {
            this.dyeDeepOceanLand(g, e, 0);
            e = h;
            var l = m;
            ((1 < e && c(g - 4)) ||
              (e < xzu731 - 2 && c(g + 4)) ||
              (1 < l && c(g - 4 * xzu731)) ||
              (l < xzu732 - 2 && c(g + 4 * xzu731))) &&
              this.calculateDiameter(h, m);
          }
      m = this.positionY - this.radiusMax;
      m = 1 > m ? 1 : m;
      xzu734.putImageData(xzu735, 0, 0, 1, m, xzu731 - 2, b - m);
      this.positionY = b;
      this.positionY >= xzu732 - 1
        ? this.stop()
        : (this.thread = setTimeout(a, 8 == xzu198.getState() ? 100 : 0));
      8 != xzu198.getState() && (xzu720.requestRepaint = !0);
    }
  };
  this.dyeDeepOceanLand = function (b, g, e) {
    d(
      b,
      Math.floor(this.oldRed[e] + (this.brightness[e] * this.matrix[g]) / 1e4) -
        xzu736[b]
    );
  };
  this.dyeOceanLand = function (b, g, e, m, h) {
    d(b, Math.floor(this.oldRed[m] + (1 - g / e) * h) - xzu736[b]);
  };
  this.calculateDiameter = function (b, g) {
    var e = b - this.radiusMax;
    var m = g - this.radiusMax;
    var h = b + this.radiusMax,
      l = g + this.radiusMax;
    e = 1 > e ? 1 : e;
    h = h > xzu731 - 2 ? xzu731 - 2 : h;
    l = l > xzu732 - 2 ? xzu732 - 2 : l;
    for (var k = 1 > m ? 1 : m; k <= l; k++)
      for (var f = e; f <= h; f++)
        if (((m = 4 * (f + k * xzu731)), c(m))) {
          var n =
            this.radiusMin +
            ((this.radiusMax - this.radiusMin) * this.matrix[f + xzu731 * k]) /
              1e4;
          if (!(Math.abs(b - f) > n || Math.abs(g - k) > n)) {
            var p = Math.sqrt((b - f) * (b - f) + (g - k) * (g - k));
            p >= n || this.dyeOceanLand(m, p, n, 1, this.brightness[3]);
          }
        } else
          (n =
            this.radiusMinCoast +
            ((this.radiusMaxCoast - this.radiusMinCoast) *
              this.matrix[f + xzu731 * k]) /
              1e4),
            Math.abs(b - f) > n ||
              Math.abs(g - k) > n ||
              ((p = Math.sqrt((b - f) * (b - f) + (g - k) * (g - k))),
              p >= n || this.dyeOceanLand(m, p, n, 0, this.brightness[2]));
  };
}
function zto1272() {
  2 == xzu737
    ? zto1273([520], [520], [0, 410, 520], [500, 500, 0], [0, 0, 0])
    : 8 == xzu737
    ? zto1273([300], [300], [0, 110, 240], [500, 225, 825], [0, 0, 0])
    : 9 == xzu737 &&
      zto1273(
        [450],
        [450],
        [0, 65, 260, 320, 350, 400, 450],
        [320, 800, 800, 240, 240, 590, 0],
        [0, 0, 0, 0, 0, 0, 0]
      );
}
function zto1273(a, d, c, b, g) {
  var e,
    m,
    h,
    l = a.length - 1,
    k = xzu731 + xzu732;
  k *= k;
  var f = c.length;
  for (e = f - 1; 0 <= e; e--) c[e] *= c[e];
  var n = Array(f),
    p = Array(f),
    r = Array(f),
    t = xzu216.getV();
  if (void 0 === g) for (g = Array(f), e = f - 1; 0 <= e; e--) g[e] = 0;
  for (e = 1; e < f; e++)
    (n[e] = c[e] - c[e - 1]),
      (p[e] = b[e] - b[e - 1]),
      (r[e] = g[e] - g[e - 1]);
  for (m = xzu731 - 1; 0 <= m; m--)
    for (h = xzu732 - 1; 0 <= h; h--) {
      var q = k;
      for (e = l; 0 <= e; e--) {
        var u = (m - a[e]) * (m - a[e]) + (h - d[e]) * (h - d[e]);
        q = u < q ? u : q;
      }
      u = b[f - 1];
      var y = g[f - 1];
      for (e = 1; e < f; e++)
        if (q < c[e]) {
          u = b[e - 1] + zto1306((q - c[e - 1]) * p[e], n[e]);
          y = g[e - 1] + zto1306((q - c[e - 1]) * r[e], n[e]);
          break;
        }
      zto1274(xzu731 * h + m, u, y, t);
    }
}
function zto1274(a, d, c, b) {
  500 > d
    ? (b[a] = zto1304(b[a] * d * 2, 1e3))
    : 500 < d && (b[a] += zto1304(2 * (1e4 - b[a]) * (d - 500), 1e3));
  b[a] += zto1304(c * (10 * d - b[a]), 1e3);
}
function zto1275() {
  var a;
  this.init = function () {
    a = Array(zto1263());
    a[0] = {
      w: [0, 2e3, 8e3, 1e4],
      r: [200, 200, 255, 255],
      g: [200, 200, 255, 255],
      b: [200, 200, 255, 255],
    };
    a[1] = {
      w: [0, 4e3, 5e3, 6e3, 1e4],
      r: [25, 0, 100, 0, 25],
      g: [25, 0, 0, 0, 25],
      b: [25, 0, 0, 0, 25],
    };
    a[2] = {
      w: [0, 500, 2500, 3e3, 4e3, 5e3, 5500, 8600, 1e4],
      r: [5, 5, 20, 255, 252, 40, 40, 20, 30],
      g: [25, 25, 100, 255, 248, 180, 180, 90, 140],
      b: [90, 90, 180, 255, 217, 10, 10, 10, 10],
    };
    a[3] = {
      w: [0, 400, 1800, 2e3, 3200, 4500, 6e3, 7700, 8500, 9500, 1e4],
      r: [10, 10, 20, 10, 30, 10, 16, 40, 55, 230, 230],
      g: [10, 10, 40, 50, 100, 40, 80, 120, 55, 230, 230],
      b: [80, 80, 200, 10, 60, 10, 16, 40, 55, 230, 230],
    };
    a[4] = {
      w: [0, 300, 1400, 1700, 3e3, 4e3, 1e4],
      r: [10, 10, 20, 10, 10, 170, 212],
      g: [20, 20, 60, 100, 100, 110, 170],
      b: [70, 70, 160, 30, 30, 60, 120],
    };
    a[5] = {
      w: [0, 1e3, 3e3, 3500, 4e3, 4500, 7e3, 7500, 8e3, 1e4],
      r: [10, 10, 20, 10, 5, 10, 20, 5, 20, 25],
      g: [30, 30, 50, 100, 30, 100, 140, 60, 140, 200],
      b: [80, 80, 200, 10, 5, 10, 20, 5, 20, 25],
    };
    a[6] = {
      w: [0, 700, 2650, 3200, 5e3, 8e3, 1e4],
      r: [10, 10, 60, 255, 255, 200, 200],
      g: [10, 10, 60, 255, 255, 200, 200],
      b: [80, 80, 255, 255, 255, 200, 200],
    };
    a[7] = {
      w: [0, 500, 1e3, 1360, 1800, 5e3, 7e3, 7700, 8e3, 8400, 9300, 1e4],
      r: [16, 30, 13, 255, 30, 10, 30, 30, 220, 10, 20, 7],
      g: [80, 130, 60, 255, 30, 10, 30, 100, 255, 50, 100, 80],
      b: [16, 37, 15, 255, 170, 60, 170, 120, 220, 10, 20, 7],
    };
    a[8] = {
      w: [0, 1e3, 3e3, 4999, 5e3, 6500, 8e3, 9500, 1e4],
      r: [5, 5, 25, 20, 40, 10, 20, 12, 40],
      g: [25, 15, 25, 30, 160, 55, 110, 60, 100],
      b: [60, 45, 70, 180, 60, 20, 55, 25, 55],
    };
    a[9] = {
      w: [0, 4900, 5e3, 6e3, 6600, 8600, 1e4],
      r: [3, 20, 240, 220, 20, 10, 10],
      g: [11, 60, 220, 200, 95, 55, 55],
      b: [40, 160, 200, 180, 25, 30, 30],
    };
  };
  this.run = function () {
    xzu733.width = xzu731;
    xzu733.height = xzu732;
    xzu734 = xzu733.getContext("2d", { alpha: !1 });
    var d = xzu734.getImageData(0, 0, xzu731, xzu732);
    xzu736 = d.data;
    var c = a[xzu737].w,
      b = a[xzu737].r,
      g = a[xzu737].g,
      e = a[xzu737].b,
      m,
      h,
      l = xzu216.getV(),
      k = c.length - 2,
      f = Array(k + 1),
      n = Array(k + 1),
      p = Array(k + 1),
      r = Array(k + 1);
    for (h = k; 0 <= h; h--)
      (f[h] = c[h + 1] - c[h]),
        (n[h] = b[h + 1] - b[h]),
        (p[h] = g[h + 1] - g[h]),
        (r[h] = e[h + 1] - e[h]);
    for (m = xzu731 * xzu732 - 1; 0 <= m; m--)
      for (h = k; 0 <= h; h--)
        if (l[m] >= c[h]) {
          var t = l[m] - c[h];
          xzu736[4 * m] = b[h] + zto1306(n[h] * t, f[h]);
          xzu736[4 * m + 1] = g[h] + zto1306(p[h] * t, f[h]);
          xzu736[4 * m + 2] = e[h] + zto1306(r[h] * t, f[h]);
          xzu736[4 * m + 3] = 255;
          break;
        }
    xzu734.putImageData(d, 0, 0);
    xzu215.hasText() &&
      xzu205.loaded() &&
      xzu215.hasText() &&
      ((c = xzu205.getByName("arena")),
      xzu734.save(),
      (xzu734.globalAlpha = 1 == xzu737 ? 0.1 : 1),
      (xzu734.imageSmoothingEnabled = !0),
      (d = 2.8),
      xzu734.scale(d, d),
      xzu734.drawImage(
        c,
        Math.floor((xzu731 / d - c.width) / 2),
        Math.floor((0.5 * xzu732) / d - c.height / 2)
      ),
      xzu734.restore(),
      (c = xzu205.getByName("territorial.io")),
      xzu734.save(),
      (xzu734.globalAlpha = 1 == xzu737 ? 0.1 : 1),
      (xzu734.imageSmoothingEnabled = !0),
      (d = 0.87),
      xzu734.scale(d, d),
      xzu734.drawImage(
        c,
        Math.floor(0.745 * (xzu731 / d - c.width)),
        Math.floor((0.422 * xzu732) / d - c.height / 2)
      ),
      xzu734.restore());
    xzu739 = !0;
    xzu720.requestRepaint = !0;
  };
  this.adaptRasterC = function () {
    var d;
    xzu155 = 0;
    for (d = xzu731 - 1; 0 <= d; d--)
      (xzu768[4 * d + 2] = 3), (xzu768[xzu732 * xzu731 * 4 - 4 * d - 2] = 3);
    for (d = xzu732 - 1; 0 <= d; d--)
      (xzu768[d * xzu731 * 4 + 2] = 3),
        (xzu768[d * xzu731 * 4 + 4 * xzu731 - 2] = 3);
    for (d = xzu731 * xzu732 - 1; 0 <= d; d--) {
      var c = 4 * d;
      3 != xzu768[c + 2] &&
        (xzu736[c + 2] > xzu736[c + 1] && xzu736[c + 2] > xzu736[c]
          ? (xzu768[c + 2] = 2)
          : ((xzu768[c + 2] = 1), xzu155++));
    }
    if (3 == xzu737)
      for (c = xzu731 * xzu732 - 1; 0 <= c; c--)
        (d = 4 * c),
          xzu736[d] == xzu736[d + 1] &&
            xzu736[d] == xzu736[d + 2] &&
            ((xzu768[d + 2] = 3), xzu155--);
  };
}
function zto1280() {
  var a;
  xzu737 == zto1263()
    ? (a =
        "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")
    : xzu737 == zto1263() + 1
    ? (a =
        "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566Hg8ejjAhEKKAo5t68Hg8ogjKgEeJAy5Z7A7W8yejKaFUHAy5Z7K5oCB6c6BoFA8jUUF9AyGFZ7U5eFBg88A9BeCjyQGUDA7Fj7U5eIA8dUDloOGoCA7Fj7e5oJA567UJG6AeGAUCE957o56687Ae7KBAyCAex57o5876eDAexI7AO87F8768E9I8AY86F976KDAUxI9As8o5977ArJKEwo6H69EU9UDwy6R69EA9eDwo6b69D9JyCwo6b69D8J6AO8y6l67D9J6AKCAO8U6l67D8J7As8U6b67D8J8Ai8e6b67D7J9Ai8e6R69D6J8A5wU6R7KaAyCJ9A6AoBv7F877oLAKKK9A7AKDv8F5778A7AoIK8BY79Fl8oCA6AzIBs8Ar8CAfHB5wKq8EALHBs8Ur9LBi8os9JBY86ExJBO87E59JA9w9Ev9KBL7A8xAr79KCL8A5xUiAUH8FAVDA5xogAyE8GAK9eBA9A5x6DKHAb9eCBKBJUCA8A5x8DSAA6AoDJUDAeBAeFyKe8ABo9AEAKDAoCyoe799Be9AIzUd799BU89A9zod798BU88BFPDH97BA88A9z7Db9oKI7A9z8Db9oJI8A85UDR9yJI6A85WDH96A6AUBIoJ5YC9796Ao87BFaC8796Ao8oN5aC988KND8AY89C8878BUqAO9Ka877BZkC5876BjlCw7yO5lC587eP5mCw7eP5nCm7UQ5oCm7KP5oC6868B55oC8868BjqC987AI5uC887KE5yC7866AP58C886eC559C8999AEYC8999AEZC7999AEZC8999AEZC7999AEZC6999AEaC6999AEbCx99AEcCx99AEcCn99AEeCd99AEeCT99AEgCJ99AEhB9999AEiB7999AEjB7999AEkB6DUB999AEDB7C8BJ99AD99BydBJ99AEABoaBJ99AEDBobA7999AEEBefAn99AEGBJ99AEqAUDAx99AEyAKFAn99AEwA6999AEuA8999AEsA9999AEqBd99AEoBn99AEoBx99AEnBo8eC999AD5oQIKC999AD57By79Ad99AD58Ao89Ad99AEzAT99AJ99AJLAT99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AGjAT99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AA6e")
    : xzu737 == zto1263() + 2
    ? (a =
        "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")
    : xzu737 == zto1263() + 3 &&
      (a =
        "AJ8AA8C999AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AC78AUCAT7oDAUB999AJ99AJgAX7ABAKH599AX7AJ97AK969BT69Bn66Bx66Bx67B6AoD957B8AKE956C6A6AK66AS79C7AKHAKBA9AUEAKCAKEAeiA987enAyHAKGAeEDUL869EUDB6AeFA7AoRAUBBc67GUCA7AeHByR85yDA6I9A9B885VCAKDAoS8xK9AeT8vLeBCwmO68gPcVAUEPwRA6AV558QA7AV578NQ88KRAIASBRKEA6798Sv96S579z8779f8779L89788Tb86T578p9678p9778f9778gB777U577gH77gI77WK77CKA6Av6CJA6A7C8AbdVUBA9AeBB8A8AUE7WWUCAoQB57WWABA6AKCA6AeEByKA57HXKCAKCAeDB9AyJ7DWeBA9AUHAUTAoL7CWUBEKDBk98a8AKO697ck95c569q8769M9Q87dk86du8q9u85d5joCg8d6joDg7d6jyDg5d8jACAUCg5eDxANeeNvAXcehuAhdehsAhbe6iKBAKEg5e9h9A7grKiKFgrLiKEgKCANL66rR66XU659gu56goIAKBAKCAQpgyIA8gKCf6geLBKBA5fKCf6geJCUGAKDAQOgoIDuOgoHD76MgoHAKBD56MgUDAKEEQJgKEAKEEUCAuCgUCAUBAKCE96AgoBF7A7Aj88goBF8AyF587myDA7eyCb8nyMAW6KBCUBA6AW78nyLAq6ABCeIb9nyKA5cKIAKBb9noNAg78AKBA7ch9yHAoCAW77BC8h9oHA7ZoCCKDAKGc5noHBCzAeUBC85noHBAJAqjAUBAeTBg8h9yGA9A8A7XoFCANch98AeIA8BChAySB5cX98AKKA7BgdA7B9Bg8iKAySW6A6B8AKCAUBA8ceBAOJAoUWoGCKCAKEAKBcsLAeXWeGC8AW7KFA6pyBCqWA6C8AM7KHA5pyBC5WKGB8A7AKEa8BeCsMUA6B8BM68rABC7V9AyTBM67uMSAoTBM66ugRAoTA6AKDa7u5VyEB6AKBBADAM6s65V6AeQAKBBABAeGAW56u5V6AKVA9AKDAyDZ6u6VeFB8BoFAg57u6VUFB8B9AKCZ9uqMAyRCACAW59ugMA6BoKAKLAUDZ8uqLAyPAUCCg58u5VAGB7Cq58u5VAGB7Cq58u6U9A6B7Cq59u5U9A6B7B9a5uqKAySA8AKJa7uWIAKBAyRA9AUIa8uMHAyBAKTBADAg7E6MIAoVBC76uMIAoDAeJAUEBg7i6MHAyCAoKAeDBg7Y6CJAeEAeJAKBAUBB7bE6CIAoFAKPB7bE6CKAUWB6bE59VKDCKObO6CLAeSAKCBABAM7i6CLAKRAUDBW7s6McAUDB5bO6McCC7E6gcByCAM7E6gdB5bY6qdAeBBKHAW6i6qIAUHAUOBUGAUBAq58t8AKFU8AeFAeNBoIA5Z7t8AKDVKCAeFA6AUBAeDBUFA8aO5yBAMMAeDAeGAeCAeCBUFA5a6tgPAUEAKNAUEBAEA6a7tWhAKBAeEBACAq7E5WgA6AeLAKEbO5gfA6AURbO5ggAoDB7bE5ggA7AoNbO5ggA7AUObE56XAIAUMbY56XKIAKNbE57XUHAKLbO59XoEAKNByCZY59XUBAUDAKPBUEZE59XeVBeIY6t9XeVBUNYY59XKIAKOAeCAUDAUOYE6MdC6AKYAUCX6uCdBACEqiuKBAMbF6Xs6WcF6Xi6gfFghuqdF5Xi6WfBABEghuWfF5XO6qeA6AKyW8u5XA6MYuyBAWcAyBF5WY69AKBW7AeCF6AeCV6u7AeBW7AeDGWPu6XeBAo6WOu7X8GWKvClAeBAUBF7U9vClAUBAUCF9U7vCoAKCGWFvCjAUIGCEvMkAeFGWDvMkAUCAUEGMCvWnAUEGgAvWdAKGAeCAeDGp97vqiAyBAeBG6T6v5Xe76T6v5Xe76T6v8XKFAK69T6v7XU76T5v8XK77Ts79XK77AyCS5v8AKBXU8z8oHAO7ChAKBIV8yGAO7MjA6Ae7eCAL8i77X6AUBAKFH9R9v7Y6IL77v6YyCAe8B7s76X8AUEAeDIL7i76X9AeCAUCIp7E78X9AoBAeBI6Q7wCoAUBAUCI8Qi8WnA6AU9B57w6X9AoEJpzw9X8A7Ay9LxxCoAeGAUBJBqx6YACA7AeCAKBJLlx6Y9AoCJphx8YeBALFNY99YKHALBNO99YKHAVDAKFMPAYKEAKCALLMFBYLTL9yMpMBSyWoMBRygpMLPygqBUBK9K8AKDyqqBUBA6ApAKtLYeMBACAU97KFOYoMA9AUEJ7J7z6YyKB7AKBJe96z7Y6BKTJK77AKRz8Y7BKQAKBJU69AyBA8A85VY7A9B8AKBAeCAKCIy68B6A65WY7BAOAKJAKBI6FZ59Y9A8BUCBABAK86E6565ZKEAoBByBA8I7EZ68AKBZeCAKCCe88D957g5eBCy9Ki576Z9AKTJya58M7ABAo99CZ8g7oBALAB958g7oEALAB758C79AKCKUO58M8fCBZ8W8yGAK9oI585dK97At88d7JUB589eA9AB589byDA8AUCAKJ678byJAKMAu78b67Fb57GbvGbvGbvHblIbRJbRLa97Ma97La97La97LbAIARCbUDA57Ab7AUB7Ab67Ab97Db67Eb6A7Ak9q77AyE69g88AKB689du86du85d668g9868DA68DA669AKJeQ69AUHeeIAa58AeBAKCeyEA6AKB656d7AoJAeBAUJ656doJA6A7A7659AKBdAJA7A6A766M9AJA6A8A766C9AJA7A7A7BoDA7AUEAkbAKBc8A9A6A9AyOAyFA96gc7A7A7A8A6BoGAKM6gc7A6A8A9A6BoR6hc7A6BAGA8BeQ6jc9AUMAyJBUQ6jeeFA8BKS6jAUCAKBd6A7A7BKR6oAKCdyHA7BKR6od8A6A9A9ByCAQod8A6BABAKFB56sAyCdUFBeCB66vAeDAKDc7Ayf6vAUJc6Aye66NS66hR66rR666fa68fG7NG675e5675e6675e5676eG8C9968W9868g9868W99BAB67M97BKB67UQBg6yMAa7KQBq6eOAa7UNB6aePAa78AyRaeGAeGAa8ABB9aoDAyHAKBAQ98bUGAk98boDARBb8699cG99cG97ck97ca97ck96coGAQ89c969C8969M8969KGAW8a9AEAq8oEAa8UEAq9G8eBA6dQ8UBA7dG9M8969M8969M8869W8769W87695c6695cu96ca99cHAcHAcHAcHAcHAcHBb87Cb77DbbJa97La87Ma87Ma77Ma77Na77Ma87Ma87Ma87La97La87La97La67Na77Ma77La97La97La97La87La97La97Ma77Na67Oa67Oa87NT9Ao657MT9Ao6vOT8Ae6vPa57QavQavRalRavQavQavRavQalRalRabSabSBUCY87RBUDY87RBUDY87PBoDY87RBUBAKBY87RavPalRavQavQa57QabSaRTZ77UZ97WZ77YZ57ZZvbZbcAKDY87hY87gY77gY97fZHfAUCY57sX67wXbwXRxXRzW975Wb75qa755W5755W675gd75Wc75Wd7yXAzAk96W9EeBA7A8689XUqAeGA8688XepA6AeJ687X6DABA8A7AUJ686X6DACA8A6AeJ685X8C7AoHAKCAoBBa7yEAWpC7AoHA6AUDAUH675Y7C7AoIBABA867oBA5YebAeHAeCB6679YebAeDAUCAeCB6679YebAeDAKCAoDB5679YyZAyBA8AKP68CtCeg68CyA7AKKDa8CyAyEA6B6AUQ68CzAoFAoj67q58AoFAKl677Z7AUfAKM678c9AUM677beCC9676bUDC9676bKEC7677bKEC668W68Aoa68g9868g99A6AQ7q99AyD67hAAeF67XI67NJ67DG67XI67NHAKB67DH67DJ67NK669fQ68fk67fG69fG7DJ67NI67UEAKGAM96677AyDd6678AUEd668g97679AKCd8676AKBea75e6666AKEe966rR66hR66hS66DU66DU659gG59gG6DU658ga58gQ58ga57gk56g5655g665re6xhavhkuhkvhkuhawhauh56uh66qiGoiQlikiAKBiufjGfi96ejGejGei96gi76ji56ji66ji56ji76fjGei96gi86hAeCikkiujAKBiuji56ji66ji56ji66ji56ji56ji56ji66ii76hjQdjabjkbjkbjkbjacjacjkbjkbjkbjkajacjabjuXjoQA76DjoNBZ98j9BAO597kAIB559UCAN6UIB5589k8A7B7588lAFB758oBAh9j8UCAh96577o5576o557sF57sH57iK566AKDo6AKD565pACAt6YNAKG557q555sc55Yf5wrfhAONrffA7o8r9AyDL7A9o7sKCA7LAPo5sKBA9K6B9os5VDCsAto6yDC9DX96ty6yDC6D8nY58A6AKyAKFAoYEN9E58AeFE9AUDA7CUsm6u7E9BUUFD8Y68AoBEeMCA57l5vACAKqBoTGD7Y7ooB6B7Gr68t8AURDeCAeUA6AUFG7G8AW95v8C7AKECyGAUFG9G6AW95v9CyfAKCAKEAo7A6KIds79CUrAe7A6eJc9woTEeDHK6UJdE86AKCAKBBLSGUIdE96AzVGKHdE98AfWF9BC896ZAoCFAKc96oEKLc86qDeCAyLc66tCeFAUEAoMc56uCANAoMc568ACB6ca97ck97b7686AUPb6687AUPb77Eb67Eb57GblHblHblIbbIbbHblHblJbRKbHJbHKa77Oa8688AUWa8688AUWa569KCCg657Pa57Pa57Pa57FbvGb57Fb57Fb57GbvOaKBAlPaHUYyCBRWY57kYvjYvkYllYllYlkYvkYvgAKDYvgY97fZRdZHgY87gY97fZHfY97gY87fZHeZRYZ77XZ77YZ67ZZlbZbbZRbZRdZReY87fY87ZAUEY87TAUEAoBZHSAoDZ57SAoBZ67UaHUAeBZlXAeBZlYAUBZlbZlbZlaZlaZbcY87hY87fY97fY97fY97fY97eY97fY87gY67iYllXoDAbpX57tXvvXbxXRxW97zW775gX755Wb5yBAMV757Wb58WR6CPAKC76gO767U9AeB767U877gG77oDAV98778AUET6778AeETl8KCA7SeDAb8eCA8SSDOABD58FM6AKLAoBAUe8FC7AU96AyIA7C98GC8Ae9eKAeMAUBCmGC7Ae9odBeCAmJAyBB8AeCAUFAK8KEAKeA8AKE8PAeBA7ByCAeCAyDAe6oCA6D6A88aAKBAKQAKTGUEAolA886y6UEAolAS7U6dVF99WF99XF79YCKBA8AKY9dB7AKFA6CTfAUGAUDAKEAKKB896eQ966A9AKD97KF978AT99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99AJ99ADh");
  a = xzu178.decodeMapString(a);
  var d = xzu215.get(xzu737).colorLand,
    c = xzu215.get(xzu737).colorOcean;
  xzu731 = 1e3 * a[0] + a[1];
  xzu732 = 1e3 * a[2] + a[3];
  xzu733.width = xzu731;
  xzu733.height = xzu732;
  xzu734 = xzu733.getContext("2d", { alpha: !1 });
  xzu735 = xzu734.getImageData(0, 0, xzu731, xzu732);
  xzu736 = xzu735.data;
  for (var b = a.length, g = !0, e = 0, m = 4; m < b; m++)
    if (g) {
      for (; 0 < a[m]--; )
        (xzu736[e] = c[0]),
          (xzu736[e + 1] = c[1]),
          (xzu736[e + 2] = c[2]),
          (xzu736[e + 3] = 255),
          (e += 4);
      g = !1;
    } else {
      for (; 0 < a[m]--; )
        (xzu736[e] = d[0]),
          (xzu736[e + 1] = d[1]),
          (xzu736[e + 2] = d[2]),
          (xzu736[e + 3] = 255),
          (e += 4);
      g = !0;
    }
  xzu734.putImageData(xzu735, 0, 0);
  xzu739 = !0;
  xzu741.init();
  xzu720.requestRepaint = !0;
}
function zto1281() {
  var a, d;
  this.init = function () {
    a = Array(xzu740);
    a[0] = {
      name: "White Arena",
      w: 800,
      h: 800,
      speed: 100,
      acceleration: 50,
      seed: 81,
    };
    a[1] = {
      name: "Black Arena",
      w: 800,
      h: 800,
      speed: 100,
      acceleration: 50,
      seed: 43,
    };
    a[2] = {
      name: "Island",
      w: 1040,
      h: 1040,
      speed: 200,
      acceleration: 33,
      seed: 0,
    };
    a[3] = {
      name: "Mountains",
      w: 960,
      h: 960,
      speed: 60,
      acceleration: 8,
      seed: 0,
    };
    a[4] = {
      name: "Desert",
      w: 900,
      h: 900,
      speed: 100,
      acceleration: 5,
      seed: 0,
    };
    a[5] = {
      name: "Swamp",
      w: 1e3,
      h: 1e3,
      speed: 100,
      acceleration: 40,
      seed: 0,
    };
    a[6] = {
      name: "Snow",
      w: 1e3,
      h: 1e3,
      speed: 100,
      acceleration: 20,
      seed: 0,
    };
    a[7] = {
      name: "Forgotten World",
      w: 1e3,
      h: 1e3,
      speed: 90,
      acceleration: 30,
      seed: 0,
    };
    a[8] = {
      name: "Lake",
      w: 600,
      h: 600,
      speed: 200,
      acceleration: 100,
      seed: 0,
    };
    a[9] = {
      name: "Halo",
      w: 900,
      h: 900,
      speed: 400,
      acceleration: 400,
      seed: 0,
    };
    a[10] = {
      name: "Europe",
      colorLand: [140, 130, 120],
      colorOcean: [20, 20, 84],
      borderAlgo: [240, 120, 100, 30, 35, 30, 90, 8, 32, 3, 9],
    };
    a[11] = {
      name: "World",
      colorLand: [165, 145, 125],
      colorOcean: [15, 15, 69],
      borderAlgo: [500, 200, 8, 25, 15, 25, 90, 8, 32, 3, 9],
    };
    a[12] = {
      name: "Caucasia",
      colorLand: [140, 130, 120],
      colorOcean: [20, 20, 84],
      borderAlgo: [240, 120, 100, 30, 35, 30, 90, 8, 32, 3, 9],
    };
    a[13] = {
      name: "Antarctica",
      colorLand: [220, 220, 220],
      colorOcean: [5, 5, 70],
      borderAlgo: [400, 400, 50, 35, 35, 35, 120, 10, 44, 6, 18],
    };
    d = Array(7);
    d[0] = [81];
    d[1] = [43];
    d[2] = [9894, 6977, 12865, 15345, 14550, 6121, 953, 4835, 4919];
    d[3] = [
      10264, 15567, 10459, 499, 10140, 143, 10303, 12795, 3406, 10201, 3950,
      11086, 3624, 7979, 6344, 13385, 11986, 6204, 14679, 11610, 10452, 15131,
    ];
    d[4] = [214, 13898, 12075];
    d[5] = [1686, 14348, 3353, 14887, 11681, 15863];
    d[6] = [
      12580, 6803, 15582, 3797, 4438, 3519, 6181, 8780, 10668, 15902, 12609,
    ];
  };
  this.hasText = function () {
    return 1 >= xzu737;
  };
  this.get = function (c) {
    return a[c];
  };
  this.getPreferredIndex = function (c, b) {
    return 7 <= c ? b : d[c][b % d[c].length];
  };
}
var xzu767, xzu768, xzu769, xzu770;
function zto1282() {
  void 0 == xzu767 && (xzu767 = document.createElement("canvas"));
  xzu767.width = xzu731;
  xzu767.height = xzu732;
  xzu769 = xzu767.getContext("2d", { alpha: !0 });
  xzu770 = xzu769.getImageData(0, 0, xzu731, xzu732);
  xzu768 = xzu770.data;
}
function zto1283() {
  function a(v, z, B) {
    f[0] = v;
    for (v = 1; v < B; v++)
      (f[v] = f[v - 1] + z),
        1e4 <= f[v]
          ? ((f[v] = 9999), (z = -z))
          : 0 > f[v]
          ? ((f[v] = 0), (z = -z))
          : ((z += 16384 <= xzu219.random() ? k : -k),
            (z = z < -l ? -l : z > l ? l : z));
  }
  function d(v, z, B, w) {
    if (B) for (B = 0; B < w; B++) g[z * e + v + B] = f[B];
    else for (B = 0; B < w; B++) g[z * e + v + B * e] = f[B];
  }
  function c(v, z) {
    var B = v - f[z - 1];
    if (0 != B) {
      var w = 1 + zto1304(Math.abs(B), z - 1);
      w = 0 > B ? -w : w;
      f[z - 1] = v;
      var x = z - 1 - zto1304(Math.abs(B), Math.abs(w));
      x = 1 > x ? 1 : x > z - 2 ? z - 2 : x;
      for (var C = z - 2; C >= x; C--) f[C] += B - (z - 1 - C) * w;
      if (0 > B) for (B = z - 2; 1 <= B; B--) 0 > f[B] && (f[B] = -f[B] - 1);
      else for (B = z - 2; 1 <= B; B--) 1e4 <= f[B] && (f[B] = 2e4 - f[B] - 1);
    }
  }
  function b(v) {
    for (var z = 0; z < v.length - 1; z++) v[z] = v[z + 1] - v[z];
    v[v.length - 1] = v[v.length - 3];
  }
  var g, e, m, h, l, k, f, n, p, r, t, q, u, y;
  this.create = function (v) {
    e = v[0];
    m = v[1];
    l = v[2];
    k = v[3];
    g = new Int16Array(e * m);
    h = e > m ? e : m;
    f = new Int16Array(h);
    n = [];
    p = [];
    r = [];
    t = Array(e);
    q = Array(m);
    for (v = e - 1; 0 <= v; v--) t[v] = !1;
    for (v = m - 1; 0 <= v; v--) q[v] = !1;
    u = new Int16Array(e);
    y = new Int16Array(m);
    v = h;
    var z = xzu219.random() % 1e4,
      B = (xzu219.random() % (2 * l + 1)) - l;
    a(z, B, v);
    v = y;
    z = f;
    B = m;
    for (var w = 0; w < B; w++) v[w] = z[w];
    d(0, 0, !0, e);
    v = g[0];
    z = h;
    B = (xzu219.random() % (2 * l + 1)) - l;
    a(v, B, z);
    v = u;
    z = f;
    B = e;
    for (w = 0; w < B; w++) v[w] = z[w];
    d(0, 0, !1, m);
    b(u);
    b(y);
    a(g[e - 1], u[e - 1], m);
    d(e - 1, 0, !1, m);
    a(g[e * (m - 1)], y[m - 1], e);
    c(g[e * m - 1], e);
    d(0, m - 1, !0, e);
    t[e - 1] = t[0] = !0;
    q[m - 1] = q[0] = !0;
    v = e;
    n.push(0);
    p.push(v);
    r.push(!0);
    v = m;
    n.push(0);
    p.push(v);
    r.push(!1);
    a: for (;;) {
      v = n.length - 1;
      for (z = v - 1; 0 <= z; z--) p[z] > p[v] && (v = z);
      if (5 > p[v]) break a;
      z = n[v] + zto1304(p[v], 2);
      if (r[v]) {
        B = void 0;
        var x;
        w = z;
        for (var C = 0, I = 0; I < m - 1; ) {
          for (x = C + 1; x < m; x++)
            if (q[x]) {
              I = x;
              break;
            }
          x = I - C + 1;
          a(g[w + e * C], 0 == C ? u[w] : f[B - 1] - f[B - 2], x);
          c(g[I * e + w], x);
          d(w, C, !1, x);
          B = x;
          C = I;
        }
        t[w] = !0;
      } else {
        B = void 0;
        w = z;
        for (I = C = 0; I < e - 1; ) {
          for (x = C + 1; x < e; x++)
            if (t[x]) {
              I = x;
              break;
            }
          x = I - C + 1;
          a(g[w * e + C], 0 == C ? y[w] : f[B - 1] - f[B - 2], x);
          c(g[w * e + I], x);
          d(C, w, !0, x);
          B = x;
          C = I;
        }
        q[w] = !0;
      }
      B = n[v] + p[v] - z;
      w = r[v];
      n.push(z);
      p.push(B);
      r.push(w);
      p[v] = z - n[v] + 1;
    }
    for (v = 0; v < e; v++)
      if (!t[v])
        for (z = 0; z < m; z++)
          q[z] ||
            ((B = g[z * e + v - 1] + g[(z - 1) * e + v]),
            (w = 2),
            t[v + 1] && (w++, (B += g[z * e + v + 1])),
            q[z + 1] && (w++, (B += g[(z + 1) * e + v])),
            (g[z * e + v] = zto1304(B, w)));
  };
  this.getV = function () {
    return g;
  };
  this.clean = function () {
    g = null;
  };
}
function zto1304(a, d) {
  return Math.floor(a / d + 1 / (2 * d));
}
function zto1305(a) {
  return a * a;
}
function zto1306(a, d) {
  return 0 > a ? -Math.floor(-a / d + 1 / (2 * d)) : zto1304(a, d);
}
function zto1307(a, d) {
  for (var c = zto1304(a + 1, 2), b = 0; b < d; b++)
    c = zto1304(c + zto1304(a, c), 2);
  return c;
}
function zto1308(a, d) {
  return 1 > a ? 0 : zto1307(a, d);
}
function zto1309(a, d, c, b, g, e, m, h) {
  return !(a + c <= g || d + b <= e || a >= g + m || d >= e + h);
}
function zto1310(a, d, c, b, g, e, m, h) {
  return a <= g && d <= e && a + c >= g + m && d + b >= e + h;
}
function zto1311() {
  function a() {
    c = !0;
    b = -1;
    g = Array(4);
    for (var h = 3; 0 <= h; h--) g[h] = !1;
    h = Math.floor(1 + 0.02 * xzu696);
    e = Array(4);
    m = Array(4);
    m[1] = m[3] = e[0] = e[2] = 0;
    m[0] = e[3] = -h;
    e[1] = m[2] = h;
  }
  function d() {
    if (-1 != b)
      if (0 != xzu154 && xzu176.end()) {
        for (var h = !1, l = 3; 0 <= l; l--)
          g[l] &&
            ((h = !0),
            (xzu394 += e[l]),
            (xzu395 += m[l]),
            xzu210.mouseMove(e[l], m[l]),
            xzu186.readjustCoords());
        h ? (xzu720.requestRepaint = !0) : xzu217.deactivateAll();
      } else xzu217.deactivateAll();
  }
  var c = !1,
    b,
    g,
    e,
    m;
  this.activate = function (h) {
    0 != xzu154 &&
      xzu176.end() &&
      (c || a(), (g[h] = !0), -1 == b && ((b = setInterval(d, 20)), d()));
  };
  this.deactivate = function (h) {
    if (0 != xzu154 && (c || a(), (g[h] = !1), -1 != b)) {
      h = !1;
      for (var l = 3; 0 <= l; l--) h = h || g[l];
      h || this.deactivateAll();
    }
  };
  this.deactivateAll = function () {
    if (c && -1 != b) {
      for (var h = 3; 0 <= h; h--) g[h] = !1;
      clearInterval(b);
      b = -1;
    }
  };
}
function zto1314() {
  var a;
  this.getCStart = function () {
    return a;
  };
  this.exists = function (d, c) {
    if (
      0 == xzu675[d].length ||
      !xzu206.isLand(c) ||
      (!xzu206.isNeutral(c) && xzu206.getPlayerAt(c) == d)
    )
      return !1;
    for (var b = 21; 0 <= b; b--) {
      if (21 == b) {
        var g = xzu675[d],
          e = c,
          m = xzu206.getX(e);
        e = xzu206.getY(e);
        var h = 0;
        var l = xzu206.getX(g[0]);
        var k = xzu206.getY(g[0]);
        l = Math.abs(l - m) + Math.abs(k - e);
        for (k = g.length - 1; 1 <= k; k--) {
          var f = xzu206.getX(g[k]);
          var n = xzu206.getY(g[k]);
          f = Math.abs(f - m) + Math.abs(n - e);
          f < l && ((l = f), (h = k));
        }
        a = g[h];
      } else a = xzu675[d][zto1304(b * xzu675[d].length, 21)];
      a: {
        k = a;
        h = c;
        g = xzu206.getX(k);
        m = xzu206.getY(k);
        e = xzu206.getX(h);
        h = xzu206.getY(h);
        l = Math.abs(e - g) + Math.abs(h - m);
        if (!(2 > l))
          for (f = 0; f < l; f++)
            if (
              ((k =
                Math.abs(e - xzu206.getX(k)) >= Math.abs(h - xzu206.getY(k))
                  ? k + xzu18[e > g ? 1 : 3]
                  : k + xzu18[h > m ? 2 : 0]),
              xzu206.isLand(k))
            ) {
              if (0 == f || f + 20 < l) break;
              g = !0;
              break a;
            }
        g = !1;
      }
      if (g) return !0;
    }
    return !1;
  };
}
function zto1318() {
  this.createNewGame = function (a, d, c) {
    var b = xzu195.getPlayerIndexRaw(),
      g = xzu195.indexToPlayer(b);
    if (b == c)
      xzu201.hideWindows(!0),
        zto977(
          xzu201.getSeedPlacing(),
          xzu194.balanceTaken,
          0,
          [g],
          !1,
          !1,
          !1
        );
    else {
      var e = xzu195.indexToPlayer(c);
      g.elo = a;
      e.elo = d;
      b < c ? ((a = 0), (g = [g, e])) : ((a = 1), (g = [e, g]));
      xzu201.hideWindows(!0);
      zto977(xzu201.getSeedPlacing(), xzu194.balanceTaken, a, g, !0, !1, !0);
    }
    xzu195.deinit();
  };
}
function zto1319() {
  function a() {
    xzu712.calculate();
  }
  this.w = 50;
  this.context = this.canvas = null;
  this.cycle = -3;
  this.cycleAdd = 0;
  this.calculate = function () {
    var d, c;
    this.cycle++;
    if (-2 == this.cycle) setTimeout(a, 250);
    else if (-1 == this.cycle)
      (this.canvas = document.createElement("canvas")),
        (this.canvas.width = this.w),
        (this.canvas.height = this.w),
        (this.context = this.canvas.getContext("2d", { alpha: !0 })),
        setTimeout(a, 0);
    else {
      var b = performance.now();
      for (d = this.cycle; 0 <= d; d--) {
        var g = this.context.getImageData(0, 0, this.w, this.w);
        var e = g.data;
        for (c = this.w * this.w * 4 - 4; 0 <= c; c--)
          (e[c] = Math.floor(256 * Math.random())),
            (e[c + 1] = Math.floor(256 * Math.random())),
            (e[c + 2] = Math.floor(256 * Math.random())),
            (e[c + 3] = Math.floor(256 * Math.random()));
        this.context.putImageData(g, 0, 0);
        for (c = this.w; 0 < c; c--)
          (this.context.fillStyle =
            "rgba(" +
            Math.floor(256 * Math.random()) +
            "," +
            Math.floor(256 * Math.random()) +
            "," +
            Math.floor(256 * Math.random()) +
            "," +
            Math.random() +
            ")"),
            this.context.fillText(
              Math.floor(1e6 * Math.random()).toString(),
              100 * Math.random(),
              100 * Math.random()
            );
      }
      50 > performance.now() - b && 20 > this.cycle
        ? ((this.cycle += 10 <= this.cycle ? 1 : 0),
          (this.cycleAdd = 0),
          setTimeout(a, 0))
        : 2 > this.cycleAdd && 20 > this.cycle
        ? (this.cycleAdd++, this.cycle--, setTimeout(a, 0))
        : ((xzu713 = this.cycle), (xzu712 = this.context = this.canvas = null));
    }
  };
}
function zto1321() {
  this.q = this.x0 = this.w0 = this.w = 0;
  this.context = this.canvas = this.sum = null;
  this.colorRed = "rgba(160,12,12,0.88)";
  this.colorBlue = "rgba(12,12,180,0.88)";
  this.timer = 0;
  this.requestRefresh = !1;
  this.init = function () {
    xzu166
      ? ((this.timer = 0), (this.q = 512), (this.sum = [0, 0]), this.zto1324())
      : (this.sum = this.context = this.canvas = null);
  };
  this.zto1324 = function () {
    xzu166 &&
      ((this.w = Math.floor(0.18 * xzu696)),
      (this.w += this.w % 2),
      (this.w0 = Math.floor((7 * this.w) / 8)),
      (this.x0 = Math.floor((this.w - this.w0) / 2)),
      (this.canvas = document.createElement("canvas")),
      (this.canvas.width = this.w),
      (this.canvas.height = this.w),
      (this.context = this.canvas.getContext("2d", { alpha: !0 })),
      (this.context.lineWidth = 2),
      (this.context.strokeStyle = xzu293),
      this.refreshAll());
  };
  this.isPlayerVictorious = function () {
    return xzu166
      ? xzu152
        ? 512 < this.q
        : 0 == xzu721.ids[xzu161] % 2
        ? 512 < this.q
        : 512 >= this.q
      : !1;
  };
  this.calculate = function () {
    xzu166 && this.calculatePartitions();
  };
  this.calculatePartitions = function () {
    if (32 <= ++this.timer) {
      this.timer = 0;
      var a = this.q;
      this.sum[0] = this.sum[1] = 0;
      xzu152 ? this.calculateSP() : this.calculateMP();
      0 == this.sum[0] && 0 == this.sum[1]
        ? (xzu166 = !1)
        : ((0 != this.sum[0] && 0 != this.sum[1]) || xzu726.endGame(-1),
          (this.q = zto1304(1024 * this.sum[0], this.sum[0] + this.sum[1])),
          (this.requestRefresh = a != this.q));
    }
  };
  this.calculateSP = function () {
    for (var a = xzu679 - 1; 0 <= a; a--)
      this.sum[xzu678[a] % 2] += xzu670[xzu678[a]];
  };
  this.calculateMP = function () {
    for (var a = xzu679 - 1; 0 <= a; a--)
      xzu678[a] < xzu146 &&
        (this.sum[xzu721.ids[xzu678[a]] % 2] += xzu670[xzu678[a]]);
  };
  this.refresh = function () {
    xzu166 && this.requestRefresh && this.refreshAll();
  };
  this.refreshAll = function () {
    this.requestRefresh = !1;
    this.context.clearRect(0, 0, this.w, this.w);
    this.context.fillStyle = xzu289;
    this.context.fillRect(0, 0, this.w, this.w);
    this.context.fillStyle = xzu293;
    this.context.fillRect(0, 0, this.w, 2);
    this.context.fillRect(0, 0, 2, this.w);
    this.context.fillRect(this.w - 2, 0, 2, this.w);
    this.context.fillRect(0, this.w - 2, this.w, 2);
    var a = Math.floor(this.w / 2),
      d = Math.floor(this.w0 / 2);
    this.context.fillStyle = this.colorBlue;
    this.context.beginPath();
    this.context.arc(
      a,
      a,
      d,
      ((2 * this.q) / 1024 - 0.5) * Math.PI,
      1.5 * Math.PI
    );
    this.context.lineTo(a, a);
    this.context.fill();
    this.context.fillStyle = this.colorRed;
    this.context.beginPath();
    this.context.arc(
      a,
      a,
      d,
      1.5 * Math.PI,
      (1.5 + (2 * this.q) / 1024) * Math.PI
    );
    this.context.lineTo(a, a);
    this.context.fill();
    this.context.beginPath();
    this.context.arc(a, a, d, 0, 2 * Math.PI);
    this.context.stroke();
    0 != this.q &&
      1024 != this.q &&
      (this.context.beginPath(),
      this.context.moveTo(a, a - d),
      this.context.lineTo(a, a),
      this.context.lineTo(
        a + Math.cos(((2 * this.q) / 1024 - 0.5) * Math.PI) * d,
        a + Math.cos(((2 * this.q) / 1024 + 1) * Math.PI) * d
      ),
      this.context.stroke());
  };
  this.draw = function () {
    xzu166 && xzu690.drawImage(this.canvas, xzu347, xzu438 + 2 * xzu347);
  };
}
function zto1322() {
  var a, d;
  this.init = function () {
    d = Array(101);
    for (var c = d.length - 1; 0 <= c; c--) d[c] = zto1304(32768 * c, 100);
    this.setSeed(0);
  };
  this.value = function (c) {
    return d[c];
  };
  this.getSeed = function () {
    return zto1304(a - 1, 2);
  };
  this.setSeed = function (c) {
    a = ((2 * c) % 32768) + 1;
  };
  this.random = function () {
    return (a = (167 * a) % 32768);
  };
}
function zto1323() {
  function a() {
    b = 0;
    if (d() || c)
      (c = !1),
        xzu694 > xzu689.width && (xzu689.width = xzu694),
        xzu695 > xzu689.height && (xzu689.height = xzu695),
        zto1009(),
        xzu723.init(),
        xzu196.init(),
        xzu200.zto1324(),
        xzu727.init(),
        xzu198.zto1324(),
        xzu182.zto1324(),
        xzu187.zto1324(),
        xzu719.zto1324(),
        xzu725.zto1324(),
        1 <= xzu154
          ? (xzu189.zto1324(!1),
            xzu188.zto1324(),
            xzu190.zto1324(),
            xzu186.zto1324(),
            xzu185.zto1324(),
            xzu181.zto1324(),
            xzu180.zto1324(),
            xzu183.zto1324(),
            xzu184.zto1324(),
            xzu179.prepare(),
            xzu715.init(),
            xzu718.zto1324(),
            xzu210.zto1324(),
            xzu191.zto1324(),
            xzu722.zto1324(),
            xzu186.readjustCoords())
          : (0 == xzu198.getState()
              ? xzu200.setVisible(0, !0)
              : 2 == xzu198.getState()
              ? ((xzu196.get(6).txt = "Map: " + xzu215.get(xzu737).name),
                (xzu196.get(9).txt = xzu194.getString()),
                xzu196.deleteMenu())
              : 3 == xzu198.getState()
              ? xzu199.zto1324()
              : 7 == xzu198.getState() &&
                (xzu201.zto1324(),
                xzu195.zto1324(),
                xzu195.refresh(),
                xzu195.refreshPosition(),
                xzu193.zto1324()),
            xzu198.hidePopups(),
            xzu198.refreshPositions()),
        (xzu720.requestRepaint = !0);
  }
  function d() {
    var g = Math.floor(document.documentElement.clientWidth || 10),
      e = Math.floor(document.documentElement.clientHeight || 10);
    g = 10 > g ? 10 : g;
    e = 10 > e ? 10 : e;
    return g != xzu697 || e != xzu698
      ? ((xzu697 = g),
        (xzu698 = e),
        (xzu694 = xzu697),
        (xzu695 = xzu698),
        (xzu696 = xzu695 < xzu694 ? xzu695 : xzu694),
        !0)
      : !1;
  }
  var c = !1,
    b;
  this.init = function () {
    b = 1;
    xzu694 = xzu695 = xzu696 = xzu697 = xzu698 = 0;
    d();
    window.addEventListener("resize", a);
  };
  this.calculate = function () {
    800 <= ++b && a();
  };
  this.publicResize = function () {
    c = !0;
    a();
  };
}
function zto1327() {
  function a(p) {
    xzu175.clearAttack(d, n);
    p ? (xzu672[d] += c) : d == xzu161 && (xzu717.values[14] += c);
    xzu208.removeIndex(d, f);
  }
  var d, c, b, g, e, m, h, l, k, f, n;
  this.calculate = function (p, r, t, q, u) {
    k = p;
    n = r;
    d = t;
    e = xzu206.getX(q);
    m = xzu206.getY(q);
    h = xzu206.getX(u);
    l = xzu206.getY(u);
    g = b = xzu206.coordToPoint(e, m);
    f = xzu208.getSeaIndex(d, n);
    -1 == f
      ? (xzu206.isThisShip(b, d) && xzu206.drawSeaSquare(b),
        (c = 0),
        a(!1),
        (p = !1))
      : ((c = xzu208.getStrength(d, f)), (p = !0));
    if (
      p &&
      (xzu206.isThisShip(b, d) && xzu206.drawSeaSquare(b),
      (p = zto1304(c, 128)),
      (p = 1 > p ? 1 : p),
      (c -= p),
      d == xzu161 && (xzu717.values[14] += p),
      c <= xzu160 ? (a(!1), (p = !1)) : (xzu208.setStrength(d, f, c), (p = !0)),
      p)
    )
      if (
        ((p = xzu206.coordToPoint(e, m)),
        (b =
          Math.abs(h - e) >= Math.abs(l - m)
            ? p + xzu18[h > e ? 1 : 3]
            : p + xzu18[l > m ? 2 : 0]),
        (e = xzu206.getX(b)),
        (m = xzu206.getY(b)),
        xzu175.setPosition(k, b),
        (p = xzu206.isLand(b) ? !1 : !0),
        p)
      )
        xzu206.isOcean(b) && xzu206.drawShipSquare(b, d);
      else
        a: {
          if (xzu206.isNeutral(b)) p = xzu150;
          else {
            p = xzu206.getPlayerAt(b);
            if (p == d) {
              a(!0);
              break a;
            }
            if (
              xzu166 &&
              ((xzu152 && d % 2 == p % 2) ||
                (!xzu152 && p < xzu146 && xzu721.ids[d] == xzu721.ids[p]))
            ) {
              r = 200 * xzu670[p] - xzu672[p];
              r = c > r ? r : c;
              d == xzu161 &&
                ((xzu717.values[14] += c), xzu181.addSupport(r, p));
              p == xzu161 && xzu181.receiveSupport(r, d);
              xzu672[p] += r;
              a(!1);
              break a;
            }
          }
          d == xzu161 && (xzu717.values[12] += c);
          xzu175.clearAttack(d, n);
          xzu208.removeIndex(d, f);
          xzu673[d].push(g);
          xzu208.add(d, c, p);
          xzu171.newAttack(d, !0);
        }
  };
}
function zto1337() {
  var a, d, c, b;
  this.init = function () {
    var g;
    c = !0;
    b = "rgb(" + xzu736[0] + "," + xzu736[1] + "," + xzu736[2] + ")";
    var e = 2 == xzu737 || 9 == xzu737 ? !0 : (c = !1);
    if (e) d = null;
    else {
      a = zto1304(96, 4);
      if (1 == xzu737) {
        var m = 0;
        var h = 160;
      } else (m = 128), (h = 32);
      b = "rgb(" + m + "," + m + "," + m + ")";
      d = Array(4);
      for (var l, k, f = 3; 0 <= f; f--) {
        d[f] = document.createElement("canvas");
        l = 0 == f % 2 ? xzu731 : a;
        k = 0 == f % 2 ? a : xzu732 + 2 * a;
        d[f].width = l;
        d[f].height = k;
        var n = d[f].getContext("2d", { alpha: !1 }),
          p = n.getImageData(0, 0, l, k),
          r = p.data;
        if (0 == f % 2)
          for (g = a - 1; 0 <= g; g--) {
            var t = h + Math.floor(((g + 1) * (m - h)) / (a + 1));
            for (e = l - 1; 0 <= e; e--) {
              var q = 4 * ((0 == f ? a - g - 1 : g) * l + e);
              r[q] = t;
              r[q + 1] = t;
              r[q + 2] = t;
            }
          }
        else {
          for (e = a - 1; 0 <= e; e--)
            for (
              t = h + Math.floor(((e + 1) * (m - h)) / (a + 1)), g = k - 1 - a;
              g >= a;
              g--
            )
              (q = 4 * (g * l + (3 == f ? a - e - 1 : e))),
                (r[q] = t),
                (r[q + 1] = t),
                (r[q + 2] = t);
          for (var u = 1; 0 <= u; u--)
            for (e = a - 1; 0 <= e; e--)
              for (g = a - 1; 0 <= g; g--)
                (t = (Math.pow(e * e + g * g, 0.5) + 1) / (a + 1)),
                  (t = 1 < t ? 1 : t),
                  (t = h + Math.floor(t * (m - h))),
                  (q =
                    4 *
                    ((0 == u ? a - g - 1 : g + u * (k - a)) * l +
                      (1 == f ? e : a - e - 1))),
                  (r[q] = t),
                  (r[q + 1] = t),
                  (r[q + 2] = t);
        }
        n.putImageData(p, 0, 0);
      }
      xzu734.fillStyle = "rgb(" + h + "," + h + "," + h + ")";
      xzu734.fillRect(0, 0, xzu731, 1);
      xzu734.fillRect(0, xzu732 - 1, xzu731, 1);
      xzu734.fillRect(0, 0, 1, xzu732);
      xzu734.fillRect(xzu731 - 1, 0, 1, xzu732);
    }
  };
  this.zto1145 = function () {
    var g = c ? 0 : -a;
    zto1310(
      g,
      g,
      xzu731 - 2 * g,
      xzu732 - 2 * g,
      xzu711.camX,
      xzu711.camY,
      xzu711.camW,
      xzu711.camH
    ) || ((xzu690.fillStyle = b), xzu690.fillRect(0, 0, xzu697, xzu698));
  };
  this.draw = function () {
    c ||
      (zto1309(
        0,
        -a,
        xzu731,
        a,
        xzu711.camX,
        xzu711.camY,
        xzu711.camW,
        xzu711.camH
      ) && xzu690.drawImage(d[0], xzu711.mapX, xzu711.mapY - a),
      zto1309(
        xzu731,
        -a,
        a,
        xzu732 + 2 * a,
        xzu711.camX,
        xzu711.camY,
        xzu711.camW,
        xzu711.camH
      ) && xzu690.drawImage(d[1], xzu711.mapX + xzu731, xzu711.mapY - a),
      zto1309(
        0,
        xzu732,
        xzu731,
        a,
        xzu711.camX,
        xzu711.camY,
        xzu711.camW,
        xzu711.camH
      ) && xzu690.drawImage(d[2], xzu711.mapX, xzu711.mapY + xzu732),
      zto1309(
        -a,
        -a,
        a,
        xzu732 + 2 * a,
        xzu711.camX,
        xzu711.camY,
        xzu711.camW,
        xzu711.camH
      ) && xzu690.drawImage(d[3], xzu711.mapX - a, xzu711.mapY - a));
  };
}
function zto1340() {
  function a(e) {
    6 == xzu198.getState()
      ? xzu197.connectionEstablished()
      : 8 != xzu198.getState() && xzu187.connectionEstablished();
  }
  function d(e) {
    var m = new FileReader();
    m.addEventListener("loadend", function () {
      xzu224.unwrapPackage(new Uint8Array(m.result));
    });
    m.readAsArrayBuffer(e.data);
  }
  function c(e) {
    xzu199.init(e.code);
  }
  function b(e) {
    xzu699 && console.log("socketOnError: " + e);
  }
  var g;
  this.newConnection = function () {
    if (void 0 !== g && g.readyState != WebSocket.CLOSED) return !1;
    g = new WebSocket(
      xzu699
        ? "wss://territorial.io/debugging/"
        : "wss://territorial.io/socket/"
    );
    g.onopen = a;
    g.onmessage = d;
    g.onclose = c;
    g.onerror = b;
    return !0;
  };
  this.isFree = function () {
    return void 0 === g || g.readyState == WebSocket.CLOSED;
  };
  this.isConnected = function () {
    return void 0 !== g && g.readyState == WebSocket.OPEN;
  };
  this.send = function (e) {
    g.readyState == WebSocket.OPEN && g.send(e);
  };
  this.close = function (e) {
    void 0 === g ||
      (g.readyState != WebSocket.OPEN &&
        g.readyState != WebSocket.CONNECTING) ||
      g.close(e);
  };
}
function zto1345() {
  function a() {
    xzu716.threadCount++;
    xzu716.play();
  }
  this.s = 3;
  this.sounds = Array(this.s + 1);
  this.soundsReady = Array(this.s + 1);
  this.threadCount = 20;
  this.time = 0;
  this.initiated = !1;
  this.init = function () {
    if (!window.document.documentMode) {
      for (var d = this.s - 1; 0 <= d; d--)
        this.addSound(
          d,
          "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAE5ABVVVVVVVVVVVVVVVVVVVVVVVVVf39/f39/f39/f39/f39/f39/f3+qqqqqqqqqqqqqqqqqqqqqqqqqqtXV1dXV1dXV1dXV1dXV1dXV1dXV//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAOQAAAAAAAABOT6qwwWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/7UMQAAAog7TIUxAABbKKrlx6AABIPIRzAmAGAGFaEAOB8t5TTt9IAuC9hRQfABgHEgAMA7BwHih2H7A3BufcJXolf+guff8vf//+ie7vveiJ//8JWiV/+lbvfuKBgu9YYLg/+H4KAP4ODpIOJ2B9MUnTMOsXFsfvWeRwfsrCDgcueS5QPB6MOo2Dx5/liZUJmya0hRsU/IxO796lZttFJVW4/mNozLFEa+5MOp+0fp2p+Irn+W+LlK//8keniomYqAADBWABQtrCM43g5ixH/+1LEBwDL6ONGXPSACXMap6GDDeHqxnscT43mWM3TtBo7pKexMyVPUKrQuXs1JE5I/NlEx0TTUNajcUMfU9pX/K2t3+41v2MajP+6khjkp1uTnqt/5cMr2rj7KKNyvnv2mvf9TdZFEIAfAGRazJ2ZTTTZJQvNKok7b6yyLvzLTAEeAUcJk1guHFnpXRuol0OyOdYZIgrEdDOQajSCw60PEdDbN64J4DF1a6mvL7qZNjCNIwNIKObDyeTlS8udHP61d8ABT6EAoABgFgWRTl3Lu//7UsQHAAt1C0OHmGzBhiSpNPGXKYnCWJFHQ6QadlO4QNMoaCEBioeJ1WiUE+5wifpy50W/SawF/oSZCAggtIIiZGZEkJABHFgbnlF8ykm6Jl75OZpkU0iAAAAAAITFEHw/cm/LMikyQAqAeyQF3bDpNEthwHKzqNMLymbmBxYNwJMwc5hVxC3SalL1qzZw1uMPUc0awUxsFXhw2rB7FtW99mZmjHyHejQy78uZxj8MccalcnXZpCJmmXVum0lC2oPd3oLVMdumRUAAQDoOopjZ//tSxAYAC3UJQYeYb8FqFKf6nmABN1DWYnhlMJ+KdtZlmdQLYEYVCRFHoVOl5R6kr1/uTm+Kj99Z8d5zv0zonWBBh8PWWfRmbtkxzI3YpKVM/hVcpkV+lwiu3PcOOOLJoSJ4R3AjSiKREIoAYKleLA5DkIIXwBCWjlUqqSiVM6ja9EiQWagYpo25+Iy2x6hTVfn07QW/35df5iM2ia9HWZNw89L0wurIbtQ2GetMOsPQ73ZK48pWhNauyUonls2qU44k00QAABHoN4yAjm4JCQX/+1LECIAMTQc3GSWACAAANIOAAAQnCK5BS4wzuJxSG4dXgSBsKSZs/8ngUofoRHac/yM4fjY8ianUTX/2GlGaBtTTU1aa//k1ImonVTtbrdaP//JqcVZHC7rbDnfP//+kxRg5/9JVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="
        );
      this.initiated = !0;
      this.addSound(
        this.s,
        "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAACoABtbW1tbW1tbW1tbW1tbW1tbW1tkpKSkpKSkpKSkpKSkpKSkpKSkpK2tra2tra2tra2tra2tra2tra2ttvb29vb29vb29vb29vb29vb29vb//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAaRAAAAAAAAAqDGJ7xx//sUZAAAAGoWTAUAQAILQojwoBQAQfh1YBgWgAA6iqWDANAA/qchCEIRugQAAAAQRX//zh8AAIKQ8PDADzH/4F4SAs/99er//lD9Zr+tH6BPCvRPDCOshGlfMtv/C4Rh//sUZAKAAIsdXIYVQAANgrkgwBQAAcwBhTwBgDA2CmODgQABAR4bRp///9fF/i9tH5q+c5QFAvcPgcvpBBIAHN+AAH5s2HXJpNQxh/+tf3ukWgQIyReNoQ1S//5ABgKY//sUZAMAAJgc2oUJQAILwpkQoBQAQgQvbhgSgAA8CuaXAFAAEBISGGZh7////3cSlP9OrSjmBg0TESm6X8APjixspcDhfT2cK+sRfD4AEkAAH+b8YABosOqFm9Fv/wrw//sUZAIAAHAMXYYUwAANo2jwwBwAAnABaZwBgAAyimODgCABAwEGWG/+31clmP0m+005fUbgtQ478mJAAArgAAMAPg0DQNDhKCv//8RBx3//mMFAQEBEioQKCilMQU1F//sUZAIP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
      );
    }
  };
  this.deinit = function () {
    if (this.initiated) {
      this.initiated = !1;
      for (var d = this.s - 1; 0 <= d; d--)
        document.body.removeChild(this.sounds[d]), (this.sounds[d] = null);
    }
  };
  this.addSound = function (d, c) {
    this.soundsReady[d] = 0;
    this.sounds[d] = document.createElement("audio");
    this.sounds[d].src = c;
    this.sounds[d].setAttribute("preload", "auto");
    this.sounds[d].setAttribute("controls", "none");
    this.sounds[d].style.display = "none";
    3 > d &&
      ((this.sounds[d].onpause = function () {
        xzu716.soundsReady[d] = 1;
      }),
      this.sounds[d].addEventListener("canplaythrough", function () {
        xzu716.soundsReady[d] =
          0 == xzu716.soundsReady[d] ? 1 : xzu716.soundsReady[d];
      }));
    document.body.appendChild(this.sounds[d]);
  };
  this.playGameEntry = function () {
    xzu354.objs[1].sel && this.initiated && this.sounds[3].play();
  };
  this.play = function () {
    if (7 == xzu198.getState() && xzu354.objs[1].sel && this.initiated) {
      var d = performance.now();
      if (d > this.time + 10)
        for (var c = this.s - 1; 0 <= c; c--)
          if (1 == this.soundsReady[c]) {
            this.time = d;
            xzu716.soundsReady[c] = 2;
            this.sounds[c].play();
            return;
          }
      0 < this.threadCount &&
        (this.threadCount--,
        setTimeout(a, Math.floor(16 + 16 * Math.random())));
    }
  };
}
function zto1347() {
  this.size = 501;
  this.territory = new Uint32Array(this.size);
  this.balance = new Uint32Array(this.size);
  this.interest = new Uint16Array(this.size);
  this.filled = 0;
  this.interval = 1;
  this.c = 0;
  this.max = [0, 0, 0];
  this.values = 0;
  this.valuesStr =
    "Avg. Attack Strength;Number Attacks;Ships sent;Bots erased;Humans erased;Attacked by Bots;Attacked by Humans;Territorial Loss;Territorial Income;Interest Income;Overall Income;War Taxes;Attack Losses;Defense Losses;Shipping Losses;Overall Expenses".split(
      ";"
    );
  this.init = function () {
    this.filled = 0;
    this.interval = 1;
    this.c = 0;
    this.resetMax();
    this.resetValues();
  };
  this.calculate = function () {
    0 < this.c-- || this.feed();
  };
  this.feed = function () {
    0 != xzu665[xzu161] &&
      ((this.territory[this.filled] = xzu670[xzu161]),
      (this.balance[this.filled] = xzu672[xzu161]),
      (this.interest[this.filled] = xzu209.getPlayerInterest(xzu161)),
      this.setMax(this.filled),
      this.filled++,
      this.filled == this.size && this.crunch(),
      (this.c = this.interval - 1),
      xzu718.refresh());
  };
  this.crunch = function () {
    this.resetMax();
    this.setMax(0);
    this.filled = 1 + zto1304(this.size, 2);
    for (var a = 1; a < this.filled; a++)
      (this.territory[a] = this.territory[2 * a]),
        (this.balance[a] = this.balance[2 * a]),
        (this.interest[a] = this.interest[2 * a]),
        this.setMax(a);
    this.interval *= 2;
  };
  this.resetMax = function () {
    this.max[0] = this.max[1] = this.max[2] = 0;
  };
  this.resetValues = function () {
    this.values = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  };
  this.setMax = function (a) {
    this.max[0] =
      this.territory[a] > this.max[0] ? this.territory[a] : this.max[0];
    this.max[1] = this.balance[a] > this.max[1] ? this.balance[a] : this.max[1];
    this.max[2] =
      this.interest[a] > this.max[2] ? this.interest[a] : this.max[2];
  };
}
function zto1348() {
  this.index =
    this.lineWidth =
    this.fontSize1 =
    this.fontSize0 =
    this.h2 =
    this.h1 =
    this.h0 =
    this.w3 =
    this.w2 =
    this.w1 =
    this.w0 =
    this.h =
    this.w =
      0;
  this.strs = ["Territory", "Balance", "Interest", "Numbers"];
  this.isVisible = !1;
  this.crossX = -1;
  this.mousePressing = !1;
  this.init = function () {
    this.isVisible = !1;
    this.crossX = -1;
    this.mousePressing = !1;
    this.zto1324();
  };
  this.zto1324 = function () {
    this.w = xzu694 < 1.618 * xzu695 ? xzu694 : 1.618 * xzu695;
    this.w = Math.floor(
      (xzu706 && xzu694 < xzu695
        ? 1
        : xzu706
        ? 0.8
        : xzu694 < xzu695
        ? 0.65
        : 0.5) * this.w
    );
    this.lineWidth = Math.floor(1 + 0.006 * this.w);
    this.w -= xzu706 && xzu694 < xzu695 ? 2 * xzu347 + this.lineWidth : 0;
    this.h = Math.floor(this.w / 1.618);
    this.w0 = Math.floor(1 + 0.02 * this.w);
    this.h0 = this.w1 = Math.floor(1 + 0.04 * this.w);
    this.h1 = Math.floor(1 + 0.075 * this.w);
    this.fontSize0 = Math.floor(this.w * (xzu706 ? 0.028 : 0.02));
    this.fontSize0 = 6 > this.fontSize0 ? 6 : this.fontSize0;
    this.fontSize1 = Math.floor(0.028 * this.w);
    this.fontSize1 = 6 > this.fontSize1 ? 6 : this.fontSize1;
    this.h2 = this.h - 2 * this.h0 - this.h1;
    this.isVisible && this.setW2();
  };
  this.mouseDown = function (a, d) {
    if (!this.isVisible) return !1;
    var c = a,
      b = d;
    a -= zto1304(xzu697 - this.w, 2);
    d -= zto1304(xzu698 - this.h, 2);
    if (0 > a || 0 > d || a >= this.w || d >= this.h) {
      if (1 < xzu180.mouseDown(c, b)) return !0;
      this.hide();
      return !0;
    }
    if (d < this.h - this.h1)
      return (
        (this.mousePressing = !0),
        (this.crossX = (a - 2 * this.w0 - this.w2) / this.w3),
        !0
      );
    c = Math.floor(a / (this.w / this.strs.length));
    c = 0 > c ? 0 : c >= this.strs.length ? this.strs.length - 1 : c;
    c != this.index &&
      ((this.index = c), this.setW2(), (xzu720.requestRepaint = !0));
    return !0;
  };
  this.mouseMove = function (a) {
    if (this.isVisible && this.mousePressing) {
      a -= zto1304(xzu697 - this.w, 2);
      var d = this.crossX;
      this.crossX = (a - 2 * this.w0 - this.w2) / this.w3;
      if ((0 <= this.crossX && 1 >= this.crossX) || (0 <= d && 1 >= d))
        xzu720.requestRepaint = !0;
      return !0;
    }
    return !1;
  };
  this.mouseClick = function () {
    this.mousePressing && (this.mousePressing = !1);
  };
  this.switchState = function () {
    this.isVisible ? this.hide() : this.show();
  };
  this.show = function () {
    2 > xzu717.filled || ((this.isVisible = !0), this.setW2());
  };
  this.hide = function () {
    this.isVisible = !1;
    this.crossX = -1;
  };
  this.setW2 = function () {
    2 > this.index
      ? (this.w2 = xzu184.measureText(
          xzu183.createString(xzu717.max[this.index]),
          xzu332 + this.fontSize0 + xzu336
        ))
      : 2 == this.index &&
        (this.w2 = xzu184.measureText(
          xzu190.percentageToString(6, 2),
          xzu332 + this.fontSize0 + xzu336
        ));
    this.w3 = this.w - 2 * this.w0 - this.w2 - this.w1;
  };
  this.refresh = function () {
    this.isVisible && this.setW2();
  };
  this.draw = function () {
    this.isVisible && this.drawAll();
  };
  this.drawAll = function () {
    var a = zto1304(xzu697 - this.w, 2),
      d = zto1304(xzu698 - this.h, 2);
    xzu690.setTransform(1, 0, 0, 1, a, d);
    xzu690.fillStyle = xzu290;
    xzu690.fillRect(0, 0, this.w, this.h);
    this.drawButtons();
    xzu690.strokeRect(0, 0, this.w, this.h);
    xzu690.textAlign = xzu331;
    xzu690.font = xzu332 + this.fontSize0 + xzu336;
    0 == this.index
      ? this.drawHelper0(xzu717.territory, a, d)
      : 1 == this.index
      ? this.drawHelper0(xzu717.balance, a, d)
      : 2 == this.index
      ? this.drawInterest(a, d)
      : 3 == this.index &&
        (this.drawLeftNumbers(a, d), this.drawRightNumbers(a, d));
    xzu690.setTransform(1, 0, 0, 1, 0, 0);
  };
  this.drawButtons = function () {
    xzu690.lineWidth = this.lineWidth;
    xzu690.textBaseline = xzu326;
    xzu690.textAlign = xzu329;
    xzu690.strokeStyle = xzu315;
    xzu690.font = xzu332 + this.fontSize1 + xzu336;
    var a = this.w / this.strs.length;
    xzu690.fillStyle = xzu298;
    xzu690.fillRect(this.index * a, this.h - this.h1, a, this.h1);
    xzu690.fillStyle = xzu315;
    for (var d = this.strs.length - 1; 0 <= d; d--)
      xzu690.strokeRect(d * a, this.h - this.h1, a, this.h1),
        xzu690.fillText(this.strs[d], (d + 0.5) * a, this.h - 0.46 * this.h1);
  };
  this.drawHelper0 = function (a, d, c) {
    var b = xzu717.max[this.index];
    xzu690.setTransform(1, 0, 0, 1, d + 2 * this.w0 + this.w2, c + this.h0);
    xzu690.lineWidth = 2;
    d = this.h2 / Math.sqrt(b);
    xzu690.beginPath();
    xzu690.moveTo(this.w3, this.h2 - d * Math.sqrt(a[xzu717.filled - 1]));
    for (c = xzu717.filled - 2; 0 <= c; c--)
      xzu690.lineTo(
        (c * this.w3) / (xzu717.filled - 1),
        this.h2 - d * Math.sqrt(a[c])
      );
    xzu690.stroke();
    a = this.drawCross(a, d, 0.5);
    0.95 > a && xzu690.fillText(xzu183.createString(b), -this.w0, 0);
    0.05 < Math.abs(a - 0.5) &&
      xzu690.fillText(
        xzu183.createString(Math.floor(b / 4)),
        -this.w0,
        Math.floor(this.h2 / 2)
      );
    0.05 < a && xzu690.fillText("0", -this.w0, this.h2);
  };
  this.drawInterest = function (a, d) {
    xzu690.setTransform(1, 0, 0, 1, a + 2 * this.w0 + this.w2, d + this.h0);
    xzu690.lineWidth = 2;
    var c = this.h2 / xzu717.max[this.index];
    xzu690.beginPath();
    xzu690.moveTo(this.w3, this.h2 - c * xzu717.interest[xzu717.filled - 1]);
    for (var b = xzu717.filled - 2; 0 <= b; b--)
      xzu690.lineTo(
        (b * this.w3) / (xzu717.filled - 1),
        this.h2 - c * xzu717.interest[b]
      );
    xzu690.stroke();
    c = this.drawCross(xzu717.interest, c, 1);
    b = xzu717.max[this.index] / 100;
    0.95 > c && xzu690.fillText(xzu190.percentageToString(b, 2), -this.w0, 0);
    0.05 < Math.abs(c - 0.5) &&
      xzu690.fillText(
        xzu190.percentageToString(b / 2, 2),
        -this.w0,
        Math.floor(this.h2 / 2)
      );
    0.05 < c &&
      xzu690.fillText(xzu190.percentageToString(0, 2), -this.w0, this.h2);
  };
  this.drawLeftNumbers = function (a, d) {
    var c;
    xzu690.setTransform(1, 0, 0, 1, a + 0.34 * this.w, d + 2 * this.h0);
    xzu690.textAlign = xzu331;
    var b = this.h - 4 * this.h0 - this.h1,
      g = zto1304(xzu717.values.length, 2);
    for (c = g - 1; 0 <= c; c--)
      xzu690.fillText(xzu717.valuesStr[c], 0, (c * b) / (g - 1));
    xzu690.setTransform(1, 0, 0, 1, a + 0.39 * this.w, d + 2 * this.h0);
    xzu690.textAlign = xzu330;
    c = xzu717.values[1];
    xzu690.fillText(
      xzu190.percentageToString(xzu717.values[0] / (10 * (1 > c ? 1 : c)), 1),
      0,
      0
    );
    for (c = g - 2; 1 <= c; c--)
      xzu690.fillText(xzu717.values[c].toString(), 0, (c * b) / (g - 1));
    xzu690.fillText(
      xzu190.percentageToString(
        100 * (1 - xzu670[xzu161] / xzu717.values[7]),
        0
      ),
      0,
      b
    );
  };
  this.drawRightNumbers = function (a, d) {
    xzu690.setTransform(1, 0, 0, 1, a + 0.74 * this.w, d + 2 * this.h0);
    xzu690.textAlign = xzu331;
    for (
      var c = this.h - 4 * this.h0 - this.h1,
        b = zto1304(xzu717.values.length, 2),
        g = b - 1;
      0 <= g;
      g--
    )
      xzu690.fillText(xzu717.valuesStr[g + b], 0, (g * c) / (b - 1));
    g = xzu183.createString(xzu717.values[8] + xzu717.values[9]);
    var e = xzu690.measureText(g).width;
    xzu690.setTransform(1, 0, 0, 1, a + 0.79 * this.w + e, d + 2 * this.h0);
    xzu690.fillText(xzu183.createString(xzu717.values[8]), 0, 0);
    xzu690.fillText(
      xzu183.createString(xzu717.values[9]),
      0,
      (1 * c) / (b - 1)
    );
    xzu690.fillText(g, 0, (2 * c) / (b - 1));
    xzu690.fillText(
      xzu183.createString(xzu717.values[11]),
      0,
      (3 * c) / (b - 1)
    );
    g = xzu717.values[12] - xzu208.getOverallStrength(xzu161);
    xzu690.fillText(xzu183.createString(g), 0, (4 * c) / (b - 1));
    xzu690.fillText(
      xzu183.createString(xzu717.values[13]),
      0,
      (5 * c) / (b - 1)
    );
    xzu690.fillText(
      xzu183.createString(xzu717.values[14]),
      0,
      (6 * c) / (b - 1)
    );
    xzu690.fillText(
      xzu183.createString(
        xzu717.values[11] + g + xzu717.values[13] + xzu717.values[14]
      ),
      0,
      c
    );
  };
  this.drawCross = function (a, d, c) {
    if (0 > this.crossX || 1 < this.crossX) return 0.25;
    var b = this.crossX * (xzu717.filled - 1),
      g = Math.floor(b),
      e = a[g];
    e += (b - g) * (a[g < xzu717.filled - 1 ? g + 1 : g] - e);
    xzu690.strokeStyle = xzu317;
    0.04 < this.crossX &&
      this.drawLine(
        0,
        this.h2 - d * Math.pow(e, c),
        (b * this.w3) / (xzu717.filled - 1),
        this.h2 - d * Math.pow(e, c)
      );
    0.04 < e / xzu717.max[this.index] &&
      this.drawLine(
        (b * this.w3) / (xzu717.filled - 1),
        this.h2,
        (b * this.w3) / (xzu717.filled - 1),
        this.h2 - d * Math.pow(e, c)
      );
    xzu690.fillStyle = xzu310;
    xzu690.beginPath();
    xzu690.arc(
      (b * this.w3) / (xzu717.filled - 1),
      this.h2 - d * Math.pow(e, c),
      4,
      0,
      2 * Math.PI
    );
    xzu690.fill();
    a = Math.floor(
      this.crossX * xzu720.getInterval() * xzu720.getCalculations()
    );
    xzu690.fillStyle = xzu315;
    xzu690.fillText(
      1 == c
        ? xzu190.percentageToString(e / 100, 2)
        : xzu183.createString(Math.floor(e)),
      -this.w0,
      this.h2 - d * Math.pow(e, c)
    );
    xzu690.textAlign = xzu329;
    xzu690.fillText(
      xzu190.getTimer(a),
      (b * this.w3) / (xzu717.filled - 1),
      this.h2 + this.fontSize0 - (xzu706 ? 2 : 0)
    );
    xzu690.textAlign = xzu331;
    return (d * Math.pow(e, c)) / this.h2;
  };
  this.drawLine = function (a, d, c, b) {
    xzu690.beginPath();
    xzu690.moveTo(a, d);
    xzu690.lineTo(c, b);
    xzu690.stroke();
  };
}
function zto1349() {
  this.b0 = "[";
  this.b1 = "]";
  this.teamID = this.ids = null;
  this.init = function () {
    this.ids = new Uint8Array(xzu146);
    this.teamID = new Uint8Array(xzu146);
    var a = [],
      d = zto1304(xzu146, 2) + (xzu146 % 2),
      c = xzu146 - d;
    var b = xzu146 - 1;
    a: for (; 0 <= b; b--) {
      this.teamID[b] = 0;
      this.ids[b] = 2;
      var g = xzu664[b].indexOf(this.b0);
      if (!(0 > g)) {
        var e = xzu664[b].indexOf(this.b1);
        if (
          e > g + 1 &&
          ((e = xzu664[b]
            .substring(g + 1, e)
            .toUpperCase()
            .trim()),
          !(6 < e.length))
        ) {
          for (g = a.length - 1; 0 <= g; g--)
            if (a[g].name == e) {
              a[g].n++;
              this.ids[b] = g + 3;
              this.teamID[b] = g + 1;
              continue a;
            }
          252 >= a.length &&
            ((this.ids[b] = a.length + 3),
            (this.teamID[b] = this.ids[b] - 2),
            a.push({ name: e, n: 1 }));
        }
      }
    }
    for (g = a.length - 1; 0 <= g; g--) {
      e = 0;
      for (b = a.length - 1; 1 <= b; b--) a[b].n > a[e].n && (e = b);
      var m = d >= c;
      for (b = xzu146 - 1; 0 <= b; b--)
        this.ids[b] == e + 3 &&
          (m
            ? ((this.ids[b] = 0), d--, (m = 0 < d))
            : ((this.ids[b] = 1), c--, (m = 0 == c)));
      a[e].n = 0;
    }
    for (b = xzu146 - 1; 0 <= b; b--)
      2 == this.ids[b] &&
        (0 == b % 2
          ? 0 < c
            ? ((this.ids[b] = 1), c--)
            : ((this.ids[b] = 0), d--)
          : 0 < d
          ? ((this.ids[b] = 0), d--)
          : ((this.ids[b] = 1), c--));
  };
  this.getStrongestClanMember = function () {
    for (var a = 512 < xzu722.q ? 0 : 1, d = -1, c = xzu146 - 1; 0 <= c; c--)
      this.ids[c] == a &&
        0 < this.teamID[c] &&
        (-1 == d || xzu443[c] < xzu443[d]) &&
        (d = c);
    return -1 != d
      ? (xzu201.isContest() &&
          ((a = xzu664[d]
            .substring(
              xzu664[d].indexOf(this.b0) + 1,
              xzu664[d].indexOf(this.b1)
            )
            .toUpperCase()
            .trim()),
          xzu181.addClanMsg(a),
          xzu725.update(1, a, 0, 0)),
        d)
      : xzu442[0];
  };
}
function zto1350() {
  for (var a, d, c = xzu13 - 1; 0 <= c; c--)
    (a = zto1304(xzu15[c], 4) % xzu731),
      (d = zto1304(xzu15[c], 4 * xzu731)),
      (xzu666[xzu9] = xzu666[xzu9] > a ? a : xzu666[xzu9]),
      (xzu667[xzu9] = xzu667[xzu9] > d ? d : xzu667[xzu9]),
      (xzu668[xzu9] = xzu668[xzu9] < a ? a : xzu668[xzu9]),
      (xzu669[xzu9] = xzu669[xzu9] < d ? d : xzu669[xzu9]);
}
function zto1351() {
  var a = xzu673[xzu9].length,
    d,
    c = a - 1;
  a: for (; 0 <= c; c--) {
    for (d = 3; 0 <= d; d--) {
      var b = xzu673[xzu9][c] + xzu18[d];
      if (
        xzu206.isNeutral(b) ||
        (xzu206.isPlayer(b) && xzu206.getPlayerAt(b) != xzu9)
      ) {
        xzu206.drawAttackSquare(xzu673[xzu9][c], xzu9);
        continue a;
      }
    }
    xzu673[xzu9][c] = xzu673[xzu9][a - 1];
    xzu673[xzu9].pop();
    a--;
  }
}
function zto1352() {
  var a = xzu674[xzu9].length,
    d,
    c,
    b = a - 1;
  a: for (; 0 <= b; b--) {
    var g = (c = !1);
    for (d = 3; 0 <= d; d--) {
      var e = xzu674[xzu9][b] + xzu18[d];
      if (xzu206.isNeutralOrEnemy(e, xzu9)) continue a;
      g = g || xzu206.isOcean(e);
      c = c || xzu206.isOutside(e);
    }
    g
      ? xzu675[xzu9].push(xzu674[xzu9][b])
      : c
      ? xzu676[xzu9].push(xzu674[xzu9][b])
      : xzu206.drawTerritorialSquare(xzu674[xzu9][b], xzu9);
    xzu674[xzu9][b] = xzu674[xzu9][a - 1];
    xzu674[xzu9].pop();
    a--;
  }
}
function zto1353() {
  xzu670[xzu12] -= xzu13;
}
function zto1354(a) {
  for (var d = a.length, c = d - 1; 0 <= c; c--)
    !xzu206.isThisPlayer(xzu12, a[c]) &&
      xzu206.isLand(a[c]) &&
      ((a[c] = a[d - 1]), a.pop(), d--);
}
function zto1355(a) {
  for (var d = a.length, c = d - 1; 0 <= c; c--)
    xzu206.isThisPlayer(xzu12, a[c]) || ((a[c] = a[d - 1]), a.pop(), d--);
}
function zto1356(a) {
  for (var d = a.length, c, b, g = d - 1; 0 <= g; g--)
    for (c = 3; 0 <= c; c--)
      if (((b = a[g] + xzu18[c]), xzu206.isNeutralOrEnemy(b, xzu12))) {
        xzu674[xzu12].push(a[g]);
        a[g] = a[d - 1];
        a.pop();
        d--;
        break;
      }
}
function zto1357() {
  for (var a, d, c = xzu13 - 1; 0 <= c; c--)
    for (a = 3; 0 <= a; a--)
      (d = xzu15[c] + xzu18[a]),
        xzu206.isThisPlayer(xzu12, d) &&
          xzu206.isTerritorialLand(d) &&
          (xzu674[xzu12].push(d), xzu206.drawBorderSquare(d, xzu12));
}
function zto1358() {
  var a;
  a: for (; xzu667[xzu12] < xzu669[xzu12]; ) {
    for (a = xzu668[xzu12]; a >= xzu666[xzu12]; a--)
      if (xzu206.isThisPlayer(xzu12, 4 * (xzu667[xzu12] * xzu731 + a))) break a;
    xzu667[xzu12]++;
  }
  a: for (; xzu667[xzu12] < xzu669[xzu12]; ) {
    for (a = xzu668[xzu12]; a >= xzu666[xzu12]; a--)
      if (xzu206.isThisPlayer(xzu12, 4 * (xzu669[xzu12] * xzu731 + a))) break a;
    xzu669[xzu12]--;
  }
  a: for (; xzu666[xzu12] < xzu668[xzu12]; ) {
    for (a = xzu669[xzu12]; a >= xzu667[xzu12]; a--)
      if (xzu206.isThisPlayer(xzu12, 4 * (a * xzu731 + xzu666[xzu12]))) break a;
    xzu666[xzu12]++;
  }
  a: for (; xzu666[xzu12] < xzu668[xzu12]; ) {
    for (a = xzu669[xzu12]; a >= xzu667[xzu12]; a--)
      if (xzu206.isThisPlayer(xzu12, 4 * (a * xzu731 + xzu668[xzu12]))) break a;
    xzu668[xzu12]--;
  }
}
function zto1359() {
  function a() {
    xzu720.time = performance.now();
    xzu720.calculateB();
    window.requestAnimationFrame(a);
  }
  this.requestRepaint = !1;
  this.threadMultiplayer = this.threadSingleplayer = this.calculateB = null;
  this.time = 0;
  this.init = function () {
    window.requestAnimationFrame(a);
  };
  this.initMainMenu = function () {
    this.calculateB = this.calculateMainMenu;
    this.threadSingleplayer = null;
    this.requestRepaint = !0;
  };
  this.initSingleplayer = function () {
    this.threadSingleplayer = new zto1361();
    this.calculateB = this.calculateSingleplayer;
  };
  this.initMultiplayer = function () {
    this.threadMultiplayer = new zto1362();
    this.threadMultiplayer.init();
    this.calculateB = this.calculateMultiplayer;
  };
  this.calculateMainMenu = function () {
    xzu182.calculate();
    xzu197.calculate();
    xzu201.calculate();
    xzu227.calculate();
    this.requestRepaint && ((this.requestRepaint = !1), xzu198.draw());
  };
  this.calculateSingleplayer = function () {
    this.threadSingleplayer.calculate();
  };
  this.calculateMultiplayer = function () {
    this.threadMultiplayer.calculate();
  };
  this.getCalculations = function () {
    return xzu152
      ? this.threadSingleplayer.calculations
      : this.threadMultiplayer.calculations;
  };
  this.getInterval = function () {
    return 56;
  };
}
function zto1361() {
  this.time = xzu720.time;
  this.isPaused = !1;
  this.interval = 56;
  this.calculations = this.index = 0;
  this.processingDone = !1;
  this.calculate = function () {
    xzu227.calculate();
    xzu164
      ? zto927()
      : 0 == this.index
      ? xzu720.time >= this.time &&
        ((this.time +=
          this.interval *
          Math.floor(1 + (xzu720.time - this.time) / this.interval)),
        2 == xzu154 || xzu180.isSelected
          ? zto923()
          : (zto924(), this.calculations++, xzu714.render()),
        this.index++)
      : (xzu180.isSelected
          ? zto927()
          : ((xzu720.requestRepaint = !0), zto926()),
        (this.index = 0));
    zto925();
    xzu720.requestRepaint && ((xzu720.requestRepaint = !1), zto966());
  };
}
function zto1362() {
  this.time = xzu720.time;
  this.isPaused = !1;
  this.interval = 56;
  this.syncs = this.syncExpected = this.calculations = this.index = 0;
  this.packsSync = this.packs = null;
  this.cycle = 7;
  this.init = function () {
    this.syncs = this.syncExpected = 0;
    this.packs = [];
    this.packsSync = [];
    this.index = 0;
  };
  this.syncNext = function (a, d) {
    if (xzu164)
      xzu224.unwrapPackageAttack(a),
        xzu190.calculateFreeSpawn(d),
        19 == d && xzu168.calculate(),
        xzu714.atLeastOnePixelChanged &&
          (xzu210.endFreePositioning(), xzu210.repaint(), xzu714.renderAll());
    else if ((this.packs.push(a), this.packsSync.push(d), 2 == xzu154)) {
      for (var c = 0; c < this.packs.length; c++)
        xzu224.unwrapPackageAttack(this.packs[c]);
      this.packs = [];
      this.packsSync = [];
    } else
      d != this.syncExpected % 4096 && xzu222.close(3204), this.syncExpected++;
  };
  this.calculate = function () {
    xzu227.calculate();
    xzu164
      ? ((xzu720.requestRepaint =
          xzu190.calculateFreeSpawn(-1) || xzu720.requestRepaint),
        zto927())
      : 0 == this.index
      ? xzu720.time >= this.time &&
        ((this.time +=
          this.interval *
          Math.floor(1 + (xzu720.time - this.time) / this.interval)),
        2 == xzu154 ? zto923() : this.calculateProcessing(),
        this.index++)
      : ((xzu720.requestRepaint = !0), zto926(), (this.index = 0));
    zto925();
    xzu720.requestRepaint && ((xzu720.requestRepaint = !1), zto966());
  };
  this.calculateProcessing = function () {
    if (this.calculations != 7 * this.syncs)
      zto924(), this.calculations++, xzu714.render();
    else {
      for (var a = !1; this.syncProcessPackage(); )
        if (((a = !0), zto924(), this.calculations++, 1 < this.packs.length))
          for (var d = this.cycle - 2; 0 <= d; d--)
            zto924(), this.calculations++;
        else break;
      a ? xzu714.render() : (zto923(), xzu714.renderAll());
    }
  };
  this.syncProcessPackage = function () {
    for (var a = 0; a < this.packs.length; a++)
      if (this.packsSync[a] == this.syncs % 4096)
        return (
          this.syncs++,
          xzu224.unwrapPackageAttack(this.packs[a]),
          this.packs.splice(a, 1),
          this.packsSync.splice(a, 1),
          !0
        );
    return !1;
  };
}
function zto1363() {
  function a() {
    return Math.pow(Math.pow(g - c, 2) + Math.pow(e - b, 2), 0.5);
  }
  function d(m) {
    c = m.touches[0].clientX;
    b = m.touches[0].clientY;
    g = m.touches[1].clientX;
    e = m.touches[1].clientY;
  }
  var c, b, g, e;
  this.touchStart = function (m) {
    return 1 < m.touches.length ? (d(m), xzu179.hide(), !0) : !1;
  };
  this.touchMove = function (m) {
    if (0 == xzu154) return !1;
    if (1 < m.touches.length) {
      if (!xzu176.end()) return !0;
      var h = a();
      d(m);
      m = a();
      xzu186.applyZoom(Math.floor((c + g) / 2), Math.floor((b + e) / 2), m / h);
      return (xzu720.requestRepaint = !0);
    }
    return !1;
  };
}
function zto1366() {
  function a(l) {
    var k = e(l, 20);
    l = e(l, 20);
    xzu201.setNumbers(k, l);
  }
  function d(l) {
    for (var k = e(l, 11), f, n, p = 0; p < k; p++) {
      if (h > 8 * m - 12) {
        xzu222.close(3216);
        return;
      }
      f = e(l, 2);
      if (0 == f) xzu195.transformName(e(l, 11));
      else if (1 == f) {
        f = e(l, 18);
        var r = e(l, 9),
          t = e(l, 9),
          q = e(l, 3);
        n = e(l, 5);
        if (h > 8 * m - 10 * n) {
          xzu222.close(3217);
          return;
        }
        n = g(n, l);
        xzu195.addName({
          name: n,
          nameShort: n,
          id: f,
          color0: r,
          color1: t,
          idColor: q,
        });
      } else xzu195.remove(e(l, 11));
    }
    0 < k && xzu195.actualizeScrolling();
  }
  function c(l) {
    var k = e(l, 4),
      f = e(l, 4);
    k = b(l, k);
    l = b(l, f);
    xzu725.addList(0, l, 10, 1, 0.4, 0.5);
    xzu725.addList(1, k, 1e3, 3, 0.6, 0.4);
  }
  function b(l, k) {
    for (var f = [], n, p, r = 0; r < k; r++)
      (n = e(l, 5)), (n = g(n, l)), (p = e(l, 16)), f.push({ name: n, elo: p });
    return f;
  }
  function g(l, k) {
    for (var f = Array(l), n = 0; n < l; n++) f[n] = e(k, 10);
    return xzu178.decode(f);
  }
  function e(l, k) {
    for (var f = 0, n, p, r = h; r < h + k; r++)
      (n = zto1304(r, 8)),
        (p = 7 - (r % 8)),
        (f |= ((l[n] >> p) & 1) << (h + k - r - 1));
    h += k;
    return f;
  }
  var m, h;
  this.unwrapPackage = function (l) {
    h = 0;
    m = l.length;
    if (0 == m) xzu222.close(3205);
    else {
      var k = e(l, 3);
      if (0 == k)
        2 > m
          ? xzu222.close(3206)
          : xzu720.threadMultiplayer.syncNext(l, e(l, 13));
      else if (1 == k)
        if (8 == xzu198.getState()) xzu222.close(3207);
        else if (4 > m) xzu222.close(3208);
        else {
          c(l);
          k = e(l, 12);
          var f = e(l, 5);
          if (8 * m < 20 + k * f) xzu222.close(3209);
          else {
            for (var n = Array(k), p = 0; p < k; p++) n[p] = e(l, f);
            xzu187.addArr(n);
          }
        }
      else if (2 == k)
        if (15 > m) xzu222.close(3210);
        else if (6 != xzu198.getState()) xzu222.close(3211);
        else {
          c(l);
          k = e(l, 7);
          f = e(l, 6);
          n = e(l, 14);
          p = e(l, 14);
          var r = e(l, 3),
            t = 1 == e(l, 1),
            q = 1 == e(l, 1),
            u = 1 == e(l, 1),
            y = e(l, 11),
            v = e(l, 20),
            z = e(l, 20),
            B = e(l, 11);
          b: {
            for (var w = 8 * m, x = [], C; h <= w - 18; ) {
              var I = e(l, 18),
                O = e(l, 9),
                S = e(l, 9),
                Q = e(l, 3);
              C = e(l, 5);
              if (0 == C) break;
              if (h + 10 * C > w) {
                xzu222.close(3218);
                l = null;
                break b;
              }
              C = g(C, l);
              x.push({
                name: C,
                nameShort: C,
                id: I,
                color0: O,
                color1: S,
                idColor: Q,
              });
            }
            0 == x.length ? (xzu222.close(3219), (l = null)) : (l = x);
          }
          null == l || 0 == l.length
            ? xzu222.close(3212)
            : xzu201.init(k, f, n, p, r, t, q, u, B, B, y, v, z, l);
        }
      else
        3 == k
          ? 8 > m
            ? xzu222.close(3213)
            : 7 != xzu198.getState()
            ? xzu222.close(3214)
            : ((k = e(l, 7)),
              100 < k
                ? ((k = e(l, 6)),
                  (f = e(l, 14)),
                  (n = e(l, 14)),
                  (p = e(l, 3)),
                  (r = 1 == e(l, 1)),
                  (t = 1 == e(l, 1)),
                  (q = 1 == e(l, 1)),
                  a(l),
                  d(l),
                  xzu201.endProgress(k, f, n, p, r, t, q))
                : (a(l), d(l), xzu201.setProgress(k)))
          : 4 == k
          ? 5 != m
            ? xzu222.close(3222)
            : 7 != xzu198.getState()
            ? xzu222.close(3223)
            : ((k = e(l, 18)), (l = e(l, 18)), xzu195.createChallenge(k, l))
          : 5 == k
          ? 3 != m
            ? xzu222.close(3225)
            : 7 == xzu198.getState() &&
              ((l = e(l, 18)),
              (k = xzu195.idToPlayer(l)),
              void 0 !== k && xzu193.add(k.name, l))
          : 7 == k
          ? 6 != m
            ? xzu222.close(3229)
            : 7 == xzu198.getState() &&
              ((k = e(l, 16)),
              (f = e(l, 16)),
              (l = e(l, 11)),
              xzu724.createNewGame(k, f, l))
          : 6 == k &&
            (4 != m
              ? xzu222.close(3230)
              : 8 == xzu198.getState() &&
                ((k = e(l, 9)),
                (f = e(l, 9)),
                (l = e(l, 7)),
                0 != xzu665[k] &&
                  0 != xzu665[f] &&
                  ((l %= xzu715.nAll), xzu181.sendEmoji(k, f, l))));
    }
  };
  this.unwrapPackageAttack = function (l) {
    if (!xzu152) {
      h = 16;
      for (var k = 8 * l.length; h + 12 <= k; ) {
        var f = e(l, 3);
        var n = e(l, 9);
        if (0 == f) {
          f = e(l, 10);
          var p = e(l, 9);
          p = p == n ? xzu150 : p;
          xzu174.addNewLandAttack(n, f, p);
        } else if (1 == f) {
          f = e(l, 10);
          p = e(l, 11);
          var r = e(l, 11);
          xzu174.addNewSeaAttack(n, f, p, r);
        } else
          2 == f
            ? ((p = e(l, 9)),
              (p = p == n ? xzu150 : p),
              xzu174.addNewCancelAttack(n, p))
            : 3 == f
            ? xzu174.removePlayer(n)
            : 4 == f
            ? ((f = e(l, 7)), xzu210.switchEmoji(n, f))
            : 5 == f && xzu174.surrender(n);
      }
    }
  };
}
function zto1381() {
  this.camH = this.camW = this.camY = this.camX = this.mapY = this.mapX = 0;
  this.camC = [0, 0, 0, 0];
  this.calculatePreRendering = function () {
    this.mapX = xzu186.getX();
    this.mapY = xzu186.getY();
    this.camX = -this.mapX;
    this.camY = -this.mapY;
    this.camW = xzu697 / xzu393;
    this.camH = xzu698 / xzu393;
    this.camC[0] = Math.floor(this.camX);
    this.camC[1] = Math.floor(this.camY);
    this.camC[2] = Math.floor(this.camC[0] + this.camW + 1);
    this.camC[3] = Math.floor(this.camC[1] + this.camH + 1);
    xzu714.camMoveDetection = !0;
  };
}
function zto1382() {
  var a, d;
  this.init = function () {
    a = 1;
    d = 0;
  };
  this.calculate = function () {
    0 < a &&
      ((d = 0 == d ? xzu720.time + 16 : d),
      (a -= 0.001 * (xzu720.time - d)),
      (a = 0 > a ? 0 : a),
      (d = xzu720.time),
      (xzu720.requestRepaint = !0));
  };
  this.draw = function () {
    0 < a &&
      ((xzu690.fillStyle = "rgba(0,0,0," + a + ")"),
      xzu690.fillRect(0, 0, xzu697, xzu698));
  };
}
function zto1385() {
  function a(e) {
    var m,
      h = zto866();
    if (0 == h[0] && 0 == h[1] && 0 == h[2] && 0 == h[3]) {
      for (m = 3; 0 <= m; m--)
        h[m] = Math.floor(Math.random() * Math.pow(2, 30));
      zto873(h) || (h[0] = h[1] = h[2] = h[3] = 0);
    }
    for (m = 0; 4 > m; m++) b(e, 30, h[m]);
    return 0 != h[0] || 0 != h[1] || 0 != h[2] || 0 != h[3];
  }
  function d(e) {
    b(e, 14, xzu693);
    b(e, 4, xzu705);
    b(e, 1, xzu709 ? 1 : 0);
    b(e, 1, xzu708 ? 1 : 0);
    var m = new Date();
    m = 60 * m.getHours() + m.getMinutes();
    b(e, 11, m);
  }
  function c(e) {
    return zto1304(e, 8) + (0 < e % 8 ? 1 : 0);
  }
  function b(e, m, h) {
    for (var l, k, f = g; f < g + m; f++)
      (l = zto1304(f, 8)),
        (k = 7 - (f % 8)),
        (e[l] |= ((h >> (m - (f - g + 1))) & 1) << k);
    g += m;
  }
  var g;
  this.wrapPackageSiteLoaded = function () {
    xzu212.reset();
    var e = new Uint8Array(5);
    g = 0;
    b(e, 4, 4);
    d(e);
    xzu222.send(e);
  };
  this.wrapPackageLobbyEntry = function () {
    xzu212.reset();
    var e = xzu178.encode(xzu204.getName()),
      m = e.length,
      h = new Uint8Array(c(173 + 10 * m));
    g = 0;
    b(h, 4, 5);
    d(h);
    a(h);
    b(h, 9, xzu206.rgbToIndex(xzu354.objs[3].win.colors[0]));
    b(h, 9, xzu206.rgbToIndex(xzu354.objs[3].win.colors[1]));
    for (var l = 0; l < m; l++) b(h, 10, e[l]);
    xzu222.send(h);
  };
  this.wrapPackageChallenge = function (e) {
    xzu212.reset();
    var m = new Uint8Array(3);
    g = 0;
    b(m, 4, 11);
    b(m, 18, e);
    xzu222.send(m);
  };
  this.wrapPackageReport = function (e) {
    var m = new Uint8Array(18);
    g = 0;
    b(m, 4, 7);
    b(m, 18, e);
    a(m) && (xzu212.reset(), xzu222.send(m));
  };
  this.wrapPackageSingleplayer = function () {
    xzu212.reset();
    var e = xzu178.encode(xzu204.getName()),
      m = e.length,
      h = new Uint8Array(c(58 + 10 * m));
    g = 0;
    b(h, 4, 6);
    d(h);
    b(h, 6, xzu737);
    b(h, 14, xzu203.getSeedPlacing());
    b(h, 3, xzu194.getIndex(xzu194.balanceTaken));
    for (var l = 0; l < m; l++) b(h, 10, e[l]);
    xzu222.send(h);
    xzu201.hideWindows(!1);
    zto977(
      xzu203.getSeedPlacing(),
      xzu194.balanceTaken,
      0,
      [
        {
          name: xzu204.getName(),
          id: 0,
          color0: xzu206.rgbToIndex(xzu354.objs[3].win.colors[0]),
          color1: xzu206.rgbToIndex(xzu354.objs[3].win.colors[1]),
          idColor: 0,
        },
      ],
      xzu196.get(32).colorBg == xzu196.get(5).colorBg,
      xzu196.get(34).colorBg == xzu196.get(5).colorBg,
      !1
    );
  };
  this.wrapPackageSkipJoin = function (e) {
    xzu212.reset();
    var m = new Uint8Array(1);
    g = 0;
    b(m, 4, 8);
    b(m, 1, e ? 1 : 0);
    xzu222.send(m);
  };
  this.wrapPackageLandAttack = function (e, m) {
    var h = new Uint8Array(3);
    g = 0;
    b(h, 4, 0);
    xzu212.reset();
    b(h, 10, e);
    b(h, 9, m);
    xzu222.send(h);
  };
  this.wrapPackageSeaAttack = function (e, m, h) {
    var l = new Uint8Array(5);
    g = 0;
    b(l, 4, 1);
    xzu212.reset();
    b(l, 10, e);
    b(l, 11, m);
    b(l, 11, h);
    xzu222.send(l);
  };
  this.wrapPackageCancelAttack = function (e) {
    var m = new Uint8Array(2);
    g = 0;
    b(m, 4, 2);
    xzu212.reset();
    b(m, 9, e);
    xzu222.send(m);
  };
  this.wrapEmoji = function (e) {
    xzu212.reset();
    var m = new Uint8Array(2);
    g = 0;
    b(m, 4, 13);
    b(m, 7, e);
    xzu222.send(m);
  };
  this.wrapPrivateEmoji = function (e, m) {
    xzu212.reset();
    var h = new Uint8Array(3);
    g = 0;
    b(h, 4, 15);
    b(h, 9, m);
    b(h, 7, e);
    xzu222.send(h);
  };
  this.wrapSurrender = function () {
    xzu212.reset();
    var e = new Uint8Array(1);
    g = 0;
    b(e, 4, 12);
    xzu222.send(e);
  };
  this.wrapPackageGameEnding = function (e) {
    if (!xzu152) {
      xzu212.reset();
      var m = new Uint8Array(4);
      g = 0;
      b(m, 4, 3);
      b(m, 12, xzu720.getCalculations() % 2048);
      xzu166
        ? b(m, 9, xzu721.getStrongestClanMember())
        : 2 == xzu167
        ? b(m, 9, e ? xzu161 : 1 - xzu161)
        : b(m, 9, xzu442[0]);
      xzu222.send(m);
    }
  };
  this.wrapPingPong = function (e) {
    var m = new Uint8Array(1);
    g = 0;
    b(m, 4, 9);
    b(m, 1, e ? 1 : 0);
    xzu222.send(m);
  };
}
zto1255();
