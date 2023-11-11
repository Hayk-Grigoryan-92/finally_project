import "./style.scss";
import icon from '../../../../assets/images/user_icon.jpg'

export const DetailsReview = () => {
  return (
    <div className="G_container detailsReview">
      <div className="detailsLeftSide">
        <h4>1 review for "Product Name"</h4>
        <div className="leftSideContent">
          <div className="detailsIcon">
            <div  style={{backgroundImage:`url('${icon}')`}}/>
          </div>
          <div className="detailsText">
            <h6>John Doe
                <small>01 Jan 2045</small>
            </h6>
            <p>
              Diam amet duo labore stet elitr ea clita ipsum, tempor labore
              accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed
              sed eirmod ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="detailsRightSide"></div>
    </div>
  );
};
