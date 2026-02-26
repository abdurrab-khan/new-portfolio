import React from "react";
import TabContainer from "./TabContainer";

function Contact() {
  return (
    <TabContainer titleImagePath="/assets/windows-95/applications/web-apps/portfolio/contact-title.png">
      <div className="flex size-full h-76! flex-1 flex-col items-start justify-between">
        <div>Hello</div>
        <div className="w-full text-end">World</div>
      </div>
    </TabContainer>
  );
}

export default Contact;
