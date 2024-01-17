import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { useEffect, useState } from "react";
import { getNotificationsList } from "../../../platform/api/notifications-api";
import { Loader } from "../../../components/loader";

export const AdminNotifications = () => {
  const [notificationsForm, setNotificationsForm] = useState([]);
  const [pageLoader, setPageLoader] = useState(true)

  useEffect(() => {
    getNotifications();
  }, []);

  const getNotifications = async () => {
    setPageLoader(true)
    const result = await getNotificationsList();
    if (result.data) {
      setNotificationsForm(result.data);
      setPageLoader(false)
    }
  };

  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Notifications" />
      <div className="contentView">
        {notificationsForm.length && !pageLoader ? (
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
        ) : <div style={{minHeight:'100vh'}}>
        <Loader/>
      </div>}
      </div>
    </div>
  );
};
