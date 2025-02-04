import React, { useState } from "react";
import { Collapse, Checkbox } from "antd";

const { Panel } = Collapse;

function CheckBox(props) {
  const [Checked, setChecked] = useState([]);
  // ※※※ 자식 컨포넌트의 값은 부모 컨포넌트로 전해야 재대로 동작한다. ※※※

  const handleToggle = (value) => {
    // 누른 것의 Index를 구하고
    const currentIndex = Checked.indexOf(value);
    // 전체 Checcked된 State에서 현재 누른 Checkbox가 이미 있다면
    const newChecked = [...Checked];

    // State 넣어준다.
    if (currentIndex === -1) {
      newChecked.push(value);
      // 빼주고
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  const renderCheckboxLists = () =>
    props.list &&
    props.list.map((value, index) => (
      <React.Fragment key={index}>
        <Checkbox
          onChange={() => handleToggle(value._id)}
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div className="cardRadius">
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="동물 분류 체크" key="1">
          {renderCheckboxLists()}
        </Panel>
      </Collapse>
    </div>
  );
}

export default CheckBox;
