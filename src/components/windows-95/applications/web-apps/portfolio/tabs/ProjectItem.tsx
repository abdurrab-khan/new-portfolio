import React from "react";
import BorderContainer from "../../../../common/BorderContainer";

interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  visitLink?: string;
  imagePath?: string;
  onOpenPreview?: () => void;
}

export default function ProjectItem({
  title,
  description,
  technologies,
  githubLink,
  visitLink,
  imagePath,
  onOpenPreview,
}: ProjectItemProps) {
  const actionLinks = [
    { label: "GitHub", href: githubLink },
    { label: "Visit", href: visitLink },
  ].filter((item): item is { label: string; href: string } => Boolean(item.href));

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!onOpenPreview) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenPreview();
    }
  };

  return (
    <div
      role={onOpenPreview ? "button" : undefined}
      tabIndex={onOpenPreview ? 0 : undefined}
      onClick={onOpenPreview}
      onKeyDown={handleKeyDown}
      className={onOpenPreview ? "cursor-pointer focus:outline-none" : undefined}
    >
      <BorderContainer className="mx-auto mb-4 w-full max-w-2xl bg-white p-3 shadow-md">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="h-24 w-full shrink-0 border border-gray-400 bg-gray-200 md:w-32">
            {imagePath ? (
              <img src={imagePath} alt={title} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-xs text-gray-600">
                Project Image
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <h3 className="text-lg font-bold text-purple-900">{title}</h3>
            <p className="text-sm text-gray-800">{description}</p>
            <div className="mt-1 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-purple-400 bg-purple-200 px-2 py-0.5 text-xs text-purple-900 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {actionLinks.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-3">
                {actionLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-block text-sm text-blue-700 underline hover:text-blue-500"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </BorderContainer>
    </div>
  );
}
