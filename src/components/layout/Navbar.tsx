interface NavItem {
  title: string;
  href: string;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { title: 'About', href: '#about' },
    { title: 'Service', href: '#service' },
    { title: 'Projects', href: '#projects' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'FAQ', href: '#FAQ' },
  ];
  return (
    <header>
      Header
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.title}>
              <a href={`${item.href}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
