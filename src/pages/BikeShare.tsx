import Header from "@/components/Header";
import CustomButton from "@/components/Button";
import PlotEmbed from "@/components/PlotEmbed";
import PlotWithInsights from "@/components/MultiPlotEmbed";
import DropdownSection from "@/components/Dropdown";
import LogoTitle from "@/components/Role";
import ResponsiveEmbed from "@/components/MobileIframe";
export default function BikeShare() {
  // Static brand colour for BU354
  const colour = "#387f47";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <Header />

      {/* ----------------------------- */}
      {/* SECTION 1 — PROJECT OVERVIEW */}
      {/* ----------------------------- */}

      <section className="min-h-[90vh] h-auto">
        {/* HERO */}
        <div style={{ background: colour }}>
          <div className="headerBody flex justify-center">
            <img
              className="w-full h-auto max-w-[100%] max-h-[40rem] object-contain"
              src="/projects/bikeshare/poster.jpg"
              alt="Bike Share Scarborough North Study Hero"
            />
          </div>
        </div>

        {/* PROJECT OVERVIEW MASTER (same structure as ProjectPage) */}
        <div className="headerBody">
          <h4 className="mb-0">Data Analysis & Transportation Policy</h4>
          <h1 className="mt-0 mb-10">Bike Share Scarborough North Study</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT COLUMN — OVERVIEW */}
            <div className="md:w-5/7 space-y-4">
              <h4 className="!font-light mb-4">OVERVIEW</h4>
              <p> The Scarborough North Bike Share Study was an implementation research project conducted for the City of Toronto (Ward 23) in 2024 to determine optimal locations for station expansion. While the 2022–2025 Growth Plan focused primarily on established areas like Agincourt, this study utilized quantitative surveys and qualitative interviews to advocate for station placement in emerging neighbourhoods and NIAs (Neighbourhood Improvement Areas) such as Malvern East and West. By analyzing popular destinations, "last-mile" transit gaps, and safety perceptions, the project provides a data-driven roadmap for integrating micro-mobility into suburban Scarborough. </p>

              <h4 className="!font-light mt-10">CHECK IT OUT</h4>
              <div className="flex gap-3 flex-wrap !pb-10">
                <CustomButton
                  href="https://github.com/twotoque/BikeShare-ScarboroughNorth"
                  label="View GitHub Repository"
                />
              </div>
            </div>

            {/* RIGHT COLUMN — QUICK DETAILS */}
            <div className="md:w-2/7 space-y-6">
              <h4 className="!font-light mb-4">CLIENT</h4>
              <p>
                <b>Councillor Jamaal Myers, Ward 23 Scarborough North, City of Toronto</b>
              </p>

              <h4 className="!font-light mb-4">MY ROLE</h4>
              <p className="mb-1">
                <b>Project Lead</b>
              </p>
              <p className="mt-0 !text-sm">
                Worked with the Director of Planning and Land Use Policy (Darnel Harris), produced posters to advertise program, interviewed residents, analyzed results on Python
              </p>

              <h4 className="!font-light mb-4">TOOLS</h4>
              <p>
                <b>Python, Pandas, Plotly, Adobe Illustrator</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      

      <section style={{ background: colour }}>
        
        <div className="pt-10 pb-10 headerBody !text-white">
          <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
          <h3 className="m-0">
            Where in Scarborough North will be most appropriate to install Bike Share Toronto stations given current transportation usage methods amidst evermore bike infrastructure and mixed-use development?
          </h3>
        </div>
        </section><section className="headerBody">
        <div>
          <h4 className="text-3xl mb-6 !font-light">PREAMBLE</h4>
          <p className="leading-relaxed">
             While the Bike Share Toronto 2022-2025 Growth Plan identifies Agincourt as a primary target, emerging neighbourhoods and Neighbourhood Improvement Areas (NIAs) like Malvern West and Malvern East are currently unserved. Residents in Ward 23 face significant "last-mile" gaps between their homes and TTC/GO transit hubs (currently and upcoming ones), yet existing data does not fully capture suburban transportation obstacles, such as the specific safety barriers that prevent car-dependent residents from switching to cycling.
          </p>
          <p className="leading-relaxed">
            Expanding on this main idea, this project which will consist of a survey and online/in-person interviews will aim to focus on these goals:
          </p>
