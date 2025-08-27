"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Learn() {
  return (
    <section className="relative bg-[#060b1f] text-white py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
          <div className="bg-white rounded-full p-8 shadow-lg">
            <Image
              src="https://eduma.thimpress.com/wp-content/uploads/2024/03/logo-learnpress.png"
              alt="LearnPress Logo"
              width={150}
              height={150}
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-16">
          #1 Learning Management System Plugin
        </h2>
        <p className="text-gray-300 max-w-fit mx-auto mb-12">
          LearnPress – WordPress LMS Plugin is a comprehensive WordPress LMS
          Plugin for WordPress. This is one of the best WordPress LMS Plugins
          which offers you a lot of benefits, such as: easy to update,
          independent from the theme, easy to change, create & sell courses
          online.
        </p>

        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-left">
          
          <Card className=" bg-white text-black p-6 rounded lg:col-span-2 max-h-80">
  
  <div className="flex flex-row items-start">
    <div>
        <h3 className="text-lg md:text-3xl font-bold mb-3">
      LearnPress – WordPress LMS Plugin
    </h3>
    <ul className="text-gray-600 mb-2 mb:mb-4 space-y-0 mb:space-y-1">
      <li>✔ Great eLearning experience</li>
      <li>✔ You can create any kind of LMS</li>
      <li>✔ Easy to set up and sell courses</li>
    </ul>
    </div>
    <div className="flex-shrink-0">
    <Image
      src="https://hakimisolutions.com/wp-content/uploads/trends-in-digital-marketing.png"
      alt="Performance"
      width={200}  
      height={150} 
      className="rounded-lg object-cover hidden md:block"
    />
  </div>
  </div>
   <div className="text-sm text-black font-bold flex gap-x-12 flex-wrap">
      <span>100k+ Active Installations</span>
      <span>31+ Learnpress add-ons</span>
      <span>4.8 average ratings</span>
    </div>

  
</Card>


          <Card className="max-h-80 bg-white text-black rounded overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">Super High Performance</h3>
              <p className="text-gray-600 text-sm mb-4">
                The speed optimization is super fast compared to other themes.
              </p>
              <Image
                src="https://eduma.thimpress.com/wp-content/uploads/2024/03/learning-3.png"
                alt="Performance"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
          </Card>

          <Card className=" bg-white text-black rounded overflow-hidden lg:row-span-2">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">Endless Capabilities</h3>
              <p className="text-gray-600 text-sm mb-4">
                Build an online website quickly with full flexibility.
              </p>
              <Image
                src="https://eduma.thimpress.com/wp-content/uploads/2024/03/learning-3.png"
                alt="Capabilities"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
          </Card>

          <Card className="max-h-80 bg-white text-black rounded overflow-hidden lg:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-3">
                We Support It Even If Free
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                We assure you that we support every one of your issues.
              </p>
              <Image
                src="https://eduma.thimpress.com/wp-content/uploads/2024/03/people-working-call-center.jpg"
                alt="Support"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </CardContent>
          </Card>

          <Card className="max-h-80 bg-white text-black rounded overflow-hidden ">
            <CardContent className="p-6 flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-lg font-bold mb-3">LearnPress Themes</h3>
                <p className="text-gray-600 text-sm mb-4 max-w-lg">
                  We have built high-quality LearnPress Themes that include
                  LearnPress support.
                </p>
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Now
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            View Details
          </Button>
        </div>
      </div>
    </section>
  );
}
