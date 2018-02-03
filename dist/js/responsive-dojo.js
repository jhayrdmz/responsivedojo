$( document ).ready( function() {

	//jquery initialize
	!function(i){"use strict";var t=function(i,t){this.selector=i,this.callback=t},e=[];e.initialize=function(e,n){var c=[],a=function(){-1==c.indexOf(this)&&(c.push(this),i(this).each(n))};i(e).each(a),this.push(new t(e,a))};var n=new MutationObserver(function(){for(var t=0;t<e.length;t++)i(e[t].selector).each(e[t].callback)});n.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i.fn.initialize=function(i){e.initialize(this.selector,i)},i.initialize=function(i,t){e.initialize(i,t)}}(jQuery);

	//closing alert box
	$( '.alert-close' ).initialize( function() {
		$( this ).on( 'click', function() {
			$( this ).parent().fadeOut();
		});
	});

	//add border on focus in trasnparent form group icon
	$( '.transparent .form-input' ).initialize( function() {
		$( this ).on( 'blur focus', function() {
			var parent = $( this ).parent();
			parent.toggleClass( 'focused' );
		});
	});

	//responsive table
	$( 'table' ).initialize( function() {
		var getViewport = $( this ).data( 'table-responsive' );
		
		if ( $( window ).innerWidth() <= getViewport ) {
			$( this ).addClass( 'responsive' );
		} else {
			$( this ).removeClass( 'responsive' );
		}
	});

	$( 'table.responsive td' ).initialize( function() {
		var th = $( this ).closest( 'table.responsive' ).find( 'th' ).eq( this.cellIndex ).html();
		$( this ).attr( 'data-th', th );
	});

	//modal
	( function( $ ) {
		$.fn.rdModal = function( contentModalOptions ) {
			this.each( function() {
				//set variables
				var modal = $( this ).data( 'modal' );
				var modalSize = $( this ).data( 'modal-size' );
				var modalContainer = $( modal ).find( '.modal-area' );
				var modalContent = $( modal ).find( '.content-area' );

				//default actions
				$( modal ).addClass( 'back-drop' ).hide();
				$( modalContent ).prepend( '<div class="close-modal">&times;</div>' );

				//default options
				var settings = $.extend({
					backdropBackgroundColor: 'rgba( 0, 0, 0, .8 )',
					contentBackgroundColor: '#fff',
				}, contentModalOptions );

				$( this ).on( 'click', function(e) {
					e.preventDefault();
					$( modal ).fadeIn();
					$( 'html, body' ).addClass( 'unscrollable' );
					$( modal ).find( '.focus' ).focus();
				});

				//sets back drop background color
				$( modal ).css({
					backgroundColor: settings.backdropBackgroundColor
				});

				//sets background color for content
				$( modalContent ).css({
					backgroundColor: settings.contentBackgroundColor,
					width: modalSize
				});

				//close modal
				$( '.close-modal' ).initialize( function() {
					close_modal( this );
				});

				$( modalContainer ).initialize( function() {
					close_modal( this );
				});

				$( '.modal-area > *' ).on( 'click', function(e) {
					e.stopPropagation();
				});

				function close_modal( this_el ) {
					$( this_el ).on( 'click', function() {
						$( modal ).fadeOut();
						$( 'html, body' ).removeClass( 'unscrollable' );
					});
				}
			});
		};
	}( jQuery ));

	//tabs
	( function( $ ) {
		$.fn.rdTab = function( contentTabOptions ) {
			this.each( function() {
				//set variables
				var activeTab = $( this ).data( 'tab-active' );
				var getTab = $( this ).data( 'tab' );
				var tabMenu = $( '.tab-header > *' );
				console.log( tabMenu );

				$( getTab ).addClass( 'tab-content' );

				if ( activeTab == true ) {
					$( getTab ).css({
						'display' : 'block'
					}).addClass( 'active' );

					$( this ).addClass( 'active' );
				}

				$( this ).on( 'click', function() {
					if ( !$( this ).hasClass( 'active' ) ) {
						$( tabMenu ).removeClass( 'active' );
						$( '.tab-content' ).hide().removeClass( 'active' );
						$( this ).addClass( 'active' );
						$( getTab ).stop().fadeIn( 300 ).addClass( 'active' );
					}
				});
			});
		};
	}( jQuery ));

	//accordions
	( function( $ ) {
		$.fn.rdAccordion = function( contentAccordionOptions ) {
			this.each( function() {

				var settings = $.extend({
					isOpen : function() {},
					isClose: function() {},
				}, contentAccordionOptions );

				//default actions
				$( this ).addClass( 'accordion-menu' );
				var parent = $( this ).children().addClass( 'accordion-section' );

				//set variables
				var header = $( this ).find( '.accordion-header' );
				var content = $( this ).find( '.accordion-content' );
				var activeTab = $( this ).data( 'accordion-active' );

				$( header ).on( 'click', function() {
					if ( false == $( this ).next().is( ':visible' ) ) {
						$( content ).slideUp();
						$( parent ).removeClass( 'active' );
					}
					$( this ).next().stop().slideToggle();
					$( this ).parent().toggleClass( 'active' );
					
					if ( $( parent ).hasClass( 'active' ) ) {
						settings.isOpen();
					} else {
						settings.isClose();
					}
				});

				$( this ).find( '.accordion-content:eq( ' + activeTab + ' )' ).show().parent().addClass( 'active' );
			});
		}
	}( jQuery ));

	//isotopes
	( function( $ ) {
		$.fn.rdIsotope = function( contentIsotopeOptions ) {
			this.each( function() {
				//set variables
				var header = $( this ).children( '*:first' );
				var section = $( this ).children( '*:last' );

				//default actions
				$( this ).addClass( 'isotope-container' );
				$( header ).addClass( 'isotope-filter' );
				$( section ).addClass( 'isotope-items' );
			});
		}
	}( jQuery ));

	//lightbox
	var lightbox = $( 'body' ).find( 'a[data-lightbox]' );
	if ( $( lightbox ).length ) {
		$( 'body' ).append( '<div class="lightbox">' + 
				'<div class="lightbox-container">' +
					'<div class="close-lightbox">&times;</div>' +
					'<div class="lightbox-image"></div>' +
				'</div>' +
			'</div>' );
	}
	$( 'a[data-lightbox]' ).initialize( function() {
		//set variables
		var getImg = $( this ).attr( 'href' );

		$( this ).on( 'click', function(e) {
			e.preventDefault();
			$( '.lightbox' ).fadeIn();
			$( '.lightbox-image' ).html( '' );
			$( '.lightbox-image' ).append( '<img src="' + getImg + '" />' );
		});
	});

	$( '.close-lightbox' ).on( 'click', function() {
		$( this ).closest( '.lightbox' ).fadeOut();
	});

	//loaders
	$( '.spinner-double-bounce' ).initialize( function() {
		$( this ).append( 
			'<div class="double-bounce1"></div>' +
			'<div class="double-bounce2"></div>'
		);
	});

	$( '.spinner-stretch-delay' ).initialize( function() {
		$( this ).append( 
			'<div class="rect1"></div>' +
			'<div class="rect2"></div>' +
			'<div class="rect3"></div>' +
			'<div class="rect4"></div>' +
			'<div class="rect5"></div>'
		);
	});

	$( '.spinner-cube-move' ).initialize( function() {
		$( this ).append( 
			'<div class="cube1"></div>' +
			'<div class="cube2"></div>'
		);
	});

	$( '.spinner-rotate-dot' ).initialize( function() {
		$( this ).append( 
			'<div class="dot1"></div>' +
			'<div class="dot2"></div>'
		);
	});

	$( '.spinner-bounce-delay' ).initialize( function() {
		$( this ).append(
			'<div class="bounce1"></div>' +
			'<div class="bounce2"></div>' +
			'<div class="bounce3"></div>'
		);
	});

	$( '.spinner-sk-circle' ).initialize( function() {
		$( this ).append(
			'<div class="sk-child sk-circle1"></div>' +
			'<div class="sk-child sk-circle2"></div>' +
			'<div class="sk-child sk-circle3"></div>' +
			'<div class="sk-child sk-circle4"></div>' +
			'<div class="sk-child sk-circle5"></div>' +
			'<div class="sk-child sk-circle6"></div>' +
			'<div class="sk-child sk-circle7"></div>' +
			'<div class="sk-child sk-circle8"></div>' +
			'<div class="sk-child sk-circle9"></div>' +
			'<div class="sk-child sk-circle10"></div>' +
			'<div class="sk-child sk-circle11"></div>' +
			'<div class="sk-child sk-circle12"></div>'
		);
	});

	$( '.spinner-cube-grid' ).initialize( function() {
		$( this ).append(
			'<div class="sk-cube sk-cube1"></div>' +
			'<div class="sk-cube sk-cube2"></div>' +
			'<div class="sk-cube sk-cube3"></div>' +
			'<div class="sk-cube sk-cube4"></div>' +
			'<div class="sk-cube sk-cube5"></div>' +
			'<div class="sk-cube sk-cube6"></div>' +
			'<div class="sk-cube sk-cube7"></div>' +
			'<div class="sk-cube sk-cube8"></div>' +
			'<div class="sk-cube sk-cube9"></div>'
		);
	});

	$( '.spinner-fading-circle' ).initialize( function() {
		$( this ).append(
			'<div class="sk-circle sk-circle1"></div>' +
			'<div class="sk-circle sk-circle2"></div>' +
			'<div class="sk-circle sk-circle3"></div>' +
			'<div class="sk-circle sk-circle4"></div>' +
			'<div class="sk-circle sk-circle5"></div>' +
			'<div class="sk-circle sk-circle6"></div>' +
			'<div class="sk-circle sk-circle7"></div>' +
			'<div class="sk-circle sk-circle8"></div>' +
			'<div class="sk-circle sk-circle9"></div>' +
			'<div class="sk-circle sk-circle10"></div>' +
			'<div class="sk-circle sk-circle11"></div>' +
			'<div class="sk-circle sk-circle12"></div>'
		);
	});

	$( '.spinner-folding-cube' ).initialize( function() {
		$( this ).append(
			'<div class="sk-cube sk-cube1"></div>' +
			'<div class="sk-cube sk-cube2"></div>' +
			'<div class="sk-cube sk-cube4"></div>' +
			'<div class="sk-cube sk-cube3"></div>'
		);
	});

	$( '.spinner-ball-rotate' ).initialize( function() {
		$( this ).append(
			'<div class="ball-rotate"></div>'
		);
	})
});

$( window ).resize( function() {
	$( 'table' ).initialize( function() {
		var getViewport = $( this ).data( 'table-responsive' );
		
		if ( $( window ).width() <= getViewport ) {
			$( this ).addClass( 'responsive' );
		} else {
			$( this ).removeClass( 'responsive' );
		}
	});
});