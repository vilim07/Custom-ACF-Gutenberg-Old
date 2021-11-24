<?php 
class themeSettings {
    function __construct(){
        add_action('admin_menu', array($this, "themeSettings"));
        add_action('admin_init', array($this, "settings"));
        add_action('admin_enqueue_scripts', array($this, 'misha_include_js'));
    }

    function misha_include_js() {

        // I recommend to add additional conditions just to not to load the scipts on each page
        
        if ( ! did_action( 'wp_enqueue_media' ) ) {
            wp_enqueue_media();
        }
    }

    function themeSettings(){
        add_menu_page("Theme Settings", "Theme Settings", "manage_options", "theme-settings-page", array($this, "themeSettingsHTML"));
    }
    function settings(){
        add_settings_section("theme-settings-section", null, null, "theme-settings-page");
        add_settings_field("ts_logo", "Website Logo", array($this, "logoHtml"), "theme-settings-page", "theme-settings-section");
        register_setting("themeSettings", "ts_logo");
    }


    
    function logoHtml(){ 
    
        if( $image = wp_get_attachment_image_src( $image_id ) ) {

        echo '<a href="#" class="misha-upl"><img style="max-width:250px;" src="' . $image[0] . '" /></a>
            <a href="#" class="misha-rmv">Remove image</a>
            <input type="hidden" name="logo" value="' . $image_id . '">';

        } else {

        echo '<a href="#" class="misha-upl">Upload image</a>
            <a href="#" class="misha-rmv" style="display:none">Remove image</a>
            <input type="hidden" name="logo" value="">';

        } 

    }

    function themeSettingsHTML(){?>

        <div class="wrap">
            <h1>Theme Settings</h1>
            <form action="options.php" method="POST">
                <?php 
                    settings_fields("themeSettings");
                    do_settings_sections("theme-settings-page");
                    submit_button();
                ?>
            </form>
        </div>

    <?php 
    }
}

$themeSettings = new themeSettings();