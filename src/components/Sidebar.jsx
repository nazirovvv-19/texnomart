import { Button, Checkbox, Collapse } from "antd";
import React, { useState } from "react";

function Sidebar({ productsState }) {
  const [extend, setExtend] = useState(false);
  return (
    <div className="mt-7">
      <Collapse
        items={productsState.filter.map((item) => {
          return {
            key: item.id,
            label: (
              <span className="flex justify-between">
                <span className="font-bold">{item.name}</span>
                <span>{item.count}</span>
              </span>
            ),
            children: (
              <div>
                {extend === false && item.values.length > 10
                  ? item.values.slice(0, 10).map((item) => {
                      return <div>
                        <Checkbox>{item.value}</Checkbox>;
                      </div>
                    })
                  : item.values.map((item) => {
                      return <div>
                         <Checkbox>{item.value}</Checkbox>;
                      </div>
                    })}
                {item.values.length >= 10 ? (
                  <Button
                    onClick={() => {
                      setExtend(!extend  );
                    }}
                  >
                   {!extend ? "Koproq ko'rsatish" :"Yashirish"}
                  </Button>
                ) : null}
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default Sidebar;