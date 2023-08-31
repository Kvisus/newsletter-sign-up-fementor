type Props = {
  email: string;
  isDesktop: boolean;
  setSubbed: (subbed: boolean) => void;
  subbed: boolean;
  setEmail: (arg0: string) => void;
};

const Success = ({ email, isDesktop, setSubbed, subbed, setEmail }: Props) => {
  const handleClick = () => {
    setEmail("");
    setSubbed(!subbed);
  };
  return (
    <div className="success-frame main-frame">
      <div className="success">
        <img
          src="../newsletter-sign-up-with-success-message-main/assets/images/icon-success.svg"
          alt="success-icon"
          className="yesPic"
        />

        <h1>Thanks for subscribing!</h1>
        <p>
          A conformation email has been sent to <span>{email}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        {isDesktop && <button onClick={handleClick}>Dismiss message</button>}
      </div>
      {!isDesktop && (
        <button onClick={handleClick} className="suc-button">
          Dismiss message
        </button>
      )}
    </div>
  );
};
export default Success;
