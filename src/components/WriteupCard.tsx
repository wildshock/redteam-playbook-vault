import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface WriteupCardProps {
  title: string;
  description: string;
  link: string;
  category: string;
}

const WriteupCard = ({ title, description, link, category }: WriteupCardProps) => {
  return (
    <Link to={link} className="group block">
      <div className="flex h-full items-start gap-4 rounded-lg border border-operator-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
        <FileText className="h-6 w-6 flex-shrink-0 text-accent" />
        <div className="flex-1">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent">
            {category}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default WriteupCard;
