import Header from "@/components/Header";
import CustomButton from "@/components/Button";
import PlotEmbed from "@/components/PlotEmbed";
import PlotWithInsights from "@/components/MultiPlotEmbed";
import DropdownSection from "@/components/Dropdown";

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
      

      <section style={{ background: colour }}>
        
        <div className="pt-10 pb-10 headerBody !text-white">
          <h4 className="!font-light mt-0 mb-4">DESIGN PROMPT</h4>
          <h3 className="m-0">
            How might we build a dedicated dashboard that helps BU354 students
            clearly understand deadlines, track weekly deliverables, and navigate
            tasks more intuitively than existing LMS tools?
          </h3>
        </div>
        </section><section className="headerBody">
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
            different files (e.g., “What is your group?”), .
          </p>


          <iframe width="100%" height="450" src="https://embed.figma.com/design/iyxzz8QmrJeckuwllBQChe/BU354-Dashboard-Public-Figma?node-id=1-5275&embed-host=share" ></iframe>

          <p className="leading-relaxed">
            Early exploration included mapping typical weekly flows from the
            perspective of both students and graders, followed by examining UI
            structures of familiar platforms like MyLearningSpace, Google Docs, Laurier Navigator,
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
          </p>
<PlotWithInsights
  title="Dashboard Distribution Plot"
  plots={[
    {
      label: "Major Distribution",
      src: "/html/major_distribution.html"
    },
    {
      label: "Year Distribution",
      src: "/html/year_distribution.html"
    },
  ]}
