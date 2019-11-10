$(document).ready(function () {
    $('ul li, .colors div').each(function () {
        $(this).click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            const attrValue = $(this).attr('id');
            $('.value span, .door-img img').each(function () {
                if ($(this).hasClass(attrValue)) {
                    $(this).css('display', 'inline-block').siblings().css('display', 'none')
                }
            })
        })
    })
})
