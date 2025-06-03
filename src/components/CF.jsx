function CF({ activeTab }) {
  switch (activeTab) {
    case "Custom storefront":
      return (
        <div className="flex items-center justify-center flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-4 md:px-15 md:w-[60%]">
            <h1 className="text-4xl font-medium leading-11">
              Set up a store that showcases your brand.
            </h1>
            <p className="text-lg font-light">
              Differentiate yourself from the competition with a full store
              dedicated to your products- no coding or design skills necessary!
            </p>
          </div>
          <div>
            <img
              src="https://1mdm.com/about/assets/1mdm-product-1.png"
              alt=""
              className="w-[700px]"
            />
          </div>
        </div>
      );
    case "Advertising tools":
      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 px-15 w-[60%]">
            <h1 className="text-4xl font-medium leading-11">
              Increase exposure by up to 120% with a suite of smart advertising
              tools.
            </h1>
            <p className="text-lg font-light">
              Get your products placed in the right spots to be noticed by the
              exact audience you are targeting.
            </p>
          </div>
          <div>
            <img
              src="https://1mdm.com/about/assets/1mdm-product-image-4.png"
              alt=""
              className="w-[700px]"
            />
          </div>
        </div>
      );
    case "Data and analytics":
      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 px-15 w-[60%]">
            <h1 className="text-4xl font-medium leading-11">
              Optimize your every move with in-depth data and customer insights
            </h1>
            <p className="text-lg font-light">
              Improve performance with dashboards detailing product exposure,
              click volume, spend, average cost, store visits, and more.!
            </p>
          </div>
          <div>
            <img
              src="https://1mdm.com/about/assets/1mdm-product-2.png"
              alt=""
              className="w-[700px]"
            />
          </div>
        </div>
      );
    case "Customers support":
      return (
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-4 px-15 w-[60%]">
            <h1 className="text-4xl font-medium leading-11">
              Know you’re supported throughout your journey
            </h1>
            <p className="text-lg font-light">
              From onboarding help to online chats to local support during
              business hours and account optimization tips -- we’re here for you
            </p>
          </div>
          <div>
            <img
              src="https://1mdm.com/about/assets/1mdm-product-3.png"
              alt=""
              className="w-[700px]"
            />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default CF;
