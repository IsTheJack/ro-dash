"use restrict";!function(e){e.fn.RoDropdown=function(t){return this.on("click",function(i){i.preventDefault(),i.stopImmediatePropagation();var s=e(this),a=s.next();a.is(":hidden")?(t&&t(this),a.slideDown("medium"),s.addClass("active")):(a.slideUp("medium"),s.removeClass("active"),s.children(".fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right"))}),this.each(function(){e(this).hasClass("active")||e(this).next().css("display","none")})}}(jQuery);