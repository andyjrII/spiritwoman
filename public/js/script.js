/* Form submission and popup */

document
  .getElementById('contact-form')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Send form data via fetch
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          subject: formData.get('subject'),
          source: formData.get('source'),
          message: formData.get('message'),
        }),
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
