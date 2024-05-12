import React from "react";

const Assignment1 = () => {
  return (
    <div style={{ width: "460px" }}>
      <div style={{ background: "cyan", height: "230px" }}>
        <img
          style={{
            width: "100px",
            borderRadius: "4px",
            height: "150px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          src="https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg"
          alt="cat"
        />
      </div>
      <div style={{ background: "pink", margin: "0" }}>
        <h4 style={{ margin: "-1px" }}>Lorrie Corrie</h4>
        <span>32</span>
        <p>London</p>
        <footer
          style={{
            display: "flex",
            background: "grey",
            justifyContent: "start",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <p>80K</p>
          <span>Followers</span>
          <p>803K</p>
          <span>Likes</span>
          <p>1.4</p>
          <span>Photos</span>
        </footer>
      </div>
    </div>
  );
};

export default Assignment1;
