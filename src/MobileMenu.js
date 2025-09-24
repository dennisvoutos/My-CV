export const MobileMenu = ({ theme }) => {
  return (
    <div
      className={`mobile-container ${
        theme === "experimental" ? "experimental-mobile" : ""
      }`}
    >
      <h1>Mobile page is being worked on!</h1>
      <h3>I ask for your patience. It will soon be ready</h3>
    </div>
  );
};
