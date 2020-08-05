var coursepage = 1;
	var endofcourses=false;
jQuery(document).ready(function(){
		getmorecourses(coursepage);
	jQuery('.slickslidercls').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

})

jQuery(function($) {
   jQuery('.slideRight').click(function() {
  // if(jQuery(window).scrollTop() + jQuery(window).height() > jQuery(document).height() - 1) {

      if(!endofcourses){
		getmorecourses(++coursepage);
	  }
  // }
});
});
	function getmorecourses(coursepagenum){		
			jQuery.ajax({
				url: 'https://minigolf.io/wp-json/wp/v2/course/?_fields=id,title,tiles,par&per_page=100&page='+coursepagenum,
				dataType: 'json',
				async:false,
				success: function (data) {
					console.log(data);
					if(data.length > 0){
						var tobeappended='';
						var vueobj=new Vue({
							el:"#usertemplates",
								data:{items:data}
						});
				console.log(vueobj);
					}else{
							endofcourses=true;
					}

				},
				error: function(e) {
					console.log(e);
						endofcourses=true;
				}
			});
		
	}