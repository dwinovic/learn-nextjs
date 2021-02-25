import headerStyle from '../styles/Header.module.css';

const Header = () => {
  const x = 4;
  return (
    <div>
      <h1 className={headerStyle.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyle.description}>
        Keep up to date with technology news about web development
      </p>
    </div>
  );
};

export default Header;
