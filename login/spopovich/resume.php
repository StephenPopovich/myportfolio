<?php
/**
 * Template Name: Resume
 *
 * @package starter_theme
 */


get_header();
?>
<div class="featured mobile-only"><!-- Put the Featured Image here -->
  <img src='/wp-content/uploads/2022/07/resume-feature-mobile.png' alt='' />
</div>

<div class="featured desktop-only">
  <img src='/wp-content/uploads/2022/07/resume-feature-desktop.png' alt='' />
</div>

<?php
if ( function_exists('yoast_breadcrumb') ) {
  yoast_breadcrumb( '<p id="breadcrumbs">','</p>' );
}
?>

<div id="" class="content-area">
  <main id="main" class="site-main" role="main">

    <?php while ( have_posts() ) : the_post(); ?>

      <?php get_template_part( 'template-parts/content', 'page' ); ?>

      <?php
        // If comments are open or we have at least one comment, load up the comment template.
        if ( comments_open() || get_comments_number() ) :
          comments_template();
        endif;
      ?>

    <?php endwhile; // End of the loop. ?>

  </main><!-- #main -->
</div>


<?php get_footer(); ?>
