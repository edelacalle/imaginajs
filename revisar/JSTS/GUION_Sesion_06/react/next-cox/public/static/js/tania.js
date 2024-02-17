var cookies_div;
var POTENZA = {};
$.fn.exists = function() {
    return this.length > 0
}
;
if ($("table.estructura a").length) {
    $("table.estructura a").on("click", function(event) {
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body, header").animate({
            scrollTop: $(target).offset().top - ($(window).width() > 768 ? 90 : 15)
        }, 1e3)
    })
}
(function() {
    var a, b, c, d, e, f = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, g = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in b)
                d = b[c],
                null == a[c] && (a[c] = d);
            return a
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a.prototype.createEvent = function(a, b, c, d) {
            var e;
            return null == b && (b = !1),
            null == c && (c = !1),
            null == d && (d = null),
            null != document.createEvent ? (e = document.createEvent("CustomEvent"),
            e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(),
            e.eventType = a) : e.eventName = a,
            e
        }
        ,
        a.prototype.emitEvent = function(a, b) {
            return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
        }
        ,
        a.prototype.addEvent = function(a, b, c) {
            return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
        }
        ,
        a.prototype.removeEvent = function(a, b, c) {
            return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
        }
        ,
        a.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    d = this.getComputedStyle || function(a) {
        return this.getPropertyValue = function(b) {
            var c;
            return "float" === b && (b = "styleFloat"),
            e.test(b) && b.replace(e, function(a, b) {
                return b.toUpperCase()
            }),
            (null != (c = a.currentStyle) ? c[b] : void 0) || null
        }
        ,
        this
    }
    ,
    e = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function e(a) {
            null == a && (a = {}),
            this.scrollCallback = f(this.scrollCallback, this),
            this.scrollHandler = f(this.scrollHandler, this),
            this.resetAnimation = f(this.resetAnimation, this),
            this.start = f(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return e.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null,
            scrollContainer: null
        },
        e.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = function() {
                var a, c, d, e;
                for (d = this.element.querySelectorAll("." + this.config.boxClass),
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    c = 0,
                    d = b.length; d > c; c++)
                        f = b[c],
                        g.push(function() {
                            var a, b, c, d;
                            for (c = f.addedNodes || [],
                            d = [],
                            a = 0,
                            b = c.length; b > a; a++)
                                e = c[a],
                                d.push(this.doSync(e));
                            return d
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        e.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        e.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        e.prototype.doSync = function(a) {
            var b, c, d, e, f;
            if (null == a && (a = this.element),
            1 === a.nodeType) {
                for (a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length; d > c; c++)
                    b = e[c],
                    g.call(this.all, b) < 0 ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0),
                    f.push(this.scrolled = !0)) : f.push(void 0);
                return f
            }
        }
        ,
        e.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = a.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
        }
        ,
        e.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        e.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        e.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.style.visibility = "visible");
            return e
        }
        ,
        e.prototype.resetAnimation = function(a) {
            var b;
            return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement,
            b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        e.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        e.prototype.vendors = ["moz", "webkit"],
        e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b)
                e = b[c],
                a["" + c] = e,
                d.push(function() {
                    var b, d, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    d = g.length; d > b; b++)
                        f = g[b],
                        h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
                    return h
                }
                .call(this));
            return d
        }
        ,
        e.prototype.vendorCSS = function(a, b) {
            var c, e, f, g, h, i;
            for (h = d(a),
            g = h.getPropertyCSSValue(b),
            f = this.vendors,
            c = 0,
            e = f.length; e > c; c++)
                i = f[c],
                g = g || h.getPropertyCSSValue("-" + i + "-" + b);
            return g
        }
        ,
        e.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = d(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        e.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        e.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        e.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        e.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        e.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        e.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        e.prototype.util = function() {
            return null != this._util ? this._util : this._util = new b
        }
        ,
        e.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        e
    }()
}
).call(this);
(function($) {
    var defaultSettings = {
        logo_align: "left",
        links_align: "left",
        socialBar_align: "left",
        searchBar_align: "right",
        trigger: "hover",
        effect: "fade",
        effect_speed: 400,
        sibling: true,
        outside_click_close: true,
        top_fixed: false,
        sticky_header: false,
        sticky_header_height: 200,
        menu_position: "horizontal",
        full_width: true,
        mobile_settings: {
            collapse: false,
            sibling: true,
            scrollBar: true,
            scrollBar_height: 400,
            top_fixed: false,
            sticky_header: false,
            sticky_header_height: 200
        }
    };
    $.fn.megaMenu = function(settings) {
        settings = $.extend({}, defaultSettings, settings || {});
        return this.each(function() {
            var $this = $(this), $ul = "ul", $li = "li", $a = "a", menu_logo = $this.find(".menu-logo"), menu_logo_li = menu_logo.children($li), menu_links = $this.find(".menu-links"), menu_links_li = menu_links.children($li), menu_socialBar = $this.find(".menu-social-bar"), menu_searchBar = $this.find(".menu-search-bar"), mobile_trigger_button = ".menu-mobile-collapse-trigger", mobile_dropDown_trigger = ".mobileTriggerButton", desktop_dropDown_trigger = ".desktopTriggerButton", activeClass = "active", activeTrigger = "activeTrigger", activeTriggerMobile = "activeTriggerMobile", dropDown = ".drop-down-multilevel, .drop-down, .drop-down-tab-bar", desktopTopFixed = "desktopTopFixed", mobileTopFixed = "mobileTopFixed", fullWidth = "menuFullWidth", Canvas;
            Canvas = {
                menu_full_width: function() {
                    if (settings.full_width === true) {
                        $this.addClass(fullWidth)
                    }
                },
                logo_Align: function() {
                    if (settings.logo_align === "right") {
                        menu_logo.addClass("menu-logo-align-right")
                    }
                },
                links_Align: function() {
                    if (settings.links_align === "right") {
                        menu_links.addClass("menu-links-align-right")
                    }
                },
                social_bar_Align: function() {
                    if (settings.socialBar_align === "right") {
                        menu_socialBar.addClass("menu-social-bar-right")
                    }
                },
                search_bar_Align: function() {
                    if (settings.searchBar_align === "left") {
                        menu_searchBar.addClass("menu-search-bar-left")
                    }
                },
                collapse_trigger_button: function() {
                    if (settings.mobile_settings.collapse === true) {
                        menu_logo_li.append('<div class="menu-mobile-collapse-trigger">' + "<span></span>" + "</div>");
                        var drop_down = menu_links.add(menu_socialBar);
                        drop_down.hide(0);
                        menu_searchBar.addClass(activeClass);
                        $this.find(mobile_trigger_button).on("click", function() {
                            console.log("MENU BUTTON TRIGGER click");
                            if ($(this).hasClass(activeClass)) {
                                $(this).removeClass(activeClass);
                                $("#logo_img").removeClass("d-none");
                                $(".mega-menu .menu-logo").removeClass("active");
                                $(".menu-active").removeClass("justify-content-end");
                                $(".menu-active").addClass("justify-content-between");
                                console.log("MENU BUTTON TRIGGER 1");
                                drop_down.hide(0)
                            } else {
                                $(this).addClass(activeClass);
                                $("#logo_img").addClass("d-none");
                                $(".mega-menu .menu-logo").addClass("active");
                                $(".menu-active").removeClass("justify-content-between");
                                $(".menu-active").addClass("justify-content-end");
                                drop_down.show(0);
                                console.log("MENU BUTTON TRIGGER 2")
                            }
                            return false
                        })
                    }
                },
                switch_effects: function() {
                    switch (settings.effect) {
                    case "fade":
                        $this.find(dropDown).addClass("effect-fade");
                        break;
                    case "scale":
                        $this.find(dropDown).addClass("effect-scale");
                        break;
                    case "expand-top":
                        $this.find(dropDown).addClass("effect-expand-top");
                        break;
                    case "expand-bottom":
                        $this.find(dropDown).addClass("effect-expand-bottom");
                        break;
                    case "expand-left":
                        $this.find(dropDown).addClass("effect-expand-left");
                        break;
                    case "expand-right":
                        $this.find(dropDown).addClass("effect-expand-right");
                        break
                    }
                },
                transition_delay: function() {
                    $this.find(dropDown).css({
                        webkitTransition: "all " + settings.effect_speed + "ms ease ",
                        transition: "all " + settings.effect_speed + "ms ease "
                    })
                },
                hover_trigger: function() {
                    if (settings.trigger === "hover") {
                        Canvas.transition_delay();
                        $this.find(dropDown).parents($li).addClass("hoverTrigger");
                        Canvas.switch_effects()
                    }
                },
                mobile_trigger: function() {
                    $this.find(dropDown).prev($a).append('<div class="mobileTriggerButton"></div>');
                    $this.find(mobile_dropDown_trigger).on("click", function() {
                        var elem = $(this)
                          , parents = elem.parents($a)
                          , drop_down = parents.next(dropDown);
                        if (drop_down.is(":hidden")) {
                            if (settings.mobile_settings.sibling === true) {
                                elem.parents($this).siblings($ul + "," + $li).find(dropDown).hide(0);
                                elem.parents($this).siblings($li).removeClass(activeTriggerMobile);
                                elem.parents($this).siblings($ul).find($li).removeClass(activeTriggerMobile)
                            }
                            parents.parent($li).addClass(activeTriggerMobile);
                            drop_down.show(0)
                        } else {
                            parents.parent($li).removeClass(activeTriggerMobile);
                            drop_down.hide(0)
                        }
                        return false
                    });
                    $this.find("i.fa.fa-indicator").on("click", function() {
                        return false
                    })
                },
                click_trigger: function() {
                    if (settings.trigger === "click") {
                        $this.find(dropDown).prev($a).append('<div class="desktopTriggerButton"></div>');
                        $this.find(dropDown).parents($li).addClass("ClickTrigger");
                        Canvas.switch_effects();
                        Canvas.transition_delay();
                        $this.find(desktop_dropDown_trigger).on("click", function(event) {
                            event.stopPropagation();
                            event.stopImmediatePropagation();
                            var elem = $(this)
                              , parents = elem.parents($a)
                              , drop_down = parents.next(dropDown);
                            if (!drop_down.hasClass(activeClass)) {
                                if (settings.sibling === true) {
                                    elem.parents($this).siblings($ul + "," + $li).find(dropDown).removeClass(activeClass);
                                    elem.parents($this).siblings($li).removeClass(activeTrigger);
                                    elem.parents($this).siblings($ul).find($li).removeClass(activeTrigger)
                                }
                                parents.parent($li).addClass(activeTrigger);
                                drop_down.addClass(activeClass)
                            } else {
                                parents.parent($li).removeClass(activeTrigger);
                                drop_down.removeClass(activeClass)
                            }
                        })
                    }
                },
                scroll_bar: function() {
                    if (settings.mobile_settings.scrollBar === true) {
                        menu_links.css({
                            maxHeight: settings.mobile_settings.scrollBar_height + "px",
                            overflow: "auto"
                        })
                    }
                },
                top_Fixed: function() {
                    if (settings.top_fixed === true) {
                        $this.addClass(desktopTopFixed)
                    }
                    if (settings.mobile_settings.top_fixed) {
                        $this.addClass(mobileTopFixed)
                    }
                },
                sticky_Header: function() {
                    var $window = $(window)
                      , scrollFlag = true
                      , scrollFlagMobile = true
                      , logoHeight = $(".menu-logo").outerHeight();
                    if (!$("#header").hasClass("logo-center")) {
                        $(".mega-menu .menu-list-items").height(logoHeight - 10)
                    }
                    if (settings.sticky_header === true && settings.menu_position === "horizontal" && settings.top_fixed === false) {
                        $window.on("scroll", function() {
                            if ($window.scrollTop() > settings.sticky_header_height) {
                                if (scrollFlag === true) {
                                    if (!$("#header").hasClass("logo-center")) {
                                        $(".mega-menu .menu-list-items").height("auto")
                                    }
                                    $this.fadeOut(200, function() {
                                        $(this).addClass(desktopTopFixed);
                                        if (!$("#header").hasClass("logo-center")) {
                                            var logoHeight2 = $(".menu-logo img").outerHeight(true);
                                            $(".mega-menu .menu-list-items").height(logoHeight2)
                                        }
                                        $(this).fadeIn(200)
                                    });
                                    scrollFlag = false
                                }
                            } else {
                                if (scrollFlag === false) {
                                    $this.fadeOut(200, function() {
                                        if (!$("#header").hasClass("logo-center")) {
                                            $(".mega-menu .menu-list-items").height(logoHeight)
                                        }
                                        $(this).removeClass(desktopTopFixed).fadeIn(200)
                                    });
                                    scrollFlag = true
                                }
                            }
                        })
                    }
                    if (settings.mobile_settings.sticky_header === true && settings.top_fixed === false) {
                        $window.on("scroll", function() {
                            if ($window.scrollTop() > settings.mobile_settings.sticky_header_height) {
                                if (scrollFlagMobile === true) {
                                    $this.addClass(mobileTopFixed);
                                    scrollFlagMobile = false
                                }
                            } else {
                                if (scrollFlagMobile === false) {
                                    $this.removeClass(mobileTopFixed);
                                    scrollFlagMobile = true
                                }
                            }
                        })
                    }
                },
                position: function() {
                    if (settings.menu_position === "vertical-left") {
                        $this.addClass("vertical-left")
                    } else if (settings.menu_position === "vertical-right") {
                        $this.addClass("vertical-right")
                    }
                }
            };
            Canvas.menu_full_width();
            Canvas.logo_Align();
            Canvas.links_Align();
            Canvas.social_bar_Align();
            Canvas.search_bar_Align();
            Canvas.collapse_trigger_button();
            Canvas.hover_trigger();
            Canvas.mobile_trigger();
            Canvas.click_trigger();
            Canvas.scroll_bar();
            Canvas.top_Fixed();
            Canvas.sticky_Header();
            Canvas.position();
            $(window).resize(function() {})
        })
    }
}
)(jQuery);
POTENZA.megaMenu = function() {
    var nav = $("#menu");
    var l = nav.attr("data-pos");
    var pos = "horizontal";
    if (l)
        pos = l;
    nav.megaMenu({
        logo_align: "left",
        links_align: "left",
        socialBar_align: "left",
        searchBar_align: "right",
        trigger: "hover",
        effect: "fade",
        effect_speed: 400,
        sibling: true,
        outside_click_close: true,
        top_fixed: false,
        sticky_header: true,
        sticky_header_height: 250,
        menu_position: pos,
        full_width: false,
        mobile_settings: {
            collapse: true,
            sibling: true,
            scrollBar: true,
            scrollBar_height: 400,
            top_fixed: false,
            sticky_header: false,
            sticky_header_height: 200
        }
    });
    var path = window.location.pathname.split("/").pop();
    var target = $('header .mega-menu a[href="' + path + '"]');
    target.parent().addClass("active");
    $("header .mega-menu li.active").parents("li").addClass("active")
}
;
POTENZA.preloader = function() {
    $("#load").fadeOut();
    $("#pre-loader").delay(0).fadeOut("normal")
}
;
POTENZA.wowanimation = function() {
    if ($(".wow").exists()) {
        var wow = new WOW({
            animateClass: "animated",
            offset: 100,
            mobile: false
        });
        wow.init()
    }
}
;
POTENZA.mailchimp = function() {
    $(document).on("click", "#mc-embedded-subscribe", function(event) {
        event.preventDefault();
        var email_id = $("#mce-EMAIL").val();
        var val_email_id = validateEmail(email_id);
        if (email_id != "" && val_email_id === true) {
            var failure_message = "Whoops, looks like there was a problem. Please try again later.";
            var memberid = email_id.toLowerCase();
            var url = memberid;
            $.ajax({
                type: "POST",
                url: "subscribe/",
                data: {
                    url: url
                },
                dataType: "json",
                success: function(data) {
                    $("#msg").html("Suscrito correctamente");
                    $("#mce-EMAIL").val("")
                }
            })
        } else {
            $("#msg").html('<p style="color: #EA4335">Escriba un correo electronico correcto</p>');
            return false
        }
        return false
    });
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    }
}
;
POTENZA.topbar = function() {
    $.ajax({
        url: "https://api.manz.es/cox/resume",
        //xurl: "/data/RESUME.json",
        async: false,
        dataType:"jsonp",
        contentType: "application/json",
        success: function(json) {
            var coxa = {
                precio: json.intradia.price,
                change: json.intradia.change,
                percent: json.intradia.percent
            };
            pintar(coxa)
        }
    });
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
    function pintar(coxa) {
        $("#precio").html("");
        var moneda = " MEX$ ";
        if (locale == "es") {
            moneda = " MXN "
        }
        if (parseFloat(coxa.change) >= 0) {
            $("#precio").append('<i class="fa fa-arrow-up tc-green"></i> ' + coxa.precio + moneda + '<span class="tc-green">(' + coxa.percent + "%)</span>")
        } else {
            $("#precio").append('<i class="fa fa-arrow-down tc-red"></i> ' + coxa.precio + moneda + '<span class="tc-red">(' + coxa.percent + "%)</span>")
        }
    }
}
;
function comprobarCookies() {
    if (localStorage.coxenergyCookies == "true") {
        cookies_div.css("display", "none")
    }
}
function aceptarCookies() {
    localStorage.coxenergyCookies = "true";
    cookies_div.css("display", "none")
}
$(function() {
    $("button.link-to").click(function() {
        document.location = $(this).attr("data-href")
    });
    cookies_div = $("#cookies-div");
    comprobarCookies();
    POTENZA.megaMenu();
    POTENZA.wowanimation();
    POTENZA.mailchimp();
    POTENZA.topbar();
    $(".hiddenMail").click(function(event) {
        event.preventDefault();
        $(this).off("click");
        var email = $(this).attr("data-email").replace(/AT/, "@").replace(/DOT/, ".");
        window.open("mailto:" + email)
    });
    setTimeout(function() {
        POTENZA.preloader()
    }, 1500)
});
function solicitarFunction(event) {
    event.preventDefault();
    var $submit_btn = $("#solicitar_form").find(".enviar");
    $submit_btn.prop("disabled", true);
    $submit_btn.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Enviando...')
}
function alert_animations(container, type, text) {
    var htmlAlert = '<div class="alert alert-' + type + ' mt-2 mb-0">' + text + "</div>";
    $(container).prepend(htmlAlert);
    $(container + " .alert").first().hide().fadeIn(800).delay(2e3).fadeOut(800, function() {
        $(this).remove()
    })
}
