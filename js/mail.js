function sendMail() {
    let params={
        name : document.getElementById("name").value,
        mail :document.getElementById("mail").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_3a82rsr", "template_ktpcyje", params)
    .then(function(response) {
        alert("E-postanız başarıyla gönderildi!");
        console.log("E-postanız başarıyla gönderildi!")
    })
    .catch(function(error) {
        alert("E-posta gönderilemedi. Hata kodu: " + error.status);
        console.log("E-posta gönderilemedi. Hata kodu: " + error.status)
    });


}