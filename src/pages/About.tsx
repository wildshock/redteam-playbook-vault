import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold tracking-tight">
            About <span className="text-accent">AARAVSEC</span>
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Who I Am</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm an aspiring offensive security practitioner with a focused interest in red
                teaming operations. My work centers on web exploitation, API security assessments,
                and privilege escalation techniques across Windows and Linux environments.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Technical Focus</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-operator-border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-accent">Web Exploitation</h3>
                  <p className="text-sm text-muted-foreground">
                    XSS, CSRF, SQLi, IDOR, authentication bypasses, and business logic flaws
                  </p>
                </div>
                <div className="rounded-lg border border-operator-border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-accent">API Security</h3>
                  <p className="text-sm text-muted-foreground">
                    REST/GraphQL testing, broken authorization, mass assignment, rate limiting
                  </p>
                </div>
                <div className="rounded-lg border border-operator-border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-accent">Privilege Escalation</h3>
                  <p className="text-sm text-muted-foreground">
                    Linux/Windows post-exploitation, misconfigurations, kernel exploits
                  </p>
                </div>
                <div className="rounded-lg border border-operator-border bg-card p-4">
                  <h3 className="mb-2 font-semibold text-accent">Tooling & Scripting</h3>
                  <p className="text-sm text-muted-foreground">
                    Burp Suite workflows, Python automation, Bash scripting, recon automation
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Methodology</h2>
              <p className="text-muted-foreground leading-relaxed">
                My approach is methodology-driven and documentation-heavy. I believe in systematic
                enumeration, thorough reconnaissance, and maintaining detailed notes throughout
                every engagement. The operator mindset means treating every assessment with the
                discipline of a real-world adversary.
              </p>
            </section>

            <section className="rounded-lg border border-accent/20 bg-accent/5 p-6">
              <h2 className="mb-3 text-xl font-semibold">Why This Site Exists</h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-accent">Proof over talk.</span> This portfolio
                serves as a living demonstration of capability, methodology, and continuous
                learning. Every project, writeup, and note represents real work—not theoretical
                knowledge.
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
