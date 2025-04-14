import React, { useState } from "react";
import { motion } from "framer-motion";

// Supabase Client
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    interests: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.resume) {
      alert("Please upload a resume!");
      setLoading(false);
      return;
    }

    try {
      // Step 1: Upload Resume to Supabase Storage
      const fileName = `${formData.fullName}_${formData.phone}.pdf`;
      const { data, error } = await supabase.storage
        .from("resumes")
        .upload(fileName, formData.resume);

      if (error) throw error;

      // Step 2: Generate Public URL
      const resumeUrl = `${SUPABASE_URL}/storage/v1/object/public/resumes/${fileName}`;

      // Step 3: Insert Data into Supabase Table
      const formattedMessage = formData.message?.trim() || "N/A"; // Ensure it's always a string

      const { error: insertError } = await supabase.from("user_data").insert([
        {
          "Full Name": formData.fullName,
          Email: formData.email,
          "Phone Number": formData.phone,
          "Areas of Interest": formData.interests,
          Interested: formData.message?.trim() || "N/A",
          resume_url: resumeUrl,
        },
      ]);
      
      if (insertError) {
        console.error("Supabase Insert Error:", insertError);
        alert("Error: " + JSON.stringify(insertError, null, 2));
      } else {
        alert("Application submitted successfully!");
      }

      alert("Application submitted successfully!");
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Apply for Internships
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Take the first step towards your dream career
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto glass-panel rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
              <input type="text" id="fullName" value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Your full name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="your@email.com" required />
            </div>
            <div>
              <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Your phone number" required />
            </div>
            <div>
              <label htmlFor="resume" className="block text-white mb-2">Resume/CV (pdf form only)</label>
              <input type="file" id="resume" onChange={handleFileChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                accept=".pdf,.doc,.docx" required />
            </div>
            <div>
              <label htmlFor="interests" className="block text-white mb-2">
                Areas of Interest
              </label>
              <select
                id="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                required
              >
                <option value="">Select an area</option>
                <option value="aiml">AI/ML</option>
                <option value="webdev">Web Development</option>
                <option value="software-engg">Software Engineering</option>
                <option value="software">Software Development</option>
                <option value="marketing">Digital Marketing</option>
                <option value="design">UI/UX Design</option>
                <option value="content">Content Strategy</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">Why should we consider you?</label>
              <textarea id="message" value={formData.message} onChange={handleChange} rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none"
                placeholder="Tell us about yourself and why you're interested in this opportunity" required></textarea>
            </div>
            <button type="submit"
              className="w-full px-8 py-4 bg-neon-blue/20 border border-neon-blue rounded-full text-white hover:bg-neon-blue/30 transition-all duration-300 neon-glow"
              disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
