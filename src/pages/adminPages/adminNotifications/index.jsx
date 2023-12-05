import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useEffect, useState } from "react";
import { getNotificationsList } from "../../../platform/api/notifications-api";

export const AdminNotifications = () => {
  const [notificationsForm, setNotificationsForm] = useState([]);

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    const result = await getNotificationsList();
    if (result.data) {
      setNotificationsForm(result.data);
    }
  };

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Notifications" />
      <div className="contentView">
        {notificationsForm.length ? (
          <div className="notificationsList">
            {notificationsForm.map((item, index) => {
              return <div className="notificationItem" key={index}>
                <p>{item.name}</p>
                <p>{item.email}</p>
                <p>{item.subject}</p>
                <div>{item.message}</div>
              </div>;
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};
