import emailjs from 'emailjs-com'



export const Contact = () => {

    const handleSubmit = (e) ={
        e.preventDefault();


        emailjs.sendForm();
    }

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
  
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              placeholder="Tell me about the gig, show, or idea!"
              rows="5"
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
  