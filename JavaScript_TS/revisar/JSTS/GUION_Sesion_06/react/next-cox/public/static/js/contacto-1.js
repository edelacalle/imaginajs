$("#contactForm").validate();
$(document).ready(function () {
    var enviar, complete, enviando, mensaje_enviando;
    if (locale === 'es') {
        enviar = "Enviar";
        complete = "Complete el formulario correctamente";
        enviando = "Enviando";
        mensaje_enviando = "Mensaje enviado correctamente";
    } else {
        enviar = "Send";
        complete = "Fill in the form correctly";
        enviando = "Sending";
        mensaje_enviando = "Message sent successfully";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function formSuccess() {
        $("#contactForm")[0].reset();
        submitMSG(true, "Mensaje enviado")
    }

    function formError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h5 text-left tada animated text-success";
        } else {
            var msgClasses = "h5 text-left text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }

    function recaptchaReset() {
        grecaptcha.execute(site_key, {action: 'contactform'})
            .then(function (token) {
                document.getElementById('contact_recaptcha_response').value = token;
            });
    }

    grecaptcha.ready(function () {
        grecaptcha.execute(site_key, {action: 'contactform'})
            .then(function (token) {
                document.getElementById('contact_recaptcha_response').value = token;
                $("#enviarContact").click(function (e) {
                    e.preventDefault();
                    if ($('#contactForm').valid()) {
                        var csrftoken = getCookie('csrftoken');
                        $("#enviarContact").prop('disabled', true);
                        $('#enviarContact').html('<i class="fa fa-spinner fa-spin"></i> ' + enviando);
                        $.ajax({
                            type: "POST",
                            dataType: "json",
                            beforeSend: function (request) {
                                request.setRequestHeader("X-CSRFToken", csrftoken);
                            },
                            url: send_mail_contact_url,
                            data: $('#contactForm').serialize(),
                            success: function (data) {
                                if (data.status == "ok") {
                                    recaptchaReset()
                                    alert_animations('.alert-message', 'success', mensaje_enviando);
                                    $('#contactForm').trigger("reset");
                                    $("#enviarContact").prop('disabled', false);
                                    $('#enviarContact').html(enviar);
                                } else {
                                    alert_animations('.alert-message', 'danger', complete);
                                    $("#enviarContact").prop('disabled', false);
                                    $('#enviarContact').html(enviar);
                                }
                            },
                            error: function (xhr, textStatus, errorThrown) {
                                recaptchaReset()
                                alert_animations('.alert-message', 'danger', complete);
                                $("#enviarContact").prop('disabled', false);
                                $('#enviarContact').html(enviar);
                            }
                        });
                    }
                });
            });
    });
});