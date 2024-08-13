const form = document.querySelector("form");
const fullName = document.getElementById("name");
const mail = document.getElementById("email");
const number = document.getElementById("number");
const message = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Name: ${fullName.value} \n Email: ${mail.value} 
  \n Mobile: ${number.value}\n Message: ${message.value}`;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "mishrapragya261998@gmail.com",
    Password: "C29EE50C3F714E94FBE63DB137F59615B899",
    To: 'mishrapragya261998@gmail.com',
    From: "mishrapragya261998@gmail.com",
    Subject: "Enquirey",
    Body: bodyMessage
  }).then(
    message => {
      if (message == 'OK') {
        Swal.fire({
          title: "Done",
          text: "Message sent successfully",
          icon: "success"
        });

      }

    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
})