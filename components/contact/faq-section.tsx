const faqs = [
  {
    question: "How do I register my drone?",
    answer: "Download the JCI app, create an account, and scan the QR code on your drone's packaging to register.",
  },
  {
    question: "What's covered under warranty?",
    answer: "Manufacturing defects and hardware failures are covered for 2 years. Crash damage is not covered.",
  },
  {
    question: "How do I update firmware?",
    answer: "Connect your drone to the JCI app. Updates will be prompted automatically when available.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to most countries. Check availability on our official e-commerce partners.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400">Quick answers to common questions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-navy-light border border-white/10 rounded-xl p-6">
              <h4 className="font-semibold mb-3 text-white">{faq.question}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
