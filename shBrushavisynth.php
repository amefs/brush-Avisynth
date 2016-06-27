<?php
/*
Plugin Name: SyntaxHighlighter Evolved: avisynth Brush
Description: Adds support for the avisynth language to the SyntaxHighlighter Evolved plugin.
Author: Amefs
Version: 1.0.0
Author URI: https://amefs.net/
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_avisynth_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_avisynth_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_avisynth_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-avisynth', plugins_url( 'shBrushavisynth.js', __FILE__ ), array('syntaxhighlighter-core'), '160627' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_avisynth_addlang( $brushes ) {
    $brushes['avisynth'] = 'avisynth';
    $brushes['avs'] = 'avisynth';
 
    return $brushes;
}