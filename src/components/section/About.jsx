import { FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import pic1 from '../../assets/pic1.jpeg';
import pic2 from '../../assets/pic2.jpeg';
import pic3 from '../../assets/pic3.jpeg';

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">About Jesse</h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Main Image */}
          <img
            src={pic1}
            alt="Jesse Yanase"
            className="w-72 h-96 object-cover rounded-2xl shadow-lg"
          />

          {/* Bio Text */}
          <div className="text-left text-lg text-gray-300 leading-relaxed">
            <p className="mb-4">
              My name is Jesse Yanase. I was born in Fukuoka, Japan, in 1994.
              I graduated from the University of Tokyo in 2017 and began
              working at Yoshimoto Kogyo, Japan’s largest entertainment
              company, as an agent for comedians.
            </p>

            <p className="mb-4">
              In 2022, I quit my job, moved to London, and started my career as
              a stand-up comedian. I'm a Japanese comic based in London. My
              style is alternative stand-up, and I perform in a sumo outfit.
            </p>

            <p className="mb-4">
              🎤 Finalist — Reading New Comedian of the Year 2025 <br />
              🎭 Quarterfinalist — LST New Comedian of the Year 2024 <br />
              🏆 Finalist — King Gong Comedy Store
            </p>

            <p>
              As seen at: <br />
              Top Secret Comedy Club, Up The Creek Comedy Club, and Big Belly
              Comedy Club.
            </p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center gap-8 text-3xl text-white">
          <a
            href="https://www.instagram.com/creepysumojapanese/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/hidehito.yanase"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://www.youtube.com/@creepysumojapanese"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
        </div>

        {/* Gallery */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <img
            src={pic2}
            alt="Performance 1"
            className="w-72 h-96 object-cover rounded-2xl shadow-xl"
          />
          <img
            src={pic3}
            alt="Performance 2"
            className="w-72 h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};
