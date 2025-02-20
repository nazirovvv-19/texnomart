import React, { useState } from "react";
import Menu01Icon from "../icons/menu-01-stroke-rounded";
import UserIcon from "../icons/user-stroke-rounded (1)";
import FavouriteIcon from "../icons/favourite-stroke-rounded (1)";
import useSmthStore from "./myStore/store";
import Cancel01Icon from "../icons/cancel-01-stroke-rounded (1)";
import { Link } from "react-router";
import Savatcha from "./Savatcha";
import LikeSavati from "./LikeSavati";
import Kirish from "./Kirish";

function HeaderSec({ toggleLike }) {
  const { count } = useSmthStore();
  const [catalog, setCatalog] = useState(false);

  return (
    <div className="bg-gray-100 p-3 pt-6 ">
      <div className="container mx-auto px-10">
        <div className="flex items-center  justify-between ">
          <Link to={"/"}>
            <img
              width={200}
              src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
              alt=""
            />
          </Link>
          <div
            onClick={() => {
              setCatalog(!catalog);
            }}
            className="flex gap-1.5 items-center bg-amber-400 px-5 py-2 w-30 rounded-md hover:cursor-pointer"
          >
            {catalog ? <Cancel01Icon /> : <Menu01Icon />}
            <p>Katalog</p>
          </div>

          <input
            type="text"
            className="border-amber-400 border-2 px-3 py-1.5 w-[600px] rounded-xl outline-0"
            placeholder="Qidirish "
          />
          <div className="flex flex-col items-center">
            <Kirish/>
            <p>Kirish</p>
          </div>
          <LikeSavati />
          <Savatcha />
        </div>
      </div>
    </div>
  );
}

export default HeaderSec;
