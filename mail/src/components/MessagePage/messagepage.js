import React ,{useEffect}from "react";
import { useMail } from "../../contexts/MailContext";
import { Link } from "react-router-dom";
import "../../styles.css";

function MessagePage() {
  const { mails, ShowMail, isReadMail, ReadingMail, kullanici } =useMail();
  useEffect(() => {
    ReadingMail();
  });
  ;
  return (
   
    <div className="messageDiv">
     
      <h1 className="messageh1">
        {kullanici.toUpperCase()} has {isReadMail} unread messages{" "}
      </h1>
      <div className="h1">Message</div>

      {mails.map((mail) => (
        <div key={mail._id} onClick={() => ShowMail(mail._id)}>
          <ul className="mail-list">
            <div className="read">
              {mail.isRead === true ? "Read Mail " : "Unread Mail"}
            </div>

            <div>
              <Link className="inboxpage" to="inboxpage">
                <li>
                  <h3 className="h3">Message</h3>
                  {mail.content.split(" ", 3).slice(0, 3).join(" ") + "..."}
                </li>
              </Link>
            </div>
            <Link to="inboxpage">
              <hr className="hr" />
            </Link>
            <div>
              <Link className="inboxpage" to="inboxpage">
                <h3 className="h3">Me Again</h3>
                <li>{mail.subject}</li>
              </Link>
            </div>
          </ul>
        </div>
      ))}
    </div>
  );

}

export default MessagePage;
