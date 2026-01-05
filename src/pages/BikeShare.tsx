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
    <script async src="//www.instagram.com/embed.js"></script>
  
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

          <div className="flex flex-col md:flex-row gap-8 leading-relaxed">
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

          <h4 className="text-3xl mb-6 !font-light">MARKETING</h4>
          <p className="leading-relaxed mb-6">
            Several social media graphics and posters were designed by me in Adobe Illustrator to promote the survey both online and at in-person events.
            These events included our summer BBQ, in local community centres and libraries, as well as the "Ride the Meadowway" event. In total, we interviewed more than 15+ residents and got over 55+ survey respondents.
        
          </p>

          <div 
      style={{ background: colour }}
      className="flex flex-col md:flex-row gap-3 items-center justify-center p-4"
    >
      {/* Image Section */}
      <div className=" flex justify-center w-full md:w-1/2">
        <img
          className="md:w-full h-96 md:h-[500px] lg:h-[800px] object-cover object-center rounded-lg"
          src="/projects/bikeshare/want bike share.jpg"
          alt="Bike Share survey promotion at Ride the Meadowway, 2024"
        />
      </div>

      {/* Instagram Embed Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/p/C93QzHWvLGk/?utm_source=ig_embed&utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '540px',
            minWidth: '326px',
            padding: 0,
            width: '99.375%'
          }}
        >
          <div style={{ padding: '16px' }}>
            <a
              href="https://www.instagram.com/p/C93QzHWvLGk/?utm_source=ig_embed&utm_campaign=loading"
              style={{
                background: '#FFFFFF',
                lineHeight: 0,
                padding: '0 0',
                textAlign: 'center',
                textDecoration: 'none',
                width: '100%'
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '50%',
                    flexGrow: 0,
                    height: '40px',
                    marginRight: '14px',
                    width: '40px'
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'center'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '4px',
                      flexGrow: 0,
                      height: '14px',
                      marginBottom: '6px',
                      width: '100px'
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '4px',
                      flexGrow: 0,
                      height: '14px',
                      width: '60px'
                    }}
                  />
                </div>
              </div>
              <div style={{ padding: '19% 0' }} />
              <div
                style={{
                  display: 'block',
                  height: '50px',
                  margin: '0 auto 12px',
                  width: '50px'
                }}
              >
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                      <g>
                        <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" />
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div style={{ paddingTop: '8px' }}>
                <div
                  style={{
                    color: '#3897f0',
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 550,
                    lineHeight: '18px'
                  }}
                >
                  View this post on Instagram
                </div>
              </div>
              <div style={{ padding: '12.5% 0' }} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '14px',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      height: '12.5px',
                      width: '12.5px',
                      transform: 'translateX(0px) translateY(7px)'
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      height: '12.5px',
                      transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
                      width: '12.5px',
                      flexGrow: 0,
                      marginRight: '14px',
                      marginLeft: '2px'
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      height: '12.5px',
                      width: '12.5px',
                      transform: 'translateX(9px) translateY(-18px)'
                    }}
                  />
                </div>
                <div style={{ marginLeft: '8px' }}>
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      flexGrow: 0,
                      height: '20px',
                      width: '20px'
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '2px solid transparent',
                      borderLeft: '6px solid #f4f4f4',
                      borderBottom: '2px solid transparent',
                      transform: 'translateX(16px) translateY(-4px) rotate(30deg)'
                    }}
                  />
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div
                    style={{
                      width: '0px',
                      borderTop: '8px solid #F4F4F4',
                      borderRight: '8px solid transparent',
                      transform: 'translateY(16px)'
                    }}
                  />
                  <div
                    style={{
                      backgroundColor: '#F4F4F4',
                      flexGrow: 0,
                      height: '12px',
                      width: '16px',
                      transform: 'translateY(-4px)'
                    }}
                  />
                  <div
                    style={{
                      width: 0,
                      height: 0,
                      borderTop: '8px solid #F4F4F4',
                      borderLeft: '8px solid transparent',
                      transform: 'translateY(-4px) translateX(8px)'
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    marginBottom: '6px',
                    width: '224px'
                  }}
                />
                <div
                  style={{
                    backgroundColor: '#F4F4F4',
                    borderRadius: '4px',
                    flexGrow: 0,
                    height: '14px',
                    width: '144px'
                  }}
                />
              </div>
            </a>
            <p
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
                marginBottom: 0,
                marginTop: '8px',
                overflow: 'hidden',
                padding: '8px 0 7px',
                textAlign: 'center',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              <a
                href="https://www.instagram.com/p/C93QzHWvLGk/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  color: '#c9c8cd',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  lineHeight: '17px',
                  textDecoration: 'none'
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                A post shared by Jamaal Myers (@cllrjamaalmyers)
              </a>
            </p>
          </div>
        </blockquote>
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
        <DropdownSection title="WANT MORE CENSUS MAP DATA?">
            <div className="space-y-6">
              {/* BIKING TRACK */}
              <div>
                <p className="text-3xl mb-6 !font-light">Check out my other project, Toronto Census Visualizer! An easy to use tool to view interactive demographic insights across all 158 Toronto neighbourhoods.</p>
                     <CustomButton
                  href="https://torontocensusvisualizer.com/"
                  label="Go to Toronto Census Visualizer"
                />
                    </div>
        </div>
        </DropdownSection>

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
            the burden of maintenance. Bike Share stations alleviate these concerns as the bikes are docked in stations (therefore less likely to be stolen)
            and maintained by the service, making cycling a more viable option for those hesitant to own a bike.
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

