<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package starter
 */

?>


<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>  data-barba="container" data-barba-namespace="<?php the_title() ?>">
	

	<?php starter_post_thumbnail(); ?>

	<div class="entry-content m-0 ">
		<?php
		the_content();

		wp_link_pages(
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'starter' ),
				'after'  => '</div>',
			)
		);
		?>
	</div><!-- .entry-content -->

	
</article><!-- #post-<?php the_ID(); ?> -->
