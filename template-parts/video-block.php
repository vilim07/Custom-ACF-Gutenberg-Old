
<?php
    $content = $attributes["content"][0];
?>

<section class="fade-leave">
    <div class="
    <?php if ($content["vidSize"]){
        echo "container-fluid";
    }
    else{
        echo "container";
    }; ?>
    ">
        <div class="row">
            <div class="col 
            <?php if ($content["vidSize"]){
                echo "px-0";
            } ?>">
                <video loop autoplay muted class="w-100" src="<?php echo $content["video"] ?>"></video>
            </div>
        </div>
    </div>
</section>