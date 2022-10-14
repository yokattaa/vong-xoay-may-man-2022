
jQuery(document).ready(function(){
	// Add mail kythuat + kinh doanh footer tenten
	jQuery('.tg_support_footer ul>li:nth-child(1)').append('<a class="mail_ftl" href="mailto:kythuat@tenten.vn">kythuat@tenten.vn</a>');
 jQuery('.tg_support_footer ul>li:nth-child(2)').append('<a class="mail_ftl" href="mailto:hotrokhachhang@tenten.vn">hotrokhachhang@tenten.vn</a>');
	 // COUNT POST EVENT TINTUC.TENTEN.VN
	jQuery(".tg_sale_nav>a").prepend('<span class="tg_count_km"></span>');
	jQuery( ".tg_count_km").load( "https://tintuc.tenten.vn/trang-dem-event/");	
	// END COUNT POST EVENT TINTUC.TENTEN.VN
	jQuery('.right_trademark_sop img').attr('src','https://img.tenten.vn/k/lp/images/vn_nang_tam_thuong_hieu_viet.jpg');
	jQuery('.right_trademark_sop figure').wrapInner('<a href="https://vietnamnet.vn/vn/kinh-doanh/website-gian-hang-tiem-nang-kinh-doanh-online-716679.html" target="_blank"></a>');
	jQuery('.logo_companion .img_right>li:nth-child(2) a').attr('href','https://vnnic.vn/cam-nang-thuong-hieu-bo-logo-vnnic');

	// POPUP DANG NHAP
	jQuery('.tg_header .tg_login').click(function(){
		jQuery('.popup_dangnhap').modal('show');
	}); 

    // click xem tinh nang home
	jQuery('.quality_hosting [class*="xemtinhnang"]').click(function(){
		jQuery('.quality_hosting [class*="tinhnangthem"]').slideToggle();
		jQuery('.quality_hosting [class*="xemtinhnang"] i.fa-angle-double-up').toggleClass('show');
		jQuery('.quality_hosting [class*="xemtinhnang"] i.fa-angle-double-down').toggleClass('hide');
	});
	jQuery('.nav_primary .tg_menu_header>li').click(function(){
		jQuery(this).toggleClass('tg_active_menu');
		jQuery(this).siblings().removeClass('tg_active_menu');
		jQuery(this).find('ul.sub-menu').show();
	});
	jQuery('.tg_menu_header>li>a').click(function(e){
		e.preventDefault();
	});
	jQuery(document).click(function(event) {
 		 //if you click on anything except the modal itself or the "open modal" link, close the modal
 		 if (!jQuery(event.target).closest(".custom_action ").length) {
 		 	jQuery("body").find(".custom_action ul").hide();
 		 }
 		 if (!jQuery(event.target).closest(".nav_primary .tg_menu_header>li, .nav_primary .tg_menu_header>li ul.sub-menu").length) {
 		 	jQuery("body").find(".nav_primary .tg_menu_header>li ul.sub-menu").hide();
 		 	jQuery("body").find(".nav_primary .tg_menu_header>li ").removeClass('tg_active_menu');
 		 }
 		});

	jQuery.fn.extend({
		toggleTextMore: function (a, b){
			var isClicked = false;
			var that = this;
			this.click(function (){
				if (isClicked) { 
					that.text(a); 
					isClicked = false;
				}
				else { that.text(b); isClicked = true; }
			});
			return this;
		}
	});
	jQuery('.dvumuakemtenmien .mk_more').click(function(){
		jQuery(this).toggleClass('db_arrow_up');
	});
  // POPUP GOI LAI
  jQuery('.note_popup_goilai ul li').click(function(){
  	var $this = $(this);
  	jQuery(this).removeClass('active_opacity').siblings().addClass('active_opacity');
  	if ($this.index() === 0 || $this.is(':nth-child(1)')) {
  		jQuery('.position_callback').show();
  	}
  	else{
  		jQuery('.position_callback').hide();
  	}
  });

  jQuery('.popup_invoice .content_popup').append(`<div class="close_popup" data-dismiss="modal">
  	<i class="fa fa-times" aria-hidden="true"></i>
  	</div>`);
 // Scroll top 
  jQuery('#page-top').click(function (){
  	jQuery('html, body').animate({
  		scrollTop: jQuery("html").offset().top
  	}, 1000);
  }); 

  jQuery('#sticky-right-3 ul>li:nth-child(2)').click(function (){
  	jQuery('html, body').animate({
  		scrollTop: jQuery("header").offset().top
  	}, 1000);
  }); 
// SEARCH IDNEX
jQuery('.click_buy_domains').click(function(){
	var toggleHeight = $(".tg_wrap_search, .bg_search").height() == 100 ? "68px" : "120px";
	$('.tg_wrap_search , .bg_search').animate({ height: toggleHeight},200);
	jQuery('#txt_search_new').hide();
	if(jQuery('#domainNameSingleInput').val()){
		jQuery('#search_domains').hide();
	}
	else{
		jQuery('#search_domains').show();
	}
	
	jQuery(this).hide();
});


jQuery('#domainNameSingleInput').focus(function(){
	jQuery('#txt_search_new, #search_domains').hide();
});
jQuery('#txt_search_new, #search_domains').click(function(){
	jQuery(this).hide();
	jQuery('#domainNameSingleInput').focus();
});

// SEARCH INDEX

	//quality_hosting
	$('.quality_hosting ul.tabs_special li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('.quality_hosting ul.tabs_special li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	   // PLACEHOLDER TEXTAREA SEARCH DOMAIN
	   var vlue_text = jQuery('#domainNameSingleInput');
	   jQuery('#domainNameSingleInput').focus(function(){
	   	jQuery(this).siblings('label[class*="txt_search"]').hide();
	   });

	 // END PLACEHOLDER TEXTAREA SEARCH DOMAIN


		// MENU MOBILE
		jQuery(".icon_mobile_click").click(function(){
			jQuery("#page_wrapper").addClass('page_wrapper_active');
			jQuery("#menu_mobile_full").addClass('menu_show').stop().animate({left: "0px"},260);
			jQuery(".close_menu, .bg_opacity").show();
		});
		jQuery(".close_menu").click(function(){
			jQuery("#menu_mobile_full").animate({left: "-260px"},260).removeClass('menu_show');
			jQuery("#page_wrapper").removeClass('page_wrapper_active');
			jQuery(this).hide();
			jQuery('.bg_opacity').hide();
		});
		jQuery('.bg_opacity').click(function(){
			jQuery("#menu_mobile_full").animate({left: "-260px"},260).removeClass('menu_show');
			jQuery("#page_wrapper").removeClass('page_wrapper_active');
			jQuery('.close_menu').hide();
			jQuery(this).hide();
		});
		jQuery("#menu_mobile_full ul li a").click(function(){
			jQuery(".icon_mobile_click").fadeIn(300);
			jQuery("#page_wrapper").removeClass('page_wrapper_active');
		});

		jQuery('.mobile-menu .menu>li:not(:has(ul.sub-menu)) , .mobile-menu .menu>li ul.sub-menu>li:not(:has(ul.sub-menu))').addClass('not-have-child');

		// menu cap 2
		jQuery('.mobile-menu ul.menu').children().has('ul.sub-menu').click(function(){
			jQuery(this).children('ul').slideToggle();
			jQuery(this).siblings().has('ul.sub-menu').find('ul.sub-menu').slideUp();
			jQuery(this).siblings().find('ul.sub-menu>li').has('ul.sub-menu').removeClass('editBefore_mobile');
		}).children('ul').children().click(function(event){event.stopPropagation();});

		//menu cap 3
		jQuery('.mobile-menu ul.menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function(){
			jQuery(this).children('ul.sub-menu').slideToggle();
		}).children('ul').children().click(function(event){event.stopPropagation();});

			//menu cap 4
			jQuery('.mobile-menu ul.menu>li>ul.sub-menu>li>ul.sub-menu').children().has('ul.sub-menu').click(function(){
				jQuery(this).children('ul.sub-menu').slideToggle();
			}).children('ul').children().click(function(event){event.stopPropagation();});


			jQuery('.mobile-menu ul.menu li').has('ul.sub-menu').click(function(event){
				jQuery(this).toggleClass('editBefore_mobile');
			});
			jQuery('.mobile-menu ul.menu li').has('ul.sub-menu').addClass('menu-item-has-children');
			jQuery('.mobile-menu ul.menu>li').click(function(){
				$(this).addClass('active').siblings().removeClass('active, editBefore_mobile');
			});

			jQuery('.trust_right ul li:gt(0) , .trust_left ul li:gt(0)').hide();
			setInterval(function(){$('.trust_right ul>:first-child').fadeOut().next('li').fadeIn().end().appendTo('.trust_right ul');}, 20000);
			setInterval(function(){$('.trust_left ul>:first-child').fadeOut().next('li').fadeIn().end().appendTo('.trust_left ul');}, 20000);

// CHANGE BANNER MINI TOP
// jQuery('.tg_header .tg_logo').after(`
// 	<div class="vnnic_vn">
// 	<a href="https://tenten.vn/ten-mien/combo-vn-ssd-hosting" target="_blank"><img src="https://img.tenten.vn/k/lp/images/comvn-ssd-699k.jpg" style="position:relative;top:5px;"></a>
// 	</div>`);


 // SHOW POPUP INDEX
		// setTimeout(function(){
  //           jQuery('body .evaluate_kh').prepend(`
  //                 <div class="tg_popup_index tg_popup_index_alert in">
  //                     <div class="content_popup" >
  //                        <a href="https://tenten.vn/ten-mien/ten-mien-com-gia-189k" target="_blank"><img src="https://img.tenten.vn/k/lp/images/happy-day-189k.jpg"> </a>
  //                    </div>
  //                    <div class="tg_close_popup"><i class="fa fa-times" aria-hidden="true" data-dismiss="modal"></i></div>
  //                  </div>
  //                </div>
  //               `);
  //       },1500); 

  //          jQuery(document).click(function(event) {
  //        //if you click on anything except the modal itself or the "open modal" link, close the modal
  //        jQuery("body").find(".tg_popup_index .tg_content_popup_index").hide();
  //        jQuery(".tg_popup_index").fadeOut(300);
  //    });
  // END SHOW POPUP INDEX
  
  // CHANGE LINK LIST BANNER MINI HOME 
    jQuery('.banner_vn_combo_sop ul>li:nth-child(1) a').attr('href','https://tenten.vn/vi/ten-mien/mua-vn-tang-email-server?code=vyTtHPNnZxJrISLW&idCampaign=377');
      jQuery('.banner_vn_combo_sop ul>li:nth-child(2) a').attr('href','https://tenten.vn/vi/ten-mien/combo-vn-failover-hosting?code=mrgKctSwkdqlQGTP&idCampaign=378');
  jQuery('.banner_vn_combo_sop ul>li:nth-child(3) a').attr('href','https://tenten.vn/gioi-thieu-tenten?code=PzGaUigvjEsQuThx&idCampaign=379');
  jQuery('.banner_vn_combo_sop ul>li:nth-child(3) img').attr('src','https://img.tenten.vn/k/lp/footer/images/banner_4_tentenhome.png');

  // CHANGE LINK IMAGE NEXT TO SLIDE BANNER
  jQuery('.khuyenmai_new_tenten .figure_new_tenten>figure:nth-child(2) a').attr('href','https://tenten.vn/ten-mien/ten-mien-vn-hoan-tien-120K?code=VSZsOQbDnGfvrjmg&idCampaign=501');
  jQuery('.khuyenmai_new_tenten .figure_new_tenten>figure:nth-child(1) a').attr('href','https://tenten.vn/ten-mien/campaign-com-net-149K?code=jlfTuarFsvDnGLdJ&idCampaign=376');

  // CHANGE PLACEHOLDER INPUT TYPE TEL REGISTRATION CUSTOMER
  jQuery(".registration_sop_tf .reg_p_phone, .signin_pd #i_phone").attr("placeholder", "Quý khách ưu tiên nhập số điện thoại di động");



});   //end document 


