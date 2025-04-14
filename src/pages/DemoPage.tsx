import React, { useState } from "react";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    work_email: "",
    phone_number: "",
    team_size: "",
    help_needed: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase.from("company_data").insert([
        {
          company_name: formData.company_name,
          work_email: formData.work_email,
          name: formData.name,
          phone_number: formData.phone_number,
          team_size: parseInt(formData.team_size, 10),
          help_needed: formData.help_needed,
        },
      ]);

      if (error) {
        console.error("Supabase error:", error);
        alert("Error: " + error.message);
      } else {
        alert("Data submitted successfully!");
        setFormData({
          name: "",
          company_name: "",
          work_email: "",
          phone_number: "",
          team_size: "",
          help_needed: "",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong!");
    }
    setLoading(false);
  };

  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Schedule a Demo</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">See how Optifix can transform your business with AI-powered internships</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="max-w-2xl mx-auto glass-panel rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label htmlFor={key} className="block text-white mb-2">
                  {key.replace("_", " ").toUpperCase()}
                </label>
                {key === "help_needed" ? (
                  <textarea id={key} rows={4} value={formData[key]} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none" placeholder="Tell us about your needs" required></textarea>
                ) : (
                  <input type={key === "team_size" ? "number" : "text"} id={key} value={formData[key]} onChange={handleChange} className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:border-neon-blue focus:outline-none" placeholder={`Enter ${key.replace("_", " ")}`} required />
                )}
              </div>
            ))}
            <button type="submit" disabled={loading} className={`w-full px-8 py-4 rounded-full text-white transition-all duration-300 ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-neon-purple/20 border border-neon-purple hover:bg-neon-purple/30 neon-glow"}`}>
              {loading ? "Submitting..." : "Schedule Demo"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}