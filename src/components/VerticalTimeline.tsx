import React from "react";

interface VerticalTimelineProps {
  steps: string[];
  bgColor?: string;
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ steps, bgColor ="bg-gray-900"  }) => {
    return (
        <div className="relative pl-10">
        <div className={`${bgColor} absolute left-15 md:left-18 xl:left-19 top-15 bottom-15 w-3 rounded-sm z-10`}/>

        <div className="flex flex-col gap-6">
            {steps.map((steps, index) => (
            <div key={index} className="relative flex items-start gap-4">
                <div className="flex items-center bg-white shadow-sm rounded-xl p-4 text-sm font-medium w-full">
                <div className="w-11 h-11 rounded-full border-[5px] border-black bg-white z-20 mr-3" />
                <p>
                    <b>{index + 1}.</b> {steps}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
      );
    };

export default VerticalTimeline;
