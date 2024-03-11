import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Switch, Transition } from "@headlessui/react";
import { ChevronDownIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";

const userNavigation = [
  { name: "Preferences", href: "/preferences" },
  { name: "Sign out", href: "/logout" },
];

const locales = [
  { name: "English", locale: "en" },
  { name: "French", locale: "fr" }
]

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Appbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(theme === "dark");
  const { pathname } = useLocation();
  const authToken = localStorage.getItem("authToken");
  const { t, i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("")

  const toggleTheme = () => {
    let newTheme = "";
    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    setEnabled(!enabled);
    setTheme(newTheme);
  };

  const navigation = [
    { name: "Sign in", href: "/signin", current: false },
    { name: "Sign Up", href: "/signup", current: false },
  ];

  const handleChangeLanguage = (lang: string, locale: string) => {
    setCurrentLanguage(lang);
    changeLanguage(locale);
  } 

  return (
      <Disclosure as="nav" className="border-b border-slate-200">
        {({ open }) => (
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex-box h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8" src={Logo} alt="Smarter Tasks" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {!authToken &&
                      navigation.map((item) => {
                        const isCurrent = pathname.includes(item.href);
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={classNames(
                              isCurrent
                                ? "bg-slate-50 text-blue-700"
                                : "text-slate-500 hover:text-blue-600",
                              "rounded-md px-3 py-2 text-sm font-medium",
                            )}
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            {t(item.name)}
                          </Link>
                        );
                      })}
                  </div>
                </div>
              </div>
              {authToken && (
                <div className="float-right mb-10">
                  <div className="ml-4 flex items-center md:ml-6">
                    <Switch
                      checked={enabled}
                      onChange={toggleTheme}
                      className={`${enabled ? "bg-slate-400" : "bg-slate-700"}
                    relative inline-flex w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span
                        aria-hidden="true"
                        className={`${
                          enabled ? "translate-x-9" : "translate-x-0"
                        }
                      pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                      />
                    </Switch>
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                          <UserCircleIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700",
                                  )}
                                >
                                  {t(item.name)}
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              )}
              <Menu as="div" className="relative rounded-md bg-white px-2 py-2 float-right">
                <div>
                  <Menu.Button className="inline-flex">
                    {currentLanguage == "" ? "Language" : currentLanguage}
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {locales.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <button
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700",
                            )}
                            onClick={() => handleChangeLanguage(item.name, item.locale)}
                          >
                            {item.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        )}
      </Disclosure>
  );
};

export default Appbar;
