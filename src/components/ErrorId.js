import "../styles/components/Error.scss";
import errorPage from "../images/errorPage1.png";
const ErrorId = () => {
  return (
    <section className="errorPage">
      <p className="errorPage__text">Error. Página no encontrada.</p>
      <img
        className="errorPage__img"
        src={errorPage}
        alt="foto de Rick y Morty. Página no encontrada."
      />
    </section>
  );
};
export default ErrorId;
