import emailjs from 'emailjs-com';
import { useRef } from 'react';

export const Contact = () => {

 const [formData, setForm]


  const SERVICE_ID = "your_service_id";
  const TEMPLATE_ID = "your_template_id";
  const PUBLIC_KEY = "your_public_key";

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          alert('Failed to send message, please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white px-4"
    >
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Want to add some absurd laughs, sumo swagger, and Japanese flair to your lineup?
          Book Jesse Yanase for your next gig, show, or collaboration. Let’s make your crowd cry-laugh.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <textarea
            name="message"
            placeholder="Tell me about the gig, show, or idea!"
            rows="5"
            required
            className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
          <button
            type="submit"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md"
          >
            Send it!
          </button>
        </form>
      </div>
    </section>
  );
};

  