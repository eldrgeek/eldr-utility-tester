import React, { useState } from "react";
import "./styles.css";
// import delayStream from "./delayStream";
const App = () => {
  const users = {};
  "Mike,Jess,Noel,Joe,Bill,Bob".split(",").forEach((name, index) => {
    const id = `session-${index}`;
    users[id] = { id, name };
  });
  const userByName = name => {
    let id;
    Object.keys(users).forEach(key => {
      if (users[key].name === name) id = key;
    });
    return id;
  };
  const usersByName = list => {
    return list.map(name => userByName(name)).filter(source => source);
  };
  const missingUsers = list => {
    return list.filter(name => !userByName(name)).join(",");
  };
  const command = "Noel, Jess, Fred=>Joe, Bill";
  const parser = command => {
    const result = command.split(/^(.*)=>(.*)$/);
    if (result) {
      const sources = result[1].split(",").map(name => name.trim());
      const destinations = result[2].split(",").map(name => name.trim());
      return missingUsers(sources) ? true : false;
    }
  };

  const makeBounds = (cols, rows, width, height) => {
    const bounds = [];
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        bounds.push({
          x: c * width,
          y: r * height,
          width,
          height
        });
      }
    }
    return bounds;
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {JSON.stringify(makeBounds(2, 2, 16, 9))}
      {/* <video width={200} ref={videoRef} autoPlay playsInline  /> */}
      {/* <video width={200} ref={video1Ref} autoPlay playsInline controls />
      <video width={200} ref={video2Ref} autoPlay playsInline controls /> */}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