<ul className="text-lg list-disc pl-6 space-y-2 mt-2">
    <li>
    <b>Popular Destination Mapping:</b> Identifying high-traffic hubs (workplaces, shopping centres, and residences) and analyzing current travel modes.
  </li>
  <li>
    <b>Last-Mile Analysis:</b> Calculating walking times to public transportation to identify where Bike Share could most effectively reduce transit friction.
  </li>
  <li>
    <b>Infrastructure Pinpointing:</b> Determining specific intersections for future stations based on user-reported demand and safety comfort.
  </li>
  <li>
    <b>System Awareness Assessment:</b> Gauging current resident knowledge of the Bike Share Toronto ecosystem in an unserved zone.
  </li>
  <li>
    <b>Policy Evaluation:</b> Engaging residents to validate if the <i>2022-2025 Growth Plan</i> aligns with the needs of emerging neighbourhoods like Malvern. (<i><a href="https://www.toronto.ca/legdocs/mmis/2022/pa/bgrd/backgroundfile-229602.pdf">Bike Share Toronto: Four-Year Growth Plan</a></i>,  p.9)
  </li>
</ul>
<p className="leading-relaxed mt-6">
  Some questions were inspired by <a href="https://engagebikeshareto.com/">engagebikeshareto.com</a>. This however does not reflect other transportation usages as well as focuses solely on planned neighbourhoods (in Ward 23’s case, only Agincourt). While speaking with Bike Share Toronto planners, it was noted that NIAs/emerging neighbourhoods are also focused on the placement of Bike Share Toronto stations. Ward 23 currently has 2 emerging neighbourhoods, Malvern West and Malvern East, but no planned stations in the 2022-2025 plan.
  
  </p>
        </div>

        <div>
         {/* RESEARCH & DATA COLLECTION */}
        <div>
        {/* RESEARCH & DATA COLLECTION */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">RESEARCH & DATA COLLECTION</h4>

          <p className="leading-relaxed mb-6">
            To determine the most appropriate locations for Bike Share expansion, the study utilized a 
            branching logic survey designed to map current transportation habits and identify 
            barriers to cycling in Ward 23. This project consisted of both a digital survey and 
            in-person interviews to focus on destination data and last-mile transit gaps.
          </p>

          <h4 className="text-3xl mb-6 !font-light">ELIGIBILITY, QUESTIONS, & CONTEXT</h4>
          <p className="leading-relaxed mb-6">
            The survey focused on Ward 23 residents to ensure localized data, with specific tracking 
            for emerging neighbourhoods like Malvern East and Malvern West. This approach contributes 
            to the equity factor within Bike Share Toronto usage by focusing on areas currently 
            lacking planned stations.
          </p>
          <p className="leading-relaxed mb-6">
            Participants were categorized based on their primary method of transportation 
            (Driving, Public Transportation, or Biking) to trigger relevant behavioral questions:
          </p>

          <ul className="text-lg list-disc pl-6 space-y-4 mt-2 mb-8">
            <li>
              <strong>Biking Track:</strong> Assessed seasonal frequency, primary destinations (work, home, shopping, worship), 
              and a safety ranking of infrastructure—ranging from hydro corridors to major roads without bike lanes.
            </li>
            <li>
              <strong>Public Transportation Track:</strong> Evaluated last-mile walking distances, the frequency 
              of mixed-mode travel (bikes on transit), and specific reasons for choosing the bus over cycling.
            </li>
            <li>
              <strong>Driving Track:</strong> Mapped top driving intersections and identified perceived 
              barriers to biking, such as bike theft risks, maintenance time, and impracticality due to distance.
            </li>
            <li>
              <strong>General Interest:</strong> All respondents were asked about their current awareness 
              of Bike Share Toronto and invited to pinpoint specific intersections for future station implementation.
            </li>
          </ul>

          

          <DropdownSection title="VIEW BRANCHING LOGIC & JUSTIFICATION">
            <div className="space-y-6">
              {/* BIKING TRACK */}
              <div>
                <h4 className="text-3xl mb-6 !font-light">Track A: Current Cyclists</h4>
                <ul className="list-disc pl-6 space-y-1 text-lg">
                   <li><b>Metrics:</b> Frequency of use across seasons and primary destinations (Work, Shopping, Worship).</li>
                   <li><b>Safety Ranking:</b> Users ranked comfort across infrastructure types like Hydro corridors vs. major roads.</li>
                   <li><b>Justification:</b> Assesses localized bike demand and social impact on mobility.</li>
                </ul>
              </div>

              {/* TRANSIT TRACK */}
              <div>
                <h4 className="text-3xl mb-6 !font-light">Track B: Public Transportation Users</h4>
                <ul className="list-disc pl-6 space-y-1 text-lg">
                   <li><b>Metrics:</b> Last-mile walking distance to TTC/GO stops and frequency of bringing bikes on transit.</li>
                   <li><b>Friction Points:</b> Identified why users choose the bus over biking (e.g., safety, theft risk, maintenance).</li>
                   <li><b>Justification:</b> Evaluates if Bike Share can mitigate the "cost/time" of bike ownership.</li>
                </ul>
              </div>

              {/* DRIVING TRACK */}
              <div>
                <h4 className="text-3xl mb-6 !font-light">Track C: Drivers</h4>
                <ul className="list-disc pl-6 space-y-1 text-lg">
                   <li><b>Metrics:</b> Top three frequent driving intersections and reasons for vehicle preference.</li>
                   <li><b>Barriers:</b> Specifically assessed if impracticality, distance, or weather prevents cycling.</li>
                   <li><b>Justification:</b> Analyzes car accessibility and potential for multi-modal shifts.</li>
                </ul>
              </div>
            </div>
          </DropdownSection>
        {/* SURVEY QUESTION MAP */}
        <section className="w-full">
          <h4 className="text-3xl mb-6 !font-light">SURVEY QUESTION MAP</h4>
          
          <div className="border border-gray-200 rounded-xl overflow-hidden mb-8 w-full">
            {/* TOP SECTION: DEMOGRAPHICS */}
            <div className="bg-[#fff9e6] p-6 border-b border-gray-200">
              <h5 className="font-bold mb-4 uppercase tracking-wide text-sm">Demographic and general transportation questions</h5>
              <div className="space-y-6">
                <div>
                  <p className="leading-tight text-lg mb-2"><b>1.</b> Do you reside in Scarborough North?   If so, where in Scarborough North do you live? </p>
                    <p className="text-sm text-gray-600 italic">Options: Malvern East, Malvern West, Agincourt South-Malvern West, Agincourt North, Milliken, Morningside Heights, I do not live in Scarborough North.</p>
                </div>
                <div>
                  <p className="leading-tight text-lg mb-2"><b>2.</b> What methods of transportation do you use regularly (2+ times a week)?   Check all that apply.</p>
                    <p className="text-sm text-gray-600 italic">Options: Driving, Public transportation, Biking. </p>
                </div>
              </div>
            </div>

            {/* RESPONSIVE TRACKS SECTION */}
            <div className="flex flex-col md:flex-row border-b border-gray-200 w-full">
              
              {/* BIKING TRACK */}
              <div className="flex-1 bg-[#eef4ff] p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h5 className="font-bold mb-6 text-[#27548f] text-sm uppercase">If "BIKING" was selected... </h5>
                <div className="space-y-8 text-lg">
                  <div>
                      <p><b>3.</b> How often do you ride a bike during the spring/summer/fall/winter months? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Daily, 2-3 times a week, Once a week.</p>
                  </div>
                  <div>
                      <p><b>4.</b> Where do you ride a bike to most often? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Work, Home, Shopping, Recreational place/Park, Place of worship. </p>
                  </div>
                  <div>
                      <p><b>5.</b> Top 3 places you bike (intersection/neighbourhood). </p>
                      <p className="text-sm text-gray-600 italic mt-1">Format: Fill in the blank. </p>
                  </div>
                  <div>
                      <p><b>6.</b> Why do you bike, compared to other methods? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Convenience, Cost, Health, Environment, Other. </p>
                  </div>
                  <div>
                      <p><b>7.</b> Rank where you feel most safe biking. </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Hydro corridors, Parks, Roads with/without bike lanes, Residential streets, Sidewalks. </p>
                  </div>
                </div>
              </div>

              {/* PUBLIC TRANSIT TRACK */}
              <div className="flex-1 bg-[#f0f9f0] p-6 border-b md:border-b-0 md:border-r border-gray-200">
                  <h5 className="font-bold mb-6 text-[#2d5a2d] text-sm uppercase">If "PUBLIC TRANSIT" was selected... </h5>
                <div className="space-y-8 text-lg">
                  <div>
                      <p><b>3.</b> How far is your TTC/GO stop from home? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: 0-2, 2-5, 5-10, or 10+ minute walk. </p>
                  </div>
                  <div>
                      <p><b>4.</b> Where do you take a bus/train to? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Work, Home, Shopping, Park, Place of worship. </p>
                  </div>
                  <div>
                      <p><b>5.</b> Top 3 places you bus/train to. </p>
                      <p className="text-sm text-gray-600 italic mt-1">Format: Fill in the blank.</p>
                  </div>
                  <div>
                      <p><b>6.</b> Why use transit over other methods? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Convenience, Cost, Environment, Other. </p>
                  </div>
                  <div>
                    <p><b>7.</b> Do you bring your bike on public transit? Why? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Format: Yes/No + Short Answer. </p>
                  </div>
                  <div>
                      <p><b>8.</b> Why bus instead of biking in fair weather? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Safety, Maintenance, Theft, Distance, Weather.</p>
                  </div>
                </div>
              </div>

              {/* DRIVING TRACK */}
              <div className="flex-1 bg-[#fff0f0] p-6">
                  <h5 className="font-bold mb-6 text-[#8a2b2b] text-sm uppercase">If "DRIVING" was selected... </h5>
                <div className="space-y-8 text-lg">
                  <div>
                      <p><b>3.</b> Where often do you drive to? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Work, Home, Shopping, Park, Place of worship.</p>
                  </div>
                  <div>
                      <p><b>4.</b> Top 3 places you drive to. </p>
                      <p className="text-sm text-gray-600 italic mt-1">Format: Fill in the blank. </p>
                  </div>
                  <div>
                      <p><b>5.</b> Why choose to drive over other methods? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Convenience, Cost, Environment, Other. </p>
                  </div>
                  <div>
                      <p><b>6.</b> Why drive compared to biking? </p>
                      <p className="text-sm text-gray-600 italic mt-1">Options: Safety, Skills, Theft, Maintenance, Distance, Weather. </p>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM SECTION: GENERAL */}
            <div className="bg-[#f3f0ff] p-6 w-full">
                <h5 className="font-bold mb-4 uppercase tracking-wide text-sm">General Bike Share Toronto-related questions</h5>
              <div className="space-y-6 text-lg">
                <div>
                    <p className="leading-tight"><b>9.</b> Are you aware of Bike Share Toronto? </p>
                    <p className="text-sm text-gray-600 italic mt-1">Options: Yes / No.</p>
                </div>
                <div>
                    <p className="leading-tight"><b>10.</b> What potential locations do you want implemented?</p>
                    <p className="text-sm text-gray-600 italic mt-1">Format: Short answer. </p>
                </div>
              </div>
            </div>
          </div>

          
        </section>

        
        </div>
        </div>
          </div>
     </section>
     {/* ----------------------------- */}
      {/* SECTION 2 — CENSUS CONTEXT   */}
      {/* ----------------------------- */}
      
      <section className="headerBody">
        <div>
          <h4 className="text-3xl mb-6 !font-light">CENSUS CONTEXT: WARD 23 TRANSPORTATION</h4>
          <p className="leading-relaxed mb-6">
            Before identifying specific station locations, it was necessary to analyze existing 
            commuter patterns. 2021 Census data reveals that while Ward 23 (Scarborough North) 
            has a strong reliance on driving, there are pockets of high public transit usage that 
            represent prime opportunities for first/last-mile bike share integration.
          </p>

          <PlotWithInsights
            title="Ward 23 Commuter Mode Distribution (Census 2021)"
            plots={[
              {
                label: "Driving (Ward 23)",
                src: "/bikeshare iframe/census_driving_ward23.html",
                image: "/projects/bikeshare/census_driving_map.png"
              },
              {
                label: "Public Transit (Ward 23)",
                src: "/bikeshare iframe/census_pt_ward23.html",
                image: "/projects/bikeshare/census_pt_map.png"
              },
              {
                label: "Walking (Ward 23)",
                src: "/bikeshare iframe/census_walking_ward23.html",
                image: "/projects/bikeshare/census_walking_map.png"
              },
              {
                label: "Biking (Ward 23)",
                src: "/bikeshare iframe/census_biking_ward23.html",
                image: "/projects/bikeshare/census_biking_map.png"
              },
            ]}
          />

          <p className="leading-relaxed mt-6">
            Comparison with city-wide data shows a clear "micro-mobility gap." While downtown Toronto 
            exhibits dense biking activity, Scarborough North's biking rates remain low. 
            This is coupled with a median household income that aligns closely with the city-wide 
            median of $84,000, suggesting that the barrier to biking is likely 
            infrastructure and access rather than purely economic factors.
          </p>

          <PlotWithInsights
            title="Toronto-Wide Mode Comparison"
            plots={[
              {
                label: "Biking (Toronto Wide)",
                src: "/bikeshare iframe/census_biking_toronto.html",
                image: "/projects/bikeshare/toronto_biking.png"
              },
              {
                label: "Driving (Toronto Wide)",
                src: "/bikeshare iframe/census_driving_toronto.html",
                image: "/projects/bikeshare/toronto_driving.png"
              },
              {
                label: "Public Transit (Toronto Wide)",
                src: "/bikeshare iframe/census_pt_toronto.html",
                image: "/projects/bikeshare/toronto_pt.png"
              }
            ]}
          />
        </div>

        {/* ----------------------------- */}
        {/* SECTION 3 — RESEARCH FINDINGS */}
        {/* ----------------------------- */}

        <div>
          <h4 className="text-3xl mb-6 !font-light">SURVEY & INTERVIEW INSIGHTS</h4>
          <p className="leading-relaxed mb-4">
            Our study engaged residents to understand why they choose their current modes 
            and what would encourage a shift to Bike Share.
          </p>

          <PlotWithInsights
            title="Biking Demand & Destinations"
            plots={[
              {
                label: "Seasonal Usage (Spring)",
                src: "/bikeshare iframe/biking_usage_spring.html",
                image: "/projects/bikeshare/spring_usage.png"
              },
              {
                label: "Biking Destinations",
                src: "/bikeshare iframe/biking_destinations.html",
                image: "/projects/bikeshare/biking_dest.png"
              },
              {
                label: "Justification for Biking",
                src: "/bikeshare iframe/biking_justification.html",
                image: "/projects/bikeshare/biking_just.png"
              }
            ]}
          />

          <p className="leading-relaxed mt-6">
            A critical finding was the "Safety vs. Ownership" barrier. Many residents reported 
            using public transit or driving instead of biking due to the risk of bike theft and 
            the burden of maintenance. 
          </p>

          <PlotWithInsights
            title="Barriers & Awareness"
            plots={[
              {
                label: "PT instead of Biking",
                src: "/bikeshare iframe/pt_instead_of_bike.html",
                image: "/projects/bikeshare/pt_barriers.png"
              },
              {
                label: "Driving instead of Biking",
                src: "/bikeshare iframe/driving_instead_of_bike.html",
                image: "/projects/bikeshare/driving_barriers.png"
              },
              {
                label: "Bike Share Awareness",
                src: "/bikeshare iframe/bikeshare_awareness.html",
                image: "/projects/bikeshare/awareness_sunburst.png"
              }
            ]}
          />
        </div>

        <div>
          <h4 className="text-3xl mb-6 !font-light">INFRASTRUCTURE PREFERENCES</h4>
          <p className="leading-relaxed mb-6">
            Safety rankings confirmed that hydro corridors and parks are perceived as the 
            most comfortable environments for biking in Scarborough.
          </p>

          <ResponsiveEmbed
            src="/bikeshare iframe/infra_hydro_corridors.html"
            preview="/projects/bikeshare/infra_preview.png"
            href="/bikeshare iframe/infra_hydro_corridors.html"
            height={450}
          />
        </div>

      </section>
    </>
  );
}
