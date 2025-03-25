import React from "react";

const Footer = () => {
  const licks = [
    { name: "Meta", link: "https://about.meta.com/" },
    { name: "About", link: "https://about.instagram.com/" },
    { name: "Blog", link: "https://about.instagram.com/blog" },
    { name: "Job", link: "https://about.instagram.com/about-us/careers" },
    { name: "Help", link: "https://help.instagram.com/" },
    {
      name: "API",
      link: "https://developers.facebook.com/docs/instagram-platform",
    },
    {
      name: "Privacy",
      link: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
    },
    { name: "Terms", link: "https://help.instagram.com/581066165581870/" },
    {
      name: "Locations",
      link: "https://www.instagram.com/explore/locations/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1",
    },
    {
      name: "Instagram Lite",
      link: "https://www.instagram.com/web/lite/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1",
    },
    { name: "Threads", link: "https://www.threads.net/" },
    {
      name: "Contact uploading and non-users",
      link: "https://www.facebook.com/help/instagram/261704639352628?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F17850288137505910%2F%3F__coig_login%3D1",
    },
    {
      name: "Meta Verified",
      link: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26next%3Dhttps%253A%252F%252Fwww.instagram.com%252Fdirect%252Ft%252F17850288137505910%252F%253F__coig_login%253D1%26__coig_login%3D1#",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap gap-4 mt-16 mb-3">
        {licks.map((item) => {
          return (
            <a
              className="text-[12px] text-[#737373]"
              target="_blank"
              href={item.link}
            >
              {item.name}
            </a>
          );
        })}
      </div>

      <div className="flex items-center gap-5">
        <select className="text-[12px] text-[#737373] outline-none">
          <option value="nika">nika</option>
          <option value="nika">nika</option>
          <option value="nika">nika</option>
        </select>


        <p className="text-[12px] text-[#737373]">© 2025 Instagram from Meta</p>
      </div>
    </>
  );
};

export default Footer;
