$((function(){$("[data-dlefilter*=dle-filter] input, [data-dlefilter*=dle-filter] textarea").keypress((function(t){13==t.which&&(t.preventDefault(),e($(this).closest("form"),!0))}));let e=function(e,t){if(dleFilter.reset)return;let l,i,a="";if(!0===(t=t||!1))l=$(e).serialize();else{if(i=e.target.tagName.toUpperCase(),void 0!==e.target.type&&(a=e.target.type.toUpperCase()),"TEXTAREA"===i||"INPUT"===i&&("TEXT"===a||"RESET"===a))return;l="FORM"!==i?$(this).closest("form").serialize():$(this).serialize()}dleFilter.id=("FORM"!==i?$(this).closest("form").data("dlefilter-id"):$(this).data("dlefilter-id"))||"dle-content",dleFilter.original[dleFilter.id]||"dle-content"==dleFilter.id||(dleFilter.original[dleFilter.id]=$("#"+dleFilter.id).html()),$.ajax({beforeSend:function(){0==dleFilter.hideLoading&&ShowLoading("")},url:dle_root+"engine/lazydev/dle_filter/ajax.php",type:"POST",data:{data:l,url:dleFilter.path,dle_hash:dle_login_hash},success:function(e){e.error?DLEalert(e.text,dle_info):function(e){e=$.parseJSON(e),1==dleFilter.ajax?window.location.href=e.url:($("#dle-speedbar").length>0&&$("#dle-speedbar").html($("#dle-speedbar",e.speedbar).html()),dleFilter.path.indexOf("/f/")+1?$("#dle-content").html(e.content):$("#"+dleFilter.id).html(e.content),1==dleFilter.lazy&&$("[data-src]").lazyLoadXT(),0==dleFilter.ajaxUrl&&(history.pushState(null,e.title,e.url),document.title=e.title))}(e)},error:function(e){DLEalert(e.responseText,dle_info)}}).always((function(){0==dleFilter.hideLoading&&HideLoading("")}))};$("#dle-speedbar").length>0&&(dleFilter.speedbar=$("#dle-speedbar").html()),dleFilter.content=$("#dle-content").html(),$("body").on("click","[data-dlefilter=submit]",e),0==dleFilter.button&&$("body").on("change","[data-dlefilter*=dle-filter]",e),$("body").on("click","[data-dlefilter=reset]",(function(){dleFilter.reset=!0;let e=$(this).closest("form"),l=$(e).data("dlefilter");if(0==dleFilter.ajaxUrl&&(history.pushState(null,dleFilter.title,dleFilter.path),document.title=dleFilter.title),dleFilter.path.indexOf("/f/")+1||"dle-content"==dleFilter.id?$("#dle-content").html(dleFilter.content):$("#"+dleFilter.id).html(dleFilter.original[dleFilter.id]),1==dleFilter.lazy&&$("[data-src]").lazyLoadXT(),$("#dle-speedbar").length>0&&$("#dle-speedbar").html(dleFilter.speedbar),$(e).find('input[type="text"]').each((function(){let e=$(this).prop("name");if(e.length>0){if(e.indexOf("r.")+1){let e=$(this).data("ionRangeSlider");e.update({from:e.options.min,to:e.options.max})}else $(this).val("");void 0!==$(this).data("dlefilter-show")&&t(this)}})),$(e).find("select").each((function(e){if($(this).prop("name").length>0){if($(this).children("option").each((function(){$(this).attr("selected",!1)})),1==dleFilter.tail){$(".tail-select").length>0&&tail.select('[data-dlefilter*="'+l+'"] select[data-select-id="'+e+'"]').reload()}void 0!==$(this).data("dlefilter-show")&&t(this)}})),1==dleFilter.chosenSelect){$(".chosen-results").length>0&&$('[data-dlefilter*="'+l+'"] select').trigger("chosen:updated")}1==dleFilter.niceSelect&&$('[data-dlefilter*="'+l+'"] select').niceSelect("update"),$(e).find('input[type="radio"], input[type="checkbox"]').each((function(){$(this).prop("name").length>0&&($(this).attr("checked",!1),void 0!==$(this).data("dlefilter-show")&&t(this))})),dleFilter.reset=!1})),$("[data-dlefilter*=dle-filter]").find('input[type="text"][name*="r."]').each((function(){let t=$(this).data("slider-config");if(void 0!==t&&t.length>0){let l={};";"==t.slice(-1)&&(t=t.slice(0,-1)),t=t.split(";");for(let e=0;e<t.length;e++){let i=t[e].split(":");switch(i[0]=i[0].trim(),i[0]){case"АвтоПолзунок":l.slider=!0;break;case"Одиночный слайдер":l.type="single";break;case"Двойной слайдер":l.type="double";break;case"Минимальное значение":void 0!==i[1]&&$.isNumeric(i[1])&&(l.min=i[1]);break;case"Максимальное значение":void 0!==i[1]&&$.isNumeric(i[1])&&(l.max=i[1]);break;case"Начало слайдера":void 0!==i[1]&&$.isNumeric(i[1])&&(l.from=i[1]);break;case"Конец слайдера":void 0!==i[1]&&$.isNumeric(i[1])&&(l.to=i[1]);break;case"Шаг":void 0!==i[1]&&$.isNumeric(i[1])&&(l.step=i[1]);break;case"Шаблон":void 0!==i[1]&&""!==i[1]&&(l.skin=i[1]);break;case"Префикс":void 0!==i[1]&&""!==i[1]&&(l.prefix=i[1]);break;case"Постфикс":void 0!==i[1]&&""!==i[1]&&(l.postfix=i[1]);break;case"Сетка":l.grid=!0;break;case"Красивые числа":l.prettify_enabled=!0;break;case"Скрыть MinMax":l.hide_min_max=!0;break;case"Скрыть FromTo":l.hide_from_to=!0}}l.prettify_enabled||(l.prettify_enabled=!1),l.slider&&(l.onFinish=function(t){e($('[name="'+t.input[0].name+'"]').closest("form"),!0)}),$(this).ionRangeSlider(l)}})),1==dleFilter.tail&&$("[data-dlefilter*=dle-filter]").find("select").each((function(e){$(this).attr("data-select-id",e);let t=$(this).data("select-config"),l=($(this).attr("name"),{});if(void 0!==t&&t.length>0){";"==t.slice(-1)&&(t=t.slice(0,-1)),t=t.split(";");for(let e=0;e<t.length;e++){let i=t[e].split(":");switch(i[0]){case"Поиск":l.search=!0;break;case"Скрыть выбранные":l.hideSelected=!0;break;case"Максимум выбрать":void 0!==i[1]&&$.isNumeric(i[1])&&(l.multiLimit=i[1]);break;case"Показать количество выбранных":l.multiContainer||(l.multiShowCount=!0);break;case"Вывод выбранных":l.multiContainer=!0,l.multiShowCount&&(l.multiShowCount=!1);break;case"Подсказка":void 0!==i[1]&&""!==i[1]&&(l.placeholder=i[1]);break;case"Сортировать":void 0===i[1]||"ASC"!==i[1]&&"DESC"!==i[1]||(l.sortItems=i[1])}}}tail.select('[data-dlefilter*=dle-filter] select[data-select-id="'+e+'"]',l).on("change",(function(e,t){0==dleFilter.button&&$('[name="'+e.option.parentElement.name+'"]').trigger("change")}))})),1==dleFilter.chosenSelect&&$("[data-dlefilter*=dle-filter] select").chosen(),1==dleFilter.niceSelect&&$("[data-dlefilter*=dle-filter] select").niceSelect(),1==dleFilter.ajaxNav&&$("body").on("click",'a[href*="/f/"]',(function(e){e.preventDefault();let t=$(this).attr("href");return void 0!==t&&$.ajax({url:t,beforeSend:function(){0==dleFilter.hideLoading&&ShowLoading("")},success:function(e){$("#dle-speedbar").length>0&&$("#dle-speedbar").html($("#dle-speedbar",e).html()),dleFilter.path.indexOf("/f/")+1?$("#dle-content").html($("#dle-content",e).html()):$("#"+dleFilter.id).html($("#dle-content",e).html()),1==dleFilter.lazy&&$("[data-src]").lazyLoadXT(),0==dleFilter.ajaxUrl&&(window.history.pushState("","",t),document.title=dleFilter.title),$("html, body").animate({scrollTop:$("#"+dleFilter.id).offset().top},2e3)},error:function(e){DLEalert(e.responseText,dle_info)}}).always((function(){0==dleFilter.hideLoading&&HideLoading("")})),!1})),Array.prototype.diff=function(e){return this.filter((function(t){return e.indexOf(t)<0}))};let t=function(e){let l=$(e).prop("tagName").toUpperCase(),i=$(e).prop("type").toUpperCase(),a=$(e).data("dlefilter-show"),d={};";"==a.slice(-1)&&(a=a.slice(0,-1)),a=a.split(";"),$.each(a,(function(e,t){let l=t.split(":");d[l[0]]=l[1].split(",")}));let r={},n={};"SELECT"===l?$(e).find("option").each((function(e,t){$.each(d,(function(e,l){$(t).prop("selected")&&$.inArray($(t).val(),l)>=0?r[e]='[data-dlefilter-hide="'+e+'"]':n[e]='[data-dlefilter-hide="'+e+'"]'}))})):"INPUT"===l?$.each(d,(function(t,l){"TEXT"===i?$.inArray($(e).val(),l)>=0?r[t]='[data-dlefilter-hide="'+t+'"]':n[t]='[data-dlefilter-hide="'+t+'"]':"RADIO"!==i&&"CHECKBOX"!==i||($(e).prop("checked")&&$.inArray($(e).val(),l)>=0?r[t]='[data-dlefilter-hide="'+t+'"]':n[t]='[data-dlefilter-hide="'+t+'"]')})):"TEXTAREA"===l&&$.each(d,(function(t,l){$.inArray($(e).val(),l)>=0?r[t]='[data-dlefilter-hide="'+t+'"]':n[t]='[data-dlefilter-hide="'+t+'"]'}));let o=Object.values(n).diff(Object.values(r));o&&($.each(o,(function(e,l){if($(l).find('input[type="text"]').each((function(){let e=$(this).prop("name");if(void 0!==$(this).data("dlefilter-show")&&t(this),e.length>0)if(e.indexOf("r.")+1){let e=$(this).data("ionRangeSlider");e.update({from:e.options.min,to:e.options.max})}else $(this).val("")})),$(l).find("select").each((function(e){if($(this).prop("name").length>0&&(void 0!==$(this).data("dlefilter-show")&&t(this),$(this).children("option").each((function(){$(this).attr("selected",!1)})),1==dleFilter.tail)){$(".tail-select").length>0&&tail.select('[data-dlefilter*=dle-filter] select[data-select-id="'+e+'"]').reload()}})),1==dleFilter.chosenSelect){$(".chosen-results").length>0&&$("[data-dlefilter*=dle-filter] select").trigger("chosen:updated")}1==dleFilter.niceSelect&&$("[data-dlefilter*=dle-filter] select").niceSelect("update"),$(l).find('input[type="radio"], input[type="checkbox"]').each((function(){$(this).prop("name").length>0&&(void 0!==$(this).data("dlefilter-show")&&t(this),$(this).attr("checked",!1))}))})),$(o.join(", ")).hide()),r&&$(Object.values(r).join(", ")).show()};dleFilter.path.indexOf("/f/")+1&&function(){let e=decodeURIComponent(location.href).split("/f/");if(!e[1])return;"/"===e[1].slice(-1)&&(e[1]=e[1].slice(0,-1)),e=e[1].split("/");let t=[];for(let l=0;l<e.length;l++)t[l]=e[l].split("="),t[l][1]&&(t[l][0]=t[l][0].replace(/\+/g," "),t[l][1]=t[l][1].replace(/\+/g," "));$('[data-dlefilter*=dle-filter] input[type="text"], [data-dlefilter*=dle-filter] textarea').each((function(){let e=$(this).attr("name");if(void 0!==e&&e.length>0)for(let l=0;l<t.length;l++)if(e===t[l][0])if(e.indexOf("r.")+1){let e=$(this).data("ionRangeSlider"),i=t[l][1].split(";");e.update({from:i[0],to:i[1]})}else $(this).val(t[l][1])})),$("[data-dlefilter*=dle-filter] select").each((function(e){let l=$(this).attr("name");if(void 0!==l&&l.length>0){for(let e=0;e<t.length;e++)if(l===t[e][0]){let l=t[e][1].split(",");$(this).find("option").each((function(e,t){$.inArray(t.value,l)>=0&&$(this).attr("selected",!0)}))}1==dleFilter.tail&&$(".tail-select").length>0&&tail.select('[data-dlefilter*=dle-filter] select[data-select-id="'+e+'"]').reload()}})),1==dleFilter.chosenSelect&&$(".chosen-results").length>0&&$("[data-dlefilter*=dle-filter] select").trigger("chosen:updated");1==dleFilter.niceSelect&&$("[data-dlefilter*=dle-filter] select").niceSelect("update"),$('[data-dlefilter*=dle-filter] input[type="radio"], [data-dlefilter*=dle-filter] input[type="checkbox"]').each((function(){let e=$(this).attr("name");if(void 0!==e&&e.length>0)for(let l=0;l<t.length;l++)if(e===t[l][0]){let e=t[l][1].split(",");$(this).each((function(t,l){$.inArray(l.value,e)>=0&&$(this).attr("checked","checked")}))}}))}(),$("[data-dlefilter-hide]").hide(),$("body").find("[data-dlefilter-show]").each((function(e,l){t(l)})),$("body").on("change","[data-dlefilter-show]",(function(e){t(this)}))}));