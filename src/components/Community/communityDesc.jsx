import React from "react";
import PropTypes from "prop-types";

const CommunityDesc = ({ embedId }) => (
    <div>
       
  <div className="video-responsive">
     
    <iframe
      width="500"
      height="500"
      src={`https://www.youtube.com/embed/${'euK_xfaIoOo'}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Build a community"
    />
  </div>
  </div>
);

export default CommunityDesc;