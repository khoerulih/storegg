interface FooterItemProps {
  sectionTitle: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  href1?: string;
  href2?: string;
  href3?: string;
  href4?: string;
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  // eslint-disable-next-line object-curly-newline
  const {
    sectionTitle,
    link1,
    link2,
    link3,
    link4,
    href1 = '/',
    href2 = '/',
    href3 = '/',
    href4 = '/',
  } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">
        {sectionTitle}
      </p>
      <ul className="list-unstyled">
        <li className="mb-6">
          <a
            href={href1}
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link1}
          </a>
        </li>
        <li className="mb-6">
          <a
            href={href2}
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link2}
          </a>
        </li>
        <li className="mb-6">
          <a
            href={href3}
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link3}
          </a>
        </li>
        <li className="mb-6">
          <a
            href={href4}
            className="text-lg color-palette-1 text-decoration-none"
          >
            {link4}
          </a>
        </li>
      </ul>
    </div>
  );
}
