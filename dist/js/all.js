jQuery((function(t){t("body").on("click",".misha-upl",(function(e){e.preventDefault();var i=t(this),n=wp.media({title:"Insert image",library:{type:"image"},button:{text:"Use this image"},multiple:!1}).on("select",(function(){var t=n.state().get("selection").first().toJSON();i.html('<img src="'+t.url+'">').next().show().next().val(t.id)})).open()})),t("body").on("click",".misha-rmv",(function(e){e.preventDefault();var i=t(this);i.next().val(""),i.hide().prev().html("Upload image")}))}));
//# sourceMappingURL=all.js.map