<div>
  <h4 className="text-3xl mb-6 !font-light">MODE-SPECIFIC DESTINATIONS & TRAVEL BEHAVIOURS</h4>

  <p className="leading-relaxed">
    To contextualize Bike Share Toronto’s role within the residents of Ward 23, results were 
    analyzed by primary mode of travel. These included biking, public transportation,
    and driving. Grouping findings this way highlights where daily travel concentrates,
    why residents choose specific modes, and where Bike Share could most effectively
    reduce friction or substitute short trips.
  </p>


  <PlotWithInsights
    title="Biking Usage, Destinations, and Motivations"
    plots={[
      {
        label: "Seasonal Biking Usage",
        src: "/bikeshare iframe/biking_usage_spring.html",
        image: "/projects/bikeshare/biking_usage.png",
      },
      {
        label: "Biking Destinations",
        src: "/bikeshare iframe/biking_destinations.html",
        image: "/projects/bikeshare/biking_destinations.png",
      },
      {
        label: "Reasons for Biking",
        src: "/bikeshare iframe/biking_justification.html",
        image: "/projects/bikeshare/biking_justification.png",
      },
    ]}
  />

  <p className="leading-relaxed">
    Biking within Ward 23 is primarily utilitarian, with respondents cycling to work,
    shopping areas, and local destinations. Usage is highest during spring, summer,
    and fall, and motivations for biking are evenly split across convenience, cost,
    personal health, and environmental considerations.
  </p>

  <PlotWithInsights
    title="Public Transportation Destinations and Barriers"
    plots={[
      {
        label: "Public Transit Destinations",
        src: "/bikeshare iframe/pt_destinations_filtered.html",
        image: "/projects/bikeshare/pt_destinations.png",
      },
      {
        label: "Why Transit is Chosen Over Biking",
        src: "/bikeshare iframe/pt_instead_of_bike.html",
        image: "/projects/bikeshare/pt_barriers.png",
      },
      {
        label: "Bikes on Transit",
        src: "/bikeshare iframe/pt_bikes_on_transit.html",
        image: "/projects/bikeshare/pt_bikes.png",
      },
    ]}
  />

  <p className="leading-relaxed ">
    Transit trips commonly terminate at major hubs such as Scarborough Town Centre,
    Finch Station, Kennedy Station, and Union Station. However, most respondents do
    not combine biking with transit, citing safety concerns, maintenance overhead,
    and theft risk. These are all factors that Bike Share stations near transit hubs could mitigate.
  </p>


  <PlotWithInsights
    title="Driving Destinations and Reasons for Car Use"
    plots={[
      {
        label: "Driving Destinations",
        src: "/bikeshare iframe/survey_driving_destinations_scarborough.html",
        image: "/projects/bikeshare/driving_destinations.png",
      },
      {
        label: "Why Driving is Chosen Over Biking",
        src: "/bikeshare iframe/driving_instead_of_bike.html",
        image: "/projects/bikeshare/driving_barriers.png",
      },
    ]}
  />

  <p className="leading-relaxed mt-6 mb-10">
    Driving remains prevalent for longer or multi-stop trips, particularly to
    shopping centres and employment areas. Respondents frequently cited distance,
    safety, and weather as reasons for choosing a car over biking, indicating that
    Bike Share may be most effective for shorter, local trips rather than direct
    substitution of longer driving journeys.
  </p>

  <h4 className="text-2xl mb-4 !font-light">FUTURE BIKE SHARE PREFERENCES</h4>

  <PlotWithInsights
    title="Resident-Identified Future Bike Share Locations"
    plots={[
      {
        label: "Future Bike Share Stations",
        src: "/bikeshare iframe/survey_bikeshare_stations_scarborough.html",
        image: "/projects/bikeshare/future_stations_map.png",
      },
    ]}
  />

  <p className="leading-relaxed mt-6">
    Preferred future station locations strongly overlap with existing biking,
    transit, and driving destinations, particularly Woodside Square, Milliken GO
    Station, Malvern Town Centre, and major corridors. This means that residents may
    be more likely to use Bike Share if stations are placed at these high-demand nodes, including 
    combining several modes of transportation to reach a destination.
  </p>
