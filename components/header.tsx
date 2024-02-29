const Header = () => {
  const navigation = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/",
      label: "About",
    },
    {
      href: "/",
      label: "Services",
    },
    {
      href: "/",
      label: "Portfolio",
    },
    {
      href: "/",
      label: "Pricing",
    },
    {
      href: "/",
      label: "Contact",
    },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full pt-10 text-background">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="h-14">
          <img
            src="/logo.svg"
            alt="Iemmar Web Services"
            className="h-full w-auto object-cover"
          />
        </div>

        {/* Navigation */}
        <nav className="font-oxanium">
          <ul className="flex items-center gap-8 font-medium">
            {navigation.map((item) => (
              <li
                key={item.label}
                className="
                  relative
                  transition-colors

                  after:absolute
                  after:left-1/2
                  after:top-full
                  after:flex
                  after:-translate-x-1/2
                  after:-translate-y-1/2
                  after:items-center
                  after:justify-center
                  after:rounded-full
                  after:bg-primary-light
                  after:text-[6px]
                  after:text-primary-lighter

                  after:transition-all
                  after:duration-300
                  hover:after:translate-y-0
                  hover:after:content-['</>']
                "
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
