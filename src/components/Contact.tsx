import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-darker to-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Get in Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-dark-lighter p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <a href="mailto:vaibhav23@iitk.ac.in" className="text-gray-400 hover:text-primary">
                      vaibhav23@iitk.ac.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <a href="tel:+919125156329" className="text-gray-400 hover:text-primary">
                      +91 912-5156-329
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-primary mr-4" size={24} />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400">Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-dark-lighter border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}