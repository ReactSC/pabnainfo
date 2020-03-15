import React from "react";
import { useLocation } from "react-router-dom";
import { SubCategoryContext } from "./Contexts";
import axios from "axios";
import { API_ROOT } from "../../config";

const SubCategoryProvider = props => {
  const location = useLocation();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    fetch(API_ROOT+"/pabnainfo/api/view/sub_categories.php")
      .then(x => x.json())
      .then(y => {
        setData(y);
      });
  }, [location]);

  const addSubCategory = data => {
    axios.post(API_ROOT+"/pabnainfo/api/add/sub_category.php", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      data: { label: "Dinesh", catID: 1 }
    });
  };

  const rmSubCategory = id => {
    console.log(id);
  };

  const access = {
    subCategories: data,
    addSubCategory,
    rmSubCategory
  };

  return (
    <SubCategoryContext.Provider value={access}>
      {props.children}
    </SubCategoryContext.Provider>
  );
};

export default SubCategoryProvider;
