import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phone = '923262176836';
  const message = encodeURIComponent(
    'Hi Techaz Solutions! I want to discuss a project with your team.'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-6 left-6 z-50 flex items-center gap-0"
    >
      {/* Tooltip */}
      <span className="pointer-events-none absolute left-16 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg">
        Chat with us
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 animate-ping" />

      {/* Button */}
      <span className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 text-white flex items-center justify-center shadow-lg shadow-emerald-500/40 transition-transform duration-300 group-hover:scale-110">
        <FaWhatsapp className="h-7 w-7" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
