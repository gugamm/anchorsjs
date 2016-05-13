$(function () {
    var windowW = $(window).width();
    var windowH = $(window).height();

    var hanchors = [];
    var vanchors = [];

    function updateHanchors() {
        var hanchor;
        var w;
        for (var i = 0; i < hanchors.length; i++) {
            hanchor = hanchors[i];
            w = hanchor.parent.width() - hanchor.totalWidth - (hanchor.elem.outerWidth(true) - hanchor.elem.width()) ;
            hanchor.elem.css("width", w.toString() + "px");
        }
    }

    function updateVanchors() {
        var vanchor;
        var h;
        for (var i = 0; i < vanchors.length; i++) {
            vanchor = vanchors[i];
            h = vanchor.parent.height() - vanchor.totalHeight - (vanchor.elem.outerHeight(true) - vanchor.elem.height());
            vanchor.elem.css("height", h.toString() + "px");
        }
    }

    //hanchor
    $('.hanchor').each(function () {
        var parent = $(this).parent();
        var totalWidth = 0;
        var elem = $(this);
        parent.children().each(function () {
            if ($(this).hasClass('hanchor'))
                return;
            totalWidth += $(this).outerWidth(true);
        });
        console.log(totalWidth);
        hanchors.push({
            parent     : parent,
            totalWidth : totalWidth,
            elem       : $(this)
        });
    });
    
    //vanchor
    $('.vanchor').each(function () {
        var parent = $(this).parent();
        var totalHeight = 0;
        parent.children().each(function () {
			if ($(this).hasClass('vanchor'))
				return;
            totalHeight += $(this).outerHeight(true);
        });
        vanchors.push({
            parent      : parent,
            totalHeight : totalHeight,
            elem        : $(this)
        });
    });

    $(window).resize(function () {
        if ($(window).width() !== windowW) {
            windowW = $(window).width();
            updateHanchors();
        }

        if ($(window).height() !== windowH) {
            windowH = $(window).height();
            updateVanchors();
        }
    });

    updateHanchors();
    updateVanchors();
});