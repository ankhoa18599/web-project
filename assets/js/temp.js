"use strict";
function ownKeys(e, t) {
    var a, n = Object.keys(e);
    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(e),
    t && (a = a.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
    })),
    n.push.apply(n, a)),
    n
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(a), !0).forEach(function(t) {
            _defineProperty(e, t, a[t])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : ownKeys(Object(a)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
        })
    }
    return e
}
function _defineProperty(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a,
    t
}
function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    )(t)
}
function _createForOfIteratorHelper(t, e) {
    var a;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (a = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            a && (t = a);
            var n = 0
              , e = function() {};
            return {
                s: e,
                n: function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                },
                e: function(t) {
                    throw t
                },
                f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, r = !0, o = !1;
    return {
        s: function() {
            a = t[Symbol.iterator]()
        },
        n: function() {
            var t = a.next();
            return r = t.done,
            t
        },
        e: function(t) {
            o = !0,
            i = t
        },
        f: function() {
            try {
                r || null == a.return || a.return()
            } finally {
                if (o)
                    throw i
            }
        }
    }
}
function _toConsumableArray(t) {
    return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread()
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}
function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t)
            return _arrayLikeToArray(t, e);
        var a = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (a = "Object" === a && t.constructor ? t.constructor.name : a) || "Set" === a ? Array.from(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? _arrayLikeToArray(t, e) : void 0
    }
}
function _iterableToArray(t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t)
}
function _arrayWithoutHoles(t) {
    if (Array.isArray(t))
        return _arrayLikeToArray(t)
}
function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var a = 0, n = new Array(e); a < e; a++)
        n[a] = t[a];
    return n
}
var msViewportStyle, OrderID, Amount;
eval(function(t, e, a, n, i) {
    if (n = function(t) {
        return (t < 43 ? "" : n(parseInt(t / 43))) + (35 < (t %= 43) ? String.fromCharCode(t + 29) : t.toString(36))
    }
    ,
    !"".replace(/^/, String)) {
        for (; e--; )
            i[n(e)] = a[e] || n(e);
        a = [function(t) {
            return i[t]
        }
        ],
        n = function() {
            return "\\w+"
        }
        ,
        e = 1
    }
    for (; e--; )
        a[e] && (t = t.replace(new RegExp("\\b" + n(e) + "\\b","g"), a[e]));
    return t
}("3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f('h'+b)}))}3 5(a){4 i(j(a).G('').l(3(c){4'%'+('m'+c.n(0).o(p)).q(-2)}).r(''))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $(\"C\"),D(5(\"E\")),!1};", 43, "|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split".split("|"), 0, {})),
navigator.userAgent.match(/IEMobile\/10\.0/) && (msViewportStyle = document.createElement("style"),
msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),
document.head.appendChild(msViewportStyle)),
$(function() {
    var t = navigator.userAgent;
    -1 < t.indexOf("Mozilla/5.0") && -1 < t.indexOf("Android ") && -1 < t.indexOf("AppleWebKit") && -1 === t.indexOf("Chrome") && $("select.form-control").removeClass("form-control").css("width", "100%")
});
var PriceAccount = 0, TotalAccount = 0, Account = 0, AccountXero = 0, Audit = 0, TypeCal = 0, clientIdCaptcha, tagsFilter = [], postsFiltered = [], gaUserId;
document.cookie.match("_ga") && (gaUserId = document.cookie.match(/_ga=(.+?);/)[1].split(".").slice(-2).join(".")),
$("#nation-first").select2({
    placeholder: "Type here",
    allowClear: !1
}).on("change", function(t) {
    $(this).val() && 1 < $(this).val().length ? ($(this).next(".select2-container").find("span.select2-selection--multiple").addClass("position_select2"),
    console.log($(this).val())) : $(this).next(".select2-container").find("span.select2-selection--multiple").removeClass("position_select2")
}),
$("#nation-second").select2({
    placeholder: "Type here",
    allowClear: !1
}).on("change", function(t) {
    $(this).val() && 1 < $(this).val().length ? $(this).next(".select2-container").find("span.select2-selection--multiple").addClass("position1_select2") : $(this).next(".select2-container").find("span.select2-selection--multiple").removeClass("position1_select2")
}),
$("#btn-mailBlog").on("click", function() {
    sendMailBlog()
});
var reasons_why_hong_kong_banks_may_reject_your_application = [{
    id: 1,
    name: "Caye International Bank Ltd",
    is_merchant: "No",
    countries: ["Yugoslavia", "Serbia", "Montenegro", "Myanmar", "Belarus", "Bosnia and Herzegovina", "Burundi", "Central African Republic", "Cuba", "Liberia", "Serbia", "Sudan", "Congo", "Iran", "Iraq", "North Korea", "Somalia"]
}, {
    id: 2,
    name: "Heritage Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 3,
    name: "Belize Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 4,
    name: "First Caribbean International Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 5,
    name: "Bank of East Asia",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 6,
    name: "DBS(Hong Kong)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 7,
    name: "Fubon Bank",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 8,
    name: "Hang Seng Bank",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 9,
    name: "HSBC (Hong Kong)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 10,
    name: "OCBC Wing Hang",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 11,
    name: "Standard Charter Bank (Hong Kong)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 12,
    name: "ABC Banking Corporation",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 13,
    name: "Bank One Limited",
    is_merchant: "No",
    countries: ["Crimea (Ukrainian region)", "Cuba", "North Korea", "Sudan", "Syria", "Eritrea", "Iran", "Iraq", "Somalia"]
}, {
    id: 14,
    name: "Mauritius Commercial Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 15,
    name: "Investec Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}, {
    id: 16,
    name: "Euro Pacific Bank",
    is_merchant: "No",
    countries: ["Afghanistan", "Albania", "Angola", "Bangladesh", "Bosnia and Herzegovina", "Belarus", "Burundi", "Central African Republic", "Cuba", "Democratic Republic of the Congo", "Egypt", "Eritrea", "Ethiopia", "Equatorial Guinea", "Guinea", "Guinea Bissau", "Iran", "Iraq", "Kosovo", "Lao People's Democratic Republic", "Lebanon", "Libya", "Republic of North Macedonia", "Mali", "Moldova", "Montenegro", "Myanmar", "Nicaragua", "North Korea", "Palestinian Territories", "Russia", "Saint Vincent & the Grenadines", "Serbia", "Somalia", "South Sudan", "Sri Lanka", "Sudan", "Syria", "Tunisia", "Ukraine", "Vanuatu", "Venezuela", "Yemen", "Zimbabwe"]
}, {
    id: 17,
    name: "Citi Bank",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 18,
    name: "DBS(Singapore)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 19,
    name: "OCBC Bank",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 20,
    name: "HSBC (Singapore)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 21,
    name: "Standard Charter Bank (Singapore)",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 22,
    name: "UOB",
    is_merchant: "Yes",
    countries: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "North Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh"]
}, {
    id: 23,
    name: "CIM Banque",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran", "Ras Al Khaimah (UAE)", "British Virgin Islands(BVI)"]
}, {
    id: 24,
    name: "RAK Bank",
    is_merchant: "No",
    countries: ["Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Jamaica", "Mauritius", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "North Korea", "Iran"]
}]
  , miniToolStep1 = ""
  , miniToolStep2 = []
  , miniToolStep3 = []
  , currentTab = 0;
function onloadBankBlog() {
    socialBlog(),
    showTab(currentTab)
}
function showTab(t) {
    var e = document.getElementsByClassName("tab-none")
      , a = reasons_why_hong_kong_banks_may_reject_your_application
      , n = document.querySelector(".listRandomBank");
    switch (e[t].style.display = "block",
    t) {
    case 0:
        document.getElementById("btn-transformStep").style.display = "none",
        $(".blog-wordpress-page #nation-first").val(null).trigger("change"),
        fixStepNext(t);
        break;
    case 1:
        document.getElementById("btn-transformStep").style.display = "block",
        $(".blog-wordpress-page #nation-first").val(null).trigger("change"),
        $(".blog-wordpress-page #nation-second").val(null).trigger("change"),
        fixStepNext(t);
        break;
    case 2:
        document.getElementById("btn-transformStep").style.display = "block",
        $(".blog-wordpress-page #nation-second").val(null).trigger("change"),
        fixStepNext(t);
        break;
    case 3:
        if (miniToolStep2 = $("#nation-first").val(),
        miniToolStep3 = $("#nation-second").val(),
        a = a.filter(function(t) {
            return t.is_merchant == miniToolStep1 && !t.countries.some(function(t) {
                return miniToolStep2.includes(t)
            }) && !t.countries.some(function(t) {
                return miniToolStep3.includes(t)
            })
        }),
        console.log(a),
        0 < a.length) {
            document.getElementById("contact-form").style.display = "block",
            document.getElementById("btn-transformStep").style.display = "none",
            document.getElementById("screenResultSuccess").style.display = "block",
            document.getElementById("gg_captchaBlog").style.display = "block",
            n.innerHTML = "";
            var i = pickFrom(5, a);
            console.log(i);
            for (var r = 0; r < i.length; r++) {
                var o = document.createElement("li");
                null != i[r] && (o.innerHTML += i[r].name,
                n.appendChild(o))
            }
        } else
            document.getElementById("contact-form").style.display = "block",
            document.getElementById("btn-transformStep").style.display = "none",
            document.getElementById("screenResultSuccess").style.display = "none",
            document.getElementById("screenResultNoSuccess").style.display = "block",
            document.getElementById("gg_captchaBlog").style.display = "block";
        break;
    default:
        fixStepNext(t)
    }
}
function nextPrev(t) {
    document.getElementsByClassName("tab-none")[currentTab].style.display = "none",
    showTab(currentTab += t)
}
function fixStepNext(t) {
    document.getElementsByClassName("step")[t].className += " active"
}
function fixStepPrev() {
    for (var t = document.getElementsByClassName("step"), e = 0; e < t.length; e++)
        t[e].className = t[e].className.replace(" active", "");
    $("#step1").hasClass("active") || $("#step1").addClass("active")
}
function socialBlog() {
    var t = document.querySelector('[data-js="twitter-share"]');
    t.onclick = function(t) {
        t.preventDefault();
        t = window.open("https://twitter.com/share?url=" + document.URL, "twitter-popup", "height=350,width=600");
        return t.focus && t.focus(),
        !1
    }
    ,
    document.querySelector('[data-js="facebook-share"]').onclick = function(t) {
        t.preventDefault();
        t = window.open("https://www.facebook.com/sharer/sharer.php?u=" + document.URL, "facebook-popup", "height=450,width=650", "top=" + (screen.height / 2 - 225), "left=" + (screen.width / 2 - 325), "menubar=no,toolbar=no,resizable=yes,scrollbars=yes");
        return t.focus && t.focus(),
        !1
    }
    ,
    document.querySelector('[data-js="linkedin-share"]').onclick = function(t) {
        t.preventDefault();
        t = window.open("https://www.linkedin.com/sharer/sharer.php?u=" + document.URL, "linkedin-popup", "height=350,width=600");
        return t.focus && t.focus(),
        !1
    }
}
function pickFrom(t, e) {
    var a = Array.from(e);
    return Array.from(Array(t), function() {
        return a.splice(Math.floor(a.length * Math.random()), 1)[0]
    })
}
function sendMailBlog() {
    try {
        $("form#form-toolBlog").validate({
            rules: {
                "mail-blogtool": "required"
            },
            messages: {
                "mail-blogtool": "This field is required."
            },
            submitHandler: function(t) {
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var a = {
                            email: $("#form-toolBlog input[name=mail-blogtool]").val(),
                            is_merchant: miniToolStep1,
                            nation_member: $("#nation-first").val(),
                            nation_partner: $("#nation-second").val(),
                            subject: "Bank account support",
                            client_id: gaUserId,
                            website_id: 1
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/minitool_contact",
                            data: JSON.stringify(a),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Thanks, our experts will contact you shortly!",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: Object.assign(a, {
                                            fullname: a.email
                                        }),
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                })
                            },
                            complete: function(t) {
                                $("#getEbook").modal("hide")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function loadBankingOnboarding() {
    try {
        getSignature()
    } catch (t) {
        console.log(t)
    }
    $(".slider-traditional").on("init", function() {
        $("#isLoadingSliderBanking").css("display", "none")
    }),
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
        $(".slider-traditional").slick("setPosition")
    }),
    displayProgressBar(),
    filterBankOnboarding(),
    postDataBank(),
    $(".obd-banking button#btn-choices").on("click", function() {
        window.location.href = "/onboarding/banking-questionare"
    });
    var t, e = JSON.parse(localStorage.getItem("check_noti_progress"));
    e && e.bank_type && 0 == e.listService.length && $(".bankingChoice-page button.btn-back").on("click", function() {
        window.location.href = "/onboarding/banking-package"
    }),
    e && e.package_type && 0 < e.listService.length && (t = JSON.parse(localStorage.getItem("urlBack")),
    $(".bankingChoice-page button.btn-back").on("click", function() {
        localStorage.removeItem("isJoinBank"),
        window.location.href = t
    })),
    document.getElementById("searchBank").onkeyup = debounce(filterBankOnboarding, 400)
}
var optionSliderBank = {
    infinite: !0,
    dots: !0,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    slidesPerRow: 3,
    rows: 2,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesPerRow: 2
        }
    }, {
        breakpoint: 768,
        settings: "unslick"
    }]
};
function loadDatabankOnboarding() {
    var e;
    try {
        $.ajax({
            async: !1,
            type: "GET",
            url: linkUrlOrderAPi + "/api/onboarding/banking",
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (e = t.data)
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function loadBankSlider(t) {
    var e = []
      , a = [];
    t && t.forEach(function(t) {
        (!1 === t.is_virtual ? e : a).push(t)
    });
    var e = e.sort(function(t, e) {
        return t.score > e.score ? -1 : t.score <= e.score ? 1 : 0
    })
      , n = document.querySelector("#slider-traditional .slider-traditional");
    n.innerHTML = "",
    e.forEach(function(t) {
        var e = document.createElement("div");
        e.setAttribute("class", "col-lg-4 col-md-6");
        t = '<div class="card-bank"> <input onchange="getValueInputBank(this)" id=' + t.id + ' type="checkbox" name="choose-bank" value=' + t.id + "><label for=" + t.id + '><div class="bank-item"><div class="content-top"><img src="' + t.image + '"><h4 class="title-bank"><span>' + t.name + '</span></h4></div><div class="content-bottom"><span class="name-bank">' + t.Country.name + "</span></div></div></label></div>";
        e.innerHTML = t,
        n.appendChild(e)
    });
    var i = document.querySelector("#slider-virtual .slider-traditional");
    i.innerHTML = "",
    a.forEach(function(t) {
        var e = document.createElement("div");
        e.setAttribute("class", "col-lg-4 col-md-6");
        t = '<div class="card-bank"> <input onchange="getValueInputBank(this)" id=' + t.id + ' type="checkbox" name="choose-bank" value=' + t.id + "><label for=" + t.id + '><div class="bank-item"><div class="content-top"><img src="' + t.image + '"><h4 class="title-bank"><span>' + t.name + '</span></h4></div><div class="content-bottom"><span class="name-bank">' + t.Country.name + "</span></div></div></label></div>";
        e.innerHTML = t,
        i.appendChild(e)
    });
    var r = !1
      , t = !1;
    1200 <= window.innerWidth ? (e.length < 7 && (r = !0),
    a.length < 7 && (t = !0)) : 768 <= window.innerWidth && (e.length < 5 && (r = !0),
    a.length < 5 && (t = !0)),
    r ? n.classList.add("slider-one-item") : n.classList.remove("slider-one-item"),
    t ? i.classList.add("slider-one-item") : i.classList.remove("slider-one-item")
}
function filterBankOnboarding() {
    var t = loadDatabankOnboarding();
    $(".slider-traditional").removeClass("slick-initialized slick-slider slick-dotted"),
    setTimeout(function() {
        $(".slider-traditional").not(".slick-initialized").slick(optionSliderBank)
    }, 500);
    var e = $(".obd-banking #searchBank").val().toLowerCase();
    e && (console.log("inputSearch", e),
    t = t.filter(function(t) {
        return -1 < t.name.toLowerCase().indexOf(e)
    }));
    var a = $(".obd-banking select[name=select-countryBank]").val();
    loadBankSlider(t = a ? t.filter(function(t) {
        return t.Country.id == a
    }) : t)
}
$(".obd-banking select[name=select-countryBank]").on("change", function() {
    filterBankOnboarding()
});
var arr_chooseBank = [];
function getValueInputBank(t) {
    (arr_chooseBank = _toConsumableArray(document.querySelectorAll('.obd-banking input[name="choose-bank"]:checked')).map(function(t) {
        return t.value
    })) && 0 < arr_chooseBank.length ? $("#btn-NextResult").prop("disabled", !1) : $("#btn-NextResult").prop("disabled", !0)
}
function loadBankingPackage() {
    try {
        getSignature()
    } catch (t) {
        console.log(t)
    }
    $(".obd-banking .pac-bank button").on("click", function(t) {
        window.location.href = "/onboarding/banking-choice"
    }),
    displayProgressBar()
}
function loadBankingQuestionare() {
    try {
        getSignature()
    } catch (t) {
        console.log(t)
    }
    progressQuestionare(),
    localStorage.removeItem("dataBankQuestion"),
    localStorage.removeItem("arrayValue"),
    localStorage.removeItem("arrayScore");
    for (var t = document.querySelectorAll("input[type='radio']:checked"), e = document.querySelectorAll("select option"), a = 0; a < e.length; a++)
        e[a].selected = e[a].defaultSelected;
    $(".obd-banking .btn-questionare #btn1").prop("disabled", !0),
    document.querySelector("input[type='text']").value = "";
    for (a = 0; a < t.length; a++)
        t[a].checked = !1
}
function loadQuestionExcept(t) {
    var e = !1
      , a = !1;
    t.map(function(t) {
        t.Country.id,
        t.Country.id,
        98 === t.Country.id || 191 === t.Country.id ? e = !0 : a = !0
    }),
    !0 === e && !1 === a && ($(".obd-banking #question1").removeClass("show-onshore"),
    $(".obd-banking #question2").addClass("show-onshore")),
    !0 === e && !0 === a && ($(".obd-banking #question1").addClass("show-onshore"),
    $(".obd-banking #question2").removeClass("show-onshore")),
    !1 === e && !0 === a && ($(".obd-banking #question1").removeClass("show-onshore"),
    $(".obd-banking #question2").removeClass("show-onshore"))
}
var arr_valueFilterBank = [{
    key: 0,
    value: ""
}, {
    key: 1,
    value: ""
}, {
    key: 2,
    value: ""
}, {
    key: 3,
    value: ""
}, {
    key: 4,
    value: ""
}, {
    key: 5,
    value: ""
}, {
    key: 6,
    value: ""
}, {
    key: 7,
    value: ""
}, {
    key: 8,
    value: ""
}];
$(".obd-banking select[name=select-incoporate]").on("change", function() {
    var t = $(".obd-banking select[name=select-incoporate]").val();
    arr_valueFilterBank[0].value = t;
    t = getDataBankQuestionare();
    t && 0 < t.length ? $(".obd-banking .selectBank-first p.label_warning").css("display", "none") : $(".obd-banking .selectBank-first p.label_warning").css("display", "block"),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
    conditionDisableButton()
});
try {
    var inputBussinessField = document.querySelector(".obd-banking #field-business");
    inputBussinessField && inputBussinessField.addEventListener("keyup", myDebounceTime(function(t) {
        t.preventDefault(),
        0 < t.target.value.length && (arr_valueFilterBank[1].value = t.target.value.toLowerCase(),
        (t = getDataBankQuestionare()) && 0 < t.length ? $(".obd-banking .selectBank-second p.label_warning").css("display", "none") : $(".obd-banking .selectBank-second p.label_warning").css("display", "block"),
        localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
        localStorage.setItem("checkBusinessFiled", JSON.stringify(t)),
        (t = JSON.parse(localStorage.getItem("checkBusinessFiled"))) && 0 < t.length && ($(".obd-banking .selectBank-third p.label_warning").css("display", "none"),
        $(".obd-banking .selectBank-fourth p.label_warning").css("display", "none"),
        $(".obd-banking .selectBank-fifth p.label_warning").css("display", "none")),
        conditionDisableButton())
    }, 700))
} catch (error) {}
function filterBankingOnboarding() {
    var t = getDataBankQuestionare();
    arr_valueFilterBank[5].value && 50001 == arr_valueFilterBank[5].value && (t = t.filter(function(t) {
        return 0 <= t.initial_deposit || 50001 < t.initial_deposit
    })),
    arr_valueFilterBank[5].value && 1e3 == arr_valueFilterBank[5].value && (t = t.filter(function(t) {
        return t.initial_deposit <= 1e3
    })),
    arr_valueFilterBank[5].value && 1e4 == arr_valueFilterBank[5].value && (t = t.filter(function(t) {
        return t.initial_deposit < 1e4
    })),
    arr_valueFilterBank[5].value && 5e4 == arr_valueFilterBank[5].value && (t = t.filter(function(t) {
        return t.initial_deposit < 5e4
    })),
    arr_valueFilterBank[6].value && 1 == arr_valueFilterBank[6].value && (t = t.filter(function(t) {
        return !0 === t.is_remote_opening || !1 === t.is_remote_opening
    })),
    loadQuestionExcept(t = arr_valueFilterBank[6].value && 0 == arr_valueFilterBank[6].value ? t.filter(function(t) {
        return !0 === t.is_remote_opening
    }) : t),
    localStorage.setItem("dataBankQuestion", JSON.stringify(t))
}
function getDataBankQuestionare() {
    var e, t = "incorporation_country_id=" + arr_valueFilterBank[0].value + "&business_field=" + arr_valueFilterBank[1].value + "&is_merchant_account=" + arr_valueFilterBank[2].value + "&member_country_ids=[" + arr_valueFilterBank[3].value + "]&partner_country_ids=[" + [arr_valueFilterBank[4].value] + "]";
    try {
        $.ajax({
            async: !1,
            type: "GET",
            url: linkUrlOrderAPi + "/api/onboarding/banking?" + t,
            contentType: "application/json",
            success: function(t) {
                t.state && (e = t.data)
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
$(".obd-banking input[name='merchant-onboard']").on("click", function() {
    arr_valueFilterBank[2].value = $(this).val();
    var t = getDataBankQuestionare();
    t && 0 < t.length ? $(".obd-banking .selectBank-third p.label_warning").css("display", "none") : $(".obd-banking .selectBank-third p.label_warning").css("display", "block"),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
    conditionDisableButton()
}),
$(".obd-banking #select-membersOnboarding").select2({
    placeholder: "Choose nationality",
    allowClear: !1
}).on("change", function(t) {
    var e = $("#select-membersOnboarding").val();
    arr_valueFilterBank[3].value = e;
    e = getDataBankQuestionare();
    e && 0 < e.length ? $(".obd-banking .selectBank-fourth p.label_warning").css("display", "none") : $(".obd-banking .selectBank-fourth p.label_warning").css("display", "block"),
    conditionDisableButton(),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank))
}),
$(".obd-banking #select-partnersOnboarding").select2({
    placeholder: "Choose major",
    allowClear: !1
}).on("change", function(t) {
    var e = $("#select-partnersOnboarding").val();
    arr_valueFilterBank[4].value = e;
    e = getDataBankQuestionare();
    e && 0 < e.length ? $(".obd-banking .selectBank-fifth p.label_warning").css("display", "none") : $(".obd-banking .selectBank-fifth p.label_warning").css("display", "block"),
    conditionDisableButton(),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank))
}),
$(".obd-banking input[name='initialDepositObd']").on("click", function() {
    arr_valueFilterBank[5].value = $(this).val(),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
    conditionDisablesc2()
}),
$(".obd-banking input[name='bankRemoteObd']").on("click", function() {
    arr_valueFilterBank[6].value = $(this).val(),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
    conditionDisablesc2()
}),
$(".obd-banking input[name='bankOnshoreObd']").on("click", function() {
    $(".obd-banking input[name='bankLocateObd']").attr("checked", !1),
    document.getElementById("apply1").checked = !1,
    document.getElementById("apply2").checked = !1,
    document.getElementById("locate1").checked = !1,
    document.getElementById("locate2").checked = !1,
    document.getElementById("type1").checked = !1,
    document.getElementById("type2").checked = !1,
    document.getElementById("annal1").checked = !1,
    document.getElementById("annal2").checked = !1,
    localStorage.removeItem("arrayScore", JSON.stringify(score_bankOnboarding)),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !0);
    for (var t = 0; t < score_bankOnboarding.length; t++)
        score_bankOnboarding[t].value = "";
    arr_valueFilterBank[7].value = $(this).val(),
    1 == arr_valueFilterBank[7].value ? ($(".obd-banking #question1").addClass("show-onshore"),
    $(".obd-banking #question2").addClass("show-onshore")) : ($(".obd-banking #question1").addClass("show-onshore"),
    $(".obd-banking #question2").removeClass("show-onshore"),
    conditionDisablesc30())
});
var score_bankOnboarding = [{
    key_score: 0,
    value: ""
}, {
    key_score: 1,
    value: ""
}, {
    key_score: 2,
    value: ""
}, {
    key_score: 3,
    value: ""
}];
function conditionDisableButton() {
    var t = JSON.parse(localStorage.getItem("checkBusinessFiled"));
    arr_valueFilterBank.slice(0, 5).some(function(t) {
        return "" == t.value
    }) || t && 0 == t.length ? $(".obd-banking .btn-questionare #btn1").prop("disabled", !0) : $(".obd-banking .btn-questionare #btn1").prop("disabled", !1)
}
function conditionDisablesc2() {
    var t = JSON.parse(localStorage.getItem("arrayValue"));
    t && 0 < t.length && (t.slice(5, 7).some(function(t) {
        return "" == t.value
    }) ? $(".obd-banking .btn-questionare #btn1").prop("disabled", !0) : $(".obd-banking .btn-questionare #btn1").prop("disabled", !1))
}
function conditionDisablesc31() {
    var t = JSON.parse(localStorage.getItem("arrayValue"))
      , e = JSON.parse(localStorage.getItem("arrayScore"));
    t && 0 < t.length && e && 0 < e.length && (t.slice(7).some(function(t) {
        return "" == t.value && e.some(function(t) {
            return "" == t.value
        })
    }) ? ($(".obd-banking .btn-questionare #btn1").prop("disabled", !0),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !0)) : ($(".obd-banking .btn-questionare #btn1").prop("disabled", !1),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !1)))
}
function conditionDisablesc30() {
    var e, t = JSON.parse(localStorage.getItem("arrayValue")), a = JSON.parse(localStorage.getItem("arrayScore"));
    t && 0 < t.length && a && 0 < a.length && (t = t.slice(7),
    e = a.slice(1),
    t.some(function(t) {
        return "" == t.value && e.some(function(t) {
            return "" == t.value
        })
    }) ? ($(".obd-banking .btn-questionare #btn1").prop("disabled", !0),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !0)) : ($(".obd-banking .btn-questionare #btn1").prop("disabled", !1),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !1)))
}
function progressQuestionare() {
    var e = 0
      , a = $(".obd-banking .progress-barbank .step");
    $(a[0]).addClass("valid"),
    $('.obd-banking .btn-questionare button[name="prev"]').addClass("out"),
    $('.obd-banking .btn-questionare button[name="next"]').on("click", function() {
        filterBankingOnboarding(),
        $(".obd-banking .btn-questionare #btn1").prop("disabled", !0);
        var t = $(this);
        a.length - 1 < e || (0 === e && ($(a[1]).addClass("valid"),
        $(".obd-banking .btn-questionare #btn1").prop("disabled", !0),
        conditionDisablesc2()),
        1 === e && $(a[2]).addClass("valid"),
        $('.obd-banking .btn-questionare button[name="prev"]').removeClass("out"),
        e == a.length - 2 && (t.addClass("out"),
        t.siblings('.obd-banking .btn-questionare button[name="finish"]').removeClass("out")),
        $(a[e]).addClass("active"),
        $(".obd-banking .tab-sectionBank").addClass("out"),
        e++,
        $("#" + a[e].dataset.id).removeClass("out"))
    }),
    $('.obd-banking .btn-questionare button[name="prev"]').on("click", function() {
        e - 1 < 0 ? window.location.href = "/onboarding/banking-choice" : (--e <= a.length - 1 && ($('.obd-banking .btn-questionare button[name="next"]').removeClass("out"),
        $('.obd-banking .btn-questionare button[name="finish"]').addClass("out")),
        $(".obd-banking .tab-sectionBank").addClass("out"),
        $("#" + a[e].dataset.id).removeClass("out"),
        1 === e && $(a[2]).removeClass("valid"),
        0 === e ? (a.removeClass("active"),
        $(a[1]).removeClass("valid")) : a.filter(":gt(" + (e - 1) + ")").removeClass("active"),
        e - 1 < 0 && $('.obd-banking .btn-questionare button[name="prev"]').addClass("out"),
        conditionDisableButton(),
        conditionDisablesc31(),
        conditionDisablesc30())
    }),
    $(".obd-banking .btn-questionare #btn-finish").prop("disabled", !0),
    $('.obd-banking .btn-questionare button[name="finish"]').on("click", function() {
        e != a.length && ($(a[a.length - 1]).addClass("active"),
        e++,
        window.location.href = "/onboarding/banking-result")
    }),
    conditionDisablesc31(),
    conditionDisablesc30()
}
function resultBankingOnboarding() {
    try {
        getSignature()
    } catch (t) {
        console.log(t)
    }
    $('a[data-toggle="tab"]').on("shown.bs.tab", function(t) {
        $(".slider-traditional").slick("setPosition")
    });
    var t = JSON.parse(localStorage.getItem("dataBankQuestion"))
      , e = JSON.parse(localStorage.getItem("arrayValue"));
    e && "holding" === e[8].value ? (e = [],
    loadBankSlider(e = t.filter(function(t) {
        return "19" != t.id
    })),
    $("span#number-scbank_result").text(e.length.toString())) : (loadBankSlider(t),
    $("span#number-scbank_result").text(t.length.toString())),
    setTimeout(function() {
        $(".slider-traditional").not(".slick-initialized").slick(optionSliderBank)
    }, 500),
    sumScoreOnboarding(),
    postDataBank(),
    $(".obd-banking #btn-back").on("click", function() {
        window.location.href = "/onboarding/banking-questionare",
        localStorage.removeItem("arrayScore", JSON.stringify(score_bankOnboarding)),
        localStorage.removeItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
        localStorage.removeItem("dataBankQuestion", JSON.stringify(dataFilterBanking))
    })
}
$(".obd-banking input[name='bankLocateObd']").on("click", function() {
    score_bankOnboarding[0].value = $(this).val(),
    localStorage.setItem("arrayScore", JSON.stringify(score_bankOnboarding)),
    conditionDisablesc31()
}),
$(".obd-banking input[name='applyingCompanyObd']").on("click", function() {
    score_bankOnboarding[1].value = $(this).val(),
    localStorage.setItem("arrayScore", JSON.stringify(score_bankOnboarding)),
    conditionDisablesc30()
}),
$(".obd-banking input[name='bankTypesObd']").on("click", function() {
    score_bankOnboarding[2].value = $(this).val(),
    arr_valueFilterBank[8].value = $(this).attr("data-bank-type"),
    localStorage.setItem("arrayValue", JSON.stringify(arr_valueFilterBank)),
    localStorage.setItem("arrayScore", JSON.stringify(score_bankOnboarding)),
    conditionDisablesc30()
}),
$(".obd-banking input[name='bankAnnualObd']").on("click", function() {
    score_bankOnboarding[3].value = $(this).val(),
    localStorage.setItem("arrayScore", JSON.stringify(score_bankOnboarding)),
    conditionDisablesc30()
});
var scoreBankResult = JSON.parse(localStorage.getItem("arrayScore"));
function sumScoreOnboarding() {
    for (var t = 0, e = [], a = document.getElementById("show-scbank_result"), n = 0; n < scoreBankResult.length; n++)
        scoreBankResult[n].value && e.push(parseInt(scoreBankResult[n].value));
    if (0 < e.length)
        for (var i in e)
            (t += e[i]) < 5 ? a.innerHTML = "LOW" : 5 <= t && t <= 7 ? a.innerHTML = "MEDIUM" : 7 < t && (a.innerHTML = "HIGH");
    else
        t = 0
}
function postBankInfo() {
    var e = !1;
    try {
        var t = {
            signature: localStorage.getItem("signature"),
            bank_ids: arr_chooseBank
        };
        $.ajax({
            async: !1,
            type: "POST",
            url: linkUrlOrderAPi + "/api/onboarding/banking",
            data: JSON.stringify(t),
            contentType: "application/json",
            success: function(t) {
                e = !0
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function postBankPackage() {
    var e;
    try {
        var t = localStorage.getItem("signature")
          , a = {
            signature: t,
            OrderItems: [{
                service_id: 1670,
                quantity: 1
            }]
        };
        $.ajax({
            async: !1,
            type: "POST",
            url: linkUrlOrderAPi + "/api/onboarding/order/banking",
            data: JSON.stringify(a),
            contentType: "application/json",
            success: function(t) {
                e = t.data
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function postDataBank() {
    localStorage.setItem("urlBackBank", JSON.stringify(location.href));
    JSON.parse(localStorage.getItem("isJoinBank"));
    var e = JSON.parse(localStorage.getItem("check_noti_progress"))
      , a = localStorage.getItem("payment_status");
    null !== a && (a = JSON.parse(a)),
    $(".obd-banking button#btn-NextResult").on("click", function() {
        localStorage.setItem("isJoinBank", "true");
        try {
            var t;
            postBankInfo() && ((t = postBankPackage()) ? e && !0 === e.incorp_to_bank ? (window.location.href = 1 === a ? "/onboarding/payment-success?order_code=" + t : "/onboarding/payment-pending?order_code=" + t,
            localStorage.removeItem("signature")) : window.location.href = linkUrlOrder + "/onboarding/order-information?order_code=" + t : window.location.href = "/404")
        } catch (t) {
            console.log(t)
        }
    })
}
$("#select-members").select2({
    placeholder: "Choose nationality",
    allowClear: !1
}).on("change", function(t) {
    var e = $("#select-members").val();
    arr_valueFilter[3].value = e,
    filterBankingTool(),
    show_btnNextStep1()
}),
$("#select-partners").select2({
    placeholder: "Choose major",
    allowClear: !1
}).on("change", function(t) {
    var e = $("#select-partners").val();
    arr_valueFilter[4].value = e,
    filterBankingTool(),
    show_btnNextStep1()
});
var data_bankingTool = [{
    id: 1,
    name: "Belize",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "Caye International Bank Ltd.",
        incorporation_country: ["Balkans (Yugoslavia, Serbia, Montenegro)", "Belarus", "Bosnia and Herzegovina", "Burma (Myanmar)", "Burundi", "Central African Republic", "Cuba", "Liberia", "Serbia", "Sudan", "Congo", "Iran", "Iraq", "North Korea", "Somalia"],
        countries_member: ["Balkans (Yugoslavia, Serbia, Montenegro)", "Belarus", "Bosnia and Herzegovina", "Burma (Myanmar)", "Burundi", "Central African Republic", "Cuba", "Liberia", "Serbia", "Sudan", "Congo", "Iran", "Iraq", "North Korea", "Somalia"],
        countries_partner: ["Balkans (Yugoslavia, Serbia, Montenegro)", "Belarus", "Bosnia and Herzegovina", "Burma (Myanmar)", "Burundi", "Central African Republic", "Cuba", "Liberia", "Serbia", "Sudan", "Congo", "Iran", "Iraq", "North Korea", "Somalia"],
        initial_deposit_value: 1e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/CAYE.png"
    }, {
        name: "Heritage Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 3e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/Heritage Bank.png"
    }, {
        name: "Belize Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 4e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/Belize Bank.png"
    }],
    onshore: "No"
}, {
    id: 2,
    name: "BVI",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "First Caribbean International Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 25e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/CIBC.png"
    }],
    onshore: "No"
}, {
    id: 3,
    name: "Hong Kong",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "Yes",
    banks: [{
        name: "Bank of East Asia",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 645,
        remote_opening: "No",
        image: "/images/banking-tool/Bank of East Asia.png"
    }, {
        name: "DBS",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 129026,
        remote_opening: "Yes",
        image: "/images/banking-tool/DBS1.png"
    }, {
        name: "Fubon Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 25804,
        remote_opening: "No",
        image: "/images/banking-tool/Fubon Bank.png"
    }, {
        name: "Hang Seng Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 1290,
        remote_opening: "No",
        image: "/images/banking-tool/Hang Seng Bank.png"
    }, {
        name: "HSBC",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 6451,
        remote_opening: "Yes",
        image: "/images/banking-tool/HSBC1.png"
    }, {
        name: "OCBC Wing Hang",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 6451,
        remote_opening: "No",
        image: "/images/banking-tool/OCBC Wing Hang.png"
    }, {
        name: "Standard Chartered Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 25804,
        remote_opening: "No",
        image: "/images/banking-tool/Standard Charter Bank.png"
    }],
    onshore: "Yes"
}, {
    id: 4,
    name: "Mauritius",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "ABC Banking Corporation",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 5e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/ABCBanking.png"
    }, {
        name: "Bank One Limited",
        incorporation_country: ["Crimea (Ukrainian region)", "Cuba", "North Korea", "Sudan", "Syria", "Eritrea", "Iran", "Iraq", "Somalia", "Anguilla", "Bahamas", "Belize", "British Virgin Islands(BVI)", "Cayman Islands", "Saint Vincent & the Grenadines", "Marshall Islands", "Samoa", "Jersey", "Seychelles", "Ras Al Khaimah (UAE)", "Saint Kitts and Nevis", "Panama"],
        countries_member: ["Crimea (Ukrainian region)", "Cuba", "North Korea", "Sudan", "Syria", "Eritrea", "Iran", "Iraq", "Somalia"],
        countries_partner: ["Crimea (Ukrainian region)", "Cuba", "North Korea", "Sudan", "Syria", "Eritrea", "Iran", "Iraq", "Somalia"],
        initial_deposit_value: 25e3,
        remote_opening: "Yes",
        image: "/images/banking-tool/Bank One Limited.png"
    }, {
        name: "Mauritius Commercial Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 5e4,
        remote_opening: "Yes",
        image: "/images/banking-tool/Mauritius Commercial Bank.png"
    }, {
        name: "Investec Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 5e4,
        remote_opening: "Yes",
        image: "/images/banking-tool/Investec Bank.png"
    }],
    onshore: "No"
}, {
    id: 5,
    name: "Puerto Rico",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "Euro Pacific Bank",
        incorporation_country: ["Afghanistan", "Albania", "Angola", "Bangladesh", "Bosnia and Herzegovina", "Belarus", "Burundi", "Central African Republic", "Cuba", "Democratic Republic of the Congo", "Egypt", "Eritrea", "Ethiopia", "Equatorial Guinea", "Guinea", "Guinea Bissau", "Iran", "Iraq", "Kosovo", "Laos", "Lebanon", "Libya", "Macedonia", "Mali", "Moldova", "Montenegro", "Myanmar (Burma)", "Nicaragua", "North Korea", " Palestinian Territories", "Russian Federation", "Saint Vincent and the Grenadines", "Serbia", "Somalia", "South Sudan", "Sri Lanka", "Sudan and Darfur", "Syria", "Tunisia", "Ukraine", "Vanuatu", "Venezuela", "Yemen", "Zimbabwe"],
        countries_member: ["Afghanistan", "Albania", "Angola", "Bangladesh", "Bosnia and Herzegovina", "Belarus", "Burundi", "Central African Republic", "Cuba", "Democratic Republic of the Congo", "Egypt", "Eritrea", "Ethiopia", "Equatorial Guinea", "Guinea", "Guinea Bissau", "Iran", "Iraq", "Kosovo", "Laos", "Lebanon", "Libya", "Macedonia", "Mali", "Moldova", "Montenegro", "Myanmar (Burma)", "Nicaragua", "North Korea", " Palestinian Territories", "Russian Federation", "Saint Vincent and the Grenadines", "Serbia", "Somalia", "South Sudan", "Sri Lanka", "Sudan and Darfur", "Syria", "Tunisia", "Ukraine", "Vanuatu", "Venezuela", "Yemen", "Zimbabwe"],
        countries_partner: ["Afghanistan", "Albania", "Angola", "Bangladesh", "Bosnia and Herzegovina", "Belarus", "Burundi", "Central African Republic", "Cuba", "Democratic Republic of the Congo", "Egypt", "Eritrea", "Ethiopia", "Equatorial Guinea", "Guinea", "Guinea Bissau", "Iran", "Iraq", "Kosovo", "Laos", "Lebanon", "Libya", "Macedonia", "Mali", "Moldova", "Montenegro", "Myanmar (Burma)", "Nicaragua", "North Korea", " Palestinian Territories", "Russian Federation", "Saint Vincent and the Grenadines", "Serbia", "Somalia", "South Sudan", "Sri Lanka", "Sudan and Darfur", "Syria", "Tunisia", "Ukraine", "Vanuatu", "Venezuela", "Yemen", "Zimbabwe"],
        initial_deposit_value: 500,
        remote_opening: "Yes",
        image: "/images/banking-tool/EPB.png"
    }],
    onshore: "No"
}, {
    id: 6,
    name: "Singapore",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "Yes",
    banks: [{
        name: "Citi Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan", "Anguilla", "Belize", "British Virgin Islands(BVI)", "Cayman Islands", "Saint Vincent & the Grenadines", "Marshall Islands", "Samoa", "Jersey", "Seychelles", "Ras Al Khaimah (UAE)", "Saint Kitts and Nevis"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 73529,
        remote_opening: "Yes",
        image: "/images/banking-tool/CITIBANK.png"
    }, {
        name: "DBS",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 5e4,
        remote_opening: "Yes",
        image: "/images/banking-tool/DBS1.png"
    }, {
        name: "OCBC Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan", "Anguilla", "Belize", "British Virgin Islands(BVI)", "Cayman Islands", "Saint Vincent & the Grenadines", "Marshall Islands", "Samoa", "Jersey", "Seychelles", "Ras Al Khaimah (UAE)", "Saint Kitts and Nevis"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 7353,
        remote_opening: "Yes",
        image: "/images/banking-tool/OCBC.png"
    }, {
        name: "HSBC",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 2e5,
        remote_opening: "Yes",
        image: "/images/banking-tool/HSBC1.png"
    }, {
        name: "Standard Chartered Bank",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan", "Anguilla", "Belize", "British Virgin Islands(BVI)", "Cayman Islands", "Saint Vincent & the Grenadines", "Marshall Islands", "Samoa", "Jersey", "Seychelles", "Ras Al Khaimah (UAE)", "Saint Kitts and Nevis"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 10001,
        remote_opening: "Yes",
        image: "/images/banking-tool/Standard Charter Bank.png"
    }, {
        name: "UOB",
        incorporation_country: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_member: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        countries_partner: ["Afghanistan", "Central African Republic", "Democratic Republic of the Congo", "Democratic People’s Republic of Korea", "Iran", "Iraq", "ISIL and Al-Qaida", "Lebanon", "Libya", "Somalia", "South Sudan", "Sudan", "Yemen", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Belarus", "Nigeria", "Russia", "Ukraine", "Bangladesh", "Pakistan"],
        initial_deposit_value: 735,
        remote_opening: "No",
        image: "/images/banking-tool/UOB1.png"
    }],
    onshore: "Yes"
}, {
    id: 7,
    name: "Switzerland",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "CIM Banque",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe", "Anguilla", "British Virgin Islands(BVI)", "Belize", "Cayman Islands", "Saint Kitts and Nevis", "Saint Vincent & the Grenadines", "Marshall Islands", "Samoa", "Jersey", "Seychelles", "Ras Al Khaimah (UAE)"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 1e4,
        remote_opening: "Yes",
        image: "/images/banking-tool/CIM.png"
    }],
    onshore: "No"
}, {
    id: 8,
    name: "UAE",
    business_fields: ["Arms Dealing", "Cash Based Investment Businesses", "Charities", "Commodity Trading (non-exchange traded)", "Financial Services (deposit taking, payment processing)", "Gambling", "Illegal Activities", "Online Pharmaceuticals (prescription drugs)", "Pass-through transactions and Payable-through accounts (PTA)", "PEPs (Politically Exposed Persons/Businesses)", "Pornography", "Real Estate Transactions (require pre-approval)", "Shipping Industry", "Virtual currency"],
    is_merchant: "No",
    banks: [{
        name: "RAK Bank",
        incorporation_country: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_member: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        countries_partner: ["Democratic People’s Republic of Korea", "Iran", "Albania", "Bahamas", "Barbados", "Botswana", "Cambodia", "Ghana", "Iceland", "Jamaica", "Mauritius", "Mongolia", "Myanmar", "Nicaragua", "Pakistan", "Panama", "Syria", "Uganda", "Yemen", "Zimbabwe"],
        initial_deposit_value: 1e4,
        remote_opening: "Yes",
        image: "/images/banking-tool/Rakbank.png",
        content_hover: '<i class="fas fa-info-circle"></i>'
    }],
    onshore: "No"
}];
function LoadBanksAnswer(t) {
    document.querySelector(".bankTool-card").innerHTML = "";
    var e = []
      , a = []
      , n = 0;
    if (0 < t.length)
        for (var i = 0; i < t.length; i++) {
            var r = document.querySelector(".bankTool-card")
              , o = t[i].banks;
            a.push(o.length),
            e.push(t[i].onshore);
            for (var s = 0; s < o.length; s++) {
                var c = document.createElement("div");
                c.setAttribute("class", "card-bank"),
                o[s].content_hover ? c.innerHTML = '<div class="left-card"><h4 class="title"> ' + o[s].name + '<span class="content-hover">' + o[s].content_hover + "</span></h4><p> " + t[i].name + '</p></div><div class="right-card"><img src="' + o[s].image + '"></div>' : c.innerHTML = '<div class="left-card"><h4 class="title"> ' + o[s].name + "</h4><p> " + t[i].name + '</p></div><div class="right-card"><img src="' + o[s].image + '"></div>',
                r.appendChild(c)
            }
        }
    else
        $(".banking-tool-page #content-exception").css("display", "block"),
        $("#table-bank").css("display", "none"),
        $("#button-step .btn-next").prop("disabled", !0),
        $("#count-bank span").text("No Result");
    for (var l = 0; l < a.length; l++)
        n += a[l],
        $("#count-bank span").text(n);
    !0 === e.every(function(t) {
        return "Yes" === t
    }) ? ($(".banking-tool-page #question1").removeClass("show-onshore"),
    $(".banking-tool-page #question2").addClass("show-onshore")) : ($(".banking-tool-page #question1").addClass("show-onshore"),
    $(".banking-tool-page #question2").removeClass("show-onshore")),
    !0 === e.every(function(t) {
        return "No" === t
    }) && ($(".banking-tool-page #question1").removeClass("show-onshore"),
    $(".banking-tool-page #question2").removeClass("show-onshore"))
}
var arr_valueFilter = [{
    key: 0,
    value: ""
}, {
    key: 1,
    value: ""
}, {
    key: 2,
    value: ""
}, {
    key: 3,
    value: ""
}, {
    key: 4,
    value: ""
}, {
    key: 5,
    value: ""
}, {
    key: 6,
    value: ""
}, {
    key: 7,
    value: ""
}]
  , score_banktool = [{
    key_score: 0,
    value: ""
}, {
    key_score: 1,
    value: ""
}, {
    key_score: 2,
    value: ""
}, {
    key_score: 3,
    value: ""
}];
function filterBankingTool() {
    var t = data_bankingTool;
    arr_valueFilter[0].value && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return !t.incorporation_country.includes(arr_valueFilter[0].value)
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })),
    arr_valueFilter[1].value && "None of the below" !== arr_valueFilter[1].value ? ($("#table-bank").css("display", "none"),
    $("#content-exception").css("display", "block"),
    $("#button-step .btn-next").prop("disabled", !0),
    $(".selectBank-second p.label_warning").css("display", "block"),
    t = []) : arr_valueFilter[1].value && "None of the below" === arr_valueFilter[1].value ? ($("#table-bank").css("display", "block"),
    $("#content-exception").css("display", "none"),
    $("#button-step .btn-next").prop("disabled", !1),
    $(".selectBank-second p.label_warning").css("display", "none")) : ($("#table-bank").css("display", "block"),
    $("#content-exception").css("display", "none"),
    $("#button-step .btn-next").prop("disabled", !1)),
    arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Belize" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Belize" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "British Virgin Islands(BVI)" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "BVI" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Hong Kong (China)" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Hong Kong" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Mauritius" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Mauritius" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Puerto Rico" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Puerto Rico" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Singapore" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Singapore" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Switzerland" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "Switzerland" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && "Ras Al Khaimah (UAE)" === arr_valueFilter[0].value ? (t = t.filter(function(t) {
        return "UAE" === t.name
    }),
    $(".selectBank-third p.label_warning").css("display", "none")) : arr_valueFilter[2].value && "No" === arr_valueFilter[2].value ? 0 < (t = t.filter(function(t) {
        return "Yes" === t.is_merchant || "No" === t.is_merchant
    })).length ? $(".selectBank-third p.label_warning").css("display", "none") : $(".selectBank-third p.label_warning").css("display", "block") : arr_valueFilter[2].value && "Yes" === arr_valueFilter[2].value && (t = [],
    $(".selectBank-third p.label_warning").css("display", "block")),
    0 < arr_valueFilter[3].value.length && (0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return !t.countries_member.some(function(t) {
                    return arr_valueFilter[3].value.includes(t)
                })
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBank-fourth p.label_warning").css("display", "none") : $(".selectBank-fourth p.label_warning").css("display", "block")),
    0 < arr_valueFilter[4].value.length && (0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return !t.countries_partner.some(function(t) {
                    return arr_valueFilter[4].value.includes(t)
                })
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBank-fifth p.label_warning").css("display", "none") : $(".selectBank-fifth p.label_warning").css("display", "block")),
    arr_valueFilter[5].value && 50001 == arr_valueFilter[5].value ? 0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return 0 <= t.initial_deposit_value || 50001 < t.initial_deposit_value
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankDeposit p.label_warning").css("display", "none") : $(".selectBankDeposit p.label_warning").css("display", "block") : arr_valueFilter[5].value && 1e3 == arr_valueFilter[5].value ? 0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_value <= 1e3
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankDeposit p.label_warning").css("display", "none") : $(".selectBankDeposit p.label_warning").css("display", "block") : arr_valueFilter[5].value && 1e4 == arr_valueFilter[5].value ? 0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_value < 1e4
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankDeposit p.label_warning").css("display", "none") : $(".selectBankDeposit p.label_warning").css("display", "block") : arr_valueFilter[5].value && 5e4 == arr_valueFilter[5].value && (0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_value < 5e4
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankDeposit p.label_warning").css("display", "none") : $(".selectBankDeposit p.label_warning").css("display", "block")),
    arr_valueFilter[6].value && "Yes" === arr_valueFilter[6].value ? 0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return "Yes" === t.remote_opening || "No" === t.remote_opening
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankRemote p.label_warning").css("display", "none") : $(".selectBankRemote p.label_warning").css("display", "block") : arr_valueFilter[6].value && "No" === arr_valueFilter[6].value && "Singapore" === arr_valueFilter[0].value ? 0 < (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return "Yes" === t.remote_opening || "UOB" === t.name
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    })).length ? $(".selectBankRemote p.label_warning").css("display", "none") : $(".selectBankRemote p.label_warning").css("display", "block") : arr_valueFilter[6].value && "No" === arr_valueFilter[6].value && "Singapore" !== arr_valueFilter[0].value && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            is_merchant: t.is_merchant,
            banks: t.banks.filter(function(t) {
                return "Yes" === t.remote_opening
            }),
            onshore: t.onshore
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    }),
    console.log(t),
    0 < t.length ? $(".selectBankRemote p.label_warning").css("display", "none") : $(".selectBankRemote p.label_warning").css("display", "block")),
    LoadBanksAnswer(t = arr_valueFilter[7].value ? t.filter(function(t) {
        return t.onshore === arr_valueFilter[7].value
    }) : t)
}
$(".banking-tool-page select[name=select-incoporate]").on("change", function() {
    var t = $(".banking-tool-page select[name=select-incoporate]").val();
    arr_valueFilter[0].value = t,
    filterBankingTool(),
    show_btnNextStep1()
}),
$(".banking-tool-page select[name=select-business]").on("change", function() {
    var t = $(".banking-tool-page select[name=select-business]").val();
    arr_valueFilter[1].value = t,
    filterBankingTool(),
    show_btnNextStep1()
});
for (var inputMerchant = document.querySelectorAll(".merchantaccount"), _loop = function(e) {
    inputMerchant[e].addEventListener("click", function(t) {
        $(".merchantaccount.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        arr_valueFilter[2].value = inputMerchant[e].value,
        filterBankingTool(),
        show_btnNextStep1()
    })
}, i = 0; i < inputMerchant.length; i++)
    _loop(i);
for (var initialDeposit = document.querySelectorAll(".selectBankDeposit > .initialDeposit"), _loop2 = function(e) {
    initialDeposit[e].addEventListener("click", function(t) {
        $(".initialDeposit.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        arr_valueFilter[5].value = initialDeposit[e].value,
        filterBankingTool(),
        show_btnNextStep2()
    })
}, _i = 0; _i < initialDeposit.length; _i++)
    _loop2(_i);
for (var bankRemote = document.querySelectorAll(".selectBankRemote > .bankRemote"), _loop3 = function(e) {
    bankRemote[e].addEventListener("click", function(t) {
        $(".bankRemote.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        arr_valueFilter[6].value = bankRemote[e].value,
        filterBankingTool(),
        show_btnNextStep2()
    })
}, _i2 = 0; _i2 < bankRemote.length; _i2++)
    _loop3(_i2);
for (var bankOnshore = document.querySelectorAll(".selectBankOnshore > .bankOnshore"), _loop4 = function(a) {
    bankOnshore[a].addEventListener("click", function(t) {
        $(".bankOnshore.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        arr_valueFilter[7].value = bankOnshore[a].value,
        filterBankingTool(),
        "Yes" === arr_valueFilter[7].value ? ($(".banking-tool-page #question1").addClass("show-onshore"),
        $(".banking-tool-page #question2").addClass("show-onshore")) : ($(".banking-tool-page #question1").addClass("show-onshore"),
        $(".banking-tool-page #question2").removeClass("show-onshore"));
        for (var e = 0; e < score_banktool.length; e++)
            score_banktool[e].value && (score_banktool[e].value = "");
        $("#score-bank canvas").css("display", "none"),
        document.getElementById("score-bank").innerHTML = "NONE",
        $(".banking-tool-page a#show-talkto").css("visibility", "hidden"),
        $(".selectBankLocate .btn-active").removeClass("btn-active"),
        $(".selectBankApply .btn-active").removeClass("btn-active"),
        $(".selectBankTypes .btn-active").removeClass("btn-active"),
        $(".selectBankAnnual .btn-active").removeClass("btn-active")
    })
}, _i3 = 0; _i3 < bankOnshore.length; _i3++)
    _loop4(_i3);
for (var bankLocate = document.querySelectorAll(".selectBankLocate > .bankLocate"), _loop5 = function(e) {
    bankLocate[e].addEventListener("click", function(t) {
        $(".bankLocate.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        score_banktool[0].value = bankLocate[e].value,
        sumScore()
    })
}, _i4 = 0; _i4 < bankLocate.length; _i4++)
    _loop5(_i4);
for (var applyingCompany = document.querySelectorAll(".selectBankApply > .applyingCompany"), _loop6 = function(e) {
    applyingCompany[e].addEventListener("click", function(t) {
        $(".applyingCompany.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        score_banktool[1].value = applyingCompany[e].value,
        sumScore()
    })
}, _i5 = 0; _i5 < applyingCompany.length; _i5++)
    _loop6(_i5);
for (var bankTypes = document.querySelectorAll(".selectBankTypes > .bankTypes"), _loop7 = function(e) {
    bankTypes[e].addEventListener("click", function(t) {
        $(".bankTypes.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        score_banktool[2].value = bankTypes[e].value,
        sumScore()
    })
}, _i6 = 0; _i6 < bankTypes.length; _i6++)
    _loop7(_i6);
for (var bankAnnual = document.querySelectorAll(".selectBankAnnual > .bankAnnual"), _loop8 = function(e) {
    bankAnnual[e].addEventListener("click", function(t) {
        $(".bankAnnual.btn-active").removeClass("btn-active"),
        $(this).addClass("btn-active"),
        score_banktool[3].value = bankAnnual[e].value,
        $(".banking-tool-page a#show-talkto").css("visibility", "visible"),
        $(".banking-tool-page #text-none").css("visibility", "hidden"),
        sumScore()
    })
}, _i7 = 0; _i7 < bankAnnual.length; _i7++)
    _loop8(_i7);
var progressbarBank = document.querySelectorAll("[id^='step_']")
  , tabPagesBank = document.getElementsByClassName("tab-sectionBank");
function switchTab(t) {
    var e, a;
    for (t = parseInt(t),
    a = 0; a < tabPagesBank.length; a++)
        e = parseInt(tabPagesBank[a].id.split("_")[1]),
        tabPagesBank[a].style.display = e === t ? "block" : "none"
}
function sumScore() {
    for (var t = 0, e = [], a = document.getElementById("score-bank"), n = 0; n < score_banktool.length; n++)
        score_banktool[n].value && e.push(parseInt(score_banktool[n].value));
    if (0 < e.length)
        for (var i in e) {
            t += e[i],
            $("#score-bank").data("progress", 10 * t),
            $("#score-bank").attr("data-progress", 10 * t),
            t < 5 && score_banktool[3].value ? a.innerHTML = "Low" : 5 <= t && t <= 7 && score_banktool[3].value ? a.innerHTML = "Medium" : 7 < t && score_banktool[3].value && (a.innerHTML = "High");
            var r = {
                percent: a.getAttribute("data-progress") || 25,
                size: a.getAttribute("data-size") || 170,
                lineWidth: a.getAttribute("data-line") || 10,
                rotate: a.getAttribute("data-rotate") || 0
            }
              , o = document.createElement("canvas")
              , i = document.createElement("span");
            "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(o);
            var s = o.getContext("2d");
            o.width = o.height = r.size,
            a.appendChild(i),
            a.appendChild(o),
            s.translate(r.size / 2, r.size / 2),
            s.rotate((r.rotate / 180 - .5) * Math.PI);
            var c = (r.size - r.lineWidth) / 2
              , o = function(t, e, a) {
                a = Math.min(Math.max(0, a || 1), 1),
                s.beginPath(),
                s.arc(0, 0, c, 0, 2 * Math.PI * a, !1),
                s.strokeStyle = t,
                s.lineCap = "round",
                s.lineWidth = e,
                s.stroke()
            };
            0 < r.percent ? (o("#cccccc", r.lineWidth, 1),
            o("#007eff", r.lineWidth, r.percent / 100)) : (o("#cccccc", r.lineWidth, 1),
            o("#cccccc", r.lineWidth, r.percent / 100))
        }
    else
        t = 0
}
function show_btnNextStep1() {
    for (var t = 0; t < arr_valueFilter.length - 3; t++)
        arr_valueFilter[t].value && "None of the below" === arr_valueFilter[1].value ? $("#button-step .btn-next").prop("disabled", !1) : "" === arr_valueFilter[t].value && $("#button-step .btn-next").prop("disabled", !0)
}
function show_btnNextStep2() {
    for (var t = arr_valueFilter.slice(5), e = 0; e < t.length - 1; e++)
        t[e].value ? $("#button-step .btn-next").prop("disabled", !1) : "" === t[e].value && $("#button-step .btn-next").prop("disabled", !0)
}
$("#button-step .btn-prev").on("click", function() {
    var t = $("#checkout-progress").data("current-step")
      , e = t - 1
      , a = $(".step.step-" + t)
      , n = $(".step.step-" + e)
      , i = $("#checkout-progress");
    if ($(".btn-next").removeClass("disabled"),
    1 == t)
        return !1;
    1 == e && ($(this).addClass("disabled"),
    $("#button-step .btn-next").prop("disabled", !1),
    $("#button-step .btn-next").prop("id", "onclickBankingTool-Step2")),
    2 == e && ($("#button-step .btn-next").prop("disabled", !1),
    $("#button-step .btn-next").prop("id", "onclickBankingTool-Step3")),
    switchTab(t - 1),
    a.removeClass("active"),
    n.find("img.img-show").removeClass("opaque"),
    n.find(".fa.fa-check").addClass("opaque"),
    n.addClass("active").removeClass("valid"),
    i.removeAttr("class").addClass("step-" + e).data("current-step", e)
}),
$("#button-step .btn-next").on("click", function() {
    var t = $("#checkout-progress").data("current-step")
      , e = t + 1
      , a = $(".step.step-" + t)
      , n = $(".step.step-" + e)
      , i = $("#checkout-progress");
    if ($("#button-step .btn-prev").removeClass("disabled"),
    $("#button-step .btn-next").prop("id", "onclickBankingTool-Step3"),
    3 == t)
        return !1;
    3 == e && ($(this).addClass("disabled"),
    $("#button-step .btn-next").removeAttr("id")),
    1 == t && show_btnNextStep2(),
    2 == t && $("#button-step .btn-next").prop("disabled", !0),
    switchTab(t + 1),
    a.removeClass("active").addClass("valid"),
    a.find("img.img-show").addClass("opaque"),
    a.find(".fa.fa-check").removeClass("opaque"),
    n.addClass("active"),
    i.removeAttr("class").addClass("step-" + e).data("current-step", e)
}),
$("#result-mobile").click(function() {
    $(this).toggleClass("open-bank"),
    $("#bankMobile").toggleClass("bankMobile"),
    $(window).scrollTop(0),
    $(this).hasClass("open-bank") ? $("#result-mobile p").text("BACK") : $("#result-mobile p").text("YOUR RESULT IN HERE")
}),
$(document).ready(function() {
    $(".scrolling_to_section").click(function() {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = $(this.hash);
            if ((t = t.length ? t : $("[name=" + this.hash.slice(1) + "]")).length)
                return $("html, body").animate({
                    scrollTop: t.offset().top + -70
                }, 800),
                !1
        }
    })
});
var state = {
    current: 0,
    data_qq: []
};
function onInit() {
    var t = JSON.parse(localStorage.getItem("isBzToolEmail"))
      , e = JSON.parse(localStorage.getItem("isBviToolEmail"));
    t && document.getElementById("quiz-screenFirst-bz") && (document.getElementById("quiz-screenFirst-bz").classList.add("hide"),
    state.current = data_qq[0].id,
    onLoadQuizTool()),
    e && document.getElementById("quiz-screenFirst-bvi") && (document.getElementById("quiz-screenFirst-bvi").classList.add("hide"),
    state.current = data_qq[0].id,
    onLoadQuizTool());
    for (var a = 0, n = [1769, 1773, 1775, 1771]; a < n.length; a++)
        loadDatepickerBVI(n[a]);
    for (var i = 0, r = [3117, 3115, 3113, 3110]; i < r.length; i++)
        loadDatepickerBelize(r[i])
}
function onLoadQuizTool() {
    document.getElementById(state.current).classList.remove("hide"),
    document.getElementById("quiz-parentSteps").classList.remove("hide"),
    document.getElementById("quiz-subSteps").classList.remove("hide"),
    document.getElementById("quiz-screen").classList.remove("hide");
    var t, e = getCurrentCategories(), a = _createForOfIteratorHelper(document.getElementsByClassName("sub-step"));
    try {
        for (a.s(); !(t = a.n()).done; ) {
            var n, i = t.value, r = !1, o = _createForOfIteratorHelper(e);
            try {
                for (o.s(); !(n = o.n()).done; ) {
                    var s = n.value;
                    if (i.classList.contains(s)) {
                        r = !0;
                        break
                    }
                }
            } catch (t) {
                o.e(t)
            } finally {
                o.f()
            }
            r ? i.classList.remove("hide") : i.classList.add("hide")
        }
    } catch (t) {
        a.e(t)
    } finally {
        a.f()
    }
    activeStep("parent-step-item"),
    activeStep("sub-step-item")
}
function loadDatepickerBelize() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
      , e = "#datepicker" + t
      , n = "#result_deadline" + t;
    $(e).datepicker({
        format: "dd/mm/yyyy",
        todayHighlight: !0,
        autoclose: !0,
        language: "en",
        orientation: "auto bottom"
    }),
    $(e).datepicker().on("changeDate", function(t) {
        var e = new Date(t.date)
          , a = new Date("01/01/2020")
          , t = new Date("04/30/2020");
        e < a ? ($(".quizQuestions-content #result_search_before").removeClass("hide"),
        $(".quizQuestions-content #result_search_after").addClass("hide"),
        t.setMonth(t.getMonth() + 9),
        $(n).text(t.toLocaleDateString("en-GB"))) : ($(".quizQuestions-content #result_search_before").addClass("hide"),
        $(".quizQuestions-content #result_search_after").removeClass("hide"),
        e.setMonth(e.getMonth() + 21),
        $(n).text(e.toLocaleDateString("en-GB")))
    })
}
function loadDatepickerBVI() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
      , e = "#datepicker" + t
      , n = "#result_deadline" + t;
    $(e).datepicker({
        format: "dd/mm/yyyy",
        todayHighlight: !0,
        autoclose: !0,
        language: "en",
        orientation: "auto bottom"
    }),
    $(e).datepicker().on("changeDate", function(t) {
        var e = new Date(t.date)
          , a = new Date("01/01/2019")
          , t = new Date("12/31/2020");
        e < a ? $(n).text(t.toLocaleDateString("en-GB")) : (e.setMonth(e.getMonth() + 18),
        $(n).text(e.toLocaleDateString("en-GB")))
    })
}
function activeStep() {
    for (var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", e = getCurrentCategories(), a = document.getElementsByClassName(t), n = 0; n < a.length; ++n) {
        var i, r = !1, o = _createForOfIteratorHelper(e);
        try {
            for (o.s(); !(i = o.n()).done; ) {
                var s = i.value;
                if (a[n].id == s) {
                    r = !0;
                    break
                }
            }
        } catch (t) {
            o.e(t)
        } finally {
            o.f()
        }
        if (r) {
            a[n].classList.add("active-step");
            for (var c = 0; c < n; c++)
                a[c].classList.add("finish-step")
        } else
            a[n].classList.contains("active-step") && a[n].classList.remove("active-step"),
            a[n].classList.contains("finish-step") && a[n].classList.remove("finish-step")
    }
}
function getCurrentCategories() {
    var t, e = _createForOfIteratorHelper(data_qq);
    try {
        for (e.s(); !(t = e.n()).done; ) {
            var a = t.value;
            if (a.id == state.current)
                return a.category_quiz
        }
    } catch (t) {
        e.e(t)
    } finally {
        e.f()
    }
    return []
}
function saveChoice(t, e) {
    var a = {};
    a.id = t,
    a.answer = e,
    state.data_qq.push(a)
}
function nextQuestion(t) {
    document.getElementById(state.current).classList.add("hide"),
    document.getElementById("back").classList.remove("hide"),
    state.current = t,
    onLoadQuizTool()
}
function getNextQuestion(t, e, a) {
    if (a && Array.isArray(a) && 0 < a.length) {
        var n, i = _createForOfIteratorHelper(a);
        try {
            for (i.s(); !(n = i.n()).done; ) {
                var r, o = n.value, s = !0, c = _createForOfIteratorHelper(o.questions);
                try {
                    for (c.s(); !(r = c.n()).done; )
                        if ("break" === function() {
                            var e = r.value;
                            if (!state.data_qq.find(function(t) {
                                return t.id === e.question && t.answer === e.answer
                            }))
                                return s = !1,
                                "break"
                        }())
                            break
                } catch (t) {
                    c.e(t)
                } finally {
                    c.f()
                }
                if (s)
                    return o.next_question
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
    }
    if (e && Array.isArray(e) && 0 < e.length) {
        var l, d = _createForOfIteratorHelper(e);
        try {
            for (d.s(); !(l = d.n()).done; ) {
                var u = function() {
                    var e = l.value;
                    if (state.data_qq.find(function(t) {
                        return t.id === e.question && t.answer === e.answer
                    }))
                        return {
                            v: e.next_question
                        }
                }();
                if ("object" === _typeof(u))
                    return u.v
            }
        } catch (t) {
            d.e(t)
        } finally {
            d.f()
        }
    }
    return t || data_qq[0]
}
function backQuestion() {
    if (1 <= state.data_qq.length) {
        var t = state.data_qq.length - 1
          , e = state.data_qq[t].id;
        document.getElementById(state.current).classList.add("hide"),
        $(".quizQuestions-content #result_search_before").addClass("hide"),
        $(".quizQuestions-content #result_search_after").addClass("hide"),
        state.current = e,
        state.data_qq.splice(t, 1),
        onLoadQuizTool(),
        0 === state.data_qq.length && document.getElementById("back").classList.add("hide");
        for (var a = getCurrentCategories(), n = document.getElementsByClassName("parent-step-item"), i = document.getElementsByClassName("sub-step-item"), r = 0; r < n.length; ++r) {
            var o, s = !1, c = _createForOfIteratorHelper(a);
            try {
                for (c.s(); !(o = c.n()).done; ) {
                    var l = o.value;
                    if (n[r].id == l) {
                        s = !0;
                        break
                    }
                }
            } catch (t) {
                c.e(t)
            } finally {
                c.f()
            }
            s && n[r].classList.contains("active-step") && n[r].classList.remove("finish-step")
        }
        for (var d = 0; d < i.length; ++d) {
            var u, s = !1, p = _createForOfIteratorHelper(a);
            try {
                for (p.s(); !(u = p.n()).done; ) {
                    var m = u.value;
                    if (i[d].id == m) {
                        s = !0;
                        break
                    }
                }
            } catch (t) {
                p.e(t)
            } finally {
                p.f()
            }
            s && i[d].classList.contains("active-step") && i[d].classList.remove("finish-step")
        }
    }
}
function getEmailBzTool() {
    $("#esToolQuiz-form").validate({
        rules: {
            "your-email": "required"
        },
        messages: {
            "your-email": "This field is required."
        },
        submitHandler: function(t) {
            document.getElementById("loading-button").style.display = "inline-block",
            grecaptcha.ready(function() {
                grecaptcha.execute(clientIdCaptcha, {
                    action: "es_tool"
                }).then(function(e) {
                    var t = {
                        email: $("#esToolQuiz-form input[name=your-email]").val(),
                        subject: " ",
                        contact_from_id: $("#esToolQuiz-form").attr("data-id-form"),
                        client_id: gaUserId,
                        website_id: 1
                    };
                    localStorage.setItem("isBzToolEmail", JSON.stringify(t.email));
                    var a = {
                        fullname: t.email,
                        email: t.email
                    };
                    $.ajax({
                        type: "POST",
                        beforeSend: function(t) {
                            t.setRequestHeader("captcha-response", e)
                        },
                        url: linkUrlOrderAPi + "/api/portal/contact_form/es_tool",
                        data: JSON.stringify(t),
                        contentType: "application/json",
                        success: function(t) {
                            document.dispatchEvent(new CustomEvent("contact_form",{
                                detail: {
                                    dataForm: a,
                                    response: t
                                }
                            })),
                            Swal.fire({
                                position: "center",
                                type: "success",
                                title: "Send Success",
                                showConfirmButton: !1,
                                timer: 1500
                            }),
                            onInit()
                        },
                        error: function() {
                            Swal.fire({
                                position: "center",
                                type: "error",
                                title: "Send Error",
                                showConfirmButton: !1,
                                timer: 1500
                            })
                        },
                        complete: function(t) {
                            document.getElementById("loading-button").style.display = "none"
                        }
                    })
                })
            })
        }
    })
}
function getEmailBviTool() {
    $("#esToolQuiz-form").validate({
        rules: {
            "your-email": "required"
        },
        messages: {
            "your-email": "This field is required."
        },
        submitHandler: function(t) {
            document.getElementById("loading-button").style.display = "inline-block",
            grecaptcha.ready(function() {
                grecaptcha.execute(clientIdCaptcha, {
                    action: "es_tool"
                }).then(function(e) {
                    var t = {
                        email: $("#esToolQuiz-form input[name=your-email]").val(),
                        subject: " ",
                        contact_from_id: $("#esToolQuiz-form").attr("data-id-form"),
                        client_id: gaUserId,
                        website_id: 1
                    };
                    localStorage.setItem("isBviToolEmail", JSON.stringify(t.email));
                    var a = {
                        fullname: t.email,
                        email: t.email
                    };
                    $.ajax({
                        type: "POST",
                        beforeSend: function(t) {
                            t.setRequestHeader("captcha-response", e)
                        },
                        url: linkUrlOrderAPi + "/api/portal/contact_form/es_tool",
                        data: JSON.stringify(t),
                        contentType: "application/json",
                        success: function(t) {
                            document.dispatchEvent(new CustomEvent("contact_form",{
                                detail: {
                                    dataForm: a,
                                    response: t
                                }
                            })),
                            Swal.fire({
                                position: "center",
                                type: "success",
                                title: "Send Success",
                                showConfirmButton: !1,
                                timer: 1500
                            }),
                            onInit()
                        },
                        error: function() {
                            Swal.fire({
                                position: "center",
                                type: "error",
                                title: "Send Error",
                                showConfirmButton: !1,
                                timer: 1500
                            })
                        },
                        complete: function(t) {
                            document.getElementById("loading-button").style.display = "none"
                        }
                    })
                })
            })
        }
    })
}
function loadFunctionEsQuizTool() {
    var t = (new Date).getTime()
      , e = localStorage.getItem("setExpirationDate");
    null == e ? localStorage.setItem("setExpirationDate", t) : 2592e5 < t - e && (localStorage.clear(),
    localStorage.setItem("setExpirationDate", t)),
    onInit()
}
function getCategoryES() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
      , e = 1 < arguments.length ? arguments[1] : void 0;
    try {
        var n, i = "#getCategoryES_" + t;
        switch (e) {
        case 79:
            n = "A";
            break;
        case 80:
            n = "B";
            break;
        case 81:
            n = "C"
        }
        console.log($(i).attr("data-id-form")),
        grecaptcha.ready(function() {
            grecaptcha.execute(clientIdCaptcha, {
                action: "es_tool_category"
            }).then(function(e) {
                document.getElementById("loading-button").style.display = "inline-block";
                var t = {
                    email: JSON.parse(localStorage.getItem("isBviToolEmail")),
                    subject: " ",
                    contact_from_id: $(i).attr("data-id-form"),
                    esCategory: n,
                    client_id: gaUserId,
                    website_id: 1
                }
                  , a = {
                    fullname: t.email,
                    email: t.email
                };
                $.ajax({
                    type: "POST",
                    beforeSend: function(t) {
                        t.setRequestHeader("captcha-response", e)
                    },
                    url: linkUrlOrderAPi + "/api/portal/contact_form/es_tool_category",
                    data: JSON.stringify(t),
                    contentType: "application/json",
                    success: function(t) {
                        document.dispatchEvent(new CustomEvent("contact_form",{
                            detail: {
                                dataForm: a,
                                response: t
                            }
                        })),
                        Swal.fire({
                            position: "center",
                            type: "success",
                            title: "Send Success",
                            showConfirmButton: !1,
                            timer: 1500
                        })
                    },
                    error: function() {
                        Swal.fire({
                            position: "center",
                            type: "error",
                            title: "Send Error",
                            showConfirmButton: !1,
                            timer: 1500
                        })
                    },
                    complete: function(t) {}
                })
            })
        })
    } catch (t) {
        console.log(t)
    }
}
function tabCaculatorAccVn() {
    Account = calAccountVn($("#accounting-vn input[name='transactionsInputVn']").val()),
    $("#accounting-vn__total").text(Account + AccountXero),
    calTotalAccAuditYearlyVn()
}
function calAccountVn(t) {
    var e = 0;
    return 1 <= t && t < 10 ? e = 35 : 10 <= t && t < 20 ? e = 65 : 20 <= t && t < 30 ? e = 90 : 30 <= t && t < 40 ? e = 120 : 40 <= t && t < 50 ? e = 150 : 50 <= t && t < 60 ? e = 183 : 60 <= t && t < 70 ? e = 208 : 70 <= t && t < 80 ? e = 233 : 80 <= t && t <= 90 && (e = 258),
    e
}
function calXeroVn(t) {
    return t ? 25 : 0
}
function calTotalAccAuditYearlyVn() {
    console.log("test");
    var t = parseInt(Audit.toString().replace(/,/g, ""))
      , t = 12 * (Account + AccountXero) + t;
    $("#year_acc_audit_vn").text(parseFloat(t).toLocaleString("en")),
    0 < parseInt(Audit.toString().replace(/,/g, "")) ? $(".caculator-price .pyearly-acc-audit .text_content").text("Total yearly estimated cost for both accounting and auditing:") : $(".caculator-price .pyearly-acc-audit .text_content").text("Total yearly estimated cost for accounting:")
}
function calAccount(t) {
    var e = 0;
    return 1 <= t && t < 5 ? e = 30 : 5 <= t && t < 10 ? e = 35 : 10 <= t && t < 20 ? e = 40 : 20 <= t && t < 30 ? e = 65 : 30 <= t && t < 40 ? e = 90 : 40 <= t && t < 50 ? e = 120 : 50 <= t && t < 60 ? e = 150 : 60 == t ? e = 180 : 60 < t && t <= 100 ? e = Math.round(180 + 2.5 * (t - 60)) : 100 < t && (e = 280),
    e
}
function calAudit(t, e) {
    var a = "0";
    return "HKD" === e ? 0 < t && t < 1 ? a = "650" : 1 <= t && t <= 2.99 ? a = "950" : 3 <= t && t <= 4.99 ? a = "1,350" : 5 <= t && t <= 6.99 ? a = "1,750" : 7 <= t && t <= 9.99 ? a = "2,150" : 10 <= t && t <= 12.99 ? a = "2,650" : 13 <= t && t <= 15.99 ? a = "3,150" : 16 <= t && t <= 18.99 && (a = "3,650") : 0 < t && t <= 129e3 ? a = "650" : 129001 <= t && t <= 387e3 ? a = "950" : 387001 <= t && t <= 645e3 ? a = "1,350" : 645001 <= t && t <= 903e3 ? a = "1,750" : 903001 <= t && t <= 129e4 ? a = "2,150" : 1290001 <= t && t <= 1676e3 ? a = "2,650" : 1676001 <= t && t <= 2064e3 ? a = "3,150" : 2064001 <= t && t <= 245e4 && (a = "3,650"),
    a
}
function calXero(t) {
    return t ? 25 : 0
}
function convertInputValue(t, e, a, n, i) {
    return (t - e) / (a - e) * (i - n) + n
}
function calTotalAccAuditYearly() {
    var t = parseInt(Audit.toString().replace(/,/g, ""))
      , t = 12 * (Account + AccountXero) + t;
    $("#year_acc_audit").text(parseFloat(t).toLocaleString("en")),
    0 < parseInt(Audit.toString().replace(/,/g, "")) ? $(".caculator-price .pyearly-acc-audit .text_content").text("Total yearly estimated cost for both accounting and auditing:") : $(".caculator-price .pyearly-acc-audit .text_content").text("Total yearly estimated cost for accounting:")
}
function calYearlyAcc(t) {
    return t = parseInt(t.toString().replace(/,/g, "")),
    (1 === TypeCal ? parseFloat(12 * t) : parseFloat(t)).toLocaleString("en")
}
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$("#accounting-vn input[name='transactionsInputVn']").on("input change", function(t) {
    t = t.target.value;
    90 < t ? (t = 90,
    $("#accounting-vn input[name='transactionsInputVn']").val(90)) : t < 1 && (t = 1,
    $("#accounting-vn input[name='transactionsInputVn']").val(1)),
    Account = calAccountVn(t),
    $("#accounting-vn__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearlyVn(),
    $("#accounting-vn input[name='rangeInputAccVn']").val(t)
}),
$("#accounting-vn input[name='rangeInputAccVn']").on("input", function(t) {
    var e = t.target.value;
    Account = calAccountVn(e),
    $("#accounting-vn__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearlyVn(),
    $("#accounting-vn input[name='transactionsInputVn']").val(t.target.value)
}),
$("#accounting-vn input[name='rangeInputAccVn']").on("mousemove", function(t) {
    var e = t.target.value;
    Account = calAccountVn(e),
    $("#accounting-vn__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearlyVn(),
    $("#accounting-vn input[name='transactionsInputVn']").val(t.target.value)
}),
$("#accounting-vn input[name=curencyInputVn]").change(function() {
    var t = $(this).is(":checked");
    AccountXero = calXeroVn(t),
    $("#accounting-vn__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearlyVn()
}),
$(".switch-price-vn input[name=toggle-month-year-vn]").change(function() {
    var t = $(this).is(":checked")
      , e = $("#accounting-vn__total").text()
      , e = parseInt(e.replace(/,/g, ""));
    t ? (TypeCal = 1,
    $("#accounting-vn__total").text(parseFloat(12 * e).toLocaleString("en"))) : (TypeCal = 0,
    $("#accounting-vn__total").text(parseFloat(e / 12).toLocaleString("en")))
}),
$(document).ready(function() {
    Account = calAccount($("#accounting input[name='transactionsInput']").val()),
    $("#accounting__total").text(Account + AccountXero),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-input-usd']").css("display", "none"),
    $("#auditing .audit-range-usd").css("display", "none")
}),
$(".nav-tabs li").on("click", function() {
    var t;
    "audit-attr" === $(this).find("a").attr("class") ? (t = $("#auditing select[name='currency']").val(),
    Audit = "HKD" === t ? calAudit($("#auditing input[name='audit-range-hkd']").val(), "HKD") : calAudit($("#auditing input[name='audit-range-usd']").val(), "USD"),
    $(".caculator-price .switch-price").css("display", "none"),
    $("#accounting__total").text(Audit)) : ($(".caculator-price .switch-price").css("display", "block"),
    $("#accounting__total").text(calYearlyAcc(Account + AccountXero)))
}),
$("#accounting input[name='transactionsInput']").on("input change", function(t) {
    t = t.target.value;
    100 < t ? (t = 100,
    $("#accounting input[name='transactionsInput']").val(100)) : t < 1 && (t = 1,
    $("#accounting input[name='transactionsInput']").val(1)),
    Account = calAccount(t),
    $("#accounting__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearly(),
    $("#accounting input[name='rangeInputAcc']").val(t)
}),
$("#accounting input[name='rangeInputAcc']").on("input", function(t) {
    var e = t.target.value;
    Account = calAccount(e),
    $("#accounting__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearly(),
    $("#accounting input[name='transactionsInput']").val(t.target.value)
}),
$("#accounting input[name='rangeInputAcc']").on("mousemove", function(t) {
    var e = t.target.value;
    Account = calAccount(e),
    $("#accounting__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearly(),
    $("#accounting input[name='transactionsInput']").val(t.target.value)
}),
$("#accounting input[name=curencyInput]").change(function() {
    var t = $(this).is(":checked");
    AccountXero = calXero(t),
    $("#accounting__total").text(calYearlyAcc(Account + AccountXero)),
    calTotalAccAuditYearly()
}),
$(".switch-price input[name=toggle-month-year]").change(function() {
    var t = $(this).is(":checked")
      , e = $("#accounting__total").text()
      , e = parseInt(e.replace(/,/g, ""));
    t ? (TypeCal = 1,
    $("#accounting__total").text(parseFloat(12 * e).toLocaleString("en"))) : (TypeCal = 0,
    $("#accounting__total").text(parseFloat(e / 12).toLocaleString("en")))
}),
$("#auditing select[name='currency']").change(function() {
    Audit = 0,
    $("#accounting__total").text(Audit),
    $("#auditing input[name='audit-input-hkd']").val(0),
    $("#auditing input[name='audit-input-usd']").val(0),
    $("#auditing input[name='audit-range-usd']").val(0),
    $("#auditing input[name='audit-range-hkd']").val(0),
    calTotalAccAuditYearly(),
    "HKD" === event.target.value ? ($("#auditing input[name='audit-input-usd']").css("display", "none"),
    $("#auditing .audit-range-usd").css("display", "none"),
    $("#auditing input[name='audit-input-hkd']").css("display", "inline-block"),
    $("#auditing .HKDunit").css("display", "inline-block"),
    $("#auditing .audit-range-hkd").css("display", "inline-block")) : ($("#auditing input[name='audit-input-hkd']").css("display", "none"),
    $("#auditing .audit-range-hkd").css("display", "none"),
    $("#auditing .HKDunit").css("display", "none"),
    $("#auditing input[name='audit-input-usd']").css("display", "inline-block"),
    $("#auditing .audit-range-usd").css("display", "inline-block"))
}),
$("#auditing input[name='audit-range-hkd']").on("input", function(t) {
    t = t.target.value;
    Audit = calAudit(t, "HKD"),
    $("#accounting__total").text(Audit),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-input-hkd']").val(t)
}),
$("#auditing input[name='audit-range-hkd']").on("mousemove", function(t) {
    t = t.target.value;
    Audit = calAudit(t, "HKD"),
    $("#accounting__total").text(Audit),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-input-hkd']").val(t)
}),
$("#auditing input[name='audit-range-usd']").on("input", function(t) {
    t = t.target.value;
    Audit = calAudit(t, "USD"),
    $("#accounting__total").text(Audit),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-input-usd']").val(Math.round(t))
}),
$("#auditing input[name='audit-range-usd']").on("mousemove", function(t) {
    t = t.target.value;
    Audit = calAudit(t, "USD"),
    $("#accounting__total").text(Audit),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-input-usd']").val(Math.round(t))
}),
$("#auditing input[name='audit-input-hkd']").on("input change", function(t) {
    t = t.target.value;
    18.99 < t ? (t = 18.99,
    $("#auditing input[name='audit-input-hkd']").val(t)) : t <= 0 && (t = 0,
    $("#auditing input[name='audit-input-hkd']").val(0)),
    Audit = calAudit(t, "HKD"),
    $("#accounting__total").text(Audit),
    calTotalAccAuditYearly(),
    $("#auditing input[name='audit-range-hkd']").val(t)
}),
$("#auditing input[name='audit-input-usd']").on("input change", function(t) {
    t = t.target.value;
    245e4 < t ? (t = 245e4,
    $("#auditing input[name='audit-input-usd']").val(245e4)) : t <= 0 && (t = 0,
    $("#auditing input[name='audit-input-usd']").val(0)),
    Audit = calAudit(t, "USD"),
    calTotalAccAuditYearly(),
    $("#accounting__total").text(Audit),
    $("#auditing input[name='audit-range-usd']").val(t)
});
var stateChatBot = {
    signature: "",
    order_code: "",
    promotion_code: ""
}
  , propChatBot = [];
function encodeQueryData(t) {
    var e, a = [];
    for (e in t)
        a.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]));
    return "?" + a.join("&")
}
function onloadChatbot() {}
function getSignatureChat() {
    localStorage.setItem("statusPopup", "1");
    var e, a, n, i, r, o, s, c, l, t = JSON.parse(localStorage.getItem("order_code")), d = JSON.parse(localStorage.getItem("status_chatbot_afterload"));
    if ((y = localStorage.getItem("history")) && 0 < y.length) {
        y = JSON.parse(y),
        Chat.start($("#chat-context"), []);
        var u, p = _createForOfIteratorHelper(y);
        try {
            for (p.s(); !(u = p.n()).done; ) {
                var m = u.value;
                Chat.addResponse(m.isRobot, m.m)
            }
        } catch (t) {
            p.e(t)
        } finally {
            p.f()
        }
        Chat.addTags([{
            type: "msg",
            "chat-msg": ""
        }, {
            type: "msg",
            "chat-msg": "Executing..."
        }]),
        Chat.nextTag(),
        localStorage.getItem("payment_status") && paymentStep()
    } else
        $(function() {
            Chat.start($("#chat-context"), g)
        });
    if (d && 7 === d) {
        localStorage.removeItem("isSendPending");
        var h = JSON.parse(localStorage.getItem("Chatbotstep1"));
        $(function() {
            Chat.start($("#chat-context"), g)
        });
        var g = [{
            type: "msg",
            "chat-msg": 'Hello <span style="text-transform: capitalize;">'.concat(h.first_name, "</span>")
        }, {
            type: "msg",
            "chat-msg": "We have successfully received your order, and is now processing further."
        }, {
            type: "msg",
            "chat-msg": "The order confirmation and payment details have been sent to your email."
        }, {
            type: "msg",
            "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
        }, {
            type: "msg",
            "chat-msg": '\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t'
        }]
    } else if (d && 1 === d) {
        localStorage.removeItem("isSendPending");
        var h = JSON.parse(localStorage.getItem("Chatbotstep1"));
        $(function() {
            Chat.start($("#chat-context"), g)
        });
        var g = [{
            type: "msg",
            "chat-msg": 'Hello <span style="text-transform: capitalize;">'.concat(h.first_name, "</span>")
        }, {
            type: "msg",
            "chat-msg": "Thank you for your payment."
        }, {
            type: "msg",
            "chat-msg": "We have successfully received your order, and is now processing further."
        }, {
            type: "msg",
            "chat-msg": "The order confirmation and service receipt will be sent to your email shortly."
        }, {
            type: "msg",
            "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
        }, {
            type: "msg",
            "chat-msg": '\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t'
        }];
        if (t) {
            var f = new URLSearchParams(window.location.search).get("order_code")
              , y = localStorage.getItem("history");
            if (f === t)
                if (y && 0 < y.length) {
                    y = JSON.parse(y),
                    Chat.start($("#chat-context"), []);
                    var b, _ = _createForOfIteratorHelper(y);
                    try {
                        for (_.s(); !(b = _.n()).done; ) {
                            var v = b.value;
                            Chat.addResponse(v.isRobot, v.m)
                        }
                    } catch (t) {
                        _.e(t)
                    } finally {
                        _.f()
                    }
                    Chat.addTags([{
                        type: "msg",
                        "chat-msg": ""
                    }, {
                        type: "msg",
                        "chat-msg": "Executing..."
                    }]),
                    Chat.nextTag(),
                    localStorage.getItem("payment_status") && paymentStep()
                } else
                    $(function() {
                        Chat.start($("#chat-context"), g)
                    })
        }
    } else
        d && 2 === d ? (localStorage.removeItem("isSendPending"),
        h = JSON.parse(localStorage.getItem("Chatbotstep1")),
        $(function() {
            Chat.start($("#chat-context"), g)
        }),
        g = [{
            type: "msg",
            "chat-msg": 'Hello <span style="text-transform: capitalize;">'.concat(h.first_name, "</span>")
        }, {
            type: "msg",
            "chat-msg": "We have received your order, and is now processing further."
        }, {
            type: "msg",
            "chat-msg": "The order confirmation and payment details have been sent to your email to help you make payment again."
        }, {
            type: "msg",
            "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the below:"
        }, {
            type: "msg",
            "chat-msg": '\n\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t\t'
        }]) : (t = new URLSearchParams(window.location.search).get("signature"),
        getJsonInfo(d = linkUrlOrderAPi + "/api/portal/order/client/" + t).state ? (d = (h = getJsonInfo(d)).data.signature,
        y = localStorage.getItem("history"),
        t && t == d && (e = h.data.TitleName.name || "",
        a = h.data.first_name || "",
        n = h.data.id || "",
        i = h.data.email || "",
        r = h.data.phone || "",
        o = h.data.CompanyCountry.guid || "",
        s = h.data.CompanyCountry.name || "",
        c = h.data.EntityType.name || "",
        l = h.data.company_name || "",
        h.data.title_name_id,
        g = [{
            type: "msg",
            "chat-msg": "Hello <span style='text-transform: capitalize;'>".concat(a || "", "</span>")
        }, {
            type: "msg",
            "chat-msg": "I'm here to help you finish your uncompleted order."
        }, {
            type: "msg",
            "chat-msg": "Here is your contact information:"
        }, {
            type: "msg",
            "chat-msg": "<p>Full name: ".concat(a || "", " </p><p>Email: ").concat(i, "</p><p>Phone number:  ").concat(r || "", "</p>")
        }, {
            type: "msg",
            "chat-msg": "Above information helps us keep in touch with you should you finish your order."
        }, {
            type: "input",
            tag: "radio",
            name: "tricked",
            "chat-msg": "Please confirm your contact information before we proceed further",
            children: [{
                value: !0,
                text: "Yes, it is right"
            }, {
                value: !1,
                text: "No, i would like to change it"
            }],
            success: function(t) {
                "false" == t.tricked ? Chat.addTags([{
                    type: "msg",
                    "chat-msg": "Edit your below information as you wish:"
                }, {
                    type: "input",
                    tag: "radio",
                    name: "buttonSF",
                    "chat-msg": "<form name='myForm' class='form-horizontal' id='formGetChatbot' method=\"POST\"><div class='form-group'><label for='fname'>Full name:</label><input class='form-control' type='text' id='e_fist_name' name='first-name' value='".concat(a || "", "' required=''></div><div class='form-group'><label for='fname'>Email:</label><input class='form-control' type='text' id='e_email' name='your-email' value='").concat(i, "' required='' disabled='true'></div><div class='form-group'><label for='fname'>Phone number:</label><input class='form-control' type='text' id='e_phone' name='your-phone' value='").concat(r || "", "'></div><div class='row-btn'><div class='gg_captcha'><div id='inline-badge-chatbot'></div></div><input type=\"submit\" style=\"display:none\" /></div></form>"),
                    children: [{
                        value: "buttonSm",
                        text: '<div style="display:none;">Here you go</div>',
                        subtext: "<input style=\"color:#ffffff;padding:15px; margin:-14px; background-color: #007eff; border: 0;\" type=\"button\" onclick=\"sendFormChatbot()\" value=\"Here you go\" id=\"btnGetChatbotFee\"/><script>function onRecaptchaLoadChatBot() {var clientIdCaptcha = grecaptcha.render('inline-badge-chatbot', {'sitekey': '6LeJZ68UAAAAAJZ8jxdgylEXeWL8P9Ckv7CLtE6t','badge': 'inline','size': 'invisible'});\n\t\t\t\t\t\t\t\t\t\t\t}<\/script><script src=\"https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoadChatBot\"><\/script>"
                    }],
                    callback: function() {
                        $("#btnGetChatbotFee").click(function() {
                            $("#formGetChatbot").submit()
                        })
                    }
                }]) : localStorage.setItem("Chatbotstep1", JSON.stringify({
                    cutomer_id: n,
                    title_name: e,
                    first_name: a,
                    company_name: l,
                    email: i,
                    company_country: s,
                    entity_type: c,
                    phone: r,
                    website_id: 1
                }))
            }
        }, {
            type: "msg",
            "chat-msg": "Ok"
        }, {
            type: "msg",
            "chat-msg": "Thank you for your confirmation"
        }, {
            type: "msg",
            "chat-msg": "Currently, we offer 3 different packages for company formation in ".concat(s, " ")
        }, {
            type: "msg",
            "chat-msg": "Kindly select the one that matches your needs.",
            callback: function() {
                var t, r = chat_bot_package.find(function(t) {
                    return t.guid === o
                });
                localStorage.setItem("countryCus", JSON.stringify(r.guid)),
                r && (t = "hong-kong" == r.guid ? "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup within 24 hrs</li><li>01 year Company Secretary</li><li> 01 year Local Registered Address</li><li> All Government fee in 01 year</li><li> Significant Controller Register with Designated Representative</li></ul><div class='neat-hk'><p class='subtitle subtitle-basic'>Free Support to open bank account with Neat </p><img src='/images/label-neat.png' ></div></div>" : "singapore" == r.guid ? "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup within 24 hrs</li><li>01 year Company Secretary</li><li> 01 year Local Registered Address</li><li>Nominee director in the first year</li><li> All Government fee in 01 year</li></ul></div>" : "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup in 2-3 days</li><li>\n\t\t\t\t\t\t\t\t\t01 year Company Secretarial service</li><li>01 year Registered Agent & Local Registered Address</li><li> All Government fee in 01 year</li></ul></div>",
                Chat.addTags([{
                    type: "input",
                    tag: "radio",
                    name: "select_package",
                    "chat-msg": "<div class='show-package_chatbot' id='show-package_chatbot'><div class='container'><div class='content-payment'><div class='row'>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-basic'><input type='radio' value='packageBasic' id='packageBasic' name='packageChat'><label for='packageBasic'><div class='countryPackages'> <div class='row itemHeader itemHeaderBasic'><div class='col-md-6 name'><h3>BASIC</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package1' data-pk_type='pk_1' data-pk_id='".concat(r.Packages[0].id, "' data-init_ppk1='").concat(r.Packages[0].unit_price, "'>").concat(r.Packages[0].unit_price, "</span></div></div>\n\t\t\t\t\t\t\t\t\t\t").concat(t, "</div></label></div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-standard'><input type='radio' value='packageStandard' id='packageStandard' name='packageChat' checked ><label for='packageStandard'><div class='countryPackages'> <div class='best-choice' ><p>BEST CHOICE</p></div><div class='row itemHeader itemHeaderStandard'><div class='col-md-6 name'><h3>STANDARD</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package2' data-pk_type='pk_2' data-pk_id='").concat(r.Packages[1].id, "' data-init_ppk2='").concat(r.Packages[1].unit_price, "'>").concat(r.Packages[1].unit_price, "</span></div></div><div class='package-itemBody'><p class='subtitle subtitle-standard'>Everything in Basic package</p>\n\t\t\t\t\t\t\t\t\t\t<p class='subtitle subtitle-standard'>Open Bank Account </p><ul><li>One-time fee for application of one bank</li></ul></div></div></label></div> \n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-premium'><input type='radio' value='packagePremium' id='packagePremium' name='packageChat'><label for='packagePremium'><div class='countryPackages'> <div class='row itemHeader itemHeaderPremium'><div class='col-md-6 name'><h3>PREMIUM</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package3' data-pk_type='pk_3' data-pk_id='").concat(r.Packages[2].id, "' data-init_ppk3='").concat(r.Packages[2].unit_price, "'>").concat(r.Packages[2].unit_price, "</span></div></div><div class='package-itemBody'><p class='subtitle subtitle-premium'>Everything in Standard package\n\t\t\t\t\t\t\t\t\t\t</p><p class='subtitle subtitle-premium'>Premium Banking Support</p><ul><li>One-time fee for application of up to 5 banks OR till account opened successfully, whichever comes first</li></ul></div></div></label></div></div></div> \n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div></div>"),
                    children: [{
                        value: "select_pk",
                        text: '<div class="chatbot__button-package"><button class="btn btnChat btn-next-step" type="submit" id=\'id-submit_package\'>Get started<i class="fa fa-spinner fa-spin" id="loading-button" style="display: none"></i></button></div>'
                    }],
                    callback: function() {
                        $("#id-submit_package").on("click", function() {
                            switch ($("#show-package_chatbot input:radio[name=packageChat]:checked").val()) {
                            case "packageBasic":
                                var t = r.Packages[0].id
                                  , e = 1
                                  , a = r.Packages[0].unit_price;
                                break;
                            case "packageStandard":
                                t = r.Packages[1].id,
                                e = 2,
                                a = r.Packages[1].unit_price;
                                break;
                            case "packagePremium":
                                t = r.Packages[2].id,
                                e = 3,
                                a = r.Packages[2].unit_price
                            }
                            var n = e
                              , i = a;
                            localStorage.setItem("Chatbotpk_id", JSON.stringify(t)),
                            localStorage.setItem("Chatbotidpk", JSON.stringify(n)),
                            localStorage.setItem("Chatbot_price_package_step2", JSON.stringify(i))
                        })
                    }
                }]))
            }
        }, {
            type: "msg",
            "chat-msg": "Would you like us to accelerate the registration process?"
        }, {
            type: "msg",
            "chat-msg": "Your company's documents would be ready to be delivered via email in 1 day, instead of waiting for 3 days like normal."
        }, {
            type: "input",
            tag: "radio",
            name: "add250",
            "chat-msg": "And it would cost you additional $250 for this expedited option.",
            children: [{
                value: !0,
                text: "<div unit_price='250' id='99_".concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "'>Yes, i need it</div>")
            }, {
                value: !1,
                text: "<div  unit_price='0' id='99_".concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "'>Just forget it</div>")
            }],
            success: function(t) {
                var n;
                n = "true" == t.add250 ? 250 : 0,
                localStorage.setItem("chatBotAdd250", JSON.stringify(n)),
                $.when(priceShipping(t)).then(function(t) {
                    var a = priceShipping(t);
                    Chat.addTags([{
                        type: "input",
                        tag: "radio",
                        name: "add75",
                        "chat-msg": "Thank you. So, now please confirm if you need us to courier your company's documents to your address for $".concat(a.Fee.value),
                        children: [{
                            value: !0,
                            text: "<div id='".concat(a.id, "_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' unit_price='").concat(a.Fee.value, "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' style='padding: 20px; margin: -14px;'>Yes, i need physical documents of my company</div>")
                        }, {
                            value: !1,
                            text: "<div id='".concat(a.id, "_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' unit_price='0' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' style='padding: 20px; margin: -14px;'>No, maybe later</div>")
                        }],
                        success: function(t) {
                            var e;
                            t = "true" == t.add75 ? (e = a.Fee.value,
                            n + e) : n + (e = 0),
                            localStorage.setItem("chatBotIdAdd75", JSON.stringify(a.id)),
                            localStorage.setItem("chatBotAdd75", JSON.stringify(e)),
                            localStorage.setItem("chatBotPiceTotalPk", JSON.stringify(t)),
                            getStartedStep2Chatbot()
                        }
                    }])
                }, function() {
                    console.log("Something broke!")
                })
            }
        }, {
            type: "input",
            tag: "radio",
            name: "list",
            "chat-msg": "Would you like us to prepare another set of company documents duly certified by qualified authority?",
            children: [{
                value: "show",
                text: "<div onclick='clickShowOption()' style='padding:20px; margin: -14px;'>Yes, show me options</div>"
            }, {
                value: "hide",
                text: "<div onclick='onHideLegal()' style='padding:20px; margin: -14px;'>No, maybe later</div>"
            }],
            success: function(t) {
                "show" == t.list && ($.when(clickShowOption(t)),
                t = clickShowOption(t),
                Chat.addTags([{
                    type: "msg",
                    "chat-msg": "What type of document verification and other documents do you need?"
                }, {
                    type: "input",
                    tag: "radio",
                    name: "checkout",
                    "chat-msg": "<div id='ifnodelete' class='show-option-list row'> ".concat(t, " </div>"),
                    children: [{
                        value: "checkout",
                        text: "<div class='col-md-6 col-sm-12 col-xs-12'><div class='button-checkout'><button class='btn btnChat btn-next-step' type='button' id='button-form-step3' style='display: block; padding: 24px; margin: -14px -29px;'>Checkout<i class='fa fa-spinner fa-spin' id='loading-button' style='display: none'></i></button></div></div>"
                    }],
                    callback: function() {
                        $(".chatbot-page .show-option-list .checkbox-item input").on("change", function() {
                            $(this).is(":checked") ? ($(this).parent().next().css("display", "block"),
                            $(".chatbot-page .show-option-list .quantity-item #quantity_" + $(this).val()).text("1"),
                            $(".chatbot-page .show-option-list .quantity-item #quantity_" + $(this).val()).attr("quantity", "1")) : $(this).parent().next().css("display", "none")
                        }),
                        $("#button-form-step3").on("click", function() {
                            for (var t = [], e = document.querySelectorAll(".chatbot-page .show-option-list input"), a = document.querySelectorAll(".chatbot-page .show-option-list .quantity_with_id"), n = [], i = 0; i < e.length; i++)
                                e[i].checked && n.push(parseInt(e[i].getAttribute("id")));
                            for (var r = 0; r < a.length; r++)
                                0 < parseInt(a[r].getAttribute("quantity")) && n.includes(parseInt(a[r].getAttribute("service_id"))) && t.push({
                                    service_id: parseInt(a[r].getAttribute("service_id")),
                                    quantity: parseInt(a[r].getAttribute("quantity"))
                                });
                            var o = JSON.parse(localStorage.getItem("step2Chatbot"));
                            o && postStep3Chatbot({
                                package_id: parseInt(o.pk_id),
                                OrderItems: [].concat(o.listService, t),
                                signature: localStorage.getItem("signatureChatbot")
                            }),
                            localStorage.setItem("ChatbotlistServices", JSON.stringify(t))
                        })
                    }
                }]))
            }
        }, {
            type: "msg",
            "chat-msg": "Thank you for entrusting our services."
        }, {
            type: "msg",
            "chat-msg": "Here is the complete list of your ordered service for company registration in ".concat(s, ".")
        }, {
            type: "msg",
            "chat-msg": "Please check it carefully before we proceed to payment step.",
            callback: function() {
                $.when(loadCurrentOrderDetail()).then(function(t) {
                    t = generateContentOrderChatbot(t.data);
                    Chat.addTags([{
                        type: "input",
                        tag: "radio",
                        name: "nextStep5",
                        "chat-msg": t,
                        children: [{
                            value: "yes",
                            text: "<div >Yes, it is correct. please check out with these services.</div>"
                        }, {
                            value: "no",
                            text: "No, I want to start over again."
                        }, {
                            value: "other",
                            text: "<div onclick='delDataChat()'>Please email me the order summary, for i want to reconsider it.</div>"
                        }],
                        success: function e(t) {
                            t = t.nextStep5;
                            "yes" == t ? showMethodsPayment() : "no" == t ? Chat.addTags([{
                                type: "msg",
                                "chat-msg": "Here are 3 packages for company formation in ".concat(s, " ")
                            }, {
                                type: "msg",
                                "chat-msg": "Kindly select the one that matches your needs.",
                                callback: function() {
                                    $("#show-package_chatbot").remove();
                                    var t, r = chat_bot_package.find(function(t) {
                                        return t.guid === o
                                    });
                                    r && (t = "hong-kong" == r.guid ? "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup within 24 hrs</li><li>01 year Company Secretary</li><li> 01 year Local Registered Address</li><li> All Government fee in 01 year</li><li> Significant Controller Register with Designated Representative</li></ul><div class='neat-hk'><p class='subtitle subtitle-basic'>Free Support to open bank account with Neat </p><img src='/images/label-neat.png' ></div></div>" : "singapore" == r.guid ? "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup within 24 hrs</li><li>01 year Company Secretary</li><li> 01 year Local Registered Address</li><li>Nominee director in the first year</li><li> All Government fee in 01 year</li></ul></div>" : "<div class='package-itemBody'><p class='subtitle subtitle-basic'>Company Formation</p><ul><li>Company setup in 2-3 days</li><li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t01 year Company Secretarial service</li><li>01 year Registered Agent & Local Registered Address</li><li> All Government fee in 01 year</li></ul></div>",
                                    Chat.addTags([{
                                        type: "input",
                                        tag: "radio",
                                        name: "select_package",
                                        "chat-msg": "<div class='show-package_chatbot' id='show-package_chatbot'><div class='container'><div class='content-payment'><div class='row'>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-basic'><input type='radio' value='packageBasic' id='packageBasic' name='packageChat'><label for='packageBasic'><div class='countryPackages'> <div class='row itemHeader itemHeaderBasic'><div class='col-md-6 name'><h3>BASIC</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package1' data-pk_type='pk_1' data-pk_id='".concat(r.Packages[0].id, "' data-init_ppk1='").concat(r.Packages[0].unit_price, "'>").concat(r.Packages[0].unit_price, "</span></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t").concat(t, "</div></label></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-standard'><input type='radio' value='packageStandard' id='packageStandard' name='packageChat' checked ><label for='packageStandard'><div class='countryPackages'> <div class='best-choice' ><p>BEST CHOICE</p></div><div class='row itemHeader itemHeaderStandard'><div class='col-md-6 name'><h3>STANDARD</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package2' data-pk_type='pk_2' data-pk_id='").concat(r.Packages[1].id, "' data-init_ppk2='").concat(r.Packages[1].unit_price, "'>").concat(r.Packages[1].unit_price, "</span></div></div><div class='package-itemBody'><p class='subtitle subtitle-standard'>Everything in Basic package</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class='subtitle subtitle-standard'>Open Bank Account </p><ul><li>One-time fee for application of one bank</li></ul></div></div></label></div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class='col-md-4 col-sm-6 col-xs-12 package-col package-col-premium'><input type='radio' value='packagePremium' id='packagePremium' name='packageChat'><label for='packagePremium'><div class='countryPackages'> <div class='row itemHeader itemHeaderPremium'><div class='col-md-6 name'><h3>PREMIUM</h3></div><div class='col-md-6 price'><span class='countryPackages-sup'>$US</span><span class='countryPackages-price' id='price_total_package3' data-pk_type='pk_3' data-pk_id='").concat(r.Packages[2].id, "' data-init_ppk3='").concat(r.Packages[2].unit_price, "'>").concat(r.Packages[2].unit_price, "</span></div></div><div class='package-itemBody'><p class='subtitle subtitle-premium'>Everything in Standard package\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</p><p class='subtitle subtitle-premium'>Premium Banking Support</p><ul><li>One-time fee for application of up to 5 banks OR till account opened successfully, whichever comes first</li></ul></div></div></label></div></div></div> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div></div>"),
                                        children: [{
                                            value: "select_pk",
                                            text: '<div class="chatbot__button-package"><button class="btn btnChat btn-next-step" type="submit" id=\'id-submit_package\'>Get started<i class="fa fa-spinner fa-spin" id="loading-button" style="display: none"></i></button></div>'
                                        }],
                                        callback: function() {
                                            $("#id-submit_package").on("click", function() {
                                                switch ($("#show-package_chatbot input:radio[name=packageChat]:checked").val()) {
                                                case "packageBasic":
                                                    var t = r.Packages[0].id
                                                      , e = 1
                                                      , a = r.Packages[0].unit_price;
                                                    break;
                                                case "packageStandard":
                                                    t = r.Packages[1].id,
                                                    e = 2,
                                                    a = r.Packages[1].unit_price;
                                                    break;
                                                case "packagePremium":
                                                    t = r.Packages[2].id,
                                                    e = 3,
                                                    a = r.Packages[2].unit_price
                                                }
                                                var n = e
                                                  , i = a;
                                                localStorage.setItem("Chatbotpk_id", JSON.stringify(t)),
                                                localStorage.setItem("Chatbotidpk", JSON.stringify(n)),
                                                localStorage.setItem("Chatbot_price_package_step2", JSON.stringify(i))
                                            })
                                        }
                                    }]))
                                }
                            }, {
                                type: "msg",
                                "chat-msg": "Would you like us to accelerate the registration process?"
                            }, {
                                type: "msg",
                                "chat-msg": "Your company's documents would be ready to be delivered via email in 1 day, instead of waiting for 3 days like normal."
                            }, {
                                type: "input",
                                tag: "radio",
                                name: "add250",
                                "chat-msg": "And it would cost you additional $250 for this expedited option.",
                                children: [{
                                    value: !0,
                                    text: "<div unit_price='250' id='99_".concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "'>Yes, i need it</div>")
                                }, {
                                    value: !1,
                                    text: "<div  unit_price='0' id='99_".concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "'>Just forget it</div>")
                                }],
                                success: function(t) {
                                    var n;
                                    n = "true" == t.add250 ? 250 : 0,
                                    localStorage.setItem("chatBotAdd250", JSON.stringify(n)),
                                    $.when(priceShipping(t)).then(function(t) {
                                        var a = priceShipping(t);
                                        Chat.addTags([{
                                            type: "input",
                                            tag: "radio",
                                            name: "add75",
                                            "chat-msg": "Thank you. So, now please confirm if you need us to courier your company's documents to your address for $".concat(a.unit_price),
                                            children: [{
                                                value: !0,
                                                text: "<div id='".concat(a.id, "_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' unit_price='").concat(a.unit_price, "' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' style='padding: 20px; margin: -14px;'>Yes, i need physical documents of my company</div>")
                                            }, {
                                                value: !1,
                                                text: "<div id='".concat(a.id, "_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' unit_price='0' pk_type='pk_").concat(JSON.parse(localStorage.getItem("Chatbotidpk")), "' style='padding: 20px; margin: -14px;'>No, maybe later</div>")
                                            }],
                                            success: function(t) {
                                                var e;
                                                t = "true" == t.add75 ? (e = a.unit_price,
                                                n + e) : n + (e = 0),
                                                localStorage.setItem("chatBotIdAdd75", JSON.stringify(a.id)),
                                                localStorage.setItem("chatBotAdd75", JSON.stringify(e)),
                                                localStorage.setItem("chatBotPiceTotalPk", JSON.stringify(t)),
                                                getStartedStep2Chatbot()
                                            }
                                        }])
                                    }, function() {
                                        console.log("Something broke!")
                                    })
                                }
                            }, {
                                type: "input",
                                tag: "radio",
                                name: "list",
                                "chat-msg": "Would you like us to prepare another set of company documents duly certified by qualified authority?",
                                children: [{
                                    value: "show",
                                    text: "<div onclick='clickShowOption()' style='padding:20px; margin: -14px;'>Yes, show me options</div>"
                                }, {
                                    value: "hide",
                                    text: "<div onclick='onHideLegal()' style='padding:20px; margin: -14px;'>No, maybe later</div>"
                                }],
                                success: function(t) {
                                    "show" == t.list && ($.when(clickShowOption(t)),
                                    t = clickShowOption(t),
                                    Chat.addTags([{
                                        type: "msg",
                                        "chat-msg": "What type of document verification and other documents do you need?"
                                    }, {
                                        type: "input",
                                        tag: "radio",
                                        name: "checkout",
                                        "chat-msg": "<div id='continueOptionNo' class='show-option-list row'> ".concat(t, " </div>"),
                                        children: [{
                                            value: "checkout",
                                            text: "<div class='col-md-6 col-sm-12 col-xs-12'><div class='button-checkout'><button class='btn btnChat btn-next-step' type='button' id='button-form-step3' style='display: block; padding: 24px; margin: -14px -29px;'>Checkout<i class='fa fa-spinner fa-spin' id='loading-button' style='display: none'></i></button></div></div>"
                                        }],
                                        callback: function() {
                                            $("#ifnodelete").remove(),
                                            $(".chatbot-page .show-option-list .checkbox-item input").on("change", function() {
                                                $(this).is(":checked") ? ($(this).parent().next().css("display", "block"),
                                                $(".chatbot-page .show-option-list .quantity-item #quantity_" + $(this).val()).text("1"),
                                                $(".chatbot-page .show-option-list .quantity-item #quantity_" + $(this).val()).attr("quantity", "1")) : $(this).parent().next().css("display", "none")
                                            }),
                                            $("#button-form-step3").on("click", function() {
                                                for (var t = [], e = document.querySelectorAll(".chatbot-page .show-option-list input"), a = document.querySelectorAll(".chatbot-page .show-option-list .quantity_with_id"), n = [], i = 0; i < e.length; i++)
                                                    e[i].checked && n.push(parseInt(e[i].getAttribute("id")));
                                                for (var r = 0; r < a.length; r++)
                                                    0 < parseInt(a[r].getAttribute("quantity")) && n.includes(parseInt(a[r].getAttribute("service_id"))) && t.push({
                                                        service_id: parseInt(a[r].getAttribute("service_id")),
                                                        quantity: parseInt(a[r].getAttribute("quantity"))
                                                    });
                                                var o = JSON.parse(localStorage.getItem("step2Chatbot"));
                                                o && postStep3Chatbot({
                                                    package_id: parseInt(o.pk_id),
                                                    OrderItems: [].concat(o.listService, t),
                                                    signature: localStorage.getItem("signatureChatbot")
                                                }),
                                                localStorage.setItem("ChatbotlistServices", JSON.stringify(t))
                                            })
                                        }
                                    }]))
                                }
                            }, {
                                type: "msg",
                                "chat-msg": "Thank you for entrusting our services."
                            }, {
                                type: "msg",
                                "chat-msg": "Here is the complete list of your ordered service for company registration in ".concat(s, ".")
                            }, {
                                type: "msg",
                                "chat-msg": "Please check it carefully before we proceed to payment step.",
                                callback: function() {
                                    $.when(loadCurrentOrderDetail()).then(function(t) {
                                        t = generateContentOrderChatbot(t.data);
                                        Chat.addTags([{
                                            type: "input",
                                            tag: "radio",
                                            name: "nextStep5",
                                            "chat-msg": t,
                                            children: [{
                                                value: "yes",
                                                text: "<div>Yes, it is correct. please check out with these services.</div>"
                                            }, {
                                                value: "no",
                                                text: "No, I want to start over again."
                                            }, {
                                                value: "other",
                                                text: "<div>Please email me the order summary, for i want to reconsider it.</div>"
                                            }],
                                            success: function(t) {
                                                $("#continueOptionNo").remove(),
                                                e(t)
                                            }
                                        }])
                                    }, function() {})
                                }
                            }]) : paymentBankChatStep4(function(t) {
                                t ? (localStorage.setItem("status_chatbot_afterload", 7),
                                Chat.addTags([{
                                    type: "msg",
                                    "chat-msg": "We have successfully received your order, and is now processing further."
                                }, {
                                    type: "msg",
                                    "chat-msg": "The order confirmation and payment details will be sent to your email shortly."
                                }, {
                                    type: "msg",
                                    "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
                                }, {
                                    type: "msg",
                                    "chat-msg": '\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'
                                }])) : Chat.addTags([{
                                    type: "msg",
                                    "chat-msg": "We are sorry that your payment was not successful yet."
                                }, {
                                    type: "msg",
                                    "chat-msg": "We have received your order, and is now processing further."
                                }, {
                                    type: "msg",
                                    "chat-msg": "The order confirmation and payment details will be sent to your email shortly to help you make payment again."
                                }])
                            })
                        }
                    }])
                }, function() {})
            }
        }],
        localStorage.setItem("signatureChatbot", t))) : window.location.href = "/404")
}
function getJsonInfo(t) {
    return JSON.parse($.ajax({
        type: "GET",
        url: t,
        dataType: "json",
        global: !1,
        async: !1,
        success: function(t) {
            return t
        },
        error: function(t) {}
    }).responseText)
}
function sendFormChatbot() {
    try {
        $("#formGetChatbot").validate({
            rules: {
                "first-name": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required."
            },
            submitHandler: function(t) {
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "chat_bot"
                    }).then(function(t) {
                        var e = {
                            cutomer_id: cutomer_id,
                            title_name: title_name,
                            company_name: company_name,
                            company_country: company_country,
                            entity_type: entity_type,
                            first_name: $("#formGetChatbot input[name=first-name]").val(),
                            email: $("#formGetChatbot input[name=your-email]").val(),
                            phone: $("#formGetChatbot input[name=your-phone]").val(),
                            website_id: 1
                        };
                        localStorage.setItem("Chatbotstep1", JSON.stringify(e)),
                        $.ajax({
                            success: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            error: function() {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 600
                                })
                            }
                        })
                    }).catch(function(t) {
                        throw t
                    })
                })
            }
        })
    } catch (t) {
        throw t
    }
}
var listServicePk1 = [], listServicePk2 = [], listServicePk3 = [], priceAddPk1 = 0, priceAddPk2 = 0, priceAddPk3 = 0, pricePk1 = 0, pricePk2 = 0, pricePk3 = 0, priceInitPk1, priceInitPk2, priceInitPk3, dataOrderStep4Chatbot, loadFailed, btnpaypalOrderChatbot;
function getStartedStep2Chatbot() {
    var t = JSON.parse(localStorage.getItem("Chatbotpk_id"))
      , e = JSON.parse(localStorage.getItem("Chatbotidpk"));
    try {
        var a = JSON.parse(localStorage.getItem("chatBotAdd250"))
          , n = JSON.parse(localStorage.getItem("chatBotAdd75"))
          , i = JSON.parse(localStorage.getItem("chatBotIdAdd75"));
        console.log();
        var r, o, s, c = (0 < a ? [{
            service_id: "99"
        }] : []).concat(0 < n ? [{
            service_id: i
        }] : []);
        1 === e ? (listServicePk1 = c,
        r = JSON.parse(localStorage.getItem("chatBotPiceTotalPk"))) : 2 === e ? (listServicePk2 = c,
        o = JSON.parse(localStorage.getItem("chatBotPiceTotalPk"))) : 3 === e && (listServicePk3 = c,
        s = JSON.parse(localStorage.getItem("chatBotPiceTotalPk"))),
        localStorage.setItem("step2Chatbot", JSON.stringify({
            pk_id: t,
            listService: c,
            package_type: e,
            listService1: listServicePk1,
            listService2: listServicePk2,
            listService3: listServicePk3,
            pricePk1: r || 0,
            pricePk2: o || 0,
            pricePk3: s || 0
        }))
    } catch (t) {
        console.log(t)
    }
}
function plusQuantityChat(t) {
    var e = $(t).attr("id_item")
      , t = parseInt($(".chatbot-page .show-option-list #quantity_" + e).attr("quantity"));
    $(".chatbot-page .show-option-list #quantity_" + e).attr("quantity", t + 1),
    $(".chatbot-page .show-option-list .quantity-item #quantity_" + e).text(t + 1)
}
function minusQuantityChat(t) {
    var e = $(t).attr("id_item")
      , t = parseInt($(".chatbot-page .show-option-list #quantity_" + e).attr("quantity"));
    1 < t && ($(".chatbot-page .show-option-list #quantity_" + e).attr("quantity", t - 1),
    $(".chatbot-page .show-option-list .quantity-item #quantity_" + e).text(t - 1))
}
function onHideLegal() {
    try {
        var t = JSON.parse(localStorage.getItem("step2Chatbot"));
        t && postStep3Chatbot({
            package_id: parseInt(t.pk_id),
            OrderItems: [].concat(t.listService, []),
            signature: localStorage.getItem("signatureChatbot")
        })
    } catch (t) {}
}
function postStep3Chatbot(t) {
    $.ajax({
        type: "POST",
        url: linkUrlOrderAPi + "/api/portal/order/step3",
        data: JSON.stringify(t),
        contentType: "application/json",
        success: function(t) {
            t.state && localStorage.setItem("order_code", JSON.stringify(t.data))
        },
        error: function(t) {},
        complete: function(t) {}
    })
}
function loadCurrentOrderDetail() {
    return loadOrderDetail(JSON.parse(localStorage.getItem("order_code")))
}
function loadOrderDetail() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ""
      , t = linkUrlOrderAPi + "/api/portal/order/";
    return paramStep4 = readParamUrl(),
    $.ajax({
        type: "GET",
        url: t + e,
        data: null,
        contentType: "application/json",
        success: function(t) {
            t.state && (dataOrderStep4Chatbot = t.data),
            localStorage.setItem("OrderChat", JSON.stringify({
                title_name: t.data.Customer.TitleName.name,
                first_name: t.data.Customer.first_name,
                cutomer_id: t.data.Customer.id,
                order_id: t.data.id,
                order_code: e,
                email: t.data.Customer.email
            }))
        },
        error: function(t) {},
        complete: function(t) {}
    })
}
function generateContentOrderChatbot(t) {
    var e = "";
    try {
        e += "<section class='review-order' id='order_summary_recursion'><div class='order_summary' style=''><div class='content-contact'><h3 class='sub-title '> <i class='fas fa-user'></i> Contact Person</h3><div class='row'>",
        e += "<div class='col-md-6 col-xs-12'>";
        var a = "";
        a += t && t.Customer && t.Customer.TitleName && t.Customer.TitleName.name ? t.Customer.TitleName.name + " " : "",
        a += t.Customer.first_name || "",
        e += "<p class='full_name'>Full Name:&emsp;<span class='fw-500' id='full_name'>".concat(a, "</span></p>"),
        e += "</div>",
        e += "<div class='col-md-6 col-xs-12'>";
        var n = t.Customer.phone || "";
        e += "<p class='phone'>Phone number:&emsp;<span class='fw-500' id='phone'>".concat(n, "</span></p>"),
        e += "</div>",
        e += "<div class='col-md-6 col-xs-12'>",
        e += "<p class='email'>Email:&emsp;<span class='fw-500' id='email'>".concat(t.Customer.email || "", "</span></p>"),
        e += "</div>",
        e += "</div></div>",
        e += "<div class='content-company'><h3 class='sub-title'> <i class='fas fa-building'></i> Company Information</h3><div class='row'>",
        e += "<div class='col-md-12'>";
        var i = "";
        i += t.Customer.CompanyCountry && t.Customer.CompanyCountry.name ? t.Customer.CompanyCountry.name : "",
        e += "<p class='country'>Country of Incorporation:&emsp;<span class='fw-500' id='country'>".concat(i, "</span></p>"),
        e += "</div>",
        e += "<div class='col-md-12'>";
        var r = "";
        t.PackageItems && t.PackageItems[0] && t.PackageItems[0].Package && t.PackageItems[0].Package.EntityType ? r = t.PackageItems[0].Package.EntityType.name : t.Customer && t.Customer.EntityType && t.Customer.EntityType.name && (r = t.Customer.EntityType.name),
        e += "<p class='country'>Company Type:&emsp;<span class='fw-500' id='country'>".concat(r, "</span></p>"),
        e += "</div>",
        e += "<div class='col-md-12'>";
        var o = "";
        o += t.Customer && t.Customer.company_name ? t.Customer.company_name : "",
        e += "<p class='country'>Proposed company name:&emsp;<span class='fw-500' id='country'>".concat(o, "</span></p>"),
        e += "</div>",
        e += "</div>";
        var s = 0;
        return t.PackageItems.forEach(function(t) {
            s += t.unit_price
        }),
        e += "<div class='content-package'><h3 class='sub-title '><i class='fas fa-box-open'></i> ".concat(t.PackageItems[0].Package.name, " - US$").concat(s, "</h3><div id='package_content'><div class='row'>"),
        t.PackageItems.forEach(function(t) {
            e += '<div class="col-md-8 col-xs-8"><p class="name_service">'.concat(t.Service.name, '</p></div><div class="col-md-4 col-xs-4 text-right"><p class="price_service">US$').concat(t.amount, "</p></div>")
        }),
        e += "</div></div>",
        0 === t.OtherItems.length ? e += "" : (e += "<div class='other-service'><h3 class='sub-title '>Other Services</h3><div id='order_service_content'><div class='row'>",
        t.OtherItems.forEach(function(t) {
            e += '<div class="col-md-8 col-xs-8"><p class="name_service">'.concat(t.Service.name, " (").concat(t.quantity, ' set)</p></div><div class="col-md-4 col-xs-4 text-right">'),
            e += '<p class="price_service">US$'.concat(t.amount, "</p></div>")
        }),
        e += "</div></div>"),
        e += "</div>",
        e += "<div class='content-total'><div class='row' id='nprom_price'>",
        e += '<div class="col-md-4 col-md-offset-8"><div class="flex-row justify-content-space-between"><p>Total</><p class="price_service">US$' + t.amount + "</p></div></div>",
        e += "</div></div></div></section>"
    } catch (t) {}
}
function selectMethodsPayment() {
    var t = $("#method-payment_chatbot input:radio[name=payment]:checked").val();
    switch (localStorage.setItem("history", JSON.stringify(Chat.getHistory())),
    t) {
    case "Card":
        document.querySelector("#modalStripe-chatbot").style.display = "block",
        paymentChatbotStripe(function(t) {
            t && (localStorage.setItem("payment_status", "success"),
            paymentStep())
        });
        break;
    case "Paypal":
        document.querySelector("#modalPaypal-chatbot").style.display = "block",
        paymentChatbotPaypalStep4(function(t) {
            t && (localStorage.setItem("payment_status", "success"),
            localStorage.setItem("history", JSON.stringify(Chat.getHistory())))
        });
        break;
    case "Bank":
        localStorage.setItem("payment_status", "pending"),
        paymentStep()
    }
}
function showMethodsPayment() {
    Chat.addTags([{
        type: "msg",
        "chat-msg": "What payment methods would you like to settle your order?"
    }, {
        type: "input",
        tag: "radio",
        name: "make_payment",
        "chat-msg": "<div class='review-order-chatbot' id='method-payment_chatbot'><div class='container'><div class='content-payment'><div class='row'><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Card' id='cardChatbot' name='payment' checked=''><label for='cardChatbot'><img src='/images/img-order/stripe-banner_non_border.png' alt='strip-banner'></label></div><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Paypal' id='paypalChatbot' name='payment'><label for='paypalChatbot'><img src='/images/img-order/paypal-banner_non_border.png' alt='paypal-banner'></label></div> <div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Bank' id='bankChatbot' name='payment'><label class='bank_transfer' for='bankChatbot'><span class='fw-500'>Bank Wire Transfer</span></label></div></div></div> </div></div><div id='modalStripe-chatbot' data-keyboard='false' data-backdrop='static' >\n\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t<h3>BBCIncorp Limited</h3>\n\t\t\t\t\t\t<a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='modal-body-stripe'>\n\t\t\t\t\t\t<form id='payment-form'>\n\t\t\t\t\t\t\t<div class='form-row'>\n\t\t\t\t\t\t\t\t<div id='card-element-chatbot'></div>\n\t\t\t\t\t\t\t\t<div id='card-errors-chatbot' role='alert'></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='submit text-center p-8'>\n\t\t\t\t\t\t\t\t<button class='MuiButtonBase-root'  id='make-paymentStripe-submit' tabindex='0' type='submit' style='color: rgb(255, 255, 255);'>\n\t\t\t\t\t\t\t\t\t<div class='MuiButton-label'>\n\t\t\t\t\t\t\t\t\t\t<div>Pay&nbsp;<span  class='total-price'></span>&nbsp;US$ </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id='modalPaypal-chatbot' data-keyboard='false' data-backdrop='static'>\n\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t<h3>BBCIncorp Limited</h3><a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='modal-body'>\n\t\t\t\t\t\t<div id='paypal-button-container'></div>\n\t\t\t\t\t\t<div id='isLoadingPaypal'><i class='fa fa-spinner fa-spin'></i></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>",
        children: [{
            value: "makepayment",
            text: "<div class='button-order'><button class='btnChat btn button-next-step' id='id-submit_method-payment' type='submit' onclick='selectMethodsPayment()' style='display: block; padding: 20px; margin: -14px;'>Make Payment<i class='fa fa-spinner fa-spin loading-button' id='loading-button' style='display: none'></i></button></div>\n\t\t\t\t\t"
        }]
    }])
}
function paymentChatbotStripe(n) {
    var e = Stripe("pk_live_FriBUNrY1wNFgnjXNUNZfLTZ")
      , i = JSON.parse(localStorage.getItem("order_code"))
      , t = e.elements()
      , a = dataOrderStep4Chatbot.amount
      , r = dataOrderStep4Chatbot.Customer.email;
    $("#modalStripe-chatbot .total-price").text(a),
    $("#modalStripe-chatbot .close").on("click", function(t) {
        document.querySelector("#modalStripe-chatbot").style.display = "none";
        function e(t) {
            return t.forEach(function(t) {
                return t.remove()
            })
        }
        e(document.querySelectorAll(".chat-response:nth-last-child(2)")),
        e(document.querySelectorAll(".user:last-child")),
        localStorage.setItem("history", JSON.stringify(Chat.getHistory().splice(-2, 2))),
        Chat.addTags([{
            type: "input",
            tag: "radio",
            name: "make_payment",
            "chat-msg": "<div class='review-order-chatbot' id='method-payment_chatbot'><div class='container'><div class='content-payment'><div class='row'><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Card' id='cardChatbot' name='payment' checked='' ><label for='cardChatbot'><img src='/images/img-order/stripe-banner_non_border.png' alt='strip-banner'></label></div><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Paypal' id='paypalChatbot' name='payment' ><label for='paypalChatbot'><img src='/images/img-order/paypal-banner_non_border.png' alt='paypal-banner'></label></div> <div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Bank' id='bankChatbot' name='payment'><label class='bank_transfer' for='bankChatbot'><span class='fw-500'>Bank Wire Transfer</span></label></div></div></div> </div></div>\n\t\t\t\t<div id='modalStripe-chatbot' data-keyboard='false' data-backdrop='static' >\n\t\t\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t\t\t<h3>BBCIncorp Limited</h3>\n\t\t\t\t\t\t\t\t<a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='modal-body-stripe'>\n\t\t\t\t\t\t\t\t<form id='payment-form'>\n\t\t\t\t\t\t\t\t\t<div class='form-row'>\n\t\t\t\t\t\t\t\t\t\t<div id='card-element-chatbot'></div>\n\t\t\t\t\t\t\t\t\t\t<div id='card-errors-chatbot' role='alert'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='submit text-center p-8'>\n\t\t\t\t\t\t\t\t\t\t<button class='MuiButtonBase-root'  id='make-paymentStripe-submit' tabindex='0' type='submit' style='color: rgb(255, 255, 255);'>\n\t\t\t\t\t\t\t\t\t\t\t<div class='MuiButton-label'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>Pay&nbsp;<span  class='total-price'>1</span>&nbsp;US$ </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id='modalPaypal-chatbot' data-keyboard='false' data-backdrop='static'>\n\t\t\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t\t\t<h3>BBCIncorp Limited</h3><a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='modal-body'>\n\t\t\t\t\t\t\t\t<div id='paypal-button-container'></div>\n\t\t\t\t\t\t\t\t<div id='isLoadingPaypal'><i class='fa fa-spinner fa-spin'></i></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
            children: [{
                value: "makepayment",
                text: "<div class='button-order'><button class='btnChat btn button-next-step' id='id-submit_method-payment' type='submit' onclick='selectMethodsPayment()' style='display: block; padding: 20px; margin: -14px;'>Make Payment<i class='fa fa-spinner fa-spin loading-button' id='loading-button' style='display: none'></i></button></div>\n\t\t\t\t\t\t"
            }]
        }]),
        Chat.nextTag()
    });
    var o = t.create("card", {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    });
    o.mount("#card-element-chatbot"),
    o.on("change", function(t) {
        var e = document.getElementById("card-errors-chatbot");
        t.error ? e.textContent = t.error.message : e.textContent = "",
        $("#makePayment-Stripe").on("click", function(t) {
            e.textContent = ""
        })
    }),
    document.getElementById("payment-form").addEventListener("submit", function(t) {
        t.preventDefault(),
        e.createToken(o).then(function(t) {
            var e, a;
            t.error ? document.getElementById("card-errors-chatbot").textContent = t.error.message : (t.token,
            e = {
                id: t.token.id,
                email: r,
                order_code: i
            },
            a = "",
            (t = altFind(readParamUrl(), function(t) {
                return t.promotion_code
            })) && t.promotion_code && (a = "?promotion_code=" + t.promotion_code,
            t.promotion_code),
            $.ajax({
                type: "POST",
                url: linkUrlOrderAPi + "/api/portal/order/step4/stripe" + a,
                data: JSON.stringify(e),
                contentType: "application/json",
                success: function(t) {
                    t && (n(!0),
                    document.querySelector("#modalStripe-chatbot").style.display = "none")
                },
                error: function(t) {
                    localStorage.setItem("payment_status", "failed"),
                    paymentStep(),
                    n(!1),
                    document.querySelector("#modalStripe-chatbot").style.display = "none";
                    localStorage.setItem("after_payment", JSON.stringify(!0))
                },
                complete: function(t) {}
            }))
        })
    })
}
function paymentChatbotPaypalStep4(a) {
    $("#modalPaypal-chatbot .close").on("click", function(t) {
        document.querySelector("#modalPaypal-chatbot").style.display = "none";
        function e(t) {
            return t.forEach(function(t) {
                return t.remove()
            })
        }
        e(document.querySelectorAll(".chat-response:nth-last-child(2)")),
        e(document.querySelectorAll(".user:last-child")),
        localStorage.setItem("history", JSON.stringify(Chat.getHistory().splice(-2, 2))),
        Chat.addTags([{
            type: "input",
            tag: "radio",
            name: "make_payment",
            "chat-msg": "<div class='review-order-chatbot' id='method-payment_chatbot'><div class='container'><div class='content-payment'><div class='row'><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Card' id='cardChatbot' name='payment' checked='' ><label for='cardChatbot'><img src='/images/img-order/stripe-banner_non_border.png' alt='strip-banner'></label></div><div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Paypal' id='paypalChatbot' name='payment' ><label for='paypalChatbot'><img src='/images/img-order/paypal-banner_non_border.png' alt='paypal-banner'></label></div> <div class='col-md-4 col-sm-6 col-xs-12 payment-col'><input type='radio' value='Bank' id='bankChatbot' name='payment'><label class='bank_transfer' for='bankChatbot'><span class='fw-500'>Bank Wire Transfer</span></label></div></div></div> </div></div>\n\t\t\t\t<div id='modalStripe-chatbot' data-keyboard='false' data-backdrop='static' >\n\t\t\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t\t\t<h3>BBCIncorp Limited</h3>\n\t\t\t\t\t\t\t\t<a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='modal-body-stripe'>\n\t\t\t\t\t\t\t\t<form id='payment-form'>\n\t\t\t\t\t\t\t\t\t<div class='form-row'>\n\t\t\t\t\t\t\t\t\t\t<div id='card-element-chatbot'></div>\n\t\t\t\t\t\t\t\t\t\t<div id='card-errors-chatbot' role='alert'></div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class='submit text-center p-8'>\n\t\t\t\t\t\t\t\t\t\t<button class='MuiButtonBase-root'  id='make-paymentStripe-submit' tabindex='0' type='submit' style='color: rgb(255, 255, 255);'>\n\t\t\t\t\t\t\t\t\t\t\t<div class='MuiButton-label'>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>Pay&nbsp;<span  class='total-price'>1</span>&nbsp;US$ </div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div id='modalPaypal-chatbot' data-keyboard='false' data-backdrop='static'>\n\t\t\t\t\t<div class='modal-popup'><i class='fal fa-times close' data-dismiss='modal'></i>\n\t\t\t\t\t\t<div class='modal-content'>\n\t\t\t\t\t\t\t<div class='modal-header'>\n\t\t\t\t\t\t\t\t<div class='img-logo'><img src='/images/logo-icon.svg'></div>\n\t\t\t\t\t\t\t\t<h3>BBCIncorp Limited</h3><a href='mailto: service@bbcincorp.com'>service@bbcincorp.com</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class='modal-body'>\n\t\t\t\t\t\t\t\t<div id='paypal-button-container'></div>\n\t\t\t\t\t\t\t\t<div id='isLoadingPaypal'><i class='fa fa-spinner fa-spin'></i></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
            children: [{
                value: "makepayment",
                text: "<div class='button-order'><button class='btnChat btn button-next-step' id='id-submit_method-payment' type='submit' onclick='selectMethodsPayment()' style='display: block; padding: 20px; margin: -14px;'>Make Payment<i class='fa fa-spinner fa-spin loading-button' id='loading-button' style='display: none'></i></button></div>\n\t\t\t\t\t\t"
            }]
        }]),
        Chat.nextTag()
    });
    var n = JSON.parse(localStorage.getItem("order_code"))
      , t = altFind(readParamUrl(), function(t) {
        return t.promotion_code
    })
      , i = "";
    t && t.promotion_code && (i = "?promotion_code=" + t.promotion_code,
    t.promotion_code);
    var r = {
        order_code: n
    };
    btnpaypalOrderChatbot = paypal_sdk.Buttons({
        createOrder: function(t, e) {
            return fetch(linkUrlOrderAPi + "/api/portal/order/step4/paypal" + i, {
                method: "POST",
                body: JSON.stringify(r),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t && t.data,
                t.data.result.id
            })
        },
        onApprove: function(t, e) {
            t = {
                id: t.orderID
            };
            return fetch(linkUrlOrderAPi + "/api/portal/order/paypal_execute" + i, {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, /",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                JSON.parse(localStorage.getItem("history"));
                localStorage.setItem("after_payment", JSON.stringify(!0)),
                document.querySelector("#modalPaypal-chatbot").style.display = "none",
                paymentStep(),
                a(!0)
            })
        },
        onCancel: function(t, e) {
            return document.getElementById("paypal-button-container").style.display = "none",
            document.getElementById("isLoadingPaypal").style.display = "block",
            fetch(linkUrlOrderAPi + "/api/portal/order/send-email-fail", {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, /",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    order_code: n
                })
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                JSON.parse(localStorage.getItem("history"));
                localStorage.setItem("after_payment", JSON.stringify(!1)),
                localStorage.setItem("payment_status", "failed"),
                paymentStep(),
                a(!1),
                document.querySelector("#modalPaypal-chatbot").style.display = "none"
            })
        }
    }).render("#paypal-button-container")
}
function paymentBankChatStep4(t) {
    localStorage.setItem("isSendPending", "0"),
    load_pending_payment_chatbot(),
    t(!0)
}
function load_pending_payment_chatbot() {
    try {
        var t = linkUrlOrderAPi + "/api/portal/order/"
          , e = JSON.parse(localStorage.getItem("OrderChat"));
        $.ajax({
            type: "GET",
            url: t + e.order_code,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && "0" === localStorage.getItem("isSendPending") && sendEmailPendingChatbot({
                    customer_id: e.cutomer_id,
                    title_name: e.title_name,
                    first_name: e.first_name,
                    order_id: e.order_id,
                    order_code: e.order_code,
                    email: e.email,
                    website_id: 1
                }, t.data.amount)
            },
            error: function(t) {},
            complete: function(t) {}
        })
    } catch (t) {}
}
function sendEmailPendingChatbot(t, e) {
    try {
        $.ajax({
            type: "POST",
            url: linkUrlOrderAPi + "/api/portal/order/send-email-pending",
            data: JSON.stringify(t),
            contentType: "application/json",
            success: function(t) {
                t && localStorage.setItem("isSendPending", "1")
            },
            error: function(t) {},
            complete: function(t) {}
        })
    } catch (t) {}
}
function paymentStep() {
    var t = localStorage.getItem("payment_status");
    t && "pending" == t ? paymentBankChatStep4(function(t) {
        t && (localStorage.setItem("status_chatbot_afterload", 7),
        Chat.addTags([{
            type: "msg",
            "chat-msg": "We have successfully received your order, and is now processing further."
        }, {
            type: "msg",
            "chat-msg": "The order confirmation and payment details will be sent to your email shortly."
        }, {
            type: "msg",
            "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
        }, {
            type: "msg",
            "chat-msg": '\n\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t\t\t'
        }]),
        delDataChat())
    }) : t && "failed" == t ? (localStorage.setItem("status_chatbot_afterload", 2),
    Chat.addTags([{
        type: "msg",
        "chat-msg": "We are sorry that your payment was not successful yet."
    }, {
        type: "msg",
        "chat-msg": "We have received your order, and is now processing further."
    }, {
        type: "msg",
        "chat-msg": "The order confirmation and payment details will be sent to your email shortly to help you make payment again."
    }, {
        type: "msg",
        "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
    }, {
        type: "msg",
        "chat-msg": '\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t'
    }]),
    Chat.nextTag(),
    delDataChat()) : (t = JSON.parse(localStorage.getItem("order_code")),
    $.ajax({
        type: "GET",
        url: linkUrlOrderAPi + "/api/portal/order/" + t,
        dataType: "json",
        global: !1,
        async: !1,
        success: function(t) {
            t && t.data && t.data.status ? (localStorage.setItem("status_chatbot_afterload", 1),
            Chat.addTags([{
                type: "msg",
                "chat-msg": "Thank you for your payment."
            }, {
                type: "msg",
                "chat-msg": "We have successfully received your order, and is now processing further."
            }, {
                type: "msg",
                "chat-msg": "The order confirmation and service receipt will be sent to your email shortly."
            }, {
                type: "msg",
                "chat-msg": "In the meantime, should you have any question, please don't hesitate to contact us via your preferred method in one of the belows:"
            }, {
                type: "msg",
                "chat-msg": '\n\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="mailto:service@bbcincorp.com"><span><i class="fa fa-envelope" aria-hidden="true"></i></span><p>Mail us via service@bbcincorp.com</p></a></div></div>\n\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="https://tawk.to/chat/57fdc3d4304e8e758558c5f9/default" target="_blank"><span><i class="fas fa-comments"></i></span><p>Drop us a msg to our live agent</p></a></div></div>\n\t\t\t\t\t\t\t<div class="contact-us-chat"><div class="content"><a href="skype:live:bbcincorp?chat"><span><i class="fab fa-skype"></i></span><p>Chat with us via Sky</p></a></div></div>\n\t\t\t\t\t\t\t'
            }]),
            Chat.nextTag(),
            delDataChat()) : (localStorage.removeItem("payment_status"),
            (t = function(t) {
                return t.forEach(function(t) {
                    return t.remove()
                })
            }
            )(document.querySelectorAll(".user:last-child")),
            t(document.querySelectorAll(".chat-response:nth-last-child(4)")),
            t(document.querySelectorAll(".chat-response:nth-last-child(3)")),
            t(document.querySelectorAll(".chat-response:nth-last-child(2)")),
            t(document.querySelectorAll(".robot:last-child")),
            localStorage.setItem("history", JSON.stringify(Chat.getHistory().splice(-5, 4))),
            $.when(loadCurrentOrderDetail()).then(function(t) {
                generateContentOrderChatbot(t.data);
                showMethodsPayment()
            }, function() {}))
        },
        error: function(t) {}
    }))
}
function delDataChat() {}
function clickShowOption(t) {
    var e = JSON.parse(localStorage.getItem("countryCus"))
      , a = chat_bot_package.find(function(t) {
        return t.guid === e
    })
      , n = []
      , i = "";
    return "hong-kong" === a.guid ? n.push({
        data: {
            data_guid: "hong-kong",
            listItem: services_legal.filter(function(t) {
                return 81 === t.id || 69 === t.id || 1657 === t.id || 1658 === t.id || 71 === t.id || 1656 === t.id
            })
        }
    }) : "singapore" === a.guid ? n.push({
        data: {
            data_guid: "singapore",
            listItem: services_legal.filter(function(t) {
                return 95 === t.id || 96 === t.id
            })
        }
    }) : n.push({
        data: {
            data_guid: "offshore",
            listItem: services_legal.filter(function(t) {
                return 81 === t.id || 69 === t.id || 70 === t.id || 68 === t.id || 71 === t.id || 72 === t.id || 73 === t.id
            })
        }
    }),
    i += '\t<div class="row dis-flex">\n\t\t\t',
    n[0].data.listItem.forEach(function(t) {
        i += '\t\n\t\t\t<div class="col-md-6 col-sm-12 col-xs-12 item-container ">\n\t\t\t\t<div class="item-box dis-flex">\n\t\t\t\t\t<div class="checkbox-item">\n\t\t\t\t\t\t<input type="checkbox" value='.concat(t.id, ' name="list[]" id=').concat(t.id, '>\n\t\t\t\t\t\t<label class="detail-item" for=').concat(t.id, ">\n\t\t\t\t\t\t\t<p><span>").concat(t.name, "</span><br><span>").concat(t.Fee.value, ' per set</span></p>\n\t\t\t\t\t\t</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="quantity-item quantity-item-').concat(t.id, '">\n\t\t\t\t\t\t<span id="quantity_').concat(t.id, '" service_id=').concat(t.id, ' class="quantity_with_id"></span>\n\t\t\t\t\t\t<span>set(s)</span>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<button class="btn-plus" type="button" unit_price=').concat(t.Fee.value, ' quantity="0" id_item=').concat(t.id, ' onclick="plusQuantityChat(this)">\n\t\t\t\t\t\t\t<i class="fa fa-plus" aria-hidden="true"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<span class="icon-line">⁄</span>\n\t\t\t\t\t\t<button class="btn-minus" type="button" unit_price=').concat(t.Fee.value, ' quantity="0" id_item=').concat(t.id, '  onclick="minusQuantityChat(this)">\n\t\t\t\t\t\t\t<i class="fa fa-minus" aria-hidden="true"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t')
    }),
    i += " </div> "
}
function priceShipping(t) {
    var e = JSON.parse(localStorage.getItem("countryCus"))
      , a = chat_bot_package.find(function(t) {
        return t.guid === e
    })
      , n = []
      , i = {}
      , i = a && "saint-kitts-and-nevis" === a.guid ? services_legal.find(function(t) {
        return 1691 === t.id
    }) : a && "saint-vincent" === a.guid ? services_legal.find(function(t) {
        return 1692 === t.id
    }) : services_legal.find(function(t) {
        return 86 === t.id
    });
    return n.push({
        data: {
            item_courier_fee: i
        }
    }),
    n[0].data.item_courier_fee
}
var comparison_table = [{
    id: 1,
    name: "Anguilla",
    International_compliance: "",
    eu_list: "Greylist",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IBC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "N/A",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: "N/A",
    corporate_income_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    sales_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "0.075% on annual value",
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: "Tranfer of real property tax: 5% or up to 12.5% with nonresidents"
}, {
    id: 2,
    name: "Bahamas",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IBC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: "N/A",
    corporate_income_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    sales_tax: "12% standard rate",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "<p class='marginbt-0'>On owner-occupied properties:</p><ul class='style-list'><li>First $250,000 - Exempt</li><li>Between $250,000 to $500,000 - 3/4 of one percent.</li><li>On the portion over $500,000, the tax rate is 1% of the market value of the property.</li></ul><p class='marginbt-0'>On vacant land (owned by non-Bahamians):</p><ul class='style-list'><li>First $7,000 of market value -$100</li><li>More than $7,000 - 2% of the market value</li></ul><p class='marginbt-0'>For commercial/other improved properties:</p><ul class='style-list'><li>First $500,000 of market value - 1% of the market value;</li><li>On the portion over $500,000 - 2% of the market value.</li></ul>",
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 3,
    name: "Belize",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IBC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_income_tax: "<p class='marginbt-0'>Corporate income tax:</p><ul class='style-list'><li>40% on petroleum operations</li></ul><p class='marginbt-0'>Business tax based on gross income:</p><ul class='style-list'><li>5% on foreign passive income</li><li>1.75% - 6% on all other foreign income</li></ul>",
    sales_tax: "12.5%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "<p class='marginbt-0'>Based on annual rental value:</p><ul class='style-list'><li>12.5% on occupied properties</li><li>2% on unoccupied properties<br>-> but not exceed 2% of market value of property.</li><li>1% land tax on unimproved land.</li></ul>",
    withholding_tax: "15% - 25%",
    transfer_tax: "<p class='marginbt-0'>Transfer of land:</p><ul class='style-list'><li>5% to Belizean on whichever greater of consideration and land value in excess of BZD 20,000</li><li>8% to all other person</li></ul>"
}, {
    id: 4,
    name: "Panama",
    International_compliance: "",
    eu_list: "Blacklist",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Civil law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Non-resident Corporation",
    director: "",
    minimum_number: 3,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$10,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-check" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes, and can be of any nationality",
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<p class='marginbt-0'>Greater of:</p><ul class='style-list'><li>25% on net taxable income; or</li><li>1.17% on gross taxable income</li></ul><p class='marginbt-0'>Branch remittance tax:</p><ul class='style-list'><li>10% in addition to CIT</li></ul>",
    sales_tax: "<ul class='style-list'><li>7% standard rate</li><li>10% for accomodations and alcohol</li><li>15% for tobacco</li></ul>",
    capital_gain_tax: "10%",
    dividend_tax: "No, but subject to withholding tax",
    property_tax: "<ul class='style-list'><li>0 -0.7% for properties with primary residence status</li><li>0 - 1% for all other properties without primary residence status</li></ul>",
    withholding_tax: "<ul class='style-list'><li>5% on foreign-sourced profits</li><li>10% on domestic profits</li><li>20% in case of bearer shares</li></ul>",
    transfer_tax: "2% on transfer of real property"
}, {
    id: 5,
    name: "Cayman Islands",
    International_compliance: "",
    eu_list: "Blacklist",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Exempted Company",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    sales_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: "Stamp duty at 7.5% for transfer of most property"
}, {
    id: 6,
    name: "Saint Kitts",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "BC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-check" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<p>33%<br>Branch remittance tax: 15%</p>",
    sales_tax: "17% standard rate",
    capital_gain_tax: "<p class='text-left'>Nil if assets sold within 1 year from purchase</p><p class='marginbt-0'>Other cases:</p><ul class='style-list'><li>lessser of half of effective corporate income tax or 20%</li></ul>",
    dividend_tax: "Subject to corporate income tax (33%)",
    property_tax: "0.2% - 0.3%",
    withholding_tax: "15% for payments to non-residents",
    transfer_tax: "6% - 10%"
}, {
    id: 7,
    name: "BVI",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "BC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "N/A",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    sales_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "<p class='marginbt-0'>Land tax:</p><ul class='style-list'><li>US$50 per year for a half acre or less</li><li>US$150 per year for between a half acre to less than an acre</li><li>US$50 per year for each additional half acre</li></ul><p class='marginbt-0'>House tax:</p><ul style='list-style: disc; padding-left: 20px; text-align: left; font-size: 15px'><li>1.5% on the assessed annual rental value</li></ul>",
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 8,
    name: "Saint Vincent",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "BC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: "<p>Company with over USD 4mil of revenue or USD 2mil of assets would be required to file annual return</p>",
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<p>33%<br>Branch remittance tax: 15%</p>",
    sales_tax: "<p>16% Standard rate</p>",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "5%",
    withholding_tax: "<p>No withholding tax on dividend<br>Other types: 15% - 20%</p>",
    transfer_tax: "<p>5% on both buyer and seller</p>"
}, {
    id: 9,
    name: "Hong Kong",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Private Limited By Shares",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "HK$10,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes / Local required",
    local_registered_agent: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-check" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<p>8.25% for the first 2mil HKD<br>16.5% for above</p>",
    sales_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "15% standard rate",
    withholding_tax: '<p class="marginbt-0">With Royalties payment derived from "an associate":</p><ul class="style-list"><li>15% to non-resident individuals</li><li>8.25% - 16.5% to non-resident corporations</li></ul><p class="marginbt-0">With Royalties payment not derived from "an associate":</p><ul class="style-list"><li>30% of the aforementioned rate</li></ul>',
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 10,
    name: "Marshall Islands",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-times" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Non-resident Domestic Corporation",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-check" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes, and can be of any nationality",
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    sales_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 11,
    name: "Samoa",
    International_compliance: "",
    eu_list: "Blacklist",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-times" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$50,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes / Local required",
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "27%",
    sales_tax: "15%",
    capital_gain_tax: "<ul class='style-list'><li>10% if sold within 12 months</li><li>27% if sold over 12 months</li></ul>",
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: "<ul class='style-list'><li>7.5% for insurance premium under a life policy</li><li>15% for interest, royalties, mangement fees, fees for personal service, natural resource amount, or insurance premium under a contract other than a life policy</li></ul>",
    transfer_tax: "<ul class='style-list'><li>Less than WST 50,000 - 1% of the property value</li><li>WST 50,000 to less than WST 100,000 - WST 500 + 2% of the excess above WST50,000</li><li>WST 100,000 to less than WST 200,000 - WST 1,500 + 3% of the excess above WST100,000</li><li>Equal to or more than WST 200,000 - WST 4,500 + 4% of the excess above WST 200,000</li></ul>"
}, {
    id: 12,
    name: "Singapore",
    International_compliance: "",
    eu_list: "N/A",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "PTE LTD",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-check" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "N/A",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes / Local required",
    local_registered_agent: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: "Yes, but audit exemption is available",
    annual_general_meeting: '<i class="fa fa-check" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: "Yes if not remitted to Singapore",
    corporate_income_tax: "17%",
    sales_tax: "7%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "<ul class='style-list'><li>0 - 16% to owner-occupied residential property</li><li>10 - 20% to nonowner-occupied residential property</li><li>10% to nonresidential property</li></ul>",
    withholding_tax: "0 -22% for interests, royalties, and fees for technical services",
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 13,
    name: "Cyprus",
    International_compliance: "",
    eu_list: "N/A",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-times" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Private limited",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "N/A",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes / Local required",
    local_registered_agent: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-check" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "12.5%",
    sales_tax: "19%",
    capital_gain_tax: "22% or can be exempted",
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: "<ul class='style-list'><li>Dividends and interest paid to non-residents not subject to withholding tax</li><li>Royalties and fee for technical services paid to non-residents subject to rate rangin from 0 - 10%</li></ul>",
    transfer_tax: "3% - 8% to transfer of immovable property"
}, {
    id: 14,
    name: "Mauritius",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Hybrid of common and civil law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Authorized company (AC)",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$100,000 ",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: "Yes, and required to file annual accounts",
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-check" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "15%",
    sales_tax: "15%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: "<ul class='style-list'><li>Dividends paid by Mauritius resident companies is exempt from tax</li><li>Foreign-sourced dividends  is subject to 15% tax rate, but also eligible for partial exemption on gross amount received.</li></ul>",
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: "<ul class='style-list'><li>0% on dividends</li><li>15% on interest paid to resident individuals,and non-residents</li><li>10% on royalties received by residents, and 15% on non-residents</li><li>10% on fees for technical services to non-residents</li></ul>",
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 15,
    name: "RAK (UAE)",
    International_compliance: "",
    eu_list: "N/A",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IBC(limited by shares)",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "AED 10,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<ul class='style-list'><li>55% for oil and gas exploration and production company</li><li>20% for branches of foreign banks</li><li>Above rates can varies under each Emirate</li></ul>",
    sales_tax: "5%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    transfer_tax: "<p class='text-left'>The tax rate for tranfer of real property varies depending on Emirate in which the property is located</p>"
}, {
    id: 16,
    name: "Jersey",
    International_compliance: "",
    eu_list: "Cleared",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Hybrid of Customary, Civil and Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "Private limited",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "GBP 10,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "Yes, and doesn't need to reside in Jersey",
    local_registered_agent: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-check" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-check" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<ul class='style-list'><li>0% standard rate</li><li>10% or 20% to some specific activities</li></ul>",
    sales_tax: "5%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: "<p class='text-left'>Dividend received from a non-resident company will be exempt from tax</p>",
    property_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    withholding_tax: "<ul class='style-list'><li>Dividends/Fees for technical services: 0%</li><li>Interest/Royalties: 0%, and can be subject to tax in certain case for payments to non-residents</li></ul>",
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 17,
    name: "Seychelles",
    International_compliance: "",
    eu_list: "Blacklist",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Hybrid of Civil and Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "IBC",
    director: "",
    minimum_number: 1,
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: 1,
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: '<i class="fa fa-times" aria-hidden="true"></i>',
    central_register_beneficial: '<i class="fa fa-check" aria-hidden="true"></i>',
    share_capital: "",
    standard_registered_capital: "US$100,000",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "Any",
    bearer_shares: '<i class="fa fa-times" aria-hidden="true"></i>',
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_registered_agent: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_compliance: "",
    annual_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-times" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: '<i class="fa fa-times" aria-hidden="true"></i>',
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "Anywhere",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "<ul class='style-list'><li>25% on the first SR1mil taxable income</li><li>33% applied to above amount</li></ul>",
    sales_tax: "15%",
    capital_gain_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    dividend_tax: '<i class="fa fa-times" aria-hidden="true"></i>',
    property_tax: "<p class='text-left'>0.25% immovable property tax on foreigners</p>",
    withholding_tax: "<p class='text-left'>15% on dividends, interest, royalties paid to non-residents</p>",
    transfer_tax: '<i class="fa fa-times" aria-hidden="true"></i>'
}, {
    id: 18,
    name: "UK",
    International_compliance: "",
    eu_list: "N/A",
    oecd: "",
    aeoi: '<i class="fa fa-check" aria-hidden="true"></i>',
    eoir: '<i class="fa fa-check" aria-hidden="true"></i>',
    beps: '<i class="fa fa-check" aria-hidden="true"></i>',
    legal_structure: "",
    basic: "Common law",
    foreign_exchange_control: '<i class="fa fa-times" aria-hidden="true"></i>',
    foreign_ownership_allowed: "100%",
    business_structure: "",
    company_type: "LLP",
    director: "",
    minimum_number: "N/A",
    local_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_director: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_director: '<i class="fa fa-check" aria-hidden="true"></i>',
    shareholder: "",
    sminimum_number: "At least 2 designated members",
    slocal_resident_required: '<i class="fa fa-times" aria-hidden="true"></i>',
    public_register_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    nominee_shareholder: '<i class="fa fa-times" aria-hidden="true"></i>',
    corporate_shareholder: '<i class="fa fa-check" aria-hidden="true"></i>',
    beneficial_owner: "",
    public_register_beneficial: "N/A",
    central_register_beneficial: "N/A",
    share_capital: "",
    standard_registered_capital: "N/A",
    paidup_capital: '<i class="fa fa-times" aria-hidden="true"></i>',
    capital_currency: "N/A",
    bearer_shares: "N/A",
    initial_requirement: "",
    local_registered_address: '<i class="fa fa-check" aria-hidden="true"></i>',
    company_secretary: "N/A",
    local_registered_agent: "N/A",
    annual_compliance: "",
    annual_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    annual_tax_return: '<i class="fa fa-check" aria-hidden="true"></i>',
    records_keeping: '<i class="fa fa-check" aria-hidden="true"></i>',
    audited_accounts: "Yes, but audit exemption is also available",
    annual_general_meeting: '<i class="fa fa-times" aria-hidden="true"></i>',
    location_annual_general_meeting: "N/A",
    economic_substance: '<i class="fa fa-times" aria-hidden="true"></i>',
    local_tax_profile: "",
    offshore_tax_exemption: '<i class="fa fa-check" aria-hidden="true"></i>',
    corporate_income_tax: "18% for the year starting from 1 April 2020",
    sales_tax: "20%",
    capital_gain_tax: "<p class='marginbt-0'>For resident individuals:</p><ul class='style-list'><li style='list-style: none;'>Higher or additional rate taxpayer:</li><li> 28% on gains from residential property</li><li>20% on gains from other chargeable assets</li></ul><ul class='style-list'><li style='list-style: none;'>Basic rate taxpayer:</li>18% on gains from residential property</li><li>10% on gains from other chargeable assets</li></ul><p class='text-left'>For Sole trader and partnership: 10%</p><p class='text-left'>For resident companies: subject to corporate taxation. Capital gain tax exemption can be availed upon meeting specific conditions.</p>",
    dividend_tax: "<p class='marginbt-0'>To resident Individuals:</p><ul class='style-list'><li>Tax-free dividend allowance:  GBP 2,000</li><li>Basic rate: 7.5%</li><li>Higher rate: 32.5%</li><li>Additional rate: 38.1%</li></ul><p class='text-left'>To resident UK company: mostly exempted whether received from local or foreign companies</p>",
    property_tax: "<ul class='style-list'><li>Stamp duty land tax (SDLT) from 0 -12% for residential property</li><li>SDLT from 0 -5% for non-residential property</li><li>SDLT of 15% for residential property valued more than GBP 500,000 for companies</li></ul>",
    withholding_tax: "<ul class='style-list'><li>Dividends / Fee for technical services: 0%</li><li>Interest/Royalties: 20% for payments paid to nonresidents</li></ul>",
    transfer_tax: "N/A"
}], listAllEntityType, listAllCompanySuffix, countrySelect, entitySelect;
function getValueSelect() {
    var t = [null, null, null]
      , e = $(".offshore-company-comparison-page select[name=country1]").val();
    null != e && (t[0] = comparison_table.find(function(t) {
        return t.id == e
    }));
    var a = $(".offshore-company-comparison-page select[name=country2]").val();
    null != a && (t[1] = comparison_table.find(function(t) {
        return t.id == a
    }));
    var n = $(".offshore-company-comparison-page select[name=country3]").val();
    null != n && (t[2] = comparison_table.find(function(t) {
        return t.id == n
    })),
    LoadTableConparison(t)
}
function LoadTableConparison(o) {
    var t = [{
        display: '<p class="title"><img src="../images/resources/INTERNATIONAL COMPLIANCEmdpi.png"><span>International compliance</span></p>',
        key: "International_compliance"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/EU listmdpi.png"><span>EU list</span></p>',
        key: "eu_list"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/OECDmdpi.png"><span>OECD</span></p>',
        key: "oecd"
    }, {
        display: "- AEOI",
        key: "aeoi"
    }, {
        display: "- EOIR",
        key: "eoir"
    }, {
        display: "- BEPS",
        key: "beps"
    }, {
        display: '<p class="title"><img src="../images/resources/LEGAL STRUCTUREmdpi.png"><span>Legal structure</span></p>',
        key: "legal_structure"
    }, {
        display: "Legal basis",
        key: "basic"
    }, {
        display: "Foreign exchange control",
        key: "foreign_exchange_control"
    }, {
        display: "Foreign ownership allowed",
        key: "foreign_ownership_allowed"
    }, {
        display: '<p class="title"><img src="../images/resources/BUSINESS STRUCTUREmdpi.png"><span>Business structure</span></p>',
        key: "business_structure"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/Company typemdpi.png"><span>Company type</span></p>',
        key: "company_type"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/Directormdpi.png"><span>Director</span></p>',
        key: "director"
    }, {
        display: "Minimum number",
        key: "minimum_number"
    }, {
        display: "Local resident required",
        key: "local_resident_required"
    }, {
        display: "Public register of director",
        key: "public_register_director"
    }, {
        display: "Nominee director",
        key: "nominee_director"
    }, {
        display: "Corporate director",
        key: "corporate_director"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/Shareholdermdpi.png"><span>Shareholder</span></p>',
        key: "shareholder"
    }, {
        display: "Minimum number",
        key: "sminimum_number"
    }, {
        display: "Local resident required",
        key: "slocal_resident_required"
    }, {
        display: "Public register of shareholder",
        key: "public_register_shareholder"
    }, {
        display: "Nominee shareholder",
        key: "nominee_shareholder"
    }, {
        display: "Corporate shareholder",
        key: "corporate_shareholder"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/Beneficial ownermdpi.png"><span>Beneficial owner</span></p>',
        key: "beneficial_owner"
    }, {
        display: "Public register of beneficial owner",
        key: "public_register_beneficial"
    }, {
        display: "Central register of beneficial owner",
        key: "central_register_beneficial"
    }, {
        display: '<p class="sub-title"><img src="../images/resources/Share capitalmdpi.png"><span>Share capital</span></p>',
        key: "share_capital"
    }, {
        display: "Standard registered capital",
        key: "standard_registered_capital"
    }, {
        display: "Min. paid-up capital",
        key: "paidup_capital"
    }, {
        display: "Capital currency",
        key: "capital_currency"
    }, {
        display: "Bearer shares",
        key: "bearer_shares"
    }, {
        display: '<p class="title"><img src="../images/resources/INITIAL REQUIREMENTmdpi.png"><span>Initial requirement</span></p>',
        key: "initial_requirement"
    }, {
        display: "Local registered address",
        key: "local_registered_address"
    }, {
        display: "Company secretary",
        key: "company_secretary"
    }, {
        display: "Local registered agent",
        key: "local_registered_agent"
    }, {
        display: '<p class="title"><img src="../images/resources/ANNUAL COMPLIANCEmdpi.png"><span>Annual compliance</span></p>',
        key: "annual_compliance"
    }, {
        display: "Annual return",
        key: "annual_return"
    }, {
        display: "Annual tax return",
        key: "annual_tax_return"
    }, {
        display: "Records keeping",
        key: "records_keeping"
    }, {
        display: "Audited accounts",
        key: "audited_accounts"
    }, {
        display: "Annual general meeting",
        key: "annual_general_meeting"
    }, {
        display: "Location of annual general meeting",
        key: "location_annual_general_meeting"
    }, {
        display: "Economic substance",
        key: "economic_substance"
    }, {
        display: '<p class="title"><img src="../images/resources/LOCAL TAX PROFILEmdpi.png"><span>Local tax profile</span></p>',
        key: "local_tax_profile"
    }, {
        display: "Offshore tax exemption",
        key: "offshore_tax_exemption"
    }, {
        display: "Corporate income tax",
        key: "corporate_income_tax"
    }, {
        display: "Sales tax",
        key: "sales_tax"
    }, {
        display: "Capital gain tax",
        key: "capital_gain_tax"
    }, {
        display: "Dividend tax",
        key: "dividend_tax"
    }, {
        display: "Property tax",
        key: "property_tax"
    }, {
        display: "Withholding tax",
        key: "withholding_tax"
    }, {
        display: "Transfer tax",
        key: "transfer_tax"
    }].filter(function(t) {
        return "id" !== t && "name" !== t
    })
      , s = document.querySelector(".comparison_data");
    s.innerHTML = "",
    t.forEach(function(t) {
        var e = document.createElement("tr")
          , a = null != o[0] ? o[0][t.key] : ""
          , n = null != o[1] ? o[1][t.key] : ""
          , i = null != o[2] ? o[2][t.key] : ""
          , r = "<td>" + t.display + "</td>";
        r += "<td>" + a + "</td>",
        r += "<td>" + n + "</td>",
        e.innerHTML = r += "<td>" + i + "</td>",
        s.appendChild(e)
    })
}
function onloadTableComparison() {
    LoadTableConparison(comparison_table)
}
function scrollToPackage() {
    var t = (991 < window.screen.availWidth ? document.getElementById("package_scroll") : document.getElementById("package_scroll_mobile")).getBoundingClientRect();
    $("html, body").animate({
        scrollTop: t.top + window.pageYOffset - 100
    }, 600),
    window.scrollTo(0, t.top + window.pageYOffset - 100)
}
function getUrlParameter() {
    var t = decodeURIComponent(window.location.href)
      , e = t.split("#");
    return !!t.includes("#") && e[1]
}
function scrollToCaculatorAcc() {
    var t = document.getElementById("caculator-price").getBoundingClientRect();
    window.scrollTo(0, t.top + window.pageYOffset - 100)
}
function scrollToPricing() {
    var t = document.getElementById("pricing_scroll").getBoundingClientRect();
    window.scrollTo(0, t.top + window.pageYOffset - 180)
}
function LoadTableBankCountry(t) {
    document.querySelector(".bank_data").innerHTML = "";
    for (var e = 0; e < t.length; e++)
        for (var a = document.querySelector(".bank_data"), n = t[e].banks, i = 0; i < n.length; i++) {
            var r = document.createElement("tr")
              , o = "";
            0 == i && (o = '<td class="title" rowspan="' + n.length + '">' + t[e].name + "</td>"),
            o += "<td>" + n[i].name + "</td>",
            1 == n[i].contact_us ? o += '<td colspan="5">Contact us for details</td>' : (1 == n[i].online_banking ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].personal_visit ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].credit_card ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].debit_card ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>'),
            o += "<td>" + n[i].initial_deposit + "</td>",
            r.innerHTML = o,
            a.appendChild(r)
        }
}
function onloadBankAccount() {
    LoadTableBankCountry(JSON.parse(document.getElementById("banking_table").getAttribute("data")))
}
function filterCountryBank() {
    var t = JSON.parse(document.getElementById("banking_table").getAttribute("data"));
    "yes" === ($(".country select[name=remote]").val() || "all") && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return !1 === t.personal_visit
            })
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    }));
    var e = $(".country select[name=bank-country]").val();
    0 < e.length && (t = t.filter(function(t) {
        return e.includes(t.id.toString())
    }));
    var a = $(".country select[name=initial-deposit]").val();
    (a = a || "all") <= 1e5 ? t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_usd <= a
            })
        }
    }) : 1e5 < a && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_usd > parseInt(a) - 1
            })
        }
    })),
    LoadTableBankCountry(t)
}
function toggleSelectAllBankCountry(t) {
    var e = -1 < (t.val() || []).indexOf("All");
    function a(t) {
        return $.map(t, function(t) {
            return t.value
        })
    }
    t.data("allOptionIsSelected") != e ? e ? t.selectpicker("val", a(t.find("option"))) : t.selectpicker("val", []) : e && t.val().length != t.find("option").length ? (t.selectpicker("val", a(t.find("option:selected[value!=All]"))),
    e = !1) : e || t.val().length != t.find("option").length - 1 || (t.selectpicker("val", a(t.find("option"))),
    e = !0),
    t.data("allOptionIsSelected", e)
}
function onloadENC() {
    loadDataENC()
}
function loadDataENC() {
    try {
        listAllEntityType = JSON.parse(document.querySelector("#form-name-check .form-entity").getAttribute("data_entity")),
        listAllCompanySuffix = JSON.parse(document.querySelector("#form-name-check .form-company_suffix").getAttribute("data_company_suffix")),
        loadListEntityTypeENC(countrySelect = $("#form-name-check select[name=slct-country]").val(), listAllEntityType)
    } catch (t) {
        console.log(t)
    }
}
function loadListEntityTypeENC(a, t, e) {
    var n = [];
    if (t.forEach(function(e) {
        e.Countries.forEach(function(t) {
            t.id === parseInt(a) && n.push(e)
        })
    }),
    document.querySelector("#form-name-check .form-entity #slct-entity").innerHTML = "",
    n.forEach(function(t) {
        var e = document.createElement("option");
        e.setAttribute("value", t.id),
        e.setAttribute("guid", t.guid),
        e.setAttribute("enity_name", t.name),
        e.innerHTML = t.name,
        document.querySelector("#form-name-check .form-entity #slct-entity").appendChild(e)
    }),
    e)
        for (var i = document.querySelector("#slct-entity").options, r = 0, o = i.length; r < o; r++)
            if (i[r].getAttribute("value") == e.entity_type_id) {
                $("select[name=slct-entity]").val("" + i[r].value),
                $(".selectpicker").selectpicker("refresh");
                break
            }
    entitySelect = $("#form-name-check select[name=slct-entity]").val(),
    loadListCompanySuffixENC(countrySelect, entitySelect, listAllCompanySuffix)
}
function loadListCompanySuffixENC(e, a, t, n) {
    t = t.filter(function(t) {
        return t.country.includes(parseInt(e))
    }).filter(function(t) {
        return t.entity.includes(parseInt(a))
    });
    if (document.querySelector("#form-name-check .form-company_suffix #slct-company_suffix").innerHTML = "",
    t.forEach(function(t) {
        var e = document.createElement("option");
        e.setAttribute("value", t.id),
        e.setAttribute("suffix_name", t.name),
        e.innerHTML = t.name,
        document.querySelector("#form-name-check .form-company_suffix #slct-company_suffix").appendChild(e)
    }),
    n)
        for (var i = document.querySelector("#slct-company_suffix").options, r = 0, o = i.length; r < o; r++)
            if (i[r].getAttribute("value") == n.company_suffix_id) {
                $("select[name=slct-company_suffix]").val("" + i[r].value);
                break
            }
    $(".selectpicker").selectpicker("refresh")
}
function submitFormENC() {
    try {
        $("form#form-name-check").validate({
            rules: {
                "slct-country": "required",
                "slct-entity": "required",
                "your-company": "required",
                "slct-company_suffix": "required",
                "first-name": "required",
                "your-email": "required"
            },
            messages: {
                "slct-country": "This field is required.",
                "slct-entity": "This field is required.",
                "your-company": "This field is required.",
                "slct-company_suffix": "This field is required.",
                "first-name": "This field is required.",
                "your-email": "This field is required."
            },
            submitHandler: function(t) {
                document.getElementById("loading-button").style.display = "inline-block",
                document.querySelector(".entity-name-check-page #submit-form-enc").disabled = !0,
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "entitynamecheck"
                    }).then(function(e) {
                        var t = {
                            company_country_id: $("#form-name-check select[name=slct-country]").val(),
                            company_name: $("#form-name-check input[name=your-company]").val(),
                            company_suffix_id: $("#form-name-check select[name=slct-company_suffix]").val(),
                            company_suffix_name: $("#form-name-check select[name=slct-company_suffix] option:selected").attr("suffix_name"),
                            email: $("#form-name-check input[name=your-email]").val(),
                            entity_type_id: $("#form-name-check select[name=slct-entity]").val(),
                            first_name: $("#form-name-check input[name=first-name]").val(),
                            last_name: $("#form-name-check input[name=last-name]").val(),
                            client_id: gaUserId,
                            captcha_response: e,
                            contact_from_id: 3,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.first_name,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/check_name",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button").style.display = "none",
                                document.querySelector(".entity-name-check-page #submit-form-enc").disabled = !1,
                                $("#submit-form-enc").trigger("reset")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
$(".offshore-company-comparison-page select[name=country1]").on("change", function() {
    getValueSelect()
}),
$(".offshore-company-comparison-page select[name=country2]").on("change", function() {
    getValueSelect()
}),
$(".offshore-company-comparison-page select[name=country3]").on("change", function() {
    getValueSelect()
}),
$(function() {
    (new WOW).init()
}),
$(document).ready(function() {
    $("#slct-country").selectpicker("render"),
    $("#slct-service").selectpicker("render"),
    $(".placeholder").click(function() {
        $(this).siblings("input").focus()
    }),
    $(".form-control").focus(function() {
        $(this).siblings(".placeholder").hide()
    }),
    $(".form-control").blur(function() {
        $(this).val() || $(this).siblings(".placeholder").show()
    }),
    $(".form-control").blur(),
    $(".transfer-agent-page #contact-form select[name=slct-country]").on("load change", function() {
        $("#contact-form select[name=slct-country]").val() && $("#slct-country-error").css("display", "none")
    }),
    $(".contact-us-page #contact-form select[name=slct-country]").on("load change", function() {
        $("#contact-form select[name=slct-country]").val() && $("#slct-country-error").css("display", "none")
    }),
    $("#contact-form .btn-submit").on("click", function() {
        $("#contact-form").validate({
            rules: {
                "first-name": "required",
                "your-email": "required",
                "slct-country": "required",
                "slct-subject": "required",
                "your-message": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "last-name": "This field is required.",
                "your-email": "This field is required.",
                "slct-country": "This field is required.",
                "slct-subject": "This field is required.",
                "your-message": "This field is required."
            },
            errorPlacement: function(t, e) {
                "slct-subject" == e.attr("name") ? t.appendTo("#error-subject") : "slct-country" == e.attr("name") ? t.appendTo("#error-country") : t.insertAfter(e)
            },
            submitHandler: function(t) {
                document.getElementById("loading-button").style.display = "inline-block",
                document.querySelector(".form-contact #contact-us").disabled = !0,
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "contactUsBBC"
                    }).then(function(e) {
                        var t = {
                            first_name: $("#contact-form input[name=first-name]").val(),
                            last_name: $("#contact-form input[name=last-name]").val(),
                            email: $("#contact-form input[name=your-email]").val(),
                            message: $("#contact-form textarea[name=your-message]").val(),
                            country_id: $("#contact-form select[name=slct-country]").val(),
                            phone: $("#contact-form input[name=your-phone]").val(),
                            subject: $("#contact-form select[name=slct-subject]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.first_name + " " + t.last_name,
                            email: t.email,
                            message: t.message,
                            country_id: t.country_id,
                            country_name: $("#contact-form select[name=slct-country] option:selected").text(),
                            phone: t.phone,
                            subject: t.subject
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                })),
                                Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            error: function() {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button").style.display = "none",
                                document.querySelector(".form-contact #contact-us").disabled = !1
                            }
                        })
                    })
                })
            }
        })
    })
}),
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$.each($(".block-country-container").not(".slick-initialized"), function(t, e) {
    var a = e.querySelectorAll(".country-slider").length - 1;
    $(e).slick({
        infinite: !0,
        slidesToShow: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        touchThreshold: 500,
        lazyLoad: "ondemand",
        initialSlide: a,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                initialSlide: 0
            }
        }]
    })
}),
(getUrlParameter() && "private-limited-company" == getUrlParameter() || "limited-liability-partnership" == getUrlParameter()) && (scrollToPackage(),
"limited-liability-partnership" == getUrlParameter() && 991 < window.screen.availWidth && ($(".tab-pane").removeClass("active"),
$("#limited-liability-partnership").addClass("active"),
$("a.nav_link").parent().removeClass("active"),
$('a[href="#limited-liability-partnership"].nav_link').parent().addClass("active")),
"limited-liability-partnership" == getUrlParameter() && window.screen.availWidth <= 991 && ($("li.private-limited-company").removeClass("active"),
$("li.limited-liability-partnership").addClass("active"),
$("#limited-liability-partnership").addClass("active in"),
$("#private-limited-company").removeClass("active in"))),
$(document).ready(function() {
    $(".slider-country-nav").slick({
        prevArrow: "<div class='icon'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }),
    $(".step1slide").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }),
    $(".step2slide").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    }),
    $(".step2slideHK").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    }),
    $(".step2slideSingapore").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }]
    }),
    $(".step3slide").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 2,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
            }
        }]
    }),
    $(".step4slide").slick({
        prevArrow: "<div class='icon arrow-left'><i class='glyphicon glyphicon-chevron-left'></i></div>",
        nextArrow: "<div class='icon arrow-right'><i class='glyphicon glyphicon-chevron-right'></i></div>",
        infinite: !1,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 4,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 4
            }
        }]
    });
    var t = function(t) {
        for (var e, a = window.location.search.substring(1).split("&"), n = 0; n < a.length; n++)
            if ((e = a[n].split("="))[0] === t)
                return void 0 === e[1] || decodeURIComponent(e[1])
    }("kw");
    null != t && (document.getElementById("dynamic_header").innerHTML = t)
}),
$(".country select[name=remote]").on("change", function(t) {
    filterCountryBank()
}),
$(".country select[name=initial-deposit]").on("change", function() {
    filterCountryBank()
}),
$(".country #bank-country").selectpicker().change(function() {
    toggleSelectAllBankCountry($(this)),
    filterCountryBank()
}).trigger("change"),
$("#bank-country").selectpicker({
    countSelectedText: function(t, e) {
        return t >= $("#bank-country option").length - 1 ? "Bank Country" : "{0} countries selected"
    }
}),
$(function() {
    $(".blog-wordpress-page a#blog_detail_tawk").attr("href", "javascript:void(Tawk_API.toggle())")
}),
$("#form-name-check select[name=slct-country]").on("load change", function() {
    loadListEntityTypeENC(countrySelect = $("#form-name-check select[name=slct-country]").val(), listAllEntityType, void 0),
    loadListCompanySuffixENC(countrySelect, entitySelect, listAllCompanySuffix, void 0)
}),
$("#form-name-check select[name=slct-entity]").on("load change", function() {
    entitySelect = $("#form-name-check select[name=slct-entity]").val(),
    loadListCompanySuffixENC(countrySelect, entitySelect, listAllCompanySuffix, void 0)
}),
$(document).on("change", ".selectpicker", function() {
    $(".selectpicker").selectpicker("refresh")
}),
$(document).ready(function() {
    $("#slct-company_suffix").selectpicker("render");
    var t = $("#form-name-check select[name=slct-country]");
    t.selectpicker("deselectAll"),
    t.find("option[value='244']").remove(),
    t.find("li").remove(),
    t.selectpicker("refresh")
}),
$("#submit-form-enc").on("click", function() {
    submitFormENC()
});
var linkUrlOrder = location.origin, linkUrlOrderAPi = "https://core.bbcincorp.com", btnpaypal_makepayment, id;
function load_failed_payment() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.order_code
    })
      , a = altFind(t, function(t) {
        return t.promotion_code
    })
      , t = void 0;
    a && (t = a.promotion_code),
    e ? loadOrderFailedAPI(e, t) : loadPaymentFailed()
}
function loadOrderFailedAPI(e, a) {
    try {
        var t = linkUrlOrderAPi + "/api/portal/order/";
        $.ajax({
            type: "GET",
            url: t + e.order_code,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (viewOrderFailed(e.order_code, t.data, a),
                localStorage.setItem("payment_status", "failed"))
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function viewOrderFailed(t, e, a) {
    var n = a ? "&promotion_code=" + a : "";
    document.querySelector(".banner-with-title .title").innerHTML = "Failed Payment for Services",
    document.querySelector("#content-for-order").style.display = "none";
    a = document.querySelectorAll(".order-id");
    document.querySelector("#info-link").innerHTML = "Check order information and payment here.",
    document.querySelector("#info-link").href = linkUrlOrder + "/order/order-information?order_code=" + t + n,
    e.id ? (a[0].innerHTML = e.id,
    a[1].innerHTML = "Company name or Invoice number INC" + e.id) : (document.querySelector("#content-for-text").style.display = "none",
    document.querySelector("#content-for-text-A").style.display = "none",
    document.querySelector("#content-for-order").style.display = "none"),
    document.querySelector("#dear-msg").innerHTML = "Dear " + e.Customer.TitleName.name + e.Customer.first_name
}
function loadPaymentFailed() {
    var t = JSON.parse(localStorage.getItem("myForms"));
    document.querySelector(".banner-with-title .title").innerHTML = "Failed Payment for Services",
    document.querySelector("#content-for-order").style.display = "none";
    var e = document.querySelectorAll(".order-id");
    document.querySelector("#info-link").innerHTML = "Make payment online here.",
    document.querySelector("#info-link").href = linkUrlOrder + "/make-payment",
    t.your_order ? (e[0].innerHTML = t.your_order,
    e[1].innerHTML = "Company name or Invoice number " + t.your_order) : (document.querySelector("#content-for-text").style.display = "none",
    document.querySelector("#content-for-text-A").style.display = "none"),
    document.querySelector("#dear-msg").innerHTML = "Dear " + t.first_name
}
function onloadTableFeatureOffshore() {
    var o = [{
        id: 1,
        name: "<a target='_blank' href='/anguilla-company-formation'>Anguilla</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Holding company"],
        corporate_income_tax: !1,
        corporate_tax_value: [0, 0],
        offshore_exemption: "N/A",
        eu_list: "Greylist",
        audited_accounts: !1
    }, {
        id: 2,
        name: "<a target='_blank' href='/bahamas-company-formation'>Bahamas</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company"],
        corporate_income_tax: !1,
        corporate_tax_value: [0, 0],
        offshore_exemption: "N/A",
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 3,
        name: "<a target='_blank' href='/belize-company-formation'>Belize</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company"],
        corporate_income_tax: "<span>5%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Corporate income tax:</p><ul><li>40% on petroleum operations</li></ul><p>Business tax based on gross income:</p><ul><li>5% on foreign passive income</li><li>1.75% - 6% on all other foreign income</li></ul></div></span>",
        corporate_tax_value: [5, 5],
        offshore_exemption: !1,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 4,
        name: "<a target='_blank' href='/panama-company-formation'>Panama</a>",
        public_register: "<span>Depend</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content' style='left: 10%'><p>Public register of directors, not shareholders</p></div></span>",
        public_register_value: "Public register of directors, not shareholders",
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Wealth management", "Private trust company"],
        corporate_income_tax: "<span>25%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Greater of:</p><ul><li>25% on net taxable income; or</li><li>1.17% on gross taxable income</li></ul><p>Branch remittance tax: 10% in addition to CIT</p></div></span>",
        corporate_tax_value: [25, 25],
        offshore_exemption: !0,
        eu_list: "Blacklist",
        audited_accounts: !1
    }, {
        id: 5,
        name: "<a target='_blank' href='/cayman-islands-company-formation'>Cayman Islands</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Wealth management", "Private trust company", "Brokerage company"],
        corporate_income_tax: !1,
        corporate_tax_value: [0, 0],
        offshore_exemption: !0,
        eu_list: "Blacklist",
        audited_accounts: !1
    }, {
        id: 6,
        name: "<a target='_blank' href='/saint-kitts-and-nevis-company-formation'>Saint Kitts</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company"],
        corporate_income_tax: "<span>33%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>CIT: 33%</p><p>Branch remittance tax: 15%</p></div></span>",
        corporate_tax_value: [33, 33],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 7,
        name: "<a target='_blank' href='/bvi-company-formation'>BVI</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Wealth management", "Private trust company"],
        corporate_income_tax: !1,
        corporate_tax_value: [0, 0],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 8,
        name: "<a target='_blank' href='/saint-vincent-company-formation'>Saint Vincent</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Brokerage company"],
        corporate_income_tax: "<span>30%</span>",
        corporate_tax_value: [30, 30],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 9,
        name: "<a target='_blank' href='/hong-kong-company-formation'>Hong Kong</a>",
        public_register: !0,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "China/Asian market entry", "Investment company", "Holding company", "IP holding company", "Ecommerce", "Merchant account", "Tax treaties", "Startups", "Financial service company"],
        corporate_income_tax: "<span>8.25% - 16.5%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>8.25% for the first 2mil HKD</p><p>16.5% for above</p></div></span>",
        corporate_tax_value: [8, 17],
        tax_valuea: [8, 8],
        tax_value2: [17, 17],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !0
    }, {
        id: 10,
        name: "<a target='_blank' href='/marshall-islands-company-formation'>Marshall Islands</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Yacht ownership"],
        corporate_income_tax: !1,
        corporate_tax_value: [0, 0],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 11,
        name: "<a target='_blank' href='/samoa-company-formation'>Samoa</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Holding company"],
        corporate_income_tax: "<span>27%</span>",
        corporate_tax_value: [27, 27],
        offshore_exemption: !0,
        eu_list: "Blacklist",
        audited_accounts: !1
    }, {
        id: 12,
        name: "<a target='_blank' href='/singapore-company-formation'>Singapore</a>",
        public_register: !0,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "China/Asian market entry", "Investment company", "Holding company", "IP holding company", "Ecommerce", "Merchant account", "Tax treaties", "Startups", "Financial service company"],
        corporate_income_tax: "<span>17%</span>",
        corporate_tax_value: [17, 17],
        offshore_exemption: "<span>Depend</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Yes if not remitted to Singapore</p></div></span>",
        offshore_exemption_value: "Yes if not remitted to Singapore",
        eu_list: "N/A",
        audited_accounts: "<span>Depend</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Yes, but audit exemption is also available</p></div></span>",
        audited_accounts_value: "Yes, but audit exemption is also available"
    }, {
        id: 13,
        name: "<a target='_blank' href='/cyprus-company-formation'>Cyprus</a>",
        public_register: !0,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "EU market entry", "IP holding company", "Ecommerce", "Merchant account", "Tax treaties"],
        corporate_income_tax: "<span>13%</span>",
        corporate_tax_value: [13, 13],
        offshore_exemption: !0,
        eu_list: "N/A",
        audited_accounts: !0
    }, {
        id: 14,
        name: "<a target='_blank' href='/mauritius-company-formation'>Mauritius</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company"],
        corporate_income_tax: "<span>15%</span>",
        corporate_tax_value: [15, 15],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 15,
        name: "<a target='_blank' href='/rak-company-formation'>RAK (UAE)</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Holding company", "Investment company", "Wealth management", "Asset protection"],
        corporate_income_tax: "<span>0%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Up to 55% for oil and gas exploration and production company</p><p>20% for branches of foreign banks</p><p>Above rates can varies under each Emirate</p></div></span>",
        corporate_tax_value: [0, 0],
        offshore_exemption: !0,
        eu_list: "N/A",
        audited_accounts: !1
    }, {
        id: 16,
        name: "<a target='_blank' href='/jersey-company-formation'>Jersey</a>",
        public_register: !0,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "Wealth management"],
        corporate_income_tax: "<span>0%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>0% standard rate</p><p>10% or 20% to some specific activities</p></div></span>",
        corporate_tax_value: [0, 0],
        offshore_exemption: !0,
        eu_list: "Cleared",
        audited_accounts: !1
    }, {
        id: 17,
        name: "<a target='_blank' href='/seychelles-company-formation'>Seychelles</a>",
        public_register: !1,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Holding company"],
        corporate_income_tax: "<span>25% - 33%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>25% on the first SR1mil taxable income</p><p>33% applied to above amount</p></div></span>",
        corporate_tax_value: [25, 33],
        offshore_exemption: !0,
        eu_list: "Blacklist",
        audited_accounts: !1
    }, {
        id: 18,
        name: "<a target='_blank' href='/united-kingdom-company-formation'>UK</a>",
        public_register: !0,
        commonly_used_for: ["International trading", "Consulting business", "Personal trading", "Investment company", "Holding company", "IP holding company", "Ecommerce", "Merchant account", "Financial service company"],
        corporate_income_tax: "<span>18%</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>18% for the year starting from 1 April 2020</p></div></span>",
        corporate_tax_value: [18, 18],
        offshore_exemption: !0,
        eu_list: "N/A",
        audited_accounts: "<span>Depend</span><span class='tooltip-bottom'><i class='fas fa-info-circle'></i><div class='tooltip-content'><p>Yes, but audit exemption is also available</p></div></span>"
    }]
      , s = document.getElementById("range-tax");
    function c(t) {
        document.querySelector(".feature_data").innerHTML = "";
        var e, a = document.querySelector(".feature_data"), n = $("select#commonly[name=commonly]").val(), i = _createForOfIteratorHelper(t);
        try {
            for (i.s(); !(e = i.n()).done; ) {
                var r = e.value
                  , o = document.createElement("tr")
                  , s = ""
                  , c = "";
                r.commonly_used_for.forEach(function(t) {
                    n.includes(t) ? c += "<span style=color:#fff;background-color:" + l(t) + ">" + t + "</span>" : c += "<span style=color:" + l(t) + ">" + t + "</span>"
                }),
                s = "<td>" + r.name + "</td>",
                !0 === r.public_register ? s += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : !1 === r.public_register ? s += '<td><i class="fa fa-times" aria-hidden="true"></i></td>' : s += "<td>" + r.public_register + "</td>",
                s += "<td>" + c + "</td>",
                !0 === r.corporate_income_tax ? s += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : !1 === r.corporate_income_tax ? s += '<td><i class="fa fa-times" aria-hidden="true"></i></td>' : s += "<td>" + r.corporate_income_tax + "</td>",
                !0 === r.offshore_exemption ? s += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : !1 === r.offshore_exemption ? s += '<td><i class="fa fa-times" aria-hidden="true"></i></td>' : s += "<td>" + r.offshore_exemption + "</td>",
                s += "<td>" + r.eu_list + "</td>",
                !0 === r.audited_accounts ? s += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : !1 === r.audited_accounts ? s += '<td><i class="fa fa-times" aria-hidden="true"></i></td>' : s += "<td>" + r.audited_accounts + "</td>",
                o.innerHTML = s,
                a.appendChild(o)
            }
        } catch (t) {
            i.e(t)
        } finally {
            i.f()
        }
    }
    function a() {
        var t = o
          , e = $(".offshore-company-comparison-page select#country[name=country]").val();
        0 < e.length && (t = t.filter(function(t) {
            return e.includes(t.id.toString())
        }));
        var a = $(".offshore-company-comparison-page select#register[name=register]").val();
        "yes" == (a = a || "all") ? t = t.filter(function(t) {
            return !0 === t.public_register
        }) : "no" == a ? t = t.filter(function(t) {
            return !1 === t.public_register
        }) : "directors" == a ? t = t.filter(function(t) {
            return "Public register of directors, not shareholders" == t.public_register_value
        }) : "shareholders" == a && (t = []);
        var n = $(".offshore-company-comparison-page select#commonly[name=commonly]").val();
        0 < n.length && (t = t.filter(function(t) {
            return t.commonly_used_for.some(function(t) {
                return n.includes(t)
            })
        }));
        var i = s.noUiSlider.get()
          , t = 0 <= i[0] && i[1] < 33 ? t.filter(function(t) {
            return t.corporate_tax_value[0] >= i[0] && t.corporate_tax_value[1] <= i[1]
        }) : t.filter(function(t) {
            return t.corporate_tax_value[0] >= i[0] || t.corporate_tax_value[1] >= i[1]
        })
          , a = $(".offshore-company-comparison-page select#offshore-exemption[name=offshore-exemption]").val();
        "yes" == (a = a || "all") ? t = t.filter(function(t) {
            return !0 === t.offshore_exemption || "Yes if not remitted to Singapore" == t.offshore_exemption_value
        }) : "no" == a && (t = t.filter(function(t) {
            return !1 === t.offshore_exemption || "N/A" == t.offshore_exemption
        }));
        var r = $(".offshore-company-comparison-page select#eu-list[name=eu-list]").val();
        0 < r.length && (t = t.filter(function(t) {
            return r.includes(t.eu_list.toString())
        }));
        a = $(".offshore-company-comparison-page select#audited-accounts[name=audited-accounts]").val();
        "yes" == (a = a || "all") ? t = t.filter(function(t) {
            return !0 === t.audited_accounts || "Yes, but audit exemption is also available" == t.audited_accounts_value
        }) : "no" == a && (t = t.filter(function(t) {
            return !1 === t.audited_accounts
        })),
        c(t)
    }
    function t(t) {
        var e = -1 < (t.val() || []).indexOf("All");
        function a(t) {
            return $.map(t, function(t) {
                return t.value
            })
        }
        t.data("allOptionIsSelected") != e ? e ? t.selectpicker("val", a(t.find("option"))) : t.selectpicker("val", []) : e && t.val().length != t.find("option").length ? (t.selectpicker("val", a(t.find("option:selected[value!=All]"))),
        e = !1) : e || t.val().length != t.find("option").length - 1 || (t.selectpicker("val", a(t.find("option"))),
        e = !0),
        t.data("allOptionIsSelected", e)
    }
    function l(t) {
        switch (t) {
        case "International trading":
            return "#9b6dec";
        case "Consulting business":
            return "#6f1a07";
        case "Personal trading":
        case "Brokerage company":
            return "#f0005d";
        case "Holding company":
        case "IP holding company":
        case "Yacht ownership":
        case "Investment company":
        case "Financial service company":
            return "#606c38";
        case "Wealth management":
        case "Asset protection":
        case "Private trust company":
            return "#343a40";
        case "China/Asian market entry":
        case "EU market entry":
            return "#fabe19";
        case "Ecommerce":
            return "#dc5151";
        case "Merchant account":
            return "#2196f3";
        case "Tax treaties":
            return "#fb9901";
        case "Startups":
            return "#17a2b8";
        default:
            return "#000"
        }
    }
    noUiSlider.create(s, {
        start: [0, 33],
        behaviour: "tap-drag",
        connect: !0,
        range: {
            min: 0,
            max: 33
        },
        step: 1
    }),
    s.noUiSlider.on("update", function(t, e) {
        a(),
        document.getElementById("range-value1").innerHTML = parseInt(t[0]) + "%",
        document.getElementById("range-value2").innerHTML = parseInt(t[1]) + "%"
    }),
    $(".offshore-company-comparison-page select#country[name=country").selectpicker().change(function() {
        t($(this)),
        a()
    }).trigger("change"),
    $(".offshore-company-comparison-page select#register[name=register]").on("change", function() {
        a()
    }),
    $(".offshore-company-comparison-page select#commonly[name=commonly]").on("change", function() {
        t($(this)),
        a()
    }).trigger("change"),
    $(".offshore-company-comparison-page select#offshore-exemption[name=offshore-exemption]").on("change", function() {
        a()
    }),
    $(".offshore-company-comparison-page select#audited-accounts[name=audited-accounts]").on("change", function() {
        a()
    }),
    $(".offshore-company-comparison-page select#eu-list[name=eu-list").selectpicker().change(function() {
        t($(this)),
        a()
    }).trigger("change"),
    $(".offshore-company-comparison-page #btn-filter").click(function() {
        $("#jurisdiction-features .selectpicker").val("default").selectpicker("deselectAll"),
        $("#jurisdiction-features .selectpicker").selectpicker("refresh"),
        s.noUiSlider.set([0, 50]),
        c(o)
    });
    var e = document.getElementById("myBtn");
    document.getElementById("myModal"),
    document.getElementsByClassName("noUi-handle");
    e.onclick = function() {
        $(".offshore-company-comparison-page #myModal").toggle()
    }
    ,
    window.addEventListener("click", function(t) {
        document.querySelector(".offshore-company-comparison-page #myModal").contains(t.target) || document.querySelector(".offshore-company-comparison-page #myBtn").contains(t.target) || (document.querySelector(".offshore-company-comparison-page #myModal").style.display = "none")
    }),
    onloadTableComparison()
}
function myDebounceTime(n, i) {
    var r = 0;
    return function() {
        clearTimeout(r);
        for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++)
            e[a] = arguments[a];
        r = setTimeout(n.bind.apply(n, [this].concat(e)), i || 0)
    }
}
function readParamUrl() {
    return window.location.search.replace(/&amp;/g, "&").substring(1).split("&").map(function(t) {
        var e = {};
        return e[t.split("=")[0]] = t.split("=")[1],
        e
    })
}
function altFind(t, e) {
    for (var a = 0; a < t.length; a++)
        if (e(t[a]))
            return t[a]
}
function get_ebook_single() {
    try {
        $("form#formEbookHK").validate({
            rules: {
                "first-name": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required."
            },
            submitHandler: function(t) {
                document.getElementById("loading-button-popup").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var t = {
                            name: $("#formEbookHK input[name=first-name]").val(),
                            email: $("#formEbookHK input[name=your-email]").val(),
                            contact_from_id: $("#formEbookHK").attr("data-id-form"),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.name,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/profile_request",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#getEbook").modal("hide"),
                                $("form#formEbookHK").trigger("reset"),
                                $("input[name=checkbox-ebook]").prop("value", "true"),
                                $("#formEbookHK").attr("data-id-form", 20)
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function get_ebook_offshore() {
    try {
        $("form#formEbookOffshore").validate({
            rules: {
                "first-name": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required."
            },
            submitHandler: function(t) {
                document.getElementById("loading-button-popup").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var t = {
                            name: $("#formEbookOffshore input[name=first-name]").val(),
                            email: $("#formEbookOffshore input[name=your-email]").val(),
                            contact_from_id: $("#formEbookOffshore").attr("data-id-form"),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.name,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/profile_request",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#getEbookOffshore").modal("hide"),
                                $("form#formEbookOffshore").trigger("reset"),
                                $("input[name=checkbox-ebook]").prop("value", "true"),
                                $("#formEbookOffshore").attr("data-id-form", 21)
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function sendMailSectionBankHK() {
    try {
        $("form#form-bankAcc").validate({
            rules: {
                "mail-accountingHK": "required"
            },
            messages: {
                "mail-accountingHK": "This field is required."
            },
            submitHandler: function(t) {
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var a = {
                            email: $("#form-bankAcc input[name=mail-accountingHK]").val(),
                            subject: "Hong Kong EMI Banking Inquiry",
                            client_id: gaUserId,
                            website_id: 1,
                            contact_from_id: 5
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/subscribe",
                            data: JSON.stringify(a),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Thanks, our experts will contact you shortly!",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: Object.assign(a, {
                                            fullname: a.email
                                        }),
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 3e3
                                })
                            },
                            complete: function(t) {
                                $("#modal-bankAcc").modal("hide")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function load_slider_home() {
    var o = document.querySelector(".section-article").querySelector(".slide-article");
    $.ajax({
        type: "GET",
        url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter",
        data: {
            fields: ["guid", "time_to_read", "title", "excerpt", "image"],
            condition: {
                is_deleted: !1
            },
            order: {
                portal_post_type_id: 1
            },
            limit: 7,
            newest: !0
        },
        contentType: "application/json",
        success: function(t) {
            for (var e = t.data, a = 0, n = e.length; a < n; a++) {
                var i = document.createElement("a");
                i.setAttribute("class", "col-md-4"),
                i.setAttribute("href", "resources/" + e[a].guid);
                var r = '<div class="article-item"><div class="img-slider"> <img src ="' + e[a].image + '" /></div><div class="content"><h3 class="sub-title">' + e[a].title + '</h3><p class="description"> ' + e[a].excerpt + '</p><div class="article-bottom"><span> ' + e[a].time_to_read + ' MIN READ </span><a href="resources/' + e[a].guid + '">Read more</a></div></div></div>';
                i.innerHTML = r,
                o.appendChild(i)
            }
        },
        error: function(t) {
            console.log(t)
        },
        complete: function(t) {
            callSlickSlider()
        }
    })
}
function checkPopup() {
    localStorage.setItem("statusPopup", 1),
    $(".cookies").removeClass("hide-popup")
}
function tabCaculator() {
    var t = document.querySelector(".content-price")
      , e = document.querySelector("#tab-acc")
      , a = document.querySelector("#tab-audit");
    e.onclick = function() {
        t.style.paddingBottom = "200px"
    }
    ,
    a.onclick = function() {
        t.style.paddingBottom = "0px"
    }
}
function paymentPaypal(a, n) {
    for (var t in localStorage.setItem("myForms", JSON.stringify(n)),
    n)
        Array.isArray(n[t]) || "" !== n[t].trim() || delete n[t];
    var i = {
        amount: n.amount,
        description: JSON.stringify(n),
        website_id: 1
    };
    function r() {
        $("#paypalPayment-button").attr("disabled", !0),
        $("#paypalPayment-button").css("display", "none"),
        $("#isLoadingPaypal").css("display", "block")
    }
    btnpaypal_makepayment = btnpaypal_makepayment || paypal_sdk.Buttons({
        createOrder: function(t, e) {
            return fetch(linkUrlOrderAPi + "/api/portal/payment/" + a, {
                method: "POST",
                body: JSON.stringify(i),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t && t.data,
                t.data.result.id
            })
        },
        onApprove: function(t, e) {
            r();
            t = {
                id: t.orderID,
                data_form: JSON.stringify(n),
                website_id: 1
            };
            return fetch(linkUrlOrderAPi + "/api/portal/order/authorize_make_payment", {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                localStorage.setItem("isMail", "1"),
                window.location.href = linkUrlOrder + "/order-success"
            })
        },
        onCancel: function(t, e) {
            r();
            var a = {
                data_form: JSON.stringify(n),
                website_id: 1
            };
            return fetch(linkUrlOrderAPi + "/api/portal/order/mk-payment-cancel", {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                localStorage.setItem("isMail", "1"),
                window.location.href = linkUrlOrder + "/failed-payment?type_make_payment=make_payment"
            })
        }
    }).render("#paypalPayment-button")
}
function isLoadingStripe(t) {
    t ? ($(".modal-body-stripe .submit .btn-payment").attr("disabled", !0),
    $(".modal-body-stripe .submit .btn-payment").css("display", "none"),
    $(".modal-body-stripe .submit .loadding-icon").css("display", "block")) : ($(".modal-body-stripe .submit .btn-payment").attr("disabled", !1),
    $(".modal-body-stripe .submit .btn-payment").css("display", "inline-block"),
    $(".modal-body-stripe .submit .loadding-icon").css("display", "none"))
}
function paymentCard(e, a) {
    var n = Stripe("pk_live_FriBUNrY1wNFgnjXNUNZfLTZ")
      , t = n.elements()
      , i = a.amount;
    $("#modal-paymentStripe .total-price").text(i),
    localStorage.setItem("myForms", JSON.stringify(a));
    var r = t.create("card", {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    });
    r.mount("#card-element"),
    r.on("change", function(t) {
        var e = document.getElementById("card-errors");
        t.error ? e.textContent = t.error.message : e.textContent = "",
        $("#make-payment-submit").on("click", function(t) {
            e.textContent = ""
        })
    }),
    document.getElementById("payment-form").addEventListener("submit", function(t) {
        t.preventDefault(),
        isLoadingStripe(!0),
        n.createToken(r).then(function(t) {
            t.error ? (document.getElementById("card-errors").textContent = t.error.message,
            isLoadingStripe(!1)) : (stripeTokenHandler(t.token),
            t.token.amount = a.amount,
            t.token.email = a.email,
            t.token.description = JSON.stringify(a),
            t.token.website_id = 1,
            $.ajax({
                type: "POST",
                url: linkUrlOrderAPi + "/api/portal/payment/" + e,
                data: JSON.stringify(t.token),
                contentType: "application/json",
                success: function(t) {
                    t = {
                        type_make_payment: "make_payment",
                        data: t.data
                    };
                    window.location.href = linkUrlOrder + "/order-success?" + JSON.stringify(t)
                },
                error: function() {
                    window.location.href = linkUrlOrder + "/failed-payment?type_make_payment=make_payment"
                },
                complete: function(t) {
                    document.getElementById("loading-button").style.display = "none",
                    document.getElementById("make-payment-submit").disabled = !1
                }
            }))
        })
    })
}
function stripeTokenHandler(t) {}
$(document).ready(function() {
    $(".btn-dropdown").click(function() {
        $(".content-left #accordion").slideToggle("show-nav")
    }),
    $(".sub1 li a").click(function() {
        $(".sub1 li a").find("a").addClass("active-item")
    })
}),
$(document).ready(function() {
    $(".section-faqs .collapse").on("show.bs.collapse", function() {
        $(".section-faqs .collapse").not(this).collapse("hide")
    }),
    $(".section-faqs .panel-title").on("click", function() {
        $(".section-faqs .panel-title.active").not(this).removeClass("active"),
        $(this).toggleClass("active")
    }),
    $(".js-accordionBlog-title").on("click", function() {
        $(this).next().slideToggle(250),
        $(this).toggleClass("open", 250)
    })
}),
$(".offshore-company-comparison-page .selectpicker").on("shown.bs.select", function() {
    document.querySelector(".offshore-company-comparison-page #myModal").style.display = "none"
}),
$(".offshore-company-comparison-page #country").selectpicker({
    countSelectedText: function(t, e) {
        return $("#country option").length,
        "Country"
    }
}),
$(".offshore-company-comparison-page #commonly").selectpicker({
    countSelectedText: function(t, e) {
        return $("#commonly option").length,
        "Commonly used for"
    }
}),
$(".offshore-company-comparison-page #eu-list").selectpicker({
    countSelectedText: function(t, e) {
        return $("#eu-list option").length,
        "Eu-list"
    }
}),
$(".offshore-company-comparison-page #features .btn-compare").click(function(t) {
    t.preventDefault(),
    $(".nav-tabs .tab-features").hasClass("active") && ($(".nav-tabs .tab-features").removeClass("active"),
    $(".nav-tabs .tab-comparison").addClass("active")),
    $("html, body").animate({
        scrollTop: $(".nav-tabs").offset().top - 120
    }, 0)
}),
Object.assign || Object.defineProperty(Object, "assign", {
    enumerable: !1,
    configurable: !0,
    writable: !0,
    value: function(t) {
        if (null == t)
            throw new TypeError("Cannot convert first argument to object");
        for (var e = Object(t), a = 1; a < arguments.length; a++)
            if (null != (n = arguments[a]))
                for (var n = Object(n), i = Object.keys(Object(n)), r = 0, o = i.length; r < o; r++) {
                    var s = i[r]
                      , c = Object.getOwnPropertyDescriptor(n, s);
                    void 0 !== c && c.enumerable && (e[s] = n[s])
                }
        return e
    }
}),
Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
    enumerable: !1,
    value: function(e) {
        return 0 < this.filter(function(t) {
            return t == e
        }).length
    }
}),
String.prototype.includes || (String.prototype.includes = function(t, e) {
    return !((e = "number" != typeof e ? 0 : e) + t.length > this.length) && -1 !== this.indexOf(t, e)
}
),
$(document).ready(function() {
    $("#country, #countrymobile").on("click", function(t) {
        return $("body").toggleClass("is-open-location"),
        !1
    }),
    $("html").on("click", ".is-open-location", function(t) {
        $("body.is-open-location").removeClass("is-open-location")
    })
}),
$("#ebook-shortcode a.onclickGetEbook").on("click", function() {
    $("#getEbook").modal("show")
}),
$("#ebook-shortcode-offshore a.onclickGetEbook").on("click", function() {
    $("#getEbookOffshore").modal("show")
}),
$("#formEbookHK .btnGetEbookHK").on("click", function() {
    get_ebook_single()
}),
$("#formEbookOffshore .btnGetEbookOffshore").on("click", function() {
    get_ebook_offshore()
}),
$("#formEbookHK input[name=checkbox-ebook], #formEbookOffshore input[name=checkbox-ebook]").on("change", function() {
    $(this).is(":checked") ? ($(this).prop("value", "true"),
    $("#formEbookHK") && $("#formEbookHK").attr("data-id-form", 20),
    $("#formEbookOffshore") && $("#formEbookOffshore").attr("data-id-form", 21)) : ($(this).prop("value", "false"),
    $("#formEbookHK") && $("#formEbookHK").attr("data-id-form", 17),
    $("#formEbookOffshore") && $("#formEbookOffshore").attr("data-id-form", 23))
}),
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$("#onclickMailAcc").on("click", function() {
    $("#modal-bankAcc").modal("show")
}),
$("#btn-bankAcc").on("click", function() {
    sendMailSectionBankHK()
}),
$(document).ready(function() {
    $("#slct-country-banner").selectpicker("render");
    var t = $("select#slct-country-banner[name=slct-country-home]");
    t.selectpicker("deselectAll"),
    t.find("option[value='244']").remove(),
    t.find("li").remove(),
    t.selectpicker("refresh"),
    $(".count").each(function() {
        $(this).prop("Counter", 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4e3,
            easing: "swing",
            step: function(t) {
                $(this).text(Math.ceil(t))
            }
        })
    }),
    $(".slider").slick({
        dots: !0,
        infinite: !0,
        speed: 500,
        autoplay: !0,
        autoplaySpeed: 4e3,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
    }),
    $("#carousel-blog").slick({
        infinite: !0,
        slidesToShow: 1,
        autoplay: !0,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>'
    })
}),
$(document).ready(function() {
    $(window).scroll(function() {
        50 < window.pageYOffset ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse")
    }),
    $("#dynamic-select").bind("change", function() {
        var t = $(this).val();
        return "" != t && (window.location = t),
        !1
    }),
    null == localStorage.getItem("statusPopup") && localStorage.setItem("statusPopup", 0),
    0 == localStorage.getItem("statusPopup") ? $(".cookies").addClass("hide-popup") : $(".cookies").removeClass("hide-popup"),
    $("#comodo-icon > a").attr("rel", "nofollow")
}),
$(document).ready(function() {
    $("#make-payment-submit").on("click", function(t) {
        $("#form-payment-service"),
        $("#form-payment-service").validate({
            rules: {
                "your-name": "required",
                "your-email": "required",
                amount: {
                    required: !0,
                    min: "1"
                },
                "checkbox-payment-for[]": {
                    required: !0,
                    minlength: 1
                },
                payment: {
                    required: !0
                }
            },
            messages: {
                "your-name": "This field is required.",
                "your-email": "This field is required.",
                amount: {
                    required: "This field is required."
                },
                "checkbox-payment-for[]": "This field is required.",
                payment: "This field is required."
            },
            errorPlacement: function(t, e) {
                "checkbox-payment-for[]" == e.attr("name") || "radio" == e.attr("type") ? ("checkbox-payment-for[]" == e.attr("name") && t.appendTo("#errorToShow"),
                "radio" == e.attr("type") && t.appendTo("#errorToShowPayment")) : t.insertAfter(e)
            },
            submitHandler: function(t) {
                try {
                    var e, a = {
                        first_name: $("#form-payment-service input[name=your-name]").val(),
                        email: $("#form-payment-service input[name=your-email]").val(),
                        your_order: $("#form-payment-service input[name=your-order]").val(),
                        amount: $("#form-payment-service input[name=amount]").val(),
                        message: $("#form-payment-service textarea[name=your-message]").val(),
                        type_payment: $("#form-payment-service input:radio[name=payment]:checked").val(),
                        service: $("#form-payment-service input:checkbox:checked").map(function() {
                            return $(this).val()
                        }).get()
                    };
                    for (e in document.getElementById("loading-button").style.display = "inline-block",
                    document.getElementById("make-payment-submit").disabled = !0,
                    a)
                        Array.isArray(a[e]) || "" !== a[e].trim() || delete a[e];
                    switch (a.type_payment) {
                    case "Card":
                        $("#modal-paymentStripe").modal("show"),
                        paymentCard(1, a),
                        $("#modal-paymentStripe .close").on("click", function(t) {
                            document.getElementById("loading-button").style.display = "none",
                            document.getElementById("make-payment-submit").disabled = !1
                        });
                        break;
                    case "paypal":
                        $("#modal-paypalPayment").modal("show"),
                        $("#modal-paypalPayment .close").on("click", function(t) {
                            document.getElementById("make-payment-submit").disabled = !1,
                            document.querySelector("#form-payment-service #loading-button").style.display = "none"
                        }),
                        paymentPaypal(2, a)
                    }
                } catch (t) {
                    console.log(t)
                }
            }
        })
    })
}),
$("#countries .mega-menu-content").hover(function() {
    $(".menu-container-left li").hover(function() {
        id = $(this).attr("data-content"),
        $(".menu-container-left li").removeClass("active"),
        $(".".concat(id.replace("#", ""))).addClass("active"),
        $(".menu-container-right").removeClass("active"),
        $(id).addClass("active")
    }, function() {})
}, function() {
    $("#countries .menu-container-right").removeClass("active"),
    $(".menu-container-left li").removeClass("active"),
    $(".menu-container-left li").first().addClass("active"),
    $("#countries").find(".menu-container-right").first().addClass("active")
}),
$(window).scroll(function(t) {
    var e = $(document).height()
      , a = $(window).height()
      , n = $(".footer").height()
      , i = $(".content-blog").height()
      , r = $(".contentBlogRequest").height()
      , o = $(".section-blogDetail").height();
    n = 0 < o ? e - a - n - o - 150 : e - a - n - 150,
    r ? 3500 < r ? $(".indicator").addClass("dis-block") : $(".indicator").removeClass("dis-block") : 3500 < i ? $(".indicator").addClass("dis-block") : $(".indicator").removeClass("dis-block");
    i = $(window).scrollTop() / n * 100,
    n = $(window).scrollTop();
    n < 38 && ($(".header .mega-menu-content").css("top", 118 - n + "px"),
    0 === n ? $(".header .mega-menu-content.menu-top-collapse").css("top", "118px") : $(".header .mega-menu-content.menu-top-collapse").css("top", 60 - n + "px")),
    38 <= n ? ($(".mega-menu-content").addClass("menu-top-collapse"),
    $(".indicator").css("width", i + "%")) : ($(".mega-menu-content").removeClass("menu-top-collapse"),
    $(".indicator").css("width", "0%"))
}),
$(document).ready(function() {
    window.pageYOffset < 38 && ($(".header .mega-menu-content").css("top", 118 - scroll + "px"),
    $(".header .mega-menu-content.menu-top-collapse").css("top", 60 - scroll + "px")),
    38 <= window.pageYOffset ? ($(".mega-menu-content").addClass("menu-top-collapse"),
    $(".navbar-fixed-top").addClass("top-nav-collapse")) : ($(".mega-menu-content").removeClass("menu-top-collapse"),
    $(".navbar-fixed-top").removeClass("top-nav-collapse"))
});
var $menu = $("header");
function toggleHeader(t) {
    t.classList.toggle("change"),
    $menu.toggleClass("menu-mobile")
}
$(document).on("mouseup", function(t) {
    $menu.is(t.target) || 0 !== $menu.has(t.target).length || ($menu.removeClass("menu-mobile"),
    $(".nav-bar-container").removeClass("change"))
}),
$(document).ready(function() {
    $(".navbar-item .item-list").click(function(t) {
        $(".navbar-item li.active-item").not(this).removeClass("active-item"),
        $(this).toggleClass("active-item"),
        0 == $(".navbar-item li").hasClass("active-item") ? $(".navbar-fixed-top").removeClass("hover-header-item") : $(".navbar-fixed-top").addClass("hover-header-item"),
        $(".item-dropdown").not(this).children(".mega-menu-content").hide(),
        $(this).children(".mega-menu-content").toggle(),
        $("main, footer").click(function() {
            $(".navbar-fixed-top").removeClass("hover-header-item"),
            $(".navbar-item li").removeClass("active-item"),
            $(".mega-menu-content").hide()
        })
    })
}),
$("#name-generator .btn-search").on("click", function(t) {
    t.preventDefault();
    var t = $("#input").val()
      , a = $("#results")
      , t = StartupNameGenerator(t);
    a.html(""),
    t.forEach(function(t, e) {
        $('<a class="result-item" href="/onboarding/register">').html("<span>".concat(t, "</span>")).appendTo(a)
    })
});
var serviceEmpty = {
    id: -1,
    service_type_id: "",
    name: "",
    quantity: 1,
    price: 0
}, arrServiceChoose = [], arrCategory = [], arrService = [], data;
function onloadService() {
    try {
        var t = readParamUrl()
          , e = altFind(t, function(t) {
            return t.promotion_code
        })
          , a = altFind(t, function(t) {
            return t.signature
        });
        a && (urlParamOnboarding = "?signature=" + a.signature,
        e && (urlParamOnboarding += "&promotion_code=" + e.promotion_code));
        var n = localStorage.getItem("data_onboarding")
          , i = "/onboarding/incorporation-country" + urlParamOnboarding;
        null !== n && (n = JSON.parse(n)).country_id ? !n.Packages && $("#additionalService").length && (window.location.href = i) : $("#additionalService").length && (window.location.href = i),
        e ? $("#additionalService .btn-back__href").length && $("#additionalService .btn-back__href").attr("href", "/onboarding/incorporation-package" + urlParamOnboarding) : $("#additionalService .btn-back__href").length && $("#additionalService .btn-back__href").attr("href", "/onboarding/incorporation-package")
    } catch (t) {
        console.error()
    }
}
function createOrderCode() {
    var e = null
      , t = JSON.parse(localStorage.getItem("data_onboarding"));
    try {
        var a, n = [], i = 0 < (n = t.Services && 0 < t.Services.length ? t.Services.reduce(function(t, e) {
            var a = t.find(function(t) {
                return t && t.id === e.id
            });
            return a ? (a.quantity = a.quantity + e.quantity,
            _toConsumableArray(t)) : [].concat(_toConsumableArray(t), [_objectSpread({}, e)])
        }, []) : n).length ? n.map(function(t) {
            return {
                service_id: t.id,
                quantity: t.quantity
            }
        }) : [];
        1 < t.CompanyNames.length && (a = [],
        t.CompanyNames.map(function(t, e) {
            0 < e && a.push({
                name: t.name + " " + t.suffix
            })
        }));
        var r = {
            package_id: t.Packages.id,
            OrderItems: i,
            signature: localStorage.getItem("signature"),
            company_info: {
                name: t.CompanyNames[0].name,
                company_suffix_id: parseInt(t.CompanyNames[0].suffix_id) || void 0,
                entity_type_id: t.entity_type_id || void 0,
                country_id: t.country_id,
                preventive_name: JSON.stringify(a) || void 0
            }
        };
        $.ajax({
            async: !1,
            type: "POST",
            url: linkUrlOrderAPi + "/api/onboarding/order/incorp",
            data: JSON.stringify(r),
            contentType: "application/json",
            success: function(t) {
                t.data && (e = t.data)
            },
            error: function(t) {},
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function setTotalAndLocalStorage() {
    var t = arrServiceChoose.reduce(function(t, e) {
        return t + e.Fee.value * e.quantity
    }, 0);
    $("#totalServices span").text(parseUScurrency(t));
    t = _objectSpread(_objectSpread({}, t = JSON.parse(localStorage.getItem("data_onboarding"))), {}, {
        Services: arrServiceChoose
    });
    localStorage.setItem("data_onboarding", JSON.stringify(t))
}
function removeAllService() {
    $(".table-addServices .tableServices .tableBody").html(""),
    $(".notifications.d-none").removeClass("d-none"),
    arrServiceChoose = [],
    setTotalAndLocalStorage()
}
function onChangeCategory(t, e) {
    var a = parseInt(t.getAttribute("data-row-index"))
      , n = [];
    arrService.map(function(t) {
        parseInt(t.service_type_id) === parseInt(e) && n.push(t)
    });
    t = renderHTMLOptionService(n);
    $("#serviceItem" + a + " select.select-service").html(t),
    $("#serviceItem" + a + " select.select-service").selectpicker("refresh"),
    0 === n.length ? ($("#serviceItem" + a + " .price").html("0"),
    arrServiceChoose[a] = _objectSpread(_objectSpread({}, serviceEmpty), {}, {
        service_type_id: e,
        service_choose_id: arrServiceChoose[a].service_choose_id
    })) : ($("#serviceItem" + a + " .price").html(n[0].Fee.value),
    arrServiceChoose[a] = _objectSpread(_objectSpread({}, n[0]), {}, {
        service_choose_id: arrServiceChoose[a].service_choose_id
    })),
    $("#serviceItem" + a + " .quantity-content").text("01"),
    $("#serviceItem" + a + " .quantity .btn-delete").removeClass("d-none"),
    $("#serviceItem" + a + " .quantity .btn-minus").addClass("d-none"),
    setTotalAndLocalStorage()
}
function onChangeService(t, e) {
    var a = parseInt(t.getAttribute("data-row-index"));
    arrService.some(function(t) {
        if (parseInt(t.id) === parseInt(e))
            return $("#serviceItem" + a + " .price").html(t.Fee.value),
            arrServiceChoose[a] = _objectSpread(_objectSpread({}, t), {}, {
                service_choose_id: arrServiceChoose[a].service_choose_id
            }),
            !0
    }),
    $("#serviceItem" + a + " .quantity-content").text("01"),
    $("#serviceItem" + a + " .quantity .btn-delete").removeClass("d-none"),
    $("#serviceItem" + a + " .quantity .btn-minus").addClass("d-none"),
    setTotalAndLocalStorage()
}
function plusService(t) {
    try {
        var e = parseInt(t.getAttribute("data-row-index"))
          , a = parseInt(arrServiceChoose[e].quantity);
        1 === a && ($("#serviceItem" + e + " .quantity .btn-delete").addClass("d-none"),
        $("#serviceItem" + e + " .quantity .btn-minus").removeClass("d-none")),
        arrServiceChoose[e].quantity += 1,
        a = (a = arrServiceChoose[e].quantity) < 10 ? "0" + a : a,
        $("#serviceItem" + e + " .quantity-content").text(a),
        $("#serviceItem" + e + " .price").html(arrServiceChoose[e].Fee.value * arrServiceChoose[e].quantity)
    } catch (t) {
        console.log(t)
    }
    setTotalAndLocalStorage()
}
function minusService(t) {
    t = parseInt(t.getAttribute("data-row-index"));
    try {
        var e = arrServiceChoose[t].quantity;
        2 === e && ($("#serviceItem" + t + " .quantity .btn-delete").removeClass("d-none"),
        $("#serviceItem" + t + " .quantity .btn-minus").addClass("d-none")),
        --arrServiceChoose[t].quantity,
        e = (e = arrServiceChoose[t].quantity) < 10 ? "0" + e : e,
        $("#serviceItem" + t + " .quantity-content").text(e),
        $("#serviceItem" + t + " .price").html(arrServiceChoose[t].Fee.value * arrServiceChoose[t].quantity)
    } catch (t) {
        console.log(t)
    }
    setTotalAndLocalStorage()
}
function removeService(t) {
    t = parseInt(t.getAttribute("data-row-index"));
    try {
        arrServiceChoose.splice(t, 1),
        $("#serviceItem" + t).remove(),
        $(".tableBody .tableRow").each(function(t) {
            var e = "serviceItem" + t;
            $(this).attr("id", e),
            $(this).find("[data-row-index]").attr("data-row-index", t)
        })
    } catch (t) {
        console.log(t)
    }
    setTotalAndLocalStorage()
}
function renderHTMLOptionService(t) {
    var e = "";
    return 0 === t.length && (e = '<option value="-1">No service</option>'),
    0 < t.length && t.map(function(t) {
        e += '<option value="' + t.id + '">' + t.name + "</option>"
    }),
    e
}
function renderHTMLOptionServiceByCategoryID(t, e) {
    var a = "";
    return 0 === t.length && (a = '<option value="-1">No service</option>'),
    0 < t.length && t.map(function(t) {
        parseInt(t.service_type_id) === parseInt(e) && (a += '<option value="' + t.id + '">' + t.name + "</option>")
    }),
    a
}
function parseIntRemoveComma(t) {
    return parseInt(t.replace(/,/g, ""))
}
function parseFloatRemoveComma(t) {
    return parseFloat(t.replace(/,/g, ""))
}
function parseUScurrency(t) {
    return 0 < t ? t.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : "0.00"
}
$(function() {
    try {
        data = (data = localStorage.getItem("data_onboarding")) && JSON.parse(localStorage.getItem("data_onboarding")),
        $("#additionalService").length && data && data.Packages && (arrCategory = (arrCategory = data.Packages.PackageType.Services.map(function(t) {
            return t.ServiceType
        })).reduce(function(t, e) {
            return t.find(function(t) {
                return t && t.id === e.id
            }) ? _toConsumableArray(t) : [].concat(_toConsumableArray(t), [_objectSpread({}, e)])
        }, []),
        arrService = (arrService = data.Packages.PackageType.Services).map(function(t) {
            return _objectSpread(_objectSpread({}, t), {}, {
                quantity: 1
            })
        }))
    } catch (t) {
        console.log(t)
    }
    try {
        var a, n, i;
        $("#additionalService").length && data.Services && 0 < data.Services.length && ($(".notifications").length && $(".notifications").addClass("d-none"),
        i = n = a = "",
        data.Services.map(function(e, t) {
            arrCategory.map(function(t) {
                t.id == e.service_type_id ? n += '<option selected value="' + t.id + '">' + t.name + "</option>" : n += '<option value="' + t.id + '">' + t.name + "</option>"
            }),
            data.Services.map(function(t) {
                parseInt(t.service_type_id) === e.service_type_id && (t.id === e.id ? i += '<option selected value="' + t.id + '">' + t.name + "</option>" : i += '<option value="' + t.id + '">' + t.name + "</option>")
            });
            a += '\n\t\t\t\t<div id="serviceItem'.concat(t, '" class="dashed tableRow">\n\t\t\t\t\t<div class="tableCellGroup tableCellGroup1 stt">\n\t\t\t\t\t\t<p>') + (t + 1) + '</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tableCellGroup tableCellGroup2 border-tablet button-no__frame selectpicker-menu-fixed" onclick="selectDropdownPosition(this)">\n\t\t\t\t\t\t<select class="selectpicker suffix select-category" name="" data-live-search="true" data-dropup-auto="false" data-row-index="' + t + '"onchange=onChangeCategory(this,this.options[this.selectedIndex].value)>\n\t\t\t\t\t\t' + n + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tableCellGroup tableCellGroup3 border-tablet button-no__frame selectpicker-menu-fixed" onclick="selectDropdownPosition(this)">\n\t\t\t\t\t\t<select class="selectpicker suffix select-service" name="" data-live-search="true" data-dropup-auto="false" data-row-index="'.concat(t, '" onchange=onChangeService(this,this.options[this.selectedIndex].value)>\n\t\t\t\t\t\t') + i + '\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tableCellGroup tableCellGroup4">\n\t\t\t\t\t\t<div class="quantity">\n\t\t\t\t\t\t\t<button class="btn-delete ownStyle ownStyleDiff '.concat(1 < e.quantity && "d-none", '" type="button" data-row-index="').concat(t, '" onClick=removeService(this)>\n\t\t\t\t\t\t\t\t<span><svg class="iconBin">\n\t\t\t\t\t\t\t\t\t\t<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>\n\t\t\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t\t\t<button class="btn-minus ownStyle ownStyleDiff ').concat(1 == e.quantity && "d-none", '" type="button" data-row-index="').concat(t, '" onClick=minusService(this)>\n\t\t\t\t\t\t\t\t<span><svg class="iconMinus">\n\t\t\t\t\t\t\t\t\t\t<path d="M19 13H5v-2h14v2z"></path>\n\t\t\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t\t\t<div class="quantity-content">').concat(e.quantity < 9 ? "0" + e.quantity : e.quantity, '</div>\n\t\t\t\t\t\t\t<button class="btn-plus ownStyle" type="button" data-row-index="').concat(t, '" onClick=plusService(this)>\n\t\t\t\t\t\t\t\t<span><svg class="iconPlus">\n\t\t\t\t\t\t\t\t\t<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n\t\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="tableCellGroup tableCellGroup5 groupPrice"><sub>$US</sub>\n\t\t\t\t\t\t<div class="price">').concat(e.Fee.value * e.quantity, "</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t")
        }),
        $(".table-addServices .tableServices .tableBody").append(a),
        $(".selectpicker").selectpicker("refresh"),
        arrServiceChoose = data.Services,
        setTotalAndLocalStorage())
    } catch (t) {
        console.log(t)
    }
    $("#additionalService #btnRemove").on("click", function() {
        removeAllService()
    }),
    $("#additionalService .btn-skip").on("click", function() {
        removeAllService(),
        $("#additionalService .btn-apply").attr("disabled", !0),
        $("#additionalService .btn-skip").attr("disabled", !0);
        var t, e = createOrderCode();
        e ? (t = "?order_code=" + e,
        (e = altFind(readParamUrl(), function(t) {
            return t.promotion_code
        })) && (t += "&promotion_code=" + e.promotion_code),
        window.location.href = linkUrlOrder + "/onboarding/order-information" + t) : ($("#additionalService .btn-apply").attr("disabled", !1),
        $("#additionalService .btn-skip").attr("disabled", !1))
    }),
    $("#additionalService .btn-apply").on("click", function() {
        $("#additionalService .btn-apply").attr("disabled", !0),
        $("#additionalService .btn-skip").attr("disabled", !0);
        var t, e = createOrderCode();
        e ? (t = "?order_code=" + e,
        (e = altFind(readParamUrl(), function(t) {
            return t.promotion_code
        })) && (t += "&promotion_code=" + e.promotion_code),
        window.location.href = linkUrlOrder + "/onboarding/order-information" + t) : ($("#additionalService .btn-apply").attr("disabled", !1),
        $("#additionalService .btn-skip").attr("disabled", !1))
    }),
    $("#additionalService #btnAdd").on("click", function() {
        try {
            $(".notifications").length && $(".notifications").addClass("d-none");
            var t = $(".table-addServices .tableServices .tableBody .tableRow").length
              , e = "";
            arrCategory.map(function(t) {
                e += '<option value="' + t.id + '">' + t.name + "</option>"
            });
            var a = renderHTMLOptionServiceByCategoryID(arrService, arrCategory[0].id)
              , n = '\n\t\t\t<div id="serviceItem' + t + '" class="dashed tableRow">\n\t\t\t\t<div class="tableCellGroup tableCellGroup1 stt">\n\t\t\t\t\t<p>' + (t + 1) + '</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="tableCellGroup tableCellGroup2 border-tablet button-no__frame selectpicker-menu-fixed" onclick="selectDropdownPosition(this)">\n\t\t\t\t\t<select class="selectpicker suffix select-category" name="" data-live-search="true" data-dropup-auto="false" data-row-index="' + t + '"onchange=onChangeCategory(this,this.options[this.selectedIndex].value)>\n\t\t\t\t\t' + e + '\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="tableCellGroup tableCellGroup3 border-tablet button-no__frame selectpicker-menu-fixed" onclick="selectDropdownPosition(this)">\n\t\t\t\t\t<select class="selectpicker suffix select-service" name="" data-live-search="true" data-dropup-auto="false" data-row-index="' + t + '" onchange=onChangeService(this,this.options[this.selectedIndex].value)>\n\t\t\t\t\t' + a + '\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class="tableCellGroup tableCellGroup4">\n\t\t\t\t\t<div class="quantity">\n\t\t\t\t\t\t<button class="btn-delete ownStyle ownStyleDiff" type="button" data-row-index="' + t + '" onClick=removeService(this)>\n\t\t\t\t\t\t\t<span><svg class="iconBin">\n\t\t\t\t\t\t\t\t\t<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>\n\t\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t\t<button class="btn-minus ownStyle ownStyleDiff d-none" type="button" data-row-index="' + t + '" onClick=minusService(this)>\n\t\t\t\t\t\t\t<span><svg class="iconMinus">\n\t\t\t\t\t\t\t\t\t<path d="M19 13H5v-2h14v2z"></path>\n\t\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t\t<div class="quantity-content">01</div>\n\t\t\t\t\t\t<button class="btn-plus ownStyle" type="button" data-row-index="' + t + '" onClick=plusService(this)>\n\t\t\t\t\t\t\t<span><svg class="iconPlus">\n\t\t\t\t\t\t\t\t<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>\n\t\t\t\t\t\t\t</svg></span></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="tableCellGroup tableCellGroup5 groupPrice"><sub>$US</sub>\n\t\t\t\t\t<div class="price">' + arrService[0].Fee.value + "</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t";
            $(".table-addServices .tableServices .tableBody").append(n),
            $(".selectpicker").selectpicker("refresh"),
            arrServiceChoose.push(_objectSpread(_objectSpread({}, arrService[0]), {}, {
                service_choose_id: Date.now()
            })),
            setTotalAndLocalStorage()
        } catch (t) {
            console.log(t)
        }
    })
});
var onboardingCountry = "";
function activeSliderIncorpCountry() {
    $(".slider-tab #sliderCountry").slick({
        infinite: !0,
        dots: !0,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        rows: 2,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    })
}
function loadCountry() {
    var e = null;
    try {
        $.ajax({
            async: !1,
            type: "GET",
            url: linkUrlOrderAPi + "/api/onboarding/country/entity_suffix",
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.data && (e = t.data)
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function chooseCountry(t, e, a, n) {
    localStorage.setItem("entity_type_count", a);
    try {
        var i, r = localStorage.getItem("data_onboarding");
        1 < a && (n = null),
        i = r ? ((i = JSON.parse(r)).CompanyNames && (i = _objectSpread(_objectSpread({}, i), {}, {
            CompanyNames: null
        })),
        _objectSpread(_objectSpread({}, i), {}, {
            country_id: e,
            entity_type_id: n,
            Packages: null,
            Services: null
        })) : {
            country_id: e,
            entity_type_id: n
        },
        localStorage.setItem("data_onboarding", JSON.stringify(i)),
        putApiOrderClient({
            company_country_id: e,
            entity_type_id: n
        }) && (window.location.href = 2 == a ? linkUrlOrder + "/onboarding/incorporation-company-type" + urlParamOnboarding : linkUrlOrder + "/onboarding/incorporation-entity-name-check" + urlParamOnboarding)
    } catch (t) {
        console.log(t)
    }
}
function renderHTMLCountryList(t) {
    var e = "";
    return t.map(function(t) {
        null != t.country_code && (e += '\n\t\t\t\t<div class="col-lg-4 col-md-6 col-xs-6">\n\t\t\t\t\t<div class="item-country item-country-hover" data-entity-type="' + t.EntityTypes.length + '" data-country-id="' + t.id + '" onclick="chooseCountry(this,' + t.id + "," + t.EntityTypes.length + "," + t.EntityTypes[0].id + ')">\n\t\t\t\t\t<div class="content-left"><i class="flag-icon flag-icon-squared flag-icon-' + t.country_code.toLowerCase() + '"></i></div>\n\t\t\t\t\t\t<div class="content-right">\n\t\t\t\t\t\t\t<div class="vertical-center">\n\t\t\t\t\t\t\t\t<p class="title">' + t.name + "</p>\n\t\t\t\t\t\t\t\t" + renderHTMLEntityTypesContent(t.EntityTypes) + "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t")
    }),
    e
}
function renderHTMLEntityTypesContent(t) {
    var e = "";
    return t && 0 < t.length && t.map(function(t) {
        e += '<p class="des">' + t.name + "</p>"
    }),
    e
}
function renderHTMLCompanyType(e) {
    var a = "";
    return onboardingCountry.some(function(t) {
        if (parseInt(t.id) === parseInt(e))
            return $("#sectionCompanyType .complementary").text(t.name),
            t.EntityTypes.map(function(t) {
                a += '\n\t\t\t\t<div class="item-country dis-flex item-hover-simple" onclick="chooseEntityType(' + t.id + ')">\n\t\t\t\t\t<div class="content-left"><img src="/images/onboarding/building.png" alt=""></div>\n\t\t\t\t\t<div class="content-right">\n\t\t\t\t\t<p class="name">' + t.name + "</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>"
            }),
            $("#sectionCompanyType .company-type").html(a),
            !0
    }),
    a
}
function chooseEntityType(t) {
    var e = JSON.parse(localStorage.getItem("data_onboarding"));
    e.CompanyNames && (e = _objectSpread(_objectSpread({}, e), {}, {
        CompanyNames: null
    }),
    localStorage.setItem("data_onboarding", JSON.stringify(e))),
    e = _objectSpread(_objectSpread({}, e), {}, {
        entity_type_id: t,
        Packages: null,
        Services: null
    }),
    localStorage.setItem("data_onboarding", JSON.stringify(e)),
    putApiOrderClient({
        company_country_id: e.country_id,
        entity_type_id: t
    }) && (window.location.href = linkUrlOrder + "/onboarding/incorporation-entity-name-check" + urlParamOnboarding)
}
function loadCountryIncorporation() {
    try {
        onloadRedirect(),
        altFind(readParamUrl(), function(t) {
            return t.promotion_code
        }) ? $("#back-incorporation-country a").length && document.querySelector("#back-incorporation-country a").setAttribute("href", "/onboarding/select-service" + urlParamOnboarding) : $("#back-incorporation-country a").length && document.querySelector("#back-incorporation-country a").setAttribute("href", "/onboarding/select-service")
    } catch (t) {
        console.error()
    }
    onloadTableFeatureOffshore()
}
function loadCompanyTypeIncorporation() {
    try {
        onloadRedirect(),
        altFind(readParamUrl(), function(t) {
            return t.promotion_code
        }) ? $("#back-incorporation-companyType a").length && document.querySelector("#back-incorporation-companyType a").setAttribute("href", "/onboarding/incorporation-country" + urlParamOnboarding) : $("#back-incorporation-companyType a").length && document.querySelector("#back-incorporation-companyType a").setAttribute("href", "/onboarding/incorporation-country")
    } catch (t) {
        console.error()
    }
}
function onloadEntityNameCheck() {
    try {
        if (onloadRedirect(),
        altFind(readParamUrl(), function(t) {
            return t.promotion_code
        }) ? $("#entityNameCheck .btn-back").length && $("#entityNameCheck .btn-back").attr("href", "/onboarding/incorporation-country" + urlParamOnboarding) : $("#entityNameCheck .btn-back").length && $("#entityNameCheck .btn-back").attr("href", "/onboarding/incorporation-country"),
        generateSideBar(),
        $("#entityNameCheck").length) {
            var e = JSON.parse(localStorage.getItem("data_onboarding"));
            try {
                237 === parseInt(e.country_id) && (alowApplyNameUK = !1);
                var t = Date.now();
                if ($("#entityNameCheck .name-first").length && $("#entityNameCheck .name-first").attr("data-id", t),
                onboardingCountry && onboardingCountry.some(function(t) {
                    if (t.id === parseInt(e.country_id))
                        return $("#entityNameCheck #country").text(t.name),
                        e.entity_type_id && t.EntityTypes.map(function(t) {
                            parseInt(t.id) === parseInt(e.entity_type_id) && ($("#entityNameCheck #companyType").text(t.name),
                            $("#entityNameCheck .name-first select.suffix").html(""),
                            t.CompanySuffixes.map(function(t) {
                                CompanySuffixes.push(t);
                                var e = document.createElement("option");
                                e.setAttribute("value", t.id),
                                e.innerHTML = t.name,
                                document.querySelector("#entityNameCheck .name-first select.suffix").appendChild(e)
                            }),
                            $("#entityNameCheck .name-first .suffix").selectpicker("refresh"))
                        }),
                        !0
                }),
                e.CompanyNames && 0 < e.CompanyNames.length)
                    try {
                        if (alowApplyNameUK = !0,
                        $("#entityNameCheck .btn-apply").attr("disabled", !1),
                        $("#entityNameCheck .name-first").attr("data-id", parseInt(e.CompanyNames[0].id)),
                        $("#entityNameCheck .name-first .inp-company-name").val(e.CompanyNames[0].name),
                        $("#entityNameCheck .name-first .suffix").val(e.CompanyNames[0].suffix_id),
                        arrCompanyNameOrder = e.CompanyNames,
                        1 < e.CompanyNames.length) {
                            for (var a = "", n = 1; n < e.CompanyNames.length; n++) {
                                var i = e.CompanyNames[n];
                                a += '\n\t\t\t\t\t\t\t\t\t<div class="company-name-item" data-id="'.concat(i.id, '">\n\t\t\t\t\t\t\t\t\t\t<div class="dis-flex company-name-control row">\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-7 col-xs-7">\n\t\t\t\t\t\t\t\t\t\t\t\t<input class="inp-company-name inp-company-name form-control form-obd" type="text" name="company-name" value="').concat(i.name, '" size="40" required="" placeholder="Company name" onkeyup="onkeyupInputCompanyName(this)" onchange="debounce(onchangeInputCompanyName(this),1000)"/>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="message"></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="col-md-5 col-xs-5">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class="form-group select-incorporation">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<select class="selectpicker suffix" name="" data-live-search="true" data-dropup-auto="false" onchange="onchangeSelectSuffix(this,this.options[this.selectedIndex].value, this.options[this.selectedIndex].text)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t') + renderHTMLSuffixOption(i.suffix_id) + '\n\t\t\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class="wrap-btn">\n\t\t\t\t\t\t\t\t\t\t\t\t<button class="btn-deleted ownStyle" type="button" onclick="deleteName(this)">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class="fas fa-minus-circle"></i>\n\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class="recommend dis-flex d-none">\n\t\t\t\t\t\t\t\t\t\t\t<p>Name hints:</p>\n\t\t\t\t\t\t\t\t\t\t\t<ul class="recommend-list"></ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>'
                            }
                            $("#entityNameCheck .wrap-company-name-order").append(a),
                            $(".selectpicker").selectpicker("refresh"),
                            checkNameCount(arrCompanyNameOrder.length)
                        }
                    } catch (t) {}
                else
                    arrCompanyNameOrder[0] = {
                        id: t,
                        suffix: 0 < CompanySuffixes.length ? CompanySuffixes[0].name : "",
                        suffix_id: 0 < CompanySuffixes.length ? CompanySuffixes[0].id : null,
                        isValid: !0
                    }
            } catch (t) {
                console.log(t)
            }
        }
    } catch (t) {
        console.error()
    }
}
$(".load-data-country").length && (onboardingCountry = loadCountry(),
onboardingCountry = onboardingCountry.sort(function(t, e) {
    return t.name.localeCompare(e.name)
})),
$(function() {
    var t, e;
    $("#sectionCountry .slider-tab #sliderCountry").length && ($(".slider-tab #sliderCountry").html(""),
    t = onboardingCountry && onboardingCountry.length && renderHTMLCountryList(onboardingCountry.filter(function(t) {
        return 111 != t.id
    })),
    $(".slider-tab #sliderCountry").html(t),
    activeSliderIncorpCountry()),
    $("#sectionCountry select.select-country").length && (e = "\n\t\t\t<option value=\"\" title='Search country here'>All</option>\n\t\t",
    onboardingCountry && onboardingCountry.length && onboardingCountry.filter(function(t) {
        return 111 != t.id
    }).map(function(t) {
        e += '<option value="'.concat(t.id, '">').concat(t.name, "</option>")
    }),
    $("#sectionCountry select.select-country").html(e)),
    $("#sectionCountry .select-country").on("change", function() {
        var t, e, a, n, i = this;
        try {
            "" == $(this).val() ? ($(".slider-tab #sliderCountry").html(""),
            $("#sectionCountry .slider-tab #sliderCountry").removeClass("slick-initialized slick-slider slick-dotted"),
            $("#sectionCountry .slider-tab #sliderCountry").css({
                display: "",
                "margin-left": ""
            }),
            t = onboardingCountry && onboardingCountry.length && renderHTMLCountryList(onboardingCountry.filter(function(t) {
                return 111 != t.id
            })),
            $(".slider-tab #sliderCountry").html(t),
            activeSliderIncorpCountry()) : 0 < (e = onboardingCountry && onboardingCountry.filter(function(t) {
                return t.id == $(i).val()
            })).length && (a = e[0],
            $("#sectionCountry .slider-tab #sliderCountry").html(""),
            $("#sectionCountry .slider-tab #sliderCountry").removeClass("slick-initialized slick-slider slick-dotted"),
            $("#sectionCountry .slider-tab #sliderCountry").css({
                display: "block",
                "margin-left": ""
            }),
            null != a.country_code && (n = '\n\t\t\t\t\t\t\t<div class="col-lg-4 col-md-6 col-xs-6">\n\t\t\t\t\t\t\t\t<div class="item-country item-country-hover" data-entity-type="' + a.EntityTypes.length + '" data-country-id="' + a.id + '" onclick="chooseCountry(this,' + a.id + "," + a.EntityTypes.length + "," + a.EntityTypes[0].id + ')">\n\t\t\t\t\t\t\t\t<div class="content-left"><i class="flag-icon flag-icon-squared flag-icon-' + a.country_code.toLowerCase() + '"></i></div>\n\t\t\t\t\t\t\t\t\t<div class="content-right">\n\t\t\t\t\t\t\t\t\t\t<div class="vertical-center">\n\t\t\t\t\t\t\t\t\t\t\t<p class="title">' + a.name + "</p>\n\t\t\t\t\t\t\t\t\t\t\t" + renderHTMLEntityTypesContent(a.EntityTypes) + "\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t",
            $("#sectionCountry .slider-tab #sliderCountry").html(n)))
        } catch (t) {
            console.log(t)
        }
    })
}),
$(function() {
    $("#sectionCompanyType").length && renderHTMLCompanyType(JSON.parse(localStorage.getItem("data_onboarding")).country_id)
}),
$(function() {
    var t;
    $("#sectionCompanyType").length && (t = JSON.parse(localStorage.getItem("data_onboarding")),
    250 === parseInt(t.country_id) ? $("#sectionCompanyType .btn-compare").attr("data-target", "#compareCompanyTypeDelaware") : 237 === parseInt(t.country_id) && $("#sectionCompanyType .btn-compare").attr("data-target", "#compareCompanyTypeUK"))
});
var NameRestricted = [{
    id: 191,
    NameRestricted: ["architect", "Real Estate Agent", "Real Estate Agency", "spot commodity trading", "rubber", "Military", "Defence", "school", "learning centre", "education centre", "training centre", "Academy", "College", "Institute", "Institution", "University", "National", "Singapore", "Association of Southeast Asian Nations", "ASEAN", "Law", "Legal", "Counsel", "Chamber", "Advocate", "Solicitor", "Law Corporation", "LLC", "Bank", "banking", "banque", "banco", "Bancaire", "Banca", "Banche", "Finance Company", "Finance", "Futures Exchange", "Clearing House", "Securities Exchange", "stock exchange", "clearing corporation", "clearing organisation", "Professional Engineering", "Professional Engineers", "PE", "Merlion", "Accountancy", "Accounting", "Audit", "hospital", "medical clinic", "medical centre", "dental clinic", "dental centre", "surgery", "medical laboratory", "clinical laboratory", "healthcare establishment", "Co-op", "Co-operative", "temasek"]
}, {
    id: 98,
    NameRestricted: ["Department", "Government", "Commission", "Bureau", "Federation", "Council", "Authority", "Building Society", "Chamber of Commerce", "Cooperative", "Kaifong", "Mass Transit", "Municipal", "Savings", "Tourist Association", "Trust", "Trustee", "Underground Railway", "Bank", "Stock Exchange", "Unified Exchange", "certified public accountant (practising)", "public accountant", "CPA (practising)", "PA"]
}, {
    id: 58,
    NameRestricted: ["National", "International", "Republic", "European Union", "Europe", "Euro", "co-operative", "municipal", "privileged", "recognised", "bank", "savings bank", "credit institution", "cooperative credit institution", "university", "polytechnic", "school", "academy", "college", "insurance company", "reinsurance company", "casino", "radio", "television", "Payment Institution", "Electronic Money Institution", "e-money", "Bureau de Change", "Exchange", "Fixed Capital Investment Company", "F.C.I.C.", "Variable Capital Investment Company", "V.C.I.C.", "Alternative Investment Fund", "AIF", "Alternative Investment Fund with Limited Number of Persons", "AIF with Limited Number of Persons", "AIFLNP", "Registered Alternative Investment Fund", "RAIF"]
}, {
    id: 236,
    NameRestricted: ["Accredited", "Adjudicator", "Ajman", "Al Ain", "Annuity", "Anonyme", "Arab", "Arbitrage", "Association", "Assurance", "Assurer", "Authorized Representative", "Banc", "Banco", "Bancorp", "Bank", "Banker", "Bankrupt", "Bankruptcy", "Banque", "Betting", "Bingo", "Building Society", "Bureau", "Captive", "Casualty", "Chamber of Commerce", "Change", "Charity / Charitable", "Chartered", "Church", "College", "Commission", "Companies Registry", "Cooperative", "Cooperative Society", "Council", "Credit", "Currency", "Decree", "Dubai", "e-bank", "E-change", "e-commerce", "e-gaming", "Emirate/s", "e-savings", "Exchange", "Federation", "Fidelity", "Fiduciaire", "Fiduciare", "Fiduciary", "Financing", "Financing Business", "Forex", "Foundation", "Fujairah", "Fund", "Funding", "Gambling", "Gaming", "Government", "Governor", "Guarantee", "Guaranteed", "Gulf", "Hedge", "Hedge Fund", "HMS", "i-bank", "IBC", "ICC", "i-financing", "i-fund", "i-gaming", "i-insurance", "i-investment", "i-money services", "Indemnity", "Insolvency", "Insolvent", "Inspectorate", "Insurance", "Insurer", "Int", "Intl", "i-trust", "Khalifa", "Law", "Lease", "Leasing", "Life", "Limited Partnership", "Liquidation", "Liquidator", "LLC", "LLP", "Loan", "Lottery", "LP", "Money", "Money Services", "Mutual", "Mutual Fund", "National", "NTL", "Official Liquidator", "Official Receiver", "Official Trustee", "Partnership", "Pharmacy", "Protected Cell", "Provident", "Qasimi", "RAK", "RAK ICC", "Ras Al Khaimah", "Reassurance", "Reassurer", "Receiver", "Receivership", "Registrar", "Registry", "Regulator", "Reinsurance", "Re-insurance", "Reinsurer", "Risk", "Saving", "Savings and Loans", "School", "Sharjah", "Sheik", "Sovereign", "Surety", "Transmission", "Tribunal", "Trust", "Trust Company", "Trust Corporation", "Trustee", "Trustee Company", "UAE", "Um Al Quwain", "Underwrite", "Underwriter", "Underwriting", "United", "United Arab Emirates", "University", "Zayed"]
}, {
    id: 8,
    NameRestricted: ["Assurance", "Assurance Broker", "Assurer", "Authority", "Banc", "Banca", "Bancaria", "Bancaire", "Bancario", "Banco", "Bancomer", "Bancorp", "Bancos", "Bangko", "Bank", "Banka", "Bankas", "Bankasi", "Banke", "Banken", "Banker", "Bankhaus", "Banki", "Bankiers", "Banking", "Bankin'ny", "Bankirsky", "Bankos", "Bankverein", "Banky", "Banque", "Banquier", "Banquiers", "Betting", "British", "Building Society", "Chamber of Commerce", "Charity", "Charitable", "Co-operative", "Co-op", "Credit", "Creditbank", "Credit Union", "Creditanstalt", "Credito", "Discontobank", "European", "Friendly Society", "Fiduciary", "Foundation", "Fund", "Gaming", "Gennossenschaftsbank", "Girobank", "Girozentrale", "Government", "Great Britain", "Handelsbank", "Hypothekenbank", "Indemnity", "Insurance", "Insurance Broker", "Insurer", "Iraq", "Iraqi", "Kantonalbank", "King", "Kontrolbank", "Kretit", "Kredietbank", "Landesbank", "Libya", "Libyan", "Lottery", "Lotto", "Majesty", "Mutual", "Nationalbank", "Pankki", "Patent", "Patent Office", "Police", "Post Office", "Prince", "Princess", "Privatbank", "Queen", "Raiffeisenbank", "Re-assurance", "Re-assurance Broker", "Re-assurer", "Red Cross", "Re-insurance", "Re-insurance Broker", "Re-insurer", "Royal", "Royale", "Royalty", "Sparbank", "Stock Exchange", "Trade Union", "Trust", "Underwriter", "Vereinsbank", "Volksbank", "Windsor"]
}, {
    id: 17,
    NameRestricted: ["Assurance", "Bank", "Building Society", "Chamber of Commerce", "Chartered", "Cooperative", "Imperial", "Insurance", "Municipal", "Royal", "Trust"]
}, {
    id: 23,
    NameRestricted: ["Building", "Society", "Chamber of Commerce", "Chartered", "Cooperative", "Imperial", "Monarchy", "Municipal", "Royal", "Academy", "AssetManagement", "Assurance", "Bank", "Brokerage", "CreditUnion", "Education", "Fiduciary", "Financial", "Foreign Exchange", "Forex", "Fund", "InvestmentManagement", "Insurance", "Lending", "Securities", "Trust", "University", ".com", ".org", ".net", ".bz"]
}, {
    id: 32,
    NameRestricted: ["Adjuster", "Ahorra", "Annuity", "Anonima", "Anonyme", "Arbitrage", "Asset Management", "Association", "Assurance", "Assurer", "Authorised Representative", "Banc", "Banco", "Bancorp", "Bank", "Banker", "Bankrupt", "Bankruptcy", "Banque", "Belegginsfonds", "(Belegginsfonds)", "Betting", "Bingo", "British", "Broker", "Brokerage", "Building Society", "Bureau", "Caja", "Capital Markets", "Captive", "Casualty", "Chamber of Commerce", "Change", "Chartered", "Church", "College", "Companies Registry", "Company Registry", "Cooperative", "Cooperative Society", "Credit", "Critical Illness", "Crown", "Currency", "Deposit", "E-change", "Exchange", "e-bank", "e-commerce", "e-Financing", "e-Fund", "e-gaming", "e-Insurance", "e-Investment", "e-money", "e-Money Services", "e-savings", "e-Trust", "Extended Coverage", "Extended Warranty", "Fidelity", "Fiduciaire", "Fiduciare", "Fiduciary", "Financing", "Financing Business", "Fondo", "Fondos Mutude", "Fondos Mutuds", "Fondos Mutuos", "Foreign Exchange", "Foreign Insurer", "Forex", "Foundation", "Fund", "Funding", "FX", "Gambling", "Gaming", "Geldmittl", "Government", "Governor", "Guarantee", "Guaranteed", "Hedge", "Hedge Fund", "HMS", "IBC", "Imperial", "Indemnity", "Insolvency", "Insolvent", "Insurance", "Insured", "Insurer", "Insurance Agent", "Insurance Broker", "Insurance Brokerage", "Insurance Consultant", "Insurance Manager", "Intermediary", "Island", "i-bank", "i-financing", "i-Forex", "i-fund", "i-gaming", "i-insurance", "i-investment", "i-Money", "i-Money Services", "i-Securities", "i-Trust", "Law", "Lease", "Leasing", "Liability", "Life", "Life and Health", "Limited Partnership", "Liquidation", "Liquidator", "Litigation Insurance", "LLC", "LLP", "Lloyds", "Loan", "Loss Adjuster", "Lottery", "LP", "Majesty", "Malpractice", "Money", "Money Services", "Mutual", "Mutual Fund", "Official Liquidator", "Official Receiver", "Official Trustee", "Partnership", "Permanent Health", "Pharmacy", "Portfolio", "Property and Casualty", "Protected Cells", "Provident", "Prudential", "Reassured", "Reassurer", "Receiver", "Receivership", "Registry", "Registered Agent", "Reinsurance", "Reinsured", "Reinsurer", "Re-assured", "Re-Assurer", "Re-insurance", "Risk", "Royal", "Saving", "Savings and Loans", "School", "Securities", "Sovereign", "Surety", "Suretyship", "Third Party Administrator", "Transmission", "Trust", "Trust Company", "Trust Corporation", "Trustee", "Trustee Company", "Underwrite", "Underwriter", "Underwriting", "University"]
}, {
    id: 41,
    NameRestricted: ["Chamber of Commerce", "building society", "Limited Duration Company", "LDC", "Special Economic Zone Company", "SEZC", "royal", "imperial", "empire", "municipal", "chartered", "co-operative", "assurance", "bank", "insurance", "gaming", "lottery"]
}, {
    id: 139,
    NameRestricted: ["Authority", "Corporation", "Government", "Mauritius", "National", "President", "Presidential", "Regional", "Republic", "State", "Municipal", "Chartered", "co-operative", "Chamber of Commerce"]
}, {
    id: 189,
    NameRestricted: ["Bank", "Building Society", "Chartered", "Cooperative", "Credit Union", "Government", "Licensing", "Municipal", "Parliament", "Police", "Royal", "Tribunal", "Stock Exchange", "Airline", "Assurance", "Bitcoin", "Bureau de Change", "Casino", "Charity", "College", "Council", "Foundation", "Fund", "Gambling", "Gaming", "Hospital", "Insurance", "Insurer", "Lottery", "Military", "Mutual Fund", "Pharmacy", "Polytechnic", "Reinsurance", "School", "Securities", "Seychelles", "Sovereign", "State", "Trust", "Trustee", "Union", "University"]
}, {
    id: 205,
    NameRestricted: ["Annuity", "Assurance", "Assurer", "Bronze", "Captive", "Casualty", "Charitable", "Charity", "Charter", "FDN", "Fiduciary", "Finance", "Financial", "Foundation", "Fund", "Funding", "Gold", "Guarantee", "Guaranteed", "Hedge", "Hedge Fund", "Indemnity", "Insurance", "Insurer", "Life", "Mutual", "Mutual Fund", "Nevis", "Prudential", "Queen", "Reassurance", "Reassurer", "Reinsurance", "Reinsurer", "Risk", "Risk Management", "Royal", "Silver", "Surety", "Trade", "Trust Company", "Trust Corporation", "Trustee", "Trustee Company", "Underwrite", "Underwriter", "Underwriting", "‘Precious Metals and Stones’", "Association", "Authority", "Banc", "Banco", "Bancorp", "Bancshare", "Bank", "Banker", "Banque", "Betting", "Broker", "Brokerage", "Building Society", "Bureau", "Casino", "Cash", "Change", "Church", "College", "Cooperative", "Cooperative Society", "Council", "Credit", "Credit Union", "Crown", "Companies Registry", "Company Registry", "Commission", "Currency", "Deposit", "Depository", "E - Commerce", "Exchange", "Equities", "Federation", "Foreign Exchange", "Forex", "FX", "Gambling", "Gaming", "God", "Government", "Governor", "HMS", "Institution", "Lending", "Loan", "Lotto", "Lottery", "Majesty", "Ministry", "Monetary", "Money", "Moneymaker", "Money Services", "Mortgage", "Municipal", "National", "Offshore", "Onshore", "Parliament", "Partnership", "Payment", "Police", "Register", "Registered", "Registrar", "Regulator", "Regulatory", "Savings", "Scheme", "School", "Secured", "Securities", "Sovereign", "St.Christopher", "St.Christopher and Nevis", "St.Kitts", "St.Kitts and Nevis", "Treasurer", "Treasury", "University"]
}, {
    id: 237,
    NameRestricted: ["Accounts Commission", "Accounts Commission For Scotland", "Accredit", "Accreditation", "Accredited", "Accrediting", "Adjudicator", "Alba", "Albannach", "Archwilydd Cyffredinol Cymru", "Association", "Assurance", "Assurer", "Audit Commission", "Audit Office", "Audit Scotland", "Audit Wales", "Auditor General", "Auditor General For Northern Ireland", "Auditor General For Scotland", "Auditor General For Wales", "Bana-Phrionnsa", "Bana-Prionnsaichean", "Banc", "Bank", "Banking", "Banrigrean", "Benevolent", "Bhanrigh", "Bhanrighrean", "Bhreatainn", "Bhreatanaich", "Breatainn", "Breatannach", "Breatannaich", "Brenhines", "Brenhiniaeth", "Brenhinol", "Brenin", "Brifysgol", "Britain", "British", "Brydain", "Brydeinig", "Charitable", "Charitable Trust", "Charity", "Charter", "Chartered", "Chartered Accountant", "Chartered Certified Accountant", "Chartered Management Accountant", "Chartered Secretary", "Chartered Surveyor", "Child Maintenance", "Child Support", "Choimisean", "Choimisein", "Chomhairle", "Chomhairlean", "Chomisiwn", "Chymraeg", "Chymreig ", "Chymru", "Chyngor", "Coimisean", "Coimisein", "Comhairle", "Comhairlean", "Comisiwn", "Comisiwn Cynulliad Cenedlaethol Cymru", "Comisiwn Y Senedd", "Commission", "Community Benefit Society", "Comptroller And Auditor General", "Comptroller And Auditor General For Northern Ireland", "Co-Operative", "Council", "Cymraeg", "Cymreig", "Cymru", "Cyngor", "Cynulliad Cenedlaethol Cymru", "Ddug", "Dduges", "Dental", "Dental Surgeon", "Dentist", "Dentistry", "Deyrnas Gyfunol", "Deyrnas Unedig", "Duchess", "Dug", "Duges", "Duke", "Dywysog", "Dywysoges", "Ei Fawrhydi", "Ei Mawrhydi", "England", "English", "Family Trust", "Federation", "Financial Conduct Authority", "Financial Reporting Council", "Financial Reporting Review Panel", "Foundation", "Frenhines", "Frenhiniaeth", "Frenhinol", "Frenin", "Friendly Society", "Fund", "Gomisiwn", "Gwasanaeth Iechyd", "Gymraeg", "Gymreig", "Gymru", "Gyngor", "Health And Safety Executive", "Health And Social Care Board", "Health Centre", "Health Service", "Health Visitor", "Her Majesty", "His Majesty", "H-Oilthighean", "House Of Commons", "House Of Lords", "Hpss", "Hsc", "Inspectorate", "Institute", "Institution", "Insurance", "Insurer", "Investment Trust", "Judicial Appointment", "King", "Law Commission", "Llywodraeth", "Lywodraeth", "Medical Centre", "Midwife", "Midwifery", "Mutual", "National Assembly For Wales", "National Assembly For Wales Commission", "National Audit Office", "Nghymru", "Nhs", "Northern Ireland", "Northern Ireland Assembly", "Northern Ireland Assembly Commission", "Northern Ireland Audit Office", "Northern Ireland Executive", "Northern Irish", "Nurse", "Nursing", "O Prydain", "O Prydain Maw", "Of Britain", "Of England", "Of Great Britain", "Of Northern Ireland", "Of Wales", "Oilthigh", "Oilthighean", "Ombudsman", "Ombwdsmon", "Parlamaid", "Parlamaidean", "Parliament", "Parliamentarian", "Parliamentary", "Patent", "Patentee", "Pharlamaid", "Phrifysgol", "Phrionnsa", "Phrionnsaichean", "Phrydain", "Phrydeinig", "Police", "Polytechnic", "Post Office", "Prifysgol", "Prince", "Princess", "Prionnsa", "Prionnsaichean", "Prudential Regulation Authority", "Prydain", "Prydeinig", "Queen", "Reassurance", "Reassurer", "Regional Health And Social Care Board", "Registered Society", "Registrar", "Regulator", "Reinsurance", "Reinsurer", "Riaghaltais", "Riaghaltas", "Riaghaltasan", "Royal", "Royalty", "School Trust", "Scotland", "Scottish", "Senedd", "Senedd Cymru", "Sheffield", "Siambr Fasnach", "Siamrau Masnach", "Social Service", "Society", "Special School", "Standards", "Stock Exchange", "Swyddfa Archwilio Cymru", "Teyrnas Gyfunol", "Teyrnas Unedig", "The Governor And Company Of The Bank Of England", "Theyrnas Gyfunol", "Theyrnas Unedig", "Thywysog", "Thywysoges", "T-Oilthigh", "Trade Union", "Tribunal", "Trust", "Tywysog", "Tywysoges", "Underwrite", "Underwriting", "Unit Trust", "University", "Wales", "Wales Audit Office", "Wasanaeth Iechyd", "Welsh", "Welsh Assembly Government", "Welsh Government", "Welsh Parliament", "Accounting Council", "Actuarial Council", "Advocate General", "Agency", "Assembly", "Audit And Assurance Council", "Authority", "Border Agency", "Border Force", "Cabinet Office", "Cadw", "Care Inspectorate Wales", "Comeptition And Markets Authority", "Corporate Reporting Council", "Court", "Crime Squad", "Criminal Injuries Compensation Authority", "Criminal Intelligence Service", "Crown Estate", "Cssiw", "Employment Medical Advisory Service", "Financial Reporting Review Panel", "Further Education", "Health And Social Care", "Higher Education", "Home Office", "Iechyd Cyhoeddus Cymru", "Industrial And Provident Society", "Intellectual Property Office", "Lord Advocate", "National Crime Agency", "National Health Service", "Notarial", "Notary", "Notary Public", "Office Of The Public Guardian", "Ordnance Survey", "Public Health England", "Public Health Northern Ireland", "Public Health Ni", "Public Health Scotland", "Public Health Wales", "Revenue And Customs", "Scrivener", "Scrivener Notary", "Select Committee", "Serious Organised Crime", "Social Security And Child Support", "Uk Government", "Ukipo", "Welsh Government", "Welsh Assembly Government", "Anzac", "Apothecary", "Architect", "Arts Therapist", "Arts Psychotherapist", "Bachelor Of Medicine", "Biomedical Scientist", "Building Society", "Chemist", "Chiropodist", "Chiropractic", "Chiropractic Physician", "Chiropractic Practitioner", "Chiropractioner", "Chiropractor", "Chiropractor", "Citius Altius Fortius", "Clinical Psychologist", "Clinical Scientist", "Commonhold Association", "Community Benefit Society", "Counselling Psychologist", "Credit Union", "Dental Practitioner", "Dental Surgeon", "Dentist", "Diagnostic Radiographer", "Dietician", "Dietitian", "Dispensing Chemist", "Dispensing Druggist", "Dispensing Optician", "Doctor Of Medicine", "Drama Therapist", "Druggist", "Educational Psychologist", "Enrolled Optician", "Faster", "Higher", "Stronger", "Forensic Psychologist", "General Practitioner", "Geneva Cross", "Health Psychologist", "Hearing Aid Dispenser", "Industrial And Provident Society", "Language Therapist", "Licentiate In Medicine And Surgery", "Music Therapist", "Occupational Psychologist", "Occupational Therapist", "Olympiad", "Olympian", "Olympic", "Operating Department Practitioner", "Opthalmic Optician", "Opthalmologist", "Optician", "Optometrist", "Orthoptist", "Orthotist", "Paralympiad", "Paralympian", "Paralympic", "Paramedic", "Pharmaceutical Chemist", "Pharmaceutical Druggist", "Pharmaceutist", "Pharmacist", "Pharmacy", "Physical Therapist", "Physician", "Physiotherapist", "Podiatrist", "Practitioner Psychologist", "Prosthetist", "Radiographer", "Red Crescent ", "Red Cross", "Red Lion And Sun", "Registered Optician", "Registered Psychologist", "Registered Society", "Social Worker", "Solicitor", "Speech And Language Therapist", "Speech Therapist", "Spirit In Motion", "Sport And Exercise Psychologist", "Surgeon ", "Therapeutic Radiographer", "Vet ", "Veterinary", "Veterinary Practitioner", "Veterinary Surgeon"]
}, {
    id: 250,
    guid: null,
    NameRestricted: ["Bank", "Trust", "University", "College"]
}]
  , arrCompanyNameOrder = []
  , CompanySuffixes = []
  , alowApplyNameUK = !0
  , currentValid = !1;
function onkeyupInputCompanyName(t) {
    try {
        var e, a, n = $(t).val(), i = parseInt($(t).parents(".company-name-item").attr("data-id")), r = $(t).parents(".company-name-item").find(".recommend-list");
        0 < n.length ? (checkNameRestricted(n) ? (currentValid = !1,
        validatingInput(t, "Your company name contains restricted words or phrases")) : (currentValid = !0,
        validadInput(t)),
        e = StartupNameGenerator(n),
        r.html(""),
        a = "",
        e.forEach(function(t, e) {
            e < 3 && (a += '<li onclick="chooseRecommand(this)">'.concat(t.trim(), "</li>"))
        }),
        r.append(a),
        $(t).parents(".company-name-item").find(".recommend.d-none").removeClass("d-none"),
        updateName(i, n, currentValid)) : ($(t).parents(".company-name-item").find(".recommend").addClass("d-none"),
        r.html(""),
        $(t).parents(".company-name-item").find(".company-name-control.validating").removeClass("validating"),
        $(t).parents(".company-name-item").find(".company-name-control.valid").removeClass("valid"),
        $(t).parents(".company-name-item").find(".message").text(""))
    } catch (t) {}
}
function onchangeInputCompanyName(t) {
    try {
        var e = $(t).val()
          , a = parseInt($(t).parents(".company-name-item").attr("data-id"))
          , n = JSON.parse(localStorage.getItem("data_onboarding"));
        setTimeout(function() {
            $(t).parents(".company-name-item").find(".recommend").addClass("d-none")
        }, 200),
        0 < e.length && 237 === parseInt(n.country_id) && (checkNameRestricted(e) || (alowApplyNameUK = !1,
        $("#entityNameCheck .btn-apply").attr("disabled", !0),
        checkUseableNameUK(e) ? (alowApplyNameUK = !0,
        validadInput(t)) : (alowApplyNameUK = !1,
        validatingInput(t, "This company name already exists")),
        updateName(a, e, alowApplyNameUK)))
    } catch (t) {
        console.log(t)
    }
}
function chooseRecommand(t) {
    try {
        var e = $(t).text()
          , a = parseInt($(t).parents(".company-name-item").attr("data-id"));
        if ($(t).parents(".company-name-item").find(".inp-company-name").val(e),
        alowApplyNameUK = !0,
        checkNameRestricted(e))
            currentValid = !1,
            validatingInput(t, "Your company name contains restricted words or phrases");
        else {
            currentValid = !0,
            validadInput(t);
            var n = JSON.parse(localStorage.getItem("data_onboarding"));
            if (237 === parseInt(n.country_id)) {
                alowApplyNameUK = !1,
                $("#entityNameCheck .btn-apply").attr("disabled", !0);
                try {
                    checkUseableNameUK(e) ? (alowApplyNameUK = !0,
                    validadInput(t)) : (alowApplyNameUK = !1,
                    validatingInput(t, "This company name already exists"))
                } catch (t) {
                    console.log(t)
                }
            }
        }
        updateName(a, e, currentValid = !1 === alowApplyNameUK || !1 === currentValid ? !1 : currentValid)
    } catch (t) {
        console.log(t)
    }
}
function deleteName(a) {
    try {
        var n;
        $(a).parents(".company-name-item.name-first").length || (n = parseInt($(a).parents(".company-name-item").attr("data-id")),
        arrCompanyNameOrder.some(function(t, e) {
            if (parseInt(t.id) === n)
                return arrCompanyNameOrder.splice(e, 1),
                $(a).parents(".company-name-item").remove(),
                checkNameCount(arrCompanyNameOrder.length),
                !0
        }))
    } catch (t) {
        console.log(t)
    }
}
function onchangeSelectSuffix(t, a, n) {
    var i = parseInt($(t).parents(".company-name-item").attr("data-id"));
    0 < arrCompanyNameOrder.length && arrCompanyNameOrder.some(function(t, e) {
        if (t.id == i)
            return arrCompanyNameOrder[e] = _objectSpread(_objectSpread({}, t), {}, {
                suffix: n,
                suffix_id: a
            }),
            !0
    })
}
function renderHTMLSuffixOption(e) {
    var a = "";
    return CompanySuffixes.map(function(t) {
        parseInt(t.id) === parseInt(e) ? a += '<option value="'.concat(t.id, '" selected>').concat(t.name, "</option>") : a += '<option value="'.concat(t.id, '">').concat(t.name, "</option>")
    }),
    a
}
function checkUseableNameUK(t) {
    var e = !1
      , t = t.trim();
    if (0 < t.length)
        try {
            $.ajax({
                async: !1,
                type: "GET",
                url: linkUrlOrderAPi + "/api/onboarding/check_name/find_company?key=" + t,
                data: null,
                contentType: "application/json",
                success: function(t) {
                    t.data && (e = t.data.useable)
                },
                error: function(t) {
                    console.log(t)
                },
                complete: function(t) {}
            })
        } catch (t) {
            console.log(t)
        }
    return e
}
function checkNameRestricted(t) {
    var a = !1
      , n = t.trim();
    if (0 < n.length)
        try {
            NameRestricted.some(function(t) {
                if (parseInt(t.id) === parseInt(data.country_id))
                    return t.NameRestricted.some(function(t) {
                        var e = n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase());
                        if (0 <= e) {
                            if (t.length === n.length)
                                return a = !0;
                            if (0 === e) {
                                if (0 <= n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase() + " "))
                                    return a = !0
                            } else if (e + t.length === n.length) {
                                if (0 <= n.toLocaleLowerCase().indexOf(" " + t.toLocaleLowerCase()))
                                    return a = !0
                            } else if (0 <= n.toLocaleLowerCase().indexOf(" " + t.toLocaleLowerCase() + " "))
                                return a = !0
                        }
                    }),
                    !0
            })
        } catch (t) {
            console.log(t)
        }
    return a
}
function updateName(a, n, i) {
    arrCompanyNameOrder.some(function(t, e) {
        if (t.id == a)
            return arrCompanyNameOrder[e] = _objectSpread(_objectSpread({}, t), {}, {
                name: n.trim(),
                isValid: i
            }),
            !0
    })
}
function checkNameCount(t) {
    3 < t ? $("#entityNameCheck .btn-add").attr("disabled", !0) : $("#entityNameCheck .btn-add").attr("disabled", !1)
}
function normalInput(t, e) {
    $(t).parents(".company-name-item").find(".company-name-control").removeClass("validating"),
    $(t).parents(".company-name-item").find(".company-name-control").removeClass("valid"),
    $(t).parents(".company-name-item").find(".message").text(e)
}
function validatingInput(t, e) {
    $(t).parents(".company-name-item").find(".company-name-control").addClass("validating"),
    $(t).parents(".company-name-item").find(".company-name-control").removeClass("valid"),
    $(t).parents(".company-name-item").find(".message").text(e),
    $("#entityNameCheck .btn-apply").attr("disabled", !0)
}
function validadInput(t) {
    $(t).parents(".company-name-item").find(".company-name-control").removeClass("validating"),
    $(t).parents(".company-name-item").find(".message").text(""),
    $("#entityNameCheck .btn-apply").attr("disabled", !1)
}
function debounce(t, e) {
    var a;
    return function() {
        clearTimeout(a),
        a = setTimeout(t, e)
    }
}
$(function() {
    $("#entityNameCheck .name-first .inp-company-name").on("keyup", function() {
        onkeyupInputCompanyName(this);
        try {
            0 === $(this).val().length && validatingInput($(this), "Your company name is required")
        } catch (t) {}
    }),
    $("#entityNameCheck .name-first select.suffix").on("change", function() {
        onchangeSelectSuffix($(this), $(this).val(), $(this).find("option:selected").text())
    }),
    $("#entityNameCheck .btn-add").on("click", function() {
        try {
            var t = Date.now()
              , e = '\n\t\t\t<div class="company-name-item" data-id="'.concat(t, '">\n\t\t\t\t<div class="dis-flex company-name-control row">\n\t\t\t\t\t<div class="col-md-7 col-xs-7">\n\t\t\t\t\t\t<input class="inp-company-name inp-company-name form-control form-obd" type="text" name="company-name" value="" size="40" required="" placeholder="Company name" onkeyup="onkeyupInputCompanyName(this)" onchange="debounce(onchangeInputCompanyName(this),1000)"/>\n\t\t\t\t\t\t<div class="message"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="col-md-5 col-xs-5">\n\t\t\t\t\t\t<div class="form-group select-incorporation">\n\t\t\t\t\t\t\t<select class="selectpicker suffix" name="" data-live-search="true" data-dropup-auto="false" onchange="onchangeSelectSuffix(this,this.options[this.selectedIndex].value, this.options[this.selectedIndex].text)">\n\t\t\t\t\t\t\t') + renderHTMLSuffixOption(0) + '\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wrap-btn">\n\t\t\t\t\t\t<button class="btn-deleted ownStyle" type="button" onclick="deleteName(this)">\n\t\t\t\t\t\t\t<i class="fas fa-minus-circle"></i>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="recommend dis-flex d-none">\n\t\t\t\t\t<p>Name hints:</p>\n\t\t\t\t\t<ul class="recommend-list"></ul>\n\t\t\t\t</div>\n\t\t\t</div>';
            $("#entityNameCheck .wrap-company-name-order").append(e),
            $(".selectpicker").selectpicker("refresh"),
            arrCompanyNameOrder.push({
                id: t,
                suffix: 0 < CompanySuffixes.length ? CompanySuffixes[0].name : "",
                suffix_id: 0 < CompanySuffixes.length ? CompanySuffixes[0].id : null,
                isValid: !0
            }),
            checkNameCount(arrCompanyNameOrder.length)
        } catch (t) {}
    }),
    $("#entityNameCheck .btn-apply").on("click", function() {
        var e, a, t = JSON.parse(localStorage.getItem("data_onboarding"));
        try {
            0 === $("#entityNameCheck .name-first .inp-company-name").val().length ? validatingInput($("#entityNameCheck .name-first .inp-company-name"), "Your company name is required") : 0 === arrCompanyNameOrder.length ? t.CompanyNames && 0 < t.CompanyNames.length && (window.location.href = linkUrlOrder + "/onboarding/incorporation-package") : alowApplyNameUK ? (e = !0,
            arrCompanyNameOrder.some(function(t) {
                if (!1 === t.isValid)
                    return !(e = !1)
            }),
            e ? (a = [],
            arrCompanyNameOrder.map(function(t) {
                t.name && 0 < t.name.length && a.push(t)
            }),
            t.CompanyNames ? t.CompanyNames = a : t = _objectSpread(_objectSpread({}, t), {}, {
                CompanyNames: a
            }),
            localStorage.setItem("data_onboarding", JSON.stringify(t)),
            putApiOrderClient({
                company_country_id: t.country_id,
                entity_type_id: t.entity_type_id,
                company_name: t.CompanyNames[0].name,
                company_suffix_id: t.CompanyNames[0].suffix_id
            }),
            window.location.href = linkUrlOrder + "/onboarding/incorporation-package" + urlParamOnboarding) : $("#entityNameCheck .btn-apply").attr("disabled", !0)) : $("#entityNameCheck .btn-apply").attr("disabled", !0)
        } catch (t) {}
    })
});
var OrderInfo = null, onboardingPackage;
function onloadIncorpPayment() {
    getOrderInfo(),
    progressOrderSummary();
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.promotion_code
    })
      , t = altFind(t, function(t) {
        return t.signature
    });
    if (t && (urlParamOnboarding = "?signature=" + t.signature,
    e && (urlParamOnboarding += "&promotion_code=" + e.promotion_code)),
    $("#incorpPayment #back-payment").length)
        try {
            var a = JSON.parse(localStorage.getItem("urlBackBank"))
              , n = JSON.parse(localStorage.getItem("check_noti_progress"));
            n && n.bank_type && 0 == n.listService.length && $("#incorpPayment #back-payment").on("click", function() {
                window.location.href = a
            }),
            n && n.package_type && 0 < n.listService.length && $("#incorpPayment #back-payment").on("click", function() {
                window.location.href = "/onboarding/incorporation-additional-service" + urlParamOnboarding
            })
        } catch (t) {
            console.log(t)
        }
}
function getOrderInfo() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.order_code
    })
      , a = altFind(t, function(t) {
        return t.promotion_code
    })
      , t = "";
    a && a.promotion_code && (t = "?promotion_code=" + a.promotion_code),
    e || (window.location.href = "/onboarding/incorporation-country");
    var n, a = "", a = 0 < t.length ? linkUrlOrderAPi + "/api/onboarding/order/" + e.order_code + t : linkUrlOrderAPi + "/api/onboarding/order/" + e.order_code;
    try {
        $.ajax((_defineProperty(n = {
            cache: !1
        }, "cache", !1),
        _defineProperty(n, "type", "GET"),
        _defineProperty(n, "url", a),
        _defineProperty(n, "contentType", "application/json"),
        _defineProperty(n, "success", function(t) {
            t.data && (OrderInfo = t.data,
            viewContentPayment(t.data))
        }),
        _defineProperty(n, "error", function(t) {
            window.location.href = "/404"
        }),
        _defineProperty(n, "complete", function(t) {}),
        n))
    } catch (t) {
        console.log(t)
    }
}
function viewContentPayment(t) {
    try {
        var e, a, n, i, r, o, s, c, l, d;
        0 === t.status ? ($("#incorpPayment").removeClass("paid"),
        null == localStorage.getItem("data_onboarding") && $("#incorpPayment").addClass("payment-fail"),
        t.payment_gateway_id ? $("#incorpPayment").addClass("not-bank-transfer") : $("#incorpPayment").removeClass("not-bank-transfer")) : $("#incorpPayment.paid").length && $("#incorpPayment").addClass("paid"),
        $("#incorpPayment .obd-incorporation__left").css("opacity", 1),
        $("#incorpPayment #fullName").text(t.Customer.first_name),
        $("#incorpPayment #email").text(t.Customer.email),
        $("#incorpPayment #phone").text(t.Customer.phone || ""),
        $("#incorpPayment .total").text(parseUScurrency(parseInt(t.amount))),
        t.Company && ($("#incorpPayment .wrap-company-content").removeClass("d-none"),
        $("#incorpPayment #country").text(t.Company.Country.name),
        t.Company.EntityType && $("#incorpPayment #companyType").text(t.Company.EntityType.name),
        t.Company.CompanySuffix ? $("#incorpPayment #companyName").text(t.Company.name + " " + t.Company.CompanySuffix.name) : $("#incorpPayment #companyName").text(t.Company.name),
        (e = t.Company.preventive_name) && ($(".wrap-company-name").addClass("has-preventive-name"),
        e = JSON.parse(e),
        a = "",
        e.map(function(t) {
            a += "<p>".concat(t.name, "</p>")
        }),
        $("#incorpPayment #preventiveName").html(a))),
        1670 == t.OrderItems[0].service_id && null == t.Package ? ($("#incorpPayment .wrap-content-banking").removeClass("d-none"),
        $("#incorpPayment #bankName").text(t.OrderItems[0].Service.name),
        $("#incorpPayment #bankPrice").text(t.amount)) : (n = [],
        i = [],
        r = [],
        o = [],
        t.OrderItems && t.OrderItems.map(function(t) {
            (t.package_id ? t.service_id ? n : r : t.service_id ? i : o).push(t)
        }),
        0 < n.length && ($("#incorpPayment .wrap-content-package").removeClass("d-none"),
        $("#incorpPayment #packageName").text(n[0].Package.name),
        s = n.reduce(function(t, e) {
            return t + e.amount
        }, 0),
        $("#incorpPayment #packagePrice").text(s)),
        c = "",
        n.map(function(t) {
            c += "\n\t\t\t\t<li><span>".concat(t.Service.name, '</span><span class="price nowrap">').concat(displayPriceDiscount(t.amount), "</span></li>\n\t\t\t\t")
        }),
        $("#incorpPayment .package-service .service-list").html(c),
        l = "",
        i.length && $("#incorpPayment .wrap-other-service").removeClass("d-none"),
        1 === i.length ? (l = '\n\t\t\t\t<div class="other-service-item">\n\t\t\t\t\t<p class="name-pac fw-500 mb-0">'.concat(i[0].Service.ServiceType.name, '</p>\n\t\t\t\t\t<ul class="service-list">\n\t\t\t\t\t\t<li><span>').concat(i[0].Service.name, '&nbsp;<text class="nowrap">(').concat(displayQuantity(i[0].quantity), ')</text></span><span class="price nowrap">').concat(displayPriceDiscount(i[0].amount), "</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t"),
        $("#incorpPayment .other-service").html(l)) : 1 < i.length && (i.reduce(function(t, e) {
            return t.find(function(t) {
                return t && t.id === e.Service.ServiceType.id
            }) ? _toConsumableArray(t) : [].concat(_toConsumableArray(t), [_objectSpread({}, e.Service.ServiceType)])
        }, []).map(function(e) {
            var a = "";
            i.map(function(t) {
                t.Service.ServiceType.id == e.id && (a += "\n\t\t\t\t\t\t\t<li><span>".concat(t.Service.name, '&nbsp;<text class="nowrap">(').concat(displayQuantity(t.quantity), ')</text></span><span class="price nowrap">').concat(displayPriceDiscount(t.amount), "</span></li>\n\t\t\t\t\t\t\t"))
            }),
            l += '\n\t\t\t\t\t<div class="other-service-item">\n\t\t\t\t\t\t<p class="name-pac fw-500 mb-0">'.concat(e.name, '</p>\n\t\t\t\t\t\t<ul class="service-list">\n\t\t\t\t\t\t\t').concat(a, "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>")
        }),
        $("#incorpPayment .other-service").html(l)),
        t.is_promotion && ($("#incorpPayment .wrap-promotion").removeClass("d-none"),
        r.map(function(t) {
            return $("#incorpPayment .wrap-promotion .name-pac").append('<span class="price nowrap">'.concat(displayPriceDiscount(t.amount), "</span>")),
            !0
        })),
        0 < o.length && ($(".wrap-custom-service").removeClass("d-none"),
        d = "",
        o.map(function(t) {
            d += '\n\t\t\t\t\t<p class="name-pac mb-0"><span>'.concat(t.description, '</span><span class="nowrap price">').concat(displayPriceDiscount(t.amount), "</span></p>\n\t\t\t\t\t")
        }),
        $(".wrap-custom-service .custom-service").htmt(d)))
    } catch (t) {
        console.log(t)
    }
}
function paymentCardOnboarding(i) {
    var e = Stripe("pk_live_FriBUNrY1wNFgnjXNUNZfLTZ")
      , t = e.elements()
      , r = (OrderInfo.amount,
    OrderInfo.Customer.email)
      , a = t.create("card", {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    });
    function o(t) {
        t ? ($("#modal-stripe .submit .btn-payment").attr("disabled", !0),
        $("#modal-stripe .submit .btn-payment").css("display", "none"),
        $("#modal-stripe .submit .loadding-icon").css("display", "block"),
        $("#modal-stripe .close").css("display", "none")) : ($("#modal-stripe .submit .btn-payment").attr("disabled", !1),
        $("#modal-stripe .submit .btn-payment").css("display", "inline-block"),
        $("#modal-stripe .submit .loadding-icon").css("display", "none"),
        $("#modal-stripe .close").css("display", "block"))
    }
    a.mount("#card-element"),
    a.on("change", function(t) {
        var e = document.getElementById("card-errors");
        t.error ? e.textContent = t.error.message : e.textContent = "",
        $("#make-payment-submit").on("click", function(t) {
            e.textContent = ""
        })
    }),
    document.getElementById("payment-form").addEventListener("submit", function(t) {
        t.preventDefault(),
        o(!0),
        e.createToken(a).then(function(t) {
            var e, a, n;
            t.error ? (document.getElementById("card-errors").textContent = t.error.message,
            o(!1)) : (localStorage.removeItem("data_onboarding"),
            t.token,
            e = {
                id: t.token.id,
                email: r,
                order_code: i
            },
            a = altFind(readParamUrl(), function(t) {
                return t.promotion_code
            }),
            n = t = "",
            a && a.promotion_code && (t = "?promotion_code=" + a.promotion_code,
            n = "&promotion_code=" + a.promotion_code),
            $.ajax({
                type: "POST",
                url: linkUrlOrderAPi + "/api/onboarding/order/payment/stripe" + t,
                data: JSON.stringify(e),
                contentType: "application/json",
                success: function(t) {
                    t && (localStorage.setItem("payment_status", 1),
                    window.location.href = "/onboarding/payment-success?type_payment=card&order_code=" + i)
                },
                error: function(t) {
                    window.location.href = "/onboarding/payment-failure?&order_code=" + i + n
                },
                complete: function(t) {}
            }))
        })
    })
}
function paymentPaypalOnboarding(n) {
    var i = altFind(readParamUrl(), function(t) {
        return t.promotion_code
    })
      , a = ""
      , r = "";
    i && i.promotion_code && (a = "?promotion_code=" + i.promotion_code,
    r = "&promotion_code=" + i.promotion_code);
    var o = {
        order_code: n
    };
    function s() {
        $("#paypal-button-container").attr("disabled", !0),
        $("#paypal-button-container").css("display", "none"),
        $("#isLoadingPaypal").css("display", "block"),
        $("#modal-paypal .btn-close-modal").css("display", "none")
    }
    btnpaypalOrder = btnpaypalOrder || paypal_sdk.Buttons({
        createOrder: function(t, e) {
            return localStorage.removeItem("data_onboarding"),
            fetch(linkUrlOrderAPi + "/api/onboarding/order/payment/paypal" + a, {
                method: "POST",
                body: JSON.stringify(o),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t && t.data,
                t.data.result.id
            })
        },
        onApprove: function(t, e) {
            s();
            t = {
                id: t.orderID
            };
            return fetch(linkUrlOrderAPi + "/api/onboarding/order/paypal/authorize" + a, {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                localStorage.setItem("payment_status", 1),
                window.location.href = "/onboarding/payment-success?type_payment=paypal&order_code=" + n
            })
        },
        onCancel: function(t, e) {
            s();
            var a = {
                order_code: n,
                promotion_code: void 0
            };
            return i && i.promotion_code && (a.promotion_code = i.promotion_code),
            fetch(linkUrlOrderAPi + "/api/portal/order/send-email-fail", {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                window.location.href = "/onboarding/payment-failure?order_code=" + n + r
            })
        }
    }).render("#paypal-button-container")
}
function paymentBankOnboarding(t) {
    localStorage.removeItem("data_onboarding");
    var e = altFind(readParamUrl(), function(t) {
        return t.promotion_code
    })
      , e = {
        customer_id: OrderInfo.Customer.id,
        order_code: t,
        website_id: 1,
        promotion_code: e && e.promotion_code || void 0
    };
    $.ajax({
        type: "POST",
        url: linkUrlOrderAPi + "/api/onboarding/order/send-email-pending",
        data: JSON.stringify(e),
        contentType: "application/json",
        success: function(t) {
            window.location.href = "/onboarding/payment-pending" + window.location.search
        },
        error: function(t) {
            window.location.href = "/404"
        },
        complete: function(t) {}
    })
}
function displayPriceDiscount(t) {
    t = parseFloat(t);
    return t < 0 ? "-$" + Math.abs(t) : "$" + t
}
function displayQuantity(t) {
    t = parseInt(t);
    return 1 == t ? t + " set" : t + " sets"
}
function load_onboarding_notification() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.order_code
    })
      , t = altFind(t, function(t) {
        return t.type_payment
    });
    e && loadNotificationSuccessAPI(e, t)
}
function loadNotificationSuccessAPI(t) {
    try {
        var e = linkUrlOrderAPi + "/api/onboarding/order/";
        $.ajax({
            type: "GET",
            url: e + t.order_code,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (console.log(t.data),
                viewNotificationOnboarding(t.data))
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function viewNotificationOnboarding(t) {
    var e, a, n = window.location.href, i = n.indexOf("onboarding/payment-success"), r = n.indexOf("onboarding/payment-failure"), o = n.indexOf("onboarding/payment-pending"), s = t.Customer.signature;
    -1 != i && 1 == t.status ? 1670 == t.OrderItems[0].service_id && null == t.OrderItems[0].Package ? ($(".onboarding-page #progressSuccess").html("<li class='success'>Service packages</li><li class='success'>Take your choices</li><li class='success'>Banking assessment</li><li class='success'>Confirm &amp; pay</li><li class='actives'>Notification</li>"),
    $(".onboarding-page #title-notifSuccess").html("Congratulation!!! Your payment was successful."),
    $(".onboarding-page #content-notifSuccess").html("<p>Thank you for entrusting our service at <a class='text-color__link' href='/' rel='nofollow' target='_blank'>bbcincorp.com</a></p><p>An account manager will contact you shortly to get you onboard and give you advice about other banking alternatives should you need one.</p><p>You can now log into<b> Company Management Portal</b> to follow up the process and complete the KYC.</p>"),
    $(".onboarding-page .btn-notif #btn-package").css("display", "none"),
    $(".onboarding-page .btn-notif #btn-portal").addClass("link-portal"),
    localStorage.removeItem("signature")) : t.PackageItems && t.PackageItems.map(function(t) {
        t = t.Package.package_type_id;
        console.log(t),
        $(".onboarding-page #progressSuccess").html("<li class='success'>Country and company type</li><li class='success'>Entity name check</li><li class='success'>Service packages</li><li class='success'>Confirm &amp; pay</li><li class='actives'>Notification</li>"),
        1 == t || 4 == t || 5 == t || 6 == t || 7 == t || 8 == t ? ($(".onboarding-page #title-notifSuccess").html("Congratulation!!! Your payment was successful."),
        $(".onboarding-page #content-notifSuccess").html("<p>Thank you for entrusting our service at <a class='text-color__link' href='/' rel='nofollow' target='_blank'>bbcincorp.com</a></p><p>We have received your order, and a dedicated manager will contact you soon to proceed further. An email has been sent to you detailing order and payment information for your reference. It also includes login account information to access our<span>Company Management Portal.</span></p><p>In the meantime, you can log into the account provided to prepare necessary documents and complete the KYC procedure in advance."),
        $(".onboarding-page .btn-notif #btn-package").css("display", "none"),
        $(".onboarding-page .btn-notif #btn-portal").addClass("link-portal"),
        localStorage.removeItem("signature")) : 2 != t && 3 != t || ($(".onboarding-page #title-notifSuccess").html('Thank you for entrusting our service at <a class="text-color__link" href="/" rel="nofollow" target="_blank">bbcincorp.com</a>'),
        $(".onboarding-page #content-notifSuccess").html("<p>Thank you for entrusting our service at <a class='text-color__link' href='/' rel='nofollow' target='_blank'>bbcincorp.com</a></p><p>We have received your order, and a dedicated manager will contact you soon to proceed further. An email has been sent to you detailing order and payment information for your reference. It also includes login account information to access our<span>Company Management Portal.</span></p><p>In the meantime, you can log into the account provided to prepare necessary documents and complete the KYC procedure in advance.<br> Nevertheless, you can also move to the next step to fill out the questionnaire for helping you select your relevant banking partners.</p>"),
        $(".onboarding-page .btn-notif #btn-package").on("click", function() {
            localStorage.setItem("signature", s),
            null == localStorage.getItem("check_noti_progress") && localStorage.setItem("check_noti_progress", JSON.stringify({
                incorp_to_bank: !0
            })),
            window.location.href = "/onboarding/banking-choice",
            localStorage.setItem("incorpToBank", "true"),
            localStorage.setItem("urlBack", JSON.stringify(location.href))
        }))
    }) : -1 != r ? (n = altFind(e = readParamUrl(), function(t) {
        return t.order_code
    }),
    r = altFind(e, function(t) {
        return t.promotion_code
    }),
    e = n.order_code,
    n = "",
    r && r.promotion_code && (r.promotion_code,
    n = "&promotion_code=" + r.promotion_code),
    1670 == t.OrderItems[0].service_id && null == t.OrderItems[0].Package ? ($(".onboarding-page #progressFailure").html("<li class='success'>Service packages</li><li class='success'>Take your choices</li><li class='success'>Banking assessment</li><li class='success'>Confirm &amp; pay</li><li class='actives'>Notification</li>"),
    $(".onboarding-page #content-notifFailure").html("<p>We are sorry that your payment was not successful yet. It could be rejected by some reasons:</p><ul><li>• You cancelled the payment;</li><li>• You have entered incorrect card expiration or CVV;</li><li>• Your credit has reached the limit;</li><li>• Computer or network error;</li> <li>• Your card has insufficient balance to charge;</li></ul><p>An email has been sent to you detailing order summary and payment information to help you make payment again.</p><p>Still, you can make payment directly through this <a class='text-color__link' href='/onboarding/order-information?order_code=" + e + "' rel='nofollow'>LINK</a></p>")) : ($(".onboarding-page #progressFailure").html("<li class='success'>Country and company type</li><li class='success'>Entity name check</li><li class='success'>Service packages</li><li class='success'>Confirm &amp; pay</li><li class='actives'>Notification</li>"),
    $(".onboarding-page #content-notifFailure").html("<p>We are sorry that your payment was not successful yet. It could be rejected by some reasons:</p><ul><li>• You cancelled the payment;</li><li>• You have entered incorrect card expiration or CVV;</li><li>• Your credit has reached the limit;</li><li>• Computer or network error;</li> <li>• Your card has insufficient balance to charge;</li></ul><p>An email has been sent to you detailing order summary and payment information to help you make payment again.</p><p>Still, you can make payment directly through this <a class='text-color__link' href='/onboarding/order-information?order_code=" + e + n + " ' rel='nofollow'>LINK</a></p><p>Please feel free to contact us via <a class='text-color__link' href='mailto:service@bbcincorp.com' rel='nofollow' target='_blank'>service@bbcincorp.com</a> if you have any further questions or concerns.</p>")),
    localStorage.removeItem("signature")) : -1 != o && (a = altFind(readParamUrl(), function(t) {
        return t.order_code
    }).order_code,
    1670 == t.OrderItems[0].service_id && null == t.OrderItems[0].Package ? ($(".onboarding-page #progressPending").html('<li class="success">Service packages</li><li class="success">Take your choices</li><li class="success">Banking assessment</li><li class="success">Confirm &amp; pay</li><li class="actives">Notification</li>'),
    $(".onboarding-page #title-notifPending").html('Thank you for entrusting our service at <a class="text-color__link" href="/" rel="nofollow" target="_blank">bbcincorp.com</a>'),
    $(".onboarding-page #content-notifPending").html("<p>An email has been sent to you detailing order information for your reference.Please arrange your payment for the service charge according to one of the methods listed in the email. Or you can also make payment directly through this <a class='text-color__link' href='/onboarding/order-information?order_code=" + a + "' rel='nofollow'> LINK</a></p><p>An account manager will contact you shortly to get you onboard and give you advice about other banking alternatives should you need one.</p>"),
    $(".onboarding-page .btn-notifPending").css("display", "none"),
    localStorage.removeItem("signature")) : t.PackageItems && t.PackageItems.map(function(t) {
        t = t.Package.package_type_id;
        $(".onboarding-page #progressPending").html('<li class="success">Country and company type</li><li class="success">Entity name check</li><li class="success">Service packages</li><li class="success">Confirm &amp; pay</li><li class="actives">Notification</li>'),
        1 == t || 4 == t || 5 == t || 6 == t || 7 == t ? ($(".onboarding-page #title-notifPending").html('Thank you for entrusting our service at <a class="text-color__link" href="/" rel="nofollow" target="_blank">bbcincorp.com</a>'),
        $(".onboarding-page #content-notifPending").html("<p>We have received your order, and a dedicated manager will contact you soon to proceed further.An email has been sent to you detailing order and payment information for your reference.Please arrange your payment for the service charge according to one of the methods listed in the email.</p><p>Still, you can make payment directly through this <a class='text-color__link' href='/onboarding/order-information?order_code=" + a + "' rel='nofollow'>LINK</a>.</p>"),
        $(".onboarding-page .btn-notifPending").css("display", "none"),
        localStorage.removeItem("signature")) : 2 != t && 3 != t || ($(".onboarding-page #title-notifPending").html('Thank you for entrusting our service at <a class="text-color__link" href="/" rel="nofollow" target="_blank">bbcincorp.com</a>'),
        $(".onboarding-page #content-notifPending").html("<p>We have received your order, and a dedicated manager will contact you soon to proceed further. An email has been sent to you detailing order and payment information for your reference. Please arrange your payment for the service charge according to one of the methods listed in the email.</p><p>Still, you can make payment directly through this <a class='text-color__link' href='/onboarding/order-information?order_code=" + a + "' rel='nofollow'>LINK</a></p><p>Nevertheless, you can also move to the next step to fill out the questionnaire for helping you select your relevant banking partners.</p>"),
        $(".onboarding-page .btn-notifPending #btn-bank").on("click", function() {
            localStorage.setItem("signature", s),
            null == localStorage.getItem("check_noti_progress") && localStorage.setItem("check_noti_progress", JSON.stringify({
                incorp_to_bank: !0
            })),
            window.location.href = "/onboarding/banking-choice",
            localStorage.setItem("urlBack", JSON.stringify(location.href))
        }))
    })),
    -1 != i && 0 == t.status && (1670 != t.OrderItems[0].service_id || null != t.OrderItems[0].Package || (i = JSON.parse(localStorage.getItem("isJoinBank"))) && !0 === i && ($(".onboarding-page #progressSuccess").html('<li class="success">Take your choices</li><li class="success">Banking assessment</li><li class="actives">Notification</li>'),
    $(".onboarding-page #title-notifSuccess").html("We’ve recorded your banking selection."),
    $(".onboarding-page #content-notifSuccess").html("<p>An account manager will contact you shortly to get you onboard and give you advice about other banking alternatives should you need one.</p><p>You can now log into company management portal to follow up the process and complete the KYC.</p>"),
    $(".onboarding-page .btn-notif #btn-package").css("display", "none"),
    $(".onboarding-page .btn-notif #btn-portal").addClass("link-portal"))),
    -1 != o && 0 == t.status && (1670 != t.OrderItems[0].service_id || null != t.OrderItems[0].Package || (t = JSON.parse(localStorage.getItem("isJoinBank"))) && !0 === t && ($(".onboarding-page #progressPending").html('<li class="success">Take your choices</li><li class="success">Banking assessment</li><li class="actives">Notification</li>'),
    $(".onboarding-page #title-notifPending").html("We’ve recorded your banking selection."),
    $(".onboarding-page #content-notifPending").html("<p>An account manager will contact you shortly to get you onboard and give you advice about other banking alternatives should you need one.</p>"),
    $(".onboarding-page .btn-notifPending").css("display", "none")))
}
function onloadSelectPackage() {
    try {
        var t = readParamUrl()
          , e = altFind(t, function(t) {
            return t.promotion_code
        })
          , a = altFind(t, function(t) {
            return t.signature
        });
        a && (urlParamOnboarding = "?signature=" + a.signature,
        e && (urlParamOnboarding += "&promotion_code=" + e.promotion_code));
        var n = localStorage.getItem("data_onboarding")
          , i = "/onboarding/incorporation-country" + urlParamOnboarding;
        null !== n && (n = JSON.parse(n)).country_id ? !n.CompanyNames && $("#sectionPackageIncorp").length && (window.location.href = "/onboarding/incorporation-entity-name-check" + urlParamOnboarding) : $("#sectionPackageIncorp").length && (window.location.href = i),
        e ? $("#sectionPackageIncorp .btn-back__href").length && $("#sectionPackageIncorp .btn-back__href").attr("href", "/onboarding/incorporation-entity-name-check" + urlParamOnboarding) : $("#sectionPackageIncorp .btn-back__href").length && $("#sectionPackageIncorp .btn-back__href").attr("href", "/onboarding/incorporation-entity-name-check")
    } catch (t) {
        console.error()
    }
}
function selectPackage(e) {
    try {
        var a, t;
        e && (a = {},
        onboardingPackage.Packages.some(function(t) {
            if (t.id === parseInt(e))
                return a = t,
                !0
        }),
        (t = JSON.parse(localStorage.getItem("data_onboarding"))).Packages ? (t.Packages = a,
        t.Services = [],
        localStorage.setItem("data_onboarding", JSON.stringify(t))) : localStorage.setItem("data_onboarding", JSON.stringify(_objectSpread(_objectSpread({}, t), {}, {
            Packages: a
        }))),
        window.location.href = linkUrlOrder + "/onboarding/incorporation-additional-service" + urlParamOnboarding)
    } catch (t) {
        console.log("error: ", t)
    }
}
function loadPackage() {
    var t, e = null, a = localStorage.getItem("data_onboarding");
    try {
        a && (a = JSON.parse(a),
        t = "",
        244 == a.country_id ? (t = "country_id=" + parseInt(a.country_id) + "&website_id=1",
        $(".onboarding-page").addClass("class-exclude__VN"),
        $("#sectionPackageIncorp").addClass("vn")) : t = "country_id=" + parseInt(a.country_id) + "&entity_type_id=" + parseInt(a.entity_type_id) + "&website_id=1",
        $.ajax({
            async: !1,
            type: "GET",
            url: linkUrlOrderAPi + "/api/onboarding/services?" + t.toString(),
            contentType: "application/json",
            success: function(t) {
                t.data && (e = t.data)
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        }))
    } catch (t) {
        console.log(t)
    }
    return e
}
function popupPackages() {
    if (t = localStorage.getItem("data_onboarding")) {
        var t, e = "";
        switch ((t = JSON.parse(t)).country_id) {
        case 98:
            e = '\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="basic title">BASIC</th>\n\t\t\t\t\t\t\t<th class="standard title">STANDARD</th>\n\t\t\t\t\t\t\t<th class="premium title">PREMIUM</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Unlimited Business Name Check</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Document Preparation &amp; Filling</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Company Formation</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>All Government fees in first years</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Company Secretary for 1st years</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Registered Address for first year included mails handle</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Significant Controller Register and Designated Representative</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital coporate documents</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital seal</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>One set of documents certified by CPA</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">BANK ACCOUNT APPLICATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>\n\t\t\t\t\t\t\t<td class="basic">None </td>\n\t\t\t\t\t\t\t<td class="standard">1 bank application</td>\n\t\t\t\t\t\t\t<td class="premium">Up to 5 bank applications</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t';
            break;
        case 191:
            e = '\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="basic title">BASIC</th>\n\t\t\t\t\t\t\t<th class="standard title">STANDARD</th>\n\t\t\t\t\t\t\t<th class="premium title">PREMIUM</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Unlimited Business Name Check</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Document Preparation &amp; Filling</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Company Formation</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Company Secretary for 1st year</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Registered Address for first year included mails handle.</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Nominee Director in first year. No security deposit required</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital corporate documents</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">BANK ACCOUNT APPLICATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>\n\t\t\t\t\t\t\t<td class="basic">None </td>\n\t\t\t\t\t\t\t<td class="standard">1 bank application</td>\n\t\t\t\t\t\t\t<td class="premium">Up to 5 bank applications</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t';
            break;
        case 250:
            e = '\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="basic title">\n\t\t\t\t\t\t\t\t<p>BASIC</p>\n\t\t\t\t\t\t\t\t<p class="des">Delaware company</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class="standard title large">\n\t\t\t\t\t\t\t\t<p>STANDARD</p>\n\t\t\t\t\t\t\t\t<p class="des">Delaware company w/ supporting documents to open bank account</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class="premium title">\n\t\t\t\t\t\t\t\t<p>PREMIUM</p>\n\t\t\t\t\t\t\t\t<p class="des">Delaware company w/ Corporate Kit</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Name check and clearance</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Document Preparation &amp; Filing</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>State filing fee</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Certificate of Formation / Incorporation</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>1 year registered agent</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>1 year local registered address</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital corporate docs</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital company seal</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Operating Agreements/Bylaws\n\t\t\t\t\t\t\t\t<p class="des">Required to open US bank account</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>EIN application (Employer identification number)\n\t\t\t\t\t\t\t\t<p class="des">Required to open US bank account and employ local labor</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Physical LLC/Corporate Kit with:\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>Gold Embossed Binder</li>\n\t\t\t\t\t\t\t\t\t<li>Company Guidebook</li>\n\t\t\t\t\t\t\t\t\t<li>Operating Agreement/By-laws</li>\n\t\t\t\t\t\t\t\t\t<li>Meeting Minute Book</li>\n\t\t\t\t\t\t\t\t\t<li>Organizational Resolutions</li>\n\t\t\t\t\t\t\t\t\t<li>Membership/Stock Certificates</li>\n\t\t\t\t\t\t\t\t\t<li>Membership/Stock Ledger</li>\n\t\t\t\t\t\t\t\t\t<li>Corporate Seal</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>All courier fee</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">BUSINESS ACCOUNT</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Wise/Payoneer business banking</th>\n\t\t\t\t\t\t\t<td class="basic">None</td>\n\t\t\t\t\t\t\t<td class="standard"><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td class="premium"><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">PRIVILEGES FROM TAXHUB </th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>10% discount code</li>\n\t\t\t\t\t\t\t\t<li>Free 30-min CPA consultation</li>\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<td class="basic">None</td>\n\t\t\t\t\t\t<td class="standard"><i class="itemCheck"></i></td>\n\t\t\t\t\t\t<td class="premium"><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">EXPEDITED OPTION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Get your company ready in 1 day</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t';
            break;
        case 244:
            e = '\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="basic title">JVC\n\t\t\t\t\t\t\t\t<p class="des">Establishment of a Joint Venture Company (FII)</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class="standard title">WFOE\n\t\t\t\t\t\t\t\t<p class="des">Establishment of a Wholly-Owned Foreign Enterprise (LLC/JSC)</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class="premium title">Branch\n\t\t\t\t\t\t\t\t<p class="des">Establishment of a Branch</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\t<th class="ro title">RO\n\t\t\t\t\t\t\t\t<p class="des">Establishment of a Representative Office</p>\n\t\t\t\t\t\t\t</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Name availability check</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Document Preparation &amp; Filing</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Business/Enterprise Registration Certificate (ERC)</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Investment Registration Certificate (IRC)</th>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local registered address for 1st year</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Public announcement of company registration</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Tax registration after incorporation</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Company seal</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t';
            break;
        case 237:
            e = 7 == t.entity_type_id ? '\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t<th class="basic title">BASIC</th>\n\t\t\t\t\t\t\t\t<th class="standard title">STANDARD</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Business name check</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Document preparation &amp; filling</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Local registered address for 1st year</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Service address for 1st year</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Government fee</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Digital corporate documents</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Physical corporate documents </th>\n\t\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>International courier fee</th>\n\t\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Business address for 1st year</th>\n\t\t\t\t\t\t\t\t<td>None</td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class="subtitle">BUSINESS ACCOUNT</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Multi-currency business account with Wise/Payoneer</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t' : '\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t\t<th class="basic title">BASIC</th>\n\t\t\t\t\t\t\t\t<th class="standard title">STANDARD</th>\n\t\t\t\t\t\t\t\t<th class="premium title">PREMIUM</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Unlimited Business Name Check</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Document Preparation &amp; Filling</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Company Formation</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Local Company Secretary for 1st year</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Local Registered Address for 1st year</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Digital corporate documents</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th class="subtitle">BUSINESS ACCOUNT</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<th>Multi-currency business account with Wise/Payoneer</th>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t';
            break;
        default:
            e = '\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t\t<th class="basic title">BASIC</th>\n\t\t\t\t\t\t\t<th class="standard title">STANDARD</th>\n\t\t\t\t\t\t\t<th class="premium title">PREMIUM</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">COMPANY FORMATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Unlimited Business Name Check</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Document Preparation &amp; Filling</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Company Formation</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Company Secretary for 1st year</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Local Registered Address for 1st year</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Digital corporate documents</th>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t\t<td><i class="itemCheck"></i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th class="subtitle">BANK ACCOUNT APPLICATION</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th>Assistance in opening Bank account including Cert. of Incumbency if required</th>\n\t\t\t\t\t\t\t<td class="basic">None </td>\n\t\t\t\t\t\t\t<td class="standard">1 bank application</td>\n\t\t\t\t\t\t\t<td class="premium">Up to 5 bank applications</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t'
        }
        $("#sectionPackageIncorp #obdInModalPackages #genPopupPackages").html(e)
    }
}
function onloadOnboarding() {
    var t, e;
    localStorage.getItem("isCheckedObdSC1") && (t = document.querySelector(".obd-sc1"),
    e = document.querySelector("#registerOBD"),
    t.classList.contains("show-screen") && (t.classList.remove("show-screen"),
    t.classList.add("hidden-screen"),
    e.classList.remove("hidden-screen"))),
    dataOnboardingRegister(),
    loadCountryPhoneCode()
}
function checkFATFObd() {
    var t = document.querySelector(".obd-sc1")
      , e = document.querySelector("#registerOBD");
    localStorage.setItem("isCheckedObdSC1", "true"),
    t.classList.contains("show-screen") && (t.classList.remove("show-screen"),
    t.classList.add("hidden-screen"),
    e.classList.remove("hidden-screen"));
    t = (new Date).getTime(),
    e = localStorage.getItem("setExpirationDateObd");
    null == e ? localStorage.setItem("setExpirationDateObd", t) : 6048e5 < t - e && (localStorage.clear(),
    localStorage.setItem("setExpirationDateObd", t))
}
function formRegister() {
    try {
        $("form#form-Register").validate({
            rules: {
                "first-name": "required",
                "your-email": {
                    required: !0,
                    email: !0,
                    valid_email: !0
                }
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": {
                    required: "Please enter a valid email address.",
                    email: "The format of this email address is incorrect.",
                    valid_email: "The format of this email address is incorrect."
                }
            },
            submitHandler: function(t) {
                document.getElementById("loading-button").style.display = "inline-block",
                document.querySelector(".obd-sc2 #btnSubmitRegister").disabled = !0,
                grecaptcha.ready(function() {
                    grecaptcha.execute("6LeJZ68UAAAAAJZ8jxdgylEXeWL8P9Ckv7CLtE6t", {
                        action: "orderStep1"
                    }).then(function(t) {
                        var e = {
                            first_name: $("#form-Register input[name=first-name]").val(),
                            email: $("#form-Register input[name=your-email]").val(),
                            phone: $("#form-Register input[name=your-phone]").val(),
                            phone_code: $("#form-Register select[name=slct-phone_code]").val(),
                            client_id: gaUserId,
                            captcha_response: t
                        }
                          , a = {
                            first_name: e.first_name,
                            email: e.email,
                            phone: 0 < e.phone.length ? "+" + e.phone_code + e.phone : "",
                            client_id: e.client_id,
                            website_id: 1
                        }
                          , t = altFind(readParamUrl(), function(t) {
                            return t.promotion_code
                        })
                          , n = "";
                        t && (n = "?promotion_code=" + t.promotion_code),
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e.captcha_response)
                            },
                            url: linkUrlOrderAPi + "/api/onboarding/customer" + n,
                            data: JSON.stringify(a),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && (e.signature = t.data,
                                localStorage.setItem("data_onboarding", JSON.stringify({
                                    Customer: e
                                })),
                                localStorage.setItem("signature", t.data.signature),
                                window.location.href = "/onboarding/select-service" + n)
                            },
                            error: function(t) {
                                console.log(t)
                            },
                            complete: function(t) {
                                document.getElementById("loading-button").style.display = "none",
                                document.querySelector(".obd-sc2 #btnSubmitRegister").disabled = !1
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {}
}
function dataOnboardingRegister() {
    try {
        var t = JSON.parse(localStorage.getItem("data_onboarding"));
        t && ($("#form-Register input[name=first-name]").val(t.Customer.first_name),
        $("#form-Register input[name=your-phone]").val(t.Customer.phone),
        $("#form-Register input[name=your-email]").val(t.Customer.email),
        $("#form-Register .placeholder").css("display", "none"))
    } catch (t) {}
}
function onloadSelectService() {
    try {
        var t, e = altFind(readParamUrl(), function(t) {
            return t.signature
        });
        document.querySelector("#back-step2 a").setAttribute("href", "/onboarding/register"),
        e && e.signature ? (t = linkUrlOrderAPi + "/api/onboarding/order/client/",
        $.ajax({
            type: "GET",
            url: t + e.signature,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (t = t.data,
                localStorage.setItem("signature", t))
            },
            error: function(t) {
                window.location.href = "/onboarding/register"
            },
            complete: function(t) {}
        })) : localStorage.getItem("signature") || (window.location.href = "/onboarding/register")
    } catch (t) {}
}
function isNumberPhone(t) {
    t = t.which || t.keyCode;
    return !(31 < t && (t < 48 || 57 < t))
}
$(function() {
    $("#incorpPayment").length && ($("#incorpPayment .btn-apply").on("click", function() {
        localStorage.setItem("payment_status", 0);
        try {
            $("#incorpPayment .btn-apply").attr("disabled", !0),
            $("#incorpPayment .btn-apply .loadding-icon").css("display", "inline-block");
            var t = altFind(readParamUrl(), function(t) {
                return t.order_code
            });
            switch ($('input[name="payment"]:checked').val()) {
            case "paypal":
                paymentPaypalOnboarding(t.order_code),
                $("#modal-paypal").modal("show");
                break;
            case "card":
                $("#modal-stripe #make-payment-submit .total-price").text(OrderInfo && OrderInfo.amount),
                paymentCardOnboarding(t.order_code),
                $("#modal-stripe").modal("show");
                break;
            case "bank":
                paymentBankOnboarding(t.order_code)
            }
            localStorage.removeItem("isJoinBank")
        } catch (t) {
            console.log(t)
        }
    }),
    $(".modal-popup .btn-close-modal").on("click", function() {
        $("#incorpPayment .btn-apply").attr("disabled", !1),
        $("#incorpPayment .btn-apply .loadding-icon").css("display", "none")
    }))
}),
$(function() {
    if ($("#sectionPackageIncorp").length)
        try {
            var e;
            (onboardingPackage = loadPackage()) && onboardingPackage.Packages && (onboardingPackage.Packages = onboardingPackage.Packages.map(function(t) {
                var e = t.Services && t.Services.reduce(function(t, e) {
                    return t + e.Fee.value
                }, 0);
                return t = _objectSpread(_objectSpread({}, t), {}, {
                    package_price: e
                })
            }),
            e = "",
            onboardingPackage.Packages.map(function(t) {
                switch (t.PackageType.id) {
                case 1:
                    e += '\n\t\t\t\t\t\t\t\t<div class="packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_1" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/pac-basic.png" alt="Basic package image" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class="title basic">' + t.PackageType.name + '</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p class="price basic">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="des">Easy company formation</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t';
                    break;
                case 2:
                    e += '\n\t\t\t\t\t\t\t\t<div class="packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_2" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/pac-standard.png" alt="Standard package image" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<h3 class="standard">' + t.PackageType.name + '</h3>\n\t\t\t\t\t\t\t\t\t\t\t<p class="price standard">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="des">with 1 bank application</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t';
                    break;
                case 3:
                    e += '\n\t\t\t\t\t\t\t\t\t<div class="packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_3" type="button">\n\t\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/pac-premium.png" alt="Premium package image" />\n\t\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class="premium">' + t.PackageType.name + '</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="price premium">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t\t<p class="des">Up to 5 bank applications</p>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t';
                    break;
                case 5:
                    e += '\n\t\t\t\t\t\t\t\t<div class="package-vn packages has-change-package" data-package-id="' + t.id + '" data-package-type-id="' + t.PackageType.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn pac-bankHover" onclick="getPackage(this)" data-pk_type="pk_1" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/vietnam-packages/joint-org.svg" alt="Package country viet nam" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<p class="price">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="name-packages">' + t.name + '</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t<div class="wrap-switch-change-package">\n\t\t\t\t\t\t\t\t\t\t<div class="switch-change-package">\n\t\t\t\t\t\t\t\t\t\t\t<div class="package-tooltip">\n\t\t\t\t\t\t\t\t\t\t\t\t<svg class="icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" title="InfoOutlined" data-ga-event-category="material-icons" data-ga-event-label="InfoOutlined" style="\n\t\t\t\t\t\t\t\t\t\t\t\t\t"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>\n\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="tooltiptext">\n\t\t\t\t\t\t\t\t\t\t\t\t\tThe price will change depending on whether company member is an individual or a corporation.\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<span class="fw-500">Individual</span>\n\t\t\t\t\t\t\t\t\t\t\t<label class="switch">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type="checkbox">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class="slider round"></span>\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t';
                    break;
                case 6:
                    e += '\n\t\t\t\t\t\t\t\t<div class="package-vn packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_1" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/vietnam-packages/wholly-owned foreign.svg" alt="Package country viet nam" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<p class="price">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="name-packages">' + t.name + "</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t";
                    break;
                case 7:
                    e += '\n\t\t\t\t\t\t\t\t<div class="package-vn packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_1" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/vietnam-packages/branch.svg" alt="Package country viet nam" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<p class="price">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="name-packages">' + t.name + "</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t";
                    break;
                case 8:
                    e += '\n\t\t\t\t\t\t\t\t<div class="package-vn packages pac-bankHover" data-package-id="' + t.id + '">\n\t\t\t\t\t\t\t\t\t<button class="btn" onclick="getPackage(this)" data-pk_type="pk_1" type="button">\n\t\t\t\t\t\t\t\t\t\t<img class="pac-obd" src="/images/onboarding/vietnam-packages/representative-office.svg" alt="Package country viet nam" />\n\t\t\t\t\t\t\t\t\t\t<div class="content">\n\t\t\t\t\t\t\t\t\t\t\t<p class="price">$' + t.package_price + '</p>\n\t\t\t\t\t\t\t\t\t\t\t<p class="name-packages">' + t.name + "</p>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t"
                }
            }),
            $("#sectionPackageIncorp .choose-package").html(e)),
            $("#sectionPackageIncorp .packages .btn").on("click", function(t) {
                selectPackage($(this).parent(".packages").attr("data-package-id"))
            }),
            $("#sectionPackageIncorp .switch-change-package .switch").on("change", function(t) {
                var e = $(this).parents(".packages").attr("data-package-type-id")
                  , a = "";
                $(this).find("input:checked").length ? (e = 4,
                a = "/images/onboarding/vietnam-packages/joint-ind.svg",
                console.log("Checked id: ", e)) : (e = 5,
                a = "/images/onboarding/vietnam-packages/joint-org.svg",
                console.log("Not checked id: ", e));
                var n = {};
                onboardingPackage.Packages.some(function(t) {
                    if (t.PackageType.id == e)
                        return n = t,
                        !0
                }),
                $(this).parents(".packages").attr("data-package-type-id", n.PackageType.id),
                $(this).parents(".packages").attr("data-package-id", n.id),
                $(this).parents(".packages").find(".pac-obd").attr("src", a),
                $(this).parents(".packages").find(".price").html("$" + n.package_price),
                $(this).parents(".packages").find(".name-packages").html(n.name)
            })
        } catch (t) {
            console.log(t)
        }
}),
$(".obd-sc1 #btnSubmitCheckObd").on("click", function() {
    checkFATFObd()
}),
$(".obd-sc2 #btnSubmitRegister").on("click", function() {
    formRegister()
}),
jQuery.validator.addMethod("valid_email", function(t) {
    return t.trim().match(/^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{1,5}$/)
});
var nameHint = [{
    id: 8,
    EntityTypes: [{
        id: "5",
        title: "Anguilla",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>A company name shall not:</p><p>Be the same as, or similar to, the name or business name of any other person or of any association, partnership or firm, if the use of that name would be likely to confuse or mislead unless the person, association, partnership or firm consents in writing to the use of that name in whole or in part.</p><p>Be identical to the name of a body corporate incorporated under the laws of Anguilla before 1st January, 1995</p><p>Suggest or imply:</p><ul class='list-disc'><li>The patronage of Her Majesty or any member of the Royal Family or connection with Her Majesty’s Government or any department thereof in the United Kingdom or elsewhere;</li><li>A connection with a political party or a leader of a political party;</li><li>A connection with a university or a professional association recognized by the laws of Anguilla unless the university or professional association concerned consents in writing to the use of the proposed name;</li></ul><p>Use of names of dissolved companies in following cases:</p><p class='consist'>Naming restrictions:</p><p>The company has been struck off the Register for a continuous period of more than 3 years; and</p><p>No application for the company to be restored to the Register has been filed and remains undetermined by the Registrar; and</p><p>No appeal against a refusal of the Registrar to restore the company to the Register pending.</p></div>"
    }]
}, {
    id: 17,
    EntityTypes: [{
        id: "5",
        title: "Bahamas",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>A company name shall not:</p><ul class='list-disc'><li>Be identical to existing companies incorporated under Bahamas IBC Act or the Companies act, or nearly resembles the name of another company as to be calculated to deceive, except where the company in existence gives its consent;</li><li>Contain, without express prior permission of the Registrar which permission may be withheld without assigning a reason, prohibited words by the regulations, or</li><li>Contain any other word that, in the opinion of the Registrar, suggests or is calculated to suggest the patronage of or any connection with Her Majesty or any member of the Royal Family or the Government of The Bahamas, a department thereof, a statutory corporation or board or a local or municipal authority;</li><li>Be indecent, offensive or, in the opinion of the Registrar is otherwise objectionable.</li></ul></div>"
    }]
}, {
    id: 32,
    EntityTypes: [{
        id: "2",
        title: "BVI",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>No company shall be registered under the name:</p><ul class='list-disc'><li>That the use of which would contravene the Regulations;</li><li>That is identical or so similar to the name of an existing company that the use of the name would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>That is identical or so similar to a name that has been reserved that the use of both names by different companies would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>That contains a restricted word or phrase, unless the Commission has given its prior written consent to the use of the word or phrase; or</li><li>That, in the opinion of the Registrar, is offensive or, for any other reason, objectionable.</li></ul><p>The name of a company may comprise the expression “BVI Company Number” followed by its company number in figures and the required ending that is appropriate for the company.</p><p class='consist'>Language of a company name:</p><p>A company may be registered with an additional foreign character name approved by the Registrar.</p><p class='consist'>Reuse of names previously used by companies that:</p><p> Have changed their name; or</p><p> Have been struck off the Register, but not dissolved; or</p><p> Have been  dissolved ; or</p><p> Have been registered but, in respect of which, the Registrar has issued a certificate of discontinuance.</p></div>"
    }]
}, {
    id: 23,
    EntityTypes: [{
        id: "5",
        title: "Belize",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>A company name shall not:</p><ul class='list-disc'><li>Be identical with that under which a company in existence is already incorporated or so nearly resembles the name as to be calculated to deceive;</li><li>Contain the words “Building Society”, “Chamber of  Commerce”,  “Chartered”,  “Cooperative”,  “Imperial”,  “Monarchy”, “Municipal”,  “Royal”,  or  a  word  conveying a similar meaning, or any other word that, in the opinion of the Registrar, suggests or is calculated to suggest the patronage of Her Majesty or that of a member of the Royal Family; or a  connection  with  the  Government  of  Belize or a department thereof;</li><li>Be indecent, offensive or, in the opinion of the Registrar, objectionable;</li><li>Contain any one or more of the words  “Academy”, “Asset Management”, “Assurance”, “Bank”, “Brokerage”, “Credit Union”, “Education”, “Fiduciary”, “Financial”, “Foreign Exchange”, “Forex”, “Fund”, “Investment Management”, “Insurance”, “Lending”, “Securities”, “Trust”, or  “University”  or any of their derivatives or cognate expressions, unless  it is licensed under the enactment or enactments that authorize it to carry on the business or activities associated with the word or words, so contained;</li><li>Contain the top level domain such as “.com”, “.org”, “.net” or “.bz”of a domain name.</li></ul><p class='consist'>Language of a company name:</p><p>The name of a company shall be registered in Roman script, but a company may elect to register as an alternative name an accurate translation of the name registered in Roman script, and which name may be expressed in any script.</p></div>"
    }]
}, {
    id: 41,
    EntityTypes: [{
        id: "4",
        title: "Cayman Islands",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>No company shall be registered by a name which</p><ul class='list-disc'><li>Is identical with a name by which a company in existence is already registered or any translated name entered on the register of companies, or so nearly resembles such name or translated name so as to be calculated to deceive, except where the company in existence is in the course of being dissolved and signified its consent in such manner as the Registrar requires;</li><li>Contains the words “Chamber of Commerce” unless the company is a company which is to be registered under a licence granted by the Governor without the addition of the word “Limited” or the abbreviation “Ltd.” to its name;</li><li>Contains the words “building society”;</li><li>Includes at its end “Limited Duration Company” or “LDC” unless it was an exempted limited duration company.</li><li>Includes the words “Special Economic Zone Company” or the letters “SEZC” unless it was a special economic zone company.</li></ul><p>Except with the consent of the Registrar, no company shall be registered by a name which</p><ul class='list-disc'><li>Contains the words “royal”, “imperial” or “empire” or in the opinion of the Registrar suggests, or is calculated to suggest the patronage of Her Majesty or of any member of the Royal Family or connection with Her Majesty’s Government or any department thereof in the United Kingdom or elsewhere;</li><li>Contains the words “municipal” or “chartered” or any words which in the opinion of the Registrar suggest, or are calculated to suggest, connection with any public board or other local authority or with any society or body incorporated by Royal Charter;</li><li>Contains the words “co-operative”, “assurance”, “bank”, “insurance”, or any similar word which in the opinion of the Registrar connotes any of such activities or any derivative of any of such four words or of such similar words, whether in English or in any other language, or in the opinion of the Registrar suggests or is calculated to suggest any of such activities; or</li><li>Contains the word “gaming” or “lottery” or any similar word which in the opinion of the Registrar connotes any such activity or any derivative of such words or of such similar word, whether in English or in any other language, or in the opinion of the Registrar suggests or is calculated to suggest any such activity.</li></ul></div>"
    }]
}, {
    id: 139,
    EntityTypes: [{
        id: "1",
        title: "Mauritius",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>No company shall be registered under a name which is identical with that of an existing company, or statutory corporation, except where the existing company or statutory corporation is in the course of being dissolved and signifies its consent in such manner as the Registrar requires.</p> <p>Except with  the Registrar’s written consent, no  company shall be registered under a name which includes:</p><ul class='list-disc'><li>The word “Authority”, “Corporation”, “Government”, “Mauritius”,“National”,“President”,“Presidential”,“Regional”, ''Republic'',“State”, or any other word which in the Registrar’s opinion suggests, or is likely to suggest, that it enjoys the patronage of the Government or of a statutory  corporation, or of the Government of any other State;</li> <li>The word “Municipal” or “Chartered” or any other word which inthe Registrar’s opinion suggests, or is likely to suggest, connection with a local authority in Mauritius or elsewhere;</li> <li>The word “co-operative”;</li> <li>The words “Chamber of Commerce”.</li></ul> <p>Except with the consent of the Court no company shall be registered by a name, which in the opinion of the Registrar is undesirable or misleading.</p></div>"
    }]
}, {
    id: 183,
    EntityTypes: [{
        id: "6",
        title: "Samoa",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>Except with the consent of the Authority, an international company shall not be registered by a name that, in the opinion of the Registrar, is undesirable or is a name, or includes a name, of a kind that the Registrar is not otherwise willing to accept for registration.</p></div>"
    }]
}, {
    id: 205,
    EntityTypes: [{
        id: "5",
        title: "Saint Kitts (BC)",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p> <p>The name of a corporation:</p><ul class='list-disc'><li>Shall not be the same as the name of a corporation of any type or kind, as such name appears on the register of corporations or on the reserved namelist of corporations maintained by the Registrar of Corporations or a name so similar to any such name as to tend to confuse or deceive.</li><li>Shall not be the same as the name of a corporation of any type or kind, as such name appears on the register of corporations or on the reserved namelist of corporations maintained by the Registrar of Corporations or a name so similar to any such name as to tend to confuse or deceive.</li></ul> <p class='consist'>Language of a company name:</p><p>The name of the corporation on the Articles of Incorporation may be written in characters using the Latin alphabet or any other alphabet.</p><p>If the name of the corporation is not written in the Latin alphabet, then the name on the Articles of Incorporation must also include an authenticated translation.</p></div>"
    }, {
        id: "11",
        title: "Saint Kitts (LLC)",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Naming restrictions:</p><p>The name of a limited liability company shall not be the same as the name of a limited liability company or of any other company of any type or kind, as such name appears on the register of companies or on the reserved name list of companies maintained by the Registrar of Companies or a name so similar to any such name as to tend to confuse or deceive.</p><p class='consist'>Language of a company name:</p><p>The name of the limited liability company on the articles of organisation may bewritten in characters using the Latin alphabet or any other alphabet.</p><p>If the name of the limited liability company is not written in the Latin alphabet, thename on the articles of organisation must also include an authenticated translatio</p></div>"
    }]
}, {
    id: 189,
    EntityTypes: [{
        id: "5",
        title: "Seychelles",
        content: "<div class='scroll-content__sidebar'><p class='consist'>Restrictions on company names</p><p>A company name shall not:</p><ul class='list-disc'><li>be identical or so similar to the name under which another company is registered that the use of the name would, in the opinion of the Registrar, be likely to confuse or mislead;</li><li>include a prohibited or restricted word, phrase or abbreviation , unless the prior written consent to the use of the word, phrase or abbreviation has been given by the Registrar and any other regulatory body whose consent  thereto is required under Seychelles law; or</li><li>in the opinion of the Registrar<ul><li>suggest or is calculated to suggest the patronage or any connection with the Government of Seychelles or the government of any other country; or</li><li>is in any way offensive, misleading, objectionable or contrary to public policy or to the public interest.</li></ul></li></ul><p>Language of company name:</p><p>A company name may be expressed in any language.</p><p>Where the name is not in the English or French language a translation of the name in the English or French language shall be given to the Registrar certified as true and accurate by an acceptable translator.</p><p>Where the name of a company is in the English or French language, it may have an additional foreign character name.</p><p class='consist'>Reuse of a company name in following cases:</p><p>A company that has</p><ul class='list-disc'><li>changed its name; or</li><li>been  dissolved; or</li></ul><p>A discontinued company</p></div>"
    }]
}];
function openSideBar() {
    document.getElementById("content-sideBar").style.width = "448px",
    document.getElementById("content-sideBar").classList.add("padding-sidebar")
}
function closeSideBar() {
    document.getElementById("content-sideBar").style.width = "0",
    document.getElementById("content-sideBar").classList.remove("padding-sidebar")
}
function generateSideBar() {
    for (var t = 0, e = nameHint; t < e.length; t++) {
        var a = e[t]
          , n = JSON.parse(localStorage.getItem("data_onboarding"));
        if (n && 244 === n.country_id && $(".onboarding-page").addClass("class-exclude__VN"),
        a.id && a.id == n.country_id) {
            var i, r = _createForOfIteratorHelper(a.EntityTypes);
            try {
                for (r.s(); !(i = r.n()).done; ) {
                    var o = i.value;
                    o.id && o.id == n.entity_type_id && (document.querySelector(".onboarding-page #guideNameHint").innerHTML = "<p>Need a guide for naming ? <a class='text-blue__strong' href='javascript:void(0)' onclick='openSideBar()'>CLICK HERE</a></p>",
                    document.querySelector(".onboarding-page .cIcon #guideNameHintRes").innerHTML = "<a class='text-blue__strong' href='javascript:void(0)' onclick='openSideBar()'><span class='icon'></span></a>",
                    document.querySelector(".onboarding-page .content-sideBar #titleNameHint").innerHTML = o.title,
                    document.querySelector(".onboarding-page .content-sideBar #nameHint").innerHTML = o.content)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
}
var $menu_onboarding = $(".onboarding-page #headerOnboarding");
function menuOnboarding(t) {
    t.classList.toggle("close"),
    $menu_onboarding.toggleClass("menu-mobile")
}
function selectDropdownPosition(t) {
    var e = $(t).find(".dropdown.bootstrap-select")
      , a = $(t).find(".dropdown-menu.open")
      , t = e.offset();
    a.css({
        position: "fixed",
        top: t.top + e.outerHeight() + "px",
        left: t.left + "px",
        "min-width": e.outerWidth(),
        width: "min-content"
    })
}
function getPackage(t) {
    var e, a, n, i = [];
    try {
        switch (t.dataset.pk_type) {
        case "pk_1":
            i = loadPackage().Packages[0].Services,
            n = !(e = 1);
            break;
        case "pk_2":
            i = loadPackage().Packages[1].Services,
            e = 2,
            n = !0;
            break;
        case "pk_3":
            i = loadPackage().Packages[2].Services,
            e = 3,
            n = !0
        }
        switch (t.dataset.bank_type) {
        case "bank_1":
            n = !(a = 88);
            break;
        case "bank_5":
            n = !(a = 1670)
        }
        localStorage.setItem("check_noti_progress", JSON.stringify({
            package_type: e,
            listService: i,
            bank_type: a,
            incorp_to_bank: n
        }))
    } catch (t) {
        console.log(t)
    }
}
function displayProgressBar() {
    var t = JSON.parse(localStorage.getItem("check_noti_progress"));
    t && (0 == t.incorp_to_bank ? $(".onboarding-page .id_progressBar_choiceBank").css("display", "block") : $(".onboarding-page .id_progressBar_choiceBank").css("display", "none"))
}
function progressOrderSummary() {
    var t = JSON.parse(localStorage.getItem("check_noti_progress"));
    t && t.package_type ? $(".onboarding-page #progressOrderSummary").html("<li class='success'>Country and company type</li> <li class='success'>Entity name check</li><li class='success'>Service packages</li><li class='actives'>Confirm &amp; pay</li><li>Notification</li>") : t && t.bank_type && $(".onboarding-page #progressOrderSummary").html("<li class='success'>Service packages</li><li class='success'>Take your choices</li><li class='success'>Banking assessment</li><li class='actives'>Confirm &amp; pay</li><li>Notification</li>")
}
function getSignature() {
    var e = null
      , t = readParamUrl()
      , a = altFind(t, function(t) {
        return t.promotion_code
    })
      , t = altFind(t, function(t) {
        return t.signature
    });
    if (t && (urlParamOnboarding = "?signature=" + t.signature,
    a && (urlParamOnboarding += "&promotion_code=" + a.promotion_code)),
    t && t.signature) {
        a = linkUrlOrderAPi + "/api/onboarding/order/client/";
        try {
            $.ajax({
                async: !1,
                type: "GET",
                url: a + t.signature,
                data: null,
                contentType: "application/json",
                success: function(t) {
                    t.state && (localStorage.setItem("signature", t.data.signature),
                    e = t.data)
                },
                error: function(t) {
                    localStorage.removeItem("signature"),
                    localStorage.removeItem("data_onboarding"),
                    window.location.href = "/onboarding/register"
                },
                complete: function(t) {}
            })
        } catch (t) {
            console.log(t)
        }
    } else
        localStorage.getItem("signature") ? checkDataLocalAndRedirect() : window.location.href = "/onboarding/register";
    return e
}
$(".onboarding-page #headerOnboarding .nav-bar-container.close").on("click", function() {
    $(".nav-bar-container").removeClass("close")
});
var urlParamOnboarding = "", listAllEntityType, listAllCompanySuffix, countrySelect, entitySelect;
function onloadRedirect() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.promotion_code
    })
      , t = altFind(t, function(t) {
        return t.signature
    });
    if (t && (urlParamOnboarding = "?signature=" + t.signature,
    e && (urlParamOnboarding += "&promotion_code=" + e.promotion_code)),
    t && t.signature) {
        e = linkUrlOrderAPi + "/api/onboarding/order/client/";
        try {
            $.ajax({
                type: "GET",
                async: !1,
                url: e + t.signature,
                data: null,
                contentType: "application/json",
                success: function(t) {
                    if (t.state) {
                        var e = t.data;
                        localStorage.setItem("signature", e.signature);
                        var a = localStorage.getItem("data_onboarding")
                          , t = !0;
                        if (e.company_country_id)
                            244 == e.company_country_id ? (localStorage.setItem("data_onboarding", JSON.stringify({
                                country_id: parseInt(e.company_country_id),
                                entity_type_id: null
                            })),
                            e.company_name ? (a = {
                                country_id: parseInt(e.company_country_id),
                                entity_type_id: parseInt(e.entity_type_id),
                                CompanyNames: [{
                                    id: Date.now(),
                                    isValid: !0,
                                    name: e.company_name,
                                    suffix: null,
                                    suffix_id: null
                                }]
                            },
                            localStorage.setItem("data_onboarding", JSON.stringify(a)),
                            $("#entityNameCheck").length && (t = !1),
                            (t = $("#sectionPackageIncorp").length ? !1 : t) && (window.location.href = "/onboarding/incorporation-entity-name-check" + urlParamOnboarding)) : ($("#sectionCountry").length && (t = !1),
                            (t = $("#entityNameCheck").length ? !1 : t) && (window.location.href = "/onboarding/incorporation-country" + urlParamOnboarding))) : e.company_country_id && e.entity_type_id ? (localStorage.setItem("data_onboarding", JSON.stringify({
                                country_id: parseInt(e.company_country_id),
                                entity_type_id: e.entity_type_id
                            })),
                            e.company_name && e.company_suffix_id ? (a = {
                                country_id: parseInt(e.company_country_id),
                                entity_type_id: parseInt(e.entity_type_id),
                                CompanyNames: [{
                                    id: Date.now(),
                                    isValid: !0,
                                    name: e.company_name,
                                    suffix: e.CompanySuffix.name,
                                    suffix_id: e.entity_type_id
                                }]
                            },
                            localStorage.setItem("data_onboarding", JSON.stringify(a)),
                            $("#sectionCountry").length && (t = !1),
                            (t = $("#entityNameCheck").length ? !1 : t) && (window.location.href = "/onboarding/incorporation-entity-name-check" + urlParamOnboarding)) : ($("#sectionCountry").length && (t = !1),
                            (t = $("#entityNameCheck").length ? !1 : t) && (window.location.href = "/onboarding/incorporation-country" + urlParamOnboarding))) : (t = $("#sectionCountry").length || $("#entityNameCheck").length ? !1 : t) && (window.location.href = "/onboarding/incorporation-country" + urlParamOnboarding);
                        else {
                            a = localStorage.getItem("data_onboarding"),
                            t = "/onboarding/incorporation-country" + urlParamOnboarding;
                            try {
                                null === a ? ($("#sectionCompanyType").length && (window.location.href = t),
                                $("#entityNameCheck").length && (window.location.href = t),
                                $("#sectionPackageIncorp").length && (window.location.href = t),
                                $("#additionalService").length && (window.location.href = t)) : ((a = JSON.parse(a)).country_id || ($("#sectionCompanyType").length && (window.location.href = t),
                                $("#entityNameCheck").length && (window.location.href = t),
                                $("#sectionPackageIncorp").length && (window.location.href = t),
                                $("#additionalService").length && (window.location.href = t)),
                                !a.Packages && $("#additionalService").length && (window.location.href = t))
                            } catch (t) {
                                console.error()
                            }
                        }
                    }
                },
                error: function(t) {
                    localStorage.removeItem("signature"),
                    localStorage.removeItem("data_onboarding"),
                    window.location.href = "/onboarding/register"
                },
                complete: function(t) {}
            })
        } catch (t) {
            console.log(t)
        }
    } else
        localStorage.getItem("signature") ? checkDataLocalAndRedirect() : window.location.href = "/onboarding/register"
}
function checkDataLocalAndRedirect() {
    var t = localStorage.getItem("data_onboarding");
    try {
        null === t ? ($("#sectionCountry").length && (window.location.href = "/onboarding/register"),
        $("#sectionCompanyType").length && (window.location.href = "/onboarding/register"),
        $("#entityNameCheck").length && (window.location.href = "/onboarding/register"),
        $("#sectionPackageIncorp").length && (window.location.href = "/onboarding/register"),
        $("#additionalService").length && (window.location.href = "/onboarding/register")) : ((t = JSON.parse(t)).country_id ? 244 === t.country_id || t.entity_type_id || $("#entityNameCheck").length && (window.location.href = "/onboarding/register") : ($("#sectionCompanyType").length && (window.location.href = "/onboarding/register"),
        $("#entityNameCheck").length && (window.location.href = "/onboarding/register"),
        $("#sectionPackageIncorp").length && (window.location.href = "/onboarding/register"),
        $("#additionalService").length && (window.location.href = "/onboarding/register")),
        !t.Packages && $("#additionalService").length && (window.location.href = "/onboarding/register"))
    } catch (t) {
        console.error()
    }
}
function putApiOrderClient(t) {
    var e = !1
      , a = linkUrlOrderAPi + "/api/onboarding/order/client/";
    try {
        $.ajax({
            async: !1,
            type: "PUT",
            url: a + localStorage.getItem("signature"),
            data: JSON.stringify(t),
            contentType: "application/json",
            success: function(t) {
                e = !0
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
    return e
}
function load_order_success() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.order_code
    })
      , t = altFind(t, function(t) {
        return t.type_payment
    });
    e ? loadOrderSuccessAPI(e, t) : loadPaymentSuccess()
}
function loadOrderSuccessAPI(t) {
    try {
        var e = linkUrlOrderAPi + "/api/portal/order/";
        $.ajax({
            type: "GET",
            url: e + t.order_code,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (viewOrderSuccess(t.data),
                "0" === localStorage.getItem("track_order") && (dataLayer.push({
                    event: "tracking.ordersuccess",
                    data: {
                        Amount: t.data.paid_amount,
                        OrderID: t.data.id,
                        Fullname: t.data.Customer.first_name,
                        Email: t.data.Customer.email
                    }
                }),
                localStorage.setItem("track_order", "1"))),
                console.log(t)
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function viewOrderSuccess(t) {
    document.querySelector("#paymented-content-msg").style.display = "block",
    document.querySelector(".banner-with-title .title").innerHTML = "Successful Payment",
    document.title = "Successful Payment Notification - BBCIncorp Limited",
    document.querySelector("#dear-msg").innerHTML = "Dear " + t.Customer.TitleName.name + t.Customer.first_name,
    document.querySelector("#customer-email").innerHTML = t.Customer.email,
    document.querySelector("#customer-name").innerHTML = t.Customer.first_name,
    document.querySelector("#amount").innerHTML = t.paid_amount + "USD",
    t.your_order ? document.querySelector("#order-payment .order-id").innerHTML = t.your_order : document.querySelector("#order-payment").style.display = "none",
    t.message ? document.querySelector("#message-payment .order-id").innerHTML = t.message : document.querySelector("#message-payment").style.display = "none",
    document.querySelector("#payment-method").innerHTML = t.PaymentGateway.name
}
function loadPaymentSuccess() {
    document.querySelector("#paymented-content-msg").style.display = "block",
    document.querySelector(".banner-with-title .title").innerHTML = "Successful Payment",
    document.title = "Successful Payment Notification - BBCIncorp Limited";
    var t = JSON.parse(localStorage.getItem("myForms"));
    switch (document.querySelector("#dear-msg").innerHTML = "Dear " + t.first_name,
    document.querySelector("#customer-email").innerHTML = t.email,
    document.querySelector("#customer-name").innerHTML = t.first_name,
    document.querySelector("#amount").innerHTML = t.amount + "USD",
    t.your_order ? document.querySelector("#order-payment .order-id").innerHTML = t.your_order : document.querySelector("#order-payment").style.display = "none",
    t.message ? document.querySelector("#message-payment .order-id").innerHTML = t.message : document.querySelector("#message-payment").style.display = "none",
    t.type_payment) {
    case "paypal":
        document.querySelector("#payment-method").innerHTML = "International Card via Paypal Gateway";
        break;
    case "Card":
        document.querySelector("#payment-method").innerHTML = "International Card via Stripe Gateway"
    }
}
function onloadStep1() {
    loadDataStep1(),
    loadCountryPhoneCode(),
    localStorage.removeItem("step2")
}
function showAccountingStep(t) {
    t && "191" == t ? ($(".order-step1 .tab-step .is_show").css("display", "inline-block"),
    $(".order-step1 .tab-step .is_showmobile").css("visibility", "visible")) : ($(".order-step1 .tab-step .is_show").css("display", "none"),
    $(".order-step1 .tab-step .is_showmobile").css("visibility", "hidden"))
}
function loadDataStep1() {
    try {
        listAllEntityType = JSON.parse(document.querySelector("#form-step1 .form-entity").getAttribute("data_entity")),
        listAllCompanySuffix = JSON.parse(document.querySelector("#form-step1 .form-company_suffix").getAttribute("data_company_suffix"));
        var t = JSON.parse(localStorage.getItem("step1"));
        showAccountingStep(countrySelect = t ? t.company_country_id : $("#form-step1 select[name=slct-country]").val()),
        countrySelect && "191" == countrySelect ? ($(".order-step1 .tab-step .is_show").css("display", "inline-block"),
        $(".order-step1 .tab-step .is_showmobile").css("visibility", "visible")) : ($(".order-step1 .tab-step .is_show").css("display", "none"),
        $(".order-step1 .tab-step .is_showmobile").css("visibility", "hidden"));
        var e, a, n, i = readParamUrl();
        t && ($("#form-step1 input[name=your-company]").val(t.company_name),
        $("#form-step1 input[name=full-name]").val(t.first_name),
        $("#form-step1 input[name=your-phone]").val(t.phone),
        $("#form-step1 input[name=your-email]").val(t.email),
        $("#form-step1 select[name=slct-title]").val(t.title_name_id),
        $("#form-step1 select[name=slct-country").val(t.company_country_id),
        $("#form-step1 .placeholder").css("display", "none")),
        i && (e = altFind(i, function(t) {
            return t.countryId
        }),
        a = altFind(i, function(t) {
            return t.companyName
        }),
        e && (countrySelect = e.countryId,
        $("#form-step1 select[name=slct-country").val(countrySelect)),
        a && (n = a.companyName,
        $("#form-step1 input[name=your-company]").val(decodeURIComponent(n)),
        $("#form-step1 .your-company .placeholder").css("display", "none"))),
        loadListEntityType(countrySelect, listAllEntityType, t)
    } catch (t) {
        console.log(t)
    }
}
function loadListEntityType(e, t, a) {
    t = t.filter(function(t) {
        return JSON.parse(t.country).includes(parseInt(e))
    });
    if (document.querySelector("#form-step1 .form-entity #slct-entity").innerHTML = "",
    t.forEach(function(t) {
        var e = document.createElement("option");
        e.setAttribute("value", t.id),
        e.setAttribute("guid", t.guid),
        e.setAttribute("enity_name", t.name),
        e.innerHTML = t.name,
        document.querySelector("#form-step1 .form-entity #slct-entity").appendChild(e)
    }),
    a)
        for (var n = document.querySelector("#slct-entity").options, i = 0, r = n.length; i < r; i++)
            if (n[i].getAttribute("value") == a.entity_type_id) {
                $("select[name=slct-entity]").val("" + n[i].value),
                $(".selectpicker").selectpicker("refresh");
                break
            }
    entitySelect = $("#form-step1 select[name=slct-entity]").val(),
    loadListCompanySuffix(countrySelect, entitySelect, listAllCompanySuffix, a)
}
function loadListCompanySuffix(e, a, t, n) {
    t = t.filter(function(t) {
        return t.country.includes(parseInt(e))
    }).filter(function(t) {
        return t.entity.includes(parseInt(a))
    });
    if (document.querySelector("#form-step1 .form-company_suffix #slct-company_suffix").innerHTML = "",
    t.forEach(function(t) {
        var e = document.createElement("option");
        e.setAttribute("value", t.id),
        e.setAttribute("suffix_name", t.name),
        e.innerHTML = t.name,
        document.querySelector("#form-step1 .form-company_suffix #slct-company_suffix").appendChild(e)
    }),
    n)
        for (var i = document.querySelector("#slct-company_suffix").options, r = 0, o = i.length; r < o; r++)
            if (i[r].getAttribute("value") == n.company_suffix_id) {
                $("select[name=slct-company_suffix]").val("" + i[r].value);
                break
            }
    $(".selectpicker").selectpicker("refresh")
}
function loadCountryPhoneCode() {
    try {
        $.ajax({
            type: "GET",
            url: linkUrlOrderAPi + "/api/helper/geoLooking",
            data: null,
            contentType: "application/json",
            success: function(t) {
                if (t.data)
                    for (var e = document.querySelector("#slct-phone_code").options, a = 0, n = e.length; a < n; a++)
                        if (e[a].getAttribute("country-code") == t.data.country) {
                            $("select[name=slct-phone_code]").val("" + e[a].value),
                            $(".selectpicker").selectpicker("refresh");
                            break
                        }
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function order_step1_fn() {
    try {
        $("form#form-step1").validate({
            rules: {
                "your-company": "required",
                "full-name": "required",
                "your-title": "required",
                "your-email": "required",
                "slct-country": "required",
                "slct-title": "required",
                "slct-entity": "required",
                "slct-company_suffix": "required"
            },
            messages: {
                "your-company": "This field is required.",
                "full-name": "This field is required.",
                "your-email": "This field is required.",
                "slct-country": "This field is required.",
                "slct-title": "This field is required.",
                "slct-entity": "This field is required."
            },
            submitHandler: function(t) {
                document.getElementById("loading-button").style.display = "inline-block",
                document.querySelector(".order-step1 #button-form-step1").disabled = !0,
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "orderStep1"
                    }).then(function(t) {
                        var e = {
                            company_name: $("#form-step1 input[name=your-company]").val(),
                            company_suffix_name: $("#form-step1 select[name=slct-company_suffix] option:selected").attr("suffix_name"),
                            company_suffix_id: $("#form-step1 select[name=slct-company_suffix]").val(),
                            first_name: $("#form-step1 input[name=full-name]").val(),
                            email: $("#form-step1 input[name=your-email]").val(),
                            company_country_id: $("#form-step1 select[name=slct-country]").val(),
                            entity_type_id: $("#form-step1 select[name=slct-entity]").val(),
                            phone: $("#form-step1 input[name=your-phone]").val(),
                            phone_code: $("#form-step1 select[name=slct-phone_code]").val(),
                            title_name_id: $("#form-step1 select[name=slct-title]").val(),
                            client_id: gaUserId,
                            captcha_response: t
                        }
                          , a = $("#form-step1 .form-nation option:selected").data("guid")
                          , n = $("#form-step1 select[name=slct-entity] option:selected").attr("guid");
                        localStorage.setItem("companyName", JSON.stringify(e.company_name));
                        var i = {
                            company_name: e.company_name + " " + e.company_suffix_name,
                            first_name: e.first_name,
                            email: e.email,
                            company_country_id: e.company_country_id,
                            entity_type_id: e.entity_type_id,
                            phone: 0 < e.phone.length ? "+" + e.phone_code + e.phone : "",
                            title_name_id: e.title_name_id,
                            captcha_response: e.captcha_response,
                            client_id: e.client_id,
                            website_id: 1
                        }
                          , t = altFind(readParamUrl(), function(t) {
                            return t.promotion_code
                        })
                          , r = "";
                        t && (r = "?promotion_code=" + t.promotion_code),
                        $.ajax({
                            type: "POST",
                            url: linkUrlOrderAPi + "/api/portal/order/step1" + r,
                            data: JSON.stringify(i),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && (e.signature = t.data,
                                localStorage.setItem("step1", JSON.stringify(e)),
                                localStorage.setItem("signature", t.data),
                                window.location.href = "/order/" + a + "-" + n + "-step2" + r)
                            },
                            error: function(t) {
                                console.log(t)
                            },
                            complete: function(t) {
                                document.getElementById("loading-button").style.display = "none",
                                document.querySelector(".order-step1 #button-form-step1").disabled = !1
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
$("#form-step1 select[name=slct-country]").on("load change", function() {
    showAccountingStep(countrySelect = $("#form-step1 select[name=slct-country]").val()),
    loadListEntityType(countrySelect, listAllEntityType, void 0),
    loadListCompanySuffix(countrySelect, entitySelect, listAllCompanySuffix, void 0)
}),
$("#form-step1 select[name=slct-entity]").on("load change", function() {
    entitySelect = $("#form-step1 select[name=slct-entity]").val(),
    loadListCompanySuffix(countrySelect, entitySelect, listAllCompanySuffix, void 0)
}),
$(document).on("change", ".selectpicker", function() {
    $(".selectpicker").selectpicker("refresh")
}),
$("#button-form-step1").on("click", function() {
    order_step1_fn()
});
var listServicePk1 = [], listServicePk2 = [], listServicePk3 = [], priceAddPk1 = 0, priceAddPk2 = 0, priceAddPk3 = 0, pricePk1 = 0, pricePk2 = 0, pricePk3 = 0, priceInitPk1, priceInitPk2, priceInitPk3;
function convertCompanyName(t, e, a) {
    var t = t.trim()
      , n = t.substring(t.lastIndexOf(" ") + 1, t.length)
      , e = e.find(function(t) {
        return t.name.includes(n) && t.country.includes(a)
    });
    return {
        company_name: t.substring(0, t.indexOf(e.name)),
        company_suffix_name: e.name,
        company_suffix_id: e.id
    }
}
function onloadStep2() {
    try {
        var t, e, a, n = readParamUrl(), i = altFind(n, function(t) {
            return t.signature
        }), r = altFind(n, function(t) {
            return t.promotion_code
        });
        priceInitPk1 = parseInt(document.querySelector("#price_total_pk1").getAttribute("data-init_ppk1")),
        priceInitPk2 = parseInt(document.querySelector("#price_total_pk2").getAttribute("data-init_ppk2")),
        priceInitPk3 = parseInt(document.querySelector("#price_total_pk3").getAttribute("data-init_ppk3")),
        r ? document.querySelector("#back-step2 a").setAttribute("href", "/order/step1?promotion_code=" + r.promotion_code) : document.querySelector("#back-step2 a").setAttribute("href", "/order/step1"),
        i && i.signature ? (t = linkUrlOrderAPi + "/api/portal/order/client/",
        $.ajax({
            type: "GET",
            url: t + i.signature,
            data: null,
            contentType: "application/json",
            success: function(t) {
                var e;
                t.state ? (e = t.data,
                t = JSON.parse(document.querySelector(".order-page .section-package").getAttribute("data_company_suffix")),
                t = {
                    company_name: (t = convertCompanyName(e.company_name, t, e.company_country_id)).company_name,
                    company_suffix_name: t.company_suffix_name,
                    company_suffix_id: t.company_suffix_id,
                    first_name: e.first_name,
                    email: e.email,
                    company_country_id: e.company_country_id,
                    entity_type_id: e.entity_type_id,
                    phone: "",
                    title_name_id: e.title_name_id,
                    website_id: e.website_id
                },
                document.querySelector(".order-page #title_package").innerHTML = "Select your package for " + e.company_name,
                localStorage.setItem("step1", JSON.stringify(t)),
                localStorage.setItem("signature", e.signature)) : window.location.href = "/404"
            },
            error: function(t) {
                console.log(t),
                window.location.href = "/404"
            },
            complete: function(t) {}
        })) : (localStorage.getItem("signature") || (window.location.href = "/order/step1"),
        (e = JSON.parse(localStorage.getItem("step1"))) && (document.querySelector(".order-page #title_package").innerHTML = "Select your package for " + e.company_name + " " + e.company_suffix_name),
        (a = JSON.parse(localStorage.getItem("step2"))) && (listServicePk1 = a.listService1,
        listServicePk2 = a.listService2,
        listServicePk3 = a.listService3,
        a.listService1.forEach(function(t) {
            document.getElementById(t.service_id + "_1").checked = !0
        }),
        a.listService2.forEach(function(t) {
            document.getElementById(t.service_id + "_2").checked = !0
        }),
        a.listService3.forEach(function(t) {
            document.getElementById(t.service_id + "_3").checked = !0
        }),
        changePrice("price_total_pk1", priceInitPk1, a.pricePk1),
        changePrice("price_total_pk2", priceInitPk2, a.pricePk2),
        changePrice("price_total_pk3", priceInitPk3, a.pricePk3),
        priceAddPk1 = a.pricePk1,
        priceAddPk2 = a.pricePk2,
        priceAddPk3 = a.pricePk3))
    } catch (t) {
        console.log(t)
    }
}
function selectFn(t) {
    var e = JSON.parse(t.value);
    (t.checked ? addIdService : removeIdservice)(t.dataset.pk_type, e)
}
function addIdService(t, e) {
    switch (t) {
    case "pk_1":
        listServicePk1.push({
            service_id: e.id
        }),
        priceAddPk1 += e.Fee.value,
        changePrice("price_total_pk1", priceInitPk1, priceAddPk1),
        pricePk1 = priceInitPk1 + priceAddPk1;
        break;
    case "pk_2":
        listServicePk2.push({
            service_id: e.id
        }),
        priceAddPk2 += e.Fee.value,
        changePrice("price_total_pk2", priceInitPk2, priceAddPk2),
        pricePk2 = priceInitPk2 + priceAddPk2;
        break;
    case "pk_3":
        listServicePk3.push({
            service_id: e.id
        }),
        priceAddPk3 += e.Fee.value,
        changePrice("price_total_pk3", priceInitPk3, priceAddPk3),
        pricePk3 = priceInitPk3 + priceAddPk3
    }
}
function removeIdservice(t, e) {
    switch (t) {
    case "pk_1":
        listServicePk1 = listServicePk1.filter(function(t) {
            return t.service_id !== e.id
        }),
        priceAddPk1 -= e.Fee.value,
        changePrice("price_total_pk1", priceInitPk1, priceAddPk1),
        pricePk1 = priceInitPk1 + priceAddPk1;
        break;
    case "pk_2":
        listServicePk2 = listServicePk2.filter(function(t) {
            return t.service_id !== e.id
        }),
        priceAddPk2 -= e.Fee.value,
        changePrice("price_total_pk2", priceInitPk2, priceAddPk2),
        pricePk2 = priceInitPk2 + priceAddPk2;
        break;
    case "pk_3":
        listServicePk3 = listServicePk3.filter(function(t) {
            return t.service_id !== e.id
        }),
        priceAddPk3 -= e.Fee.value,
        changePrice("price_total_pk3", priceInitPk3, priceAddPk3),
        pricePk3 = priceInitPk3 + priceAddPk3
    }
}
function getStartedStep2(t, e) {
    try {
        var a, n = [];
        switch (t.dataset.pk_type) {
        case "pk_1":
            n = listServicePk1,
            a = 1;
            break;
        case "pk_2":
            n = listServicePk2,
            a = 2;
            break;
        case "pk_3":
            n = listServicePk3,
            a = 3
        }
        localStorage.setItem("step2", JSON.stringify({
            pk_id: t.dataset.pk_id,
            listService: n,
            package_type: a,
            listService1: listServicePk1,
            listService2: listServicePk2,
            listService3: listServicePk3,
            pricePk1: priceAddPk1,
            pricePk2: priceAddPk2,
            pricePk3: priceAddPk3,
            back_link: window.location.href
        }));
        var i = altFind(readParamUrl(), function(t) {
            return t.promotion_code
        })
          , r = "";
        i && (r = "?promotion_code=" + i.promotion_code),
        window.location.href = "singapore" === e ? "/order/accounting-service" + r : "/order/" + e + "-step3" + r
    } catch (t) {
        console.log(t)
    }
}
function changePrice(t, e, a) {
    t = document.querySelectorAll("#" + t);
    t[0].innerHTML = "$" + (e + a),
    t[1].innerHTML = "$" + (e + a)
}
function onloadAccService() {
    var t = JSON.parse(localStorage.getItem("step2"))
      , e = JSON.parse(localStorage.getItem("step1"));
    if (localStorage.getItem("signature") || (window.location.href = "/order/step1"),
    t ? document.querySelector("#back-accounting-service").setAttribute("href", t.back_link) : window.location.href = "/order/step1",
    e)
        for (var a = document.querySelectorAll(".order-acc-service #company_name"), n = 0; n < a.length; n++)
            a[n].innerHTML = e.company_name + " " + e.company_suffix_name
}
function onClickAccService(t) {
    localStorage.setItem("acc_service_sin", JSON.stringify({
        services: [{
            service_id: t,
            quantity: 1
        }],
        back_link: window.location.href
    }));
    var e = altFind(readParamUrl(), function(t) {
        return t.promotion_code
    })
      , t = "";
    e && (t = "?promotion_code=" + e.promotion_code),
    window.location.href = "/order/singapore-step3" + t
}
function onloadStep3() {
    for (var t = JSON.parse(localStorage.getItem("step2")), e = JSON.parse(localStorage.getItem("step1")), a = JSON.parse(localStorage.getItem("acc_service_sin")), n = document.querySelectorAll(".order-step3 .show-option-details-container input"), i = 0; i < n.length; i++)
        n[i].checked = !1;
    localStorage.getItem("signature") || (window.location.href = "/order/step1"),
    t ? document.querySelector("#back-step3").setAttribute("href", t.back_link) : window.location.href = "/order/step1",
    window.location.pathname.includes("singapore") && a && document.querySelector("#back-step3").setAttribute("href", a.back_link),
    e && (document.querySelector(".order-step3 #company_name").innerHTML = e.company_name + " " + e.company_suffix_name)
}
function minusQuantity(t) {
    var e = $(t).attr("id_item")
      , t = parseInt($(".order-step3 .show-option-details-container #quantity_" + e).attr("quantity"));
    1 < t && ($(".order-step3 .show-option-details-container #quantity_" + e).attr("quantity", t - 1),
    $(".order-step3 .show-option-list .quantity-item #quantity_" + e).text(t - 1))
}
function plusQuantity(t) {
    var e = $(t).attr("id_item")
      , t = parseInt($(".order-step3 .show-option-details-container #quantity_" + e).attr("quantity"));
    $(".order-step3 .show-option-details-container #quantity_" + e).attr("quantity", t + 1),
    $(".order-step3 .show-option-list .quantity-item #quantity_" + e).text(t + 1)
}
function onClickOption() {
    $(".order-step3-page #choose-option .show-option-details-container").css("display", "block"),
    $(".order-step3-page #button-form-step3").css("display", "block"),
    $(".order-step3-page #choose-option #no-later").css("display", "none"),
    $(".order-step3-page #choose-option #show-option").css("display", "none"),
    $(".order-step3-page #choose-option #main_title").css("display", "none"),
    $(".order-step3-page #choose-option #sub_title").css("display", "block"),
    document.querySelector("#back-step3").setAttribute("href", window.location.href)
}
function onClickNolater() {
    try {
        var t = JSON.parse(localStorage.getItem("step2"));
        t ? postStep3({
            package_id: parseInt(t.pk_id),
            OrderItems: [].concat(t.listService, []),
            signature: localStorage.getItem("signature")
        }) : window.location.href = "/order/step1"
    } catch (t) {
        console.log(t)
    }
}
function postStep3(t) {
    var e;
    document.getElementById("loading-button").style.display = "inline-block",
    document.querySelector(".order-step3 #button-form-step3").disabled = !0,
    4 !== t.package_id && 6 !== t.package_id && 7 !== t.package_id || (e = JSON.parse(localStorage.getItem("acc_service_sin")),
    t.OrderItems = t.OrderItems.concat(e.services)),
    $.ajax({
        type: "POST",
        url: linkUrlOrderAPi + "/api/portal/order/step3",
        data: JSON.stringify(t),
        contentType: "application/json",
        success: function(t) {
            var e, a;
            t.state && (a = "",
            (e = altFind(readParamUrl(), function(t) {
                return t.promotion_code
            })) && e.promotion_code && (a = "&promotion_code=" + e.promotion_code),
            window.location.href = "/order/step4?order_code=" + t.data + a)
        },
        error: function(t) {
            window.location.href = "/404"
        },
        complete: function(t) {
            document.getElementById("loading-button").style.display = "none",
            document.querySelector(".order-step3 #button-form-step3").disabled = !1
        }
    })
}
function nextStep4() {
    try {
        for (var t = [], e = document.querySelectorAll(".order-step3 .show-option-details-container input"), a = document.querySelectorAll(".order-step3 .show-option-details-container .quantity_with_id"), n = [], i = 0; i < e.length; i++)
            e[i].checked && n.push(parseInt(e[i].getAttribute("id")));
        for (var r = 0; r < a.length; r++)
            0 < parseInt(a[r].getAttribute("quantity")) && n.includes(parseInt(a[r].getAttribute("service_id"))) && t.push({
                service_id: parseInt(a[r].getAttribute("service_id")),
                quantity: parseInt(a[r].getAttribute("quantity"))
            });
        var o = JSON.parse(localStorage.getItem("step2"));
        o ? postStep3({
            package_id: parseInt(o.pk_id),
            OrderItems: [].concat(o.listService, t),
            signature: localStorage.getItem("signature")
        }) : window.location.href = "/order/step1"
    } catch (t) {
        console.log(t)
    }
}
$(".order-step3 .show-option-list .checkbox-item input").on("change", function() {
    $(this).is(":checked") ? ($(this).parent().next().css("display", "block"),
    $(".order-step3 .show-option-list .quantity-item #quantity_" + $(this).val()).text("1"),
    $(".order-step3 .show-option-list .quantity-item #quantity_" + $(this).val()).attr("quantity", "1")) : $(this).parent().next().css("display", "none")
}),
$(".order-step3 :input").bind("keyup mouseup", function(t) {
    var e = $(this).attr("id")
      , a = $(this).attr("unit_price")
      , n = $(this).val();
    $("#totalPriceStep3_" + e).text("$" + n * a)
});
var paramStep4 = [], dataOrderStep4, btnpaypalOrder;
function onloadStep4() {
    try {
        var t = linkUrlOrderAPi + "/api/portal/order/"
          , e = altFind(paramStep4 = readParamUrl(), function(t) {
            return t.order_code
        })
          , a = altFind(paramStep4, function(t) {
            return t.promotion_code
        })
          , n = "";
        a && a.promotion_code && (n = "?promotion_code=" + a.promotion_code),
        e || (window.location.href = "/order/step1"),
        $.ajax({
            type: "GET",
            url: t + e.order_code + n,
            data: null,
            contentType: "application/json",
            success: function(t) {
                t.state && (dataOrderStep4 = t.data,
                viewContentstep4(t.data))
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function viewContentstep4(i) {
    try {
        0 === i.OtherItems.length && (document.querySelector(".review-order .other-service").style.display = "none"),
        "1" == i.status && (document.querySelector(".review-order .button-container") && (document.querySelector(".review-order .button-container").style.display = "none"),
        document.querySelector("#order-step4 .button-payment") && (document.querySelector("#order-step4 .button-payment").style.display = "none"),
        document.querySelector("#order-step4 .button-container .button-order") && (document.querySelector("#order-step4 .button-container .button-order").style.display = "none"),
        document.querySelector("#order-step4 #isCheckout") && (document.querySelector("#order-step4 #isCheckout").className = "active",
        document.querySelector("#order-step4 #isCheckout i").style.display = "inline-block"),
        document.querySelector(".review-order .content-payment") && (document.querySelector(".review-order .content-payment").style.display = "none"));
        var t = document.querySelector("#order-step4 #order_id");
        t && (t.innerHTML = "INC" + i.id);
        var e = document.querySelector(".review-order #full_name")
          , a = document.querySelector(".review-order #phone")
          , n = document.querySelector(".review-order #email")
          , r = document.querySelector(".review-order #company_name")
          , o = document.querySelector(".review-order #company_type")
          , s = document.querySelector(".review-order #country")
          , c = document.querySelector(".review-order #title-packageOrder")
          , l = 0;
        a.innerHTML = i.Customer.phone,
        n.innerHTML = i.Customer.email,
        i.Customer.TitleName ? e.innerHTML = i.Customer.TitleName.name + i.Customer.first_name : e.innerHTML = i.Customer.first_name,
        i.Customer && i.Customer.company_name && null != i.Customer.company_name ? r.innerHTML = i.Customer.company_name : i.Company && i.Company.name && null != i.Company.name ? r.innerHTML = i.Company.name : r.innerHTML = "",
        0 < i.PackageItems.length && i.PackageItems[0].Package && i.PackageItems[0].Package.EntityType ? (i.PackageItems.forEach(function(t) {
            l += t.unit_price
        }),
        o.innerHTML = i.PackageItems[0].Package.EntityType.name,
        c.innerHTML = i.PackageItems[0].Package.name + " - US$" + l) : (c.innerHTML = "Company Package",
        i.Customer.EntityType && i.Customer.EntityType.name ? o.innerHTML = i.Customer.EntityType.name : o.innerHTML = ""),
        i.Customer.CompanyCountry && i.Customer.CompanyCountry.name && null != i.Customer.CompanyCountry ? s.innerHTML = i.Customer.CompanyCountry.name : i.Company.Country && i.Company.Country.name && null != i.Company.Country ? s.innerHTML = i.Company.Country.name : s.innerHTML = "",
        i.Customer && i.Customer.CompanyCountry && "191" == i.Customer.CompanyCountry.id ? ($("#order-step4 .tab-step .is_show").css("display", "inline-block"),
        $("#order-step4 .tab-step .is_showmobile").css("visibility", "visible")) : ($("#order-step4 .tab-step .is_show").css("display", "none"),
        $("#order-step4 .tab-step .is_showmobile").css("visibility", "hidden"));
        var d = document.querySelector(".review-order #package_content")
          , u = document.querySelector(".review-order #order_service_content");
        d.innerHTML = "",
        u.innerHTML = "",
        i.OrderItems.forEach(function(t) {
            var e, a, n;
            t.promotion_id && null == t.Service && t.amount < 0 && null != t.Package ? (e = 0,
            i.OrderItems.filter(function(t) {
                return !t.promotion_id
            }).map(function(t) {
                return e += t.amount,
                t
            }),
            a = document.querySelector(".review-order #nprom_price"),
            n = '<div class="col-md-7 col-md-offset-5"><div class="flex-row justify-content-space-between"><p>Total (Save 10% on Package)</><p class="price_service"><span class="price_nprom">US$' + e + '</span><span class="prom_price">US$' + i.amount + "</span></p></div></div>",
            a.innerHTML = n) : (a = document.querySelector(".review-order #nprom_price"),
            n = '<div class="col-md-4 col-md-offset-8"><div class="flex-row justify-content-space-between"><p>Total</><p class="price_service">US$' + i.amount + "</p></div></div>",
            a.innerHTML = n)
        }),
        i.PackageItems.forEach(function(t) {
            var e = document.createElement("div");
            e.setAttribute("class", "row");
            t = '<div class="col-md-8 col-xs-8"><p class="name_service">' + t.Service.name + '</p></div><div class="col-md-4 col-xs-4 text-right"><p class="price_service">US$' + t.unit_price + "</p></div>";
            e.innerHTML = t,
            d.appendChild(e)
        }),
        i.OtherItems.filter(function(t) {
            return !t.promotion_id
        }).forEach(function(t) {
            var e = document.createElement("div");
            e.setAttribute("class", "row");
            var a = ""
              , a = null === t.Service && null === t.Package ? '<div class="col-md-8 col-xs-8"><p class="name_service">' + t.description + " (" + t.quantity + ' set)</p></div><div class="col-md-4 col-xs-4 text-right"><p class="price_service">US$' + t.amount + "</p></div>" : '<div class="col-md-8 col-xs-8"><p class="name_service">' + t.Service.name + " (" + t.quantity + ' set)</p></div><div class="col-md-4 col-xs-4 text-right"><p class="price_service">US$' + t.amount + "</p></div>";
            e.innerHTML = a,
            u.appendChild(e)
        })
    } catch (t) {
        console.log(t)
    }
}
function paymentStep4() {
    var t = $("#order-step4 input:radio[name=payment]:checked").val();
    document.querySelector("#order-step4 #loading-button").style.display = "inline-block",
    document.querySelector("#order-step4 .button-next-step").disabled = !0;
    var e = altFind(paramStep4, function(t) {
        return t.order_code
    }).order_code;
    switch (t) {
    case "card":
        $("#modal-stripe").modal("show"),
        paymentCardStep4(e),
        $("#modal-stripe .close").on("click", function(t) {
            document.querySelector("#order-step4 .button-next-step").disabled = !1,
            document.querySelector("#order-step4 #loading-button").style.display = "none"
        });
        break;
    case "paypal":
        $("#modal-paypal").modal("show"),
        paymentPaypalStep4(e),
        $("#modal-paypal .close").on("click", function(t) {
            document.querySelector("#order-step4 .button-next-step").disabled = !1,
            document.querySelector("#order-step4 #loading-button").style.display = "none"
        });
        break;
    case "bank":
        paymentBankStep4()
    }
}
function paymentOrderDetail(t) {
    var e = altFind(paramStep4, function(t) {
        return t.order_code
    }).order_code;
    switch (t) {
    case "paypal":
        document.querySelector("#order-step4 #loading-button-paypal").style.display = "inline-block",
        paymentPaypalStep4(e),
        $("#modal-paypal").modal("show"),
        $("#modal-paypal .close").on("click", function(t) {
            document.querySelector("#order-step4 #paypal-button").disabled = !1,
            document.querySelector("#order-step4 #loading-button-paypal").style.display = "none"
        });
        break;
    case "stripe":
        $("#modal-stripe").modal("show"),
        document.querySelector("#order-step4 #loading-button-stripe").style.display = "inline-block",
        paymentCardStep4(e),
        $("#modal-stripe .close").on("click", function(t) {
            document.querySelector("#order-step4 #stripe-button").disabled = !1,
            document.querySelector("#order-step4 #loading-button-stripe").style.display = "none"
        })
    }
}
function paymentPaypalStep4(n) {
    var i = altFind(readParamUrl(), function(t) {
        return t.promotion_code
    })
      , a = ""
      , r = "";
    i && i.promotion_code && (a = "?promotion_code=" + i.promotion_code,
    r = "&promotion_code=" + i.promotion_code);
    var o = {
        order_code: n
    };
    function s() {
        $("#paypal-button-container").attr("disabled", !0),
        $("#paypal-button-container").css("display", "none"),
        $("#isLoadingPaypal").css("display", "block")
    }
    btnpaypalOrder = btnpaypalOrder || paypal_sdk.Buttons({
        createOrder: function(t, e) {
            return fetch(linkUrlOrderAPi + "/api/portal/order/step4/paypal" + a, {
                method: "POST",
                body: JSON.stringify(o),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                return t && t.data,
                t.data.result.id
            })
        },
        onApprove: function(t, e) {
            s();
            t = {
                id: t.orderID
            };
            return fetch(linkUrlOrderAPi + "/api/portal/order/paypal_execute" + a, {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(t)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                window.location.href = "/order-success?type_payment=paypal&order_code=" + n
            })
        },
        onCancel: function(t, e) {
            s();
            var a = {
                order_code: n
            };
            return i && i.promotion_code && (a.promotion_code = i.promotion_code),
            fetch(linkUrlOrderAPi + "/api/portal/order/send-email-fail", {
                method: "POST",
                headers: {
                    Accept: "application/json,text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(a)
            }).then(function(t) {
                return t.json()
            }).then(function(t) {
                window.location.href = "/failed-payment?order_code=" + n + r
            })
        }
    }).render("#paypal-button-container")
}
function paymentBankStep4() {
    localStorage.removeItem("step1"),
    localStorage.removeItem("step2"),
    localStorage.setItem("isSendPending", "0"),
    localStorage.removeItem("signature"),
    document.querySelector("#order-step4 .button-next-step").disabled = !1,
    document.querySelector("#order-step4 #loading-button").style.display = "none",
    window.location.href = "/pending-payment" + window.location.search
}
function applyYourCompanyHome() {
    window.location.href = "/onboarding/register"
}
function intervalTrustpilot() {
    var t, e, a = document.getElementById("trustpilot");
    a && (t = 0,
    e = a.childElementCount,
    setInterval(function() {
        0 === (t %= e) ? (a.childNodes[e - 1].style.opacity = "0",
        a.childNodes[0].style.opacity = "1") : (a.childNodes[t - 1].style.opacity = "0",
        a.childNodes[t].style.opacity = "1"),
        5 === (t += 1) && (t = 0)
    }, 5e3))
}
function onloadCheckFATFStep() {
    var t, e, a = document.querySelector("button[id='btnSubmitCheck']"), n = document.querySelector("input[id='btnIsCheck']");
    n.addEventListener("click", function() {
        !0 === n.checked ? a.removeAttribute("disabled") : a.setAttribute("disabled", !0)
    }),
    a.addEventListener("click", function() {
        var t = document.querySelector(".notification__section")
          , e = document.querySelector("#order-step1");
        localStorage.setItem("isCheckedOrderStep1", "true"),
        t.classList.contains("show") && (t.classList.remove("show"),
        t.classList.add("hide"),
        e.classList.remove("hide"));
        t = (new Date).getTime(),
        e = localStorage.getItem("setExpirationDate");
        null == e ? localStorage.setItem("setExpirationDate", t) : 6048e5 < t - e && (localStorage.clear(),
        localStorage.setItem("setExpirationDate", t))
    }),
    localStorage.getItem("isCheckedOrderStep1") && (t = document.querySelector(".notification__section"),
    e = document.querySelector("#order-step1"),
    t.classList.contains("show") && (t.classList.remove("show"),
    t.classList.add("hide"),
    e.classList.remove("hide")))
}
function isLoadingStripeOrder(t) {
    t ? ($("#modal-stripe .submit .btn-payment").attr("disabled", !0),
    $("#modal-stripe .submit .btn-payment").css("display", "none"),
    $("#modal-stripe .submit .loadding-icon").css("display", "block")) : ($("#modal-stripe .submit .btn-payment").attr("disabled", !1),
    $("#modal-stripe .submit .btn-payment").css("display", "inline-block"),
    $("#modal-stripe .submit .loadding-icon").css("display", "none"))
}
function paymentCardStep4(i) {
    var e = Stripe("pk_live_FriBUNrY1wNFgnjXNUNZfLTZ")
      , t = e.elements()
      , a = dataOrderStep4.amount
      , r = dataOrderStep4.Customer.email;
    $("#modal-stripe .total-price").text(a);
    var n = t.create("card", {
        style: {
            base: {
                color: "#32325d",
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#aab7c4"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    });
    n.mount("#card-element"),
    n.on("change", function(t) {
        var e = document.getElementById("card-errors");
        t.error ? e.textContent = t.error.message : e.textContent = "",
        $("#make-payment-submit").on("click", function(t) {
            e.textContent = ""
        })
    }),
    document.getElementById("payment-form").addEventListener("submit", function(t) {
        t.preventDefault(),
        isLoadingStripeOrder(!0),
        e.createToken(n).then(function(t) {
            var e, a, n;
            t.error ? (document.getElementById("card-errors").textContent = t.error.message,
            isLoadingStripeOrder(!1)) : (t.token,
            e = {
                id: t.token.id,
                email: r,
                order_code: i
            },
            a = altFind(readParamUrl(), function(t) {
                return t.promotion_code
            }),
            n = t = "",
            a && a.promotion_code && (t = "?promotion_code=" + a.promotion_code,
            n = "&promotion_code=" + a.promotion_code),
            $.ajax({
                type: "POST",
                url: linkUrlOrderAPi + "/api/portal/order/step4/stripe" + t,
                data: JSON.stringify(e),
                contentType: "application/json",
                success: function(t) {
                    t && (localStorage.removeItem("signature"),
                    localStorage.setItem("track_order", "0"),
                    window.location.href = "/order-success?type_payment=card&order_code=" + i,
                    localStorage.removeItem("step1"),
                    localStorage.removeItem("step2"))
                },
                error: function(t) {
                    window.location.href = "/failed-payment?&order_code=" + i + n
                },
                complete: function(t) {
                    document.querySelector("#order-step4 .loading-buttonStripe").style.display = "none",
                    document.querySelector("#order-step4 .buttonStripe-disabled").disabled = !1
                }
            }))
        })
    })
}
$(document).ready(function() {
    $("#slct-phone_code").selectpicker("render"),
    $("#slct-company_suffix").selectpicker("render"),
    intervalTrustpilot();
    var t = $("#order-step1 select[name=slct-country]");
    t.selectpicker("deselectAll"),
    t.find("option[value='244']").remove(),
    t.find("li").remove(),
    t.selectpicker("refresh")
});
try {
    var genName = function(t, e) {
        var a = StartupNameGenerator(e.value);
        t.innerHTML = "";
        for (var n = 0, i = a.length; n < i; n++) {
            var r = document.createElement("a");
            r.setAttribute("class", "result-item"),
            r.setAttribute("href", "#"),
            r.innerHTML = "<span>" + a[n] + "</span>",
            t.appendChild(r)
        }
        t.classList.add("extend")
    }, genNamePageWrapper = document.querySelector(".startup-name-generator-page"), genNamePageResult = document.querySelector("#name-generation-result"), button, input;
    genNamePageWrapper && genNamePageResult && (button = document.querySelector(".btn-apply"),
    input = document.querySelector(".form-company"),
    button && input && (button.addEventListener("click", function() {
        genName(genNamePageResult, input)
    }),
    input.addEventListener("keyup", function(t) {
        t.preventDefault(),
        13 === t.keyCode && genName(genNamePageResult, input)
    })))
} catch (error) {}
function loadFAQContent(t) {
    var e = document.querySelector("#faq-content");
    e && $.ajax({
        url: linkUrlOrderAPi + "/api/portal/portal_post/public/" + t,
        type: "GET",
        data: {
            fields: ["title", "content"]
        },
        success: function(t) {
            t = t.data;
            e.querySelector(".faq-content__title").innerHTML = t.title,
            e.querySelector(".faq-content__content").innerHTML = t.content
        },
        error: function(t) {}
    })
}
function loadFAQsBreadcrum(t, e, a) {
    var n = document.querySelector("#faqs-breadcrumb");
    n && (n.innerHTML = "<ul class='breadcrumbfaqs'><li><a href='/faqs'>FAQs</a><span class='char'>&gt;</span></li><li><a href='/faqs-categories?id=" + t.id + "&name=" + t.name + "'>" + t.name + "</a><span class='char'>&gt;</span></li><li><a href='#'>" + e.name + "</a><span class='char'>&gt;</span></li><li>" + a.name + "</li></ul>")
}
function loadFAQsSideBar() {
    var _ = document.querySelector("#faqs-sidebar #accordion");
    _ && $.ajax({
        url: linkUrlOrderAPi + "/api/portal/portal_post_type/list",
        type: "GET",
        data: {
            fields: ["name", "parent_id"],
            condition: {
                type: 1
            },
            have_post: !0
        },
        success: function(t) {
            for (var e, a = t.data, n = 0, i = a.length; n < i; n++)
                if (null == a[n].parent_id) {
                    e = a[n].id;
                    break
                }
            for (var o = [], r = 0, s = a.length; r < s; r++)
                a[r].parent_id == e && o.push(a[r]);
            for (var c = 0, l = o.length; c < l; c++) {
                o[c].child = [];
                for (var d = 0, u = a.length; d < u; d++)
                    a[d].parent_id == o[c].id && o[c].child.push(a[d])
            }
            var p = o[0].child[0].PortalPosts[0].id
              , t = new URLSearchParams(window.location.search);
            loadFAQContent(p = t.has("id") ? t.get("id") : p);
            for (var m = 0, h = o.length; m < h; m++) {
                var g = document.createElement("li");
                g.classList.add("list-item"),
                g.innerHTML = "<a href='#" + o[m].name.toLowerCase().replace(/ /g, "-") + "' data-toggle='collapse'>" + o[m].name + "</a><ul class='sub-nav collapse' id='" + o[m].name.toLowerCase().replace(/ /g, "-") + "'></ul>";
                for (var f = g.querySelector("ul"), y = 0, b = o[m].child.length; y < b; y++)
                    !function(t) {
                        var e = document.createElement("li");
                        e.innerHTML = "<a href='#" + o[m].name.toLowerCase().replace(/ /g, "-") + "-" + o[m].child[t].name.toLowerCase().replace(/ /g, "-") + "' data-toggle='collapse'>" + o[m].child[t].name + "</a><ul class='sub-content collapse' id='#" + o[m].name.toLowerCase().replace(/ /g, "-") + "-" + o[m].child[t].name.toLowerCase().replace(/ /g, "-") + "'></ul>";
                        var a = e.querySelector("ul");
                        e.addEventListener("click", function() {
                            a.classList.contains("in") ? a.classList.remove("in") : a.classList.add("in")
                        });
                        for (var n = 0, i = o[m].child[t].PortalPosts.length; n < i; n++) {
                            var r = document.createElement("li");
                            r.innerHTML = "<a href='?id=" + o[m].child[t].PortalPosts[n].id + "'>" + o[m].child[t].PortalPosts[n].title + "</a>",
                            o[m].child[t].PortalPosts[n].id == p && (r.classList.add("active"),
                            r.querySelector("a").removeAttribute("href"),
                            f.classList.add("in"),
                            a.classList.add("in"),
                            loadFAQsBreadcrum({
                                id: o[m].id,
                                name: o[m].name
                            }, {
                                name: o[m].child[t].name
                            }, {
                                name: o[m].child[t].PortalPosts[n].title
                            })),
                            a.appendChild(r)
                        }
                        0 == m && 0 == t && p == o[0].child[0].PortalPosts[0].id && a.classList.add("in"),
                        f.appendChild(e)
                    }(y);
                0 == m && p == o[0].child[0].PortalPosts[0].id && (f.classList.add("in"),
                loadFAQsBreadcrum({
                    id: o[0].id,
                    name: o[0].name
                }, {
                    name: o[0].child[0].name
                }, {
                    name: o[0].child[0].PortalPosts[0].title
                })),
                _.appendChild(g)
            }
        },
        error: function(t) {}
    })
}
function loadFAQsCategoriesBreadcrum(t) {
    var e = document.querySelector("#faqs-categories-breadcrumb");
    e && (e.innerHTML = "<ul class='breadcrumbfaqs'><li><a href='/faqs'>FAQs</a><span class='char'>&gt;</span></li><li><span>" + t + "</span><span class='char'>&gt;</span></li></ul>")
}
function loadFAQsCategoriesPage() {
    var t, e, s, a = document.querySelector(".faqs-categories-page");
    a && (t = getUrlParams(),
    document.title = t.name.replace(/%20/g, " "),
    (e = a.querySelector("#faqs-categories__title")) && (e.innerHTML = t.name.replace(/%20/g, " ")),
    loadFAQsCategoriesBreadcrum(t.name.replace(/%20/g, " ")),
    (s = a.querySelector("#faqs-categories__container")) && $.ajax({
        url: linkUrlOrderAPi + "/api/portal/portal_post_type/list/",
        type: "GET",
        data: {
            fields: ["name"],
            condition: {
                parent_id: t.id
            },
            have_post: !0
        },
        success: function(t) {
            for (var e = t.data, a = 0, n = e.length; a < n; a++) {
                for (var i = "", r = 0, o = e[a].PortalPosts.length; r < o; r++)
                    i += "<li><a href='/faqs-articles?id=" + e[a].PortalPosts[r].id + "'>" + e[a].PortalPosts[r].title + "</a></li>";
                s.innerHTML += "<div class='cl-md-4'><div class=' content-frist content'><h4>" + e[a].name + "</h4><ul>" + i + "</ul></div></div>"
            }
        },
        error: function(t) {}
    }))
}
function getUrlParams() {
    for (var t = {}, e = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), a = 0; a < e.length; a++) {
        var n = e[a].split("=");
        t[n[0]] = n[1]
    }
    return t
}
function loadFaqsSearchPaging() {
    try {
        var t = document.querySelector("#faq-pagination");
        if (t) {
            t.innerHTML = "";
            for (var e = 1; e <= sessionStorage.faqsMaxPage; e++) {
                var a = document.createElement("li");
                e == sessionStorage.faqsCurrentPage ? (a.classList.add("pagination-current"),
                a.innerHTML = "<span>" + e + "</span>") : a.innerHTML = "<a onclick='loadFaqsSearchResultList(" + e + ")'>" + e + "</a>",
                t.appendChild(a)
            }
            t.innerHTML += "<li class='pagination-next'><a onclick='loadFaqsSearchResultList(" + (parseInt(sessionStorage.faqsCurrentPage) + 1) + ")'>&rsaquo;</a></li><li class='pagination-last'><a onclick='loadFaqsSearchResultList(" + sessionStorage.faqsMaxPage + ")'> &raquo;</a></li>"
        }
    } catch (t) {}
}
function loadFaqsSearchResultList(s) {
    try {
        var t, c, l = document.querySelector("#faqs-search-results-list");
        l && (l.innerHTML = "",
        t = getUrlParams(),
        c = "",
        t.search && (c = t.search.replace(/%20/g, " ")),
        s = s || (t.page || 1),
        $.ajax({
            url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter/",
            type: "GET",
            data: {
                fields: ["id", "title", "content"],
                condition: {
                    $or: {
                        title: {
                            $like: "%" + c + "%"
                        },
                        content: {
                            $like: "%" + c + "%"
                        }
                    }
                },
                is_faqs: !0,
                newest: !0
            },
            success: function(t) {
                var e = t.data
                  , a = document.querySelector("#faqs-search-results-count");
                a && (a.innerHTML = e.length + " ");
                t = document.querySelector("#faqs-search-results-search");
                t && (t.innerHTML = c);
                a = document.querySelector("#faqs-search-input");
                a && a.setAttribute("placeholder", c);
                var t = Math.ceil(e.length / 10)
                  , a = 1 < (s = t < s ? t : s) ? 10 * (s - 1) : 0
                  , n = 0 < a ? 10 + a - 1 : 9;
                n > e.length - 1 && (n = e.length - 1),
                sessionStorage.faqsCurrentPage = s,
                sessionStorage.faqsMaxPage = t,
                loadFaqsSearchPaging();
                for (var i = a; i <= n; i++) {
                    var r = document.createElement("li");
                    r.classList.add("search");
                    var o = ""
                      , o = "" !== c ? e[i].content.substring(0, 100).replace(new RegExp(c,"g"), "<span>" + c + "</span>") : e[i].content.substring(0, 100);
                    r.innerHTML = "<h5><a href='/faqs-articles?id=" + e[i].id + "'>" + e[i].title + "</a></h5>" + o,
                    l.appendChild(r)
                }
                $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            },
            error: function(t) {}
        }))
    } catch (t) {}
}
loadFAQsSideBar(),
loadFAQsCategoriesPage(),
loadFaqsSearchResultList();
try {
    var resultSearchButton = document.querySelector("#faqs-search-button");
    resultSearchButton && resultSearchButton.addEventListener("click", function() {
        var t = document.querySelector("#faqs-search-input");
        t && (window.location.href = "/faqs-search?search=" + t.value)
    })
} catch (error) {}
try {
    var resultSearchInput = document.querySelector("#faqs-search-input");
    resultSearchInput && resultSearchInput.addEventListener("keyup", myDebounceTime(function(t) {
        t.preventDefault(),
        13 === t.keyCode ? window.location.href = "/faqs-search?search=" + resultSearchInput.value : 0 < t.target.value.length ? $.ajax({
            url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter/",
            type: "GET",
            data: {
                fields: ["id", "title", "content"],
                condition: {
                    $or: {
                        title: {
                            $like: "%" + t.target.value + "%"
                        },
                        content: {
                            $like: "%" + t.target.value + "%"
                        }
                    }
                },
                is_faqs: !0,
                newest: !0,
                limit: 5
            },
            success: function(t) {
                var r = t.data;
                setTimeout(function() {
                    removeFAQsSuggestionBox();
                    var t = document.createElement("div");
                    t.setAttribute("id", "faqs-suggestion-box"),
                    document.querySelector("body").appendChild(t),
                    t.style.width = resultSearchInput.getBoundingClientRect().width + "px",
                    t.style.top = resultSearchInput.getBoundingClientRect().top + window.scrollY + resultSearchInput.getBoundingClientRect().height + 10 + "px",
                    t.style.left = resultSearchInput.getBoundingClientRect().left + "px",
                    t.innerHTML += "<h3>Top FAQs suggestions:</h3><ul></ul>";
                    for (var e = t.querySelector("ul"), a = 0, n = r.length; a < n; a++) {
                        var i = document.createElement("li");
                        i.innerHTML = "<a href='/faqs-articles?id=" + r[a].id + "'>" + r[a].title + "</a>",
                        e.appendChild(i)
                    }
                }, 1e3)
            },
            error: function(t) {}
        }) : removeFAQsSuggestionBox()
    }, 300))
} catch (error) {}
function removeFAQsSuggestionBox() {
    var t = document.querySelector("#faqs-suggestion-box");
    t && t.parentNode.removeChild(t)
}
function getPromotedArticles() {
    try {
        var o = document.querySelector("section.promoted-articles ul.content-promoted");
        o && $.ajax({
            type: "GET",
            url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter",
            data: {
                fields: ["id", "title", "content"],
                newest: !0,
                is_faqs: !0,
                limit: 9
            },
            contentType: "application/json",
            success: function(t) {
                for (var e = t.data, a = 0, n = e.length; a < n; a++) {
                    var i = document.createElement("li")
                      , r = e[a].content.substring(3, 50) + "...";
                    i.innerHTML = "<span class='fas fa-star' aria-hidden='true'></span><div class='content'><a href='/faqs-articles?id=" + e[a].id + "'>" + e[a].title + "</a><p>" + r + "</p></div>",
                    o.appendChild(i)
                }
            }
        })
    } catch (t) {}
}
function loadFAQsCategories() {
    try {
        var d = document.querySelector("#faqs-categories");
        d && $.ajax({
            type: "GET",
            url: linkUrlOrderAPi + "/api/portal/portal_post_type/list",
            data: {
                fields: ["name", "parent_id"],
                condition: {
                    type: 1
                }
            },
            success: function(t) {
                for (var e, a = t.data, n = 0, i = a.length; n < i; n++)
                    if (null == a[n].parent_id) {
                        e = a[n].id;
                        break
                    }
                for (var r = [], o = 0, s = a.length; o < s; o++)
                    a[o].parent_id == e && r.push(a[o]);
                for (var c = 0, l = r.length; c < l; c++)
                    d.innerHTML += "<li><a href='/faqs-categories?id=" + r[c].id + "&name=" + r[c].name + "'><div class='icon-left'><img src='../images/grid.svg'></div><div class='content-right'><h5>" + r[c].name + "</h5><p></p></div></a></li>"
            },
            error: function(t) {}
        })
    } catch (t) {}
}
function loadArticles(t, e, a, n) {
    for (var i = t.slice(n, n + a), r = 0; r < i.length; r++) {
        var o = document.createElement("li");
        o.setAttribute("class", "col-md-4 articleBlog"),
        o.innerHTML = '<div class="article-small"><div class="article-small__image" style="background-image: url(' + i[r]._embedded["wp:featuredmedia"][0].source_url + ')"></div><div class="article-small__content"><h4 class="article-small__content__title"><a href="' + i[r].slug + '">' + i[r].title.rendered + '</a></h4><div class="article-small__content__description">' + i[r].excerpt.rendered + '</div><div class="wrapper"><div class="article-small__content__time">' + i[r].acf.time_to_read + ' min read</div><a class="article-small__content__readmore" href="' + i[r].slug + '">Read more</a></div></div></div>',
        e.appendChild(o)
    }
}
function filterNsearchArticles() {
    document.querySelector(".resource-section-main__articles") && filterNsearchArticlesAction()
}
window.addEventListener("click", function() {
    removeFAQsSuggestionBox()
}),
getPromotedArticles(),
loadFAQsCategories();
try {
    var searchInputResourcesSectionPage = document.querySelector(".resources-section-page #resource-search")
      , searchButtonResourcesSectionPage = document.querySelector(".resources-section-page #resource-search-button")
      , filterSelectResourcesSectionPage = document.querySelector(".resources-section-page #resource-filter");
    searchInputResourcesSectionPage && searchInputResourcesSectionPage.addEventListener("keypress", function(t) {
        13 == t.keyCode && (filterNsearchArticlesAction(),
        t.preventDefault())
    }),
    searchButtonResourcesSectionPage && searchButtonResourcesSectionPage.addEventListener("click", function(t) {
        filterNsearchArticlesAction(),
        t.preventDefault()
    }),
    filterSelectResourcesSectionPage && filterSelectResourcesSectionPage.addEventListener("change", function(t) {
        filterNsearchArticlesAction(),
        t.preventDefault()
    })
} catch (error) {
    console.log(error)
}
function filterNsearchArticlesAction() {
    for (var t = document.querySelector(".resource-section-main__articles"), e = searchInputResourcesSectionPage.value.split(" "), a = filterSelectResourcesSectionPage.value, n = 0; n < e.length; n++)
        "" == e[n] && e.splice(n, 1);
    if (0 == e.length && "" == a && 0 == tagsFilter.length)
        document.querySelector(".article-big").style.display = "block",
        document.querySelector(".article-list").style.display = "block",
        t.innerHTML = "",
        loadArticles(postsFiltered, t, posts.length, 1),
        $("#btn-loadmore-articles").show(),
        $(".resource-section-main__articles li:lt(6)").show();
    else {
        var i = [];
        if (e)
            for (var r = 0; r < postsFiltered.length; r++) {
                for (var o = 0, s = 0; s < e.length; s++)
                    postsFiltered[r].title && postsFiltered[r].title.rendered.toLowerCase().includes(e[s].toLowerCase()) && o++;
                if (o == e.length)
                    if (a)
                        for (var c = 0; c < postsFiltered[r].tags.length; c++)
                            a == postsFiltered[r].tags[c] && i.push(postsFiltered[r]);
                    else
                        i.push(postsFiltered[r]);
                else {
                    for (var o = 0, l = 0; l < e.length; l++)
                        postsFiltered[r].excerpt.rendered && postsFiltered[r].excerpt.rendered.toLowerCase().includes(e[l].toLowerCase()) && o++;
                    if (o == e.length)
                        if (a)
                            for (var d = 0; d < postsFiltered[r].tags.length; d++)
                                a == postsFiltered[r].tags[d] && i.push(postsFiltered[r]);
                        else
                            i.push(postsFiltered[r])
                }
            }
        else
            for (var u = 0; u < postsFiltered.length; u++)
                for (var p = 0; p < postsFiltered[u].tags.length; p++)
                    a == postsFiltered[u].tags[p] && i.push(postsFiltered[u]);
        if (0 < i.length) {
            t.innerHTML = "";
            for (var m = 0; m < i.length; m++) {
                var h = document.createElement("div");
                h.setAttribute("class", "col-md-4"),
                h.innerHTML = '<div class="article-small"><div class="article-small__image" style="background-image: url(' + i[m]._embedded["wp:featuredmedia"][0].source_url + ')"></div><div class="article-small__content"><h4 class="article-small__content__title"><a href="' + i[m].slug + '">' + i[m].title.rendered + '</a></h4><div class="article-small__content__description">' + i[m].excerpt.rendered + '</div><div class="wrapper"><div class="article-small__content__time">' + i[m].acf.time_to_read + ' min read</div><a class="article-small__content__readmore" href="' + i[m].slug + '">Read more</a></div></div></div>',
                t.appendChild(h)
            }
        } else
            t.innerHTML = "<p class='text-center'>No Results Found!</p>";
        document.querySelector(".article-big").style.display = "none",
        document.querySelector(".article-list").style.display = "none",
        document.querySelector("#btn-loadmore-articles").style.display = "none"
    }
}
function onloadResourcesSection() {
    try {
        var t = !1
          , e = altFind(readParamUrl(), function(t) {
            return t.tag
        });
        (t = e && e.tag ? tags.some(function(t) {
            return t.id == e.tag
        }) : t) && (tagsFilter.push(e.tag),
        document.querySelector(".resources-section-page #tags .c" + e.tag).classList.add("active"),
        document.querySelector(".resources-section-page #tags").style.display = "flex"),
        postsTag();
        var a;
        $(".resources-section-page #btn-loadmore-articles").click(function(t) {
            (a = $(".resource-section-main__articles li:visible").length + 6) < posts.length ? $(".resource-section-main__articles li:lt(" + a + ")").show() : ($(".resource-section-main__articles li:lt(" + posts.length + ")").show(),
            $("#btn-loadmore-articles").hide())
        }),
        filterNsearchArticles()
    } catch (t) {
        console.log(t)
    }
}
function postsTag() {
    if (0 < tagsFilter.length) {
        for (var t = 0; t < tagsFilter.length; t++)
            tagsFilter[t] = parseInt(tagsFilter[t], 10),
            console.log(tagsFilter[t]);
        postsFiltered = posts.filter(function(t) {
            return t.tags.some(function(t) {
                return tagsFilter.includes(t)
            })
        })
    } else
        postsFiltered = posts
}
function removeTag(e) {
    tagsFilter.some(function(t) {
        return t == e
    }) && (tagsFilter = tagsFilter.filter(function(t) {
        return t != e
    }),
    postsTag(),
    document.querySelector(".resources-section-page #tags .c" + e).classList.remove("active"),
    filterNsearchArticles())
}
function addTag(e) {
    tagsFilter.some(function(t) {
        return t == e
    }) || (tagsFilter.push(e),
    postsTag(),
    document.querySelector(".resources-section-page #tags .c" + e).classList.add("active"),
    filterNsearchArticles())
}
function loadResourcesSlider(t) {
    var e, a;
    switch (t) {
    case 1:
        e = 1,
        a = "articals";
        break;
    case 2:
        e = 2,
        a = "publications";
        break;
    case 3:
        e = 3,
        a = "announcements";
        break;
    default:
        e = 1,
        a = "articles"
    }
    var o = document.querySelector("#resources-" + a + " .slider-article");
    o && $.ajax({
        type: "GET",
        url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter",
        data: {
            fields: ["guid", "image", "meta_title"],
            condition: {
                is_deleted: !1
            },
            order: {
                portal_post_type_id: e
            },
            newest: !0,
            limit: 12
        },
        contentType: "application/json",
        success: function(t) {
            for (var e = t.data, a = 0, n = e.length; a < n; a++) {
                var i = document.createElement("a");
                i.setAttribute("class", "col-md-4"),
                i.setAttribute("href", "resources/" + e[a].guid);
                var r = '<div class="article-item"><h5 class="title"></h5><div class="img-slider"> <img src ="' + e[a].image + '" /></div><div class="content"><h3 class="sub-title">' + e[a].meta_title + "</h3>";
                i.innerHTML = r,
                o.appendChild(i)
            }
        },
        error: function(t) {
            console.log(t)
        },
        complete: function(t) {
            $("#resources-" + a + " .slider-article").not(".slick-initialized").slick({
                infinite: !0,
                slidesToShow: 5,
                autoplay: !0,
                autoplaySpeed: 3e3,
                touchThreshold: 500,
                lazyLoad: "ondemand",
                prevArrow: '<button class="slide-arrow prev-arrow"></button>',
                nextArrow: '<button class="slide-arrow next-arrow"></button>',
                responsive: [{
                    breakpoint: 1301,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            })
        }
    })
}
function loadResourcesArticalsList(t) {
    var e, a;
    switch (t) {
    case 1:
        e = 1,
        a = "articals";
        break;
    case 2:
        e = 2,
        a = "publications";
        break;
    case 3:
        e = 3,
        a = "announcements";
        break;
    default:
        e = 1,
        a = "articles"
    }
    var o = document.querySelector("#resources-" + a + " .article-list");
    o && $.ajax({
        url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter",
        type: "get",
        data: {
            fields: ["guid", "time_to_read", "meta_title"],
            condition: {
                is_popular: !0,
                is_deleted: !1
            },
            order: {
                portal_post_type_id: e
            },
            newest: !0,
            limit: 3
        },
        success: function(t) {
            for (var e = o.querySelector(".article-list__content"), a = t.data, n = 0, i = a.length; n < i; n++) {
                var r = document.createElement("div");
                r.setAttribute("class", "article-list__content__item"),
                r.innerHTML = '<p class="article-list__content__item__time">' + a[n].time_to_read + ' minute read</p><a href="resources/' + a[n].guid + '" class="article-list__content__item__title">' + a[n].meta_title + "</a>",
                e.appendChild(r)
            }
        },
        error: function(t) {}
    })
}
function loadResourcesArticalBig(t) {
    var e, a;
    switch (t) {
    case 1:
        e = 1,
        a = "articals";
        break;
    case 2:
        e = 2,
        a = "publications";
        break;
    case 3:
        e = 3,
        a = "announcements";
        break;
    default:
        e = 1,
        a = "articles"
    }
    var r = document.querySelector("#resources-" + a + " .article-big");
    r && $.ajax({
        url: linkUrlOrderAPi + "/api/portal/portal_post/list-filter",
        type: "get",
        data: {
            fields: ["guid", "time_to_read", "meta_title", "excerpt", "image"],
            condition: {
                is_deleted: !1
            },
            order: {
                portal_post_type_id: e
            },
            newest: !0,
            limit: 1
        },
        success: function(t) {
            var e = r.querySelector(".article-big__image")
              , a = r.querySelector(".wrapper .article-big__title a")
              , n = r.querySelector(".wrapper .article-big__content")
              , i = r.querySelector(".wrapper .article-big__time")
              , t = t.data;
            e.style.backgroundImage = "url('" + t[0].image + "')",
            a.innerHTML = t[0].meta_title,
            a.setAttribute("href", "resources/" + t[0].guid),
            n.innerHTML = t[0].excerpt,
            i.innerHTML = t[0].time_to_read + " minute read"
        },
        error: function(t) {}
    })
}
function paypalExcute() {
    var t = readParamUrl()
      , e = ""
      , a = ""
      , n = {}
      , i = altFind(t, function(t) {
        return t.order_code
    })
      , r = altFind(t, function(t) {
        return t.promotion_code
    })
      , o = altFind(t, function(t) {
        return t.return_url
    })
      , s = altFind(t, function(t) {
        return t.cancel_url
    })
      , c = ""
      , l = "";
    r && r.promotion_code && (c = "?promotion_code=" + r.promotion_code,
    l = "&promotion_code=" + r.promotion_code),
    e = o ? decodeURIComponent(o.return_url) : linkUrlOrder + "/order-success",
    a = s ? decodeURIComponent(s.cancel_url) : linkUrlOrder + "/failed-payment",
    i ? (n = {
        payment_id: altFind(t, function(t) {
            return t.paymentId
        }).paymentId,
        payer_id: altFind(t, function(t) {
            return t.PayerID
        }).PayerID,
        order_code: i.order_code
    },
    e += "?order_code=" + i.order_code,
    a += "?order_code=" + i.order_code + l) : (l = JSON.parse(localStorage.getItem("myForms")),
    l = Object.assign(l, {
        payment_gateway: "International Card via Paypal Gateway"
    }),
    n = {
        payment_id: altFind(t, function(t) {
            return t.paymentId
        }).paymentId,
        payer_id: altFind(t, function(t) {
            return t.PayerID
        }).PayerID,
        data_form: JSON.stringify(l)
    }),
    n.website_id = 1,
    $.ajax({
        type: "POST",
        url: linkUrlOrderAPi + "/api/portal/order/paypal_execute" + c,
        data: JSON.stringify(n),
        contentType: "application/json",
        success: function(t) {
            t.state && (e.includes("?order_code") && (localStorage.setItem("track_order", "0"),
            localStorage.setItem("payment_status", "success")),
            window.location.href = e)
        },
        error: function() {
            window.location.href = a,
            localStorage.setItem("payment_status", "failed")
        },
        complete: function(t) {}
    })
}
function load_pending_payment() {
    document.querySelector(".pending-paymnent-page #order_info ").setAttribute("href", "/order/order-information" + window.location.search);
    var t = readParamUrl()
      , s = altFind(t, function(t) {
        return t.order_code
    })
      , t = altFind(t, function(t) {
        return t.promotion_code
    })
      , c = void 0;
    t && (c = t.promotion_code);
    try {
        var e = linkUrlOrderAPi + "/api/portal/order/";
        $.ajax({
            type: "GET",
            url: e + s.order_code,
            data: null,
            contentType: "application/json",
            success: function(t) {
                var e, a, n, i, r, o;
                t.state && (e = t.data.Customer.TitleName.name,
                a = t.data.Customer.first_name,
                n = t.data.Customer.id,
                i = t.data.id,
                r = s.order_code,
                o = t.data.Customer.email,
                document.querySelector(".pending-paymnent-page #dear-msg").innerHTML = "Dear " + e + a,
                "0" === localStorage.getItem("isSendPending") && sendEmailPending({
                    customer_id: n,
                    title_name: e,
                    first_name: a,
                    order_id: i,
                    order_code: r,
                    email: o,
                    website_id: 1,
                    promotion_code: c
                }, t.data.amount))
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function sendEmailPending(e, a) {
    try {
        $.ajax({
            type: "POST",
            url: linkUrlOrderAPi + "/api/portal/order/send-email-pending",
            data: JSON.stringify(e),
            contentType: "application/json",
            success: function(t) {
                t && (dataLayer.push({
                    event: "tracking.ordersuccess",
                    data: {
                        Amount: a,
                        OrderID: e.order_id,
                        Fullname: e.first_name,
                        Email: e.email
                    }
                }),
                localStorage.setItem("isSendPending", "1"))
            },
            error: function(t) {
                console.log(t)
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
function form_question_contact() {
    try {
        $("form#form-question-popup").validate({
            rules: {
                "first-name": "required",
                "your-message": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required.",
                "your-message": "This field is required"
            },
            submitHandler: function(t) {
                document.getElementById("loading-button-popup").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var a = {
                            first_name: $("#form-question-popup input[name=first-name]").val(),
                            email: $("#form-question-popup input[name=your-email]").val(),
                            company_country_id: parseInt($("form#form-question-popup ").attr("data-countryId")),
                            message: $("#form-question-popup textarea[name=your-message]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/question",
                            data: JSON.stringify(a),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: Object.assign(a, {
                                            fullname: a.first_name
                                        }),
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#questionModal").modal("hide")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function form_checkname_contact() {
    try {
        $("form#form-checkname-popup").validate({
            rules: {
                "first-name": "required",
                "your-message": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required.",
                "your-message": "This field is required"
            },
            submitHandler: function(t) {
                document.getElementById("loading-button-popup").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var a = {
                            first_name: $("#form-checkname-popup input[name=first-name]").val(),
                            email: $("#form-checkname-popup input[name=your-email]").val(),
                            company_country_id: parseInt($("form#form-checkname-popup ").attr("data-countryId")),
                            country_name: $("form#form-checkname-popup ").attr("data-countryName"),
                            company_name: $("#form-checkname-popup textarea[name=your-message]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/check_name",
                            data: JSON.stringify(a),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: Object.assign(a, {
                                            fullname: a.first_name
                                        }),
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#checkNameModal").modal("hide")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function form_question_formation() {
    try {
        $("form#form-question-formation").validate({
            rules: {
                "first-name": "required",
                "your-message": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required.",
                "your-message": "This field is required"
            },
            submitHandler: function(t) {
                document.getElementById("loading-button-popup").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var t = {
                            first_name: $("#form-question-formation input[name=first-name]").val(),
                            email: $("#form-question-formation input[name=your-email]").val(),
                            company_country_id: parseInt($("form#form-question-formation").attr("data-countryId")),
                            message: $("#form-question-formation textarea[name=your-message]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.first_name,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/question",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#form-question-formation").trigger("reset")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function form_company_question() {
    try {
        $("form#form_company_formation").validate({
            rules: {
                "first-name": "required",
                "your-message": "required",
                "your-email": "required"
            },
            messages: {
                "first-name": "This field is required.",
                "your-email": "This field is required.",
                "your-message": "This field is required"
            },
            submitHandler: function(t) {
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "country_form"
                    }).then(function(e) {
                        var t = {
                            first_name: $("#form_company_formation input[name=first-name]").val(),
                            email: $("#form_company_formation input[name=your-email]").val(),
                            company_country_id: parseInt($("form#form-question-formation").attr("data-countryId")),
                            message: $("#form_company_formation textarea[name=your-message]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.first_name,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/question",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                t.state && Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                }),
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                }))
                            },
                            error: function(t) {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button-popup").style.display = "none",
                                $("#form-question-formation").trigger("reset")
                            }
                        })
                    })
                })
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function LoadTableBankCountryS(t) {
    document.querySelector(".bank_data").innerHTML = "";
    for (var e = 0; e < t.length; e++)
        for (var a = document.querySelector(".bank_data"), n = t[e].banks, i = 0; i < n.length; i++) {
            var r = document.createElement("tr")
              , o = "";
            0 == i && (o = '<td class="title" rowspan="' + n.length + '">' + t[e].name + "</td>"),
            o += "<td>" + n[i].name + "</td>",
            1 == n[i].contact_us ? o += '<td colspan="5">Contact us for details</td>' : (1 == n[i].online_banking ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].personal_visit ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].credit_card ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>',
            1 == n[i].debit_card ? o += '<td><i class="fa fa-check" aria-hidden="true"></i></td>' : o += '<td><i class="fa fa-times" aria-hidden="true"></i></td>'),
            o += "<td>" + n[i].initial_deposit + "</td>",
            r.innerHTML = o,
            a.appendChild(r)
        }
}
function onloadBankAccountS() {
    LoadTableBankCountryS(JSON.parse(document.getElementById("bankingService_table").getAttribute("data")))
}
function filterCountryBankS() {
    var t = JSON.parse(document.getElementById("bankingService_table").getAttribute("data"));
    "yes" === ($(".banking-support-page select[name=remote]").val() || "all") && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return !1 === t.personal_visit
            })
        }
    }).filter(function(t) {
        return 0 < t.banks.length
    }));
    var e = $(".banking-support-page select[name=bank-country]").val();
    0 < e.length && (t = t.filter(function(t) {
        return e.includes(t.id.toString())
    }));
    var a = $(".banking-support-page select[name=initial-deposit]").val();
    (a = a || "all") <= 1e5 ? t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_usd <= a
            })
        }
    }) : 1e5 < a && (t = t.map(function(t) {
        return {
            id: t.id,
            name: t.name,
            banks: t.banks.filter(function(t) {
                return t.initial_deposit_usd > parseInt(a) - 1
            })
        }
    })),
    LoadTableBankCountryS(t)
}
function toggleSelectAllBankCountryS(t) {
    var e = -1 < (t.val() || []).indexOf("All");
    function a(t) {
        return $.map(t, function(t) {
            return t.value
        })
    }
    t.data("allOptionIsSelected") != e ? e ? t.selectpicker("val", a(t.find("option"))) : t.selectpicker("val", []) : e && t.val().length != t.find("option").length ? (t.selectpicker("val", a(t.find("option:selected[value!=All]"))),
    e = !1) : e || t.val().length != t.find("option").length - 1 || (t.selectpicker("val", a(t.find("option"))),
    e = !0),
    t.data("allOptionIsSelected", e)
}
function onLoadSinglePost() {
    try {
        $.ajax({
            type: "GET",
            url: linkUrlOrderAPi + "/api/portal/portal_post/single-post" + window.location.search,
            data: JSON.stringify(),
            contentType: "application/json",
            success: function(t) {
                if (t.data) {
                    var r = t.data;
                    document.querySelector(".banner-with-title .title").innerHTML = r.title;
                    var a, n, t = document.createElement("p");
                    t.setAttribute("class", "time-to-read"),
                    t.innerHTML = r.time_to_read + " MINUTE READ",
                    document.querySelector(".banner-with-title .container").appendChild(t),
                    document.querySelector(".breadcrumb-custom li:nth-of-type(3) a").setAttribute("href", "/resources/" + r.PortalPostType.guid),
                    document.querySelector(".breadcrumb-custom li:nth-of-type(3) a").innerHTML = r.PortalPostType.name,
                    document.querySelector(".breadcrumb-custom li:nth-of-type(4)").innerHTML = r.title,
                    document.querySelector("#p_content").innerHTML = r.content,
                    0 < r.RelatedServices.length ? (a = document.querySelector(".related-services"),
                    r.RelatedServices.forEach(function(t) {
                        var e = document.createElement("a");
                        e.setAttribute("href", "/" + t.guid),
                        e.innerHTML = t.name,
                        a.appendChild(e)
                    }),
                    r.country_id && r.Country && ((t = document.createElement("a")).setAttribute("href", "/" + r.Country.guid + "-company-formation"),
                    t.innerHTML = r.Country.name + " Company Formation",
                    a.appendChild(t))) : document.querySelector(".related-service-container").style.display = "none",
                    [1, 2, 3].forEach(function(t) {
                        var e = document.querySelector(".article-list__content")
                          , a = document.createElement("p");
                        a.setAttribute("class", "article-list__content__item__time"),
                        a.innerHTML = r.time_to_read + " minute read";
                        var n = document.createElement("a");
                        n.setAttribute("class", "article-list__content__item__title"),
                        n.setAttribute("href", "/resources/" + r.guid),
                        n.innerHTML = r.title;
                        var i = document.createElement("div");
                        i.setAttribute("class", "article-list__content__item"),
                        i.appendChild(a),
                        i.appendChild(n),
                        e.appendChild(i)
                    }),
                    0 < r.PortalPostCategories.length ? (n = document.querySelector(".categories-content"),
                    r.PortalPostCategories.forEach(function(t) {
                        var e = document.createElement("a");
                        e.setAttribute("href", "/resources/" + t.guid + "?category=" + t.portal_post_has_portal_post_category.portal_post_category_id),
                        e.innerHTML = t.name,
                        n.appendChild(e)
                    })) : document.querySelector(".categories").style.display = "none";
                    for (var e = document.getElementsByTagName("meta"), i = 0; i < e.length; i++)
                        ["description", "twitter:description"].includes(e[i].getAttribute("name")) && e[i].setAttribute("content", r.meta_description);
                    for (var o = document.getElementsByTagName("meta"), s = 0; s < e.length; s++)
                        ["twitter:image:src", "og:image"].includes(o[s].getAttribute("name")) && o[s].setAttribute("content", r.image);
                    document.title = r.title
                }
            },
            error: function(t) {
                document.querySelector(".categories").style.display = "none",
                document.querySelector(".related-service-container").style.display = "none",
                document.querySelector(".article-list").style.display = "none",
                document.querySelector(".line").style.display = "none",
                Swal.fire({
                    position: "center",
                    type: "error",
                    title: "Send Error",
                    showConfirmButton: !1,
                    timer: 1500
                })
            },
            complete: function(t) {}
        })
    } catch (t) {
        console.log(t)
    }
}
$(document).ready(function() {
    $("#submit-email-partner").on("click", function() {
        $("#form-partner-with").validate({
            rules: {
                "your-email": "required"
            },
            messages: {
                "your-email": "This field is required."
            },
            submitHandler: function(t) {
                document.getElementById("loading-button").style.display = "inline-block",
                grecaptcha.ready(function() {
                    grecaptcha.execute(clientIdCaptcha, {
                        action: "formPartner"
                    }).then(function(e) {
                        var t = {
                            email: $("#form-partner-with input[name=your-email]").val(),
                            client_id: gaUserId,
                            website_id: 1
                        }
                          , a = {
                            fullname: t.email,
                            email: t.email
                        };
                        $.ajax({
                            type: "POST",
                            beforeSend: function(t) {
                                t.setRequestHeader("captcha-response", e)
                            },
                            url: linkUrlOrderAPi + "/api/portal/contact_form/partner",
                            data: JSON.stringify(t),
                            contentType: "application/json",
                            success: function(t) {
                                document.dispatchEvent(new CustomEvent("contact_form",{
                                    detail: {
                                        dataForm: a,
                                        response: t
                                    }
                                })),
                                Swal.fire({
                                    position: "center",
                                    type: "success",
                                    title: "Send Success",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            error: function() {
                                Swal.fire({
                                    position: "center",
                                    type: "error",
                                    title: "Send Error",
                                    showConfirmButton: !1,
                                    timer: 1500
                                })
                            },
                            complete: function(t) {
                                document.getElementById("loading-button").style.display = "none"
                            }
                        })
                    })
                })
            }
        })
    })
}),
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$("#btnQuestion").on("click", function() {
    form_question_contact()
}),
$("#btnCheckName").on("click", function() {
    form_checkname_contact()
}),
$("#basic #onclickCheckname1").on("click", function() {
    $("#checkNameModal").modal("show")
}),
$("#onclickCheckname1").on("click", function() {
    $("#checkNameModal").modal("show")
}),
$("#btnQuestionFormation").on("click", function() {
    form_question_formation()
}),
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$(document).ready(function() {
    try {
        $("#formCheckName .next").click(function() {
            var t = $("#formCheckName");
            t.validate({
                rules: {
                    companyname: {
                        required: !0
                    },
                    firstname: {
                        required: !0
                    },
                    email: {
                        required: !0
                    }
                },
                messages: {
                    companyname: {
                        required: "This field is required."
                    },
                    firstname: {
                        required: "This field is required."
                    },
                    email: {
                        required: "This field is required."
                    }
                },
                submitHandler: function(t) {
                    document.getElementById("loading-button-popup").style.display = "inline-block",
                    grecaptcha.ready(function() {
                        grecaptcha.execute(clientIdCaptcha, {
                            action: "country_form"
                        }).then(function(e) {
                            var a = {
                                company_name: $("#formCheckName input[name=companyname]").val() + " " + $("#formCheckName select[name=slct-company_suffix_name]").val(),
                                first_name: $("#formCheckName input[name=firstname]").val(),
                                email: $("#formCheckName input[name=email]").val(),
                                company_country_id: parseInt($("form#formCheckName").attr("data-countryId")),
                                country_name: $("form#formCheckName").attr("data-countryName"),
                                client_id: gaUserId,
                                website_id: 1
                            };
                            $.ajax({
                                type: "POST",
                                beforeSend: function(t) {
                                    t.setRequestHeader("captcha-response", e)
                                },
                                url: linkUrlOrderAPi + "/api/portal/contact_form/check_name",
                                data: JSON.stringify(a),
                                contentType: "application/json",
                                success: function(t) {
                                    t.state && Swal.fire({
                                        position: "center",
                                        type: "success",
                                        title: "Send Success",
                                        showConfirmButton: !1,
                                        timer: 1500
                                    }),
                                    document.dispatchEvent(new CustomEvent("contact_form",{
                                        detail: {
                                            dataForm: Object.assign(a, {
                                                fullname: a.first_name
                                            }),
                                            response: t
                                        }
                                    }))
                                },
                                error: function(t) {
                                    Swal.fire({
                                        position: "center",
                                        type: "error",
                                        title: "Send Error",
                                        showConfirmButton: !1,
                                        timer: 1500
                                    })
                                },
                                complete: function(t) {
                                    document.getElementById("loading-button-popup").style.display = "none",
                                    $("#checkNameModal").modal("hide"),
                                    $("#formCheckName").trigger("reset")
                                }
                            })
                        })
                    })
                }
            });
            var e = $("input#companyname").val() + " " + $("select#suffixname option:selected").val();
            $("span#txtName").text(e);
            var a = $("#company_information")
              , e = $("#personal_information");
            !0 === t.valid() && (a.is(":visible"),
            e.show(),
            a.hide())
        }),
        $("#formCheckName .previous").click(function() {
            var t = $("#personal_information")
              , e = $("#company_information");
            t.is(":visible"),
            e.show(),
            t.hide()
        })
    } catch (t) {
        console.log(t)
    }
}),
$("#checkNameModal").on("hidden.bs.modal", function() {
    var t = $("#personal_information")
      , e = $("#company_information");
    t.is(":visible"),
    e.show(),
    t.hide()
}),
$(document).ready(function() {
    $("#slct-company-formation").selectpicker("render"),
    $("#slct-company-formation").on("changed.bs.select", function(t, e, a, n) {
        $(".section-banner-company-formation .btn-apply").attr("href", "/" + this.value + "-company-formation")
    }),
    $(".company-formation-country ul.nav-tabs").on("click", "li", function() {
        $("#bg-map img").removeClass("map-active");
        var t = $(this).index();
        $("#bg-map img").eq(t).addClass("map-active"),
        $("ul.nav-tabs li").removeClass("selected"),
        $(this).addClass("selected")
    })
}),
$("#btnCompanyFormation").on("click", function() {
    form_company_question()
}),
"function" != typeof window.CustomEvent && (window.CustomEvent = function(t, e) {
    e = e || {
        bubbles: !1,
        cancelable: !1,
        detail: null
    };
    var a = document.createEvent("CustomEvent");
    return a.initCustomEvent(t, e.bubbles, e.cancelable, e.detail),
    a
}
),
$(".banking-support-page select[name=remote]").on("change", function(t) {
    filterCountryBankS()
}),
$(".banking-support-page select[name=initial-deposit]").on("change", function() {
    filterCountryBankS()
}),
$(".banking-support-page #bank-country").selectpicker().change(function() {
    toggleSelectAllBankCountryS($(this)),
    filterCountryBankS()
}).trigger("change");
var bLazy = new Blazy;
function sliderLogo() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
      , e = t.itemClassName || "slider-logo__container__slider__item"
      , r = t.timer || 5e3
      , o = 0;
    if (!t.slider)
        throw new Error("Missing slider.");
    if (!(t.slider instanceof Element))
        throw new Error("Slider must be an element.");
    if (!(0 < (t = t.slider).querySelectorAll("." + e).length))
        throw new Error("Slider is empty.");
    for (var s, a = 0, n = (s = t.querySelectorAll("." + e)).length; a < n; a++)
        if ("IMG" !== s[a].tagName)
            throw new Error("Slider item must be an img tag.");
    function c(t) {
        var e, t = 0 < arguments.length && void 0 !== t ? t : {};
        if (void 0 === t.itemActiveIndex)
            throw new Error("Missing active item index");
        if (e = t.itemActiveIndex,
        !t.sliderItems)
            throw new Error("Missing slider items.");
        for (var a = t.sliderItems, n = t.initialize || !1, i = 0, r = a.length; i < r; i++)
            n ? i === e ? a[i].setAttribute("status", "active") : a[i].setAttribute("status", "inactive") : e === a.length - 1 ? 0 === i ? a[i].setAttribute("status", "active") : a[i].setAttribute("status", "inactive") : i === e + 1 ? a[i].setAttribute("status", "active") : a[i].setAttribute("status", "inactive");
        for (var o = 0, s = a.length; o < s; o++)
            if ("active" === a[o].getAttribute("status")) {
                e = o;
                break
            }
        !function(t) {
            var e, t = 0 < arguments.length && void 0 !== t ? t : {}, a = 0;
            if (void 0 === t.itemActiveIndex)
                throw new Error("Missing active item index");
            if (e = t.itemActiveIndex,
            !t.sliderItems)
                throw new Error("Missing slider items.");
            for (var n, i = 0, r = 0, o = (n = t.sliderItems).length; r < o; r++)
                if (n[r].offsetLeft < 0) {
                    n[r].style.display = "none",
                    i = r;
                    break
                }
            if (0 === e)
                for (var s = 0, c = n.length; s < c; s++)
                    s === n.length - 1 ? n[s].style.left = 0 - n[s].getBoundingClientRect().width + "px" : (n[s].style.left = a + "px",
                    a += n[s].getBoundingClientRect().width);
            else
                for (var l = 0, d = n.length; l < d; l++)
                    if (l === e) {
                        n[l].style.left = "0px";
                        for (var a = n[l].getBoundingClientRect().width, u = 0, p = n.length; u < p; u++)
                            u === e - 1 ? n[u].style.left = 0 - n[u].getBoundingClientRect().width + "px" : e < u && (n[u].style.left = a + "px",
                            a += n[u].getBoundingClientRect().width);
                        for (var m = 0, h = n.length; m < h; m++)
                            m < e - 1 && (n[m].style.left = a + "px",
                            a += n[m].getBoundingClientRect().width)
                    }
            n[i].style.display = ""
        }({
            sliderItems: a,
            itemActiveIndex: e
        })
    }
    var l = setInterval(function() {
        for (var t = 0, e = 0, a = s.length; e < a; e++)
            s[e].complete && t++;
        if (t === s.length) {
            for (var n = 0, i = s.length; n < i; n++)
                s[n].style.position = "absolute";
            c({
                sliderItems: s,
                itemActiveIndex: o,
                initialize: !0
            }),
            setInterval(function() {
                for (var t = 0, e = s.length; t < e; t++)
                    if ("active" === s[t].getAttribute("status")) {
                        o = t;
                        break
                    }
                c({
                    sliderItems: s,
                    itemActiveIndex: o
                })
            }, r),
            clearInterval(l)
        }
    }, 500)
}
function subcribeUs() {
    var t = {
        name: $("#subcribe-us input[name=your-name]").val(),
        email: $("#subcribe-us input[name=your-email]").val()
    };
    $.ajax({
        type: "POST",
        url: $("#subcribe-us").data("urls"),
        data: JSON.stringify(t),
        contentType: "application/json",
        success: function(t) {
            Swal.fire({
                position: "center",
                type: "success",
                title: "Send Success",
                showConfirmButton: !1,
                timer: 1500
            })
        },
        error: function() {
            Swal.fire({
                position: "center",
                type: "error",
                title: "Send Error",
                showConfirmButton: !1,
                timer: 1500
            })
        },
        complete: function(t) {
            $("#contact-form-1").trigger("reset")
        }
    })
}
function onloadSubscriptionConfirmed() {
    try {
        var t = readParamUrl()
          , e = altFind(t, function(t) {
            return t.hash_info
        })
          , a = altFind(t, function(t) {
            return t.email
        });
        e && a && $.ajax({
            url: linkUrlOrderAPi + "/api/portal/mailchimp/subscription_confirmed",
            type: "POST",
            data: {
                hash_info: e.hash_info,
                email: a.email
            },
            success: function(t) {},
            error: function(t) {
                console.log(t)
            }
        })
    } catch (t) {
        console.log(t)
    }
}
function onloadSurvey() {
    try {
        getSurvey(dataSurvey())
    } catch (t) {
        console.log(t)
    }
}
function dataSurvey() {
    var t = readParamUrl()
      , e = altFind(t, function(t) {
        return t.signature
    })
      , t = altFind(t, function(t) {
        return t.survey_choice_id
    });
    return {
        signature: e ? e.signature : null,
        survey_choice_id: t ? t.survey_choice_id : 0
    }
}
function postSurvey(t) {
    $.ajax({
        url: linkUrlOrderAPi + "/api/portal/survey",
        type: "post",
        data: t,
        success: function(t) {
            document.querySelector(".p404-page .survey #success-survey").style.display = "block",
            document.querySelector(".p404-page .survey #btn-home").style.display = "block",
            document.querySelector(".p404-page .survey #change-survey").style.display = "none",
            document.querySelector(".p404-page .survey #text-survey").style.display = "none"
        },
        error: function(t) {
            console.log(t)
        }
    })
}
function getSurvey(e) {
    $.ajax({
        url: linkUrlOrderAPi + "/api/portal/survey",
        type: "get",
        data: e,
        success: function(t) {
            t = t.data;
            t.is_change && (t && 0 == t.old_survey.length && t.old_survey !== t.new_survey && (5 == e.survey_choice_id ? (document.querySelector(".p404-page .survey #success-survey").style.display = "none",
            document.querySelector(".p404-page .survey #btn-home").style.display = "none",
            document.querySelector(".p404-page .survey #change-survey").style.display = "none",
            document.querySelector(".p404-page .survey #text-survey").style.display = "block") : postSurvey(e)),
            t && 0 < t.old_survey.length && t.old_survey !== t.new_survey && (console.log(document.querySelector(".p404-page .survey #country_name")),
            document.querySelector(".p404-page .survey #country_name").innerHTML = t.country,
            document.querySelector(".p404-page .survey #success-survey").style.display = "none",
            document.querySelector(".p404-page .survey #btn-home").style.display = "none",
            document.querySelector(".p404-page .survey #change-survey").style.display = "block",
            document.querySelector(".p404-page .survey #old-survey").innerHTML = "Your old feedback: " + t.old_survey,
            document.querySelector(".p404-page .survey #new-survey").innerHTML = "Your new feedback: " + t.new_survey))
        },
        error: function(t) {
            console.log(t.responseJSON && t.responseJSON.data)
        }
    })
}
function noChangeFeedback() {
    document.querySelector(".p404-page .survey #success-survey").style.display = "block",
    document.querySelector(".p404-page .survey #btn-home").style.display = "block",
    document.querySelector(".p404-page .survey #change-survey").style.display = "none",
    document.querySelector(".p404-page .survey #text-survey").style.display = "none"
}
function yesChangeFeedback() {
    var t = dataSurvey();
    5 == t.survey_choice_id ? (document.querySelector(".p404-page .survey #success-survey").style.display = "none",
    document.querySelector(".p404-page .survey #change-survey").style.display = "none",
    document.querySelector(".p404-page .survey #text-survey").style.display = "block",
    document.querySelector(".p404-page .survey #btn-no-content").style.display = "none") : postSurvey(t)
}
function yesSubmitFeedback() {
    console.log($(".p404-page .survey textarea[name=content-survey]").val());
    var t = $(".p404-page .survey textarea[name=content-survey]").val();
    0 < t.length ? postSurvey(Object.assign(dataSurvey(), {
        content: t
    })) : document.querySelector(".p404-page .survey #content_error").innerHTML = "This field is required."
}
$.each($(".slide-article").not(".slick-initialized"), function(t, e) {
    var a = e.querySelectorAll(".col-md-4").length - 1;
    $(e).slick({
        infinite: !0,
        slidesToShow: 5,
        autoplay: !0,
        autoplaySpeed: 3e3,
        touchThreshold: 500,
        lazyLoad: "ondemand",
        initialSlide: a,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [{
            breakpoint: 1301,
            settings: {
                slidesToShow: 3,
                initialSlide: 0
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                initialSlide: 0
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                initialSlide: 0
            }
        }]
    })
}),
$.each($(".slide-articleBlog").not(".slick-initialized"), function(t, e) {
    var a = e.querySelectorAll(".col-md-4").length - 1;
    $(e).slick({
        infinite: !0,
        dots: !0,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: !0,
        speed: 500,
        autoplaySpeed: 4e3,
        touchThreshold: 500,
        lazyLoad: "ondemand",
        initialSlide: a,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 0
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0
            }
        }]
    })
}),
$(".slide-article-lading").slick({
    infinite: !0,
    slidesToShow: 3,
    autoplay: !0,
    autoplaySpeed: 3e3,
    touchThreshold: 500,
    lazyLoad: "ondemand",
    initialSlide: length,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            initialSlide: 0
        }
    }, {
        breakpoint: 550,
        settings: {
            slidesToShow: 1,
            initialSlide: 0
        }
    }]
}),
$(window).on("load", function() {
    $(".slide-articleBlogSpecial").slick({
        infinite: !0,
        slidesToShow: 3,
        autoplay: !0,
        lazyLoad: "ondemand",
        initialSlide: length,
        autoplaySpeed: 3e3,
        touchThreshold: 500,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                initialSlide: 0
            }
        }, {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                initialSlide: 0
            }
        }]
    })
}),
$(".slider-banner").slick(_defineProperty({
    dots: !0,
    infinite: !0,
    autoplaySpeed: 3e3,
    speed: 2e3,
    fade: !0,
    autoplay: !0,
    cssEase: "linear"
}, "dots", !0)),
window.addEventListener("DOMContentLoaded", function(t) {
    var e = document.querySelector("#slider-logo-about-us .container.slider-logo__container__slider");
    e && sliderLogo({
        slider: e
    })
}),
$(document).ready(function() {
    $("#subcribe-us .btn-submit").on("click", function() {
        subcribeUs()
    })
}),
$(document).ready(function() {
    $(".p404-page .survey textarea[name=content-survey]").on("change keyup paste", function(t) {
        console.log(t.target.value),
        0 < !t.target.value.length ? document.querySelector(".p404-page .survey #content_error").innerHTML = "This field is required." : document.querySelector(".p404-page .survey #content_error").innerHTML = ""
    })
});
var mainNavLinks = document.querySelectorAll("#toc-spec ul li a")
  , mainSections = document.querySelectorAll(".contentBlogRequest-left sectionContent");
function getTrustPilot() {
    $.ajax({
        type: "GET",
        url: linkUrlOrderAPi + "/api/portal/trustpilot",
        success: function(t) {
            var e;
            t && t.data && (e = t.data,
            htmlTrustpilotScore((t = initTrustpilot(parseFloat(e.trustScore))).label, t.image, e.ratingsTotalCount))
        },
        error: function(t) {
            console.log(t)
        },
        complete: function(t) {}
    })
}
function initTrustpilot(t) {
    return 4.8 <= t ? {
        image: "/images/trustpilot/stars-5.svg",
        label: "Excellent"
    } : 4.3 <= t && t <= 4.7 ? {
        image: "/images/trustpilot/stars-4.5.svg",
        label: "Excellent"
    } : 3.8 <= t && t <= 4.2 ? {
        image: "/images/trustpilot/stars-4.svg",
        label: "Great"
    } : 3.3 <= t && t <= 3.7 ? {
        image: "/images/trustpilot/stars-3.5.svg",
        label: "Average"
    } : 2.8 <= t && t <= 3.2 ? {
        image: "/images/trustpilot/stars-3.svg",
        label: "Average"
    } : 2.3 <= t && t <= 2.7 ? {
        image: "/images/trustpilot/stars-2.5.svg",
        label: "Poor"
    } : 1.8 <= t && t <= 2.2 ? {
        image: "/images/trustpilot/stars-2.svg",
        label: "Poor"
    } : 1.3 <= t && t <= 1.7 ? {
        image: "/images/trustpilot/stars-1.5.svg",
        label: "Bad"
    } : {
        image: "/images/trustpilot/stars-1.svg",
        label: "Bad"
    }
}
function htmlTrustpilotScore(t, e, a) {
    document.querySelector("#trustpilot_score .label") && (document.querySelector("#trustpilot_score .label").innerHTML = t),
    document.querySelector("#trustpilot_score #reviewer") && (document.querySelector("#trustpilot_score #reviewer").innerHTML = a),
    document.querySelector("#trustpilot_score .star") && document.querySelector("#trustpilot_score .star").setAttribute("src", e)
}
function getTrustPilotScore() {
    $.ajax({
        type: "GET",
        url: "https://cors-anywhere.herokuapp.com/https://www.trustpilot.com/businessunit/582c07bf0000ff0005979466/companyinfobox",
        success: function(t) {
            var e;
            t && t.trustScore && (e = initTrustpilot(parseFloat(t.trustScore)),
            document.querySelector("#trustpilot_score #trust_score") && (document.querySelector("#trustpilot_score #trust_score").innerHTML = t.trustScore),
            document.querySelector("#trustpilot_score .star") && e && e.image && document.querySelector("#trustpilot_score .star").setAttribute("src", e.image))
        }
    })
}
window.addEventListener("scroll", function(t) {
    var a = window.scrollY;
    mainNavLinks.forEach(function(t) {
        var e = document.querySelector(t.hash);
        e.offsetTop <= a && e.offsetTop + e.offsetHeight > a ? t.classList.add("current") : t.classList.remove("current")
    })
});