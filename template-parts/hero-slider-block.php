<section class="hero-slider-block">
        <div class="swiper hero-vertical-swiper">
            <div class="swiper-wrapper">
                <?php 
                    foreach ($attributes["slides"] as $slide){?>
                        <div class="swiper-slide" style="background-image:url(<?php echo $slide["slideImg"] ?>;">
                        <?php echo $slide["text"] ?>)
                    </div>
                    <?php }
                ?>
            </div>
            <div class="swiper-pagination"></div>
        </div>
</section>
