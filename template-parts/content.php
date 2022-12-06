<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package starter
 */

?>
<div id="motion">
    <span class="pseudo-header"></span>
    <article class="mb-5" id="post-<?php the_ID(); ?>" <?php post_class(); ?> data-barba="container" data-barba-namespace="<?php the_title() ?>">
        <div class="container-fluid mb-5">
            <div class="row">
                <div class="col-12 px-0">
                    <img class="img-c hhImg" src="<?php echo get_the_post_thumbnail_url() ?>">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 fade-enter fade-leave">
                    <h1><?php the_title(); ?></h1>
                    <?php
                        the_content();
                    ?>
                </div>
            </div>
        </div>

    </article><!-- #post-<?php the_ID(); ?> -->
</div>
