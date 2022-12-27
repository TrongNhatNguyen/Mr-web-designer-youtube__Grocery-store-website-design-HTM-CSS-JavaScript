$(document).ready(function () {
    const heightNumber = $(':root').css('--height-scroll-number-js').replace('px', '');
    $('.js-select').wrap("<div class='js-select-parent noselect'></div>");
    $('.js-select-parent').append(
        "<div class='js-minus select-adjust'>-</div><div class='js-select-number'><div class='number-stack'></div></div><div class='js-plus select-adjust'>+</div>",
    );
    $('.input-number').css('display', 'none');
    $('.js-select').each(function () {
        var min = $(this).attr('min');
        var max = parseInt($(this).attr('max'));
        for (i = min; i < max + 1; i++) {
            $(this)
                .siblings('.js-select-number')
                .children('.number-stack')
                .prepend(i + '<br>');
        }
        var $val = parseFloat($(this).val());
        $(this)
            .siblings('.js-select-number')
            .children('.number-stack')
            .css('bottom', '-' + $val * heightNumber + 'px');
    });

    $('.select-adjust').click(function () {
        var $button = $(this);
        var input = {
            val: parseFloat($button.siblings('.js-select').val()),
            min: parseFloat($button.siblings('.js-select').attr('min')),
            max: parseFloat($button.siblings('.js-select').attr('max')),
            obj: $button.siblings('.js-select'),
            ui: $button.siblings('.js-select-number').children('.number-stack'),
            changeVal: function (num) {
                input.obj.val(num);
                input.val = num;
                return num;
            },
            changeUI: function (num) {
                var tempVar = input.changeVal(num);
                // console.log(tempVar * heightNumber);
                input.ui.css('bottom', '-' + tempVar * heightNumber + 'px');
            },
        };
        if ($button.text() == '+') {
            if (input.val < input.max) {
                var tempVal = input.val + 1;
                input.changeUI(tempVal);
            } else {
                // console.log('Denied');
                clearTimeout(nope);
                input.ui.css('animation', 'upDeny 0.4s');
                var nope = setTimeout(function () {
                    input.ui.css('animation', '');
                }, 400);
            }
        } else {
            if (input.val > input.min) {
                var tempVal = input.val - 1;
                input.changeUI(tempVal);
            } else {
                // console.log('Denied');
                clearTimeout(nope);
                input.ui.css('animation', 'downDeny 0.4s');
                var nope = setTimeout(function () {
                    input.ui.css('animation', '');
                }, 400);
            }
        }
    });
});

function changePos(numbers, pos) {
    numbers.css('bottom', '-' + pos * heightNumber + 'px');
}
