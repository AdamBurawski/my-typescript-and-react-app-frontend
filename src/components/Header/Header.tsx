import React from "react";

import { Link } from "react-router-dom";

export const Header = () => (
  <>
    <h1>Santa App</h1>
    Menu: <Link to="/test">Test</Link> | <Link to="/gift">Gifts</Link>
    <hr />
  </>
);