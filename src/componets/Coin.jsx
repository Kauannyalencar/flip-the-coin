// // import styles from "../assets/css/styles.css"
import shadow from "../assets/shadow.svg";  
const Coin = ({ coin, alt }) => {
  return (
    <div className="coin_face">
      <img src={coin} alt={alt} />
      <img src={shadow} alt="Shadow" />
      <p>{alt}</p>
    </div>
  );
};
export default Coin;
