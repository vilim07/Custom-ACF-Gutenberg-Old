<?php
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
            "render_callback" => array($this, "theHTMLTest"),

        ));
    }
    function theHTMLTest($attributes){
        ob_start();
        require get_template_directory() . '/template-parts/test-block.php';
        return ob_get_clean();
    }
}
$testBlock = new TestBlock();
