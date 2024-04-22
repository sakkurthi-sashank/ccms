import Image from 'next/image'

export default function HomePage() {
  return (
    <div
      style={{ textAlign: 'center' }}
      className="background flex flex-col items-center justify-between space-y-12 pt-10"
    >
      <div className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
        Court Case Management System
      </div>
      <div className="w-1/2">
        <Image
          src="https://www.icj-cij.org/sites/default/files/homebanner.jpg"
          alt=""
          className="h-[500px] w-full overflow-hidden rounded-md object-cover"
          width={500}
          height={500}
        />
      </div>

      <section className="space-y-10 bg-gray-100 p-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">Why Choose Our System?</h2>
        <p className="mb-4">
          Our system provides a comprehensive suite of tools designed to
          streamline the management of court cases, enhance communication, and
          improve overall judicial efficiency.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded bg-white p-4 shadow">
            <h3 className="font-semibold">Real-Time Updates</h3>
            <p>Stay updated with real-time case progress and notifications.</p>
          </div>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="font-semibold">Secure Access</h3>
            <p>
              All data is securely stored and accessible only to authorized
              personnel.
            </p>
          </div>
          <div className="rounded bg-white p-4 shadow">
            <h3 className="font-semibold">Efficient Case Handling</h3>
            <p>Automate routine tasks and focus more on case resolutions.</p>
          </div>
        </div>
      </section>

      <section className="space-y-10 bg-white p-6 text-center">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded p-4 shadow">
            <p>
              This system has revolutionized how we manage our court cases. The
              real-time updates and secure access are game changers!
            </p>
            <cite>— Judge Smith</cite>
          </div>
          <div className="rounded p-4 shadow">
            <p>
              Efficient, reliable, and user-friendly. Highly recommended for any
              judicial system looking to improve their case management.
            </p>
            <cite>— Attorney Johnson</cite>
          </div>
          <div className="rounded p-4 shadow">
            <p>
              A robust system that handles all our needs seamlessly. The support
              team is also very helpful and responsive.
            </p>
            <cite>— Clerk Emily</cite>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4 text-left">
          <div>
            <h3 className="font-semibold">How secure is the system?</h3>
            <p>
              The system uses advanced encryption and multi-factor
              authentication to ensure that all data is protected.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Can I access the system remotely?</h3>
            <p>
              Yes, our system is cloud-based and can be accessed from anywhere
              with an internet connection.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Is there a mobile app?</h3>
            <p>
              Yes, we offer a mobile app that allows you to manage cases and
              receive updates on the go.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 text-center">
        <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="rounded border p-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="rounded border p-2"
          />
          <textarea
            placeholder="Your Message"
            className="rounded border p-2"
          ></textarea>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  )
}
