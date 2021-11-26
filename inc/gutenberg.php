<?php
//////////CATEGORIES///////////
add_filter( 'block_categories', function( $categories, $post ) {
    return array_merge(
        array(
            array(
                'slug'  => 'custom-theme-blocks',
                'title' => 'Custom Theme Blocks',
            ),
        ),
        $categories

    );
}, 10, 2 );

////////////////////////////

class TestBlock{
    function __construct(){
        add_action("init", array($this, "adminAssets"));
    }
    function adminAssets(){

        register_block_type("starter/test-block", array(
            "apiVersion"=> 2,
            'attributes'      => array(
                'seljaci' => array(
                    'type' => 'array',
                    "default" => array()                
                    )
            ),
            "editor_script" => "block-js",
            "style" => "custom-css",
            "render_callback" => array($this, "theHTML"),

        ));
    }
    function theHTML($attributes){
        ob_start();
        require get_template_directory() . '/template-parts/test-block.php';
        return ob_get_clean();
    }
}
$testBlock = new TestBlock();

////////////////////////////

class HeroSliderBlock{
    function __construct(){
        add_action("init", array($this, "adminAssets"));
    }
    function adminAssets(){

        register_block_type("starter/hero-slider-block", array(
            "apiVersion"=> 2,
            'attributes'      => array(
                'slides' => array(
                    'type' => 'array',
                    "default" => array()                
                    )
            ),
            "editor_script" => "block-js",
            "style" => "custom-css",
            "render_callback" => array($this, "theHTML"),

        ));
    }
    function theHTML($attributes){
        ob_start();
        require get_template_directory() . '/template-parts/hero-slider-block.php';
        return ob_get_clean();
    }
}
$heroSliderBlock = new HeroSliderBlock();

class HeroFlavorBlock{
    function __construct(){
        add_action("init", array($this, "adminAssets"));
    }
    function adminAssets(){

        register_block_type("starter/hero-flavor-block", array(
            "apiVersion"=> 2,
            'attributes'      => array(
                'content' => array(
                    'type' => 'object',
                    "default" => null              
                    )
            ),
            "editor_script" => "block-js",
            "style" => "custom-css",
            "render_callback" => array($this, "theHTML"),

        ));
    }
    function theHTML($attributes){
        ob_start();
        require get_template_directory() . '/template-parts/hero-flavor-block.php';
        return ob_get_clean();
    }
}
$heroFlavorBlock = new HeroFlavorBlock();