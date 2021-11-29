
<?php
    $content = $attributes["content"][0];
?>

<section class="half-and-half">
<?php if ($content["isFlipped"]){ ?>
    <div class="container-fluid-left my-5">
        <div class="row justify-content-between py-5">
            <div class="col-6 ps-0" data-tilt>
                <img class="left-img shadow" data-aos="fade-up" src="<?php echo $content["halfImg"] ?>" alt="">
            </div>
            <div class="col-5 mt-3 text-end" data-aos="fade-left">
                <h1> <?php echo $content["heading"] ?> </h1>
                <p> <?php echo $content["paragraph"] ?> </p>
                <a class="btn primary-color-button px-5 py-2" href="https://www.google.hr/">Više</a>
            </div>
        </div>
    </div>
<?php }
else{?>
    <div class="container-fluid-right my-5">
        <div class="row justify-content-between py-5">
            <div class="col-5 mt-3" data-aos="fade-right">
                <h1> <?php echo $content["heading"] ?> </h1>
                <p> <?php echo $content["paragraph"] ?> </p>
            </div>
            <div class="col-6 pe-0">
                <img class="right-img shadow" data-aos="fade-up" src="<?php echo $content["halfImg"] ?>" alt="">
            </div>
        </div>
    </div>
<?php }; ?>
</section>