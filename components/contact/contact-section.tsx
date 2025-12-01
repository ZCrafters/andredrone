"use client"

import type React from "react"

import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    contactMethod: "",
    message: "",
    terms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Validation 1: Full Name must not be empty
    if (formData.fullName.length === 0 || formData.fullName.trim().length === 0) {
      newErrors.fullName = "Please enter your full name"
    }

    // Validation 2: Phone must not be empty and contain only digits (no regex)
    if (formData.phone.length === 0) {
      newErrors.phone = "Please enter your phone number"
    } else {
      let phoneValid = true
      for (let i = 0; i < formData.phone.length; i++) {
        const char = formData.phone.charAt(i)
        if (!"0123456789".includes(char)) {
          phoneValid = false
          break
        }
      }
      if (!phoneValid) {
        newErrors.phone = "Phone number must contain only digits"
      }
    }

    // Validation 3: Email must contain @ and . after @ (no regex)
    if (formData.email.length === 0) {
      newErrors.email = "Please enter your email address"
    } else {
      const atIndex = formData.email.indexOf("@")
      if (atIndex === -1) {
        newErrors.email = "Email must contain an @ symbol"
      } else {
        const afterAt = formData.email.substring(atIndex + 1)
        if (afterAt.indexOf(".") === -1) {
          newErrors.email = "Email must contain a . after the @ symbol"
        }
      }
    }

    // Validation 4: Subject must be selected
    if (formData.subject === "" || formData.subject === "Select subject") {
      newErrors.subject = "Please select a subject"
    }

    // Validation 5: Contact method must be selected
    if (formData.contactMethod === "") {
      newErrors.contactMethod = "Please select a preferred contact method"
    }

    // Validation 6: Message must have min 20 characters
    if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters long"
    }

    // Validation 7: Terms must be checked
    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms of Service"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
    }
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      subject: "",
      contactMethod: "",
      message: "",
      terms: false,
    })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section className="py-20 bg-navy-light">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">Get Support</h2>
            <p className="text-gray-400 mb-8">
              Choose the best way to reach us. Our team typically responds within 24 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: "📧", title: "Email Support", info: "support@jci-drones.com" },
                { icon: "📞", title: "Phone Support", info: "+62 21 1234 5678", note: "Mon-Fri, 9AM-6PM WIB" },
                {
                  icon: "💬",
                  title: "WhatsApp",
                  info: "+62 812 3456 7890",
                  note: "Quick responses during business hours",
                },
                {
                  icon: "📍",
                  title: "Office Address",
                  info: "JCI Tower, Jl. Sudirman No. 123",
                  note: "Jakarta Pusat, Indonesia 10220",
                },
              ].map((method) => (
                <div key={method.title} className="flex gap-4 p-5 bg-navy border border-white/10 rounded-xl">
                  <div className="text-2xl w-12 h-12 bg-primary/15 rounded-xl flex items-center justify-center">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                    <p className="text-gray-300 text-sm">{method.info}</p>
                    {method.note && <span className="text-xs text-gray-500">{method.note}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-navy border border-white/10 rounded-2xl p-10">
            {!submitted ? (
              <>
                <h2 className="text-2xl font-bold mb-8 text-white">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`w-full px-4 py-3.5 bg-navy-light border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.fullName ? "border-red-500" : "border-white/15"}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className={`w-full px-4 py-3.5 bg-navy-light border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.phone ? "border-red-500" : "border-white/15"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3.5 bg-navy-light border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all ${errors.email ? "border-red-500" : "border-white/15"}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 bg-navy-light border rounded-lg text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer ${errors.subject ? "border-red-500" : "border-white/15"}`}
                    >
                      <option value="">Select subject</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="warranty">Warranty Claim</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  {/* Contact Method Radio */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Preferred Contact Method <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap gap-6">
                      {["email", "phone", "whatsapp"].map((method) => (
                        <label key={method} className="flex items-center gap-3 cursor-pointer text-gray-300">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={formData.contactMethod === method}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <span className="w-5 h-5 border-2 border-gray-600 rounded-full relative peer-checked:border-primary after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2.5 after:h-2.5 after:bg-primary after:rounded-full after:scale-0 peer-checked:after:scale-100 transition-all" />
                          <span className="capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                    {errors.contactMethod && <p className="text-red-500 text-sm mt-1">{errors.contactMethod}</p>}
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Please describe your inquiry in detail (minimum 20 characters)"
                      className={`w-full px-4 py-3.5 bg-navy-light border rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y ${errors.message ? "border-red-500" : "border-white/15"}`}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    <p className={`text-sm mt-1 ${formData.message.length >= 20 ? "text-green-500" : "text-gray-600"}`}>
                      {formData.message.length} / 20 minimum characters
                    </p>
                  </div>

                  {/* Terms Checkbox */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <span className="mt-0.5 w-5 h-5 min-w-[20px] border-2 border-gray-600 rounded flex items-center justify-center peer-checked:bg-primary peer-checked:border-primary transition-all">
                        {formData.terms && <span className="text-white text-xs font-bold">✓</span>}
                      </span>
                      <span className="text-sm text-gray-400 leading-relaxed">
                        I agree to JCI&apos;s{" "}
                        <a href="#" className="text-primary underline">
                          Terms of Service
                        </a>{" "}
                        and understand how my personal data will be handled according to the{" "}
                        <a href="#" className="text-primary underline">
                          Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                    {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Submit Message
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to JCI&apos;s Terms of Service and how we handle your personal
                    data.
                  </p>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">✓</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for contacting JCI. Our support team will respond to your inquiry within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-navy-light text-white font-semibold rounded-lg border border-gray-600 hover:border-primary transition-all"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
