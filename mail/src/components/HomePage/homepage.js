import React from "react";
import { useMail } from "../../contexts/MailContext";
import { Link } from "react-router-dom";

function HomePage() {
  const { mails, isReadMail, ReadingMail, user } = useMail();
  ReadingMail();
  return (
    <div className="homeContainer nameDiv">
      <h2 className="homeItem homeItem2">HELLO {user.toUpperCase()}</h2>
      <label className="homeItem label1">
        You have {isReadMail} unreade messages out of {mails.length} total{" "}
      </label>
      <div className="homeItem">
        <button className="button homeItem2">
          <Link className="inboxpage" to="messagepage">
            View Messages
          </Link>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
