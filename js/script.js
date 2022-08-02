$(document).ready(function () {

    $('.section_3-parabox--2, .section_3-parabox--3').hide();

    $('.section_3-Init--item-1').css({ "background-color": "#eee", "color": "black" });
    $('.section_3-parabox--1').css("background-color", "#eee");

    $('.section_3-Init--item-2,.section_3-Init--item-3').css({ "background-color": "#624dd6", "color": "white" });

    $('.section_3-Init--item-1').click(function () {

        $(this).css({ "background-color": "#eee", "color": "black" });

        // $('.section_3-parabox--1').css("background-color", "#eee");

        $('.section_3-parabox--1').show();
        $('.section_3-parabox--2, .section_3-parabox--3').hide();

        $('.section_3-Init--item-2,.section_3-Init--item-3').css({ "background-color": "#624dd6", "color": "white" });

    });

    $('.section_3-Init--item-2').click(function () {

        $(this).css({ "background-color": "#eee", "color": "black" });

        $('.section_3-parabox--1, .section_3-parabox--3').hide();
        $('.section_3-parabox--2').show();

        $('.section_3-parabox--2').css("background-color", "#eee");

        $('.section_3-Init--item-1,.section_3-Init--item-3').css({ "background-color": "#624dd6", "color": "white" });

    });

    $('.section_3-Init--item-3').click(function () {

        $(this).css({ "background-color": "#eee", "color": "black" });

        $('.section_3-parabox--1, .section_3-parabox--2').hide();
        $('.section_3-parabox--3').show();

        $('.section_3-parabox--3').css("background-color", "#eee");

        $('.section_3-Init--item-1,.section_3-Init--item-2').css({ "background-color": "#624dd6", "color": "white" });


    });

    $(".nav").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass('sticky-nav');
            // $(".header").css({ "height": "50vh" });
        }
        else {
            $("nav").removeClass('sticky-nav');
            // $(".header").css({ "height": "inherit" });
        }
    });

    $('#select_state').change(function () {
        if ('#select_state option:selected') {
            $("#select_city").css({ "visibility": "visible" });
        } else {
            $("#select_city").css({ "visibility": "inherit" });
        }

    });

});