</div>

        <h4 className="text-3xl mb-6 !font-light">FINDINGS AND RECOMMENDATIONS</h4>
        <p className="leading-relaxed mt-6">
Based on survey responses, interviews, and supporting census data, several key patterns emerged regarding residents' biking behaviour, infrastructure needs, and the potential role of Bike Share Toronto within Ward 23. The following points summarize observed trends in destinations, safety perceptions, seasonal usage, and modal choice, and highlight opportunities to support increased biking through targeted station placement and infrastructure improvements.
</p>
        <ul className="text-lg list-disc pl-6 space-y-2 mt-2">
  <li>
    A Bike Share Toronto station should be placed in Woodside Square, Milliken GO station, and along the hydro corridor. Future expansion should include the redevelopment of Malvern Town Centre concurrent with bike infrastructure expansion and further redevelopment along the area.
    <ul>
      <li>Various interviewees responded about how they frequented stations like Milliken for downtown travel, Woodside Square/Scarborough Town Centre/Malvern Town Centre for shopping.</li>
      <li>While various residents responded that they drove or took public transportation to the area, they preferred/would be open to biking.</li>
        </ul>
  </li>

  <li>
    A major obstacle towards biking can be mitigated by Bike Share Toronto, reducing the risk of bike maintenance
  </li>

  <li>
    It continues to be vital for bike infrastructure to be improved to facilitate increased biking within Ward 23.
    <ul>
      <li>Respondents noted major roads without bike lanes as mainly less safe  than their counterparts with bike lanes </li>
      <li>Parks remain a popular medium to bike alongside hydro corridors </li>
      <li>Residential roads and sidewalks incurred mixed opinions</li>
      <li>Interviewees noted how scary it would be riding right beside cars, and liked the separation given by bike lanes</li>
    </ul>
  </li>

  <li>
    Utilitarian biking was common within our sample size, with interviewees expanding that they use biking to get to work as it was faster than taking public transportation or driving.
    <ul>
      <li>Reasons given for biking are evenly split between convenience, cost, personal health, and environmental reasons</li>
     
    </ul>
  </li>

  <li>
    Biking remains popular in Scarborough North around areas including Woodside Square, Malvern Town Centre, and Steeles Avenue East
   
  </li>

  <li>
    Biking remains relatively high in Ward 23 in the spring, summer, and fall, and dips in the winter

  </li>

  <li>
    Census data collected in 2021 states Ward 23 biking compared to the rest of the city is relatively low. Driving is higher in Scarborough at-large compared to the downtown core, a pattern shared by suburban areas of Toronto
 
     
  </li>

  <li>
    Bike Share Toronto is known by a lot of residents in Ward 23.
  </li>

  <li>
    A majority of residents do not use their bikes in conjunction with public transportation
    <ul>
      <li>Interviewees noted how they would usually take one or the other.</li>
      <li>Some interviewees used Bike Share downtown, but took public transportation to get downtown</li>
    </ul>
  </li>
</ul>

      </section>
      
    </>
  );
}
