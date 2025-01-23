function sendMail() {
    var params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
    };

    const serviceID = "service_f9yz9zh";
    const templateID = "template_k2tzrbh";

    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            console.log("Email sent successfully:", res); // Log success response
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send email:", err); // Log error details
            alert("An error occurred while sending the message. Please try again.");
        });
}
