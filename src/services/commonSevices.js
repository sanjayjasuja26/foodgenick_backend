

module.exports.commonService = (type,home_page_sections,about_page_sections,price_page_sections,service_page_sections,blog_page_sections,partners_page_sections) => {
switch (type) {
    case "home_page_sections":
      const homePage = JSON.stringify(home_page_sections);
      return {
        home_page_sections: homePage
      };
    case "about_page_sections":
      const aboutPage = JSON.stringify(about_page_sections);
      return {
        about_page_sections: aboutPage
      };
    case "price_page_sections":
      const pricePage = JSON.stringify(price_page_sections);
      return {
        price_page_sections: pricePage
      };
    case "service_page_sections":
      const servicesPage = JSON.stringify(service_page_sections);
      return {
        service_page_sections: servicesPage
      };
      case "blog_page_sections":
        const blogPage = JSON.stringify(blog_page_sections);
        return {
          blog_page_sections: blogPage
        };
        case "partners_page_sections":
          const partnersPage = JSON.stringify(partners_page_sections);
          return {
            partners_page_sections: partnersPage
          };
    default:
      // Handle the default case if needed
      return null;
  }
}


