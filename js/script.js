function SendMail() {
    var params = {
        from_name: document.getElementById("name").value,
        email_id: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }
    emailjs.send("default_service", "template_lkzlpjf", params).then(function (res) {
        alert("Success!" + res.status);
    })
}