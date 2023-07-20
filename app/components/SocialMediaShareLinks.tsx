// social media share links (copy link, facebook, twitter, whatsApp)

import React from "react";

interface SocialMediaShareLinksProps {
  className?: string;
  url: string;
  title: string;
}

export const SocialMediaShareLinks: React.FC<SocialMediaShareLinksProps> = ({
  className,
  url,
  title,
}) => {
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "facebook-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
      "twitter-share-dialog",
      "width=800,height=600"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${title} ${url}`,
      "whatsapp-share-dialog",
      "width=800,height=600"
    );
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-1 ${className}`}
    >
      <p className="text-sm uppercase font-bold text-gray-700 text-opacity-70">
        Compartir:
      </p>

      <nav className="flex gap-3">
        <button
          className="flex items-center justify-center w-7 h-7 text-2xl text-white bg-gray-500 rounded-full"
          onClick={() => navigator.clipboard.writeText(url)}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M17 7H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2zm-1 10H8v-1h8v1zm0-3H8v-1h8v1zm0-3H8V9h8v2z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-7 h-7 text-2xl text-white bg-blue-500 rounded-full"
          onClick={shareOnFacebook}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M12 2C6.5 2 2 6.5 2 12c0 4.8 3.5 8.8 8 9.6V15H7v-3h3V9.8c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3l-.5 3h-2.5v7.6c4.5-.8 8-4.8 8-9.6C22 6.5 17.5 2 12 2z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-7 h-7 text-2xl text-white bg-blue-300 rounded-full"
          onClick={shareOnTwitter}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-7 h-7 text-2xl text-white bg-green-500 rounded-full"
          onClick={shareOnWhatsApp}
        ></button>
      </nav>
    </div>
  );
};
