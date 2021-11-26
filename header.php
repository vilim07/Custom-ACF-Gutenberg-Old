<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package starter
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.3.1/swiper-bundle.min.css" integrity="sha512-X6rkdr0JIxgdnOUEfnJENeCydCat1urriiDqzgUl92f9NSlnkSTWtlgiH8nxhxkK6nlZ3DxWf7cerVLvbo5NSg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.3.1/swiper-bundle.min.js"></script>


<div id="page" class="site">
	<header id="masthead" class="site-header">
		<div class="container">
			<div class="row mt-3">
				<nav id="site-navigation" class="main-navigation justify-content-between d-flex my-3 px-4">
					<div class="logo d-flex">
						<img class="rotating-part" src="<?php echo get_template_directory_uri() . "/img/logo-rotary(1).png" ?>" alt="">
						<div class="static-part"></div>
					</div>
					<?php
						wp_nav_menu(
							array(
								'theme_location' => 'menu-1',
								'menu_id'        => 'primary-menu',
							)
						);
					?>
				</nav><!-- #site-navigation -->
			</div>
		</div>
	</header><!-- #masthead -->