/>

        </div>

        {/* MID-FI TESTING */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">MEDIUM-FIDELITY PROTOTYPE TESTING</h4>
          <iframe width="100%" height="450" src="https://embed.figma.com/design/iyxzz8QmrJeckuwllBQChe/BU354-Dashboard-Public-Figma?node-id=1-3109&embed-host=share" ></iframe>
          <p className="leading-relaxed mb-6">
            Six variants (Dashboards A–F) were tested using ranking surveys.
            Students rated each dashboard from <b>1 (most liked)</b> to <b>6 (least liked)</b>.
            Distribution plots were used to evaluate medians, means, and skewness
            across respondents.
          </p>



          <p className="leading-relaxed">
            Overall, Dashboard A emerged as the preferred layout, with Dashboard D and E being pretty close. 
            Students who must take BU354 ranked Dashboard A the highest,
            showing a clear preference among the most relevant target users.
          </p>

          <PlotWithInsights
  title="Dashboard Distribution Plot"
  plots={[
    {
      label: "Dashboard Rankings",
      src: "/html/dashboard_rankings.html"
    },
    {
      label: "Dashboard Rankings (incl. Sticky Notes)",
      src: "/html/dashboard_rankings_total.html"
    },
    {
      label: "Rankings by Major",
      src: "/html/dashboard_by_major_scatter.html"
    },
  ]}
/>

          <p className="leading-relaxed">
            Statistical testing showed:
          </p>

          <ul className="text-lg list-disc pl-6 space-y-2 mt-2">
            <li>Dashboard A consistently performed well across all groups</li>
            <li>Small effect sizes (Cohen’s d ≈ −0.21 and −0.12)</li>
            <li>No statistically reliable difference between A and D/E</li>
          </ul>
<PlotWithInsights
  title="Dashboard Distribution Plot"
  plots={[
    {
      label: "All Dashboards",
      src: "/html/dashboard_distribution.html"
    },
    {
      label: "Dashboard A vs E",
      src: "/html/comparison_A_vs_E.html"
    },
    {
      label: "Dashboard A vs D",
      src: "/html/comparison_A_vs_D.html"
    },
    {
      label: "Major Distribution",
      src: "/html/dashboard_by_major_grouped.html"
    },
  ]}
/>


<DropdownSection title="HOW TO READ AND INTERPRET THIS DATA?" >
  <p className="leading-relaxed mb-4">
    These box plots show how students ranked each dashboard
    (<b>1 = most liked</b>, <b>6 = least liked</b>). Lower medians and tighter
    spreads indicate stronger and more consistent preference.
  </p>

  <p className="leading-relaxed mb-3">
    <b>Skew quick-read (mean vs median):</b>
  </p>
  <ul className="list-disc text-lg pl-6 space-y-2 mb-6">
    <li>
      <b>If median is lower than mean</b>: most students gave favourable (low)
      rankings, while a small number of poorer ratings pull the mean upward
      (<b>right-skewed</b>).
    </li>
    <li>
      <b>If median is higher than mean</b>: most students gave less favourable
      (high) rankings, while a few strong ratings pull the mean downward
      (<b>left-skewed</b>).
    </li>
  </ul>

  <h5 className="text-lg font-semibold mb-2">
    Paired-Sample <em>t</em>-Test (A vs D/E)
  </h5>

  <p className="leading-relaxed mb-2">
    
  The Python code used to calculate these statistics is based on the <i>scipy.stats.ttest_rel</i> package. Internally it 
computes the difference of the observed difference between 
the scores of the two dashboards.
  </p>
  <p className="leading-relaxed mb-2">
    <b>Observed paired difference (dᵢ):</b> This represents how much one student
    preferred Dashboard A over another dashboard. A negative value means that
    student ranked Dashboard A more favourably. <i>(Anytime a variable is marked with an "ᵢ" just means the value is calculated for one individual student.)</i>
  </p>
  <img
    src="/equations/observeddifference.svg"
    alt="Observed paired difference"
    className="my-3 max-w-full"
  />

  <p className="leading-relaxed mb-2">
    <b>Mean paired difference (d̄):</b> This averages all individual differences
    across respondents and represents the overall direction of preference. A
    negative mean indicates that Dashboard A was preferred on average.
  </p>
  <img
    src="/equations/meanpaired.svg"
    alt="Mean paired difference"
    className="my-3 max-w-full"
  />

  <p className="leading-relaxed mb-2">
    <b>Sample standard deviation of differences (s<sub>d</sub>):</b> This measures
    how much students disagreed in their preferences. Smaller values indicate
    stronger agreement, while larger values indicate more varied opinions.
  </p>
  <img
    src="/equations/samplestandarddiv.svg"
    alt="Sample standard deviation of differences"
    className="my-3 max-w-full"
  />

  <p className="leading-relaxed mb-2">
    <b>Paired <em>t</em>-statistic:</b> This compares the average preference
    difference to the amount of variability in the data. It answers whether the
    observed preference is large relative to how noisy the rankings are.
  </p>
  <img
    src="/equations/pairedt.svg"
    alt="Paired t statistic and degrees of freedom"
    className="my-3 max-w-full"
  />

  <h5 className="text-lg font-semibold mb-2 mt-6">
    Effect Size (Cohen’s <em>d</em>)
  </h5>

  <p className="leading-relaxed mb-2">
    <b>Cohen’s <em>d</em>:</b> This expresses the mean paired difference in
standard-deviation units. Unlike statistical significance, it reflects whether
users would meaningfully notice the difference.
  </p>
  <img
    src="/equations/cohensd.svg"
    alt="Cohen's d for paired samples"
    className="my-3 max-w-full"
  />

  <p className="leading-relaxed mt-4">
    In this study, there was <b>no statistically reliable difference</b> between
    Dashboard A and D/E. However, <b>small effect sizes</b>
    (Cohen’s <em>d</em> ≈ −0.21 and −0.12) consistently favour Dashboard A,
    indicating a subtle but stable preference across respondents.
  </p>
  
</DropdownSection>


        </div>

        {/* COLOUR + FEATURES */}
        <div>
          <h4 className="text-3xl mb-6 !font-light">COLOUR SCHEME & NAVIGATION PREFERENCES</h4>

          <p className="leading-relaxed mb-4">
            Sticky note respondents preferred purple colour schemes that aligned
            with Laurier’s branding. Survey results echoed this sentiment,
            with 65% of respondents favouring purple themes over alternatives.
          </p>


          <ul className="list-disc text-lg pl-6 space-y-2 mt-2">
            <li><em>Darker shades (purple) consistent with Laurier brand</em></li>
<li><em>Lemon (brighter) yellow colour scheme is bad, feels like Windows XP colours</em></li>
<li><em>Hate B, contrast sucks</em></li>
<li><em>Keep primary: Purple, secondary: Yellow</em></li>
<li><em>Make the [highlighted] yellow less bright</em></li>
<li><em>E is okay due to the (tinted) yellow</em></li>

          </ul>


<PlotWithInsights
  title="Dashboard Distribution Plot"
  plots={[
    {
      label: "Colour Scheme Bar Graph",
      src: "/html/colour_theme_bar.html"
    },
    {
      label: "Colour Scheme Preference Distribution",
      src: "/html/colour_theme_preference.html"
    },
  ]}
/>

<DropdownSection title="HOW TO READ AND INTERPRET THIS DATA?" >
  <h5 className="text-lg font-semibold mb-2 mt-8">
  Chi-square Tests (Categorical Preferences)
</h5>

<p className="leading-relaxed mb-3">
  While the paired <em>t</em>-tests compare <b>ranked preferences</b>, chi-square
  tests are used for <b>categorical preference questions</b> (e.g. navigation
  style or colour theme). These tests evaluate whether responses differ from what
  we would expect if students had <b>no real preference</b>.
</p>

<p className="leading-relaxed mb-2">
  <b>Null hypothesis (H₀):</b> All response categories are equally preferred
  (students do not prefer one option over another).
</p>
<img
  src="/equations/nullhypo.svg"
  alt="Null hypothesis for chi-square test"
  className="my-3 max-w-full"
/>

<p className="leading-relaxed mb-2">
  <b>Alternative hypothesis (H₁):</b> At least one category is preferred more or
  less than expected under equal preference.
</p>
<img
  src="/equations/althypo.svg"
  alt="Alternative hypothesis for chi-square test"
  className="my-3 max-w-full"
/>

<p className="leading-relaxed mb-2">
  The <b>expected count (E)</b> for
  each category is calculated by evenly dividing responses across categories.
  Because this analysis compares two options at a time, the expected count
  simplifies to:
</p>
<img
  src="/equations/expectedcount.svg"
  alt="Expected count formula"
  className="my-3 max-w-full"
/>

<p className="leading-relaxed mb-2">
  <b>Observed counts (O)</b> represent the actual number of students who selected
  each category. The <b>chi-square statistic (Χ^2)</b> then measures how far the observed
  counts deviate from these expected counts. <i>The chi-square (Χ^2) is different than the symbol for an unknown variable (x).</i>
</p>
<img
  src="/equations/chi2.svg"
  alt="Chi-square statistic formula"
  className="my-3 max-w-full"
/>

<p className="leading-relaxed mb-2">
  <b>Degrees of freedom (df):</b> For a goodness-of-fit test, this depends only on
  the number of response categories. With two options, the degrees of freedom is:
</p>
<img
  src="/equations/degreefreedomcategories.svg"
  alt="Degrees of freedom formula"
  className="my-3 max-w-full"
/>

<h5 className="text-lg font-semibold mb-2 mt-6">
  Effect Size (Cramér's <em>V</em>)
</h5>

<p className="leading-relaxed mb-2">
  <b>Cramér's <em>V</em>:</b> This effect size quantifies how strong the deviation
  from equal preference is. Unlike statistical significance, it reflects whether
  the difference would be noticeable in practice. <i> (Think of it as the same for Cohen's d. Unlike Cohen's d which is used for numerical data, Cramér's V is used for categorical data.) </i>
</p>
<img
  src="/equations/cramersv.svg"
  alt="Cramér's V formula"
  className="my-3 max-w-full"
/>

</DropdownSection>

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
