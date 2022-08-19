type Props = {
  children?: JSX.Element | string;
};

const ErrorWrapper: React.FC<Props> = ({ children }) => {
  return (
    <section data-testid="errorWrapper">
      {children ? <span>{children}</span> : ''}
    </section>
  );
};

export default ErrorWrapper;
