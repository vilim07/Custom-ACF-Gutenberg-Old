
<?php
    $content = $attributes["content"][0];
?>



<section class="hero-flavor">

    <div class="container h-100">

        <div class="row h-100">
            <div class="col-6 pt-5 mt-5 bottom-leave left-enter-easy">
                <?php if ($content["topImg"]){ ?>
                    <img class="" src="<?php echo $content["topImg"] ;?>" alt="">
                <?php }; ?>
                <?php if ($content["heading"]){ ?>
                    <h1 class="mt-5"><?php echo $content["heading"] ;?></h1>
                <?php }; ?>
                <h4><?php echo $content["subheading"] ;?></h4>
            </div>
            <div class="col-6 d-flex flex-column justify-content-center align-items-center board ">
                <div class="right-leave-staggers popup-enter-staggers img-div scroll-slower"><img  src="<?php echo $content["firstImg"] ;?>" alt=""></div>
                <div class="right-leave-staggers popup-enter-staggers img-div scroll-slower"><img src="<?php echo $content["secondImg"] ;?>" alt=""></div>
                <div class="right-leave-staggers popup-enter-staggers img-div scroll-slower"><img src="<?php echo $content["thirdImg"] ;?>" alt=""></div>
            </div>
        </div>
    </div>

</section>