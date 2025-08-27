import React from 'react';
import { MessageCircle } from 'lucide-react';

const PostCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-md mx-auto hover:shadow-md transition-shadow duration-200">
            <div className="flex">
                <div className="relative w-24 flex-shrink-0">
                    <img
                        src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=250&fit=crop"
                        alt="Money plant leaves"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded">
                        +6
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="flex-1 p-4">
                    {/* User Info */}
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="font-medium text-gray-700">Mohammed Yasir</span>
                        <span className="mx-1">•</span>
                        <span>2hrs ago</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-gray-900 font-medium text-base mb-3 leading-snug">
                        How to grow money plant?
                    </h3>

                    {/* Engagement */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.07989 14 5.2V8.8C14 9.9201 14 10.4802 13.782 10.908C13.5903 11.2843 13.2843 11.5903 12.908 11.782C12.4802 12 11.9201 12 10.8 12H6.45583C6.0398 12 5.83178 12 5.63281 12.0408C5.45628 12.0771 5.28547 12.137 5.12499 12.219C4.94411 12.3114 4.78168 12.4413 4.45681 12.7012L2.8665 13.9735C2.58911 14.1954 2.45042 14.3063 2.33369 14.3065C2.23218 14.3066 2.13615 14.2604 2.07282 14.1811C2 14.0898 2 13.9122 2 13.557V5.2Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="text-sm font-medium">22</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;