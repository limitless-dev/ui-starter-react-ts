type Unit = '%' | 'px' | 'em' | 'vh' | 'vh';

export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary';
  shape?: 'square' | 'circle';
  title?: string;
  maxWidth?: `${number}${Unit}`;
  children?: React.ReactNode;
  onClick: () => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size,
  maxWidth,
  title,
  type,
}) => {
  const custom = {
    size: '',
    type: '',
  };

  switch (size) {
    case 'small':
      custom.size = 'h-8';
      break;
    case 'large':
      custom.size = 'h-12';
      break;
    default:
      custom.size = 'h-10';
      break;
  }

  switch (type) {
    case 'secondary':
      custom.type =
        'bg-geist-background text-accents-5 border-accents-2 hover:bg-geist-background hover:border-geist-foreground';
      break;
    default:
      custom.type =
        'bg-geist-foreground text-geist-background border-geist-foreground hover:bg-transparent';
      break;
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        ' hover:text-geist-foreground flex max-w-full items-center justify-center rounded-[5px] border border-solid px-3 py-0 text-sm font-normal leading-5 transition-[border-color,background,color,transform,box-shadow] duration-[0.15s] ease-[ease] hover:shadow-[none]',
        Object.values(custom).join(' ')
      )}
      style={{ maxWidth }}
    >
      <span className="inline-block overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
        {title}
      </span>
    </button>
  );
};

export default Button;
