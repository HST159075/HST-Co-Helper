function sendmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceid = "service_jrvv1wt";
    const templateid = "template_g4ob7rt";

    emailjs
        .send(serviceid, templateid, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message sent successfully");
        })
        .catch(err => console.log(err));
}

// Optional: Reference code for alternative usage
/*
emailjs.send("service_jrvv1wt", "template_870fjdd", templateParams)
  .then(() => {
    status.style.color = "green";
    status.textContent = "✅ মেসেজ সফলভাবে পাঠানো হয়েছে!";
    document.querySelector("form").reset();
  })
  .catch((err) => {
    status.style.color = "red";
    status.textContent = "❌ পাঠানো যায়নি। আবার চেষ্টা করুন।";
    console.error("EmailJS Error:", err);
  });
*/