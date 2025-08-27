import React, { useState } from 'react';
import { Share2, Star, Calendar, MapPin, MessageCircle } from 'lucide-react';

const LandscapingDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center"
  ];

  return (
    <div className="max-w-7xl  mx-auto p-4 bg-gray-50 m-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column - Images and Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Image Gallery */}
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="relative">
              <img 
                src={images[selectedImage]} 
                alt="Landscaping project"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-2 py-1 rounded text-sm">
                11
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="p-4">
              <div className="flex gap-3 overflow-x-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-16 object-cover rounded cursor-pointer flex-shrink-0 transition-all ${
                      selectedImage === index ? 'ring-2 ring-green-500' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Specifications</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-gray-600 block mb-1">Type</span>
                <span className="font-medium text-gray-900">Landscape works</span>
              </div>
              <div>
                <span className="text-gray-600 block mb-1">Sq. ft</span>
                <span className="font-medium text-gray-900">---</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detailed Description</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to GreenScape Solutions, your go-to landscaper for all things artificial grass! 
              We offer a wide range of options, from budget-friendly to premium quality, ensuring that 
              you find the perfect fit for your outdoor space.
            </p>
          </div>
        </div>

        {/* Right Column - Business Profile */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
            
            {/* Post Info */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">Posted • 2days ago</span>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-4 h-4 text-gray-600" />
              </button>
            </div>

            {/* Title */}
            <h1 className="text-xl font-semibold text-gray-900 mb-6">
              Compact garden entrance
            </h1>

            {/* Posted By */}
            <div className="mb-6">
              <span className="text-sm text-gray-500 block mb-3">Posted by</span>
              
              {/* Business Profile */}
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 text-sm">
                    Evergreen Dreams Landscaping Inc.
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-lg font-semibold text-gray-900">5.0</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-500">(06 Ratings)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full py-2.5 text-green-600 font-medium border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                Rate This Business
              </button>
              
              <button className="w-full py-2.5 text-green-600 font-medium border border-green-600 rounded-lg hover:bg-green-50 transition-colors">
                View All Listings
              </button>
              
              <button className="w-full py-2.5 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors">
                Enquiry
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                <MapPin className="w-4 h-4" />
                <span>Sharjah, UAE</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MessageCircle className="w-4 h-4" />
                <span>Available for consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandscapingDetailPage;