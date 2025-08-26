import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <img 
        src="images/logo+nome.svg" 
        alt="Ligia Logo" 
        className="w-25 h-8 relative"
      />
    </Link>
  );
}