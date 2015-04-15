(function($) {
    tinymce.PluginManager.add('tx_tc_button', function( editor, url ) {
        editor.addButton( 'tx_tc_button', {
            title: 'My test button',
            icon: 'icon dashicons-wordpress-alt',
            id: 'wpb-editor-btn',
            onclick: function() {
            	$('#myModal').modal({
            		show: true
            	});
			}
        });
    });
})(jQuery);