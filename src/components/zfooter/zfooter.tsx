import "../../styles/custom.css";

export const Zfooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="zfot">
      <footer>Copyright © CENTURION BLOCKCHAIN {year}</footer>
    </div>
  );
};
