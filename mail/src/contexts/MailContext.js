import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MailContext = createContext();

export const MailProvider = ({ children }) => {
  const [kullanici, setKullanici] = useState("ahmet");
  const [showedMail, setShowedMail] = useState([]);
  const [isReadMail, setIsReadMail] = useState(0);
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/mails/message?user=${kullanici}`
        );
        setMails(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMails();
  }, [kullanici]);

  const ReadingMail = () => {
    let unread = 0;

    mails.map((mail) => {
      if (mail.isRead === false) {
        unread = unread + 1;
      }
      return mail;
    });
    setIsReadMail(unread);
  };
  const ShowMail = (id) => {
    const cloned_mails = [...mails];
    const itemIndex = cloned_mails.findIndex((mail) => mail._id === id);
    const item = mails[itemIndex];
    setShowedMail(item);
    changeRead(id);
  };
  const changeRead = (id) => {
    const cloned_mails = [...mails];
    const itemIndex = cloned_mails.findIndex((mail) => mail._id === id);
    const item = mails[itemIndex];
    item.isRead = true;
    updateAxios(item);
    setMails(cloned_mails);
  };
  const updateAxios = async (item) => {
    const body = {
      subject: item.subject,
      content: item.content,
      isRead: item.isRead,
    };
    try {
      const response = await axios.patch(
        "http://localhost:5000/mails/" + item._id,
        body
      );
      console.log("Çalıştı " + response);
    } catch (err) {
      console.log(err);
    }
  };
  const values = {
    mails,
    setMails,
    ReadingMail,
    isReadMail,
    ShowMail,
    changeRead,
    showedMail,
    kullanici,
    setKullanici,
  };
  return <MailContext.Provider value={values}>{children}</MailContext.Provider>;
};
export const useMail = () => {
  const context = useContext(MailContext);
  if (context === undefined) {
    throw new Error("useTodo hook must call inside TodoProvider component");
  }
  return context;
};
