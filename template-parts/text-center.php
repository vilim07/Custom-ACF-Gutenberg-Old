
<?php
    $content = $attributes["content"][0];
?>


<section class="text-center-block">
    <div class="container my-5">
        <div class="row justify-content-center py-5">
            <div class="col-8 text-center" data-aos="fade-down">
                <?php if ($content["heading"]){ ?>
                    <h2> <?php echo $content["heading"] ?></h2>
                <?php }; ?>
                <p> <?php echo $content["paragraph"] ?></p>

            </div>
        </div>
    </div>
</section>