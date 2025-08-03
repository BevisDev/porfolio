export default function Contact() {
  return (
    <section
      id="contact"
      className="px-8 py-20 bg-gray-800 text-gray-300 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="mb-8">Feel free to reach out via email or social media.</p>
      <a
        href="mailto:your.email@example.com"
        className="inline-block px-6 py-3 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Say Hello
      </a>
    </section>
  );
}
