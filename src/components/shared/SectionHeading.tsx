import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  action?: { label: string; href: string };
  inverse?: boolean;
};

export function SectionHeading({ eyebrow, title, text, action, inverse = false }: Props) {
  return (
    <div className={`section-heading ${inverse ? "section-heading--inverse" : ""}`}>
      <div>
        {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action ? <Link className="text-link" href={action.href}>{action.label}</Link> : null}
    </div>
  );
}
