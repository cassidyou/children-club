$(document).ready(function () {

  // Authentication Swiper Initialization
  if ($('.hero-swiper').length > 0) {
    var swiper = new Swiper(".hero-swiper", {
      effect: "fade", 
      slidesPerView: 1,
      loop: true,
      speed: 3000,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  //Popular Search Swiper Initialization
  if ($('.popularSearchSwiper').length > 0) {
    var swiper = new Swiper(".popularSearchSwiper", {
      spaceBetween: 30,
      effect: "slide",
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

  // Lightgallery Initialization
  if($('.lightgallery').length > 0){
    $('.lightgallery').lightGallery({
      loop: true,
      thumbnail: true,
      exThumbImage: 'data-exthumbimage'
    });
  }



  // Authentication Input Validation - JQuery validate
  $('#reg-btn').on('click', function(){

    $('#auth_reg_form').validate({
      rules: {
        fullname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 8
        },
        confirm_password: {
          required: true,
          minlength: 8
        },
      },
      messages: {
        fullname: "Please enter your fullname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long"
        },
        confirm_password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
        },
        email: {
          required: "Please provide an email address",
          email: "Please enter a valid email address"
        }
      },
      submitHandler: function () {
        location.href = 'welcome.html';
      },
      errorElement: "small",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("label"));
        } else {
          error.insertAfter(element.parent('.input-group'));
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element).parents(".input-group").addClass("has-error").removeClass("has-success");
        $(element).parents(".input-group").removeClass("mb-3").addClass("mb-1");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).parents(".input-group").addClass("has-success").removeClass("has-error");
        $(element).parents(".input-group").removeClass("mb-1").addClass("mb-3");
      }

    });
  });

  

    $('#reset-btn').on('click', function(){
      $('#auth_reset_pswd_form').validate({
        rules: {
          new_password: {
            required: true,
            minlength: 8
          },
          confirm_new_password: {
            required: true,
            minlength: 8,
          },
        },
        messages: {
          new_password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long"
          },
          confirm_new_password: {
            required: "Please provide a password",
            minlength: "Your password must be at least 8 characters long",
          },
        },
        submitHandler: function () {
          location.href = 'password-reset-success.html';
        },
        errorElement: "small",
        errorPlacement: function (error, element) {
          // Add the `help-block` class to the error element
          error.addClass("help-block");
  
          if (element.prop("type") === "checkbox") {
            error.insertAfter(element.parent("label"));
          } else {
            error.insertAfter(element.parent('.input-group'));
          }
        },
        highlight: function (element, errorClass, validClass) {
          $(element).parents(".input-group").addClass("has-error").removeClass("has-success");
          $(element).parents(".input-group").removeClass("mb-3").addClass("mb-1");
        },
        unhighlight: function (element, errorClass, validClass) {
          $(element).parents(".input-group").addClass("has-success").removeClass("has-error");
          $(element).parents(".input-group").removeClass("mb-1").addClass("mb-3");
        }
  
      });
    });

  


  /********************************* DataTables ***************************************/
  //example 1
  var table = $('#example').DataTable({
    createdRow: function (row, data, index) {
      $(row).addClass('selected')
    },
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }
  });

  table.on('click', 'tbody tr', function () {
    var $row = table.row(this).nodes().to$();
    var hasClass = $row.hasClass('selected');
    if (hasClass) {
      $row.removeClass('selected')
    } else {
      $row.addClass('selected')
    }
  })

  table.rows().every(function () {
    this.nodes().to$().removeClass('selected')
  });



  //example 2
  var table2 = $('#example2').DataTable({
    createdRow: function (row, data, index) {
      $(row).addClass('selected')
    },

    "scrollY": "42vh",
    "scrollCollapse": true,
    "paging": false
  });

  table2.on('click', 'tbody tr', function () {
    var $row = table2.row(this).nodes().to$();
    var hasClass = $row.hasClass('selected');
    if (hasClass) {
      $row.removeClass('selected')
    } else {
      $row.addClass('selected')
    }
  })

  table2.rows().every(function () {
    this.nodes().to$().removeClass('selected')
  });

  // dataTable1
  var table = $('#dataTable1').DataTable({
    searching: false,
    paging: true,
    select: false,
    lengthChange: false,

  });
  // dataTable2
  var table = $('#dataTable2').DataTable({
    searching: false,
    paging: true,
    select: false,
    lengthChange: false,

  });
  // dataTable3
  var table = $('#dataTable3').DataTable({
    searching: false,
    paging: true,
    select: false,
    lengthChange: false,

  });
  // dataTable4
  var table = $('#dataTable4').DataTable({
    searching: false,
    paging: true,
    select: false,
    lengthChange: false,

  });



  // dataTable5
  var table = $('#example5').DataTable({
    searching: false,
    paging: true,
    select: false,
    info: true,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }

  });

  // dataTable6
  var table = $('#example6').DataTable({
    searching: false,
    paging: true,
    select: false,
    info: false,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }

  });

  // dataTable7
  var table = $('#example7').DataTable({
    searching: false,
    paging: true,
    select: false,
    info: false,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }

  });

  // dataTable8
  var table = $('#example8').DataTable({
    searching: false,
    paging: true,
    select: false,
    info: false,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }

  });
  // orderTable
  var table = $('#orderTable').DataTable({
    searching: false,
    paging: true,
    select: false,
    info: false,
    lengthChange: false,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }

  });



  // table row
  var table = $('#dataTable1, #dataTable2, #dataTable3, #dataTable4,  #example3, #example4 ').DataTable({
    select: true,
    searching: true,
    language: {
      paginate: {
        next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
        previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
      }
    }
  });
  $('#example tbody').on('click', 'tr', function () {
    var data = table.row(this).data();
  });



  /****************** Dropify *************************************/
  if($('.dropify').length > 0){
    $('.dropify').dropify({
      messages: {
        'default': 'Drag and drop your photos here',
        'replace': 'Drag and drop or click to replace',
        'remove': 'Remove',
        'error': 'Ooops, something wrong appended.'
      },
      error: {
        'fileSize': 'The file size is too big (2M max).'
      },
      tpl: {
            message: '<div class="dropify-message"><span class="file-icon" /> <p style="font-size: 18px!important; color: #000000; opacity: 0.7;"><b>{{ default }}</b></p><small style="font-size: 14px">Choose at least 5 photos</small><br> <span style="border-bottom: 1px solid; font-size: 14px; color: #000; margin-bottom: 5px;opacity: 0.7;">Upload from device</span></div>',
           
        }
    });
  }

  if($('.dropify-id').length > 0){
    $('.dropify-id').dropify({
      messages: {
        'default': 'Drag and drop your photos here',
        'replace': 'Drag and drop or click to replace',
        'remove': 'Remove',
        'error': 'Ooops, something wrong appended.'
      },
      error: {
        'fileSize': 'The file size is too big (2M max).'
      },
      tpl: {
            message: '<div class="dropify-message"><img src="../asset/img/front-of-id-card.png" class="img-fluid p-3 h-100" />  </span></div>',
           
        }
    });
  }

  

 /****************** Dropify *************************************/
  if($('.sortable').length > 0){
    $(".sortable").sortable({
      connectWith: '.sortable',
      items: '.card-draggable',
      revert: true,
      placeholder: 'card-draggable-placeholder',
      forcePlaceholderSize: true,
      opacity: 0.77,
      cursor: 'move'
    });
  }



  // Toggle Password Input Visibility

  $('.rlf-hd-hide').on('click', function () {
    let targetInput = $(this).parents('.rlf-hd').siblings('.psw_input');
    targetInput.attr('type', 'text');
    $(this).siblings('.rlf-hd-show').removeClass('d-none');
    $(this).addClass('d-none');

  });

  $('.rlf-hd-show').on('click', function () {
    let targetInput = $(this).parents('.rlf-hd').siblings('.psw_input');
    targetInput.attr('type', 'password');
    $(this).siblings('.rlf-hd-hide').removeClass('d-none');
    $(this).addClass('d-none');
  });


  //Sweet Alert for complete registration on dashboard page
  	//Custom Image
	$('#completeRegBtn').click(function () {
    $('.btn-close-regForm').click();
		swal({
			title: 'Registration Complete!',
			imageUrl: '../asset/img/verify.png',
			animation: true,
      showConfirmButton: false,
      timer: 2000
		})
	});

});

