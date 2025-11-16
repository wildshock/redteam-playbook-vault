import Layout from "@/components/Layout";
import WriteupCard from "@/components/WriteupCard";

const Writeups = () => {
  const writeups = [
    {
      title: "HTB: Machine Enumeration & Initial Access",
      description:
        "Detailed walkthrough of reconnaissance methodology and exploiting web vulnerabilities to gain initial foothold.",
      category: "HTB Machine",
      link: "/writeups/htb-machine-1",
    },
    {
      title: "PortSwigger: Advanced XSS Exploitation",
      description:
        "Breaking down complex XSS scenarios including CSP bypasses and context-specific payload crafting.",
      category: "PortSwigger Lab",
      link: "/writeups/portswigger-xss",
    },
    {
      title: "API Security: BOLA to Account Takeover",
      description:
        "Step-by-step analysis of broken object level authorization leading to full account compromise.",
      category: "API Attack",
      link: "/writeups/api-bola",
    },
    {
      title: "Understanding SSRF: Detection to Exploitation",
      description:
        "Technical deep dive into Server-Side Request Forgery vulnerabilities with practical exploitation examples.",
      category: "Vulnerability Analysis",
      link: "/writeups/ssrf-analysis",
    },
    {
      title: "HTB: Privilege Escalation via Sudo Misconfiguration",
      description:
        "Exploiting sudo permissions and GTFOBins techniques to achieve root access.",
      category: "HTB Machine",
      link: "/writeups/htb-privesc",
    },
    {
      title: "PortSwigger: SQL Injection Masterclass",
      description:
        "From basic SQLi to blind exploitation and automated data exfiltration techniques.",
      category: "PortSwigger Lab",
      link: "/writeups/portswigger-sqli",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight">Writeups</h1>
          <p className="text-lg text-muted-foreground">
            Detailed writeups covering HTB machines, PortSwigger labs, vulnerability research, and
            offensive security techniques.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {writeups.map((writeup) => (
            <WriteupCard key={writeup.title} {...writeup} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Writeups;
