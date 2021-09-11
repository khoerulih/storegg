import cx from 'classnames';

interface ButtonTabProperties {
  title: string;
  active: boolean;
}

export default function ButtonTab(props: ButtonTabProperties) {
  const { title, active } = props;
  const btnClass = cx({
    btn: true,
    'btn-status': true,
    'rounded-pill': true,
    'text-sm': true,
    'me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href="#" className={btnClass}>
      {title}
    </a>
  );
}
