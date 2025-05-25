import React from "react";
import { Link } from "react-router-dom";
import  Header from "../components/Header";
import  CustomButton from "../components/Button";

function ProjectPage() {
  return (
    <> 
    <Header/>
    <section  className="min-h-[90vh] h-auto">
        <div style={{ background: '#266670' }} >
            <div className="headerBody flex justify-center">
                <img className="w-auto max-h-150" src ="/projects/transitbloom/hero.png"></img>
            </div>
        </div>

        <div className ="headerBody">
            <h4 className="mb-0">UX Design</h4>
            <h1 className="mt-0 mb-10">TransitBloom</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-5/7 space-y-4">
                    <h4 className="!font-light mb-4">OVERVIEW</h4>
                    <p>TransitBloom is an all-in-one transit travel app that incentivizes its users with a loyalty system for choosing greener transit options, adjusts travel options based on transit agency recommendations, accessibility options, and carbon output, as well as finds tips to board the right bus.</p>
                    <p>Built with a team of two for UX Laurier’s Blueprint challenge in 2024. Won third place. </p>
                    
                    <h4 className="!font-light mt-10 mb-4">CHECK IT OUT</h4>
                    <div className="flex gap-3">
                        <CustomButton href="" label ="Business Pitch"></CustomButton>
                        <CustomButton href="" label ="Figma Prototype"></CustomButton>
                    </div>
                </div>
                <div className="md:w-2/7 space-y-6">
                    <h4 className="!font-light mb-4">CLIENT</h4>
                    <p><b>UX Laurier Blueprint</b></p>
                    
                    <h4 className="!font-light mb-4">MY ROLE</h4>
                    <p className="mb-1"><b>UX Designer</b></p>
                    <p className="mt-0 !text-sm">Worked on high-fidelity prototypes, business pitch, branding, and research </p>

                    <h4 className="!font-light mb-4">TOOLS</h4>
                    <p><b>Figma, Adobe Illustrator,  Adobe Photoshop, Procreate</b></p>

                </div>
            </div>
        </div>
    </section>

    
        
    <section style={{ background: '#266670' }} >
            <div className="pt-10 pb-10 headerBody !text-white">
                <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
                <h3 className=" m-0">How might we design sustainable travel options that increase efficiency while enhancing the quality of life for daily commuters?</h3>
            </div>
        </section>
        
    </>
  );
}

export default ProjectPage;