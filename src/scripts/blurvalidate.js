function valid() {
    var $firstName = $("input[name=firstname]");
    var $lastName = $("input[name=lastname]");
    var $mail = $("input[name=mail]");
    var $phone = $("input[name=phone]");
    var $date = $("input[name=date]");
    var $data = {};
    $data.firstName = $("input[name=firstname]").val();
    $data.lastName = $("input[name=lastname]").val();
    $data.mail = $("input[name=mail]").val();
    $data.phone = $("input[name=phone]").val();
    $data.date = $("input[name=date]").val();
    
    
    $firstName.blur(function() {
        if (!$data.firstName.length) {
            $('.error-firstname').html("Please, input your First Name");
        } else {
            $('.error-firstname').html("");
        }
    });
    $lastName.blur(function() {
        if (!$data.lastName.length) {
            $('.error-lastname').html("Please, input your Last Name");
        } else {
            $('.error-lastname').html("");
        }
    });
    $mail.blur(function() {
        var isValidMail = $data.mail.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        if (!$data.mail.length || !isValidMail) {
            $('.error-mail').html("Please, input your E-mail correctly");
        } else {
        $('.error-mail').html("");
        }
    });
    $phone.blur(function() {
        if (!$data.phone.length) {
            $('.error-phone').html("Please, input your phone");
        } else {
        $('.error-phone').html("");
        }   
    });
    $date.blur(function() {
        if (!$data.date.length) {
            $('.error-date').html("Please, input current date");
        } else {
        $('.error-date').html("");
        }
    });
}