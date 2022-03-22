! function(r, u) {
    "use strict";
    var c = "function",
        m = "object",
        i = "model",
        s = "name",
        e = "type",
        o = "vendor",
        n = "version",
        a = "architecture",
        d = "console",
        t = "mobile",
        l = "tablet",
        w = "smarttv",
        b = "wearable",
        p = {
            extend: function(i, s) {
                var e = {};
                for (var o in i) s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o];
                return e
            },
            has: function(i, s) {
                return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase())
            },
            lowerize: function(i) {
                return i.toLowerCase()
            },
            major: function(i) {
                return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : u
            },
            trim: function(i) {
                return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        g = {
            rgx: function(i, s) {
                for (var e, o, r, n, a, d, t = 0; t < s.length && !a;) {
                    var l = s[t],
                        w = s[t + 1];
                    for (e = o = 0; e < l.length && !a;)
                        if (a = l[e++].exec(i))
                            for (r = 0; r < w.length; r++) d = a[++o], typeof(n = w[r]) == m && 0 < n.length ? 2 == n.length ? typeof n[1] == c ? this[n[0]] = n[1].call(this, d) : this[n[0]] = n[1] : 3 == n.length ? typeof n[1] != c || n[1].exec && n[1].test ? this[n[0]] = d ? d.replace(n[1], n[2]) : u : this[n[0]] = d ? n[1].call(this, d, n[2]) : u : 4 == n.length && (this[n[0]] = d ? n[3].call(this, d.replace(n[1], n[2])) : u) : this[n] = d || u;
                    t += 2
                }
            },
            str: function(i, s) {
                for (var e in s)
                    if (typeof s[e] == m && 0 < s[e].length) {
                        for (var o = 0; o < s[e].length; o++)
                            if (p.has(s[e][o], i)) return "?" === e ? u : e
                    } else if (p.has(s[e], i)) return "?" === e ? u : e;
                return i
            }
        },
        h = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        f = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [s, n],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    [s, "Opera Mini"], n
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    [s, "Opera"], n
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i],
                [s, n],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    [s, "IE"], n
                ],
                [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i],
                [
                    [s, "Edge"], n
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    [s, "Yandex"], n
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    [s, "Puffin"], n
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    [s, "UCBrowser"], n
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [s, /_/g, " "], n
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    [s, "WeChat"], n
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                [s, n],
                [/(QQ)\/([\d\.]+)/i],
                [s, n],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                [s, n],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                [s, n],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                [s, n],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                [s],
                [/(LBBROWSER)/i],
                [s],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                [n, [s, "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                [n, [s, "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                [s, n],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                [n, [s, "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    [s, /(.+)/, "$1 WebView"], n
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    [s, /(.+(?:g|us))(.+)/, "$1 $2"], n
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                [n, [s, "Android Browser"]],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                [s, n],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    [s, "Dolphin"], n
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    [s, "Chrome"], n
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    [s, "Opera Coast"], n
                ],
                [/fxios\/([\w\.-]+)/i],
                [n, [s, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [n, [s, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [n, s],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    [s, "GSA"], n
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [s, [n, g.str, h.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [s, n],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    [s, "Netscape"], n
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [s, n]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    [a, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    [a, p.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    [a, "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    [a, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    [a, /ower/, "", p.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    [a, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    [a, p.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [i, o, [e, l]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [i, [o, "Apple"],
                    [e, l]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    [i, "Apple TV"],
                    [o, "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [o, i, [e, l]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                [i, [o, "Amazon"],
                    [e, l]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    [i, g.str, h.device.amazon.model],
                    [o, "Amazon"],
                    [e, t]
                ],
                [/android.+aft([bms])\sbuild/i],
                [i, [o, "Amazon"],
                    [e, w]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [i, o, [e, t]],
                [/\((ip[honed|\s\w*]+);/i],
                [i, [o, "Apple"],
                    [e, t]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [o, i, [e, t]],
                [/\(bb10;\s(\w+)/i],
                [i, [o, "BlackBerry"],
                    [e, t]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i],
                [i, [o, "Asus"],
                    [e, l]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [o, "Sony"],
                    [i, "Xperia Tablet"],
                    [e, l]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i],
                [i, [o, "Sony"],
                    [e, t]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [o, i, [e, d]],
                [/android.+;\s(shield)\sbuild/i],
                [i, [o, "Nvidia"],
                    [e, d]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [i, [o, "Sony"],
                    [e, d]
                ],
                [/(sprint\s(\w+))/i],
                [
                    [o, g.str, h.device.sprint.vendor],
                    [i, g.str, h.device.sprint.model],
                    [e, t]
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [o, i, [e, l]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                [o, [i, /_/g, " "],
                    [e, t]
                ],
                [/(nexus\s9)/i],
                [i, [o, "HTC"],
                    [e, l]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                [i, [o, "Huawei"],
                    [e, t]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                [o, i, [e, t]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [i, [o, "Microsoft"],
                    [e, d]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    [i, /\./g, " "],
                    [o, "Microsoft"],
                    [e, t]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                [i, [o, "Motorola"],
                    [e, t]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [i, [o, "Motorola"],
                    [e, l]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    [o, p.trim],
                    [i, p.trim],
                    [e, w]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    [i, /^/, "SmartTV"],
                    [o, "Samsung"],
                    [e, w]
                ],
                [/\(dtv[\);].+(aquos)/i],
                [i, [o, "Sharp"],
                    [e, w]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    [o, "Samsung"], i, [e, l]
                ],
                [/smart-tv.+(samsung)/i],
                [o, [e, w], i],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                [
                    [o, "Samsung"], i, [e, t]
                ],
                [/sie-(\w*)/i],
                [i, [o, "Siemens"],
                    [e, t]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    [o, "Nokia"], i, [e, t]
                ],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [i, [o, "Acer"],
                    [e, l]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                [i, [o, "LG"],
                    [e, l]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    [o, "LG"], i, [e, l]
                ],
                [/(lg) netcast\.tv/i],
                [o, i, [e, w]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                [i, [o, "LG"],
                    [e, t]
                ],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [i, [o, "Lenovo"],
                    [e, l]
                ],
                [/linux;.+((jolla));/i],
                [o, i, [e, t]],
                [/((pebble))app\/[\d\.]+\s/i],
                [o, i, [e, b]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                [o, i, [e, t]],
                [/crkey/i],
                [
                    [i, "Chromecast"],
                    [o, "Google"]
                ],
                [/android.+;\s(glass)\s\d/i],
                [i, [o, "Google"],
                    [e, b]
                ],
                [/android.+;\s(pixel c)\s/i],
                [i, [o, "Google"],
                    [e, l]
                ],
                [/android.+;\s(pixel [xl2]{1,2}|pixel)\s/i],
                [i, [o, "Google"],
                    [e, t]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [i, /_/g, " "],
                    [o, "Xiaomi"],
                    [e, t]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    [i, /_/g, " "],
                    [o, "Xiaomi"],
                    [e, l]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                [i, [o, "Meizu"],
                    [e, l]
                ],
                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i],
                [i, [o, "OnePlus"],
                    [e, t]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                [i, [o, "RCA"],
                    [e, l]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                [i, [o, "Dell"],
                    [e, l]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                [i, [o, "Verizon"],
                    [e, l]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    [o, "Barnes & Noble"], i, [e, l]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                [i, [o, "NuVision"],
                    [e, l]
                ],
                [/android.+;\s(k88)\sbuild/i],
                [i, [o, "ZTE"],
                    [e, l]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                [i, [o, "Swiss"],
                    [e, t]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                [i, [o, "Swiss"],
                    [e, l]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                [i, [o, "Zeki"],
                    [e, l]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    [o, "Dragon Touch"], i, [e, l]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                [i, [o, "Insignia"],
                    [e, l]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                [i, [o, "NextBook"],
                    [e, l]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    [o, "Voice"], i, [e, t]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    [o, "LvTel"], i, [e, t]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                [i, [o, "Envizen"],
                    [e, l]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                [o, i, [e, l]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                [i, [o, "MachSpeed"],
                    [e, l]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                [o, i, [e, l]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                [i, [o, "Rotor"],
                    [e, l]
                ],
                [/android.+(KS(.+))\s+build/i],
                [i, [o, "Amazon"],
                    [e, l]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                [o, i, [e, l]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    [e, p.lowerize], o, i
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                [i, [o, "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [n, [s, "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [s, n],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                [n, s]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [s, n],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [s, [n, g.str, h.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [s, "Windows"],
                    [n, g.str, h.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                    [s, "BlackBerry"], n
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i],
                [s, n],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    [s, "Symbian"], n
                ],
                [/\((series40);/i],
                [s],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    [s, "Firefox OS"], n
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                [s, n],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    [s, "Chromium OS"], n
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    [s, "Solaris"], n
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                [s, n],
                [/(haiku)\s(\w+)/i],
                [s, n],
                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                [
                    [n, /_/g, "."],
                    [s, "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [s, "Mac OS"],
                    [n, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i],
                [s, n]
            ]
        },
        v = function(i, s) {
            if ("object" == typeof i && (s = i, i = u), !(this instanceof v)) return new v(i, s).getResult();
            var e = i || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                o = s ? p.extend(f, s) : f;
            return this.getBrowser = function() {
                var i = {
                    name: u,
                    version: u
                };
                return g.rgx.call(i, e, o.browser), i.major = p.major(i.version), i
            }, this.getCPU = function() {
                var i = {
                    architecture: u
                };
                return g.rgx.call(i, e, o.cpu), i
            }, this.getDevice = function() {
                var i = {
                    vendor: u,
                    model: u,
                    type: u
                };
                return g.rgx.call(i, e, o.device), i
            }, this.getEngine = function() {
                var i = {
                    name: u,
                    version: u
                };
                return g.rgx.call(i, e, o.engine), i
            }, this.getOS = function() {
                var i = {
                    name: u,
                    version: u
                };
                return g.rgx.call(i, e, o.os), i
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return e
            }, this.setUA = function(i) {
                return e = i, this
            }, this
        };
    v.VERSION = "0.7.18", v.BROWSER = {
        NAME: s,
        MAJOR: "major",
        VERSION: n
    }, v.CPU = {
        ARCHITECTURE: a
    }, v.DEVICE = {
        MODEL: i,
        VENDOR: o,
        TYPE: e,
        CONSOLE: d,
        MOBILE: t,
        SMARTTV: w,
        TABLET: l,
        WEARABLE: b,
        EMBEDDED: "embedded"
    }, v.ENGINE = {
        NAME: s,
        VERSION: n
    }, v.OS = {
        NAME: s,
        VERSION: n
    }, r && (r.UAParser = v)
}("object" == typeof window ? window : this);
var oSpPOptions = {
    sAppUrl: "https://gta5.grand-rp.su",
    sAppUrlShow: "https://gta5.grand-rp.su",
    sOrigUrl: "https://gta5.grand-rp.su",
    sOrigFFUrl: "https://gta5.grand-rp.su",
    sPushHost: "8feadacf719d74966b69e976f9e585eb",
    sPushSenderID: "305927004918",
    bHttps: oSpP = !1,
    bSendToParent: false,
    aBrowser: {},
    sBrowser: "",
    sOs: "",
    sSafariPushId: "web.com.grand.push",
    sServerApi: "https://gta5.grand-rp.su/push/add",
    gcmServer: "https://android.googleapis.com/gcm/send/",
    fcmServer: "https://fcm.googleapis.com/fcm/",
    mozillaServer: "https://updates.push.services.mozilla.com/wpush/v2/",
    jsIncludeDomain: "gta5.grand-rp.su",
    bAutoSubscribe: true,
    sAppKey: "206df5905602c2b8d2c766968d3708c5",
    prompt_settings: "",
    prompt_title: "",
    prompt_text: "",
    prompt_description: "-",
    currentDB: null,
    parentEvent: null,
    initedPage: !1,
    parentVariables: {},
    pushedVariables: {},
    pushedInterval: !1,
    sFirefoxServer: "https://updates.push.services.mozilla.com/push/",
    sFirefoxServer2: "https://updates.push.services.mozilla.com/wpush/v1/",
    bWasPrompt: !1,
    startTime: 0,
    isParentAutoSubscribe: false,
    bSentToServer: !1,
    bSentStatOpened: !1,
    bSentStatPermission: !1,
    bMobileEnabled: true,
    show_splogo: "1",
    spdomain_website: "https://grand-rp.su",
    styles_prefix: "sp",
    aPoweredbyLabel: {
        ru: "-",
        en: "-",
        ua: "-"
    },
    companyName: "grandrp",
    promptHintTitle: {
        ru: "ÐŸÐ¾Ð´Ð¿Ð¸ÑˆÐ¸Ñ‚ÐµÑÑŒ Ð½Ð° Ð½Ð°ÑˆÐ¸ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ!",
        en: "Subscribe to our notifications!",
        ua: "ÐŸÑ–Ð´Ð¿Ð¸ÑˆÑ–Ñ‚ÑŒÑÑ Ð½Ð° Ð½Ð°ÑˆÑ– ÑÐ¿Ð¾Ð²Ñ–Ñ‰ÐµÐ½Ð½Ñ!"
    },
    promptHintText: {
        ru: "Ð’ÐºÐ»ÑŽÑ‡Ð¸Ñ‚Ðµ ÑƒÐ²ÐµÐ´Ð¾Ð¼Ð»ÐµÐ½Ð¸Ñ ÐºÐ»Ð¸ÐºÐ¾Ð¼ Ð¿Ð¾ Ð¸ÐºÐ¾Ð½ÐºÐµ ÐºÐ¾Ð»Ð¾ÐºÐ¾Ð»ÑŒÑ‡Ð¸ÐºÐ°",
        en: "Click the bell icon to enable notifications",
        ua: "Ð©Ð¾Ð± Ð²Ð²Ñ–Ð¼ÐºÐ½ÑƒÑ‚Ð¸ ÑÐ¿Ð¾Ð²Ñ–Ñ‰ÐµÐ½Ð½Ñ, ÐºÐ»Ñ–ÐºÐ½Ñ–Ñ‚ÑŒ Ð½Ð° Ñ–ÐºÐ¾Ð½ÐºÑƒ Ð´Ð·Ð²Ñ–Ð½Ð¾Ñ‡ÐºÐ°"
    },
    iPromptDelay: "0",
    visitNumber: "1",
    bMonetization: false,
    bIframeEnabled: !1,
    sSubscriptionPrefix: "SPTYPE:VAPID1:",
    sVapidPublicKey: "BHg0LSx8FGX-B3ZhbEwuuUtvGGLMs_jbWbmzn4OWVE1O7QI1X167-YBMTeUY9KXrcPlPgVOpPVUdeK4knQuR7qs"
};

function oPromptPush() {
    var i = oSpPOptions.sAppUrl,
        t = oSpPOptions.sAppUrlShow,
        u = oSpPOptions.sOrigUrl,
        r = oSpPOptions.sOrigFFUrl,
        d = oSpPOptions.sPushHost,
        s = oSpPOptions.bHttps,
        m = oSpPOptions.bSendToParent,
        _ = oSpPOptions.jsIncludeDomain,
        S = oSpPOptions.aBrowser,
        g = oSpPOptions.sBrowser,
        P = oSpPOptions.sOs,
        o = oSpPOptions.sSafariPushId,
        b = oSpPOptions.sServerApi,
        n = oSpPOptions.gcmServer,
        a = oSpPOptions.bAutoSubscribe,
        h = oSpPOptions.sAppKey,
        U = oSpPOptions.prompt_settings,
        H = oSpPOptions.prompt_title,
        B = oSpPOptions.prompt_text,
        p = oSpPOptions.prompt_description,
        c = oSpPOptions.currentDB,
        l = oSpPOptions.parentEvent,
        v = oSpPOptions.initedPage,
        M = oSpPOptions.parentVariables,
        w = oSpPOptions.pushedVariables,
        D = oSpPOptions.pushedInterval,
        f = oSpPOptions.sFirefoxServer,
        I = oSpPOptions.sFirefoxServer2,
        A = oSpPOptions.bWasPrompt,
        y = oSpPOptions.startTime,
        O = oSpPOptions.isParentAutoSubscribe,
        N = oSpPOptions.bSentToServer,
        T = oSpPOptions.bSentStatOpened,
        L = oSpPOptions.bSentStatPermission,
        x = oSpPOptions.bMobileEnabled,
        Y = oSpPOptions.show_splogo,
        R = oSpPOptions.spdomain_website,
        V = oSpPOptions.styles_prefix,
        W = oSpPOptions.aPoweredbyLabel,
        Z = oSpPOptions.companyName,
        C = oSpPOptions.promptHintTitle,
        j = oSpPOptions.promptHintText,
        e = oSpPOptions.iPromptDelay,
        E = oSpPOptions.visitNumber,
        k = new Date,
        Q = new Date(k.getFullYear(), k.getMonth() + 1, k.getDate()).getTime();
    Q = k.getDate() + "" + Q, this.start = function() {
        if (!oSpP.detectSite()) return oSpP.log("Application allowed only for " + i), !1;
        if ("iOS" == oSpP.detectOs()) return oSpP.log("Application can not work on iOS"), !1;
        if (P = oSpP.detectOs(), !x && ("iOS" == P || "Android" == P)) return oSpP.log("Application disabled for your device"), !1;
        if (oSpP.detectHttps(), S = oSpP.detectBrowser(), g = S.name.toLowerCase(), ("iOS" == P || "Android" == P) && "chrome" == g && parseFloat(S.version) < 42) return oSpP.log("Application disabled for your browser version"), !1;
        if ("firefox" == g && parseFloat(S.version) < 44) return oSpP.log("Application can not work with Firefox browser version less then 44"), !1;
        if ("opera" == g && parseFloat(S.version) < 43) return oSpP.log("Application can not work with Opera browser version less then 43"), !1;
        if (oSpP.isMobileYandexBrowser()) return oSpP.log("Application can not work with mobile Yandex browser"), !1;
        if ("firefox" == g && (u = r), m) {
            O && (L = T = !0);
            var e = setInterval(function() {
                N && T && L && (oSpP.sendToParent("closeme"), clearInterval(e))
            }, 50)
        }
        if (s)
            if (a) oSpP.startDelayedSubscription(function() {
                oSpP.startSubscription(), "chrome" != g && "firefox" != g && "opera" != g || oSpP.showhelpPromptText(), oSpP.isServiceWorkerChromeSupported() && oSpP.showPushLabel()
            });
            else {
                oSpP.getDbValue("SPIDs", "PromptClosed", function(e) {
                    void 0 === e.target.result && ("chrome" != g && "firefox" != g && "opera" != g || oSpP.startDelayedSubscription(function() {
                        oSpP.showCustomPrompt()
                    }))
                });
                for (var t = document.querySelectorAll("." + V + "_notify_prompt"), o = 0; o < t.length; o++) t[o].addEventListener("click", function() {
                    oSpP.startSubscription()
                })
            } m && window.addEventListener("message", function(e) {
            if (oSpP.detectOrigin(e.origin))
                if ("init" == e.data)(l = e).source.postMessage("initend", l.origin);
                else if (0 === e.data.indexOf("initpage")) {
                2 == (t = e.data.split("|")).length && (v = t[1], localStorage.setItem("source_url", v))
            } else if (0 === e.data.indexOf("initvariables")) {
                var t = e.data.split("|");
                M = JSON.parse(t[1])
            }
        }, !1)
    }, this.startSubscription = function() {
        switch (g) {
            case "chrome":
            case "firefox":
            case "opera":
                navigator.serviceWorker.getRegistrations().then(function(e) {
                    if (e)
                        for (var t = 0; t < e.length; t++) e[t].active && -1 != e[t].active.scriptURL.indexOf(V + "-push-worker.js") && e[t].unregister()
                }), oSpP.isServiceWorkerChromeSupported() && (oSpP.log("ASK for Permission"), y = Date.now(), Notification.requestPermission(oSpP.doActionsWithPermissions), oSpP.registerChrome())
        }
    }, this.clearDomain = function(e) {
        return e.replace("://www.", "://").replace("://www2.", "://")
    }, this.detectSite = function() {
        var e = !(-1 === oSpP.clearDomain(window.location.href.toLowerCase()).indexOf(oSpP.clearDomain(i.toLowerCase())));
        return e = e || !(-1 === oSpP.clearDomain(window.location.href.toLowerCase()).indexOf(oSpP.clearDomain(t.toLowerCase())))
    }, this.detectOrigin = function(e) {
        return !(-1 === oSpP.clearDomain(e.toLowerCase()).indexOf(oSpP.clearDomain(u.toLowerCase())))
    }, this.detectHttps = function() {
        s = 0 === window.location.href.indexOf("https://")
    }, this.log = function(e) {}, this.detectBrowser = function() {
        var e, t = navigator.userAgent,
            o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
            i = t.match(/(edge(?=\/))\/?\s*(\d+)/i) || [];
        return "Edge" === i[1] ? {
            name: i[1],
            version: i[2]
        } : /trident/i.test(o[1]) ? {
            name: "IE",
            version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
        } : "Chrome" === o[1] && null != (e = t.match(/\bOPR\/(\d+)/)) ? {
            name: "Opera",
            version: e[1]
        } : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]), {
            name: o[0],
            version: o[1]
        })
    }, this.isMobileYandexBrowser = function() {
        var e = navigator.userAgent;
        e.match(/(opera|yabrowser|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
        return "YaBrowser" === (e.match(/(YaBrowser(?=\/))\/?\s*(\d+)/i) || [])[1] && ("iOS" == oSpP.detectOs() || "Android" == oSpP.detectOs())
    }, this.isServiceWorkerChromeSupported = function() {
        return "serviceWorker" in navigator
    }, this.isSafariNotificationSupported = function() {
        return "safari" in window && "pushNotification" in window.safari
    }, this.getBrowserlanguage = function() {
        return navigator.language.substring(0, 2)
    }, this.setCookie = function(e, t, o) {
        var i = new Date;
        i.setTime(i.getTime() + 24 * o * 60 * 60 * 1e3);
        var r = "expires=" + i.toUTCString();
        document.cookie = e + "=" + t + "; " + r
    }, this.checkCookie = function(e) {
        for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
            for (var r = o[i];
                " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length)
        }
        return ""
    }, this.doActionsWithPermissions = function(e) {
        var t = Date.now() - y;
        switch (A = !(t < 50), oSpP.hideHintDiv(), oSpP.log("[DD] Permissions: " + e), oSpP.log("[DD] Time diff: " + t), e) {
            case "granted":
                switch (O || A && oSpP.getDbValue("SPIDs", "PromptShowed", function(e) {
                    void 0 === e.target.result ? (oSpP.sendPromptStat("prompt_showed"), oSpP.sendPromptStat("prompt_granted"), oSpP.putValueToDb("SPIDs", {
                        type: "PromptShowed",
                        value: 1
                    })) : (oSpP.sendPromptStat("prompt_showed_again"), oSpP.sendPromptStat("prompt_granted"))
                }), g) {
                    case "chrome":
                    case "firefox":
                    case "opera":
                        oSpP.subscribe()
                }
                break;
            case "default":
                O || A && oSpP.getDbValue("SPIDs", "PromptShowed", function(e) {
                    void 0 === e.target.result ? (oSpP.sendPromptStat("prompt_showed"), oSpP.sendPromptStat("prompt_closed"), oSpP.putValueToDb("SPIDs", {
                        type: "PromptShowed",
                        value: 1
                    })) : (oSpP.sendPromptStat("prompt_showed_again"), oSpP.sendPromptStat("prompt_closed"))
                });
                break;
            case "denied":
                O || A && oSpP.getDbValue("SPIDs", "PromptShowed", function(e) {
                    void 0 === e.target.result ? (oSpP.sendPromptStat("prompt_showed"), oSpP.sendPromptStat("prompt_denied"), oSpP.putValueToDb("SPIDs", {
                        type: "PromptShowed",
                        value: 1
                    })) : (oSpP.sendPromptStat("prompt_showed_again"), oSpP.sendPromptStat("prompt_denied"))
                })
        }
        a ? "default" == e ? oSpP.closePromptHelpText(!1) : oSpP.closePromptHelpText(!0) : "default" == e ? oSpP.closeCustomPrompt(!1) : oSpP.closeCustomPrompt(!0), oSpP.closePushLabel()
    }, this.registerChrome = function() {
        navigator.serviceWorker.register("/" + V + "-push-worker-fb.js", {
            updateViaCache: "none"
        }).then(function(e) {
            e.installing ? oSpP.log("Service worker installing") : e.waiting ? oSpP.log("Service worker installed") : e.active && oSpP.log("Service worker active")
        })
    }, this.checkSafariPermission = function(e) {
        oSpP.log("[DD] Permissions: " + e.permission), "default" === e.permission ? (a ? oSpP.closePromptHelpText(!1) : oSpP.closeCustomPrompt(!1), A = !0, oSpP.getDbValue("SPIDs", "PromptShowed", function(e) {
            void 0 === e.target.result ? (oSpP.sendPromptStat("prompt_showed"), oSpP.putValueToDb("SPIDs", {
                type: "PromptShowed",
                value: 1
            })) : oSpP.sendPromptStat("prompt_showed_again")
        }), window.safari.pushNotification.requestPermission(b, o, {
            appkey: h
        }, oSpP.checkSafariPermission)) : "denied" === e.permission ? (a ? oSpP.closePromptHelpText(!0) : oSpP.closeCustomPrompt(!0), A && oSpP.sendPromptStat("prompt_denied")) : "granted" === e.permission && (oSpP.uns(), a ? oSpP.closePromptHelpText(!0) : oSpP.closeCustomPrompt(!0), A && oSpP.sendPromptStat("prompt_granted"), oSpP.subscribe()), oSpP.closePushLabel()
    }, this.initialiseState = function(e) {
        e.showNotification || oSpP.log("Notifications aren't supported on service workers."), "denied" !== Notification.permission ? "PushManager" in window || oSpP.log("Push messaging isn't supported.") : oSpP.log("The user has blocked notifications.")
    }, this.endpointWorkaround = function(e) {
        switch (g) {
            case "chrome":
            case "opera":
                if ("subscriptionId" in e) var t = e.subscriptionId;
                else t = e.endpoint;
                return ~t.indexOf(n) ? t.split(n)[1] : ~t.indexOf(oSpPOptions.fcmServer + "send/") ? t.split(oSpPOptions.fcmServer + "send/")[1] : t;
            case "firefox":
                return ~(t = e.endpoint).indexOf(f) ? t.split(f)[1] : ~t.indexOf(I) ? t.split(I)[1] : t
        }
    }, this.fetchFcmToken = function(r, s, n) {
        return new Promise(function(t, o) {
            var e = oSpPOptions.fcmServer + "send/" + encodeURIComponent(r),
                i = "authorized_entity=" + oSpPOptions.sPushSenderID;
            return i += "&endpoint=" + e, i += "&encryption_key=" + encodeURIComponent(s), i += "&encryption_auth=" + encodeURIComponent(n), fetch(oSpPOptions.fcmServer + "connect/subscribe", {
                method: "post",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: i
            }).then(function(e) {
                if (200 == e.status) return e.json().then(function(e) {
                    t(e.token)
                });
                t(void 0)
            }).catch(function(e) {
                o(e)
            })
        })
    }, this.getVapidToken = function(o) {
        return new Promise(function(t, e) {
            oSpP.getDbValue("SPIDs", "SubscriptionIdVapid", function(e) {
                void 0 === e.target.result ? (oSpP.putValueToDb("SPIDs", {
                    type: "SubscriptionIdVapid",
                    value: o
                }), t(!1)) : t(!0)
            })
        })
    }, this.subscribe = function() {
        switch (g) {
            case "chrome":
            case "firefox":
            case "opera":
                navigator.serviceWorker.ready.then(function(o) {
                    o.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: oSpP.urlBase64ToUint8Array(oSpPOptions.sVapidPublicKey)
                    }).then(function(e) {
                        var t = oSpP.endpointWorkaround(e),
                            o = e.getKey ? e.getKey("p256dh") : "",
                            i = o ? btoa(String.fromCharCode.apply(null, new Uint8Array(o))) : "",
                            r = e.getKey ? e.getKey("auth") : "",
                            s = r ? btoa(String.fromCharCode.apply(null, new Uint8Array(r))) : "";
                        oSpP.checkLocalSubsctoption(t, i, s), m && oSpP.sendToParent(t)
                    }).catch(function(e) {
                        11 == e.code && navigator.serviceWorker.getRegistrations().then(function(e) {
                            for (var t = 0; t < e.length; t++) - 1 == e[t].active.scriptURL.indexOf("OneSignalSDKWorker.js") && -1 == e[t].active.scriptURL.indexOf("pushcrew-sw.js") && -1 == e[t].active.scriptURL.indexOf("push-worker.js") && -1 == e[t].active.scriptURL.indexOf("sw.js") && -1 == e[t].active.scriptURL.indexOf("service-worker.js") && -1 == e[t].active.scriptURL.indexOf("pushwoosh-service-worker.js") && -1 == e[t].active.scriptURL.indexOf("serviceworker.js") && -1 == e[t].active.scriptURL.indexOf(V + "-push-worker-fb.js") || e[t].unregister().then(function() {
                                navigator.serviceWorker.getRegistration().then(function(e) {
                                    void 0 !== e ? -1 == e.active.scriptURL.indexOf("OneSignalSDKWorker.js") && -1 == e.active.scriptURL.indexOf("pushcrew-sw.js") && -1 == e.active.scriptURL.indexOf("push-worker.js") && -1 == e.active.scriptURL.indexOf("sw.js") && -1 == e.active.scriptURL.indexOf("service-worker.js") && -1 == e.active.scriptURL.indexOf("pushwoosh-service-worker.js") || e.unregister().then(function() {
                                        o.pushManager.getSubscription().then(function(e) {
                                            e ? e.unsubscribe().then(function(e) {
                                                window.location.reload()
                                            }) : window.location.reload()
                                        })
                                    }) : o.pushManager.getSubscription().then(function(e) {
                                        e ? e.unsubscribe().then(function(e) {
                                            window.location.reload()
                                        }) : window.location.reload()
                                    })
                                })
                            })
                        })
                    })
                })
        }
    }, this.checkLocalSubsctoption = function(t, o, i, e) {
        oSpP.log("[DD] subscribe :: subscriptionId: " + t), oSpP.getDbValue("SPIDs", "SubscriptionId", function(e) {
            void 0 === e.target.result ? (oSpP.sendSubscribeDataToServer(t, "subscribe", void 0, o, i), oSpP.putValueToDb("SPIDs", {
                type: "SubscriptionId",
                value: t
            })) : e.target.result.value !== t && (oSpP.sendSubscribeDataToServer(e.target.result.value, "unsubscribe"), oSpP.sendSubscribeDataToServer(t, "subscribe", void 0, o, i), oSpP.putValueToDb("SPIDs", {
                type: "SubscriptionId",
                value: t
            }))
        })
    }, this.unsubscribe = function() {
        switch (g) {
            case "chrome":
            case "firefox":
            case "opera":
                navigator.serviceWorker.ready.then(function(e) {
                    e.pushManager.getSubscription().then(function(e) {
                        oSpP.endpointWorkaround(e);
                        e && e.unsubscribe().then(function(e) {})
                    })
                })
        }
    }, this.getUserVariables = function() {
        for (var e = {}, t = document.querySelectorAll("input.sp_push_custom_data"), o = 0; o < t.length; o++) switch (t[o].type) {
            case "text":
            case "hidden":
                e[t[o].name] = t[o].value;
                break;
            case "checkbox":
                e[t[o].name] = t[o].checked ? 1 : 0;
                break;
            case "radio":
                t[o].checked && (e[t[o].name] = t[o].value)
        }
        return e
    }, this.sendSubscribeDataToServer = function(e, t, o, i, r) {
        var s = new XMLHttpRequest;
        m && "subscribe" == t && (s.onreadystatechange = function() {
            4 == s.readyState && 200 == s.status && (N = !0)
        }), s.open("POST", b, !0), s.setRequestHeader("Content-Type", "application/json"), void 0 === o && ((o = {}).uname = oSpP.checkCookie("lgn"), o.os = oSpP.detectOs()), void 0 === i && (i = ""), o.variables = m ? M : oSpP.getUserVariables();
        var n, a = -(new Date).getTimezoneOffset() / 60;
        if (o.timezoneoffset = a, v) n = v;
        else {
            var p = localStorage.getItem("source_url");
            n = p || window.location.href
        }
        var c = oSpPOptions.sSubscriptionPrefix;
        switch (g) {
            case "safari":
            case "firefox":
                c = ""
        }
        var l = {
            action: "subscription",
            subscriptionId: e,
            subscription_action: t,
            subscription_type: c,
            appkey: h,
            browser: S,
            lang: oSpP.getBrowserlanguage(),
            url: n,
            sPubKey: i,
            sAuthKey: r,
            sPushHostHash: d,
            custom_data: o
        };
        s.send(JSON.stringify(l))
    }, this.initDb = function(t) {
        if (c) t();
        else {
            var e = (window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB).open(Z.toLowerCase() + "_push_db", 2);
            e.onsuccess = function(e) {
                c = e.target.result, t()
            }, e.onupgradeneeded = function(e) {
                e.target.result.createObjectStore("SPIDs", {
                    keyPath: "type"
                })
            }
        }
    }, this.getDbValue = function(e, t, o) {
        oSpP.initDb(function() {
            c.transaction([e], "readonly").objectStore(e).get(t).onsuccess = o
        })
    }, this.putValueToDb = function(e, t) {
        oSpP.initDb(function() {
            c.transaction([e], "readwrite").objectStore(e).put(t)
        })
    }, this.deleteDbValue = function(e, t) {
        oSpP.initDb(function() {
            c.transaction([e], "readwrite").objectStore(e).delete(t)
        })
    }, this.uns = function() {
        oSpP.deleteDbValue("SPIDs", "SubscriptionId")
    }, this.detectOs = function() {
        return -1 != navigator.userAgent.indexOf("Windows") ? "Windows" : -1 != navigator.userAgent.indexOf("Android") ? "Android" : -1 != navigator.userAgent.indexOf("Linux") ? "Linux" : -1 != navigator.userAgent.indexOf("iPhone") || -1 != navigator.userAgent.indexOf("iPad") ? "iOS" : -1 != navigator.userAgent.indexOf("Mac") ? "Mac OS" : -1 != navigator.userAgent.indexOf("FreeBSD") ? "FreeBSD" : ""
    }, this.sendToParent = function(e) {
        if (null === l) var t = setInterval(function() {
            null !== l && (l.source.postMessage(e, l.origin), clearInterval(t))
        }, 100);
        else l.source.postMessage(e, l.origin)
    }, this.push = function(e, t) {
        if (!oSpP.detectSite()) return oSpP.log("Application allowed only for " + i), !1;
        w[e] = t, oSpP.getDbValue("SPIDs", "SubscriptionId", function(e) {
            void 0 === e.target.result ? D = D || setInterval(function() {
                oSpP.getDbValue("SPIDs", "SubscriptionId", function(e) {
                    void 0 !== e.target.result && (oSpP.sendUpdatesToServer(e.target.result.value), clearInterval(D), D = !1)
                })
            }, 1e3) : oSpP.sendUpdatesToServer(e.target.result.value)
        })
    }, this.sendUpdatesToServer = function(e) {
        var t = oSpPOptions.sSubscriptionPrefix;
        switch (g) {
            case "safari":
            case "firefox":
                t = ""
        }
        var o = new XMLHttpRequest;
        o.open("POST", b, !0), o.setRequestHeader("Content-Type", "application/json");
        var i = {
            action: "subscription",
            subscriptionId: e,
            subscription_type: t,
            subscription_action: "update_variables",
            appkey: h,
            sPushHostHash: d,
            custom_data: {
                variables: w
            }
        };
        o.send(JSON.stringify(i))
    }, this.sendPromptStat = function(e) {}, this.showhelpPromptText = function() {
        var e = document.getElementsByTagName("head")[0],
            t = document.createElement("link");
        if (t.rel = "stylesheet", t.type = "text/css", t.href = "https://" + _ + "/dist/css/push/" + Z.toLowerCase() + "-prompt.min.css?v=" + Q, t.media = "all", e.appendChild(t), 0 <= p.length && "-" != p) {
            var o = document.createElement("div");
            o.setAttribute("class", V + "-backdrop-info"), o.setAttribute("style", "display:none;");
            var i = document.createElement("div");
            i.setAttribute("class", "backdrop-close"), i.innerHTML += "<big>Ã—</big><br><small>ESC</small>", i.setAttribute("onclick", "oSpP.closePromptHelpText(false); return false;"), o.appendChild(i);
            var r = document.createElement("div");
            if (r.setAttribute("class", "backdrop-message"), r.innerHTML += p, o.appendChild(r), "chrome" === S.name.toLowerCase()) {
                var s = this.getPushHintDiv();
                o.appendChild(s)
            }
            document.body.insertBefore(o, document.body.childNodes[0]), setTimeout(function() {
                oSpP.getDbValue("SPIDs", "PromptClosed", function(e) {
                    void 0 === e.target.result && (o.className += o.className ? " show-prompt" : "show-prompt")
                })
            }, 1e3)
        }
    }, this.showPushLabel = function() {
    /*
        var e = !0,
            t = new UAParser,
            o = t.getBrowser();
        if (o.os = t.getOS().name, void 0 !== Y && 0 == Y && (e = !1), e) {
            var i = document.createElement("div"),
                r = "";
            if (document.getElementsByClassName(V + "-backdrop-info").length) {
                if (i.setAttribute("class", V + "-bottom-push-label " + V + "-show"), i.innerHTML += r, "chrome" === o.name.toLowerCase() && !document.getElementsByClassName(V + "-hint-popover").length) {
                    var s = this.getPushHintDiv();
                    document.getElementsByClassName(V + "-backdrop-info")[0].appendChild(s)
                }
                document.getElementsByClassName(V + "-backdrop-info")[0].appendChild(i)
            } else {
                var n = V + "-" + P.toLowerCase().replace(" ", ""),
                    a = V + "-lang-" + oSpP.getBrowserlanguage().toLowerCase().replace(" ", ""),
                    p = V + "-" + o.name.toLowerCase().replace(" ", ""),
                    c = p + o.major;
                i.setAttribute("style", "display:none"), i.setAttribute("class", V + "-webpush-label " + n + " " + p + " " + a + " " + c), i.setAttribute("onclick", "this.remove();");
                var l = document.createElement("div");
                if (l.setAttribute("class", V + "-inner-content"), l.innerHTML += r, "chrome" === o.name.toLowerCase()) {
                    s = this.getPushHintDiv();
                    i.appendChild(s)
                }
                i.appendChild(l), document.body.insertBefore(i, document.body.childNodes[0])
            }
            setTimeout(function() {
                if (null !== document.querySelector("." + V + "-webpush-label")) {
                    var e = document.querySelector("." + V + "-webpush-label");
                    e.setAttribute("class", e.getAttribute("class") + " " + V + "-show")
                }
            }, 1e3)
        }
    */
    }, this.getPushHintDiv = function() {
        var e = oSpP.getMessageLang(oSpP.getBrowserlanguage()),
            t = document.createElement("div");
        t.setAttribute("class", V + "-prompt " + V + "-hint-popover show-prompt");
        var o = document.createElement("div");
        o.setAttribute("class", V + "-prompt-message");
        var i = document.createElement("div");
        i.setAttribute("class", V + "-table-wrapper");
        var r = document.createElement("div");
        r.setAttribute("class", V + "-cell"), r.innerHTML += C[e];
        var s = document.createElement("div");
        s.setAttribute("class", V + "-cell"), s.innerHTML = "<img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjI4IiB2aWV3Qm94PSIwIDAgMTAwIDI4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wIDBIODZDOTMuNzMyIDAgMTAwIDYuMjY4MDEgMTAwIDE0VjE0QzEwMCAyMS43MzIgOTMuNzMyIDI4IDg2IDI4SDBWMFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcikiLz48cGF0aCBkPSJNOTAgMTEuNjkwMUw4NC4yNTU3IDExLjIwMDlMODIgNkw3OS43NDQzIDExLjIwMDlMNzQgMTEuNjkwMUw3OC4zODAzIDE1LjM5NzdMNzcuMDY4OSAyMC45MzMzTDgyIDE3Ljk5ODJMODYuOTU3NCAyMC45MzMzTDg1LjY0NTkgMTUuMzk3N0w5MCAxMS42OTAxWk04MiAxNi41MzA2TDc4Ljk4MzYgMTguMzA3MUw3OS43OTY3IDE0LjkzNDNMNzcuMTIxMyAxMi42OTQzTDgwLjYzNjEgMTIuMzg1M0w4MiA5LjIxODM5TDgzLjM2MzkgMTIuMzg1M0w4Ni44Nzg3IDEyLjY5NDNMODQuMjI5NSAxNC45Nkw4NS4wNDI2IDE4LjMzMjlMODIgMTYuNTMwNloiIGZpbGw9IiM0RDUyNUUiLz48cGF0aCBkPSJNNTEuMjcyNyAxOC45MDA4QzUxLjI3MjcgMTkuNjI4MSA1MC42Nzc3IDIwLjIyMzEgNDkuOTUwNCAyMC4yMjMxQzQ5LjIyMzEgMjAuMjIzMSA0OC42MjgxIDE5LjYyODEgNDguNjI4MSAxOC45MDA4SDUxLjI3MjdaTTU1LjA2NzggMTkuOTM4OEw1My4zNjg2IDE4LjIzOTdINDRMNDUuOTgzNSAxNi4yNTYyVjEyLjI4OTNDNDUuOTgzNSAxMS44NTk1IDQ2LjA0OTYgMTEuNDQzIDQ2LjE4MTggMTEuMDUyOUw0NC4zMTA3IDkuMTgxODJMNDUuMjQ5NiA4LjI0OTU5TDQ2LjgzNjQgOS44MzYzNkw1NiAxOUw1NS4wNjc4IDE5LjkzODhaTTQ5LjI4OTMgOC4zNzUyMVY3LjY2MTE2QzQ5LjI4OTMgNy4yOTc1MiA0OS41ODY4IDcgNDkuOTUwNCA3QzUwLjMxNCA3IDUwLjYxMTYgNy4yOTc1MiA1MC42MTE2IDcuNjYxMTZWOC4zNzUyMUM1Mi40ODkzIDguNjkyNTYgNTMuOTE3NCAxMC4zMjU2IDUzLjkxNzQgMTIuMjg5M1YxNS4wNDYzTDQ3LjgxNDkgOC45NDM4QzQ4LjI1NzkgOC42NTI4OSA0OC43NTM3IDguNDY3NzcgNDkuMjg5MyA4LjM3NTIxWiIgZmlsbD0iIzRENTI1RSIvPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjEwMCIgeTE9IjE0IiB4Mj0iMS4xMzg0NWUtMDciIHkyPSIxNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMC42NDkyNDkiIHN0b3AtY29sb3I9IiNEMEQyRDgiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNEMEQyRDgiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg=='>", i.appendChild(r), i.appendChild(s);
        var n = document.createElement("div");
        return n.setAttribute("class", V + "-prompt-message-text"), n.innerHTML = j[e], o.appendChild(i), o.appendChild(n), t.appendChild(o), t
    }, this.showCustomPrompt = function() {
        oSpP.getDbValue("SPIDs", "PromptShowed", function(e) {
            void 0 === e.target.result ? (oSpP.sendPromptStat("prompt_showed"), oSpP.putValueToDb("SPIDs", {
                type: "PromptShowed",
                value: 1
            })) : oSpP.sendPromptStat("prompt_showed_again")
        });
        var e, t = document.getElementsByTagName("head")[0],
            o = document.createElement("link");
        o.rel = "stylesheet", o.type = "text/css", o.href = "https://" + _ + "/dist/css/push/" + Z.toLowerCase() + "-prompt.min.css?v=" + Q, o.media = "all", t.appendChild(o);
        var i = V + "-popover",
            r = "display:none;",
            s = !0;
        void 0 !== Y && 0 == Y && (s = !1);
        var n = oSpP.getMessageLang(oSpP.getBrowserlanguage());
        if (0 < U.length) {
            if ("Sendbox" === Z) var a = '<img src="data:image/svg+xml;base64,PHN2ZyBpZD0i0KHQu9C+0LlfMSIgZGF0YS1uYW1lPSLQodC70L7QuSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmNjEzODk7fS5jbHMtMntmaWxsOiMwMDg0ZmY7fS5jbHMtM3tmaWxsOiM0MDRhY2M7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5sb2dvLXNlbmRib3g8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMuMSw0LjE3SDguMjZhLjgyLjgyLDAsMCwwLDAtMS42NEgzLjFhLjgyLjgyLDAsMCwwLDAsMS42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00LjA4LDExSDMuNTNhLjgyLjgyLDAsMCwwLDAsMS42NGguNTVhLjgyLjgyLDAsMCwwLDAtMS42NFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xLjcyLDdIM0EuODIuODIsMCwwLDAsMyw1LjM5SDEuNzJBLjgyLjgyLDAsMCwwLDEuNzIsN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMS40NiwxMUg2LjY4YS44Mi44MiwwLDAsMCwwLDEuNjRoNC43OGEuODIuODIsMCwwLDAsMC0xLjY0WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQuMDgsOC4yOEguODFhLjgyLjgyLDAsMCwwLDAsMS42NEg0LjA4YS44Mi44MiwwLDAsMCwwLTEuNjRaIi8+PHBhdGggY2xhc3M9ImNscy0yIiBkPSJNOC4wOCw5LjI0bC4xNi4wNy4xMywwSDguN2wuMTMsMEw5LDkuMjRIOWwyLjg2LTEuOTRBLjgyLjgyLDAsMSwwLDExLDUuOTNMOC41NCw3LjU4LDYuMSw1LjkzYS44NC44NCwwLDAsMC0xLjE2LjIuODMuODMsMCwwLDAsLjI1LDEuMTZMOCw5LjIzWiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE0LjE4LDIuNTNhLjgyLjgyLDAsMCwxLC44Mi44MnY4LjQ4YS44Mi44MiwwLDAsMS0uODIuODJIMTFBLjgyLjgyLDAsMCwxLDExLDExaDIuMzlWNC4xN0g3LjgzYS44Mi44MiwwLDAsMSwwLTEuNjRaIi8+PGVsbGlwc2UgY2xhc3M9ImNscy0zIiBjeD0iMTAuOTgiIGN5PSIxMS44MyIgcng9IjAuODEiIHJ5PSIwLjgyIi8+PGVsbGlwc2UgY2xhc3M9ImNscy0zIiBjeD0iNy44MyIgY3k9IjMuMzUiIHJ4PSIwLjgxIiByeT0iMC44MiIvPjwvc3ZnPg==">';
            else a = '<img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgZmlsbD0iIzAwQTJDMCIvPiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUwNjQgOC4wOTYzOVY4LjQzMzc0VjguNjAyNDFMMTMuNDkwMiA5SDExLjg1OUg4LjQxNTc5SDguMTIyMDZMOC4wODMyMiA4LjcwNzI1TDcuNTk3NjEgNS4zNDc1NUw1LjM5MDY0IDEzLjc0ODhMNS4zMjQ2NiAxNEg1LjA2NjI2SDMuODQ0MzJIMy41Nzg4OUwzLjUxNzgxIDEzLjc0MDNMMi4zNTA3MyA5SDAuMzM1NTA5SDBWOC43NTE3NVY3LjI2NDU3VjdIMC4zMzU1MDlIMy42MDg4OUgzLjg2MDUyTDMuODk2NjMgNy4xODc1NEw0LjQ5ODkgOS44NTM5N0w2Ljk3NDcyIDAuMjUyNjgyTDcuMDM5ODcgMEg3LjI5OTQ5SDguNTU0MDZIOC44NTExMUw4Ljg4NzEgMC4yOTY0NzdMOS43MjgxNSA3LjAxODg3SDExLjgyODlMMTIuMzE1OSA3LjAxODg2TDEyLjYzMDkgNy4wMTg4N0gxMy40OTAyTDEzLjUwNjQgNy4xODc1NFY3LjM1NjIyVjguMDk2MzlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJ3aGl0ZSIvPiAgICA8cGF0aCBkPSJNMTQuNDEyIDhDMTQuNDEyIDguOTc4MTQgMTMuNjIzMyA5Ljc3MTA4IDEyLjY1MDUgOS43NzEwOEMxMS42Nzc3IDkuNzcxMDggMTAuODg5MSA4Ljk3ODE0IDEwLjg4OTEgOEMxMC44ODkxIDcuMDIxODYgMTEuNjc3NyA2LjIyODkxIDEyLjY1MDUgNi4yMjg5MUMxMy42MjMzIDYuMjI4OTEgMTQuNDEyIDcuMDIxODYgMTQuNDEyIDhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==">';
            var p = '<svg style="display: none;"><symbol id="sp_bell_icon"><path d="M139.165 51.42L103.39 15.558C43.412 61.202 3.74 132.185 0 212.402h50.174c3.742-66.41 37.877-124.636 88.99-160.98zM474.98 212.403h50.173c-3.742-80.217-43.413-151.2-103.586-196.845L385.704 51.42c51.398 36.346 85.533 94.572 89.275 160.982zm-49.388 12.582c0-77-53.39-141.463-125.424-158.487v-17.09c0-20.786-16.76-37.613-37.592-37.613s-37.592 16.827-37.592 37.614v17.09C152.95 83.52 99.56 148.004 99.56 224.983v137.918L49.408 413.01v25.076h426.336V413.01l-50.152-50.108V224.984zM262.576 513.358c3.523 0 6.76-.22 10.065-1.007 16.237-3.237 29.825-14.528 36.06-29.626 2.517-5.952 4.05-12.494 4.05-19.54H212.4c0 27.593 22.582 50.174 50.174 50.174z" /></symbol></svg>';
            (i = (e = JSON.parse(U)).style) === V + "-popover" && (i = V + "-native-popover");
            var c = document.createElement("div"),
                l = V + "-prompt " + i;
            c.setAttribute("class", l), 0 < e.backgroundcolor.length && i != V + "-fab" && (r = r + "background-color: " + e.backgroundcolor + ";"), c.setAttribute("style", r);
            var u = document.createElement("div");
            u.setAttribute("class", V + "-prompt-message");
            var d = document.createElement("img");
            if (d.setAttribute("class", V + "-bell-icon"), d.setAttribute("width", "14"), d.setAttribute("height", "14"), d.setAttribute("src", "https://" + _ + "/img/push/icon-ring.svg"), s) {
                var m = document.createElement("span");
                m.setAttribute("class", V + "-link-wrapper"), (f = document.createElement("a")).setAttribute("class", V + "-link"), f.setAttribute("href", R), f.setAttribute("target", "_blank");
                var S = document.createElement("span");
                i === V + "-modal" && (f.setAttribute("style", "color: " + e.textcolor + " !important;"), m.setAttribute("style", "color: " + e.textcolor + " !important;"), S.setAttribute("style", "color: " + e.textcolor + " !important;")), S.innerHTML = W[n], i != V + "-bar" && (f.innerHTML = a), f.appendChild(S), m.appendChild(f)
            }
            if (i === V + "-native-popover") {
                r = r + "color: " + e.textcolor + " !important;", c.setAttribute("style", r), void 0 !== e.custom && void 0 !== e.custom.prompt_position && (l += " " + V + "-pos-" + e.custom.prompt_position, c.setAttribute("class", l)), (y = document.createElement("div")).setAttribute("class", V + "-native-info-inner " + V + "-table-wrapper");
                var g = document.createElement("div");
                g.setAttribute("class", V + "-cell"), d.setAttribute("src", "https://" + _ + e.icon), d.setAttribute("width", "64"), d.setAttribute("height", "64"), g.appendChild(d);
                var P = document.createElement("div");
                P.setAttribute("class", V + "-cell");
                var b = document.createElement("div");
                b.setAttribute("class", V + "-prompt-info " + V + "-prompt-message-text"), b.innerHTML += B, P.appendChild(b), y.appendChild(g), y.appendChild(P)
            } else if (i == V + "-bar") {
                (y = document.createElement("div")).setAttribute("class", V + "-prompt-info " + V + "-prompt-message-text"), y.setAttribute("style", "color: " + e.textcolor + " !important;"), y.innerHTML += B;
                var h = document.createElement("span");
                u.innerHTML += p + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="' + V + '-bell-icon"><use class="' + V + '-bell-path" style="fill: ' + e.textcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" />  </svg>'
            } else if (i == V + "-fab") {
                if ((y = document.createElement("div")).setAttribute("class", V + "-prompt-title " + V + "-prompt-message-text"), 0 < e.textcolor.length && y.setAttribute("style", "color: " + e.textcolor + " !important;"), y.innerHTML = H, (h = document.createElement("div")).setAttribute("class", V + "-prompt-info " + V + "-prompt-message-text"), 0 < e.textcolor.length && h.setAttribute("style", "color: " + e.textcolor + " !important;"), h.innerHTML += B, void 0 !== e.custom && void 0 !== e.custom.prompt_size && "big" === e.custom.prompt_size) {
                    h = null, l = V + "-prompt " + V + "-floating-panel", c.setAttribute("class", l), u.setAttribute("style", "background-color: " + e.btncolor + "; color: " + e.textcolor + " !important;"), u.setAttribute("onclick", "oSpP.startSubscription(); return false;"), (y = document.createElement("div")).setAttribute("style", "color: " + e.textcolor + " !important;"), y.setAttribute("class", V + "-table-wrapper");
                    var v = document.createElement("div");
                    v.setAttribute("class", V + "-cell");
                    var M = document.createElement("a");
                    M.innerHTML += '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="' + V + '-bell-icon"><use class="' + V + '-bell-path bell-prompt-fab" style="fill: ' + e.textcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0">' + p + "</use></svg>", M.setAttribute("onclick", "oSpP.startSubscription(); oSpP.showHintDiv(); return false;"), M.setAttribute("href", "#"), v.appendChild(M);
                    var w = document.createElement("div");
                    w.setAttribute("class", V + "-cell");
                    var D = document.createElement("a");
                    D.setAttribute("href", "#"), D.setAttribute("onclick", "oSpP.startSubscription(); oSpP.showHintDiv(); return false;"), D.innerHTML = H, w.appendChild(D), y.appendChild(v), y.appendChild(w);
                    var f, I = document.createElement("div");
                    I.setAttribute("class", V + "-prompt-label"), (f = document.createElement("a")).setAttribute("href", R), f.setAttribute("target", "_blank"), (S = document.createElement("span")).innerHTML = W[n], f.appendChild(S), I.appendChild(f)
                } else {
                    var A = document.createElement("div");
                    A.setAttribute("class", V + "-prompt-fab " + V + "_notify_prompt"), A.setAttribute("onclick", "oSpP.startSubscription();oSpP.showHintDiv(); return false;"), 0 < e.btncolor.length && A.setAttribute("style", "background-color: " + e.btncolor + " !important;"), A.innerHTML += p + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="' + V + '-bell-icon" ><use class="' + V + '-bell-path bell-prompt-fab" style="fill: ' + e.iconcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" /></svg>'
                }
                void 0 !== e.custom && void 0 !== e.custom.prompt_position && (l += " " + V + "-fab-" + e.custom.prompt_position, c.setAttribute("class", l))
            } else if (i == V + "-modal" || i == V + "-safari") {
                var y;
                (y = document.createElement("div")).setAttribute("class", V + "-prompt-title " + V + "-prompt-message-text"), 0 < e.textcolor.length && y.setAttribute("style", "color: " + e.textcolor + " !important;"), y.innerHTML = H, (h = document.createElement("div")).setAttribute("class", V + "-prompt-info " + V + "-prompt-message-text"), 0 < e.textcolor.length && h.setAttribute("style", "color: " + e.textcolor + " !important;"), h.innerHTML += B, i == V + "-safari" ? (d.setAttribute("src", "https://" + _ + e.icon), d.setAttribute("width", "64"), d.setAttribute("height", "64"), u.appendChild(d)) : u.innerHTML += p + '<svg viewBox="0 0 525.153 525.153" width="40" height="40" xmlns:xlink="http://www.w3.org/1999/xlink" class="' + V + '-bell-icon"><use class="' + V + '-bell-path" style="fill: ' + e.textcolor + ' !important;" xlink:href="#sp_bell_icon" x="0" y="0" />  </svg>'
            }
            if (i != V + "-fab") {
                var O = document.createElement("div");
                O.setAttribute("class", V + "-prompt-buttons");
                var N = document.createElement("button");
                N.setAttribute("class", V + "-prompt-btn " + V + "-accept-btn " + V + "_notify_prompt"), N.setAttribute("type", "button"), N.setAttribute("onclick", "oSpP.startSubscription();oSpP.showHintDiv();oSpP.closeCustomPrompt(false); return false;");
                var T = document.createElement("button");
                if (T.setAttribute("class", V + "-prompt-btn " + V + "-disallow-btn"), T.setAttribute("type", "button"), T.setAttribute("onclick", "oSpP.sendPromptStat('prompt_denied');oSpP.closeCustomPrompt(true); return false;"), N.innerHTML = e.allowbtntext, T.innerHTML = e.disallowbtntext, N.setAttribute("style", "background-color:" + e.buttoncolor + " !important;border-color:" + e.buttoncolor + " !important;"), T.setAttribute("style", "color:" + e.buttoncolor + " !important;"), i === V + "-native-popover") {
                    var L = document.createElement("div");
                    L.setAttribute("class", V + "-table-wrapper");
                    var x = document.createElement("div");
                    x.setAttribute("class", V + "-cell"), s && void 0 !== m && x.appendChild(m);
                    var C = document.createElement("div");
                    C.setAttribute("class", V + "-cell"), C.appendChild(T);
                    var j = document.createElement("div");
                    j.setAttribute("class", V + "-cell"), j.appendChild(N), L.appendChild(x), L.appendChild(C), L.appendChild(j), O.appendChild(L)
                } else O.appendChild(T), O.appendChild(N);
                if (s && i == V + "-modal") {
                    var E = document.createElement("div");
                    E.innerHTML = "&nbsp;", O.appendChild(E)
                }
            }
            if (u.appendChild(y), void 0 !== h && null != h && i != V + "-native-popover" && u.appendChild(h), i !== V + "-fab" ? (u.appendChild(O), s && void 0 !== m && i !== V + "-native-popover" && O.appendChild(m), c.appendChild(u)) : void 0 !== e.custom.prompt_size && "big" === e.custom.prompt_size ? (c.appendChild(u), s && void 0 !== I && c.appendChild(I)) : (s && void 0 !== m && u.appendChild(m), c.appendChild(u), c.appendChild(A)), i != V + "-fab") {
                var k = document.createElement("button");
                k.setAttribute("class", V + "-prompt-close"), k.setAttribute("onclick", "oSpP.closeCustomPrompt(false); return false;"), k.setAttribute("style", "color:" + e.textcolor + " !important;"), k.innerHTML = "&times;", c.appendChild(k)
            }
            if (document.body.insertBefore(c, document.body.childNodes[0]), i == V + "-modal") {
                var z = document.createElement("div");
                z.setAttribute("class", V + "-prompt-backdrop"), z.setAttribute("style", "display:none;"), document.body.insertBefore(z, document.body.childNodes[1])
            }
            setTimeout(function() {
                c.className += c.className ? " show-prompt" : "show-prompt"
            }, 1e3)
        }
    }, this.closeCustomPrompt = function(e) {
        oSpP.sendPromptStat("prompt_closed"), null !== document.querySelector("." + V + "-prompt") && document.body.removeChild(document.querySelector("." + V + "-prompt")), e && oSpP.putValueToDb("SPIDs", {
            type: "PromptClosed",
            value: 1
        })
    }, this.showHintDiv = function() {
        if ("chrome" === S.name.toLowerCase()) {
            var e = this.getPushHintDiv();
            e.setAttribute("class", V + "-prompt " + V + "-hint-popover show-prompt " + V + "-secure-mode"), document.body.appendChild(e)
        }
    }, this.hideHintDiv = function() {
        document.getElementsByClassName(V + "-hint-popover").length && document.querySelector("." + V + "-hint-popover").remove()
    }, this.closePromptHelpText = function(e) {
        null !== document.querySelector("." + V + "-backdrop-info") && document.body.removeChild(document.querySelector("." + V + "-backdrop-info")), e && (oSpP.sendPromptStat("prompt_closed"), oSpP.putValueToDb("SPIDs", {
            type: "PromptClosed",
            value: 1
        }))
    }, this.closePushLabel = function() {
        null !== document.querySelector("." + V + "-bottom-push-label") && document.querySelector("." + V + "-bottom-push-label").remove(), null !== document.querySelector("." + V + "-webpush-label") && document.querySelector("." + V + "-webpush-label").remove()
    }, this.getMessageLang = function(e) {
        return "ua" == (e = e.substring(0, 2).toLowerCase()) || "uk" == e ? "ua" : "ru" == e ? "ru" : "en"
    }, this.getPromptDelay = function() {
        return parseInt(e)
    }, this.getSettingsShowByVisitNumber = function() {
        return parseInt(E)
    }, this.startDelayedSubscription = function(t) {
        if (0 < parseInt(e)) var o = setInterval(function() {
            oSpP.getDbValue("SPIDs", "PromptDelay", function(e) {
                void 0 !== e.target.result ? (new Date).getTime() >= e.target.result.value && (clearInterval(o), t()) : (clearInterval(o), t())
            })
        }, 1e3);
        else t()
    }, this.getAuthEmailFromUrl = function() {
        var e = window.location.href,
            t = new RegExp("[?&]spush(=([^&#]*)|&|#|$)").exec(e);
        if (t && t[2]) {
            var o = atob(decodeURIComponent(t[2].replace(/\+/g, " ")));
            void 0 !== o && 0 < o.length && oSpP.push("email", o)
        }
    }, this.getVisitsCount = function() {
        var t = 1;
        oSpP.getDbValue("SPIDs", "VisitsCount", function(e) {
            void 0 === e.target.result || (t = e.target.result.value, t += 1), oSpP.putValueToDb("SPIDs", {
                type: "VisitsCount",
                value: t
            }), t >= oSpP.getSettingsShowByVisitNumber() && oSpP.initPrompt()
        })
    }, this.initPrompt = function() {
        0 < oSpP.getPromptDelay() ? oSpP.getDbValue("SPIDs", "PromptDelay", function(e) {
            void 0 === e.target.result && oSpP.putValueToDb("SPIDs", {
                type: "PromptDelay",
                value: (new Date).getTime() + 1e3 * oSpP.getPromptDelay()
            }), oSpP.start()
        }) : oSpP.start(), oSpP.getAuthEmailFromUrl()
    }, this.urlBase64ToUint8Array = function(e) {
        for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), o = window.atob(t), i = new Uint8Array(o.length), r = 0; r < o.length; ++r) i[r] = o.charCodeAt(r);
        return i
    }
}
window.addEventListener("load", function() {
    1 < oSpP.getSettingsShowByVisitNumber() ? oSpP.getVisitsCount() : oSpP.initPrompt()
});
var oSpP = new oPromptPush;
document.onkeyup = function(e) {
    27 === (e = e || window.event).keyCode && oSpP.closePromptHelpText(!1)
};