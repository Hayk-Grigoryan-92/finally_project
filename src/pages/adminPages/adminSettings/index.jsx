import "./style.scss";
import { AdminPageTittle } from "../../../components/adminPageTittle";
import { SizeContent } from "./components/size-content";

export const AdminSettings = () => {
  return (
    <div className="adminContent">
      <AdminPageTittle tittle="Settings" />
      <div className="contentView">
        <SizeContent />

        {/* <div className="colorSection">
          <div className="settingsHeader">
            <div className="addOption">
              <button onClick={() => setIsOpenColorModal(true)}>Add Colors</button>
            </div>
            {settingsForm.length ? (
              <div className="settingsButtons">
                <button onClick={() => handleEdit()}>Edit</button>
                <button>Delete</button>
              </div>
            ) : null}
          </div>

          {settingsForm.length ? (
            <div className="colorSettingsList">
              {settingsForm.map((item, index) => {
                return (
                  <div className="settingsItem" key={index}>
                    <div className="setting">
                      <label>
                        <div className="checkContainer" onClick={addCheck}>
                          <div
                            className="itemColor"
                            style={{ backgroundColor: `${item.color}` }}
                          ></div>
                          <input type="checkbox" />
                        </div>
                        <div className="colorName">
                          <p>{item.name}</p>
                        </div>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null} */}
        {/* </div> */}
      </div>

      {/* {isOpenColorModal ? (
      //   <Modal onClose={closeDialog} title={"Add Color"}>
      //     <ManageSettings
      //       updateColorsList={getSettingColorsList}
      //       onClose={closeDialog}
      //       manageData={selectedItem}
      //     />
      //   </Modal>
      // ) : null} */}
    </div>
  );
};
