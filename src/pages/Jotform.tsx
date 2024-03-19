import { useEffect } from 'react';

const JotFormScript = () => {
  // Use useEffect for proper script loading after component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://form.jotform.com/jsform/240785032928461';
    document.body.appendChild(script);

    // Optionally, clean up the script on unmount for better memory management
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // Return an empty JSX to avoid rendering unnecessary elements
};

export default JotFormScript;