// SHOW POPUP SLIDE INDEX

// $(document).ready(function(){
// 	// add link rel= nofollow
// 	jQuery('.tg_popup_slide ul>li a').attr("rel","nofollow");
// 			jQuery('.tg_popup_slide').click(function(event) {
//  		 //if you click on anything except the modal itself or the "open modal" link, close the modal
//  		 if (!jQuery(event.target).closest(".tg_popup_slide .content_popup").length) {
//  		 	jQuery("body").find(".tg_popup_slide .content_popup").hide();
//  		 	jQuery(".tg_popup_slide").fadeOut(300);
//  		 }
//  		});
// 	// slide 1
// 	/*jQuery('.tg_popup_slide ul>li:nth-child(1) img').attr('src','https://img.tenten.vn/k/lp/images/happy-day-2021.jpg');
// 	jQuery('.tg_popup_slide ul>li:nth-child(1) a').attr('href','https://tenten.vn/ten-mien/happy-day-2021?code=eFXvSEdlrhxWauyp&idCampaign=507');*/
// 	// //slide 2
// 	jQuery('.tg_popup_slide ul>li:nth-child(2) img').attr('src','https://img.tenten.vn/k/lp/images/popup_tenmienzalo.jpg');
// 	jQuery('.tg_popup_slide ul>li:nth-child(2) a').attr('href','https://tintuc.tenten.vn/tenten-vn-ra-mat-tinh-nang-dang-ky-va-gia-han-nhanh-qua-zalo/?code=aTAUNbkPzYwfeGyx&idCampaign=397');
// 	//slide 3
// 	// jQuery('.tg_popup_slide ul>li:nth-child(1) img').attr('src','https://img.tenten.vn/k/lp/images/popup-happy-day-domain.jpg');
// 	// jQuery('.tg_popup_slide ul>li:nth-child(1) a').attr('href','https://tenten.vn/ten-mien/happy-day-ngay-vang-gia-soc');
// 	// //slide 4
// 	// jQuery('.tg_popup_slide ul>li:nth-child(2) img').attr('src','https://img.tenten.vn/k/lp/images/popup-happy-day-hosting.jpg');
// 	// jQuery('.tg_popup_slide ul>li:nth-child(2) a').attr('href','https://tenten.vn/hosting/happy-day-secure-web-hosting');
// 	//Remove slide 
// 	jQuery('.tg_popup_slide ul>li:nth-child(1), .tg_popup_slide ul>li:nth-child(3),.tg_popup_slide ul>li:nth-child(3),.tg_popup_slide ul>li:nth-child(4),.tg_popup_slide ul>li:nth-child(5),.tg_popup_slide ul>li:nth-child(6)').remove();
// 	jQuery('.tg_popup_slide').find('.tg_close_popupslide').click(function(){
// 		jQuery(this).closest('.tg_popup_slide').fadeOut(300);
// 	});
// 	setTimeout(function(){
// 		jQuery('.tg_popup_slide').show();
// 		jQuery('.tg_popup_slide ul').slick('refresh');
// 	},100); 
// 	if($('.tg_popup_slide').length>0){
// 		$('.tg_popup_slide ul').slick({
// 			arrows:false,
// 			dots: true,
// 			infinite: false,
// 			speed: 300,
// 			slidesToShow: 1,
// 			fade:true,
// 			initialSlide : 0,
//  			autoplay:true,
//  			autoplaySpeed: 3000,
//  			draggable: false,
//  			swipe: false,
//  			swipeToSlide: false,
//  			touchMove: false,
//  			pauseOnHover: true,
//  			pauseOnFocus: true,
//  			slidesToScroll: 1,
// 			 			// customPaging : function(slider, i) {
// 			 			// 	var thumb = jQuery(slider.$slides[i]).data();
//        //      // return '<a>'+(i+1)+'</a>'; // <-- old
//        //      return '<a>'+(''+(i+1)).slice(-2)+'</a>'; // <-- new
//        //  },
//         responsive: [
//         {
//         	breakpoint: 1024,
//         	settings: {
//         		slidesToShow: 1,
//         		slidesToScroll: 1,
//         		infinite: false,
//         		dots: true
//         	}
//         }
//         ]
//     });
// 	}

	
// }); 


 // END SHOW POPUP SLIDE INDEX