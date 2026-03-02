import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    const contactInfo = [
        {
            icon: FaPhone,
            title: 'Phone',
            details: '+94 34 72 23666',
            link: 'tel:+94347223666',
        },
        {
            icon: FaEnvelope,
            title: 'Email',
            details: 'sales@uniquein.lk',
            link: 'mailto:sales@uniquein.lk',
        },
        {
            icon: FaMapMarkerAlt,
            title: 'Address',
            details: 'No. 15, Uyankale Road, Panadura, Sri Lanka',
            link: '#',
        },
        {
            icon: FaClock,
            title: 'Business Hours',
            details: 'Mon - Sat: 8:00 AM - 6:00 PM',
            link: '#',
        },
    ];

    return (
        <section id="contact" className="bg-industrial-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary-50 to-transparent opacity-50"></div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm mb-4">
                        GET IN TOUCH
                    </div>
                    <h2 className="section-heading">
                        Let's Start a Conversation
                    </h2>
                    <p className="section-subheading mx-auto mt-4">
                        Ready to enhance your industrial safety and efficiency? Contact us today
                        for a free consultation and quote.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left - Contact Info */}
                    <div>
                        {/* Contact Cards */}
                        <div className="space-y-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="group flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <info.icon className="text-2xl text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-display font-bold text-lg text-industrial-900 mb-1">
                                            {info.title}
                                        </h4>
                                        <p className="text-industrial-600">
                                            {info.details}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-br from-industrial-900 to-industrial-800 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-display font-bold mb-4">
                                Need Immediate Assistance?
                            </h3>
                            <p className="text-industrial-300 mb-6">
                                Our team is available 24/7 for emergency support and urgent inquiries.
                            </p>
                            <a
                                href="tel:+94112345678"
                                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                <FaPhone className="mr-2" />
                                Call Now: +94 777 00 4525
                            </a>
                        </div>
                    </div>

                    {/* Right - Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8">
                        <h3 className="text-2xl font-display font-bold text-industrial-900 mb-6">
                            Send Us a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                        placeholder="+94 XX XXX XXXX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-industrial-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-industrial-700 mb-2">
                                    Your Message *
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-industrial-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center text-lg"
                            >
                                <FaPaperPlane className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Maps Placeholder */}
                <div className="mt-16 rounded-2xl overflow-hidden shadow-xl">
  <div className="bg-industrial-200 h-96">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8551305018756!2d79.90422647485556!3d6.908448093094569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b9e7ef0f0cd%3A0x7a8dd13cac357c2d!2sUnique%20Industrial%20Solutions!5e0!3m2!1sen!2slk!4v1733826599278!5m2!1sen!2slk"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

            </div>
        </section>
    );
};

export default Contact;
