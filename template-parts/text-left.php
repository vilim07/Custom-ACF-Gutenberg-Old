<?php
    $content = $attributes["content"][0];
?>


<section class="text-center-block my-5 left-leave">
    <div class="container ">
        <div class="row  py-3">
            <div class="col-10 " data-aos="fade-down">
                <?php if ($content["heading"]){ ?>
                    <h2 class="mb-5"> <?php echo $content["heading"] ?></h2>
                <?php }; ?>
                <p class="ms-2"> <?php echo $content["paragraph"] ?></p>

            </div>
        </div>
        <hr>
    </div>
</section>