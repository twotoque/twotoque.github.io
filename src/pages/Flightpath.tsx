import Header from "@/components/Header";
import CustomButton from "@/components/Button";
import PlotEmbed from "@/components/PlotEmbed";
import PlotWithInsights from "@/components/MultiPlotEmbed";
import DropdownSection from "@/components/Dropdown";
import LogoTitle from "@/components/Role";
import ResponsiveEmbed from "@/components/MobileIframe";
import SVGFrameViewer from "@/components/SVGFrame";
export default function Flightpath() {
  // Static brand colour for BU354
  const colour = "#007bcd";
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    const dijkstras = [
       "/flightpath/dijkstra1.svg",
       "/flightpath/dijkstra2.svg",
       "/flightpath/dijkstra3.svg",
       "/flightpath/dijkstra4.svg",
       "/flightpath/dijkstra5.svg",
       "/flightpath/dijkstra6.svg",
       "/flightpath/dijkstra7.svg",
       "/flightpath/dijkstra8.svg",
    ];

    const reconstruct = [
        "/flightpath/reconstruct1.svg",
        "/flightpath/reconstruct2.svg",
        "/flightpath/reconstruct3.svg",
        "/flightpath/reconstruct4.svg",
        "/flightpath/reconstruct5.svg",
        "/flightpath/reconstruct6.svg",
        "/flightpath/reconstruct7.svg",
        "/flightpath/reconstruct8.svg",
     ];


  return (
    <>
    <script async src="//www.instagram.com/embed.js"></script>
  
      <Header />

      {/* ----------------------------- */}
      {/* SECTION 1 — PROJECT OVERVIEW */}
      {/* ----------------------------- */}

      <section className="min-h-[90vh] h-auto ">
        {/* HERO */}
        <div style={{ background: colour }}>
          <div className="headerBody flex justify-center">
            <img
              className="w-full h-auto max-w-[100%] max-h-[40rem] object-contain"
              src="/projects/flightpath/flightpath.jpg"
              alt="FlightPath Downsview Hero"
            />
          </div>
        </div>

        {/* PROJECT OVERVIEW MASTER (same structure as ProjectPage) */}
        <div className="headerBody ">
          <h4 className="mb-0">Full-Stack Development</h4>
          <h1 className="mt-0 mb-10">FlightPath Downsview</h1>

          <div className="flex flex-col md:flex-row gap-8 leading-relaxed">
            {/* LEFT COLUMN — OVERVIEW */}
            <div className="md:w-5/7 space-y-4">
              <h4 className="!font-light mb-4">OVERVIEW</h4>
              <p> FlightPath Downsview is a TypeScript React tool designed to help people who are deaf and hard of hearing learn more about Downsview Park during Cycling Without Age rides. It also includes a “Pathfinder” tool to guide users along the shortest routes between park attractions using Dijkstra's algorithm.</p>

              <h4 className="!font-light mt-10">CHECK IT OUT</h4>
              <div className="flex gap-3 flex-wrap !pb-10">
                <CustomButton
                  href="https://flightpath.ourgreenway.ca/"
                  label="View Tool"
                />
                <CustomButton
                  href="https://brand.ourgreenway.ca/flightpath"
                  label="View Documentation"
                />
                <CustomButton
                  href="https://github.com/Our-Greenway/FlightPath-Downsview"
                  label="View GitHub Repository"
                />
              </div>
            </div>

            {/* RIGHT COLUMN — QUICK DETAILS */}
            <div className="md:w-2/7 space-y-6">
              <h4 className="!font-light mb-4">CLIENT</h4>
              <p>
                <b>Our Greenway Conservatory</b>
              </p>

              <h4 className="!font-light mb-4">MY ROLE</h4>
              <p className="mb-1">
                <b>Full Stack Developer and Project Lead</b>
              </p>
              <p className="mt-0 !text-sm">
               Worked with Our Greenway to develop the app using QGIS data, React, and TypeScript, and provided updates to staff.
              </p>

              <h4 className="!font-light mb-4">TOOLS</h4>
              <p>
                <b>QGIS, React, TypeScript, Python, PostgreSQL</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      

      <section style={{ background: colour }}>
        
        <div className="pt-10 pb-10 headerBody !text-white">
          <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
          <h3 className="m-0">
            How can we make Cycling Without Age rides at Downsview Park more engaging and informative for deaf and hard of hearing participants?
            </h3>
        </div>
        </section>

<section className="headerBody">
  <h4 className="text-3xl mb-6 !font-light">PREAMBLE</h4>
  <p className="leading-relaxed">
    Our Greenway's trishaw "Cycling Without Age" program offers rides year-round through the park, which was once a Royal Canadian Air Force base and is now a vibrant urban green space. Most rides follow the scenic circuit path, a wide, paved, and fully accessible loop around the park.
    </p>
  <p className="leading-relaxed">
    Cycling Without Age rides at Downsview Park relied on a narrator or "pilot" to verbally share stories about the park’s rich aviation history and natural landmarks with passengers. While this created a social atmosphere, it presented a significant accessibility barrier for deaf and hard-of-hearing riders who couldn't engage with the spoken tour.
  </p>
  <p className="leading-relaxed mt-4">
    Taking inspiration from navigation apps like <strong>Transit</strong> which use clear, visible text instructions and real-time updates, I saw an opportunity to digitize and make this part of the program accessible. By integrating location-aware storytelling and visual prompts, we could ensure that every rider, regardless of their hearing ability, has a front-row seat to the history of Downsview Park. 
  </p>

   <div style={{ background: "#202020" }}>
          <div className="headerBody flex justify-center">
            <img
              className="w-full h-auto max-w-[100%] max-h-[40rem] object-contain"
              src="/projects/flightpath/c file.png"
              alt="Cp264 Graph Implementation"
            />
          </div>
        </div>

  <p className="leading-relaxed mt-4">
    Additionally, in CP264 (Data Structures 2), I implemented graph data structures and weighted adjacency lists in C. I realized that the logic used to connect nodes in a program was the perfect framework for mapping Downsview Park.  </p>

      <p className="leading-relaxed mt-4">
    By treating park attractions as nodes and the paths between them as weighted edges, I could apply the same algorithmic thinking from my coursework to a real-world accessibility challenge. This background allowed me to move beyond a simple static map and build a dynamic tool that calculates the most efficient routes for riders.
    </p>
</section>


<section className="headerBody !leading-relaxed">
  <h4 className="text-3xl mb-6 !font-light">HOW PATHFINDER WORKS</h4>
  <p>
   Pathfinder is a shortest-path feature powered by Dijkstra’s algorithm based on a weighted bi-directional graph, helping users find the quickest route between attractions within Downsview Park.
    </p>


            <div style={{ background: "#fffdf2" }}>
            <div className="headerBody flex justify-center">
                <img
                className="w-full h-auto max-w-[100%] md:max-h-[30rem] object-contain"
                src="/flightpath/filesystem.svg"
                alt="Full weighted bi-directional graph of Downsview Park's attractions"
                />
                </div>
                </div>

            <p className="pb-10">
            Image: relationship between each node and edge.
            </p>
            

<p>This graph consists of nodes defined as .geojson files in <code>./geojson/</code>. Naming structure of the node is just the node name (e.g. <code>NorthFarm.geojson</code>, think of it as a park attraction), and contains a neighbour array with the filenames of all of its neighbour edges (e.g. <code>"neighbours": [ "KeeleWycombe_to_NorthFarm", "NorthFarm_to_NorthPlaza" ]</code>).</p>
            <p> Each edge is defined in the <code>./geojson/paths/</code> folder with the naming structure being <code>A_to_B.geojson</code> (e.g. <code>KeeleWycombe_to_NorthFarm.geojson</code>, think of it as a pathway to connect various attractions). Each edge contains a MultiLineString or LineString with a feature containing the properties:</p>
            <ul className="list-disc pl-6">
                <li><code>length</code> (int): the length of the edge in meters. This is used by Dijkstra’s algorithm as the weight of the path.</li>
                <li><code>degreeLength</code> (int): the length of the edge in decimal degrees (CRS84), autogenerated by QGIS. Do not use this value for weight, as degreeLength proportions are dependent by the latitude and longitude of the coordinate. Use the Python script found in <code>qgis/degToMeter.py</code> to convert it to the <code>degree</code> parameter.</li>
            </ul>
            <p>The combined nodes and edges are called by the function <code>buildGraph()</code> found in <code>./src/context/GraphContext.tsx</code> to build the weighted graph. <i>The visual length of edges in the figure does not reflect their true weights; this is not important, as the program does not use the figure for calculations.</i></p>
           
            <div style={{ background: "#fffdf2" }}>
            <div className="headerBody flex justify-center">
                <img
                className="w-full h-auto max-w-[100%] max-h-[40rem] object-contain"
                src="/flightpath/buildGraph.svg"
                alt="Full weighted bi-directional graph of Downsview Park's attractions"
                />
                </div>
                </div>

            <p className="pb-10">
            Image: full weighted bi-directional graph of Downsview Park's attractions.
            </p>
          <p>Within the same file, when a Pathfinder request is called, then it will feed the starting point and graph to function <code>dijkstras()</code>. It will return a DijkstraResult object, with </p>
          <ul className="list-disc pl-6">
            <li><code>Object with distance</code> (int): distance from previous node</li>
            <li><code>Previous</code> (string): the name of the previous node</li>
          </ul>

          <SVGFrameViewer svgPaths={dijkstras} />
            

            <p className="pb-10">
            Image: diagram of an example request to <code>dijkstras()</code> from MiniMound to Playground.
            </p>

          <p>This function works like this:</p>
          <ul className="list-disc pl-6">
            <li><strong>1. </strong> Sets all of the node distances to infinity except the starting one to zero</li>
            <li><strong>2. </strong> At the starting node, examine all adjacent nodes. For each, record the edge weight as its tentative distance and note the starting node as the previous node. </li>
            <li><strong>3. </strong> Place all unvisited neighbour nodes into an array and sort them by their tentative distances (TypeScript's <code>sort()</code> function is used by weight.) This will determine which node to examine next. </li>
            <li><strong>4. </strong> For each node examined, if a shorter path is found (i.e., the new calculated distance is lower than the current recorded distance), update the distance and previous node.</li>
            <li><strong>5. </strong> Continue the process, moving to the node with the smallest tentative distance, until all nodes have been visited.</li>
          </ul>
          <p> The Dijkstra function only gives us a running list of distance and its previous node that it connects to, but we don't know the exact path from the start to end. Hencewhy <code>reconstructPath()</code> is required to backtrack. It returns a string array of node IDs representing the shortest path from the start node to the end node. </p>



           <SVGFrameViewer svgPaths={reconstruct} />
            

            <p className="pb-10">
            Image: diagram of an example request to <code>reconstructPath()</code> from MiniMound to Playground.
            </p>



          <p>This function works like this: (note again that this function backtracks)</p>
          <ul className="list-disc pl-6">
            <li><strong>1. </strong> Start with an empty array for the path and set the current node to examine as the end node. The distance is already given here and is constant; it will not change.</li>
            <li><strong>2. </strong> While the previous node parameter is not null, add it to the beginning of the path. Go to that node's listed previous node </li>
            <li><strong>3. </strong> Once previous node is null, return the array representing the shortest path from start to end </li>
          </ul>


          <p>To trigger the pathfinder algorithm, it is controlled in the <code>src/pages/Pathfinder.tsx</code> page.</p>
            <ul className="list-disc pl-6">
            <li><strong>1. </strong>Users select the start and end locations from dropdown menus, populated from all available nodes (attractions or points of interest) in the park.</li>
            <li><strong>2. </strong>Whenever a selection changes, the app checks if both a start and end node are chosen, and whether the same query was already processed (cached in const <code>lastProcessedRef</code>), to avoid redundant calculations.</li>
            <li><strong>3. </strong>When both nodes are set and it’s a new query, the app automatically triggers the path-finding logic by calling <code>findPath(start, end)</code>, which runs Dijkstra’s algorithm behind the scenes. The UI shows a loading spinner while the calculation is in progress.</li>
            <li><strong>4. </strong>Once a path is found, the result (path and distance) is saved in shared context so it can be displayed in the Pathfinder UI and on the map. The route is shown as a list of nodes (e.g. <code>MiniMound to Playground</code>) and the total distance is displayed.</li>
        </ul>


        <h4 className="text-3xl mb-6 !font-light">NAVIGATION</h4>
        <p>All navigation state (user position, nearest polygon, distance, inside/outside status) is managed centrally by the MapContext defined in <code>/src/context/MapContext</code>, so it can be accessed from any component, such as map overlays, info cards, or directions panels. The properties of this context are:</p>
        <ul className="list-disc pl-6">
            <li>
                <code>userPoint: Coordinates | null</code> : The user’s current GPS coordinates as a pair <code>[longitude, latitude]</code>, or <code>null</code> if unavailable.
            </li>
            <li>
                <code>nearestPolygon: Feature&lt;Polygon | MultiPolygon&gt; | null</code>: The GeoJSON polygon (park area) closest to the user, or <code>null</code> if not calculated yet.
            </li>
            <li>
                <code>distance: number | null</code>: The distance (in kilometers) from the user’s location to the nearest polygon, or <code>null</code> if not determined.
            </li>
            <li>
                <code>isInside: boolean | null</code>: Whether the user’s location is inside the nearest polygon. <code>true</code> for inside, <code>false</code> for outside, <code>null</code> if not checked.
            </li>
            <li>
                <code>isLoading: boolean</code>: Indicates if the map and context data are still loading.
            </li>
            <li>
                <code>currentPolygonData: &#123; id, heroImage, description &#125; | null</code>: Metadata (ID, image, description) for the current/nearest polygon, or <code>null</code> if not available.
            </li>
            <li>
                <code>pathFinder: PathFinderState</code>: Contains all current state for the pathfinding feature (active state, start/end nodes, computed path, and distance).
            </li>
            <li>
                <code>savedPathFinder: PathFinderState | null</code>: A backup of the most recently saved pathfinding state, for easy undo/restore.
            </li>
            <li>
                <code>allPolygons: Feature&lt;Polygon | MultiPolygon&gt;[]</code>: Array of all attraction polygons loaded from GeoJSON files.
            </li>
            <li>
                <code>allPaths: Record&lt;string, Feature&lt;LineString&gt;[]&gt;</code>: Object mapping path names (e.g. <code>"KeeleWycombe_to_NorthFarm"</code>) to arrays of path features (edges) loaded from GeoJSON.
            </li>
        </ul>
        <p>With these methods:</p>
        <ul className="list-disc pl-6">
        <li>
            <code>setUserPoint(pt: Coordinates)</code>: Updates the user’s current GPS position on the map.
        </li>
        <li>
            <code>setNearestPolygon(f: Feature&lt;Polygon | MultiPolygon&gt;)</code>: Sets the nearest attraction area (polygon) to the user’s current location.
        </li>
        <li>
            <code>setPathFinderActive(active: boolean)</code>: Enables or disables the Pathfinder tool’s active state (useful for toggling UI or logic).
        </li>
        <li>
            <code>setPathFinderResult(result: &#123; startNode, endNode, pathNodes, distance &#125;)</code>: Saves the results of a pathfinding request, including the nodes visited and the total distance.
        </li>
        <li>
            <code>clearPathFinder()</code>: Resets and clears all Pathfinder state, including start/end nodes and path results.
        </li>
        <li>
            <code>savePathFinder()</code>: Temporarily stores the current Pathfinder state, so users can restore it later.
        </li>
        <li>
            <code>restorePathFinder()</code>: Recovers and reapplies the previously saved Pathfinder state.
        </li>
        </ul>



        <p>This navigation feature works like this:</p>
            <ul className="list-disc pl-6">
            <li><strong>1. </strong>When the app loads, it requests the user’s live location using the browser’s geolocation API (through Turf.js' watch with enableHighAccuracy set as true) and saves their position as a coordinate pair.</li>
            <li><strong>2. </strong>The app loads all attraction areas (polygons) and pathways (edges) from GeoJSON files in <code>/geojson/</code> and <code>/geojson/paths/</code> into context.</li>
            <li><strong>3. </strong>Every time the user’s location updates, the app calculates the closest park attraction (polygon) to the user using Turf.js' polygonToLine method.</li>
            <li><strong>4. </strong>The distance from the user to the nearest polygon is measured and recorded in the MapContext's distance, nearestPolygon property. isInside will be set to true if it is inside a polygon, and isLoading will be set to false when it is done. </li>
            </ul>

        <p>The user interface of the navigation tool is controlled by the <code>/src/pages/InfoPanel.tsx</code> component. It switches between:</p>
            <ul className="list-disc pl-6">
            <li> <code>/src/pages/ApproachingPanel</code> when <code>isInside</code> is false </li>
            <li> <code>/src/pages/InsidePanel</code> when <code>isInside</code> is true </li>
            </ul>
        <p>The ApproachingPanel calls for the distance and nearestPolygon. The InsidePanel calls for nearestPolygon, as well as a Supabase PostgreSQL database. </p>

        <h4 className="text-3xl mb-6 !font-light">PARK ATTRACTION SQL DATABASE</h4>
        <p>The name of the park attraction is sent (e.g. <code>MiniMound</code>) and it selects all of the rows in the database at the <code>location</code> column.</p>
        <p>This database is structured like:</p>
        <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="!bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">Column</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Constraints</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Default</th>
          <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>id</code></td>
          <td className="border border-gray-300 px-4 py-2">bigint</td>
          <td className="border border-gray-300 px-4 py-2">Primary Key, Auto-increment</td>
          <td className="border border-gray-300 px-4 py-2">Generated identity</td>
          <td className="border border-gray-300 px-4 py-2">Unique identifier</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>location</code></td>
          <td className="border border-gray-300 px-4 py-2">text</td>
          <td className="border border-gray-300 px-4 py-2">NOT NULL</td>
          <td className="border border-gray-300 px-4 py-2">-</td>
          <td className="border border-gray-300 px-4 py-2">Park attraction name (e.g. MiniMound, NorthFarm)</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>feature</code></td>
          <td className="border border-gray-300 px-4 py-2">text</td>
          <td className="border border-gray-300 px-4 py-2">NOT NULL</td>
          <td className="border border-gray-300 px-4 py-2">'' (empty string)</td>
          <td className="border border-gray-300 px-4 py-2">Description of the location's features</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>created_at</code></td>
          <td className="border border-gray-300 px-4 py-2">timestamp with time zone</td>
          <td className="border border-gray-300 px-4 py-2">NOT NULL</td>
          <td className="border border-gray-300 px-4 py-2">now()</td>
          <td className="border border-gray-300 px-4 py-2">Record creation timestamp</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>image</code></td>
          <td className="border border-gray-300 px-4 py-2">text</td>
          <td className="border border-gray-300 px-4 py-2">NULL</td>
          <td className="border border-gray-300 px-4 py-2">null</td>
          <td className="border border-gray-300 px-4 py-2">Optional image URL or file path</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2"><code>bg_colour</code></td>
          <td className="border border-gray-300 px-4 py-2">text</td>
          <td className="border border-gray-300 px-4 py-2">NULL</td>
          <td className="border border-gray-300 px-4 py-2">null</td>
          <td className="border border-gray-300 px-4 py-2">Optional background color for UI theming</td>
        </tr>
      </tbody>
    </table>
  </div>

<p>For example, if we try to input <code>MiniMound</code> as our location, it returns:</p>
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 px-4 py-2 text-left">location</th>
          <th className="border border-gray-300 px-4 py-2 text-left">created_at</th>
          <th className="border border-gray-300 px-4 py-2 text-left">feature</th>
          <th className="border border-gray-300 px-4 py-2 text-left">image</th>
          <th className="border border-gray-300 px-4 py-2 text-left">bg-colour</th>
          <th className="border border-gray-300 px-4 py-2 text-left">id</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">MiniMound</td>
          <td className="border border-gray-300 px-4 py-2">2025-08-24 19:09:28.304071+00</td>
          <td className="border border-gray-300 px-4 py-2">Man-made mound from lake construction soil</td>
          <td className="border border-gray-300 px-4 py-2">/icons/Soil.svg</td>
          <td className="border border-gray-300 px-4 py-2">fff0de</td>
          <td className="border border-gray-300 px-4 py-2">7</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">MiniMound</td>
          <td className="border border-gray-300 px-4 py-2">2025-08-24 19:11:04.65524+00</td>
          <td className="border border-gray-300 px-4 py-2">360° views of all three park ponds/lake, popular photo spot</td>
          <td className="border border-gray-300 px-4 py-2">/icons/Camera.svg</td>
          <td className="border border-gray-300 px-4 py-2"></td>
          <td className="border border-gray-300 px-4 py-2">8</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p>These values are then fed to <code>/src/components/Description.tsx</code>, which is a label that has an icon on the left and a description of something on the right. </p>
    <p>Device orientation is determined by the <code>getOrientation</code> hook with event listeners found in <code>src/context/Orientation.tsx</code>. <code>getOrientation() = 'portrait'</code> means the device is in portrait mode, likewise if <code>getOrientation() = 'landscape'</code>, it is in landscape mode. </p>
              
          <h4 className="pt-3 text-3xl mb-6 !font-light">QGIS MAINTENANCE</h4>
          <p>The GeoJSONs are maintained mainly by QGIS. Adjustments can be made in the .qgz and .qgs files in the <code>/qgis</code> root folder, and can exported as <code>/qgis/QGISexport.py</code> in QGIS' Python console. Ensure that these polygons are GeoJSONs; ESRI Shapefiles are not supported. Ensure that the length parameter are in metres, not in decimal degrees (CRS84). Use the Python script found in <code>/qgis/degToMeter.py</code> to convert it to the <code>degree</code> parameter.</p>


  <h4 className="text-3xl mb-6 !font-light">TECH STACK</h4>

      <div className="flex flex-col gap-3">
        
      <LogoTitle
        logoSrc="./tech/typescript.svg"
        title="TypeScript"
        subtitle="Front and Backend Programming Language"
        ></LogoTitle>
      <LogoTitle
        logoSrc="./tech/react.svg"
        title="React"
        subtitle="Frontend"
        ></LogoTitle>
      <LogoTitle
        logoSrc="./tech/supabase.jpg"
        title="Supabase"
        subtitle="Database"
        ></LogoTitle>
      <LogoTitle
        logoSrc="./tech/postgresql.svg"
        title="PostgreSQL"
        subtitle="Database Language"
        ></LogoTitle>
      <LogoTitle
        logoSrc="./tech/qgis.svg"
        title="QGIS"
        subtitle="Geographic Information System"
        ></LogoTitle>

      <LogoTitle
        logoSrc="./tech/python.svg"
        title="Python"
        subtitle="Data Processing Programming Language"
        ></LogoTitle>
        </div>

     <h4 className="text-3xl mb-6 !font-light">HOW IT LOOKS</h4>
        
<iframe
        src="https://www.youtube.com/embed/_2e63mYgI3g"
        title="YouTube video player"  
        className="w-full h-auto  aspect-video mb-10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

</section>
    </>
  );
}
