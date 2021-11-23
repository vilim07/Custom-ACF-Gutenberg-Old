jQuery(document).ready((function(e){var t;e("#upload_image_button").click((function(a){a.preventDefault(),t||(t=wp.media.frames.file_frame=wp.media({title:"Choose Image",button:{text:"Choose Image"},multiple:!1})).on("select",(function(){var a=t.state().get("selection").first().toJSON();e("#background_image").val(a.url)})),t.open()}))}));
//# sourceMappingURL=all.js.map
