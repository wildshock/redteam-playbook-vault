import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="h-full rounded-lg border border-operator-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
        <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-accent">
          {title}
        </h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="border border-accent/20 bg-accent/10 text-accent hover:bg-accent/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
