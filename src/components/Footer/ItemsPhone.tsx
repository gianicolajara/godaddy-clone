import Link from "../shared/Link";
import Para from "../shared/Para";

type Props = {
  data: {
    id: number;
    title: string;
    items: {
      id: number;
      label: string;
    }[];
  }[];
};

const ItemsPhone = ({ data }: Props) => {
  return (
    <div className="w-full xl:hidden flex flex-col">
      {data.map((item) => (
        <details className="group group-open:mb-4" key={item.id}>
          <summary className="flex w-full justify-between py-2 select-none cursor-pointer">
            <Para color="white" size="sm">
              {item.title}
            </Para>
            <div className="group-open:flex hidden text-white">-</div>
            <div className="group-open:hidden flex text-white">+</div>
          </summary>
          <ul className="flex flex-col gap-y-2">
            {item.items.map((subItem) => (
              <li key={subItem.id}>
                <Link underlineHover={true} color="gray" className="text-xs">
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
};

export default ItemsPhone;
