import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { SizeContent } from "./components/size-content";
import { ColorContent } from "./components/color-content";

export const AdminSettings = () => {
  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Settings" />
      
      <div className="contentView">
        <SizeContent />
        <ColorContent/>
      </div>
    </div>
  );
};
