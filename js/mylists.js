class MyLists{constructor(t,i){var s=this;if(this.config=JSON.parse(i),!1===t){var e=document.cookie.match(new RegExp("(?:^|; )mylists=([^;]*)"));t=e?decodeURIComponent(e[1]):""}this.mylists=t,this.controls(),$("body").on("click","ul.mylists-switch[data-id] li[data-id]",(function(){var t=$(this).closest("ul").data("id"),i=$(this).data("id"),e=$(this).attr("class");if(5==dle_group)return DLEalert('Для использования данного функционала необходимо <a href="https://animedia.online/?do=register">зарегистироваться</a> или войти на сайт!',"Мои списки"),!1;$(this).closest("ul").find("li").removeClass("active"),"active"==e?s.set(t,0):(s.set(t,i),$(this).addClass("active"))})),$("body").on("change","select.mylists-switch[data-id]",(function(){var t=$(this).closest("select").data("id"),i=$(this).val();s.set(t,i)}))}get(t=!1){var i={};return $.each(this.mylists.split("|"),(function(t,s){s=s.split("/"),$.isNumeric(s[0])&&$.isNumeric(s[1])&&(i[s[0]]=s[1])})),!1!==t?void 0!==i[t]?i[t]:"0":i}set(t,i="0"){if(5==dle_group){var s=this.get(),e=[];"0"==i?void 0!==s[t]&&delete s[t]:s[t]=i,$.each(s,(function(t,i){e.push(t+"/"+i)})),e=e.join("|"),this.mylists=e,document.cookie="mylists="+encodeURIComponent(e)+"; path=/; expires="+new Date((new Date).getTime()+160704e5)}else $.ajax({url:"/mylists/",type:"POST",dataType:"JSON",data:{news_id:t,status_id:i},success:function(t){!1!==t.success||DLEalert(t.message,"Мои списки")},error:function(){DLEalert("Произошла неизвестная ошибка: попробуйте обновить страницу","Мои списки")}})}controls(){var t=this;$("ul.mylists-switch[data-id]").each((function(){var i=$(this).data("id"),s=t.get(i),e="";$.each(t.config,(function(t,i){t=t.replace(/_/g,""),e+=s==t?'<li class="active" data-id="'+t+'"><span>'+i[0]+"</span></li>":'<li data-id="'+t+'"><span>'+i[0]+"</span></li>"})),$(this).html(e)})),$(".mylists-count[data-id]").each((function(){var i=$(this).data("id"),s=0;$.each(t.get(),(function(t,e){e!=i&&0!=i||s++})),$(this).html(s)})),$("select.mylists-switch[data-id]").each((function(){var i=$(this).data("id"),s=t.get(i),e='<option value="0">Добавить в свой список</option>';$.each(t.config,(function(t,i){t=t.replace(/_/g,""),e+=s==t?'<option selected value="'+t+'">'+i[0]+"</option>":'<option value="'+t+'">'+i[0]+"</option>"})),$(this).html(e)}))}}