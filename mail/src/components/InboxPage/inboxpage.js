import React from "react";
import { useMail } from "../../contexts/MailContext";
import "../../styles.css";

function InboxPage() {
  const { showedMail } = useMail();
  return (
    <div className="messageDiv ">
      <div className="inboxdiv messageDiv ">
        <h1 className="h1">Me Again</h1>
        <ul className="mailInbox-list">
          {<li className="inboxpage">{showedMail.content}</li>}
        </ul>
      </div>
    </div>
  );
}

export default InboxPage;
