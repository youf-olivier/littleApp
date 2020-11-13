const BubbleResponse = ({ message, error=true }) => (
  <section className="bubble">
    <blockquote className={error ? 'electric bubble' : 'speech bubble'}>
      <span>{message}</span>
    </blockquote>
  </section>
);

export default BubbleResponse;
