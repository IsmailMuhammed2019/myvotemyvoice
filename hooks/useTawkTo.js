   // src/hooks/useTawkTo.js
   "use client"

   import { useEffect } from 'react';

   const useTawkTo = () => {
       useEffect(() => {
           window.Tawk_API = window.Tawk_API || {};
           window.Tawk_LoadStart = new Date();

           const tawkToScript = document.createElement('script');
           tawkToScript.async = true;
           tawkToScript.src = `https://embed.tawk.to/${process.env.TAWKTO_ID}/default`; // Use environment variable
           tawkToScript.charset = 'UTF-8';
           tawkToScript.setAttribute('crossorigin', '*');

           document.body.appendChild(tawkToScript);

           return () => {
               document.body.removeChild(tawkToScript);
           };
       }, []);
   };

   export default useTawkTo;