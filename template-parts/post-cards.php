<?php
     $args = array(  
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => -1, 
        'orderby' => 'date', 
        'order' => 'DESC', 
    );
    $loop = new WP_Query( $args );
 ?>

<section>
    <div class="container my-5">
        <div class="row">
            <?php 
                while ( $loop->have_posts() ) : $loop->the_post(); ?>
                    <div class="col-4 left-enter-stagger scale-leave">
                        <a href="<?php the_permalink() ?>">
                            <div class="shadow post-card h-100 pb-3 d-flex flex-column">
                                <img class="post-thumb" src="<?php echo get_the_post_thumbnail_url() ?>">
                                <h4 class="m-4"><?php the_title() ?></h4 class="m-4">
                                <a class="btn ms-auto mt-auto me-4 primary-color-button px-5 py-2" href="<?php the_permalink() ?>">Više</a>
                            </div>
                        </a>
                    </div>
                <?php endwhile;
            ?>
            
        </div>
    </div>
</section>