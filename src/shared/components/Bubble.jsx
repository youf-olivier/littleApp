import jwtBadge from "shared/images/logo-jwt.svg";

const BubbleResponse = ({ message, token, error = true }) => (
  <section className="bubble">
    <blockquote className={error ? "electric bubble" : "speech bubble"}>
      <p>{message}</p>
      <a href={`https://jwt.io?access_token=${token}`} className="bubble-token">
        <img src={jwtBadge} alt="View in JWT.io" />
      </a>
    </blockquote>
  </section>
);

export default BubbleResponse;
