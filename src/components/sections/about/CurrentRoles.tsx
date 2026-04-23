interface Role {
  action: string;
  company: string;
  url: string;
}

interface CurrentRolesProps {
  roles: Role[];
  currentlyAtLabel: string;
}

export default function CurrentRoles({ roles, currentlyAtLabel }: CurrentRolesProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium uppercase tracking-widest text-light-purple/60">
        {currentlyAtLabel}
      </p>
      {roles.map(({ action, company, url }) => (
        <a
          key={company}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-fit items-center gap-2 text-sm text-text/70 transition-colors duration-200 hover:text-text"
        >
          <span>{action}</span>
          <span className="text-dark-purple group-hover:underline">@ {company}</span>
          <span className="text-light-purple/40 transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      ))}
    </div>
  );
}
