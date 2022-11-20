import { Fragment, useState } from "react";
import { RadioGroup, Switch } from "@headlessui/react";

import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { QuestionMarkCircleIcon } from "@heroicons/react/20/solid";

const subNavigation = [
  {
    name: "Profile",
    href: "/settings/profile",
    icon: UserCircleIcon,
    current: false,
  },
  { name: "Account", href: "/settings/account", icon: CogIcon, current: false },
  {
    name: "Password",
    href: "/settings/password",
    icon: KeyIcon,
    current: false,
  },
  {
    name: "Notifications",
    href: "/settings/notify",
    icon: BellIcon,
    current: false,
  },
  {
    name: "Plan & Billing",
    href: "/settings/plan_and_bill",
    icon: CreditCardIcon,
    current: true,
  },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
];
const plans = [
  {
    name: "Startup",
    priceMonthly: 29,
    priceYearly: 290,
    limit: "Up to 5 active job postings",
  },
  {
    name: "Business",
    priceMonthly: 99,
    priceYearly: 990,
    limit: "Up to 25 active job postings",
  },
  {
    name: "Enterprise",
    priceMonthly: 249,
    priceYearly: 2490,
    limit: "Unlimited active job postings",
  },
];
const payments = [
  {
    id: 1,
    date: "1/1/2020",
    datetime: "2020-01-01",
    description: "Business Plan - Annual Billing",
    amount: "CA$109.00",
    href: "#",
  },
  // More payments...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function PasswordSettings() {
  return (
    <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
          <nav className="space-y-1">
            {subNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-primary hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                  "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-primary"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>
      </div>
    </main>
  );
}
