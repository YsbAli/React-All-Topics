// UI libreries like Ant Design, Material UI, Chakra UI, React-bootstrap

// Lets go with Ant Design

// to install ---> npm install antd --save

// import { Button, DatePicker, Space, version } from "antd";

// import 'antd/dist/reset.css';   .....should import to main.jsx

import { Button } from "antd";

const Design = () => {
  return (
    <>
      <div>
        <Button type="dashed">ANT Button</Button>
      </div>
    </>
  );
};

export { Design };
