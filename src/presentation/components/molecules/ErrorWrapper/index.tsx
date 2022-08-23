type Props = {
  children?: JSX.Element | string;
};

const ErrorWrapper: React.FC<Props> = ({ children }) => {
  return (
    <section>
      {children ? <span data-testid="errorWrapper">{children}</span> : ''}
    </section>
  );
};

export default ErrorWrapper;
