<?php 
class themeSettings {
    function __construct(){
        add_action('admin_menu', array($this, "themeSettings"));
        add_action('admin_init', array($this, "settings"));
        add_action('admin_enqueue_scripts', array($this, 'media_uploader_enqueue'));
    }
    function media_uploader_enqueue() {
    	wp_enqueue_media();
    }


    function themeSettings(){
        add_menu_page("Theme Settings", "Theme Settings", "manage_options", "theme-settings-page", array($this, "themeSettingsHTML"));
    }
    function settings(){
        add_settings_section("theme-settings-section", null, null, "theme-settings-page");
        add_settings_field("ts_logo", "Website Logo", array($this, "logoHtml"), "theme-settings-page", "theme-settings-section");
        register_setting("themeSettings", "ts_logo");
    }


    
    function logoHtml(){ ?>
    
        <input id="background_image" type="text" name="background_image" value="<?php echo get_option('background_image'); ?>" />
        <input id="upload_image_button" type="button" class="button-primary" value="Insert Image" />

    <?php }
    function themeSettingsHTML(){?>

        <div class="wrap">
            <h1>Theme Settings</h1>
            <form action="options.php" method="POST">
                <?php 
                    do_settings_sections("theme-settings-page");
                    submit_button();
                ?>
            </form>
        </div>

    <?php }
}

$themeSettings = new themeSettings();