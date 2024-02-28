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
    <header className="absolute left-0 top-0 z-50 w-full p-10 text-background">
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
          <ul className="flex items-center gap-8 rounded-full border px-4 font-medium">
            {navigation.map((item) => (
              <li
                key={item.label}
                className="
                  relative
                  py-1.5
                  transition-colors
                  before:absolute
                  before:left-0
                  before:top-0
                  before:flex
                  before:-translate-x-1/2
                  before:-translate-y-1/2
                  before:items-center
                  before:justify-center
                  before:rounded-full
                  before:bg-primary-lighter
                  before:text-[6px]
                  before:text-primary-dark
                  before:transition-all
                  before:duration-300

                  after:absolute
                  after:left-full
                  after:top-full
                  after:flex
                  after:-translate-x-1/2
                  after:-translate-y-1/2
                  after:items-center
                  after:justify-center
                  after:rounded-full
                  after:bg-primary-lighter
                  after:text-[6px]
                  after:text-primary-dark
                  after:transition-all
                  after:duration-300

                  hover:text-primary-light
                  hover:before:left-1/2
                  hover:before:bg-primary-light
                  hover:before:text-primary-lighter
                  hover:before:content-['</>']

                  hover:after:left-1/2
                  hover:after:bg-primary-light
                  hover:after:text-primary-lighter
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
