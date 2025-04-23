import React, { useState } from 'react';
import {Mail, Phone, MapPin, Send, User, MessageCircle, ExternalLink} from 'lucide-react';
const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Submitted', formData);
    setIsSubmitted(true);
  };
  const location = "Plot No.57, Ganesh Towers, Kakatiyanagar, Ashok Nagar, R C Puram, Telangana - 502032";
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-blue-900 to-blue-900 shadow-xl rounded-2xl overflow-hidden border border-blue-700 min-h-[500px]">
          <div className="bg-gradient-to-br from-blue-900 to-blue-900 p-10 text-white flex flex-col justify-between relative">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-300" />
                  <span className="text-gray-200">HR@vsvstechwaves.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-300" />
                  <span className="text-gray-200">+914040897477</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin size={24} className="text-blue-300 mr-2 flex-shrink-0" />
                  <span className="text-gray-200">{location}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 h-64 w-full rounded-lg overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15150.467462111996!2d78.30189099999999!3d17.5059585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb92a4013d1dbd%3A0x81b9e8255f4e8326!2sAshok%20Nagar%2C%20Ramachandrapuram%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1713937265086!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
                className="rounded-lg shadow-md"
              ></iframe>
            </div>
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/10 rounded-full"></div>
          </div>
          <div className="p-10 bg-gradient-to-br from-blue-900 to-blue-900 text-white">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-400 mb-6">
                  Have a question? We'd love to hear from you.
                </p>
                <div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full py-2 bg-transparent text-white border-b-2 ${
                        errors.name ? 'border-red-500' : 'border-blue-600'
                      } focus:border-cyan-400 transition outline-none`}
                    />
                  </div>
                  {errors.name && (
                    <div className="pl-8">
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className={`w-full py-2 bg-transparent text-white border-b-2 ${
                        errors.email ? 'border-red-500' : 'border-blue-600'
                      } focus:border-cyan-400 transition outline-none`}
                    />
                  </div>
                  {errors.email && (
                    <div className="pl-8">
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone Number"
                      className={`w-full py-2 bg-transparent text-white border-b-2 ${
                        errors.phone ? 'border-red-500' : 'border-blue-600'
                      } focus:border-cyan-400 transition outline-none`}
                    />
                  </div>
                  {errors.phone && (
                    <div className="pl-8">
                      <p className="text-red-500 text-sm">{errors.phone}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-gray-400 mt-2" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={4}
                      className={`w-full py-2 bg-transparent text-white border-b-2 ${
                        errors.message ? 'border-red-500' : 'border-blue-600'
                      } focus:border-cyan-400 transition outline-none resize-none`}
                    ></textarea>
                  </div>
                  {errors.message && (
                    <div className="pl-8">
                      <p className="text-red-500 text-sm">{errors.message}</p>
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition flex items-center justify-center space-x-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold text-blue-100">Message Sent Successfully!</h2>
                <p className="text-gray-300">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: '',
                    });
                    setErrors({});
                  }}
                  className="px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contactus;