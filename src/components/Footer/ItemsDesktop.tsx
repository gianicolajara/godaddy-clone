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

const ItemsDesktop = ({ data }: Props) => {
  return (
    <ul className="w-full xl:flex gap-x-4 justify-between hidden">
      {data.map((item) => (
        <li key={item.id} className="">
          <Para color="white" className="mb-5" size="sm">
            {item.title}
          </Para>
          <ul className="flex flex-col gap-y-2">
            {item.items.map((subItem) => (
              <li key={subItem.id}>
                <Link underlineHover={true} color="gray" className="text-xs">
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ItemsDesktop;
