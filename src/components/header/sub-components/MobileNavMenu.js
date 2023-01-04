import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
            {t("shop")}
          </Link>
          
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>
            {t("About Us")}
          </Link>
        </li>
       
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/blog-no-sidebar"}>
            {t("blog")}
          </Link>
          
          
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>
            {t("contact_us")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
