import Image from 'next/image';
import Link from 'next/link';
import cx from 'classnames';

interface MenuItemProps {
  icon: string;
  title: string;
  active?: boolean;
  href: string;
}
export default function MenuItem(props: Partial<MenuItemProps>) {
  const { icon, title, active, href } = props;

  const classItems = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItems}>
      <div className="me-3">
        <Image
          src={`/icon/${icon}.svg`}
          width={25}
          height={25}
          alt="overview-icon"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
