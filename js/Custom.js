// Set the current year dynamically
document.getElementById("year").innerText = new Date().getFullYear();

$(function () {
    $(".form-input").each(function () {
      changeClass($(this));
    });
  
    $(".form-input").on("focusout", function () {
      changeClass($(this));
    });
  
    function changeClass($formInput) {
      if ($formInput.val().length > 0) {
        $formInput.addClass("has-value");
      } else {
        $formInput.removeClass("has-value");
      }
    }
  
    $(".date").datepicker();
  
    // Ensure the select box has the correct label behavior
    $(".select-wrapper select").on("change", function () {
      if ($(this).val() !== "none") {
        $(this).addClass("has-value");
      } else {
        $(this).removeClass("has-value");
      }
    });
  });
  