import React, { useEffect } from 'react';

const LinkedinBadge: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;
    script.defer = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="badge-base LI-profile-badge"
      data-locale="en_US"
      data-size="large"
      data-theme="light"
      data-type="HORIZONTAL"
      data-vanity="olivergomesjr"
      data-version="v1"
    >
      <a
        className="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/olivergomesjr?trk=profile-badge"
      >
        Oliver Gomes Jr
      </a>
    </div>
  );
};

export default LinkedinBadge;
