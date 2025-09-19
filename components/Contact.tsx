"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [deviceInfo, setDeviceInfo] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const platform = navigator.platform;
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const screenRes = `${screenWidth}x${screenHeight}`;
    const now = new Date().toLocaleString();
    let connectionType = "Unknown";

    try {
      if ("connection" in navigator && navigator.connection) {
        const conn = navigator.connection as { effectiveType?: string };
        if (conn.effectiveType) {
          connectionType = conn.effectiveType;
        }
      }
    } catch {
      // Connection API not supported
    }

    const fullInfo = `
User Agent: ${userAgent}
Language: ${language}
Platform: ${platform}
Screen Resolution: ${screenRes}
Connection: ${connectionType}
Date & Time: ${now}
    `.trim();

    setDeviceInfo(fullInfo);
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          const mapUrl = `https://www.google.com/maps?q=${lat},${lon}`;

          const form = e.target as HTMLFormElement;
          const locationField = form.querySelector(
            'input[name="location"]'
          ) as HTMLInputElement;
          if (locationField) {
            locationField.value = mapUrl;
          }
          form.submit();
        },
        () => {
          (e.target as HTMLFormElement).submit();
        }
      );
    } else {
      (e.target as HTMLFormElement).submit();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-28 py-24 pb-6 max-md:px-6 max-md:py-24 bg-bg-contact"
    >
      <motion.div
        className="flex justify-evenly w-full gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-full mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl font-black text-center text-foreground mb-12">
            Contact Form
          </h3>

          <form
            action="https://formsubmit.co/kerolos.adel.eleshaa@gmail.com"
            className="w-full flex flex-col justify-center items-center"
            method="POST"
            target="hidden-frame"
            onSubmit={handleSubmit}
          >
            <div className="w-full gap-5 flex flex-col md:flex-row justify-center items-center mb-5">
              <motion.input
                type="text"
                name="name"
                placeholder="Full name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-5 text-sm rounded-2xl border-2 border-mted-foreground bg-foreground text-background hover:border-mted-foreground focus:border-mted-foreground focus:outline-none transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Email address"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-5 text-sm rounded-2xl border-2 border-mted-foreground bg-foreground text-background hover:border-mted-foreground focus:border-mted-foreground focus:outline-none transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="tel"
                name="phone"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-5 py-5 text-sm rounded-2xl border-2 border-mted-foreground bg-foreground text-background hover:border-mted-foreground focus:border-mted-foreground focus:outline-none transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>

            <motion.textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleInputChange}
              className="w-full h-32 resize-none rounded-2xl border-2 border-mted-foreground bg-foreground text-background hover:border-mted-foreground focus:border-mted-foreground focus:outline-none transition-all duration-300 px-5 py-5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
            <input type="hidden" name="device" value={deviceInfo} />
            <input type="hidden" name="location" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks For Submiting The Form"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New submission From Your Website"
            />

            <motion.button
              type="submit"
              className="rounded-2xl mt-10 w-[45%] h-12 text-sm bg-foreground text-background border-2 border-muted-foreground hover:bg-transparent hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Send />
              Send Message
            </motion.button>
          </form>

          <iframe name="hidden-frame" style={{ display: "none" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
