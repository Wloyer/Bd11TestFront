import React, { useState } from 'react';

const faqData = [
  {
    question: "Combien de membres de l'équipe puis-je inviter ?",
    answer: "Vous pouvez inviter jusqu'à 2 utilisateurs supplémentaires sur le plan gratuit. Il n'y a pas de limite sur les membres de l'équipe pour le plan Premium."
  },
  {
    question: "Quelle est la taille maximale du fichier à télécharger ?",
    answer: "La taille maximale du fichier à télécharger est de 2 Go."
  },
  {
    question: "Comment réinitialiser mon mot de passe ?",
    answer: "Pour réinitialiser votre mot de passe, cliquez sur 'Mot de passe oublié' sur la page de connexion et suivez les instructions."
  },
  {
    question: "Puis-je annuler mon abonnement ?",
    answer: "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre compte utilisateur."
  },
  {
    question: "Fournissez-vous un support supplémentaire ?",
    answer: "Oui, nous offrons un support supplémentaire via notre plan de support premium."
  }
];

function FAQItem({ faq, index, toggleFAQ, isOpen }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between w-full text-left text-lg font-medium text-white"
        onClick={() => toggleFAQ(index)}
      >
        {faq.question}
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-500">{faq.answer}</p>}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 ">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center items-center mb-16">
          <div className="max-w-2xl text-center">
            <h2 className="text-4xl font-bold lg:text-5xl text-white">FAQ</h2>
            <p className="mt-4 text-white">Retrouvez les réponses aux questions les plus fréquemment posées.</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              toggleFAQ={toggleFAQ}
              isOpen={openIndex === index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
