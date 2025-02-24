const Header = () => {
  return (
    <div>
      <ul className="header">
        <li>
          <button className="btn btn-outline">Previous Entry</button>
        </li>
        <li>
          <button className="btn btn-outline">Current</button>
        </li>
        <li>
          <button className="btn btn-outline">Next Entry</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
