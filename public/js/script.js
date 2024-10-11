document
  .getElementById('contact-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');

    // Gather form data into an object
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value || 'Not provided', // Optional field
      subject: form.subject.value,
      source: form.source.value,
      message: form.message.value,
    };

    // Send form data via fetch
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Show popup
        document.getElementById('popup').classList.remove('hidden');
        // Clear form
        form.reset();
      } else {
        alert('Error sending email: ' + (await response.text()));
      }
    } catch (error) {
      alert('Something went wrong: ' + error.message);
    }
  });

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}
