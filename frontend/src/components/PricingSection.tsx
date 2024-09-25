import { Link } from "react-router-dom";
import PricingBox from "./shared/PricingBox";

const PricingSection = () => {
  return (
    <div className="mt-20 px-16 mb-16">
          <div className="relative mx-auto max-w-[970px] space-y-12">
            <h1 className="text-3xl text-center font-semibold text-neutral-900">
              A perfect fit for everyone
            </h1>
            <div className="w-full grid grid-cols-3 gap-6">
              <PricingBox
                title="Canva Free"
                description="For designing or working on anything."
                buttonText="Get Canva Free"
                className="bg-[#40576d12]"
              />
              <PricingBox
                title="Canva Pro"
                description="For growing your brand or passion project with premium features."
                buttonText="Start free Pro trial"
                className="bg-[#f1ebff]"
                isPaid
              />
              <PricingBox
                title="Canva Teams"
                description="For teams to create together with premium workplace tools and workflows."
                buttonText="Start free Teams trial"
                className="bg-[#f1ebff]"
                isPaid
                forTeam
              />
            </div>
          <p className="text-center text-[#212a32db] text-sm">
            <span>
            Our <Link to="" className="text-[#8b3dff] underline">pricing page</Link> has full details. <Link to="" className="text-[#8b3dff] underline">Educational organizations </Link> and <Link to="" className="text-[#8b3dff] underline">nonprofits</Link> can enjoy premium Canva features for free.
            </span>
          </p>
          </div>
        </div>
  )
}

export default PricingSection