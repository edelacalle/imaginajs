(function($) {
    "use strict";
    var POTENZA = {};
    var $window = $(window)
      , $document = $(document)
      , $body = $("body")
      , $countdownTimer = $(".countdown")
      , $bar = $(".bar")
      , $pieChart = $(".round-chart")
      , $progressBar = $(".skill-bar")
      , $counter = $(".counter")
      , $datetp = $(".datetimepicker");
    $.fn.exists = function() {
        return this.length > 0
    }
    ;
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    POTENZA.preloader = function() {
        $("#load").fadeOut();
        $("#pre-loader").delay(0).fadeOut("normal")
    }
    ;
    POTENZA.megaMenu = function() {
        loadScript(plugin_path + "mega-menu/mega_menu.js", function() {
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
        })
    }
    ;
    POTENZA.carousel = function() {
        var owlslider = jQuery("div.owl-carousel");
        if (owlslider.length > 0) {
            loadScript(plugin_path + "owl-carousel/owl-carousel.min.js", function() {
                owlslider.each(function() {
                    var $this = $(this)
                      , $items = $this.data("items") ? $this.data("items") : 1
                      , $loop = $this.attr("data-loop") ? $this.data("loop") : true
                      , $navdots = $this.data("nav-dots") ? $this.data("nav-dots") : false
                      , $navarrow = $this.data("nav-arrow") ? $this.data("nav-arrow") : false
                      , $autoplay = $this.attr("data-autoplay") ? $this.data("autoplay") : true
                      , $autospeed = $this.attr("data-autospeed") ? $this.data("autospeed") : 5e3
                      , $smartspeed = $this.attr("data-smartspeed") ? $this.data("smartspeed") : 1e3
                      , $autohgt = $this.data("autoheight") ? $this.data("autoheight") : false
                      , $space = $this.attr("data-space") ? $this.data("space") : 30;
                    $(this).owlCarousel({
                        loop: $loop,
                        items: $items,
                        responsive: {
                            0: {
                                items: $this.data("xx-items") ? $this.data("xx-items") : 1
                            },
                            480: {
                                items: $this.data("xs-items") ? $this.data("xs-items") : 1
                            },
                            768: {
                                items: $this.data("sm-items") ? $this.data("sm-items") : 2
                            },
                            980: {
                                items: $this.data("md-items") ? $this.data("md-items") : 3
                            },
                            1200: {
                                items: $items
                            }
                        },
                        dots: $navdots,
                        autoplayTimeout: $autospeed,
                        smartSpeed: $smartspeed,
                        autoHeight: $autohgt,
                        margin: $space,
                        nav: $navarrow,
                        navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
                        autoplay: $autoplay,
                        autoplayHoverPause: true
                    })
                })
            })
        }
    }
    ;
    POTENZA.raindrops = function() {
        if ($(".raindrops").exists()) {
            loadScript(plugin_path + "raindrops/raindrops.js", function() {
                $("#raindrops").raindrops({
                    color: "#84ba3f",
                    canvasHeight: 50
                })
            })
        }
    }
    ;
    POTENZA.contactform = function() {
        $("#contactform").submit(function(event) {
            $("#ajaxloader").show();
            $("#contactform").hide();
            $.ajax({
                url: "php/contact-form.php",
                data: $(this).serialize(),
                type: "post",
                success: function(response) {
                    $("#ajaxloader").hide();
                    $("#contactform").show();
                    $("#formmessage").html(response).show().delay(2e4).fadeOut("slow")
                }
            });
            event.preventDefault()
        })
    }
    ;
    POTENZA.counters = function() {
        var counter = jQuery(".counter");
        if (counter.length > 0) {
            loadScript(plugin_path + "counter/jquery.countTo.js", function() {
                $counter.each(function() {
                    var $elem = $(this);
                    $elem.appear(function() {
                        $elem.find(".timer").countTo()
                    })
                })
            })
        }
    }
    ;
    POTENZA.Isotope = function() {
        loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function() {
            var $isotope = $(".isotope")
              , $itemElement = ".grid-item"
              , $filters = $(".isotope-filters");
            if ($isotope.exists()) {
                $isotope.isotope({
                    resizable: true,
                    itemSelector: $itemElement,
                    masonry: {
                        gutterWidth: 10
                    }
                });
                $filters.on("click", "button", function() {
                    var $val = $(this).attr("data-filter");
                    $isotope.isotope({
                        filter: $val
                    });
                    $filters.find(".active").removeClass("active");
                    $(this).addClass("active")
                })
            }
        })
    }
    ;
    POTENZA.masonry = function() {
        loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function() {
            setTimeout(function() {
                var $masonry = $(".masonry-main .masonry")
                  , $itemElement = ".masonry-main .masonry-item"
                  , $filters = $(".masonry-main .isotope-filters");
                if ($masonry.exists()) {
                    $masonry.isotope({
                        resizable: true,
                        percentPosition: true,
                        itemSelector: $itemElement,
                        masonry: {
                            gutterWidth: 0
                        }
                    });
                    $filters.on("click", "button", function() {
                        var filterValue = $(this).attr("data-filter");
                        $masonry.isotope({
                            filter: filterValue
                        })
                    });
                    $filters.each(function(i, buttonGroup) {
                        var $buttonGroup = $(buttonGroup);
                        $buttonGroup.on("click", "button", function() {
                            $buttonGroup.find(".active").removeClass("active");
                            $(this).addClass("active")
                        })
                    })
                }
            }, 100)
        })
    }
    ;
    POTENZA.mediaPopups = function() {
        if ($(".popup-single").exists() || $(".popup-gallery").exists() || $(".modal-onload").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
            loadScript(plugin_path + "magnific-popup/jquery.magnific-popup.min.js", function() {
                if ($(".popup-single").exists()) {
                    $(".popup-single").magnificPopup({
                        type: "image"
                    })
                }
                if ($(".popup-gallery").exists()) {
                    $(".popup-gallery").magnificPopup({
                        delegate: "a.portfolio-img",
                        type: "image",
                        tLoading: "Loading image #%curr%...",
                        mainClass: "mfp-img-mobile",
                        gallery: {
                            enabled: true,
                            navigateByImgClick: true,
                            preload: [0, 1]
                        },
                        image: {
                            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                            titleSrc: function(item) {
                                return item.el.attr("title") + "<small>by Marsel Van Oosten</small>"
                            }
                        }
                    })
                }
                if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
                    $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
                        disableOn: 700,
                        type: "iframe",
                        mainClass: "mfp-fade",
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false
                    })
                }
                var $modal = $(".modal-onload");
                if ($modal.length > 0) {
                    $(".popup-modal").magnificPopup({
                        type: "inline"
                    });
                    $(document).on("click", ".popup-modal-dismiss", function(e) {
                        e.preventDefault();
                        $.magnificPopup.close()
                    });
                    var elementTarget = $modal.attr("data-target");
                    setTimeout(function() {
                        $.magnificPopup.open({
                            items: {
                                src: elementTarget
                            },
                            type: "inline",
                            mainClass: "mfp-no-margins mfp-fade",
                            closeBtnInside: !0,
                            fixedContentPos: !0,
                            removalDelay: 500
                        }, 0)
                    }, 1500)
                }
            })
        }
    }
    ;
    POTENZA.goToTop = function() {
        var $goToTop = $("#back-to-top");
        var $logo = $("#logo_img");
        $goToTop.hide();
        $window.scroll(function() {
            if ($window.scrollTop() > 100) {
                $goToTop.fadeIn();
                $logo.attr("src", logo_top)
            } else {
                if ($logo.attr("src") != logo_top) {
                    $goToTop.fadeOut();
                    $logo.attr("src", logo_top)
                }
            }
        });
        $goToTop.on("click", function() {
            $("body,html").animate({
                scrollTop: 0
            }, 1e3);
            return false
        })
    }
    ;
    POTENZA.accordion = function() {
        $(".accordion").each(function(i, elem) {
            var $elem = $(this)
              , $acpanel = $elem.find(".acd-group > .acd-des")
              , $acsnav = $elem.find(".acd-group > .acd-heading");
            $acpanel.hide().first().slideDown("easeOutExpo");
            $acsnav.first().parent().addClass("acd-active");
            $acsnav.on("click", function() {
                if (!$(this).parent().hasClass("acd-active")) {
                    var $this = $(this).next(".acd-des");
                    $acsnav.parent().removeClass("acd-active");
                    $(this).parent().addClass("acd-active");
                    $acpanel.not($this).slideUp("easeInExpo");
                    $(this).next().slideDown("easeOutExpo")
                } else {
                    $(this).parent().removeClass("acd-active");
                    $(this).next().slideUp("easeInExpo")
                }
                return false
            })
        })
    }
    ;
    POTENZA.mediav = function() {
        if ($(".audio-video").exists()) {
            loadScript(plugin_path + "mediaelement-and-player/mediaelement-and-player.js", function() {
                $("audio,video").mediaelementplayer()
            })
        }
    }
    ;
    POTENZA.progressBar = function() {
        if ($progressBar.exists()) {
            $progressBar.each(function(i, elem) {
                var $elem = $(this)
                  , percent = $elem.attr("data-percent") || "100"
                  , delay = $elem.attr("data-delay") || "100"
                  , type = $elem.attr("data-type") || "%";
                if (!$elem.hasClass("progress-animated")) {
                    $elem.css({
                        width: "0%"
                    })
                }
                var progressBarRun = function() {
                    $elem.animate({
                        width: percent + "%"
                    }, "easeInOutCirc").addClass("progress-animated");
                    $elem.delay(delay).append('<span class="progress-type animated fadeIn">' + type + '</span><span class="progress-number animated fadeIn">' + percent + "</span>")
                };
                $(elem).appear(function() {
                    setTimeout(function() {
                        progressBarRun()
                    }, delay)
                })
            })
        }
    }
    ;
    POTENZA.countdownTimer = function() {
        if ($countdownTimer.exists()) {
            loadScript(plugin_path + "countdown/jquery.downCount.js", function() {
                $countdownTimer.downCount({
                    date: "12/25/2020 12:00:00",
                    offset: -4
                })
            })
        }
    }
    ;
    POTENZA.mobileslider = function() {
        var mobileslider = jQuery("#mobile-slider");
        if (mobileslider.length > 0) {
            loadScript(plugin_path + "mobile-slider/zenith.min.js", function() {
                $("#mobile-slider").zenith({
                    layout: "mobile-slider",
                    slideSpeed: 450,
                    autoplaySpeed: 2e3
                })
            })
        }
    }
    ;
    POTENZA.onepagenav = function() {
        var lastId, topMenu = $("#onepagenav"), topMenuHeight = topMenu.outerHeight() - 30, menuItems = topMenu.find("a"), scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item
            }
        });
        menuItems.on("click", function(e) {
            var href = $(this).attr("href")
              , offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $("html, body").stop().animate({
                scrollTop: offsetTop
            }, 1200);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                if ($window.width() < 991) {
                    $("#onepagenav .menu-mobile-collapse-trigger,.vertical-header a.but").click()
                }
            }
            e.preventDefault()
        });
        $window.scroll(function() {
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function() {
                if ($(this).offset().top < fromTop)
                    return this
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active")
            }
        });
        $("#myNavbar a,.move").on("click", function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                var offsetheight = 0;
                if ($("nav").hasClass("affix-top")) {
                    offsetheight = 100
                }
                $("html, body").animate({
                    scrollTop: $(hash).offset().top - offsetheight
                }, 800, function() {
                    window.location.hash = hash
                })
            }
            if ($(".navbar-toggle").css("display") != "none") {
                $(".navbar-toggle").trigger("click")
            }
        })
    }
    ;
    POTENZA.pniceScroll = function() {
        loadScript(plugin_path + "nicescroll/jquery.nicescroll.js", function() {
            $(".scrollbar").niceScroll({
                scrollspeed: 150,
                mousescrollstep: 38,
                cursorwidth: 5,
                cursorborder: 0,
                cursorcolor: "rgba(0,0,0,0.1)",
                autohidemode: true,
                zindex: 9,
                horizrailenabled: false,
                cursorborderradius: 0
            });
            $(".scrollbar-x").niceScroll({
                scrollspeed: 150,
                mousescrollstep: 38,
                cursorwidth: 5,
                cursorborder: 0,
                cursorcolor: "rgba(0,0,0,0.1)",
                autohidemode: true,
                zindex: 9,
                verticalenabled: false,
                cursorborderradius: 0
            })
        })
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
    POTENZA.la_accion = function() {
        $.ajax({
            url: "https://api.manz.es/cox/resume",
            //xurl: "/data/RESUME.json",

            async: false,
            dataType: "jsonp",
            contentType: "application/json",
            success: function(json) {
                var coxa = {
                    price: json.intradia.price,
                    change: json.intradia.change,
                    percent: json.intradia.percent,
                    volume: json.intradia.volume,
                    date: json.intradia.date,
                    time: json.intradia.time,
                    min: json.intradia.min,
                    max: json.intradia.max
                };
                pintar(coxa)
            }
        });
        function pintar(coxa) {
            $(".last").html("");
            $(".last").html(coxa.price.toFixed(2));
            $(".change").html(coxa.change.toFixed(2));
            $(".percent").html(coxa.percent.toFixed(2) + "%");
            var capitalizacion = coxa.price * 162531922;
            $(".capitalizacion").html(numberWithCommas(capitalizacion));
            $(".capitalizacion").attr("data-to", capitalizacion);
            if (parseFloat(coxa.percent) >= 0) {
                $(".change-direction").append("+");
                $(".color").attr("style", "color:#42A042")
            } else {
                $(".change-direction").append("-");
                $(".color").attr("style", "color:red")
            }
        }
    }
    ;
    POTENZA.pieChart = function() {
        if ($pieChart.exists()) {
            loadScript(plugin_path + "easy-pie-chart/easy-pie-chart.js", function() {
                $pieChart.each(function() {
                    var $elem = $(this)
                      , pieChartSize = $elem.attr("data-size") || "160"
                      , pieChartAnimate = $elem.attr("data-animate") || "2000"
                      , pieChartWidth = $elem.attr("data-width") || "6"
                      , pieChartColor = $elem.attr("data-color") || "#84ba3f"
                      , pieChartTrackColor = $elem.attr("data-trackcolor") || "rgba(0,0,0,0.10)";
                    $elem.find("span, i").css({
                        width: pieChartSize + "px",
                        height: pieChartSize + "px",
                        "line-height": pieChartSize + "px"
                    });
                    $elem.appear(function() {
                        $elem.easyPieChart({
                            size: Number(pieChartSize),
                            animate: Number(pieChartAnimate),
                            trackColor: pieChartTrackColor,
                            lineWidth: Number(pieChartWidth),
                            barColor: pieChartColor,
                            scaleColor: false,
                            lineCap: "square",
                            onStep: function(from, to, percent) {
                                $elem.find("span.percent").text(Math.round(percent))
                            }
                        })
                    })
                })
            })
        }
    }
    ;
    POTENZA.datetimepick = function() {
        if ($datetp.exists()) {
            loadScript(plugin_path + "bootstrap-datetimepicker/moment-datepicker.js", function() {
                loadScript(plugin_path + "bootstrap-datetimepicker/bootstrap-datetimepicker.min.js", function() {
                    $datetp.each(function() {
                        var frmt = "DD/MM/YYYY";
                        if ($(this).attr("data-format"))
                            frmt = $(this).attr("data-format");
                        $(this).datetimepicker({
                            format: frmt
                        })
                    })
                })
            })
        }
    }
    ;
    POTENZA.datatables = function() {
        if ($("#datatable").exists()) {
            loadScript(plugin_path + "bootstrap-datatables/jquery.dataTables.min.js", function() {
                loadScript(plugin_path + "bootstrap-datatables/dataTables.bootstrap4.min.js", function() {
                    if (locale == "en") {
                        $("#datatable").DataTable()
                    } else {
                        $("#datatable").DataTable({
                            oLanguage: {
                                sProcessing: "Procesando...",
                                sLengthMenu: "Mostrar en bloques de _MENU_ registros",
                                sZeroRecords: "No se encontraron resultados",
                                sInfo: "Mostrando desde _START_ hasta _END_ de _TOTAL_ registros",
                                sInfoEmpty: "Mostrando desde 0 hasta 0 de 0 registros",
                                sInfoFiltered: "(filtrado de _MAX_ registros en total)",
                                sInfoPostFix: "",
                                sSearch: "Buscar:",
                                sUrl: "",
                                oPaginate: {
                                    sFirst: "Primero",
                                    sPrevious: "Anterior",
                                    sNext: "Siguiente",
                                    sLast: "�ltimo"
                                }
                            }
                        })
                    }
                })
            })
        }
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
    POTENZA.googlemaps = function() {
        if ($(".g-map").exists()) {
            loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAWI9rhUFXXbXL5tq_qorDOo7HogeTEYtA", function() {
                $(".g-map").each(function() {
                    var id = $(this).attr("id");
                    var color = $(this).attr("data-type");
                    var clr = [{
                        featureType: "all",
                        elementType: "labels.text.fill",
                        stylers: [{
                            saturation: 36
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 40
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.text.stroke",
                        stylers: [{
                            visibility: "on"
                        }, {
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "all",
                        elementType: "labels.icon",
                        stylers: [{
                            visibility: "off"
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "administrative",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }, {
                            weight: 1.2
                        }]
                    }, {
                        featureType: "landscape",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 20
                        }]
                    }, {
                        featureType: "poi",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 21
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.fill",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }, {
                        featureType: "road.highway",
                        elementType: "geometry.stroke",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 29
                        }, {
                            weight: .2
                        }]
                    }, {
                        featureType: "road.arterial",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 18
                        }]
                    }, {
                        featureType: "road.local",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 16
                        }]
                    }, {
                        featureType: "transit",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 19
                        }]
                    }, {
                        featureType: "water",
                        elementType: "geometry",
                        stylers: [{
                            color: "#000000"
                        }, {
                            lightness: 17
                        }]
                    }];
                    if (color === "green")
                        clr = [{
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#444444"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                color: "#f2f2f2"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "all",
                            stylers: [{
                                saturation: -100
                            }, {
                                lightness: 45
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "all",
                            stylers: [{
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "all",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                color: "#84ba3f"
                            }, {
                                visibility: "on"
                            }]
                        }];
                    else if (color === "midnight")
                        clr = [{
                            featureType: "all",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "all",
                            elementType: "labels.text.stroke",
                            stylers: [{
                                color: "#000000"
                            }, {
                                lightness: 13
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#000000"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#144b53"
                            }, {
                                lightness: 14
                            }, {
                                weight: 1.4
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                color: "#08304b"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry",
                            stylers: [{
                                color: "#0c4152"
                            }, {
                                lightness: 5
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#000000"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#0b434f"
                            }, {
                                lightness: 25
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#000000"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#0b3d51"
                            }, {
                                lightness: 16
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                color: "#000000"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "all",
                            stylers: [{
                                color: "#146474"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                color: "#021019"
                            }]
                        }];
                    else if (color === "light")
                        clr = [{
                            featureType: "administrative.locality",
                            elementType: "all",
                            stylers: [{
                                hue: "#2c2e33"
                            }, {
                                saturation: 7
                            }, {
                                lightness: 19
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{
                                hue: "#bbc0c4"
                            }, {
                                saturation: -93
                            }, {
                                lightness: 31
                            }, {
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels",
                            stylers: [{
                                hue: "#bbc0c4"
                            }, {
                                saturation: -93
                            }, {
                                lightness: 31
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "labels",
                            stylers: [{
                                hue: "#bbc0c4"
                            }, {
                                saturation: -93
                            }, {
                                lightness: -2
                            }, {
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry",
                            stylers: [{
                                hue: "#e9ebed"
                            }, {
                                saturation: -90
                            }, {
                                lightness: -8
                            }, {
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "all",
                            stylers: [{
                                hue: "#e9ebed"
                            }, {
                                saturation: 10
                            }, {
                                lightness: 69
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                hue: "#e9ebed"
                            }, {
                                saturation: -78
                            }, {
                                lightness: 67
                            }, {
                                visibility: "simplified"
                            }]
                        }];
                    else if (color === "grey")
                        clr = [{
                            featureType: "landscape",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "water",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            stylers: [{
                                hue: "#00aaff"
                            }, {
                                saturation: -100
                            }, {
                                gamma: 2.15
                            }, {
                                lightness: 12
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                lightness: 24
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{
                                lightness: 57
                            }]
                        }];
                    else if (color === "blackandwhite")
                        clr = [{
                            featureType: "water",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [{
                                hue: "#000000"
                            }, {
                                saturation: -100
                            }, {
                                lightness: -100
                            }, {
                                visibility: "simplified"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: -100
                            }, {
                                lightness: 100
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "all",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: 0
                            }, {
                                lightness: 100
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "geometry",
                            stylers: [{
                                hue: "#000000"
                            }, {
                                saturation: 0
                            }, {
                                lightness: -100
                            }, {
                                visibility: "on"
                            }]
                        }, {
                            featureType: "transit",
                            elementType: "labels",
                            stylers: [{
                                hue: "#ffffff"
                            }, {
                                saturation: 0
                            }, {
                                lightness: 100
                            }, {
                                visibility: "off"
                            }]
                        }];
                    google.maps.event.addDomListener(window, "load", init(id, clr))
                });
                function init(id, clr) {
                    var mapOptions = {
                        zoom: 11,
                        center: new google.maps.LatLng(-37.817078,144.955936),
                        styles: clr
                    };
                    var mapElement = document.getElementById(id);
                    var map = new google.maps.Map(mapElement,mapOptions);
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(40.67,-73.94),
                        map: map,
                        title: "Snazzy!"
                    })
                }
            })
        }
    }
    ;
    POTENZA.fancyselect = function() {
        if ($(".fancyselect").exists()) {
            loadScript(plugin_path + "jquery-nice-select/jquery-nice-select.js", function() {
                $("select.fancyselect:not(.ignore)").niceSelect()
            })
        }
    }
    ;
    POTENZA.typer = function() {
        if ($(".typer").exists()) {
            loadScript(plugin_path + "typer/jquery.typer.js", function() {})
        }
    }
    ;
    POTENZA.searchbox = function() {
        if (jQuery(".search").exists()) {
            jQuery(".search-btn").on("click", function() {
                jQuery(".search").toggleClass("search-open");
                return false
            });
            jQuery("html, body").on("click", function(e) {
                if (!jQuery(e.target).hasClass("not-click")) {
                    jQuery(".search").removeClass("search-open")
                }
            })
        }
    }
    ;
    POTENZA.cartbox = function() {
        $(".cart-btn").on("click", function(e) {
            $(".shpping-cart .cart").toggleClass("cart-open");
            e.stopPropagation()
        });
        $(document).on("click", function(e) {
            if (!$(e.target).is(".shpping-cart .cart, .shpping-cart .cart *")) {
                $(".shpping-cart .cart").removeClass("cart-open")
            }
        })
    }
    ;
    POTENZA.mobileview = function() {
        $("a.but").on("click", function(e) {
            if (!$(this).hasClass("active")) {
                $(this).addClass("active");
                $("#left-header").animate({
                    "margin-left": 230
                }, 300)
            } else {
                $(this).removeClass("active");
                $("#left-header").animate({
                    "margin-left": 0
                }, 300)
            }
            return false
        })
    }
    ;
    POTENZA.googlemapopen = function() {
        $(".map-icon").on("click", function(e) {
            jQuery(".google-map").toggleClass("google-map-open")
        })
    }
    ;
    POTENZA.sidepanel = function() {
        $(".st-pusher").on("click", function(e) {
            if ($(e.target).closest(".st-menu").length === 0)
                if ($body.hasClass("st-menu-open")) {
                    $body.toggleClass("st-menu-open");
                    return false
                }
        });
        $(".side-panel-trigger").on("click", function() {
            $body.toggleClass("st-menu-open");
            return false
        });
        $(".admin-sidebar-toggler").on("click", function() {
            $body.toggleClass("sidebar-icon-only");
            return false
        })
    }
    ;
    POTENZA.slickslider = function() {
        if ($(".slider-for").exists()) {
            loadScript(plugin_path + "slick/slick.min.js", function() {
                $(".slider-for").slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    asNavFor: ".slider-nav"
                });
                $(".slider-nav").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    asNavFor: ".slider-for",
                    dots: false,
                    centerMode: true,
                    focusOnSelect: true
                })
            })
        }
    }
    ;
    POTENZA.stickyFooter = function() {
        var $footerfixed = $("#footer-fixed");
        if ($footerfixed.exists()) {
            var footerheight = $("#footer-fixed").height();
            $(".wrapper").css("margin-bottom", footerheight + "px")
        }
    }
    ;
    POTENZA.leftbarsticky = function() {
        var $leftfixed = $(".sticky-top");
        if ($leftfixed.exists()) {
            var p = !1;
            $window.on("scroll", function() {
                var t = $(".mega-menu.desktopTopFixed").is(":visible");
                if (p != t)
                    if (p = t,
                    $(".mega-menu.desktopTopFixed").is(":visible")) {
                        var a = $(".mega-menu.desktopTopFixed").outerHeight();
                        var i = a;
                        $leftfixed.css("top", i)
                    } else {
                        $leftfixed.css("top", "")
                    }
            })
        }
    }
    ;
    POTENZA.calendarlist = function() {
        if ($("#calendar").exists()) {
            loadScript(plugin_path + "fullcalendar/fullcalendar.min.js", function() {
                $("#calendar").fullCalendar({
                    defaultDate: "2018-05-12",
                    editable: true,
                    eventLimit: true,
                    events: [{
                        title: "All Day Event",
                        start: "2018-05-01"
                    }, {
                        title: "Long Event",
                        start: "2018-05-07",
                        end: "2018-05-10"
                    }, {
                        id: 999,
                        title: "Repeating Event",
                        start: "2018-05-09T16:00:00"
                    }, {
                        id: 999,
                        title: "Repeating Event",
                        start: "2018-05-16T16:00:00"
                    }, {
                        title: "Conference",
                        start: "2018-05-11",
                        end: "2018-05-13"
                    }, {
                        title: "Meeting",
                        start: "2018-05-12T10:30:00",
                        end: "2018-05-12T12:30:00"
                    }, {
                        title: "Lunch",
                        start: "2018-05-12T12:00:00"
                    }, {
                        title: "Meeting",
                        start: "2018-05-12T14:30:00"
                    }, {
                        title: "Happy Hour",
                        start: "2018-05-12T17:30:00"
                    }, {
                        title: "Dinner",
                        start: "2018-05-12T20:00:00"
                    }, {
                        title: "Birthday Party",
                        start: "2018-05-13T07:00:00"
                    }, {
                        title: "Click for Google",
                        url: "http://google.com/",
                        start: "2018-05-28"
                    }]
                })
            })
        }
    }
    ;
    POTENZA.instagramfeed = function() {
        if ($(".userFeed").exists()) {
            loadScript(plugin_path + "instagram/spectragram.min.js", function() {
                jQuery.fn.spectragram.accessData = {
                    accessToken: "6441986712.1677ed0.01b01b82875b4464bdec81739cc21562"
                };
                $(".userFeed").spectragram("getUserFeed", {
                    size: "small",
                    max: 12
                })
            })
        }
    }
    ;
    POTENZA.flickrfeed = function() {
        if ($(".flickr-feed").exists()) {
            loadScript(plugin_path + "flickr/flickr.js", function() {
                $(".flickr-feed").socialstream({
                    socialnetwork: "flickr",
                    limit: 12,
                    username: "envato"
                })
            })
        }
    }
    ;
    var _arr = {};
    function loadScript(scriptName, callback) {
        if (!_arr[scriptName]) {
            _arr[scriptName] = true;
            var body = document.getElementsByTagName("body")[0];
            var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = scriptName;
            script.onload = callback;
            body.appendChild(script)
        } else if (callback) {
            callback()
        }
    }
    $window.on("load", function() {
        POTENZA.Isotope(),
        POTENZA.masonry(),
        POTENZA.pieChart(),
        POTENZA.progressBar()
    });
    $document.ready(function() {
        POTENZA.counters(),
        POTENZA.accordion(),
        POTENZA.carousel(),
        POTENZA.mailchimp(),
        POTENZA.contactform(),
        POTENZA.countdownTimer(),
        POTENZA.goToTop(),
        POTENZA.mediav(),
        POTENZA.googlemapopen(),
        POTENZA.mobileslider(),
        POTENZA.onepagenav(),
        POTENZA.mediaPopups(),
        POTENZA.pniceScroll(),
        POTENZA.datetimepick(),
        POTENZA.datatables(),
        POTENZA.wowanimation(),
        POTENZA.fancyselect(),
        POTENZA.searchbox(),
        POTENZA.cartbox(),
        POTENZA.raindrops(),
        POTENZA.sidepanel(),
        POTENZA.slickslider(),
        POTENZA.typer(),
        POTENZA.stickyFooter(),
        POTENZA.masonry(),
        POTENZA.leftbarsticky(),
        POTENZA.calendarlist(),
        POTENZA.instagramfeed(),
        POTENZA.flickrfeed(),
        POTENZA.mobileview();
        POTENZA.la_accion();
        setTimeout(function() {
            POTENZA.preloader()
        }, 1500)
    })
}
)(jQuery);
$(document).on("click", "a.frame-close", function(e) {
    $(".header-preview").slideUp()
});