import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link> |

      <Link to="/about">About</Link> |

      <Link to="/contact">Contact</Link> |

      <Link to="/login">Login</Link> |

      <Link to="/signup">Signup</Link> |

      <Link to="/dashboard">Dashboard</Link> |

      <Link to="/profile">Profile</Link>
    </>
  );
}

export default Navbar;