import Header from "@/components/Header";
import CustomButton from "@/components/Button";
import PlotEmbed from "@/components/PlotEmbed";

export default function BU354() {
  // Static brand colour for BU354
  const colour = "#4E2A84";

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
              src="/images/bu354-hero.png"
              alt="BU354 Dashboard Hero"
            />
          </div>
        </div>

        {/* PROJECT OVERVIEW MASTER (same structure as ProjectPage) */}
        <div className="headerBody">
          <h4 className="mb-0">Product Design & Full-Stack Development</h4>
          <h1 className="mt-0 mb-10">BU354 Dashboard</h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT COLUMN — OVERVIEW */}
            <div className="md:w-5/7 space-y-4">
              <h4 className="!font-light mb-4">OVERVIEW</h4>
              <p>
                The BU354 Dashboard was developed for the Human Resources
                Management faculty at Wilfrid Laurier University. Across more
                than 59 student participants, this comparative usability study
                evaluated multiple dashboard layouts (A–F), navigation patterns,
                and Laurier-branded colour schemes. Dashboard A emerged as the
                preferred layout—especially among students required to take
                BU354—leading to the final design direction featuring a
                collapsible sidebar, strong Laurier purple branding, and clearer
                deadline visibility.
              </p>

              <h4 className="!font-light mt-10 mb-4">CHECK IT OUT</h4>
              <div className="flex gap-3 flex-wrap">
                <CustomButton
                  href="https://www.figma.com/proto/iyxzz8QmrJeckuwllBQChe/BU354-Dashboard"
                  label="View Prototype"
                />
                <CustomButton
                  href="/files/BU354 Comparative Usability Report.pdf"
                  label="View Full Report"
                />
              </div>
            </div>

            {/* RIGHT COLUMN — QUICK DETAILS */}
            <div className="md:w-2/7 space-y-6">
              <h4 className="!font-light mb-4">CLIENT</h4>
              <p>
                <b>Dr. Steve Risavy - BU354 Human Resources Management</b>
              </p>

              <h4 className="!font-light mb-4">MY ROLE</h4>
              <p className="mb-1">
                <b>Product Designer & Full-Stack Developer</b>
              </p>
              <p className="mt-0 !text-sm">
                Research, data analysis, mid-fi and high-fi prototyping, front and back-end for assignment creation, marking, grading, and submission handling.
              </p>

              <h4 className="!font-light mb-4">TOOLS</h4>
              <p>
                <b>Figma, Prisma, BetterAuth, Next.Js, Supabase, TypeScript, Statistical Hypothesis Inferencing</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* DESIGN PROMPT (same layout as your original project pages) */}
      <section style={{ background: colour }}>
        <div className="pt-10 pb-10 headerBody !text-white">
          <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
          <h3 className="m-0">
            How might we build a dedicated dashboard that helps BU354 students
            clearly understand deadlines, track weekly deliverables, and navigate
            tasks more intuitively than existing LMS tools?
          </h3>
        </div>
        </section><section>
        <div>
          <h4 className="text-3xl mb-6 !font-light">PROJECT OVERVIEW</h4>
          <p className="leading-relaxed">
            The BU354 Dashboard was created for <b>Human Resources Management</b> at the
            Lazaridis School of Business & Economics. Over the Fall 2025 term,
            I led the UX research, prototyping, and testing process under the
            Laurier Start-Up Lab. Input from <b>59+ students</b> shaped the final
            design recommendations, including colour theme evaluations, navigation
            preferences, and dashboard ranking tests across 7 medium-fidelity prototypes.
          </p>
        </div>

        {/* PROBLEM + USER FLOW */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">UNDERSTANDING THE PROBLEM</h4>
  
          <p className="leading-relaxed mb-6">
            BU354 contains multiple weekly group assignments stored in several Word documents.
            Some of these assignments contained questions that had to be repeated manually across
            different files (e.g., “What is your group?”).
            Students reported difficulty tracking these
            deadlines and navigating the existing LMS interface, leading to
            missed submissions and increased stress.
          </p>
          <p className="leading-relaxed">
            Early exploration included mapping typical weekly flows from the
            perspective of both students and graders, followed by examining UI
            structures of familiar platforms like MyLS, Google Docs, Laurier Navigator,
            and other LMS systems.
          </p>
        </div>

        {/* SAMPLE SIZE */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">RESEARCH & DATA COLLECTION</h4>

          <p className="leading-relaxed mb-4">
            The dataset contains feedback from:
          </p>
          
          <ul className="list-disc text-lg pl-6 space-y-2">
            <li><b>31</b> sticky-note participants (qualitative notes)</li>
            <li><b>28</b> detailed survey respondents</li>
            <li><b>59+ total</b> participants contributing to the final results</li>
          </ul>

          <p className="leading-relaxed mt-6">
            Survey participants represented a mix of academic years and majors.
            Students who were required to take BU354 showed particularly strong
            patterns in dashboard preference.
          </p>
        </div>

        {/* MID-FI TESTING */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">MEDIUM-FIDELITY PROTOTYPE TESTING</h4>
          <p className="leading-relaxed mb-6">
            Six variants (Dashboards A–F) were tested using ranking surveys.
            Students rated each dashboard from <b>1 (most liked)</b> to <b>6 (least liked)</b>.
            Distribution plots were used to evaluate medians, means, and skewness
            across respondents.
          </p>

          <p className="leading-relaxed">
            Statistical testing showed:
          </p>
          <PlotEmbed
  src="/html/dashboard_distribution.html"
  title="Dashboard Distribution Plot"
/>

          <ul className="text-lg list-disc pl-6 space-y-2 mt-2">
            <li>Dashboard A consistently performed well across all groups</li>
            <li>Small effect sizes (Cohen’s d ≈ −0.21 and −0.12)</li>
            <li>No statistically reliable difference between A and D/E</li>
          </ul>

          <p className="leading-relaxed mt-6">
            Students who <b>must take BU354</b> ranked Dashboard A the highest,
            showing a clear preference among the most relevant target users.
          </p>
        </div>

        {/* COLOUR + FEATURES */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">COLOUR SCHEME & NAVIGATION PREFERENCES</h4>

          <p className="leading-relaxed mb-4">
            A/B testing was conducted on Laurier-branded colour palettes, comparing
            darker purple themes to more pastel variants. A chi-squared test showed a
            <b>significant preference</b> for the darker purple scheme (p &lt; 0.007).
          </p>

          <p className="leading-relaxed mb-4">
            Navigation preferences were split. Surveys leaned slightly toward a top bar,
            but sticky-note respondents leaned toward a collapsible sidebar—mirroring
            Laurier Navigator’s structure.
          </p>

          <p className="leading-relaxed">
            Students frequently mentioned the need for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Clear progress tracking</li>
            <li>Better visibility of upcoming deadlines</li>
            <li>Split hierarchy for content vs account settings</li>
            <li>Inclusion of the Wilfrid Laurier University logo</li>
          </ul>
        </div>

        {/* FINAL RECOMMENDATIONS */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">FINAL DESIGN RECOMMENDATIONS</h4>

          <p className="leading-relaxed">
            Based on the combined results of surveys, sticky-note sessions, and A/B
            testing, the final recommendations for BU354 include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>A <b>collapsible sidebar</b> for primary navigation</li>
            <li>Use of Laurier’s <b>purple primary colour</b> palette</li>
            <li>A home dashboard prioritizing <b>upcoming deadlines</b></li>
            <li>Refinement of <b>Dashboard A</b> based on consistent user preference</li>
          </ul>

          <p className="leading-relaxed mt-6">
            These findings guided the transition to high-fidelity prototypes with
            complete student and instructor flows, as well as UI components adapted
            from ShadCN to accelerate development.
          </p>
        </div>
      </section>

      {/* ----------------------------- */}
      {/* SECTION 2 — DEV WORK (empty) */}
      {/* ----------------------------- */}

      <section className="headerBody py-20">
        {/* left empty intentionally */}
      </section>
    </>
  );
}
