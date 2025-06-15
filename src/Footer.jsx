export default function Footer() {
  const footerStyle = {
    backgroundColor: "grey",
    color: "white",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 0,
    width: "100%",
    height: "40px",
  };
  return (
    <div style={footerStyle}>
      <p>
        &copy; {new Date().getFullYear()} Aryan Shokeen. SkyCast All rights
        reserved.
      </p>
    </div>
  );
}
