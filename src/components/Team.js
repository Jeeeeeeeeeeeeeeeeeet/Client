export const Team = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://miro.medium.com/v2/resize:fit:500/1*Ak94CgKDDy0DBzeImfQHig.jpeg"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Jeet Pardeshi</p>
              <p className="mb-4 text-xs text-gray-800">Product Manager</p>
              <p className="text-sm tracking-wide text-gray-800">
                I like boobs and butt!
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://thumbs.dreamstime.com/z/criminal-man-offender-caught-guilty-men-id-signs-his-hand-98094849.jpg"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Bonish Patel</p>
              <p className="mb-4 text-xs text-gray-800">Design Team Lead</p>
              <p className="text-sm tracking-wide text-gray-800">
                Registered Sex Offender
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Krenil Panchal</p>
              <p className="mb-4 text-xs text-gray-800">Human Resources</p>
              <p className="text-sm tracking-wide text-gray-800">
                Child porn distributor
              </p>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-24 h-24 rounded-full shadow"
              src="https://i.pinimg.com/1200x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg"
              alt="Person"
            />
            <div className="flex flex-col justify-center mt-2">
              <p className="text-lg font-bold">Dhruv Panchal</p>
              <p className="mb-4 text-xs text-gray-800">Good guy</p>
              <p className="text-sm tracking-wide text-gray-800">
                Dhulo 👍
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };